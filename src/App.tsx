import React, { useState } from 'react';
import './App.css';
import "@fontsource/roboto";
import RequestResource from './component/request-resource/request-resource';
import { Tabs, TabsProps } from 'antd';
import Declaration from './component/declaration/declaration';

function App() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Phiếu yêu cầu cấp mới tài nguyên`,
      children: <RequestResource />,
    },
    {
      key: '2',
      label: `Bảng kê khai`,
      children: <Declaration />,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className="App">
      <div className='app-body'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
