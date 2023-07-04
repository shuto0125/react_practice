import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './component/Hello';
import ContainerSample from './component/ContainerSample';
import Page from './component/ContextSample';
import Counter from './component/Counter';
import ReduceCounter from './component/ReduceCounter';
import { MemoParent } from './component/MemoParent';
import { UseCallbackSample } from './component/UseCallbackSample';
import { UseMemoSample } from './component/UseMemoSample';
import { Clock } from './component/Clock'
import { UseContextSample } from './component/UseContextSample';
import { ImageUploader } from './component/UseRefSample';
import { UseImperativeHandleSample } from './component/UseImperativeHandleSample';
import { CustomInput } from './component/CustomHookSample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Hello />
    <ContainerSample />
    <Page />
    <Counter initialValue={0} />
    <ReduceCounter initialValue={0} />
    <MemoParent />
    <UseCallbackSample />
    <UseMemoSample />
    <Clock />
    <UseContextSample />
    <ImageUploader />
    <UseImperativeHandleSample />
    <CustomInput />

    <div style={{ paddingBottom: '100px' }}></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
