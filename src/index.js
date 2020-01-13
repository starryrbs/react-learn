import React from 'react'

import ReactDom from 'react-dom'

// const app = <h1>Welcome React</h1>;

// const createApp = (props) => {
//     return <div>
//         {/*大三大四*/}
//         <h1>Welcome {props.title}</h1>
//     </div>;
// };
//
// const app = createApp({
//     title: ' React 16.8'
// });

const App = (props) => {
    return <div>
        <h1>Welcome {props.title}</h1>
    </div>;
};


ReactDom.render(
    <App title="标题"/>,
    document.querySelector('#root')
);
