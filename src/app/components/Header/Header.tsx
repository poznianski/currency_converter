'use client'
import React from 'react'

import { CurrencyRate } from '@/app/page'

interface Props {
  currencyRates: CurrencyRate[]
}

export const Header: React.FC<Props> = ({ currencyRates }) => {
  return (
    <header className="container mx-auto mb-2 p-2">
      <div>
        <h2 className="mb-4  text-center text-3xl">
          Курсом ПриватБанку на сьогодні встановлено:
        </h2>

        <div className="flex justify-between gap-4 p-2">
          <div>
            <h3 className="mb-2 text-center text-3xl">Продаж</h3>
            {currencyRates.map(({ ccy, buy }) => (
              <p
                className="text-2xl"
                key={ccy}
              >
                {ccy}: {Number(buy).toFixed(2)}
              </p>
            ))}
          </div>

          <div>
            <h3 className="mb-2 text-center text-3xl">Купівля</h3>
            {currencyRates.map(({ ccy, sale }) => (
              <p
                className="text-2xl"
                key={ccy}
              >
                {ccy}: {Number(sale).toFixed(2)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
