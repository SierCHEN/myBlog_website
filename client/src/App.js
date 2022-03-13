import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from './routes/index';

function App() {
  // 解构 route
  function renderRoutes(routes, rootPath) {
    const children = []

    const renderRoute = (item, contextPath) => {
      let newContextPath = item.path ? `${contextPath}/${item.path}` : `${contextPath}/`;
      newContextPath = newContextPath.replace(/\//, '');

      return <Route key={newContextPath} path={newContextPath} element={<item.component />} />
    }

    routes.map((item) => {
      let newPath = item.path ? `${rootPath}/${item.path}` : `${rootPath}/`;
      newPath = newPath.replace(/\//, '');
      if (item.childRoutes) {
        item.childRoutes.map(($item) => {
          return children.push(renderRoute($item, newPath))
        })
      }
      return
    })

    return children
  }

  const children = renderRoutes(routes, '/')

  return (
    <BrowserRouter>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          {children}
        </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
