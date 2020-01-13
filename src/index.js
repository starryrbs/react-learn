import React from 'react'
import {render} from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components' // 导入
import './index.css'


const Title = styled.h1`
    color: #F00
`;

class App extends React.Component {

    render() {
        const style = {color: 'red'}

        return (
            <div style={style}>
                <li className="text-red">adasdsa
                </li>
                <Title>abcdsada</Title>
            </div>
        )
    }
}

render(<App/>, document.querySelector('#root'));

