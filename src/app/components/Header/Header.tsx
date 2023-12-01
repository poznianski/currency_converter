'use client'
import React from 'react'

import { ICurrencyRate } from '@/app/page'

interface Props {
  currencyRates: ICurrencyRate[]
}

export const Header: React.FC<Props> = ({ currencyRates }) => {
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
