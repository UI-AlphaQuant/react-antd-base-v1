import {
  PageOuter,
  Pagination,
  PaginationInfo,
  Table,
  TableEmpty,
  TableFooter,
  TableOuter,
  TableSortIcon,
  Text
} from '@/components'
import { type TableColumnsType, type TableProps } from 'antd'
import { Key, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

type TableRowSelection<T extends object = object> =
  TableProps<T>['rowSelection']

interface DataType {
  key: Key
  name: string
  age: number
  address: string
}

const dataSource = Array.from({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: `Edward King ABCD ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`
}))

const UserList = () => {
  const { t } = useTranslation()

  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  const onSelectChange = (newSelectedRowKeys: Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    columnWidth: 60,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false
            }
            return true
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true
            }
            return false
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      }
    ]
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: t('account:Name'),
      dataIndex: 'name',
      align: 'left',
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortIcon: ({ sortOrder }) => <TableSortIcon sortOrder={sortOrder} />,
      ellipsis: {
        showTitle: true
      },
      render: (text) => <Text ellipsis={{ tooltip: text }}>{text}</Text>,
      width: 160
    },
    {
      title: t('account:Age'),
      dataIndex: 'age',
      align: 'center',
      filters: [
        { text: '32', value: 32 },
        { text: '42', value: 42 }
      ],
      onFilter: (value, record: DataType) => record.age === value,
      sorter: (a, b) => a.age - b.age,
      sortIcon: ({ sortOrder }) => <TableSortIcon sortOrder={sortOrder} />,
      width: 120
    },
    {
      title: t('account:Address'),
      dataIndex: 'address',
      align: 'left',
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.address.includes(value as string),
      render: (address) => <div>{address}</div>,
      ellipsis: {
        showTitle: true
      }
    }
  ]

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return dataSource.slice(start, start + pageSize)
  }, [dataSource, currentPage, pageSize])

  return (
    <PageOuter heading={t('account:Users')}>
      <TableOuter>
        <Table<DataType>
          // loading
          locale={{ emptyText: <TableEmpty description="No user found" /> }}
          tableLayout="fixed"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={paginatedData}
          scroll={{ x: 'max-content', y: '100%' }}
          pagination={false}
          // expandable={{
          //   expandedRowRender: (record) => <p>{record.address}</p>
          // }}
          sticky
        />

        <TableFooter>
          <PaginationInfo
            current={currentPage}
            pageSize={pageSize}
            total={dataSource.length}
          />

          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={dataSource.length}
            showSizeChanger
            onChange={(page, size) => {
              setCurrentPage(page)
              setPageSize(size)
            }}
          />
        </TableFooter>
      </TableOuter>
    </PageOuter>
  )
}

export default UserList
