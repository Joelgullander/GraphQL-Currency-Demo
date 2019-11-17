export interface Country {
    name: string
    topLevelDomain: string[]
    alpha2Code: string | null
    alpha3Code: string | null
    callingCodes: number[] | null
    capital: string
    altSpellings: string[]
    region: string | null
    subregion: string | null
    population: number
    latlng: number[]
    demonym: string | null
    area: number | null
    gini: number | null
    timezones: string[] | null
    borders: string[] | null
    nativeName: string
    numericCode: number
    currencies: Currency[]
    languages: Language[]
    flag: string
    regionalBlocs: WorldPart[]
    cioc: string
}

export type Currency = {
  code: string
  name: string
  symbol: string
}
type Language = {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}
type WorldPart = {
  acronym: string
  name: string
  otherAcronyms: string[]
  otherNames: string[]
}
