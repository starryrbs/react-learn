import React from 'react'
import {render} from 'react-dom'

// class App extends React.Component {
//     render() {
//         return (
//             <div className="app" id="appRoot">
//                 <h1 className="title">类组件</h1>
//                 <p>{this.props.desc}</p>
//             </div>
//         )
//     }
//
// }

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

// const appVDom ={
//     tag:'div',
//     attrs:{
//         className:'app',
//         id:'appRoot'
//     },
//     children:[
//         {
//             tag:'h1',
//             attrs:{
//                 className: 'title',
//             },
//             children: ['类组件']
//         },
//         {
//             tag:'p',
//             children: [this.props.desc]
//         }
//     ]
// }
