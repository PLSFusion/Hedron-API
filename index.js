const ethers = require('ethers');
const express = require('express');

const {hsiABI} = require('./abi/hsi');
const {hexLaunch, hexAddr, hexABI} = require('./abi/hex');
const {hsimAddr, hsimABI} = require('./abi/hsim');
const {hedronAddr, hedronABI} = require('./abi/hedron');

const ethereum = new ethers.providers.JsonRpcProvider('https://rpc.v2.testnet.pulsechain.com');
const pulseChain = new ethers.providers.JsonRpcProvider('https://rpc.v2.testnet.pulsechain.com');
const pulseChainTestnet = new ethers.providers.JsonRpcProvider('https://rpc.v2.testnet.pulsechain.com');

let provider;

const app = express(); app.listen(3000, () => {
  console.log('Hedron API Started!');
});

app.get('/:chainid(\\d+)/hsi/:tokenid(\\d+$)', async (req, res, next) => {
  let response;

  switch (req.params.chainid) {
  case '1':
    provider = ethereum;
    response = await getHSI(hsimAddr.ethereum, req.params.tokenid, hexLaunch.ethereum);
    break;
  case '369':
    provider = pulseChain;
    response = await getHSI(hsimAddr.pulsechain, req.params.tokenid, hexLaunch.pulsechain);
    break;
  case '940':
    provider = pulseChainTestnet;
    response = await getHSI(hsimAddr.pulsechaintestnet, req.params.tokenid, hexLaunch.pulsechaintestnet);
    break;
  default:
    response = {
      error: 'invalid chain id',
    };
  }
  res.json(response);
});

async function getHSI(contractAddr, tokenid, hexlaunch) {
  const hsim = new ethers.Contract(contractAddr, hsimABI, provider);
  const hsiAddr = await hsim.hsiToken(tokenid);

  if (hsiAddr != ethers.constants.AddressZero) {
    const hsi = new ethers.Contract(hsiAddr, hsiABI, provider);
    const share = await hsi.share();
    const stake = await hsi.stakeDataFetch();

    let now = new Date();
    let timeDelta = now.getTime() - hexlaunch.getTime();
    let servedDays = timeDelta / (1000 * 3600 * 24);
    servedDays = servedDays - share.stake.lockedDay;
    servedDays = Math.floor(servedDays);

    if (servedDays > share.stake.stakedDays) {
      servedDays = share.stake.stakedDays;
    }

    let mintableDays = servedDays - share.mintedDays;
    let mintableHDRN = share.stake.stakeShares.mul(mintableDays);
    mintableHDRN = mintableHDRN.add(
      mintableHDRN.mul(share.launchBonus).div(10)
    );

    return {
      description: 'This NFT represents a stake within the HEX protocol which has been encapsulated by the Hedron protocol. The owner of this NFT may redeem this NFT for the underlying HEX stake at any time.',
      external_url: 'https://hedron.pro/#/dapp',
      // image: '',
      // image_data: '',
      // background_color: '',
      // animation_url: '',
      // youtube_url: '',
      name: 'HEX Stake - ' + (Math.floor(ethers.utils.formatUnits(share.stake.stakeShares, 10)) / 100) + ' T-Shares - ' + servedDays + ' / ' + share.stake.stakedDays + ' Days Served',
      attributes : [

        {
          trait_type: 'T-Shares',
          value: Math.floor(ethers.utils.formatUnits(share.stake.stakeShares, 10)) / 100
        },
        {
          trait_type: 'HEX Staked',
          value: Math.floor(ethers.utils.formatUnits(stake.stakedHearts, 6)) / 100
        },
        {
          trait_type: 'HDRN Mintable',
          value: Math.floor(ethers.utils.formatUnits(mintableHDRN, 7)) / 100
        },
        {
          display_type: 'boost_percentage',
          trait_type: 'Days Served',
          value: Math.floor((servedDays / share.stake.stakedDays) * 100)
        },
        {
          display_type: 'boost_percentage',
          trait_type: 'HDRN Minted',
          value: Math.floor((share.mintedDays / share.stake.stakedDays) * 100)
        },
        {
          display_type: 'number',
          trait_type: 'Days Staked',
          value: share.stake.stakedDays,
          max_value: 5555
        },
        {
          display_type: 'number',
          trait_type: 'HDRN Launch Bonus',
          value: share.launchBonus / 10,
          max_value: 10
        },
        {
          display_type: 'date',
          trait_type: 'Stake Start',
          value: ((share.stake.lockedDay * 86400) + (hexlaunch.getTime() / 1000))
        }
      ]
    };
  }

  return {
    error: 'invalid token id',
  };
}
