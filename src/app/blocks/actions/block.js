'use server'
import { revalidatePath } from 'next/cache'
import { blockUser } from '../components/data'

export const actionBlock = async (userToBlock, accessToken, refToken) => {
  const res = await blockUser(userToBlock, accessToken, refToken)
  console.log(res)
  revalidatePath('/blocks')
}
