# Fully functional Table wrapper

## Component File

```tsx
import React from 'react'
import { Table as AntdTable, Flex } from 'antd'
import type { TableProps } from 'antd/es/table'
import styled from 'styled-components'
import { Card } from '../Card/Card'

// Minimal styled wrapper for table
const TableStyled = styled.div`
  overflow: auto;
  width: 100%;
`

// Optional: Load More section
export const TableLoadMore = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
`

// Optional: Cell text truncate
export const TruncateCell = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

// Generic Table Component
type TableStyledProps<T> = TableProps<T>

export const Table = <T extends object>(props: TableStyledProps<T>) => {
  return (
    <TableStyled>
      <AntdTable {...props} />
    </TableStyled>
  )
}
```
