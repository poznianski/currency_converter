import React from 'react'
import Select, { StylesConfig, components } from 'react-select'

export interface CurrencyOption {
  value: string
  label: string
}

interface Props {
  options: CurrencyOption[]
  value: string
  onChange: (option: CurrencyOption) => void
}

export const Selector: React.FC<Props> = ({ options, value, onChange }) => {
  const selectedOption = options.find((option) => option.value === value)

  const styles: StylesConfig<CurrencyOption, false> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      boxShadow: 'none',
      borderColor: '#cccccc',
      '&:hover': {
        borderColor: '#cccccc',
      },
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      color: '#c0c0c0',
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '0.5rem',
      backgroundColor: state.isSelected ? '#f3f4f6' : 'white',
      color: '#000000',
      cursor: 'pointer',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#c0c0c0',
    }),
  }

  return (
    <div className="mb-2">
      <Select
        value={selectedOption}
        onChange={(option) => onChange(option as CurrencyOption)}
        options={options}
        styles={styles}
        className="text-4xl"
      />
    </div>
  )
}
