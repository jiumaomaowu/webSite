import React, { Component, PropTypes } from 'react'
import './Header.scss';
import image from '../../images/logo.jpg';
import { Row, Col, Icon, Dropdown,Menu, Button, Drawer } from 'antd';
import Tab from './Tab/Tab';  
import menus from '../../router/config'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom';
class Headers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date:  new Date(),
            nav: 'Home',
            visible:false,
            manux:menus.menus
        }
        this.menuClick = this.menuClick.bind(this)
    }
    menuClick({key}) {
        this.setState({
          nav: key,
          visible:false
        })
        // this.onClose()
    }
   

    showDrawer = () => {
        this.setState({
          visible: true,
        });
       
    };
    onClose = () => {
        this.setState({
          visible: false,
        });
    };
    tick() {
        this.setState({
            date : new Date()
        })
    }
    componentDidMount() {
      
        this.timer = setInterval(()=>this.tick(),1000)
    }
    componentWillUnmount() {
       
        clearInterval(timer);
    }
    render () {
        const li =  this.state.manux.map((item, index) => {
            return (
                <Menu.Item key={item.title} onClick={this.menuClick}>
                    <Link to={item.key} className="nav-li" >
                        {item.icon && <Icon type={item.icon} />}
                        <span className="nav-text ">{item.title}</span>
                    </Link>
                </Menu.Item>
            )
        })
        return (
            <div className="header">
            <Row>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} >
                    <div className="logo">
                         <img src={image} alt="logo" className="logoImg"></img>
                    </div>
              </Col>
             
              <Col xs={0} sm={0} md={10} lg={10} xl={10} >
                <Tab menus={menus.menus} mode="horizontal" />
              </Col>

              <Col xs={10} sm={10} md={0} lg={0} xl={0} >
               {/* <Dropdown overlay={navigator} trigger={['click']}>
                    <div>
                    <Button type="primary" ghost style={{border: 'none'}} className="dash">
                        {this.state.nav}<Icon type="caret-down" />
                    </Button>
                    </div>
                </Dropdown>     */}
                <Button type="primary" className="button" onClick={this.showDrawer}>
                    {this.state.nav}
                </Button>
                <Drawer title="Basic Drawer" placement="right" closable={false} onClose={this.onClose} visible={this.state.visible}>
                    {/* <Tab menus={menus.menus}  onRef={this.onRef}  style={{width: 90, borderRadius: '5%'}}/> */}
                    <Menu   defaultSelectedKeys={[this.props.location.pathname]} className="menu-nav" >
                        {li}
                    </Menu>
                </Drawer>
              </Col>
              <Col xs={10} sm={10} md={10} lg={10} xl={10}>
             
                <div className="git">
                    <Icon type={'github'} className="icon-git"/>
                    {this.state.date.toLocaleTimeString()}
                </div>
              </Col>
            </Row>
          
          </div>
        )
     
      
    }
}
function mapStateToProps(state) {
   
	return {
		visible:state.reducer.visible
	}
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
	return {};
}

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(Headers));