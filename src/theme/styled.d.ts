/* eslint-disable @typescript-eslint/no-empty-object-type */
// Type augmentation for styled-components

import 'styled-components'
import { AppTheme } from '../theme/types'

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
