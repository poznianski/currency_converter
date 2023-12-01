import React from 'react'

import { Input } from '@/app/components/Converter/Input/Input'
import { Selector } from '@/app/components/Select/Select'
import { ICurrencyRate } from '@/app/page'

interface Props {
  currencyRates: ICurrencyRate[]
}

export const Converter: React.FC<Props> = ({ currencyRates }) => {
  return (
    <section className="container mx-auto p-2">
      <div className="flex gap-2 rounded-2xl bg-gray-700 p-2">
        <div className="flex flex-1 flex-col">
          <p className="mb-2">Я віддам:</p>

          <Selector />

          <Input />
        </div>

        <div className="flex flex-1 flex-col">
          <p className="mb-2">Я отримаю:</p>

          <Selector />
          <Input />
        </div>
      </div>
    </section>
  )
}
