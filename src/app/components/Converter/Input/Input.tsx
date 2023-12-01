import React from 'react'

interface Props {
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      value={value}
      className="flex rounded border bg-transparent p-2 text-black outline-none"
      onChange={onChange}
    />
  )
}
