import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Loading } from "./_compenents/loading";
export interface IRouter {
  name?: string;
  path: string;
  exact?: boolean;
  children?: IRouter[];
  component: React.FC;
}

export const router: IRouter[] = [
  {
    path: "/",
    component: lazy(() => import("./_compenents/home")),
    exact: true,
  },
  {
    path: "/sub",
    component: lazy(() => import("./sub")),
  },
];

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          {router.map((item, i) => {
            return <Route key={i} path={item.path} component={() => <item.component />} exact={item.exact}></Route>;
          })}
          {/* <Route path="/" component={() => <Home />} exact></Route>
          <Route path="/sub" component={() => <SubPage />}></Route> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterConfig;
