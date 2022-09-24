import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,

  XDC = 50,
  AXDC = 51
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
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.ROPSTEN]: '0x49Ee816e49f7585AcC48eCB476AE107F3775e270',
  [ChainId.RINKEBY]: '0x4f5e2Bd866FAB75A22d37Fd86EbDB4a768df54ce',
  [ChainId.GOERLI]: '0xcaef5a76Caa3C7aCe06E5596b0a7c3d1e088c0fe',
  [ChainId.KOVAN]: '0x7a4303D6a53d49f7E8CA473628FAec213A1dd0D0',
  [ChainId.XDC]: '0x0000000000000000000000000000000000000000',
  [ChainId.AXDC]: '0x69310bcBcC35b3d5C2b62C72E75dA68d58FDafC9'
}

export const INIT_CODE_HASH = '0xaeff8cabe3f5625e907ae2129f8383342f80c4c752d251cbfb0058a45feaebf7'

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
