const ethers = require('ethers');

const {hsiABI}  = require('../abi/hsi');
const {hsimABI} = require('../abi/hsim');

async function get(provider, contract, hexLaunch, tokenId,) {
  const hsim = new ethers.Contract(contract, hsimABI, provider);
  const hsiAddr = await hsim.hsiToken(tokenId);
  
  if (hsiAddr != ethers.constants.AddressZero) {
    const hsi = new ethers.Contract(hsiAddr, hsiABI, provider);
    const share = await hsi.share();
    const stake = await hsi.stakeDataFetch();
  
    let now = new Date();
    let timeDelta = now.getTime() - hexLaunch.getTime();
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
          value: ((share.stake.lockedDay * 86400) + (hexLaunch.getTime() / 1000))
        }
      ]
    };
  }
  
  return {
    error: 'invalid token id',
  };
}

exports.get = get;