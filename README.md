# 从 0-1 搭建 react 工程，学习工程化

这个是一个 Vite + React + React-Router-Dom + tailwindcss + jest 的前端项目，暂不支持 SSR。

## Feature

- 开箱 typescript
- 支持 tailwind-jit
- eslint + prettier + husky
- jest + esbuild
- CSSTransition + react-motion

## 目录结构

```
pages
├─_compenents                   --公用组件
│  ├─foot
│  ├─header
│  │      index.tsx
│  ├─home
│  │      index.tsx
│  └─loading
│          index.tsx
├─_hooks                        --公用hooks
├─sub
│      index.tsx
│─utils
└─     getStateFromRouter.ts
```

## 参考

- husky : https://typicode.github.io/husky/#/
- React : https://reactjs.org/docs/getting-started.html
- React-Router : https://v5.reactrouter.com/web/example/basic
- Vite : https://vitejs.dev/guide/
- tailwindcss : https://www.tailwindcss.cn/docs/utility-first
- react-motion : https://github.com/chenglou/react-motion
- CSSTransition : http://reactcommunity.org/react-transition-group/
- jest

### 遇到的问题

- 路由问题 : https://www.jianshu.com/p/23f02b106e69
- lint-staged 检查配置 : https://github.com/okonet/lint-staged#readme
- react 组件测试 : https://testing-library.com/docs/react-testing-library/api/#render
