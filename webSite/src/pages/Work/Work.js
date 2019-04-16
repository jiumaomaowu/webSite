import React, {Component} from 'react';
import image from '../../images/logo.jpg';
import './Work.scss'
import {  
    Row,
    Col,
    Card,
    Modal, Tag, Menu, Empty } from 'antd';
import Switch from '../../components/Switch/Switch';
const { Meta } = Card;
class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchin:true,
            visible: false
        }
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    switchOut(n){
        this.setState(
          {
            switchin:n
          }
        )
    }
    info() {
        Modal.info({
          title: '敬请期待...',
          content: (
            <div>
              <p>正在建设中。。。</p>
             
            </div>
          ),
          onOk() {},
        });
    }
    componentDidMount(){
       this.info()
    }
    render() {
        return (
            <div className='page page4'>
                <Row className="work-row">
                <Col lg={{ span: 5, offset: 1 }} md={{ span: 7, offset: 1 }} xs={{ span: 24 }}>
                    <Card hoverable className="blog-card" cover={<img alt="example" className="imageLogo" src={image} />}>
                        <Meta title="九毛五" description=" 生活不易 多才多艺 ！！！"/>
                      
                    </Card>
                    <Card title="标签" bordered={false} className="blog-card" id="page-two"> 
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
                    <Card title="精品文章" hoverable className="blog-card">
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
                  


                <Col lg={{ span: 16, offset: 1 }} md={{ span: 7, offset: 1 }} xs={{ span: 24 }} className="empty">
                <Empty />
                </Col>
                </Row>
               

               {this.state.switchin?<Switch type="enter" callback={this.switchOut.bind(this)}/>:''}
            </div>
        )
    }
}



export default Work;