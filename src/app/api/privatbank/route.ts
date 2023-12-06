import axios from 'axios'
import { NextResponse } from 'next/server'

import { PB_API_URL } from '@/app/constants'

export const GET = async (req: Request) => {
  try {
    const response = await axios.get(PB_API_URL)

    return NextResponse.json(response.data)
  } catch (error: any) {
    console.error(error.message)
  }
}
