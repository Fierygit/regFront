import React, { Component } from 'react';
import './home.css';
import Top from './top';
import Left from './left';
import Right from './right';
class Home extends Component {
    /**登出时，使登陆背景动图显示 */
    render() {

        const userName = "管理员"
        const userId = "1"
        return (
                <div>
                    <Top userId={userId} userName={userName}/>
                    <Left />
                    <Right />
                </div>
        );
    }
} 
export default Home;