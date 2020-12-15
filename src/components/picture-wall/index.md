---
nav:
  title: 组件
  path: /components
---

## Picture Wall

> 组件名称： PictureWall, 图片上传预览。

### 什么时候使用
- 适用于较小的图片，上传前可预览，获取的图片为base64格式，可当做字符串存储


### 示例

```jsx
import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { FormInstance } from 'antd/lib/form';

import { PictureWall } from '@best/best-inc-design';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class User extends Component {

  formRef = React.createRef();

  onFinish = values => {

    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  render () { 
    return (
      <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
        <Row>
            <Col span={8}>
              <Form.Item name="avater" label="头像">
                <PictureWall/>
              </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col span={8}>
              <Form.Item name="name" label="用户名" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col span={8}>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
                <Button htmlType="button" onClick={this.onReset}>
                  重置
                </Button>
              </Form.Item>
            </Col>
        </Row>
      </Form>
    );
  }
}

export default User;

```

### API说明
|参数|必传|说明|类型|默认值|
|:--|:--|:--|:--|:--|
|name|否|发到后台的文件参数名|`string`|image|
|accept|否|接受上传的图片类型|`string`|image/*|
|limit|否|限制的图片大小（单位M）|`number`|2|
|disabled|否|是否禁用|`boolean`|false|
|showUploadList|否|用于单独设定 showPreviewIcon, showRemoveIcon, removeIcon|`boolean | { showPreviewIcon?: boolean, showRemoveIcon?: boolean, removeIcon?: ReactNode | (file: UploadFile) => ReactNode, }`|true|
|onChange|否|上传文件改变时的状态|`function`|- 