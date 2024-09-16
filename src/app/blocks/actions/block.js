'use server'
import { revalidatePath } from 'next/cache'
import { blockUser } from '../components/data'

export const actionBlock = async () => {
  const res = await blockUser()
  console.log(res)
  revalidatePath('/blocks')
}
