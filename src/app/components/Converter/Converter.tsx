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
  const [lastModified, setLastModified] = useState('from')

  const currencyOptions = [
    { value: 'UAH', label: 'UAH' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
  ]

  const handleChange =
    (inputType: 'from' | 'to') =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.replace(/[^0-9.]/g, '')

      if (inputType === 'from') {
        setAmountFrom(+value)
        setLastModified('from')
      } else {
        setAmountTo(+value)
        setLastModified('to')
      }
    }

  useEffect(() => {
    const extendedRates = [
      ...currencyRates,
      { cc: 'UAH', rate: 1, exchangedate: '' },
    ]

    let rateFrom = extendedRates.find((r) => r.cc === currencyFrom)?.rate || 1
    let rateTo = extendedRates.find((r) => r.cc === currencyTo)?.rate || 1

    if (lastModified === 'from') {
      let amountInBaseCurrency = amountFrom * rateFrom
      let convertedAmount = (amountInBaseCurrency / rateTo).toFixed(2)
      setAmountTo(+convertedAmount)
    } else {
      let amountInBaseCurrency = amountTo * rateTo
      let convertedAmount = (amountInBaseCurrency / rateFrom).toFixed(2)
      setAmountFrom(+convertedAmount)
    }
  }, [
    amountFrom,
    amountTo,
    currencyFrom,
    currencyTo,
    lastModified,
    currencyRates,
  ])

  return (
    <section className="container mx-auto p-6">
      <div className="bg-darkLight flex flex-col gap-24 rounded-2xl p-6 sm:flex-row">
        <div className="flex flex-col">
          <p className="mb-2">Я віддам:</p>

          <Selector
            options={currencyOptions}
            value={currencyFrom}
            onChange={(option) => setCurrencyFrom(option.value)}
          />

          <Input
            value={amountFrom}
            onChange={handleChange('from')}
          />
        </div>

        <div className="flex flex-col">
          <p className="mb-2">Я отримаю:</p>

          <Selector
            options={currencyOptions}
            value={currencyTo}
            onChange={(option) => setCurrencyTo(option.value)}
          />

          <Input
            value={amountTo}
            onChange={handleChange('to')}
          />
        </div>
      </div>
    </section>
  )
}
