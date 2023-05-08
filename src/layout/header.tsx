/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import Icon from '@union-design/icon';
import Header from '@union-design/header';
import Dropdown from '@union-design/dropdown';
import '@union-design/header/lib/styles/index.css';
import '@union-design/dropdown/lib/styles/index.css';
import '@union-design/top-nav/lib/styles/index.css';
import UserPng from '../images/avatar-line.png';
import UserDrop from '../user-drop';
import './index.css';

export const MainHeader = () => {
  const [down, setDown] = useState(true);
  const menus = [
    <div key="3" className="currentMenu">
      <Dropdown
        overlay={
          <div>1.x</div>
        }
        trigger={['click']}
        overlayClassName="dropHeader"
        onVisibleChange={(v: boolean) => {
          setDown(!v);
        }}
      >
        <Icon style={{ margin: '0px 8px 0px 0px' }} type="menu-line" />
        <span>版本切换</span>
        <Icon style={{ fontSize: 14 }} type={down ? 'down2-line' : 'up2-line'} />
      </Dropdown>
    </div>,
    <div key="4" className="currentMenu">
      <UserDrop>
        <img src={UserPng} alt="" />
        欢迎您
      </UserDrop>
    </div>,
  ];
  type Data = { id: string; name: string; desc?: string; list?: Data[] };
  const data: Data[] = [
    {
      id: '1',
      name: '首页',
    },
    {
      id: '2',
      name: '设计规范',
    },
    {
      id: '3',
      name: 'web端组件库',
    },
    {
      id: '4',
      name: '移动端组件库',
    },
    {
      id: '5',
      name: '页面模板pro',
      list: [
        {
          id: '78',
          name: 'React Pro',
          list: [
            {
              id: '781',
              name: '如何使用说明',
            },
            {
              id: '782',
              name: '演示页面',
            },
          ],
        },
        {
          id: '79',
          name: 'Vue2.0 Pro',
          list: [
            {
              id: '791',
              name: '如何使用说明',
            },
            {
              id: '792',
              name: '演示页面',
            },
          ],
        },
        {
          id: '68',
          name: 'JS Pro',
          list: [
            {
              id: '681',
              name: '如何使用说明',
            },
            {
              id: '682',
              name: '演示页面',
            },
          ],
        },
      ],
    },
    {
      id: '6',
      name: '图表库',
    },
    {
      id: '7',
      name: '资源与下载',
    },
  ];

  const navProps = {
    data,
    mode: 'expand' as any,
    size: 'xl' as any,
    keyExtractor: (i: Data) => `${i.id}`,
    nameExtractor: (i: Data) => i.name,
    childrenExtractor: (i: Data) => i.list,
    onChangeSelectedKey: (key: string, data1: any) => console.log('topnav md onChangeSelectedKeys:', key, data1),
  };
  return (
    <div>
      <Header
        title="联通设计系统"
        search={{
          placeholder: '请输入内容查询',
          type: 'primary',
        }}
        size="lg"
        menus={menus}
        navProps={navProps}
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
