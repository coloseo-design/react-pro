/* eslint-disable import/prefer-default-export */
export const userDropCode = `
const UserDrop = () => {
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
}
`;

export const menusCode = `
${userDropCode}
const menus = [
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
`;

export const menusCode1 = `
${userDropCode}
const menus = [
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
`;

export const optionsCode = `
const options = [
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
`;

export const navPropsCode = `
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

const navProps = {
  data,
  mode: 'dropdown' as any,
  keyExtractor: (i: Data) => (i.id),
  nameExtractor: (i: Data) => i.name,
  childrenExtractor: (i: Data) => i.list,
  onChangeSelectedKey: (key: string, data1: any) => console.log('topnav md onChangeSelectedKeys:', key, data1),
};
`;

export const topMenusCodes = `
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
`;

export const iconMapCode = `
const iconMap = {
  1: <Icon type="app-line" style={{ fontSize: 18 }} />,
  2: <Icon type="setting-line" style={{ fontSize: 18 }} />,
  3: <Icon type="menu-line" style={{ fontSize: 18 }} />,
  4: <Icon type="document1-line" style={{ fontSize: 18 }} />,
  5: <Icon type="check1-line" style={{ fontSize: 18 }} />,
  6: <Icon type="view-list-line" style={{ fontSize: 18 }} />,
  7: <Icon type="attention1-line" style={{ fontSize: 18 }} />,
};
`;
