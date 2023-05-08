import React, { useState } from 'react';
import Icon from '@union-design/icon';
import Dropdown from '@union-design/dropdown';

const UserDrop = (props: any) => {
  const { children } = props;
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
  return (
    <Dropdown
      overlayClassName="dropHeader"
      trigger={['click']}
      overlay={overlay}
      onVisibleChange={(v: boolean) => {
        setDown1(!v);
      }}
    >
      {children}
      <Icon style={{ fontSize: 14 }} type={down1 ? 'down2-line' : 'up2-line'} />
    </Dropdown>
  );
};

export default UserDrop;
