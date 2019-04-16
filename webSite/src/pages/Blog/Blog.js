import React, {Component} from 'react';
import Switch from '../../components/Switch/Switch';
import './Blog.scss'
import image from '../../images/logo.jpg';
// import {getBlog} from "actions/Blog";
import { withRouter } from 'react-router-dom'
import { timetrans} from '../../utils/utils'
import {  
    Row,
    Col,
    Card,
    Icon,List, Pagination, Tag, Menu } from 'antd';

const { Meta } = Card;
import {connect} from 'react-redux';
import { _getBlog } from '../../axios/api/api'
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchin:true,
            currentPage: 1,
            total:'',
            data:[
               
               
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
    async getBlog(params){
      
        const res = await _getBlog(params)
        if(res.code == 200){
            console.log("返回博客数据：，，，------",res)
            this.setState({
                data:res.blog,
                total:res.total
            })
        }
    }
    componentDidMount(){
        let params = {
            page:1,
            blogName:'' 
        }
        this.getBlog(params)
    }
    render() {       
        const pagination = {
            pageSize: 5,
            current: this.state.currentPage,
            total: Number(this.state.total),
            size: 'small',
            onChange: ((page, pageSize) => {
              this.setState({
                currentPage: page
              })
              let params = {
                page:page,
                blogName:''      
              }
              this.getBlog(params)
            })          
          }
          const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} />
              {text}
            </span>
          )       
        return (
            <div className='page page3'>
            <Row>
                <Col lg={{ span: 5, offset: 1 }} md={{ span: 7, offset: 1 }} xs={{ span: 24 }}>
                    <Card hoverable className="blog-card blog-article" cover={<img alt="example" className="imageLogo " src={image} />}>
                        <Meta title="九毛五" description=" 生活不易 多才多艺 ！！！"/>
                      
                    </Card>
                    <Card title="标签" bordered={false} className="blog-card blog-article" id="page-two"> 
                        <div className="blog-card-page">                             
                            <Tag color="magenta">Html</Tag>
                            <Tag color="red">Css</Tag>
                            <Tag color="volcano">Js</Tag>
                            <Tag color="orange">Ts</Tag>
                            <Tag color="gold">Node</Tag>
                            <Tag color="lime">Linux</Tag>
                            <Tag color="green">Node</Tag>
                            <Tag color="cyan">React</Tag>
                            <Tag color="blue">Vue</Tag>
                            <Tag color="geekblue">Php</Tag>
                            <Tag color="geekblue">MySQL</Tag>
                            <Tag color="geekblue">MongonDB</Tag>
                           
                        </div>  
                    </Card>
                    <Card title="精品文章" hoverable className="blog-card blog-article">
                        <Menu className="menuul"  onClick={this.handleClick}    mode="inline">
                            <Menu.Item key="page-two">
                                
                                <span>react-quill初使用——上传图片</span>
                            </Menu.Item>
                            <Menu.Item key="page-three">
                               
                                <span>react-quill初使用——上传图片</span>
                            </Menu.Item>
                            <Menu.Item key="page-four">
                                
                                <span>react-quill初使用——上传图片</span>
                            </Menu.Item>
                            <Menu.Item key="page-six">
                               
                                <span>react-quill初使用——上传图片</span>
                            </Menu.Item>
                        </Menu>
                      
                    </Card>
                </Col>
                <Col lg={{ span: 16, offset: 1 }} md={{ span: 14, offset: 1 }} xs={{ span: 24 }}>
                <List itemLayout="vertical" size="large" pagination={pagination} dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item key={item.title}
                        actions={
                        [   
                            <IconText type="tags-o" text={
                            item.tags.map(v => (
                                <Tag key={item.id + Math.random()} onClick={()=>this.props.history.push(`/app/tags/${v}`)}>
                                {v}
                                </Tag>
                            ))
                            } />
                        ]}
                            extra={[
                                timetrans(item.pub_time)
                            ]}>
                        <List.Item.Meta className="list-item" title={item.title} description={item.description} onClick={()=>this.props.history.push({pathname:`/blog/desc/${item.id}`,query:{res:this.state.data,article:item}})}/>
                        </List.Item>
                        )}
                        />
                </Col>


            </Row>
            {this.state.switchin?<Switch type="enter" callback={this.switchOut.bind(this)}/>:''}
            </div>
        )
    }
}
export default Blog;
