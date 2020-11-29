import * as React from 'react'
import { useQuery, gql } from '@apollo/client'
import { common } from '@pkg/common'
import { controller } from '@pkg/controller'
import RME from 'react-magic-element'

const catsQuery = gql`
    query getCats {
        cats {
            id
            name
        }
    }
`

export default () => {
  const { loading, error, data } = useQuery(catsQuery)
  if (loading) {
    return <>LOADING</>
  }
  if (error) {
    return <>ERROR</>
  }

  const renderData = () => {
    if (data) {
      return data.cats.map((d: any, idx: number) => {
        return (
          <RME key={idx}>{d.name}</RME>
        )
      })
    }
  }
  return (
    <div>
      {/*abc: {abc}*/}

      {renderData()}
      <br />
      <b>{common}</b>
      <br />
      <b> {controller}</b>
    </div>
  )
}
