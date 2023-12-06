'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { Converter } from '@/app/components/Converter/Converter'
import { Header } from '@/app/components/Header/Header'
import { Separator } from '@/app/components/Separator/Separator'
import { NBU_API_URL, PB_API_URL } from '@/app/constants'

export interface CurrencyRate {
  ccy: string
  base_ccy: string
  buy: string
  sale: string
}

export default function Home() {
  const [currencyRates, setCurrencyRates] = useState<CurrencyRate[]>([])

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get('/api/privatbank')
        setCurrencyRates(response.data)
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
