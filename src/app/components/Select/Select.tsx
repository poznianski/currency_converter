import React from 'react'
import Select, {
  StylesConfig,
  components,
  OptionProps,
  SingleValueProps,
} from 'react-select'

export interface CurrencyOption {
  value: string
  label: string
}

interface Props {
  options: CurrencyOption[]
  value: string
  onChange: (option: CurrencyOption) => void
}

interface Flags {
  [key: string]: string
}

const renderCurrencyWithFlag = (data: CurrencyOption) => {
  const flags: Flags = {
    UAH: 'ua.svg',
    USD: 'usa.svg',
    EUR: 'eu.svg',
  }

  return (
    <div className="flex items-center justify-between">
      <span>{data.label}</span>
      <img
        src={flags[data.value]}
        className="h-[40px] w-[50px]"
        alt={`${data.value} flag`}
      />
    </div>
  )
}

const CustomOption = (props: OptionProps<CurrencyOption, false>) => {
  return (
    <components.Option {...props}>
      {renderCurrencyWithFlag(props.data)}
    </components.Option>
  )
}

const CustomSingleValue = (props: SingleValueProps<CurrencyOption, false>) => {
  return (
    <components.SingleValue {...props}>
      {renderCurrencyWithFlag(props.data)}
    </components.SingleValue>
  )
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
        className="cursor-pointer text-4xl"
        components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
      />
    </div>
  )
}
