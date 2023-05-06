import React from 'react';
import Copy from './copy';

const Top = () => {
  type Data = { id: string; name: string; desc?: string; list?: Data[] };
  const data: Data[] = [
    {
      id: '1',
      name: '工作台',
      desc: '我是工作台描述我是工作台描述我是工作台描述我是工作台描述我是工作台描述我是工作台描述',
      list: [
        {
          id: '11',
          name: '二级菜单1',
          list: [
            {
              id: '111',
              name: '三级菜单1',
            },
            {
              id: '112',
              name: '三级菜单2',
            },
            {
              id: '113',
              name: '三级菜单3',
            },
          ],
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
        {
          id: '14',
          name: '二级菜单2',
          list: [
            {
              id: '141',
              name: '三级菜单1',
            },
            {
              id: '142',
              name: '三级菜单2',
            },
            {
              id: '143',
              name: '三级菜单3',
            },
          ],
        },
        {
          id: '15',
          name: '二级菜单2',
          list: [
            {
              id: '151',
              name: '三级菜单1',
            },
            {
              id: '152',
              name: '三级菜单2',
            },
            {
              id: '153',
              name: '三级菜单3',
            },
          ],
        },
        {
          id: '16',
          name: '二级菜单2',
          list: [
            {
              id: '161',
              name: '三级菜单1',
            },
            {
              id: '162',
              name: '三级菜单2',
            },
            {
              id: '163',
              name: '三级菜单3',
            },
          ],
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
      desc: '我是列表页描述我是列表页描述我是列表页描述我是列表页描述我是列表页描述我是列表页描述我是列表页描述',
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
    {
      id: '8',
      name: '异常页异常页异常',
    },
    {
      id: '9',
      name: '异常页异常页异常页',
    },
  ];
  return (
    <div>
      <Copy
        title="顶部导航"
        secondTitle="1. 弹出顶部导航 默认大小"
        topNavProps={{
          data,
          mode: 'dropdown',
        }}
      />
      <Copy
        title=""
        secondTitle="2. 弹出顶部导航 大尺寸"
        topNavProps={{
          data,
          mode: 'dropdown',
          size: 'xl',
        }}
      />
      <Copy
        title=""
        secondTitle="2. 展开顶部导航 默认大小"
        topNavProps={{
          data,
          mode: 'expand',
        }}
      />
      <Copy
        title=""
        secondTitle="2. 展开顶部导航 大尺寸"
        topNavProps={{
          data,
          size: 'xl',
          mode: 'expand',
        }}
      />
      <Copy
        title=""
        secondTitle="2. 展开顶部导航 另一种模式"
        topNavProps={{
          data,
          size: 'xl',
          mode: 'expand-img',
          descExtractor: (i:any) => i.desc,
          bgExtractor: () => (
            <div
              style={{ width: '100%', height: '100%', backgroundColor: 'pink' }}
            />
          ),
        }}
      />
    </div>
  );
};

export default Top;
