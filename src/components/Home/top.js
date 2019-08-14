import React from 'react';
import {withRouter} from 'react-router-dom'
class Top extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="top">
                <div className="top-left" >
                    <div className="top-left-text" >
                        <span>后台管理平台</span>
                        <span>            {this.props.userName}  {this.props.userId} </span>
                    </div>
                </div>
                <div className="top-right">
                    <span onClick={this.pageHome}>首页</span>
                </div>
            </div>
        )
    }
    pageHome = () => {
        this.props.history.push({pathname : '/homePage'})
    }
}
export default withRouter(Top);