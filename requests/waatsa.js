const ethers = require('ethers');

const {icosaABI}  = require('../abi/icosa');

async function get(provider, contract, tokenId,) {
  const icosa = new ethers.Contract(contract, icosaABI, provider);
  stake = await icosa.nftStakes(tokenId);

  if (stake.isActive) {
    let stakePoints = "0 Points";

    if (stake.stakePoints.gte(1000000000000)) {
      stakePoints = String(Math.floor(ethers.utils.formatUnits(stake.stakePoints, 10)) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' T-Points'
    } else if (stake.stakePoints.gte(1000000000)) {
      stakePoints = String(Math.floor(ethers.utils.formatUnits(stake.stakePoints, 7)) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' B-Points'
    } else if (stake.stakePoints.gte(1000000)) {
      stakePoints = String(Math.floor(ethers.utils.formatUnits(stake.stakePoints, 4)) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' M-Points'
    } else if (stake.stakePoints.gte(1000000)) {
      stakePoints = String(Math.floor(ethers.utils.formatUnits(stake.stakePoints, 1)) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' K-Points'
    } else {
      stakePoints = String(stake.stakePoints).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' Points'
    }

    return {
      description: 'This NFT represents a stake within the Icosa protocol. The owner of this NFT may redeem this NFT at any time.',
      external_url: 'https://app.icosa.pro/apps/icosa',
      image: 'https://app.icosa.pro/tokenimgs/placeholder.jpg',
      // image_data: '',
      // background_color: '',
      // animation_url: 'https://hedron.pro/img/token/hsi/nft.mp4',
      // youtube_url: '',
      name: 'WAATSA - ' + stakePoints,
      attributes : [
        {
          key: 'Stake Points',
          trait_type: 'Stake Points',
          value: stakePoints
        },
      ]
    };

  }

  return {
    error: 'invalid token id',
  };
}

exports.get = get;