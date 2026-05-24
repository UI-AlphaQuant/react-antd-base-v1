import { ellipsis, flex } from '@/theme/styles/sharedStyles'
import { Table as AntTable } from 'antd'
import type { TableProps } from 'antd'
import styled from 'styled-components'

const TableStyled = styled.div`
  .ant-table-wrapper {
    .ant-table {
      .ant-table-container {
        .ant-table-header {
        }

        .ant-table-body {
        }
      }
    }
  }
`

export const TableOuter = styled.div`
  ${flex('column', '16px', 'flex-start', 'space-between')};
  height: 100%;

  & > div:first-child {
    ${flex('column', '16px')};
    width: 100%;
    height: 100%;
    flex: 0 1 auto;
    min-height: 0;
    overflow: auto;
    border: 1px solid;
  }

  .ant-pagination {
    flex: 0 0 40px;
  }
`

export const TableFooter = styled.div`
  ${flex('row', '16px', 'center', 'space-between', 'wrap')};
  width: 100%;

  .total-count {
    flex: 1 0 100px;
  }
`

export const TableCell = styled.div`
  ${ellipsis}
  min-width: 100px;
`

export const Table = <T extends object>(props: TableProps<T>) => {
  return (
    <TableStyled>
      <AntTable<T> {...props} />
    </TableStyled>
  )
}

// Static properties
Table.SELECTION_ALL = AntTable.SELECTION_ALL
Table.SELECTION_INVERT = AntTable.SELECTION_INVERT
Table.SELECTION_NONE = AntTable.SELECTION_NONE
Table.Column = AntTable.Column
Table.ColumnGroup = AntTable.ColumnGroup
Table.Summary = AntTable.Summary
