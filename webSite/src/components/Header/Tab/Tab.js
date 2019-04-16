import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router-dom';

import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
class Tab extends Component {
    constructor(props) {
        super(props)
        this.state={
           menus:this.props.menus,
           visible:false
        }
        console.log(this.props)
    }
  
    show(){
        console.log("this.props")
        // this.props.menuClick()
    }
    componentDidMount(){
        // this.props.onRef(this)
    }
    render () {  
        const li =  this.state.menus.map((item, index) => {
            return (
                <Menu.Item key={item.key}>
                    <Link to={item.key} className="nav-li">
                        {item.icon && <Icon type={item.icon} />}
                        <span className="nav-text ">{item.title}</span>
                    </Link>
                </Menu.Item>
            )
        })
        return (
            <div >                            
             <Menu mode={this.props.mode}   defaultSelectedKeys={[this.props.location.pathname]} className="menu-nav">
               {li}
            </Menu>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state)
	return {
		isLogin:state
	}
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
	return {};
}

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(Tab));