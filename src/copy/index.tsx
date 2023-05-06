import React, { useState } from 'react';
import Header from '@union-design/header';
import Icon from '@union-design/icon';
import Tooltip from '@union-design/tooltip';
import Highlight from 'highlight-for-react';
import SideNav from '@union-design/side-nav';
import TopNav from '@union-design/top-nav';
import '@union-design/side-nav/lib/styles/index.css';
import '@union-design/tooltip/lib/styles/index.css';

const Copy = (props: any) => {
  const {
    title, secondTitle, headerProps, sideNavProps, topNavProps,
  } = props;
  const [show, setShow] = useState(false);

  const copyCode = `
  import Header from '@union-design/header';
  import from '@union-design/header/lib/styles/index.css';
  import AnswerPng from '../images/answer.png';
  import personPng from '../images/person.png';
  import AvatarPng from '../images/avatar.png';
`;

  const handleCopy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = `${copyCode}`;
    document.body.appendChild(textarea);
    textarea.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
    }
    document.body.removeChild(textarea);
  };

  const iconMap = {
    1: <Icon type="app-line" style={{ fontSize: 18 }} />,
    2: <Icon type="setting-line" style={{ fontSize: 18 }} />,
    3: <Icon type="menu-line" style={{ fontSize: 18 }} />,
    4: <Icon type="document1-line" style={{ fontSize: 18 }} />,
    5: <Icon type="check1-line" style={{ fontSize: 18 }} />,
    6: <Icon type="view-list-line" style={{ fontSize: 18 }} />,
    7: <Icon type="attention1-line" style={{ fontSize: 18 }} />,
  };

  return (
    <div>
      <div className="title2">{title}</div>
      <div className="title3">{secondTitle}</div>
      <div className="header-frame">
        {headerProps && <Header {...headerProps} />}
        {sideNavProps && (
        <SideNav
          style={{ height: 400 }}
          {...sideNavProps}
          keyExtractor={(i: any) => `${i.id}`}
          nameExtractor={(i: any) => i.name}
          childrenExtractor={(i: any) => i.list}
          iconExtractor={(i: any) => (iconMap as any)[i.id]}
        />
        )}
        {topNavProps && (
        <TopNav
          {...topNavProps}
          keyExtractor={(i: any) => `${i.id}`}
          nameExtractor={(i: any) => i.name}
          childrenExtractor={(i: any) => i.list}
          onChangeSelectedKey={(key, data) => console.log('topnav xl onChangeSelectedKeys:', key, data)}
        />
        )}
        <div className="code-operation">
          <div onClick={() => setShow(!show)}>
            <Tooltip message="现实代码" placement="bottom">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="形状" d="M19.8125 2C20.3252 2 20.7417 2.41138 20.75 2.922L20.75 15.7812C20.75 16.2938 20.3389 16.7103 19.8281 16.7186L19.8125 16.7188L16.7422 16.7188L16.7422 19.8125C16.7422 20.3251 16.3311 20.7416 15.8203 20.75L2.9375 20.75C2.4248 20.75 2.0083 20.3386 2 19.828L2 6.92188C2 6.4093 2.41113 5.9928 2.92188 5.9845L2.9375 5.98438L6.03125 5.98438L6.03125 2.9375C6.03125 2.42493 6.44238 2.00842 6.95312 2L19.8125 2ZM8.65625 3.875L18.1372 3.875C18.5415 3.88159 18.8682 4.20819 18.875 4.61255L18.875 14.106C18.8687 14.5105 18.542 14.8371 18.1372 14.8438L16.7422 14.8438L16.7422 6.92188L16.7422 6.90637C16.7339 6.39575 16.3174 5.98438 15.8047 5.98438L7.90625 5.98438L7.90625 4.61255C7.91309 4.2041 8.24609 3.875 8.65625 3.875ZM9.38281 9.24219C8.76758 9.24219 8.26807 9.73584 8.25781 10.3486L8.25781 10.3672L8.25781 12.2422L6.38281 12.2422C5.76758 12.2422 5.26807 12.7358 5.25781 13.3486L5.25781 13.3672C5.25781 13.9823 5.75146 14.4821 6.36426 14.4921L6.38281 14.4922L8.25781 14.4922L8.25781 16.3672C8.25781 16.9823 8.75146 17.4821 9.36426 17.4921L9.38281 17.4922C9.99805 17.4922 10.4976 16.9985 10.5078 16.3858L10.5078 16.3672L10.5078 14.4922L12.3828 14.4922C12.998 14.4922 13.4976 13.9985 13.5078 13.3858L13.5078 13.3672C13.5078 12.7521 13.0142 12.2523 12.4014 12.2423L12.3828 12.2422L10.5078 12.2422L10.5078 10.3672C10.5078 9.75208 10.0142 9.25226 9.40137 9.24231L9.38281 9.24219Z" clipRule="evenodd" fillRule="evenodd" fill="currentColor" fillOpacity="1.000000" />
                <defs />
              </svg>
            </Tooltip>
          </div>
          <div onClick={handleCopy}>
            <Tooltip message="复制代码" placement="bottom">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="形状" d="M19.125 2.85938C19.125 2.38477 18.7402 2 18.2656 2L4.85938 2C4.38477 2 4 2.38477 4 2.85938L4 20.3906C4 20.8652 4.38477 21.25 4.85938 21.25L18.2656 21.25C18.7402 21.25 19.125 20.8652 19.125 20.3906L19.125 2.85938ZM10.1626 11.3739L11.9277 5.95465L11.9277 5.95459C12.021 5.66888 12.3276 5.51257 12.6133 5.60529L12.6226 5.60834C12.9023 5.70453 13.0542 6.00775 12.9624 6.29016L11.1973 11.7095C11.104 11.9952 10.7974 12.1515 10.5117 12.0588L10.5024 12.0557C10.2227 11.9595 10.0708 11.6563 10.1626 11.3739ZM13.7515 6.55499L13.7456 6.56195C13.5596 6.79181 13.5928 7.12793 13.8188 7.31708L13.8257 7.32275L15.5039 8.6817L13.8257 10.0406C13.5957 10.2267 13.5581 10.5625 13.7397 10.7944L13.7456 10.8015C13.9336 11.0337 14.2744 11.0695 14.5063 10.8815L16.6899 9.1134C16.8252 9.00403 16.8936 8.84296 16.8906 8.6817C16.8936 8.5235 16.8276 8.36554 16.6978 8.25635L16.6899 8.25L14.5063 6.48193C14.2769 6.29578 13.9404 6.32898 13.7515 6.55499ZM8.62646 6.47583C8.8584 6.29474 9.19385 6.33264 9.37939 6.56256C9.56592 6.79352 9.53223 7.13062 9.30615 7.32074L9.29932 7.32648L7.63184 8.68164L9.29932 10.0368L9.30615 10.0425C9.53223 10.2327 9.56592 10.5698 9.37939 10.8007C9.19189 11.033 8.85205 11.0693 8.61963 10.8819L6.43506 9.10675L6.42773 9.10028C6.2998 8.99243 6.2334 8.83759 6.23438 8.68164C6.2334 8.5257 6.2998 8.37085 6.42773 8.263L6.43506 8.25653L8.61816 6.4826L8.62646 6.47583ZM15.623 14.6543L7.50195 14.6543C7.12207 14.6543 6.81445 14.9621 6.81445 15.3418C6.81445 15.7177 7.11621 16.0231 7.49072 16.0292L7.50195 16.0293L15.623 16.0293C16.0029 16.0293 16.3105 15.7215 16.3105 15.3418C16.3105 14.9659 16.0088 14.6605 15.6343 14.6544L15.623 14.6543ZM7.50195 17.4043L12.1426 17.4043L12.1538 17.4044C12.5283 17.4105 12.8301 17.7159 12.8301 18.0918C12.8301 18.4715 12.5225 18.7793 12.1426 18.7793L7.50195 18.7793L7.49072 18.7792C7.11621 18.7731 6.81445 18.4677 6.81445 18.0918C6.81445 17.7121 7.12207 17.4043 7.50195 17.4043Z" clipRule="evenodd" fillRule="evenodd" fill="currentColor" fillOpacity="1.000000" />
                <defs />
              </svg>
            </Tooltip>
          </div>
        </div>
      </div>
      {show && (
        <div className="hight-div">
          <Highlight>{copyCode}</Highlight>
        </div>
      )}
    </div>
  );
};

export default Copy;
