import type { Meta, StoryObj } from '@storybook/react-vite'
import { Col, Flex, Row } from 'antd'
import type { FormProps } from 'antd'
import { Form } from './Form'
import { DatePicker, RangePicker } from '../DatePicker/DatePicker'
import { Input, Password, TextArea } from '../Input/Input'
import { Button } from '../Button/Button'
import { InputNumber } from '../InputNumber/InputNumber'
import { TimePicker } from '../TimePicker/TimePicker'
import Select from '../Select/Select'
import { FloatingField } from '@/components/Custom'
import dayjs from 'dayjs'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const meta = {
  title: 'Antd/Form',
  component: Form,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical', 'inline']
    },
    disabled: { control: 'boolean' }
  },
  args: {
    layout: 'vertical',
    disabled: false
  }
} satisfies Meta<FormProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={24}>
        <Form {...args}>
          <FloatingField label="Username" name="username">
            <Input />
          </FloatingField>

          <FloatingField label="Password" name="password">
            <Password />
          </FloatingField>

          <Button type="primary" block>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Normal / Error View</StorySubTitle>
          <Form layout="vertical" onFinish={(values) => console.log(values)}>
            <FloatingField
              label="Full Name"
              name="name"
              rules={[{ required: true, message: 'Full name is required' }]}
            >
              <Input allowClear />
            </FloatingField>

            <FloatingField
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Password is required' }]}
            >
              <Password allowClear />
            </FloatingField>

            <FloatingField
              label="Bio"
              name="bio"
              rules={[{ required: true, message: 'Bio is required' }]}
            >
              <TextArea allowClear rows={3} />
            </FloatingField>

            <FloatingField
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Age is required' }]}
            >
              <InputNumber min={0} />
            </FloatingField>

            <FloatingField
              label="Role"
              name="role"
              rules={[{ required: true, message: 'Role is required' }]}
            >
              <Select
                options={[
                  { label: 'Admin', value: 'admin' },
                  { label: 'User', value: 'user' },
                  { label: 'Manager', value: 'manager' }
                ]}
                allowClear
              />
            </FloatingField>

            <FloatingField
              label="Date of Birth"
              name="dob"
              rules={[{ required: true, message: 'Date of birth is required' }]}
            >
              <DatePicker allowClear />
            </FloatingField>

            <FloatingField
              label="Meeting Time"
              name="time"
              rules={[{ required: true, message: 'Meeting time is required' }]}
            >
              <TimePicker allowClear />
            </FloatingField>

            <FloatingField
              label="Project Duration"
              name="range"
              rules={[{ required: true, message: 'Duration is required' }]}
            >
              <RangePicker allowClear />
            </FloatingField>

            <Flex gap={12}>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
              <Button htmlType="reset" block>
                Reset
              </Button>
            </Flex>
          </Form>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Pre filled form</StorySubTitle>
          <Form
            layout="vertical"
            initialValues={{
              name: 'John Doe',
              password: 'password123',
              bio: 'Frontend Developer',
              age: 28,
              role: 'admin',
              dob: dayjs('2002-05-13'),
              time: dayjs('10:30', 'HH:mm'),
              range: [dayjs('2024-01-01'), dayjs('2024-12-31')]
            }}
          >
            <FloatingField
              label="Full Name"
              name="name"
              rules={[{ required: true, message: 'Full name is required' }]}
            >
              <Input />
            </FloatingField>

            <FloatingField
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Password is required' }]}
            >
              <Password />
            </FloatingField>

            <FloatingField
              label="Bio"
              name="bio"
              rules={[{ required: true, message: 'Bio is required' }]}
            >
              <TextArea rows={3} />
            </FloatingField>

            <FloatingField
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Age is required' }]}
            >
              <InputNumber min={0} />
            </FloatingField>

            <FloatingField
              label="Role"
              name="role"
              rules={[{ required: true, message: 'Role is required' }]}
            >
              <Select
                options={[
                  { label: 'Admin', value: 'admin' },
                  { label: 'User', value: 'user' },
                  { label: 'Manager', value: 'manager' }
                ]}
              />
            </FloatingField>

            <FloatingField
              label="Date of Birth"
              name="dob"
              rules={[{ required: true, message: 'Date of birth is required' }]}
            >
              <DatePicker />
            </FloatingField>

            <FloatingField
              label="Meeting Time"
              name="time"
              rules={[{ required: true, message: 'Meeting time is required' }]}
            >
              <TimePicker />
            </FloatingField>

            <FloatingField
              label="Project Duration"
              name="range"
              rules={[{ required: true, message: 'Duration is required' }]}
            >
              <RangePicker />
            </FloatingField>
          </Form>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Disabled View</StorySubTitle>
          <Form
            layout="vertical"
            initialValues={{
              name: 'John Doe',
              password: 'password123',
              bio: 'Frontend Developer',
              age: 28,
              role: 'admin',
              dob: dayjs('2002-05-13'),
              time: dayjs('10:30', 'HH:mm'),
              range: [dayjs('2024-01-01'), dayjs('2024-12-31')]
            }}
          >
            <FloatingField
              label="Full Name"
              name="name"
              rules={[{ required: true, message: 'Full name is required' }]}
            >
              <Input disabled />
            </FloatingField>

            <FloatingField
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Password is required' }]}
            >
              <Password disabled />
            </FloatingField>

            <FloatingField
              label="Bio"
              name="bio"
              rules={[{ required: true, message: 'Bio is required' }]}
            >
              <TextArea rows={3} disabled />
            </FloatingField>

            <FloatingField
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Age is required' }]}
            >
              <InputNumber min={0} disabled />
            </FloatingField>

            <FloatingField
              label="Role"
              name="role"
              rules={[{ required: true, message: 'Role is required' }]}
            >
              <Select
                options={[
                  { label: 'Admin', value: 'admin' },
                  { label: 'User', value: 'user' },
                  { label: 'Manager', value: 'manager' }
                ]}
                disabled
              />
            </FloatingField>

            <FloatingField
              label="Date of Birth"
              name="dob"
              rules={[{ required: true, message: 'Date of birth is required' }]}
            >
              <DatePicker disabled />
            </FloatingField>

            <FloatingField
              label="Meeting Time"
              name="time"
              rules={[{ required: true, message: 'Meeting time is required' }]}
            >
              <TimePicker disabled />
            </FloatingField>

            <FloatingField
              label="Project Duration"
              name="range"
              rules={[{ required: true, message: 'Duration is required' }]}
            >
              <RangePicker disabled />
            </FloatingField>
          </Form>
        </StorySection>
      </Col>
    </Row>
  )
}
