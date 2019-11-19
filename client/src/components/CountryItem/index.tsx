import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Card, Skeleton, Col, Button } from 'antd'
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

const CountryItem = ({ name, valueToBeConverted, currencyRates, onRemove }: IProps) => {
    const { loading, error, data, refetch } = useQuery<Country, CountryVariables>(
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
                    {error &&
                      <div>
                        <Button type="danger" shape="round" loading={loading} onClick={() => refetch()}>
                          Retry
                        </Button>
                      </div>
                    }
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
