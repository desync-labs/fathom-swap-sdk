import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.XDC]: new Token(ChainId.XDC, '0x951857744785E80e2De051c32EE7b25f9c458C42', 18, 'WXDC', 'Wrapped XDC'),
  [ChainId.AXDC]: new Token(ChainId.AXDC, '0xE99500AB4A413164DA49Af83B9824749059b46ce', 18, 'WXDC', 'Wrapped XDC'),
  [ChainId.SEPOLIA]: new Token(ChainId.SEPOLIA, '0xD0dF82dE051244f04BfF3A8bB1f62E1cD39eED92', 18, 'WETH', 'Wrapped ETH'),
  [ChainId.LISK]: new Token(ChainId.LISK, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped ETH')
}
