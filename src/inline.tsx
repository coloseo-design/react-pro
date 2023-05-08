import React from 'react';
import Copy from './copy';
import { iconMapCode } from './code';

const Inline = () => {
  const data = [
    {
      id: '1',
      name: '工作台',
      list: [
        {
          id: '11',
          name: '二级菜单1',
        },
        {
          id: '12',
          name: '二级菜单2',
          list: [
            {
              id: '121',
              name: '三级菜单1',
            },
            {
              id: '122',
              name: '三级菜单2',
              list: [
                {
                  id: '1221',
                  name: '四级菜单1',
                },
                {
                  id: '1222',
                  name: '四级菜单2',
                  list: [
                    {
                      id: '12221',
                      name: '五级菜单1a',
                    },
                    {
                      id: '12222',
                      name: '五级菜单2b',
                    },
                    {
                      id: '12223',
                      name: '五级菜单3',
                    },
                  ],
                },
                {
                  id: '1223',
                  name: '四级菜单3',
                },
              ],
            },
            {
              id: '123',
              name: '三级菜单3',
            },
          ],
        },
        {
          id: '13',
          name: '二级菜单3',
        },
      ],
    },
    {
      id: '2',
      name: '表单页',
    },
    {
      id: '3',
      name: '列表页',
      list: [
        {
          id: '31',
          name: '二级菜单1a',
        },
        {
          id: '32',
          name: '二级菜单2b',
        },
        {
          id: '33',
          name: '二级菜单3',
        },
      ],
    },
    {
      id: '4',
      name: '详情页',
    },
    {
      id: '5',
      name: '结果页',
    },
    {
      id: '6',
      name: '弹框页',
    },
    {
      id: '7',
      name: '异常页',
    },
  ];
  const dataCode = `
  const data = [
    {
      id: '1',
      name: '工作台',
      list: [
        {
          id: '11',
          name: '二级菜单1',
        },
        {
          id: '12',
          name: '二级菜单2',
          list: [
            {
              id: '121',
              name: '三级菜单1',
            },
            {
              id: '122',
              name: '三级菜单2',
              list: [
                {
                  id: '1221',
                  name: '四级菜单1',
                },
                {
                  id: '1222',
                  name: '四级菜单2',
                  list: [
                    {
                      id: '12221',
                      name: '五级菜单1a',
                    },
                    {
                      id: '12222',
                      name: '五级菜单2b',
                    },
                    {
                      id: '12223',
                      name: '五级菜单3',
                    },
                  ],
                },
                {
                  id: '1223',
                  name: '四级菜单3',
                },
              ],
            },
            {
              id: '123',
              name: '三级菜单3',
            },
          ],
        },
        {
          id: '13',
          name: '二级菜单3',
        },
      ],
    },
    {
      id: '2',
      name: '表单页',
    },
    {
      id: '3',
      name: '列表页',
      list: [
        {
          id: '31',
          name: '二级菜单1a',
        },
        {
          id: '32',
          name: '二级菜单2b',
        },
        {
          id: '33',
          name: '二级菜单3',
        },
      ],
    },
    {
      id: '4',
      name: '详情页',
    },
    {
      id: '5',
      name: '结果页',
    },
    {
      id: '6',
      name: '弹框页',
    },
    {
      id: '7',
      name: '异常页',
    },
  ];
  `;
  return (
    <div>
      <Copy
        title="内嵌式导航"
        sideNavProps={{
          data,
          mode: 'inline',
        }}
        componentType="side"
        code={`
  export default = () => {
    ${dataCode}
    ${iconMapCode}
    return (
      <SideNav
        style={{ height: 400 }}
        data={data}
        mode="expand"
        keyExtractor={(i: any) => (i.id)}
        nameExtractor={(i: any) => i.name}
        childrenExtractor={(i: any) => i.list}
        iconExtractor={(i: any) => (iconMap as any)[i.id]}
      />
  )
  }
        `}
      />

    </div>
  );
};

export default Inline;
