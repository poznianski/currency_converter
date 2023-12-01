'use client'
import React, { useEffect, useMemo, useState } from 'react'

import { Input } from '@/app/components/Converter/Input/Input'
import { CurrencyOption, Selector } from '@/app/components/Select/Select'
import { ICurrencyRate } from '@/app/page'

interface Props {
  currencyRates: ICurrencyRate[]
}

export const Converter: React.FC<Props> = ({ currencyRates }) => {
  const initialAmount = 100
  const [amountFrom, setAmountFrom] = useState(initialAmount)
  const [amountTo, setAmountTo] = useState(0)
  const [currencyFrom, setCurrencyFrom] = useState('USD')
  const [currencyTo, setCurrencyTo] = useState('UAH')

  const currencyOptions = [
    { value: 'UAH', label: 'UAH' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
  ]

  useEffect(() => {
    const extendedRates = [
      ...currencyRates,
      { cc: 'UAH', rate: 1, exchangedate: '' },
    ]

    const fromRate = extendedRates.find((rate) => rate.cc === currencyFrom)

    if (fromRate) {
      setAmountTo(amountFrom * fromRate.rate)
    }
  }, [amountFrom, currencyFrom, currencyRates, currencyTo])

  const handleCurrencyFromChange = (option: CurrencyOption) => {
    setCurrencyFrom(option.value)
  }

  const handleCurrencyToChange = (option: CurrencyOption) => {
    setCurrencyTo(option.value)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountFrom(+event.target.value)
  }

  return (
    <section className="container mx-auto p-6">
      <div className="flex gap-24 rounded-2xl bg-gray-700 p-6">
        <div className="flex flex-1 flex-col">
          <p className="mb-2">Я віддам:</p>

          <Selector
            options={currencyOptions}
            value={currencyFrom}
            onChange={handleCurrencyFromChange}
          />

          <Input
            value={amountFrom}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-1 flex-col">
          <p className="mb-2">Я отримаю:</p>

          <Selector
            options={currencyOptions}
            value={currencyTo}
            onChange={handleCurrencyToChange}
          />

          <Input
            value={amountTo}
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  )
}
