import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_BOAT } from '../../queries/index'

import { List } from 'antd'


const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const PersonBoat = () => {
  const styles = getStyles()

  const { loading, error, data } = useQuery(GET_BOAT)



  if (loading) return 'Loading...'
  if (error) return `Errror! ${error.message}`
  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.personBoat.map(({ id, year, make,  model, price , personId}) => (
        <List.Item key={id}>
          {/* <Boat key={id} id={id} year={year} make={make} model={model} price={price} personId={personId} /> */}
        </List.Item>
      ))}
    </List>
  )
}

export default PersonBoat