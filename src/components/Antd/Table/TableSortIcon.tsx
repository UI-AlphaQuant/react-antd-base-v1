import {
  IconArrowsSort,
  IconSortAscending,
  IconSortDescending
} from '@tabler/icons-react'
import styled from 'styled-components'

interface SortIconProps {
  sortOrder?: 'ascend' | 'descend' | null
}

const IconWrapper = styled.span``

const TableSortIcon = ({ sortOrder }: SortIconProps) => {
  if (sortOrder === 'ascend') {
    return (
      <IconWrapper>
        <IconSortAscending size={16} />
      </IconWrapper>
    )
  }

  if (sortOrder === 'descend') {
    return (
      <IconWrapper>
        <IconSortDescending size={16} />
      </IconWrapper>
    )
  }

  return (
    <IconWrapper>
      <IconArrowsSort size={16} />
    </IconWrapper>
  )
}

export default TableSortIcon
