import React from 'react';
import Icon from '@union-design/icon';
import UserDrop from './user-drop';
import AvatarPng from './images/avatar.png';
import Copy from './copy';
import { navProps } from './business/index';

const Propaganda = () => {
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
  return (
    <div>
      <Copy
        title="宣传类"
        secondTitle="1.宣传类-纯色背景头部"
        headerProps={{
          size: 'lg',
          search: {
            placeholder: '输入查询内容',
            type: 'primary',
          },
          title: '中国联通设计系统',
          menus: menus1,
          navProps,
        }}
      />
      <Copy
        title=""
        secondTitle="2.宣传类-带背景头部"
        headerProps={{
          size: 'lg',
          search: {
            placeholder: '输入查询内容',
            type: 'primary',
          },
          title: '中国联通设计系统',
          menus: menus1,
          navProps,
          showBg: true,
        }}
      />
    </div>
  );
};

export default Propaganda;
