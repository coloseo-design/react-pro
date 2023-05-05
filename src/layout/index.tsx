/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Icon from '@union-design/icon';
import SideNav from '@union-design/side-nav';
import '@union-design/side-nav/lib/styles/index.css';
import { MainHeader, PreviewHeader } from './header';

const Layout = (props: any) => {
  const data = [
    {
      id: '1',
      name: '快速使用',
    },
    {
      id: '2',
      name: '色彩',
    },
    {
      id: '3',
      name: '头部',
    },
    {
      id: '4',
      name: '导航',
    },
  ];
  const iconMap = {
    1: <Icon type="file-editing-line" style={{ fontSize: 18 }} />,
    2: <Icon type="stockright" style={{ fontSize: 18 }} />,
    3: <Icon type="app-line" style={{ fontSize: 18 }} />,
    4: <Icon type="list2-line" style={{ fontSize: 18 }} />,
  };
  return (
    <div>
      <MainHeader />
      <div style={{ display: 'flex' }}>
        <SideNav
          style={{ height: 'calc(100vh - 140px)' }}
          mode="inline"
          data={data}
          keyExtractor={(i) => `${i.id}`}
          nameExtractor={(i) => i.name}
          childrenExtractor={(i: any) => i.list}
          iconExtractor={(i) => (iconMap as any)[i.id]}
        />
        {props.children}
      </div>

    </div>
  );
};

export default Layout;
