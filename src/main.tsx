import React from 'react';
import ReactDom from 'react-dom';

// legacy 旧模式 渲染时同步的
// ReactDom.render(<h1>hello</h1>, document.getElementById('root'));

// 启用并发渲染模式
ReactDom.createRoot(document.getElementById('root')!).render(<h1>hello</h1>)