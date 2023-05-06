import React from 'react';
import Copy from './copy';

const Expand = () => {
  const data = [
    {
      id: '1',
      name: '工作台',
      list: [
        {
          id: '11',
          name: '二级导航',
          list: [
            {
              id: '1201',
              name: '三级导航',
            },
          ],
        },
        {
          id: '12',
          name: '二级导航',
          list: [
            {
              id: '121',
              name: '三级导航',
            },
            {
              id: '122',
              name: '三级导航',
              list: [
                {
                  id: '1221',
                  name: '四级导航四级导航',
                },
                {
                  id: '1222',
                  name: '四级导航四级导航',
                  list: [
                    {
                      id: '12221',
                      name: '五级五级五级五级五',
                    },
                    {
                      id: '12222',
                      name: '五级五级五级五级五',
                    },
                    {
                      id: '12223',
                      name: '五级五级五级五级五',
                    },
                  ],
                },
                {
                  id: '12423',
                  name: '四级导航四级导航',
                },
              ],
            },
            {
              id: '123',
              name: '三级导航',
            },
          ],
        },
        {
          id: '13',
          name: '二级导航',
          list: [
            {
              id: '1223',
              name: '三级导航',
              list: [
                {
                  id: '12541',
                  name: '四级导航四级导航',
                },
                {
                  id: '12641',
                  name: '四级导航四级导航',
                },
              ],
            },
            {
              id: '1344',
              name: '三级导航',
              list: [
                {
                  id: '12241',
                  name: '四级导航四级导航',
                },
                {
                  id: '122p1',
                  name: '四级导航四级导航',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: '表单页',
      list: [
        {
          id: '1y1',
          name: '二级导航',
          list: [
            {
              id: '1t01',
              name: '三级导航',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      name: '列表页',
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
  return (
    <div>
      <Copy
        title="展开式导航"
        sideNavProps={{
          data,
          mode: 'expand',
        }}
      />

    </div>
  );
};

export default Expand;
