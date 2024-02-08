import React from 'react';
import ReactDOM from 'react-dom/client';
import Sample from './content';
import NavbarCommon from './navigation';
import CollapsibleExample from './scroll';
import Pro from './static';
import Homepg from './homekavin';
import Content from './contentkavin';
import PageSelector from './app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <CollapsibleExample/>
  <Pro/>
  <Homepg/>
  <Content/> */}

  <PageSelector/>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

