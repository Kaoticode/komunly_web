'use server'
import { revalidatePath } from 'next/cache'
import { unBlockUser } from '../components/data'

export const actionUnBlock = async (blockId, accessToken, refToken) => {
  const unBlockOK = true
  await unBlockUser(blockId, accessToken, refToken)
  revalidatePath('/blocks')
  return { unBlockOK }
}
