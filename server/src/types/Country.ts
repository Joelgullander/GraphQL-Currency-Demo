export interface Country {
    name: string
    population: number
    currencies: Currency[]
}

export type Currency = {
  code: string
  name: string
  symbol: string
}
