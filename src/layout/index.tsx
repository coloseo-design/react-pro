/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Affix from '@union-design/affix';
import Button from '@union-design/button';
import Tooltip from '@union-design/tooltip';
import '@union-design/tooltip/lib/styles/index.css';
import '@union-design/affix/lib/styles/index.css';
import '@union-design/button/lib/styles/index.css';
import { MainHeader, PreviewHeader } from './header';

const Layout = (props: any) => (
  <div>
    <MainHeader />
    <Tooltip message="hhhh">
      <Button type="primary">哈哈哈</Button>
    </Tooltip>
    <Affix offsetTop={20}>
      <div>dewdew</div>
    </Affix>
    {props.children}
  </div>
);

export default Layout;
