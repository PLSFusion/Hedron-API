const ethers  = require('ethers');
const express = require('express');

const hsi       = require('./requests/hsi');
const tokenList = require('./requests/tokenList');

const {hsimAddr}  = require('./abi/hsim');
const {hexLaunch} = require('./abi/hex');

const {infuraProject} = require('./secrets');

const provider = {
  ethereum: new ethers.providers.InfuraProvider('homestead', {
    projectId: infuraProject.id,
    projectSecret: infuraProject.secret
  }),
  pulseChain: new ethers.providers.JsonRpcProvider('https://rpc.v2.testnet.pulsechain.com'),
  pulseChainTestnet: new ethers.providers.JsonRpcProvider('https://rpc.v2.testnet.pulsechain.com')
};

let router = express.Router();

router.get('/:chainId(\\d+)/hsi/:tokenId(\\d+$)', async (req, res) => {
  let response;
  
  switch (req.params.chainId) {
  case '1':
    response = await hsi.get(
      provider.ethereum,
      hsimAddr.ethereum,
      hexLaunch.ethereum,
      req.params.tokenId
    );
    break;
  case '369':
    response = await hsi.get(
      provider.pulseChain,
      hsimAddr.pulsechain,
      hexLaunch.pulsechain,
      req.params.tokenId
    );
    break;
  case '940':
    response = await hsi.get(
      provider.pulseChainTestnet,
      hsimAddr.pulsechaintestnet,
      hexLaunch.pulsechaintestnet,
      req.params.tokenId
    );
    break;
  default:
    response = {
      error: 'invalid chain id',
    };
  }
  res.json(response);
});

router.get('/token-list', async (req, res) => {
  res.json(tokenList.get());
});

module.exports = router;