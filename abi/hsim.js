const hsimAddr = {
  ethereum: '0xd1eFD5ffF5E21df5D0f4fa58fFEDCc7315AA3780',
  pulsechain: '0xd1eFD5ffF5E21df5D0f4fa58fFEDCc7315AA3780',
  pulsechaintestnet: '0xD6CcB4Cfb12893d8090ACf4205FEDda604B50691'
};

const hsimABI = [
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'hexAddress',
        'type': 'address'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'approved',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'Approval',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'bool',
        'name': 'approved',
        'type': 'bool'
      }
    ],
    'name': 'ApprovalForAll',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'timestamp',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'hsiTokenId',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'staker',
        'type': 'address'
      }
    ],
    'name': 'HSIDetokenize',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'timestamp',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'staker',
        'type': 'address'
      }
    ],
    'name': 'HSIEnd',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'timestamp',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'staker',
        'type': 'address'
      }
    ],
    'name': 'HSIStart',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'timestamp',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'hsiTokenId',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'staker',
        'type': 'address'
      }
    ],
    'name': 'HSITokenize',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'timestamp',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'oldStaker',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'newStaker',
        'type': 'address'
      }
    ],
    'name': 'HSITransfer',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      },
      {
        'components': [
          {
            'internalType': 'address payable',
            'name': 'account',
            'type': 'address'
          },
          {
            'internalType': 'uint96',
            'name': 'value',
            'type': 'uint96'
          }
        ],
        'indexed': false,
        'internalType': 'struct LibPart.Part[]',
        'name': 'royalties',
        'type': 'tuple[]'
      }
    ],
    'name': 'RoyaltiesSet',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'Transfer',
    'type': 'event'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'getApproved',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'id',
        'type': 'uint256'
      }
    ],
    'name': 'getRaribleV2Royalties',
    'outputs': [
      {
        'components': [
          {
            'internalType': 'address payable',
            'name': 'account',
            'type': 'address'
          },
          {
            'internalType': 'uint96',
            'name': 'value',
            'type': 'uint96'
          }
        ],
        'internalType': 'struct LibPart.Part[]',
        'name': '',
        'type': 'tuple[]'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'hexStakeDetokenize',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      }
    ],
    'name': 'hexStakeEnd',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'length',
        'type': 'uint256'
      }
    ],
    'name': 'hexStakeStart',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      }
    ],
    'name': 'hexStakeTokenize',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      }
    ],
    'name': 'hsiCount',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'hsiLists',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'hsiToken',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'currentHolder',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'newHolder',
        'type': 'address'
      }
    ],
    'name': 'hsiTransfer',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'holder',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      },
      {
        'components': [
          {
            'components': [
              {
                'internalType': 'uint40',
                'name': 'stakeId',
                'type': 'uint40'
              },
              {
                'internalType': 'uint72',
                'name': 'stakeShares',
                'type': 'uint72'
              },
              {
                'internalType': 'uint16',
                'name': 'lockedDay',
                'type': 'uint16'
              },
              {
                'internalType': 'uint16',
                'name': 'stakedDays',
                'type': 'uint16'
              }
            ],
            'internalType': 'struct HEXStakeMinimal',
            'name': '_stake',
            'type': 'tuple'
          },
          {
            'internalType': 'uint256',
            'name': '_mintedDays',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256',
            'name': '_launchBonus',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256',
            'name': '_loanStart',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256',
            'name': '_loanedDays',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256',
            'name': '_interestRate',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256',
            'name': '_paymentsMade',
            'type': 'uint256'
          },
          {
            'internalType': 'bool',
            'name': '_isLoaned',
            'type': 'bool'
          }
        ],
        'internalType': 'struct ShareCache',
        'name': 'share',
        'type': 'tuple'
      }
    ],
    'name': 'hsiUpdate',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      }
    ],
    'name': 'isApprovedForAll',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'name',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'pure',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'ownerOf',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'salePrice',
        'type': 'uint256'
      }
    ],
    'name': 'royaltyInfo',
    'outputs': [
      {
        'internalType': 'address',
        'name': 'receiver',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'royaltyAmount',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'safeTransferFrom',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes',
        'name': '_data',
        'type': 'bytes'
      }
    ],
    'name': 'safeTransferFrom',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
      {
        'internalType': 'bool',
        'name': 'approved',
        'type': 'bool'
      }
    ],
    'name': 'setApprovalForAll',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      }
    ],
    'name': 'stakeCount',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      }
    ],
    'name': 'stakeLists',
    'outputs': [
      {
        'components': [
          {
            'internalType': 'uint40',
            'name': 'stakeId',
            'type': 'uint40'
          },
          {
            'internalType': 'uint72',
            'name': 'stakedHearts',
            'type': 'uint72'
          },
          {
            'internalType': 'uint72',
            'name': 'stakeShares',
            'type': 'uint72'
          },
          {
            'internalType': 'uint16',
            'name': 'lockedDay',
            'type': 'uint16'
          },
          {
            'internalType': 'uint16',
            'name': 'stakedDays',
            'type': 'uint16'
          },
          {
            'internalType': 'uint16',
            'name': 'unlockedDay',
            'type': 'uint16'
          },
          {
            'internalType': 'bool',
            'name': 'isAutoStake',
            'type': 'bool'
          }
        ],
        'internalType': 'struct HEXStake',
        'name': '',
        'type': 'tuple'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'bytes4',
        'name': 'interfaceId',
        'type': 'bytes4'
      }
    ],
    'name': 'supportsInterface',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'symbol',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'index',
        'type': 'uint256'
      }
    ],
    'name': 'tokenByIndex',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'index',
        'type': 'uint256'
      }
    ],
    'name': 'tokenOfOwnerByIndex',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'tokenURI',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'whoami',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  }
];
  
module.exports = {
  hsimAddr: hsimAddr,
  hsimABI: hsimABI
};