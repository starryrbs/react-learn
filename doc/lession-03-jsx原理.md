# 使用jsx语法

```
class App extends React.Component {
    render() {
        return (
            <div className="app" id="appRoot">
                <h1 className="title">类组件</h1>
                <p>{this.props.desc}</p>
            </div>
        )
    }

}
```

每个dom元素可以使用js对象来表示

```
const appVDom ={
    tag:'div',
    attrs:{
        className:'app',
        id:'appRoot'
    },
    children:[
        {
            tag:'h1',
            attrs:{
                className: 'title',
            },
            children: ['类组件']
        },
        {
            tag:'p',
            children: [this.props.desc]
        }
    ]
}
```

通过React.createElement来创建dom元素

```
class App extends React.Component {
    render() {
        return (
            React.createElement('div', {
                    className: 'app',
                    id: 'appRoot'
                }, React.createElement('h1', {
                    className: "title",

                }, "类组件"),
                React.createElement('p', null, this.props.desc))
        )
    }
}

render(<App/>, document.querySelector('#root'));
```

`ReactDOM.render` 功能就是把组件渲染并且构造 DOM 树，然后插入到页面上某个特定的元素上（在这里是 id 为 `root` 的 `div` 元素）。

所以可以总结一下从 JSX 到页面到底经过了什么样的过程：



![jsx原理.png](http://ww1.sinaimg.cn/large/006hwvVngy1gavapsejyej30hm075js2.jpg)

>  为什么不直接从 JSX 直接渲染构造 DOM 结构，而是要经过中间这么一层呢？

1. 当我们拿到一个表示 UI 的结构和信息的对象以后，不一定会把元素渲染到浏览器的普通页面上，我们有可能把这个结构渲染到 canvas 上，或者是手机 App 上。所以这也是为什么会要把 `react-dom` 单独抽离出来的原因，可以想象有一个叫 `react-canvas` 可以帮我们把 UI 渲染到 canvas 上，或者是有一个叫 `react-app` 可以帮我们把它转换成原生的 App（实际上这玩意叫 `ReactNative`）。

2. 有了这样一个对象。当数据变化，需要更新组件的时候，就可以用比较快的算法操作这个 JavaScript 对象，而不用直接操作页面上的 DOM，这样可以尽量少的减少浏览器重排，极大地优化性能。这个在以后的章节中我们会提到。



#### 总结

1. JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。
2. React.js 可以用 JSX来描述你的组件长什么样的。
3. JSX 在编译的时候会变成相应的 JavaScript 对象描述。
4. `react-dom` 负责把这个用来描述UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上。

