import React from 'react';
import styles from './index.less';
import { Checkbox, Form } from 'antd';
import User from './user/index.js';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {/* <Checkbox /> */}
      <User />
    </div>
  );
}