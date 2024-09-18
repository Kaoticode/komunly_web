'use server'
import { revalidatePath } from 'next/cache'
import { blockUser } from '../components/data'

export const actionBlock = async (userToBlock) => {
  const res = await blockUser(userToBlock)
  console.log(res)
  revalidatePath('/blocks')
}
