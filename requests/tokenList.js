function get () {
  return {
    name: 'Semina Tempus List',
    timestamp: '2022-02-12T00:00:00.000Z',
    version: {
      major: 1,
      minor: 0,
      patch: 0
    },
    tags: {},
    logoURI: 'https://hedron.pro/img/token/hdrn/256.png',
    keywords: [
      'HEX',
      'Hedron',
      'HSI'
    ],
    tokens: [
      {
        chainId: 1,
        address: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
        name: 'HEX',
        symbol: 'HEX',
        decimals: 8,
        logoURI: 'https://hedron.pro/img/token/hex/32.png'
      },
      {
        chainId: 1,
        address: '0x3819f64f282bf135d62168C1e513280dAF905e06',
        name: 'Hedron',
        symbol: 'HDRN',
        decimals: 9,
        logoURI: 'https://hedron.pro/img/token/hdrn/32.png'
      }
    ]
  };
}

exports.get = get;