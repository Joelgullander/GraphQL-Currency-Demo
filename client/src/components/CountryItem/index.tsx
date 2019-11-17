import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Card, Skeleton, Col } from 'antd'
import {
    GET_COUNTRY,
    Country,
    CountryVariables,
    CurrencyResponse,
} from '../../queries'
import CountryMeta from './CountryMeta';

interface IProps {
    name: string
    valueToBeConverted?: number
    currencyRates?: CurrencyResponse
    onRemove: Function
}

const CountryItem = (props: IProps) => {
    const { name, valueToBeConverted, currencyRates, onRemove } = props
    const { loading, error, data } = useQuery<Country, CountryVariables>(
        GET_COUNTRY,
        {
            variables: { country: name },
        }
    )

    return (
        <Col span={8} style={{ marginBottom: '20px' }}>
            {!data || loading ? (
                <Card style={{ height: '100%' }} title={'Loading...'}>
                    <Skeleton />
                </Card>
            ) : (
                <CountryMeta
                    country={data.country}
                    currencies={currencyRates}
                    valueToBeConverted={valueToBeConverted}
                    onRemove={onRemove}
                />
            )}
        </Col>
    )
}

export default CountryItem
