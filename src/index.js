import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import projectRoute from './components/projectRoute';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import mystore from './redux/mystore';


 ReactDOM
 .createRoot(document.getElementById('root'))
 .render(
 <Provider store={mystore}>
 <RouterProvider router={projectRoute}/>
 </Provider>
);
