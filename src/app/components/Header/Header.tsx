'use client'
import React from 'react'

import { ICurrencyRate } from '@/app/page'

interface Props {
  currencyRates: ICurrencyRate[]
}

export const Header: React.FC<Props> = ({ currencyRates }) => {
  return (
    <header className="container mx-auto mb-2 p-2">
      <div>
        <h2 className="mb-2 text-3xl">Курсом НБУ на сьогодні встановлено:</h2>
        {currencyRates.map(({ cc, rate }) => (
          <p
            className="text-2xl"
            key={cc}
          >
            {cc}: {rate}
          </p>
        ))}
      </div>
    </header>
  )
}
