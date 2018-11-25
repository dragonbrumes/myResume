import { IS_AUTH } from "./types"

export const isAuth = () => ({
  type: IS_AUTH,
  payload: true
})
