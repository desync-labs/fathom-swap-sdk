import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  XDC = 50,
  AXDC = 51,
  SEPOLIA = 11155111
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [key: string]: string } = {
  [ChainId.XDC]: '0x9fAb572F75008A42c6aF80b36Ab20C76a38ABc4B',
  [ChainId.AXDC]: '0xe011699276055eDAd1E3fd2F98667068f7c8814A',
  [ChainId.SEPOLIA]: '0x97989DFf5568F450970d404770f1975056834F93'
}

export const INIT_CODE_HASH = '0xa6d23746864049fd29713adbbf145eeecdddd2f9a91be053c057394dd5d7d9ad'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
