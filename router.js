const ethers  = require('ethers');
const express = require('express');

const hedron    = require('./requests/hedron');
const hsi       = require('./requests/hsi');
const tokenList = require('./requests/tokenList');

const {hedronAddr}  = require('./abi/hedron');
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

// HDRN Total Supply
router.get('/:chainId(\\d+)/hdrn/totalSupply', async (req, res) => {
  let response;
  
  switch (req.params.chainId) {
  case '1':
    response = await hedron.getTotalSupply(
      provider.ethereum,
      hedronAddr.ethereum
    );
    break;
  case '369':
    response = await hedron.getTotalSupply(
      provider.pulseChain,
      hedronAddr.pulsechain
    );
    break;
  case '940':
    response = await hedron.getTotalSupply(
      provider.pulseChainTestnet,
      hedronAddr.pulsechaintestnet
    );
    break;
  default:
    response = {
      error: 'invalid chain id',
    };
  }
  res.set('Content-Type', 'text/plain').send(response);
});

// HDRN Circulating Supply
router.get('/:chainId(\\d+)/hdrn/circulatingSupply', async (req, res) => {
  let response;
  
  switch (req.params.chainId) {
  case '1':
    response = await hedron.getCirculatingSupply(
      provider.ethereum,
      hedronAddr.ethereum
    );
    break;
  case '369':
    response = await hedron.getCirculatingSupply(
      provider.pulseChain,
      hedronAddr.pulsechain
    );
    break;
  case '940':
    response = await hedron.getCirculatingSupply(
      provider.pulseChainTestnet,
      hedronAddr.pulsechaintestnet
    );
    break;
  default:
    response = {
      error: 'invalid chain id',
    };
  }
  res.set('Content-Type', 'text/plain').send(response);
});

// HSI Stats
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

// Token list
router.get('/token-list', async (req, res) => {
  res.json(tokenList.get());
});

module.exports = router;