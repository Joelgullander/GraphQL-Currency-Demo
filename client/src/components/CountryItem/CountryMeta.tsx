import React from 'react'
import { Card, Icon } from 'antd'
import { Country_country, CurrencyResponse } from '../../queries'
import numberToUnits from '../../lib/numberToUnits'

interface IProps {
    country: Country_country
    currencies?: CurrencyResponse
    valueToBeConverted?: number
    onRemove: Function
}

const CountryMeta = ({ country, currencies, valueToBeConverted, onRemove }: IProps) => {
    const countryCurrency = country.currency ? country.currency.code : null
    const conversionRate = currencies
        ? currencies.currencies.rates.find(
              x => x.identifier === countryCurrency
          )
        : null
    return (
        <Card
            style={{ height: '100%' }}
            title={country.name}
            actions={[
                <Icon type="delete" key="delete" onClick={() => onRemove()} />,
            ]}
            bordered={false}
        >
            {country.population && (
                <h3>Population: {numberToUnits(country.population)} people</h3>
            )}
            {country.currency && (
                <h3>
                    Currency: {country.currency.name} / {country.currency.code}
                </h3>
            )}
            {conversionRate && valueToBeConverted && (
                <h3>
                    Converted:{' '}
                    {(conversionRate.rate * valueToBeConverted).toFixed(2)}{' '}
                    {country.currency.symbol}
                </h3>
            )}
        </Card>
    )
}

export default CountryMeta
