import React from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
// import reqwest from 'reqwest';
import {Form, Icon, Input, Button, Checkbox, Row, Col, message} from 'antd/lib';
import './NormalLoginForm';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor(props) { //构造函数
        super(props);
        this.state = {
            name: '',
            id: '',
        }
        this.nameChange = this.nameChange.bind(this);
        this.idChange = this.idChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    nameChange(e) {
        this.setState({name: e.target.value})
    }

    idChange(e) {
        this.setState({id: e.target.value})
    }

    /** */

    handleSubmit = (e) => {
        e.preventDefault();// 对页面不做改变
        // this.props.form.validateFields((err, values) => {
        //   if (!err) {
        //
        //   }
        // });
        console.log(this.state.name);
        console.log(this.state.id);
        axios({
            url: `http://localhost:2333/user/add?`,
            method: "post",
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
                "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
                "X-Powered-By": ' 3.2.1',
                "Content-Type": "application/json;charset=utf-8"
            },
            params: {
                name: this.state.name,
                userId: this.state.id
            }
        })
            .then(function (response) {
                console.log(response);
                if(response.data.code == 0){

                    alert("success!!");
                }else {
                   alert( "erreor!!");
                }

            })
            .catch(function (error) {
                console.log(error);
            });





        // 调用后台用户登录接口，当账号密码正确的时候
        // const returnData = true
        // if(returnData){
        //     const history = this.props.history;
        //     history.push({pathname:'/home'});
        // } else{
        //     const history = this.props.history;
        //     history.push({pathname:'/'});
        // }
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: '请输入用户名'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="请输入姓名!"
                               onChange={this.nameChange}/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="text"
                               placeholder="请输入学号!" onChange={this.idChange}/>
                    )}
                </FormItem>
                <FormItem>

                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                        报名
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default withRouter(WrappedNormalLoginForm);