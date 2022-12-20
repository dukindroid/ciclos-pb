import PocketBase from 'pocketbase'
import {writable} from 'svelte/store'

export const pb = new PocketBase('https://henryhealthy.shop/pb')
export const currentUser = writable(pb.authStore.model)

pb.authStore.onChange((auth) => {
  console.log('Cambió la store de auths: ', auth)
  currentUser.set(pb.authStore.model)
})