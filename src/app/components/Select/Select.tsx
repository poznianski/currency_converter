import React, { useState } from 'react'
import Select from 'react-select'

export const Selector: React.FC = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <div className="mb-2">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  )
}
