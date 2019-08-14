import React from 'react'
import axios from 'axios'
import {Divider, Modal,message,Button} from "antd";
import {withRouter} from "react-router-dom";

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible : false
        }
    }
    render(){
        return (
            <div>
                <h1>待开发，这里是首页</h1>
            </div>
        )
    }
}
export default HomePage