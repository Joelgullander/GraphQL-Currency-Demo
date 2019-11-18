import React, { useState, Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Row, InputNumber, Spin, Icon } from 'antd'
import {
    GET_CURRENCIES,
    CurrencyResponse,
    CurrencyResponseVariables,
} from '../queries'
import CountryItem from '../components/CountryItem'
import TypeAhead from '../components/TypeAhead'
import Config from '../config'

const StartPage = () => {
    const [valueToBeConverted, setValueToBeConverted] = useState<number>(100)
    const [countries, setCountry] = useState<string[]>(Config.INITIAL_COUNTRIES)

    // Fetches all currencies upon first render with a defined currency
    const { loading, error, data } = useQuery<CurrencyResponse, CurrencyResponseVariables>(GET_CURRENCIES, {
        variables: { currency: Config.DEFAULT_CURRENCY },
    })

    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '40px',
                }}
            >
                <Icon type="loading" style={{ fontSize: 54 }} spin />
            </div>
        )
    }

    return (
        <div>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16} type={'flex'}>
                    <Fragment>
                        {countries.map((country, index) => (
                            <CountryItem
                                key={country + index}
                                name={country}
                                valueToBeConverted={valueToBeConverted}
                                currencyRates={data}
                                onRemove={() =>
                                    setCountry(
                                        countries.filter(c => c !== country)
                                    )
                                }
                            />
                        ))}
                    </Fragment>
                </Row>
            </div>
            <div
                style={{
                    background: '#ECECEC',
                    padding: '30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <TypeAhead
                    onSubmit={(value: string) =>
                        setCountry([...countries, value])
                    }
                />
                <InputNumber
                    formatter={value =>
                        `SEK ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                    parser={value => {
                        if (!value) {
                            return ''
                        }
                        return value.replace(/\SEK\s?|(,*)/g, '')
                    }}
                    value={valueToBeConverted}
                    onChange={value => setValueToBeConverted(value || 0)}
                    style={{ width: '200px' }}
                />
            </div>
        </div>
    )
}

export default StartPage
