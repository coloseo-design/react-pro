/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@union-design/icon';
import SideNav from '@union-design/side-nav';
import '@union-design/side-nav/lib/styles/index.css';
import { MainHeader, PreviewHeader } from './header';
import ActiveColor from '../images/active_color.png';
import NormalColor from '../images/normal_color.png';
import footerMail from '../images/footer-email.png';

const Layout = (props: any) => {
  const [visible, setVisible] = useState(true);
  const [selectedKey, setKey] = useState('/');
  const data = [
    {
      id: '/',
      name: '快速使用',
    },
    {
      id: '/color',
      name: '色彩',
    },
    {
      id: '/header',
      name: '头部',
      list: [
        {
          id: 'business',
          name: '业务类',
        },
        {
          id: 'propaganda',
          name: '宣传类',
        },
        {
          id: 'comprehensive',
          name: '综合类',
        },
      ],
    },
    {
      id: '4',
      name: '导航',
      list: [
        {
          id: 'inline',
          name: '内嵌式导航',
        },
        {
          id: 'expand',
          name: '展开式导航',
        },
        {
          id: 'top',
          name: '顶部导航',
        },
      ],
    },
  ];
  const iconMap = {
    '/': <Icon type="file-editing-line" style={{ fontSize: 18 }} />,
    '/color': <img src={selectedKey === '/color' ? ActiveColor : NormalColor} alt="" style={{ width: 18, height: 18 }} />,
    '/header': <Icon type="app-line" style={{ fontSize: 18 }} />,
    4: <Icon type="list2-line" style={{ fontSize: 18 }} />,
  };
  const navigate = useNavigate();
  return (
    <div className="layout">
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
          onChangeVisible={(v) => {
            setVisible(v);
          }}
          selectedKey={selectedKey}
          onChangeSelectedKey={(key) => {
            navigate(key, { replace: true });
            setKey(key);
          }}
        />
        <div className="layoutContent" style={{ border: visible ? undefined : 'none' }}>
          <div className="content">
            {props.children}
          </div>
          <div className="layoutFooter">
            <div className="footer_contact">
              <img src={footerMail} alt="" width={16} height={12} style={{ marginRight: 5 }} />
              联系我们：hqs-UniDesign@chinaunicom.cn
            </div>
            <div className="footer_rights">- Made with ❤️ 中国联合网络通信集团有限公司 -</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Layout;
