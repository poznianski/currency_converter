import React from 'react'

interface Props {
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="number"
      value={value}
      className="bg-darkLight flex rounded border p-2 text-center text-6xl text-black outline-none"
      onChange={onChange}
    />
  )
}
