'use server'
import { revalidatePath } from 'next/cache'
import { unBlockUser } from '../components/data'

export const actionUnBlock = async (blockId, accessToken, refToken) => {
  const res = await unBlockUser(blockId, accessToken, refToken)
  console.log(res)
  revalidatePath('/blocks')
}
