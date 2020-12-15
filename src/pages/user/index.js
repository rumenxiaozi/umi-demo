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
                <PictureWall showUploadList={{
                  showPreviewIcon: true
                }}/>
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
