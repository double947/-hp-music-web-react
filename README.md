### 项目规范：项目中有一些开发规范和代码风格
  -1.文件夹、文件名称统一小写、多个单词以连接符（-）连接；
  -2.JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；
  -3.CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）;
  -4.整个项目不再使用class组件，统一使用函数式组件，并且全面拥抱Hooks；
  -5.所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹；
  -6.组件内部的状态，使用useState、useReducer；业务数据全部放在redux中管理；
  -7.函数组件内部基本按照如下顺序编写代码：
   组件内部state管理；
   redux的hooks代码；
   其他组件hooks代码；
   其他逻辑代码；
   返回JSX代码；
  -8.redux代码规范如下：
    每个模块有自己独立的reducer，通过combineReducer进行合并；
    异步请求代码使用redux-thunk，并且写在actionCreators中；
    redux直接采用redux hooks方式编写，不再使用connect；
  -9.网络请求采用axios
    对axios进行二次封装；
    所有的模块请求会放到一个请求文件中单独管理；
  -10.项目使用AntDesign
    项目中某些AntDesign中的组件会被拿过来使用；
    但是多部分组件还是自己进行编写；
    其他规范在项目中根据实际情况决定和编写；
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
