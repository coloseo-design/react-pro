import React from 'react';
import Icon from '@union-design/icon';
import UserDrop from '../user-drop';
import AnswerPng from '../images/answer.png';
import personPng from '../images/person.png';
import AvatarPng from '../images/avatar.png';
import Copy from '../copy';
import { menusCode, optionsCode, navPropsCode } from '../code';

type Data = { id: string; name: string; desc?: string; list?: Data[] };
const data: Data[] = [
  {
    id: '1',
    name: '二字',
  },
  {
    id: '2',
    name: '三个字',
  },
  {
    id: '3',
    name: '四个字符',
  },
  {
    id: '4',
    name: '六个字符六个',
  },
  {
    id: '5',
    name: '七个字符七个字',
  },
  {
    id: '6',
    name: '八个字符八个字符',
  },
  {
    id: '7',
    name: '九个字符九个字符字',
  },
  {
    id: '8',
    name: '五个字符五',
  },
  {
    id: '42',
    name: '六个字符六个',
  },
  {
    id: '52',
    name: '七个字符七个字',
  },
  {
    id: '62',
    name: '八个字符八个字符',
  },
  {
    id: '72',
    name: '九个字符九个字符字',
  },
];

export const navProps = {
  data,
  mode: 'dropdown' as any,
  keyExtractor: (i: Data) => `${i.id}`,
  nameExtractor: (i: Data) => i.name,
  childrenExtractor: (i: Data) => i.list,
  onChangeSelectedKey: (key: string, data1: any) => console.log('topnav md onChangeSelectedKeys:', key, data1),
};

export const options = [
  {
    value: '1',
    label: '全部',
    key: '1',
  },
  {
    value: '2',
    label: '选项一',
    key: '2',
  },
  {
    value: '3',
    label: '选项二',
    key: '3',
  },
];

const Business = () => {
  const menus1 = [
    <div key="2" className="menus-list">
      <img src={AnswerPng} alt="" />
      自定义
    </div>,
    <div key="3" className="menus-list">
      <img src={personPng} alt="" />
      岗位名称
      <Icon type="down2-line" />
    </div>,
    <div key="5" className="menus-list">
      <UserDrop>
        <img src={AvatarPng} alt="" />
        您好,林清
      </UserDrop>
    </div>,
  ];

  return (
    <div>
      <Copy
        title="业务类"
        type="img"
        secondTitle="1.业务类-基础头部（配合侧部导航使用）"
        headerProps={{
          search: false,
          title: '中国联通设计系统',
          menus: menus1,
        }}
        code={`
export default () => {
  ${menusCode}
  return (
    <Header
      title="中国联通设计系统"
      menus={menus}
      search={false}
    />
  )
}
`}
      />
      <Copy
        title=""
        secondTitle="2.业务类-带搜索框头部（配合侧部导航使用）"
        type="img"
        headerProps={{
          search: {
            placeholder: '输入查询内容',
          },
          title: '中国联通设计系统',
          menus: menus1,
        }}
        code={`
  export default () => {
    ${menusCode}
    return (
      <Header
        title="中国联通设计系统"
        menus={menus}
          search={{
            placeholder: '输入查询内容',
          }}
      />
    )
  }
`}
      />
      <Copy
        title=""
        secondTitle="3.业务类-高级搜索框头部（配合侧部导航使用）"
        type="img"
        headerProps={{
          search: {
            placeholder: '输入查询内容',
            select: {
              options,
            },
          },
          title: '中国联通设计系统',
          menus: menus1,
        }}
        code={`
  export default () => {
    ${menusCode}
    ${optionsCode}
    return (
      <Header
        title="中国联通设计系统"
        menus={menus}
          search={{
            placeholder: '输入查询内容',
            select: {
              options,
            }
          }}
      />
    )
  }
`}
      />
      <Copy
        title=""
        type="img"
        secondTitle="4.业务类-基础头部（配合顶部导航使用）"
        headerProps={{
          search: false,
          title: '中国联通设计系统',
          menus: menus1,
          navProps,
        }}
        code={`
  export default () => {
    ${menusCode}
    ${navPropsCode}
    return (
      <Header
        title="中国联通设计系统"
        menus={menus}
        search={false}
        navProps={navProps}
      />
    )
  }
`}
      />
      <Copy
        title=""
        secondTitle="5.业务类-带搜索框头部（配合顶部导航使用）"
        type="img"
        headerProps={{
          search: {
            placeholder: '输入查询内容',
          },
          title: '中国联通设计系统',
          menus: menus1,
          navProps,
        }}
        code={`
  export default () => {
    ${menusCode}
    ${navPropsCode}
    return (
      <Header
        title="中国联通设计系统"
        menus={menus}
        search={{
          placeholder: '输入查询内容',
        }}
        navProps={navProps}
      />
    )
  }
`}
      />
      <Copy
        title=""
        secondTitle="6.业务类-高级搜索框头部（配合顶部导航使用） "
        type="img"
        headerProps={{
          search: {
            placeholder: '输入查询内容',
            select: {
              options,
            },
          },
          title: '中国联通设计系统',
          menus: menus1,
          navProps,
        }}
        code={`
  export default () => {
    ${menusCode}
    ${optionsCode}
    ${navPropsCode}
    return (
      <Header
        title="中国联通设计系统"
        menus={menus}
        search={{
          placeholder: '输入查询内容',
          options,
        }}
        navProps={navProps}
      />
    )
  }
`}
      />
    </div>
  );
};

export default Business;
