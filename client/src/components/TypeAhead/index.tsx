
import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { SEARCH_COUNTRY, SearchCountry, SearchCountryVariables } from '../../queries';

interface IProps {
  onSubmit: Function
}
const CountryItem = (props: IProps) => {
  const { onSubmit } = props;
  const [ needle, setNeedle ] = useState<string>('')
  const { loading, error, data } = useQuery<SearchCountry, SearchCountryVariables>(
    SEARCH_COUNTRY,
    {
      variables: { text: needle }
    }
  );
    // TODO: Add spinner and failsafe
  return (
    <AutoComplete
      onSearch={val => setNeedle(val) }
      onSelect={selected => {
        onSubmit(selected)
        setNeedle('')
      }}
      value={needle}
      dataSource={data ? data.searchResults.map(result => result.name) : []}
      placeholder="Add a new country"
    />
  )
}

export default CountryItem;
