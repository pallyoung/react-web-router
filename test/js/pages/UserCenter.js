'use strict'
import React, { Component } from 'react';
class UserCenter extends Component {
    constructor(...props) {
        super(...props);
        this.state = {

        }

    }
    render(){
        return <div>
                <p>登录成功</p>
                <p>用户名：{this.props.uri.search.username}</p>
            </div>
    }
}

export default UserCenter;