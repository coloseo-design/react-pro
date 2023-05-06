import React from 'react';
import colorPng from '../images/color.png';
import '../index.css';

const Colors = () => {
  const primaryColor = [
    {
      color: '#C20000',
      text: '常规',
      textColor: 'MainColor 6',
    },
    {
      color: '#D81C1C',
      text: '悬停',
      textColor: 'MainColor 5',
    },
    {
      color: '#FFF3F3',
      text: '白底选中',
      textColor: 'MainColor 1',
    },
    {
      color: '#A90000',
      text: '点击',
      textColor: 'MainColor 7',
    },
    {
      color: '#F57676',
      text: '一般禁用',
      textColor: 'MainColor 3',
    },
    {
      color: '#FCB0B0',
      text: '文字禁用',
      textColor: 'MainColor 2',
    },
    {
      color: '#E94444',
      text: '特殊场景规',
      textColor: 'MainColor 4',
    },
  ];
  const textColor = [
    {
      textColor: 'text 1',
      color: '#282828',
      text: '一级文字',
    },
    {
      textColor: 'text 2',
      color: '#595959',
      text: '二级文字',
    },
    {
      textColor: 'text 3',
      color: '#969696',
      text: '三级文字',
    },
  ];
  const IconColor = [
    {
      textColor: 'icon 1',
      color: '#595959',
      text: '一级图标',
    },
    {
      textColor: 'icon 2',
      color: '#969696',
      text: '二级图标',
    },
  ];
  const fillColor = [
    {
      textColor: 'hover fill',
      color: '#F4F4F4',
      text: '悬停灰',
    },
    {
      textColor: 'click fill',
      color: '#EAEAEA',
      text: '点击灰',
    },
    {
      textColor: 'disable fill',
      color: '#F7F7F7',
      text: '不可用灰',
    },
    {
      textColor: 'background',
      color: '#F3F3F3',
      text: '背景灰',
    },
    {
      textColor: 'background',
      color: '#F9F9F9',
      text: '表头灰',
    },
  ];

  const lineColor = [
    {
      textColor: 'line 1',
      color: '#CECECE',
      text: '描边',
    },
    {
      textColor: 'line 2',
      color: '#E5E5E5',
      text: '分割线',
    },
  ];

  const semanticsColor = [
    {
      textColor: 'help 1',
      color: '#0060FF',
      text: '帮助 1',
    },
    {
      textColor: 'help 2',
      color: '#7BADFF',
      text: '帮助 2',
    },
    {
      textColor: 'help 3',
      color: '#EBF2FF',
      text: '帮助 3',
    },
  ];
  const semanticsColor1 = [
    {
      textColor: 'success 1',
      color: '#00B42A',
      text: '成功  1',
    },
    {
      textColor: 'success 2',
      color: '#3BDE61',
      text: '成功  2',
    },
    {
      textColor: 'success  3',
      color: '#EAFEEE',
      text: '成功  3',
    },
  ];
  const semanticsColor2 = [
    {
      textColor: 'warning 1',
      color: '#FF7D00',
      text: '警告  1',
    },
    {
      textColor: 'warning 2',
      color: '#FFB56E',
      text: '警告  2',
    },
    {
      textColor: 'warning  3',
      color: '#FFF3E7',
      text: '警告  3',
    },
  ];
  const semanticsColor3 = [
    {
      textColor: 'error 6',
      color: '#F53F3F',
      text: '错误 6｜危险常规',
    },
    {
      textColor: 'error 4',
      color: '#FF5656',
      text: '错误4｜危险悬停',
    },
    {
      textColor: 'error  1',
      color: '#FFECEC',
      text: '错误 1',
    },
    {
      textColor: 'error  7',
      color: '#CF2525',
      text: '错误7｜危险点击',
    },
    {
      textColor: 'error  3',
      color: '#FF9595',
      text: '错误3｜一般禁用',
    },
    {
      textColor: 'error  2',
      color: '#FFBFBF',
      text: '错误2｜文字禁用',
    },
  ];

  const otherColor = [
    {
      textColor: 'Other color 1',
      color: '#326EFF',
      text: '操作｜超链接',
    },
    {
      textColor: 'Other color 2',
      color: '#F6BD16',
      text: '黄色｜评分',
    },
  ];

  return (
    <div>
      <div className="title2">色彩</div>
      <div className="title3">色介</div>
      <img src={colorPng} style={{ width: 1100, height: 60, marginTop: 14 }} alt="" />
      <div className="title3">主题色</div>
      <div className="current">
        {primaryColor.map((item: any) => (
          <div key={item.color}>
            <div className="current-color" style={{ backgroundColor: item.color }} />
            <div>{item.textColor}</div>
            <div>{item.color}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
      <div className="title3">文字色</div>
      <div className="current">
        {textColor.map((item: any) => (
          <div key={item.color}>
            <div className="current-color" style={{ backgroundColor: item.color }} />
            <div>{item.textColor}</div>
            <div>{item.color}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
      <div className="title3">图标色</div>
      <div className="current">
        {IconColor.map((item: any) => (
          <div key={item.color}>
            <div className="current-color" style={{ backgroundColor: item.color }} />
            <div>{item.textColor}</div>
            <div>{item.color}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
      <div className="title3">填充色</div>
      <div className="current">
        {fillColor.map((item: any) => (
          <div key={item.color}>
            <div className="current-color" style={{ backgroundColor: item.color }} />
            <div>{item.textColor}</div>
            <div>{item.color}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
      <div className="title3">线条色</div>
      <div className="current">
        {lineColor.map((item: any) => (
          <div key={item.color}>
            <div className="current-color" style={{ backgroundColor: item.color }} />
            <div>{item.textColor}</div>
            <div>{item.color}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
      <div className="title3">语义色</div>
      <div className="current">
        {semanticsColor.map((item: any) => (
          <div key={item.color}>
            <div className="current-color" style={{ backgroundColor: item.color }} />
            <div>{item.textColor}</div>
            <div>{item.color}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
      <div className="current" style={{ marginTop: 40 }}>
        {semanticsColor1.map((item: any) => (
          <div key={item.color}>
            <div className="current-color" style={{ backgroundColor: item.color }} />
            <div>{item.textColor}</div>
            <div>{item.color}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
      <div className="current" style={{ marginTop: 40 }}>
        {semanticsColor2.map((item: any) => (
          <div key={item.color}>
            <div className="current-color" style={{ backgroundColor: item.color }} />
            <div>{item.textColor}</div>
            <div>{item.color}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
      <div className="current" style={{ marginTop: 40 }}>
        {semanticsColor3.map((item: any) => (
          <div key={item.color}>
            <div className="current-color" style={{ backgroundColor: item.color }} />
            <div>{item.textColor}</div>
            <div>{item.color}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
      <div className="title3">其他色</div>
      <div className="current">
        {otherColor.map((item: any) => (
          <div key={item.color}>
            <div className="current-color" style={{ backgroundColor: item.color }} />
            <div>{item.textColor}</div>
            <div>{item.color}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
