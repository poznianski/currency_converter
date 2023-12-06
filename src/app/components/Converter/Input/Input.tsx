import React from 'react'

interface Props {
  value: number | ''
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="number"
      value={value}
      className="text-black flex rounded border bg-darkLight p-2 text-center text-6xl outline-none"
      onChange={onChange}
    />
  )
}
