'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { NBU_API_URL } from '@/app/constants'

interface ICurrencyRate {
  cc: string
  rate: number
  exchangedate: string
}

export const Header: React.FC = () => {
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
    <header className="container mx-auto p-2">
      <div>
        <h2>Курсом НБУ на сьогодні встановлено:</h2>
        {currencyRates.map(({ cc, rate }) => (
          <p key={cc}>
            {cc}: {rate}
          </p>
        ))}
      </div>
    </header>
  )
}
