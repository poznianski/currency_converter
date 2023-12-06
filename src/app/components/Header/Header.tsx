'use client'
import dayjs from 'dayjs'
import React from 'react'

import { CurrencyRate } from '@/app/page'

interface Props {
  currencyRates: CurrencyRate[]
}

export const Header: React.FC<Props> = ({ currencyRates }) => {
  const currentDate = dayjs().format('DD.MM.YYYY')

  return (
    <header className="container mx-auto mb-2 p-2">
      <div>
        <h2 className="mb-2  text-center text-2xl">
          Курсом ПриватБанку на {currentDate} встановлено:
        </h2>

        <div className="flex justify-between gap-4 p-2">
          <div>
            <h3 className="mb-2 text-center text-xl">Продаж</h3>
            {currencyRates.map(({ ccy, buy }) => (
              <p
                className="text-xl"
                key={ccy}
              >
                {ccy}: {Number(buy).toFixed(2)}
              </p>
            ))}
          </div>

          <div>
            <h3 className="mb-2 text-center text-xl">Купівля</h3>
            {currencyRates.map(({ ccy, sale }) => (
              <p
                className="text-xl"
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
