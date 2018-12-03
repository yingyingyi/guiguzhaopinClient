import React, {Component} from 'react';
import {NavBar, WingBlank, WhiteSpace, List, InputItem, Radio, Button } from 'antd-mobile';

import Logo from '../login';

const Item = List.Item;

class Register extends Component {
    state ={
        laoban:true,
        useName : '',
        password:'',
        rePassWord:'',
    }

    //更新数据
    handleChange = (type,value) =>{
        this.setState({
            [type]:value
        })
    }
    //注册数据（ajax）
    registers = () =>{
      //收集数据
        const {laoban,useName,password,rePassWord} = this.state
        console.log(laoban,useName,password,rePassWord)
    }
    //登录界面
    login = () =>{
      //登录界面
        this.props.history.replace('/login')

    }


  render () {
      //获老板的值
      const {laoban} = this.state;
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={value =>this.handleChange('useName',value)}>用户名:</InputItem>
            <WhiteSpace />
            <InputItem  onChange={value => this.handleChange('password',value)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace />
            <InputItem onChange={value => this.handleChange('rePassWord',value)} >确认密码:</InputItem>
            <WhiteSpace />
            <Item>
              用户类型：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked ={!laoban} onChange={this.handleChange.bind(null,'laoban',false)}> 大神</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checkes={laoban} onChange={this.handleChange.bind(null,'laoban',true)}>老板</Radio>
            </Item>
            <WhiteSpace />
            <Button type="primary" onClick={this.registers}>注册</Button>
            <WhiteSpace />
            <Button onClick={this.login}>已有账户</Button>
            <WhiteSpace />
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register;