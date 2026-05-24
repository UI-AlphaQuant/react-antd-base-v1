import { SORT_ORDER } from '@/constants/sorting'

export const convertAntdSortToApi = (order?: string) => {
  if (order === SORT_ORDER.ANT_ASCEND) return SORT_ORDER.API_ASC
  if (order === SORT_ORDER.ANT_DESCEND) return SORT_ORDER.API_DESC
  return undefined
}

export const convertApiSortToAntd = (order?: string) => {
  if (order === SORT_ORDER.API_ASC) return SORT_ORDER.ANT_ASCEND
  if (order === SORT_ORDER.API_DESC) return SORT_ORDER.ANT_DESCEND
  return undefined
}
