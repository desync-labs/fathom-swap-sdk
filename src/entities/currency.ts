import JSBI from 'jsbi'

import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The Ether instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'ETHER', 'ETHER')

  /**
   * The XDC instance of the base class `Currency`.
   */
  public static readonly XDC: Currency = new Currency(18, 'XDC', 'XDC')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

const currencies = new Set([Currency.ETHER, Currency.XDC])

const ETHER = Currency.ETHER
const XDC = Currency.XDC

export { ETHER, XDC, currencies }
