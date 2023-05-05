/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
// import { Icon } from 'union-design';
import Icon from '@union-design/icon';
import '@union-design/header/lib/styles/index.css';
import Header from '@union-design/header';

export const MainHeader = () => {
  const menus = [
    <div key="3">
      版本切换
      <Icon type="down2-line" />
    </div>,
    <div key="4">
      你好
      <Icon type="down2-line" />
    </div>,
  ];
  return (
    <div>
      <Header
        title="联通设计系统"
        search={{
          placeholder: '输入查询内容',
        }}
        type="propaganda"
        menus={menus}
      />
    </div>
  );
};

export const PreviewHeader = () => {
  const menus = [
    {
      key: '2',
      title: '自定义',
      icon: <Icon type="rational-surface" />,
      onClick: () => {},
    },
    {
      key: '4',
      title: '公告',
      icon: <Icon type="consistent-surface" />,
      onClick: () => {},
    },
    {
      key: '5',
      title: '文档',
      icon: <Icon type="consistent-surface" />,
      onClick: () => {},
    },
    <div
      key="7"
      style={{
        maxWidth: 240, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      }}
    >
      展示岗位名称十六个字超出使用省略
      <Icon type="down2-line" style={{ fontSize: 14 }} />
    </div>,
    <div key="8" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
      <Icon type="meeting-surface" style={{ fontSize: 20, marginRight: 8 }} />
      <span>你好,林清</span>
    </div>,
  ];
  return (
    <div>
      <Header
        title="中国联通设计系统演示页面"
        search={false}
        menus={menus}
      />
    </div>
  );
};
