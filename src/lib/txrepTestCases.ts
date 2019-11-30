type TxRepTestCase = {
  description: string;
  xdr: string;
  txrep: string;
};

export const testCases: TxRepTestCase[] = [];

const create: TxRepTestCase = {
  description: 'createAccount',
  xdr: `AAAAAKjbIbAJn+ysBWgp/jsZEx4ccbB3oicFelkopFq7rB38AAAAZAAE4pgAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAAAqNshsAmf7KwFaCn+OxkTHhxxsHeiJwV6WSikWrusHfwAAAAAAAAAAEBfNu3YzyLvv4ByuYW2pMAVUcNN04wTesjUDUAs0fe0AAAAAAda70AAAAAAAAAAAA==`,
  txrep: `
tx.sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.fee: 100
tx.seqNum: 1375042369748993
tx.timeBounds._present: true
tx.timeBounds.minTime: 0
tx.timeBounds.maxTime: 0
tx.memo.type: MEMO_NONE
tx.operations.len: 1
tx.operations[0].sourceAccount._present: true
tx.operations[0].sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.operations[0].body.type: CREATE_ACCOUNT
tx.operations[0].body.createAccountOp.destination: GBAF6NXN3DHSF357QBZLTBNWUTABKUODJXJYYE32ZDKA2QBM2H33IK6O
tx.operations[0].body.createAccountOp.startingBalance: 123400000
tx.ext.v: 0
signatures.len: 0
`
};

testCases.push(create);

const payment: TxRepTestCase = {
  description: 'payment',
  xdr: `AAAAACsWS5BDhC5BjpKQtznHFJ3CkU6+XtWopW+t+Q9KoH7QAAAAZAClKY0AAAABAAAAAQAAAABbicmAAAAAAF1q/QAAAAABAAAAFkVuam95IHRoaXMgdHJhbnNhY3Rpb24AAAAAAAEAAAAAAAAAAQAAAABAXzbt2M8i77+AcrmFtqTAFVHDTdOME3rI1A1ALNH3tAAAAAFVU0QAAAAAADJSVDIhkp9uz61Ra68rs3ScZIIgjT8ajX8Kkdc1be0LAAAAABfXk6AAAAAAAAAAAUqgftAAAABA3vtPH60cJ5MntVrxhP3N33P096jLQOflNKcdc6BRJLo2nbem0xtHyv0RhZIkaoV15sJJq5TsN2je22KSIhzlDA==`,
  txrep: `
tx.sourceAccount: GAVRMS4QIOCC4QMOSKILOOOHCSO4FEKOXZPNLKFFN6W7SD2KUB7NBPLN
tx.fee: 100
tx.seqNum: 46489056724385793
tx.timeBounds._present: true
tx.timeBounds.minTime: 1535756672
tx.timeBounds.maxTime: 1567292672
tx.memo.type: MEMO_TEXT
tx.memo.text: "Enjoy this transaction"
tx.operations.len: 1
tx.operations[0].sourceAccount._present: false
tx.operations[0].body.type: PAYMENT
tx.operations[0].body.paymentOp.destination: GBAF6NXN3DHSF357QBZLTBNWUTABKUODJXJYYE32ZDKA2QBM2H33IK6O
tx.operations[0].body.paymentOp.asset: USD:GAZFEVBSEGJJ63WPVVIWXLZLWN2JYZECECGT6GUNP4FJDVZVNXWQWMYI
tx.operations[0].body.paymentOp.amount: 400004000
tx.ext.v: 0
signatures.len: 1
signatures[0].hint: 4aa07ed0
signatures[0].signature: defb4f1fad1c279327b55af184fdcddf73f4f7a8cb40e7e534a71d73a05124ba369db7a6d31b47cafd118592246a8575e6c249ab94ec3768dedb6292221ce50c
`
};

testCases.push(payment);

const pathPaymentStrictReceiveNoPath: TxRepTestCase = {
  description: 'pathPaymentStrictReceive (no path)',
  xdr: `AAAAAKjbIbAJn+ysBWgp/jsZEx4ccbB3oicFelkopFq7rB38AAAAZAAE4pgAAAABAAAAAAAAAAAAAAABAAAAAAAAAAIAAAACU1RFTExBUgAAAAAAAAAAAKjbIbAJn+ysBWgp/jsZEx4ccbB3oicFelkopFq7rB38AAAAADuaygAAAAAAqNshsAmf7KwFaCn+OxkTHhxxsHeiJwV6WSikWrusHfwAAAAAAAAAAWWgvAAAAAAAAAAAAAAAAAA=`,
  txrep: `
tx.sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.fee: 100
tx.seqNum: 1375042369748993
tx.timeBounds._present: false
tx.memo.type: MEMO_NONE
tx.operations.len: 1
tx.operations[0].sourceAccount._present: false
tx.operations[0].body.type: PATH_PAYMENT_STRICT_RECEIVE
tx.operations[0].body.pathPaymentStrictReceiveOp.sendAsset: STELLAR:GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.operations[0].body.pathPaymentStrictReceiveOp.sendMax: 1000000000
tx.operations[0].body.pathPaymentStrictReceiveOp.destination: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.operations[0].body.pathPaymentStrictReceiveOp.destAsset: XLM
tx.operations[0].body.pathPaymentStrictReceiveOp.destAmount: 6000000000
tx.operations[0].body.pathPaymentStrictReceiveOp.path.len: 0
tx.ext.v: 0
signatures.len: 0
  `
};

testCases.push(pathPaymentStrictReceiveNoPath);

const pathPaymentStrictReceiveWithPath = {
  description: 'pathPaymentStrictReceive (with path)',
  xdr: `AAAAAKjbIbAJn+ysBWgp/jsZEx4ccbB3oicFelkopFq7rB38AAAAZAAE4pgAAAABAAAAAAAAAAAAAAABAAAAAAAAAAIAAAACU1RFTExBUgAAAAAAAAAAAKjbIbAJn+ysBWgp/jsZEx4ccbB3oicFelkopFq7rB38AAAAADuaygAAAAAAqNshsAmf7KwFaCn+OxkTHhxxsHeiJwV6WSikWrusHfwAAAAAAAAAAWWgvAAAAAACAAAAAAAAAAFVU0QAAAAAAEBfNu3YzyLvv4ByuYW2pMAVUcNN04wTesjUDUAs0fe0AAAAAAAAAAA=`,
  txrep: `
tx.sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.fee: 100
tx.seqNum: 1375042369748993
tx.timeBounds._present: false
tx.memo.type: MEMO_NONE
tx.operations.len: 1
tx.operations[0].sourceAccount._present: false
tx.operations[0].body.type: PATH_PAYMENT_STRICT_RECEIVE
tx.operations[0].body.pathPaymentStrictReceiveOp.sendAsset: STELLAR:GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.operations[0].body.pathPaymentStrictReceiveOp.sendMax: 1000000000
tx.operations[0].body.pathPaymentStrictReceiveOp.destination: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.operations[0].body.pathPaymentStrictReceiveOp.destAsset: XLM
tx.operations[0].body.pathPaymentStrictReceiveOp.destAmount: 6000000000
tx.operations[0].body.pathPaymentStrictReceiveOp.path.len: 2
tx.operations[0].body.pathPaymentStrictReceiveOp.path[0]: XLM
tx.operations[0].body.pathPaymentStrictReceiveOp.path[1]: USD:GBAF6NXN3DHSF357QBZLTBNWUTABKUODJXJYYE32ZDKA2QBM2H33IK6O
tx.ext.v: 0
signatures.len: 0
`
};

testCases.push(pathPaymentStrictReceiveWithPath);

const manageSellOffer = {
  description: 'manageSellOffer',
  xdr:
    'AAAAAKjbIbAJn+ysBWgp/jsZEx4ccbB3oicFelkopFq7rB38AAAAZAAE4pgAAAABAAAAAAAAAAAAAAABAAAAAQAAAACo2yGwCZ/srAVoKf47GRMeHHGwd6InBXpZKKRau6wd/AAAAAMAAAACU1RFTExBUgAAAAAAAAAAAEBfNu3YzyLvv4ByuYW2pMAVUcNN04wTesjUDUAs0fe0AAAAAVVTRAAAAAAAQF827djPIu+/gHK5hbakwBVRw03TjBN6yNQNQCzR97QAAAAAO5rKAAAAAAQAAAABAAAAAAAAAZ4AAAAAAAAAAA==',
  txrep: `
tx.sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.fee: 100
tx.seqNum: 1375042369748993
tx.timeBounds._present: false
tx.memo.type: MEMO_NONE
tx.operations.len: 1
tx.operations[0].sourceAccount._present: true
tx.operations[0].sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.operations[0].body.type: MANAGE_SELL_OFFER
tx.operations[0].body.manageSellOfferOp.selling: STELLAR:GBAF6NXN3DHSF357QBZLTBNWUTABKUODJXJYYE32ZDKA2QBM2H33IK6O
tx.operations[0].body.manageSellOfferOp.buying: USD:GBAF6NXN3DHSF357QBZLTBNWUTABKUODJXJYYE32ZDKA2QBM2H33IK6O
tx.operations[0].body.manageSellOfferOp.amount: 1000000000
tx.operations[0].body.manageSellOfferOp.price.n: 4
tx.operations[0].body.manageSellOfferOp.price.d: 1
tx.operations[0].body.manageSellOfferOp.offerID: 414
tx.ext.v: 0
signatures.len: 0`
};

testCases.push(manageSellOffer);

const createPassiveSellOffer = {
  description: 'createPassiveSellOffer',
  xdr:
    'AAAAAKjbIbAJn+ysBWgp/jsZEx4ccbB3oicFelkopFq7rB38AAAAZAAE4pgAAAABAAAAAAAAAAAAAAABAAAAAQAAAACo2yGwCZ/srAVoKf47GRMeHHGwd6InBXpZKKRau6wd/AAAAAQAAAAAAAAAAAAAAABJUE+AAAAAAQAAAAoAAAAAAAAAAA==',
  txrep: `
tx.sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.fee: 100
tx.seqNum: 1375042369748993
tx.timeBounds._present: false
tx.memo.type: MEMO_NONE
tx.operations.len: 1
tx.operations[0].sourceAccount._present: true
tx.operations[0].sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.operations[0].body.type: CREATE_PASSIVE_SELL_OFFER
tx.operations[0].body.createPassiveSellOfferOp.selling: XLM
tx.operations[0].body.createPassiveSellOfferOp.buying: XLM
tx.operations[0].body.createPassiveSellOfferOp.amount: 1230000000
tx.operations[0].body.createPassiveSellOfferOp.price.n: 1
tx.operations[0].body.createPassiveSellOfferOp.price.d: 10
tx.ext.v: 0
signatures.len: 0`
};

testCases.push(createPassiveSellOffer);

const setOptions = {
  description: 'setOptions',
  xdr:
    'AAAAAKjbIbAJn+ysBWgp/jsZEx4ccbB3oicFelkopFq7rB38AAAAZAAE4pgAAAABAAAAAAAAAAAAAAABAAAAAAAAAAUAAAABAAAAAKjbIbAJn+ysBWgp/jsZEx4ccbB3oicFelkopFq7rB38AAAAAQAAAAMAAAABAAAABwAAAAEAAAABAAAAAQAAAAIAAAABAAAAAwAAAAEAAAAEAAAAAQAAAA9zdGVsbGFyZ3VhcmQubWUAAAAAAQAAAACo2yGwCZ/srAVoKf47GRMeHHGwd6InBXpZKKRau6wd/AAAAAUAAAAAAAAAAA==',
  txrep: `
tx.sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.fee: 100
tx.seqNum: 1375042369748993
tx.timeBounds._present: false
tx.memo.type: MEMO_NONE
tx.operations.len: 1
tx.operations[0].sourceAccount._present: false
tx.operations[0].body.type: SET_OPTIONS
tx.operations[0].body.setOptionsOp.inflationDest._present: true
tx.operations[0].body.setOptionsOp.inflationDest: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.operations[0].body.setOptionsOp.clearFlags._present: true
tx.operations[0].body.setOptionsOp.clearFlags: 3
tx.operations[0].body.setOptionsOp.setFlags._present: true
tx.operations[0].body.setOptionsOp.setFlags: 7
tx.operations[0].body.setOptionsOp.masterWeight._present: true
tx.operations[0].body.setOptionsOp.masterWeight: 1
tx.operations[0].body.setOptionsOp.lowThreshold._present: true
tx.operations[0].body.setOptionsOp.lowThreshold: 2
tx.operations[0].body.setOptionsOp.medThreshold._present: true
tx.operations[0].body.setOptionsOp.medThreshold: 3
tx.operations[0].body.setOptionsOp.highThreshold._present: true
tx.operations[0].body.setOptionsOp.highThreshold: 4
tx.operations[0].body.setOptionsOp.homeDomain._present: true
tx.operations[0].body.setOptionsOp.homeDomain: "stellarguard.me"
tx.operations[0].body.setOptionsOp.signer._present: true
tx.operations[0].body.setOptionsOp.signer.key: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.operations[0].body.setOptionsOp.signer.weight: 5
tx.ext.v: 0
signatures.len: 0
`
};

testCases.push(setOptions);

const setOptionsSha256Hash = {
  description: 'setOptions sha256Hash',
  xdr: `AAAAAKjbIbAJn+ysBWgp/jsZEx4ccbB3oicFelkopFq7rB38AAAAZAAE4pgAAAABAAAAAAAAAAAAAAABAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAACkQMmldKxavDs6MmhFzaCpLp7nYnszI84tNc8il9QypsAAAAAAAAAAAAAAAA=`,
  txrep: `
tx.sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.fee: 100
tx.seqNum: 1375042369748993
tx.timeBounds._present: false
tx.memo.type: MEMO_NONE
tx.operations.len: 1
tx.operations[0].sourceAccount._present: false
tx.operations[0].body.type: SET_OPTIONS
tx.operations[0].body.setOptionsOp.inflationDest._present: false
tx.operations[0].body.setOptionsOp.clearFlags._present: false
tx.operations[0].body.setOptionsOp.setFlags._present: false
tx.operations[0].body.setOptionsOp.masterWeight._present: false
tx.operations[0].body.setOptionsOp.lowThreshold._present: false
tx.operations[0].body.setOptionsOp.medThreshold._present: false
tx.operations[0].body.setOptionsOp.highThreshold._present: false
tx.operations[0].body.setOptionsOp.homeDomain._present: false
tx.operations[0].body.setOptionsOp.signer._present: true
tx.operations[0].body.setOptionsOp.signer.key: XCIQGJUV2KYWV4HM5DE2CFZWQKSLU645RHWMZDZYWTLTZCS7KDFJW3XV
tx.operations[0].body.setOptionsOp.signer.weight: 0
tx.ext.v: 0
signatures.len: 0`
};

testCases.push(setOptionsSha256Hash);

const setOptionsPreAuthTx = {
  description: 'setOptions preAuthTx',
  xdr: `AAAAAKjbIbAJn+ysBWgp/jsZEx4ccbB3oicFelkopFq7rB38AAAAZAAE4pgAAAABAAAAAAAAAAAAAAABAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABkQMmldKxavDs6MmhFzaCpLp7nYnszI84tNc8il9QypsAAAAAAAAAAAAAAAA=`,
  txrep: `
tx.sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.fee: 100
tx.seqNum: 1375042369748993
tx.timeBounds._present: false
tx.memo.type: MEMO_NONE
tx.operations.len: 1
tx.operations[0].sourceAccount._present: false
tx.operations[0].body.type: SET_OPTIONS
tx.operations[0].body.setOptionsOp.inflationDest._present: false
tx.operations[0].body.setOptionsOp.clearFlags._present: false
tx.operations[0].body.setOptionsOp.setFlags._present: false
tx.operations[0].body.setOptionsOp.masterWeight._present: false
tx.operations[0].body.setOptionsOp.lowThreshold._present: false
tx.operations[0].body.setOptionsOp.medThreshold._present: false
tx.operations[0].body.setOptionsOp.highThreshold._present: false
tx.operations[0].body.setOptionsOp.homeDomain._present: false
tx.operations[0].body.setOptionsOp.signer._present: true
tx.operations[0].body.setOptionsOp.signer.key: TCIQGJUV2KYWV4HM5DE2CFZWQKSLU645RHWMZDZYWTLTZCS7KDFJX7SM
tx.operations[0].body.setOptionsOp.signer.weight: 0
tx.ext.v: 0
signatures.len: 0
`
};

testCases.push(setOptionsPreAuthTx);

const changeTrust = {
  description: 'changeTrust',
  xdr: `AAAAAKjbIbAJn+ysBWgp/jsZEx4ccbB3oicFelkopFq7rB38AAAAZAAE4pgAAAABAAAAAAAAAAAAAAABAAAAAQAAAACo2yGwCZ/srAVoKf47GRMeHHGwd6InBXpZKKRau6wd/AAAAAYAAAABVVNEAAAAAACo2yGwCZ/srAVoKf47GRMeHHGwd6InBXpZKKRau6wd/AAAABdIdugAAAAAAAAAAAA=`,
  txrep: `
tx.sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.fee: 100
tx.seqNum: 1375042369748993
tx.timeBounds._present: false
tx.memo.type: MEMO_NONE
tx.operations.len: 1
tx.operations[0].sourceAccount._present: true
tx.operations[0].sourceAccount: GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.operations[0].body.type: CHANGE_TRUST
tx.operations[0].body.changeTrustOp.line: USD:GCUNWINQBGP6ZLAFNAU74OYZCMPBY4NQO6RCOBL2LEUKIWV3VQO7YOBF
tx.operations[0].body.changeTrustOp.limit: 100000000000
tx.ext.v: 0
signatures.len: 0
`
};

testCases.push(changeTrust);