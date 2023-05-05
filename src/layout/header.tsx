/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import Icon from '@union-design/icon';
import Header from '@union-design/header';
import Dropdown from '@union-design/dropdown';
import '@union-design/header/lib/styles/index.css';
import '@union-design/dropdown/lib/styles/index.css';
import './index.css';

export const MainHeader = () => {
  const [down, setDown] = useState(true);
  const [down1, setDown1] = useState(true);
  const overlay = (
    <>
      <div>
        <Icon type="user-line" />
        个人信息
      </div>
      <div>
        <Icon type="setting-line" />
        个人设置
      </div>
      <div>
        <Icon type="logout-line" />
        退出登录
      </div>
      <div>
        <Icon type="news-line" />
        我的消息
      </div>
    </>
  );
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
        <Icon type="menu-line" />
        版本切换
        <Icon type={down ? 'down2-line' : 'up2-line'} />
      </Dropdown>
    </div>,
    <div key="4" className="currentMenu">
      <Dropdown
        overlayClassName="dropHeader"
        trigger={['click']}
        overlay={overlay}
        onVisibleChange={(v: boolean) => {
          setDown1(!v);
        }}
      >
        你好
        <Icon type={down1 ? 'down2-line' : 'up2-line'} />
      </Dropdown>
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
