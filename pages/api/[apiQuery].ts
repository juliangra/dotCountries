import type { NextApiRequest, NextApiResponse } from 'next'
import { Country } from '../../types'

type Data = {
  status: number
  message?: string
  data?: Country
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let { apiQuery } = req.query as { apiQuery: string }

  const validCountry = async () => {
    const country = await fetch(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(apiQuery)}`
    )

    const capital = await fetch(
      `https://restcountries.com/v3.1/capital/${encodeURIComponent(apiQuery)}`
    )

    const countryData = await country.json()
    const capitalData = await capital.json()

    if (!countryData.status) return countryData

    if (!capitalData.status) return capitalData

    return null
  }

  const countryData = await validCountry()

  if (countryData != null) return res.status(200).json({ status: 200, data: countryData })

  return res.status(404).json({ status: 404, message: `Could not find "${apiQuery}"` })
}
