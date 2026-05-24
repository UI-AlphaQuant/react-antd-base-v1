import { PageOuter, Statistic } from '@/components'
import { Col, Row } from 'antd'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation('account')

  // Testing 500 error
  // throw new Error('Testing Error Boundary')

  return (
    <PageOuter heading={t('Welcome')}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8} lg={6}>
          <Statistic title={t('TotalUsers')} value={12450} precision={0} />
        </Col>
        <Col xs={24} md={8} lg={6}>
          <Statistic title={t('ActiveUsers')} value={8420} precision={0} />
        </Col>
        <Col xs={24} md={8} lg={6}>
          <Statistic title={t('TotalRevenue')} value={1850000} precision={2} />
        </Col>
        <Col xs={24} md={8} lg={6}>
          <Statistic title={t('MonthlyRevenue')} value={215000} precision={2} />
        </Col>
      </Row>
    </PageOuter>
  )
}

export default Dashboard
