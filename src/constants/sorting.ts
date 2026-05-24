export const SORT_ORDER = {
  ANT_ASCEND: 'ascend',
  ANT_DESCEND: 'descend',
  API_ASC: 'asc',
  API_DESC: 'desc'
} as const

export type SortOrder = (typeof SORT_ORDER)[keyof typeof SORT_ORDER]

export const DEFAULT_SORT = {
  FIELD: 'createdAt',
  ORDER: SORT_ORDER.API_DESC
} as const
