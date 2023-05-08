import React from 'react';
import Icon from '@union-design/icon';
import UserDrop from './user-drop';
import AvatarPng from './images/avatar.png';
import Copy from './copy';
import { navProps, options } from './business/index';
import { menusCode1, optionsCode, navPropsCode } from './code';

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
        code={`
export default () => {
  ${menusCode1}
  ${navPropsCode}
  return (
    <Header
      size="lg"
      title="中国联通设计系统"
      menus={menus}
      search={{
        type: 'primary',
        placeholder: '输入查询内容',
      }}
    />
  )
}
`}
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
        code={`
export default () => {
  ${menusCode1}
  ${navPropsCode}
  return (
    <Header
      size="lg"
      title="中国联通设计系统"
      menus={menus}
      search={{
        type: 'primary',
        placeholder: '输入查询内容',
      }}
      showBg
    />
  )
}
`}
      />
      <Copy
        title=""
        secondTitle="3.宣传类-带背景头部(高级搜索)"
        headerProps={{
          size: 'lg',
          search: {
            placeholder: '输入查询内容',
            type: 'primary',
            select: {
              options,
              onChange: (v: any) => {
                console.log('==v', v);
              },
            },
          },
          title: '中国联通设计系统',
          menus: menus1,
          navProps,
          showBg: true,
        }}
        code={`
export default () => {
  ${menusCode1}
  ${optionsCode}
  ${navPropsCode}
  return (
    <Header
      size="lg"
      title="中国联通设计系统"
      menus={menus}
      search={{
        type: 'primary',
        placeholder: '输入查询内容',
        select: {
          options,
          onChange: (v: any) => {
            console.log('==v', v);
          },
        }
      }}
      showBg
    />
  )
}
`}
      />
    </div>
  );
};

export default Propaganda;
