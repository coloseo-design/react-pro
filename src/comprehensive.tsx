import React from 'react';
import Icon from '@union-design/icon';
import UserDrop from './user-drop';
import AvatarPng from './images/avatar.png';
import Copy from './copy';
import { navProps } from './business/index';

const Comprehensive = () => {
  const menus1 = [
    {
      key: '8',
      icon: <Icon type="remind-line" />,
      title: '自定义',
    },
    <div key="3">
      <Icon type="me-line" style={{ fontSize: 20, marginRight: 8 }} />
      岗位名称
    </div>,
    <div key="5">
      <UserDrop>
        <img src={AvatarPng} alt="" style={{ width: 24, height: 24 }} />
        您好,林清
      </UserDrop>
    </div>,
  ];

  const topMenus = [
    {
      key: '1',
      title: '购物车',
    },
    {
      key: '2',
      title: '通知',
    },
    {
      key: '3',
      title: '最新资讯',
    },
    {
      key: '4',
      title: '今日头条',
    },
  ];
  return (
    <div>
      <Copy
        title="综合类"
        secondTitle="1.综合类-纯色背景头部"
        headerProps={{
          size: 'lg',
          search: {
            placeholder: '输入查询内容',
            type: 'primary',
          },
          title: '中国联通设计系统',
          menus: menus1,
          navProps,
          topMenus,
        }}
      />
      <Copy
        title=""
        secondTitle="2.综合类-带背景头部"
        headerProps={{
          size: 'lg',
          search: {
            type: 'primary',
            placeholder: '输入查询内容',
          },
          title: '中国联通设计系统',
          menus: menus1,
          navProps,
          showBg: true,
          topMenus,
        }}
      />
    </div>
  );
};

export default Comprehensive;
