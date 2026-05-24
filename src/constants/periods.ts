// Keys used in UI (menu / dropdown)
export type PeriodOptionKey = '0' | '1' | '3' | '5' | '-1'

// Enum representing available period options
export enum PERIOD_OPTION {
  YEAR_TO_DATE = '0',
  ONE_YEAR = '1',
  THREE_YEARS = '3',
  FIVE_YEARS = '5',
  ALL_TIME = '-1'
}

// Mapping UI option → numeric value used by API/business logic
export const PERIOD_TO_YEARS_MAP: Record<PeriodOptionKey, number> = {
  [PERIOD_OPTION.YEAR_TO_DATE]: 0,
  [PERIOD_OPTION.ONE_YEAR]: 1,
  [PERIOD_OPTION.THREE_YEARS]: 3,
  [PERIOD_OPTION.FIVE_YEARS]: 5,
  [PERIOD_OPTION.ALL_TIME]: -1
}

// Usage: const selected: PeriodOptionKey = PERIOD_OPTION.THREE_YEARS; const years = PERIOD_TO_YEARS_MAP[selected];
