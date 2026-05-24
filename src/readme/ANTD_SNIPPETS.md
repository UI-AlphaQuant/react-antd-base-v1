# Useful Ant Design Reference

## Flex Component

```tsx
<Flex vertical gap={24} />
<Flex justify="space-between" align="end" gap={16} wrap />
<Flex gap={16} className="utility-class" />
```

## Grid Component

```tsx
<Row gutter={[24, 16]} justify="space-between" wrap />      // Row flex container

<Col xs={24} />                                             // Full width across devices
<Col span={6} offset={6} />                                 // Non responsive columns
<Col xs={24} md={12} lg={6} xl={6} xxl={4} />               // Shorthand form (just width)
<Col xs={{ span: 24 }} lg={{ span: 4, offset: 2 }} />       // Object form (can offset)
<Col flex="auto" /> <Col flex="100px" /> <Col flex={1} />   // Fixed width / Auto full width
<Col xs={24} md={24} lg="auto" flex="0 0 auto" />           // Different ways to use
<Col xs={24} lg={{ flex: 'none' }} />                       // Large auto and below full
<Col xs={24} lg={formData?.userId ? 24 : 12} />             // Conditional Columns
<Col xs={{ order: 1 }} sm={{ order: 2 }} />                 // Change order in different Devices

// Senario 1
<Row gutter={[24, 16]}>
  <Col xs={24} lg={{ flex: 'none' }}></Col>
  <Col xs={24} md={24} lg={24} flex="1"></Col>
</Row>
```

## Space & Divider Component

```tsx
<Space.Compact block size={24} />           // Block with Gap
<Space vertical size={24} />                // Vertical Space
<Space align="left" wrap />
<Space separator={<Divider vertical />} />  // Vertical Space

<Divider>Login</Divider>
```

## Antd Typography

```tsx
<Title>H1 Heading</Title>                   // H1 Tag Heading
<Title level={2}>H2 Heading</Title>         // H2 to H5 Tag Heading
<Title editable>Editable Text</Title>       // Edit Text UI

<Text>Inline Text</Text>                    // Span tag inline text
<Text disabled>Disabled</Text>              // Disabled UI
<Text mark>Highlight</Text>                 // Highlight inline text
<Text strong underline>Inline B/U</Text>    // Bold/Underline text
<Link href="#" target="_blank">Link</Link>  // Link

// Can be copy / States / Ellipsis / Editable Text
<Paragraph copyable>This is a copyable text.</Paragraph>
<Paragraph type="success" />
<Paragraph ellipsis={ellipsis} />
<Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false} />
<Paragraph
  editable={{
    onChange: setText,
    text: editableStrWithSuffix,
    // Optional props
    autoSize: { maxRows: 5, minRows: 3 }
    maxLength: 50,
  }}
  ellipsis={{
    suffix: editableStrWithSuffixSuffixPart,
  }}
/>
```

## Theme Typography

```tsx
// Heading Tags <h1> to <h5>
<H1>H1 - Sample Title</H1>
// Text types
<TextXL>Extra Large</TextXL>
<TextL>Large</TextL>
<TextM>Medium</TextM>
<TextS>Small</TextS>
<TextXS>Extra Small</TextXS>
// Prop Options:
// color    : primary | dark | muted | inherit (default)
// weight   : 300 | 400 (default) | 500 | 600 | 700 | 800
// display  : block (default) | inline-block
// mb       : 0 (default) | any number (margin-bottom)
```

## Modals

```tsx
// Confirmation Modal
<ConfirmModal
  open={openCM}
  onOk={handleCMOk}
  onCancel={() => handleCMCancel()}
  title="Delete?"
  okText="Delete"
  cancelText="Cancel"
>
  Are you sure you want to delete?
</ConfirmModal>

<Modal
  title="Modal dialog"
  width={200}
  centered
  mask
  closable
  closeIcon
/>
```

## Skeleton & Spin Usage

```tsx
<Skeleton active size="lg" block />

<Skeleton.Avatar />   // Avatar
<Skeleton.Button />   // Button
<Skeleton.Input />    // Input
<Skeleton.Image />    // Image
<Skeleton.Node />     // Custom UI

<Skeleton active title paragraph={false} />                 // Title
<Skeleton active title={false} paragraph={{ rows: 4 }} />   // Paragraphs
<Skeleton variant="h1" paragraph={false} fullWidth />       // Custom Made

// Sample
{
  loading ? (
    <Skeleton.Button active size="large" />
  ) : (
    <Button type="primary" size="large">
      Primary
    </Button>
  )
}

<Spin indicator={<LoaderSVG />} spinning={!isFetched} />   // Wrap to content
```

## Descriptions (Box View)

```tsx
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Name',
    span: { xs: 24, sm: 12, md: 6, lg: 3 },
    children: <div>John Smith</div>
  }
]

<Descriptions
  title="Main Heading"
  layout="vertical"
  bordered
  items={items}
  colon={false}
  column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
/>
```

## Anchor

```tsx
<Anchor>
  <Link href="#section1" title="Section 1" />
  <Link href="#section2" title="Section 2" />
</Anchor>

<div id="section1" /> <div id="section2" />
```
