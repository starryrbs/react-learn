### 创建 react 项目

1.  使用 create-react-app 创建 app

    ```
    npx create-react-app project_name
    ```

    > `npx`是什么？

    - **`npx`是 npm5.2 之后发布的一个命令**。

    - **`npx`是为了解决什么**？

      场景：项目中(项目内部，不是全局)安装了测试工具`Mocha`，我想在项目中调用 `Mocha`，怎么调用？

      之前解决办法：只能在项目脚本和 `package.json` 的 scripts 字段里面， 如果想在命令行下调用，只能像下面这样调用

      ```
      ./node_modules/.bin/mocha -v
      ```

      看到这里，是不是感觉调用很麻烦？所以出现了 npx，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了

      ```
      $ npx mocha -v
      ```

    - **`npx`的原理是什么**？

      `npx`会自动查找当前依赖包中的可执行文件，如果找不到，就会去 PATH 里找。如果依然找不到，就会帮你安装！

      > 使用`create-react-app`创建一个 react 项目。

      - 老方法:

        ```
        npm install -g create-react-app
        create-react-app my-app
        ```

      - `npx`方式:

        ```
         npx create-react-app my-app
        ```

    ​ 这条命令会临时安装 create-react-app 包，命令完成后 create-react-app 会删掉，不会出现在 global 中。下次再执行，还是会重新临时安装。

2.  使用 eject 命令将 webpack 配置弹射出来

    `create-react-app`创建的 react 项目没有 webpack 相关的配置的目录,使用以下命令可以将 webpack 配置弹射出来

    ```
    npm run eject
    ```

3.  react 元素创建

    在 index.js 中，我们可以这样来创建元素:

    - 这种方式创建了一个简单的 react 元素

      ```
      import React from 'react'

      import ReactDom from 'react-dom'

      const app = <h1>Welcome React</h1>

      ReactDom.render(
          app,
          document.querySelector('#root')
      );

      ```

    - 使用箭头函数的方式来创建:

      ```
      const createApp = (props) => {
          return <div>
              {/*大三大四*/}
              <h1>Welcome {props.title}</h1>
          </div>;
      };

      const app = createApp({
          title: ' React 16.8'
      });
      ```

    - **要在 jsx 里面写 js 加一个`{}`就可以了**

      > **注释也是加一层 `{}`**

      ```
      return (<div>
          {/*我是注释*/}
          <h1>Welcome {props.title}</h1>
      </div>);
      ```

### 备注

1. react-vr react 实现 vr 应用库

2. react native 可以将 react 转成原生的 object-c ,ios,安卓
