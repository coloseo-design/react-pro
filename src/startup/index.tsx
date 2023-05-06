import React from 'react';
import Highlight from 'highlight-for-react';
import BrowserPng from '../images/browser.png';

const StartUp = () => {
  const a = '';
  return (
    <div>
      <div className="title1">快速使用</div>
      <div className="start-des">react pro 对union-design组件库 header， top-nav, side-nav 或者@union-design/header, @union-design/top-nav, @union-design/side-nav 展示</div>
      <div className="start-line" />
      <div className="second-title">设置代理</div>
      <div className="title3">在项目里的.npmrc中设置</div>
      <div className="start-frame">
        <Highlight>registry=http://ccp.tianti.tg.unicom.local/artifactory/api/npm/sjxt-npm-virtual/</Highlight>
      </div>

      <div className="title3">.yanrc</div>
      <div className="start-frame">
        <Highlight>registry "http://ccp.tianti.tg.unicom.local/artifactory/api/npm/sjxt-npm-virtual/"</Highlight>
      </div>
      <div className="second-title">下载</div>
      <div className="start-frame">
        <Highlight>
          {`
// 使用yarn下载
yarn add union-design
// 使用npm下载
npm install union-design
// 下载某一个分包
yarn add @union-design/xxx
        `}

        </Highlight>
      </div>
      <div>下载union-design包引入样式, 或者在webpack的babel中使用按需加在</div>
      <Highlight>import union-design/lib/index.css</Highlight>
      <div>下载某个分包需要引入这个包自己的css</div>
      <Highlight>import @union-design/xxx/lib/styles/index.css</Highlight>
      <div className="second-title">浏览器支持</div>
      <div className="start-frame">
        <div style={{ padding: '16px 24px', background: '#fff' }}>
          <img src={BrowserPng} alt="" style={{ width: 909 }} />
        </div>
      </div>
    </div>
  );
};

export default StartUp;
