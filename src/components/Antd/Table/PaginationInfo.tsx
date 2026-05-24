import React from 'react'
import { Paragraph } from '../Typography/Typography'

interface PaginationInfoProps {
  current: number
  pageSize: number
  total: number
}

const PaginationInfo: React.FC<PaginationInfoProps> = ({
  current,
  pageSize,
  total
}) => {
  if (total === 0) return <span>0 results</span>

  const start = (current - 1) * pageSize + 1
  const end = Math.min(current * pageSize, total)

  return (
    <Paragraph className="total-count">
      {start} - {end} of {total}
    </Paragraph>
  )
}

export default PaginationInfo
