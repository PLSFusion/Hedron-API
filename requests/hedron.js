const ethers = require('ethers');

const {hedronABI}  = require('../abi/hedron');

async function getTotalSupply(provider, contract) {
  const hedron = new ethers.Contract(contract, hedronABI, provider);

  let totalSupply = await hedron.totalSupply();

  return ethers.utils.formatUnits(totalSupply, 9);
}

async function getCirculatingSupply(provider, contract) {
  const hedron = new ethers.Contract(contract, hedronABI, provider);

  // exclude balance of source address
  let saBalance = await hedron.balanceOf('0x9d73ced2e36c89e5d167151809eee218a189f801');
  let totalSupply = await hedron.totalSupply();
  
  return ethers.utils.formatUnits(totalSupply.sub(saBalance), 9);
}

exports.getTotalSupply = getTotalSupply;
exports.getCirculatingSupply = getCirculatingSupply;