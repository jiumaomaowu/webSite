import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router-dom';
import Tab from '../Tab/Tab';  
import { Popover, Button, Icon, Menu } from 'antd';
import { bool } from 'prop-types';
import './Menu.scss';




class MenuMobile extends Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    constructor(props) {
        super(props)
        this.state={
            visible: false,
            openKeys: ['sub1']
        }
        
    }
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
    }
    hide = () => {
        this.setState({
          visible: false,

        });
    }
    handleVisibleChange = (visible) => {
        this.setState({ visible });
      }
   
    //   <li><Link to="/">HOME</Link></li>
    //   <li><Link to="/work">WORK</Link></li>
    //   <li><Link to="/about">ABOUT</Link></li>
    //   <li><Link to="/blog">BLOG</Link></li>
    render () {   
        const clickContent = (
            <div className="menuUl">
            <Menu onClick={this.handleClick} style={{ width: 200 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
                <Menu.Item key="/">
                    <Icon type="home" />
                    <span><Link to="/">HOME</Link></span>
                </Menu.Item>
                <Menu.Item key="/work">
                    <Icon type="pie-chart" />
                    <span><Link to="/work">WORK</Link></span>
                </Menu.Item>
                <Menu.Item key="/about">
                    <Icon type="pie-chart" />
                    <span><Link to="/about">ABOUT</Link></span>
                </Menu.Item>
                <Menu.Item key="/blog">
                    <Icon type="pie-chart" />
                    <span><Link to="/blog">BLOG</Link></span>
                </Menu.Item>
            </Menu>
            </div>
        )   

        return (
        <div className="menu">
        <Popover content={clickContent} trigger="click" visible={this.state.visible} onVisibleChange={this.handleVisibleChange}>
        <div className="icon-color">
            <Icon type={this.state.visible ? 'menu-unfold' : 'menu-fold'} />More
        </div>
      </Popover>
        
      </div>
        )
    }
}


export default MenuMobile