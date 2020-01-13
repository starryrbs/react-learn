

# 创建类组件

```
import React from 'react'
import {render} from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>类组件</h1>
                <p>{this.props.desc}</p>
            </div>
        )
    }

}

const app = new App({
    desc: '我是类组件'
}).render();

render(app, document.querySelector('#root'));
```

render 是 react-dom 提供的一个用来渲染组件的方法，一般只需要使用一次