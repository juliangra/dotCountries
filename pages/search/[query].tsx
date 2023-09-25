import { GetServerSideProps } from 'next'
import React from 'react'
import CountryView from '../../components/CountryView/CountryView'
import { Country } from '../../types'

interface searchProps {
  foundResult: boolean
  input: string
  data: Array<Country>
  wikiExcerpt: string
}

const search: React.FC<searchProps> = ({ foundResult, input, data, wikiExcerpt }) => {
  if (foundResult) return <CountryView country={data[0]} excerpt={wikiExcerpt} />

  return (
    <>
      <h1>Results for: {input}</h1>
      <p>No results found</p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.query as string

  let res = await fetch(`http://localhost:3000/api/${encodeURIComponent(query)}`)
  let data = await res.json()

  data = data.data

  if (!data) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }

  const countryName = data[0]?.name.common

  const wiki = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(countryName)}`
  )

  const wikiResponse = await wiki.json()

  const maxLength = 300
  let wikiExcerpt = wikiResponse.extract.substr(0, maxLength)

  wikiExcerpt = wikiExcerpt.substr(
    0,
    Math.min(wikiExcerpt.length, wikiExcerpt.lastIndexOf('.') + 1)
  )

  return {
    props: {
      foundResult: true,
      input: query,
      data: data,
      wikiExcerpt: wikiExcerpt
    }
  }
}

export default search
