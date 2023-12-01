'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { Converter } from '@/app/components/Converter/Converter'
import { Header } from '@/app/components/Header/Header'
import { Separator } from '@/app/components/Separator/Separator'
import { NBU_API_URL } from '@/app/constants'

export interface ICurrencyRate {
  cc: string
  rate: number
  exchangedate: string
}

export default function Home() {
  const [currencyRates, setCurrencyRates] = useState<ICurrencyRate[]>([])

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(NBU_API_URL)
        const filtered = response.data
          .filter(
            (item: ICurrencyRate) => item.cc === 'USD' || item.cc === 'EUR',
          )
          .map(({ cc, rate, exchangedate }: ICurrencyRate) => ({
            cc,
            rate,
            exchangedate,
          }))

        setCurrencyRates(filtered)
      } catch (error) {
        console.error(error)
      }
    }

    fetchRates()
  }, [])
  return (
    <>
      <Header currencyRates={currencyRates} />
      <Separator />
      <Converter currencyRates={currencyRates} />
    </>
  )
}
