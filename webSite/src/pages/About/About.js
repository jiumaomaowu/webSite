import React, {Component} from 'react';
import image from '../../images/logo.jpg';
import Switch from '../../components/Switch/Switch';
import {  
    Row,
    Col,
    Card,
    Icon } from 'antd';
import './About.scss'
import Slide from './Slide/Slide';

const { Meta } = Card;

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchin:true,
            data:[
                {
                    title:'自我描述',
                    content:[
                        '1.对移动端,PC 端项目微信小程序都有开发经验，能很好的适配各种浏览器和设备。',
                        '2.能使用 ES6 进行前端开发',
                        '3.熟练使用基于 vue+vue-router+vuex 的开发方式',
                        '4.使用 Node+koa2 MongoDB 进行增删改查的实现。',
                        '5.能使用 Git/svn 进行项目协作，并掌握常用的 git 命令',
                        '6.可以快速找到并且解决bug。'
                    ] 
                },
                {
                    title:'工作经历',
                    content:{
                        company:'上海医明康德医疗健康科技有限公司/技术部',
                        content_text:[
                            "我任职上海医明康德医疗健康科技有限公司技术部门，该部门主要业务为全基因组检测，特色健康管理，价值医药咨询。",
                            "主要工作负责实现康码APP内嵌的H5页面，与客户端进行功能交互，",
                            "完成医明康德官网的开发，康码小程序的定期更新迭代",
                            "并vue，element-ui，node.js完成后台管理系统的开发"
                        ]
                    }
                },
                {
                    title:'项目经历',
                    content:[
                        {
                            project:'康码APP',
                            description:'主要负责app内嵌html5页面的开发，并于客户端交互实现功能。包括咨询展示，缓存，评论，转发，还有问卷。还有各版本机型的兼容，代码审查，快速定位bug并排除前期技术栈：html5/jq/css/ajax后期技术栈：html5/js/vue/vuex/axios'
                        },{
                            project:'康码小程序',
                            description:'康码小程序1.0 是通过分享医疗健康商品进行砍价来达到最低价位，然后兑换优惠码在APP内进行付款康码小程序2.0 加入免费定制体检套餐，免费定制营养套餐，新药咨询。康码小程序3.0 专门为新年发起的基因酒桌活动，通过 邀请好友加入酒桌满桌8位即开喝获得优惠券，可无门槛在APP内购买商品职责：负责小程序前端页面的开发，实现与后台交互功能，完成版本更新迭代。技术栈：微信小程序框架/'
                        },{
                            project:'后台管理系统',
                            description:'此项目为SMO-SSU医院管理系统，是为了方便smo同事方便快捷的查看数据，录入数据，管理医院数据，和会议时间开发职责：后台管理系统的前端页面开发并适配于各种浏览器，实现前端登陆注册，增删改查功能和权限管理，还有数据统计。技术栈：前期：html5/css/jq/ajax/php后期:html5/css/vue/element ui/vuex/vue-router/axios/node.js/koa2后期 配置前端代码环境并部署代码，进行前后端分离式开发 前端采用vue/element ui/vuex/vue-router/axios/后端用node.js+koa2+mongodb,完成api接口的开发并对linux服务器进行部署'
                        },
                        {
                            project:'康码官网',
                            description:'医明康德官网是医明康德对外展示信息的窗口，为下载APP提供入口职责：为医明康德的官网主要负责日常项目迭代开发，部分模块代码迁移技术栈：html/css/jq/ajax/适配各个浏览器的兼容问题，'
                        },
                        {
                            project:'react博客',
                            description:'博客采取react全家桶式架构，前端技术栈为：react+react-redux+react-router+ant.design UI框架，负责平时技术栈的积累'
                        }
                    ]
                }
            ]
        }
    }
    switchOut(n){
        this.setState(
          {
            switchin:n
          }
        )
    }

    render() {
        let _that =this;
        let content = _that.state.data[0].content.map((item,index)=>{
           return(
            <span key={index}>{item}</span>
           )                          
        })
        let work = _that.state.data[1].content.content_text.map((item,index)=>{
            return (
                <span key={index}>{item}</span>
            )
        })

        let project = _that.state.data[2].content.map((item,index)=>{
            return (
                <div className='project' key={index}>
                    <span className='project-title'  >{item.project}</span>
                    <span className='project-desc' >{item.description}</span>
                </div>
                
            )
        })

        return (
            <div className="page page2">
                <Row>
                    <Col lg={{ span: 6, offset: 1 }} md={{ span: 6, offset: 1 }} xs={{ span: 24 }}>
                        <div className="page-info">
                            <Card hoverable  cover={<img alt="example" className="imageLogo" src={image} />}>
                                <Meta title="九毛五" description=" 被岁月一遍又一遍 侵蚀的 ☀️少年 九0后"/>
                                <span>3年工作经验 / 本科 / 25岁</span>
                                <span>liuzhaoyuabc@163.com</span>
                            </Card>
                        </div>
                        <div className="page-info">
                            <Card title="求职意向" bordered={false} > 
                                <div className="page-card">
                                    <span><Icon type="lock" />HTML5</span>
                                    <span><Icon type="home" />全职</span>
                                    <span><Icon type="environment" />北京</span>
                                    <span><Icon type="pay-circle" />18k-20k</span>
                                    <span><Icon type="credit-card" />积极找工作／2周以内</span>
                                </div>     
                                
                            </Card>
                        </div>
                        <div className="page-info">
                            <Slide/>
                        </div>
                    </Col>
                    <Col  lg={{ span: 15, offset: 1 }} md={{ span: 15, offset: 1 }} xs={{ span: 24 }} className="about-wrapper">
                        <div className="page-info">
                            <Card title="自我描述" bordered={false} className="page-text " id="page-two"> 
                                <div className="page-card ">                             
                                    {content}
                                </div>  
                            </Card>
                            <Card title="工作经历" bordered={false} className="page-text " id="page-three">        
                                <div className="page-card ">
                                   <div className="company">{_that.state.data[1].content.company}</div>
                                    {work}
                                </div>     
                            </Card>
                            <Card title="项目经历" bordered={false} className="page-text " id="page-four">                             
                                <div className="page-card ">                            
                                    {project}
                                   
                                </div>                                   
                            </Card>
                            <Card title="社交主页" bordered={false} className="page-text " id="page-six">                             
                                <div className="page-card ">                            
                                    react博客：www.liuzhaoyu667.com
                                    vue后台管理系统：www.liuzhaoyu667.com
                                </div>                                   
                            </Card>
                            
                        </div>
                    </Col>
                   
                   
                </Row>
               {this.state.switchin?<Switch type="enter" callback={this.switchOut.bind(this)}/>:''}
            </div>
        )
    }
}

export default UserInfo;
