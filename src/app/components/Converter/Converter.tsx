'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { Input } from '@/app/components/Converter/Input/Input'
import { Selector } from '@/app/components/Select/Select'
import { INITIAL_AMOUNT } from '@/app/constants'
import { CurrencyRate } from '@/app/page'

interface Props {
  currencyRates: CurrencyRate[]
}

export const Converter: React.FC<Props> = ({ currencyRates }) => {
  const [amountFrom, setAmountFrom] = useState<number | ''>(INITIAL_AMOUNT)
  const [amountTo, setAmountTo] = useState<number | ''>(0)
  const [currencyFrom, setCurrencyFrom] = useState('USD')
  const [currencyTo, setCurrencyTo] = useState('UAH')
  const [lastModified, setLastModified] = useState('from')
  const [isHovered, setIsHovered] = useState(false)

  const currencyOptions = [
    { value: 'UAH', label: 'UAH' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
  ]

  const handleChange =
    (inputType: 'from' | 'to') =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let value = event.target.value.replace(/[^0-9.]/g, '')

      if (value && !isNaN(Number(value))) {
        value = String(Number(value))
      }

      const numericValue = value === '' ? '' : +value

      if (inputType === 'from') {
        setAmountFrom(numericValue)
        setLastModified('from')
      } else {
        setAmountTo(numericValue)
        setLastModified('to')
      }
    }

  const handleSwapCurrencies = () => {
    setCurrencyFrom(currencyTo)
    setCurrencyTo(currencyFrom)

    const tempAmount = amountFrom
    setAmountFrom(amountTo)
    setAmountTo(tempAmount)

    setLastModified(lastModified === 'from' ? 'to' : 'from')
  }

  useEffect(() => {
    const findRate = (currency: string, type: 'buy' | 'sale') => {
      const rateInfo = currencyRates.find((rate) => rate.ccy === currency)
      if (!rateInfo) return 1
      return type === 'buy'
        ? parseFloat(rateInfo.buy)
        : parseFloat(rateInfo.sale)
    }

    let rateFrom = currencyFrom === 'UAH' ? 1 : findRate(currencyFrom, 'sale')
    let rateTo = currencyTo === 'UAH' ? 1 : findRate(currencyTo, 'buy')

    const numericAmountFrom =
      amountFrom === '' ? 0 : parseFloat(amountFrom.toString())
    const numericAmountTo =
      amountTo === '' ? 0 : parseFloat(amountTo.toString())

    if (lastModified === 'from') {
      let convertedAmount = (numericAmountFrom * rateFrom) / rateTo
      setAmountTo(parseFloat(convertedAmount.toFixed(2)))
    } else {
      let convertedAmount = (numericAmountTo * rateTo) / rateFrom
      setAmountFrom(parseFloat(convertedAmount.toFixed(2)))
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
    <section className="mx-auto flex items-center justify-center p-4 sm:p-6">
      <div className="flex w-full max-w-sm flex-col justify-center gap-4 rounded-2xl bg-darkLight p-2 sm:gap-10 sm:p-6">
        <div className="flex flex-col">
          <p className="mb-2 text-2xl">Я віддам:</p>

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

        <div className="flex justify-center">
          <Image
            src="swap.svg"
            height={100}
            width={100}
            alt="swap"
            className={`${
              isHovered ? 'animate-rotate-to-180' : 'animate-rotate-to-0'
            } cursor-pointer`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleSwapCurrencies}
          />
        </div>

        <div className="flex flex-col">
          <p className="mb-2 text-2xl">Я отримаю:</p>

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
