import React, {Component} from 'react';
import {  

    Icon,   Menu, Anchor } from 'antd';
 
class Slide extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu:[
                {
                    icon:'user',
                    text:'基本信息',
                },
                {
                    icon:'fill-text',
                    text:'个人能力',
                },
                {
                    icon:'mail',
                    text:'工作经历',
                },
                {
                    icon:'project',
                    text:'项目经验',
                },
                {
                    icon:'picture',
                    text:'图片作品',
                },
                {
                    icon:'switcher',
                    text:'社交主页',
                }
            ],
            current:''
        }
    }
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
        }
    }
    handleClick = (e) => {
        this.scrollToAnchor(e.key)
        this.setState({
          current: e.key,
        });
      }
    
    render() {
        return (
            <div >
                <Anchor>
                    <Menu className="menuul"  onClick={this.handleClick}    mode="inline">
                        <Menu.Item key="page-two">
                            <Icon type="fill-text"/>
                            <span>个人能力</span>
                        </Menu.Item>
                        <Menu.Item key="page-three">
                            <Icon type="mail" />
                            <span>工作经历</span>
                        </Menu.Item>
                        <Menu.Item key="page-four">
                            <Icon type="project" />
                            <span>项目经验</span>
                        </Menu.Item>
                        <Menu.Item key="page-six">
                            <Icon type="switcher" />
                            <span>社交主页</span>
                        </Menu.Item>
                    </Menu>
                </Anchor>
               
            </div>
        )
    }
}

export default Slide;
