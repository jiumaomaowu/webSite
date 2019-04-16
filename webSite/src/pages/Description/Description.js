import React, {Component} from 'react';


import {  
    Row,
    Col,
    Card,
    List, Anchor, BackTop, Tag } from 'antd';
import './Description.scss'
import marked from 'marked'
import hljs from 'highlight.js'
import { timetrans} from '../../utils/utils'
import {descriptionData} from '../../redux/actions/Description'
import { bindActionCreators } from 'redux';
import { _getDesc } from '../../axios/api/api'
import { connect } from 'react-redux';
const { Meta } = Card;
class Desc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchin:true,
            visible: false,
            id: this.props.match.params.id,
            desc:'',
            sideData:[
                '前言',
                '主要内容',
                '总结'
            ],
            readSize:5
        }
      
    }
    switchOut(n){
        this.setState(
          {
            switchin:n
          }
        )
    }
    async getDesc(params){
      console.log(params)
        const res = await _getDesc(params)
        if(res.code == 200){
            console.log("返回博客数据：，，，------",res)
            this.setState({
                desc:res.data
            })
        }
    }
    componentWillMount() {
        marked.setOptions({
          highlight: code => hljs.highlightAuto(code).value
        })
        console.log(this.props) 
        if(!this.props.location.query){
            let params = {
                id:this.props.match.params.id
            }
            this.getDesc(params)
        }else{
            this.setState({
                desc:this.props.location.query.article
            })
        }
       

      }
    componentDidMount() {
        
       
    }
    render() {
       
        const IconText = ({ type, text }) => (
            <span key={text}>
              <Icon type={type} style={{ marginRight: 8 }} />
              {text}
            </span>
        )
        console.log(this.props)
        return (
            <div className='page page4'>
               <Row>
                    <BackTop visibilityHeight={300}/>
                    <Col lg={{ span: 5, offset: 1 }} md={{ span: 7, offset: 1 }} xs={{ span: 24 }}>
                    
                        <Card title="目录" bordered={false} > 
                            <List   dataSource={this.state.sideData} renderItem={item => (<List.Item className="list" >{item}</List.Item>)}/>   
                            
                        </Card>
                    
                    </Col>

                    <Col lg={{ span: 16, offset: 1 }} md={{ span: 7, offset: 1 }} xs={{ span: 24 }}>
                    <Card className="article-wrapper desc-wrapper" title={this.state.desc.title} extra={[
                            <Tag color="red" key="author">
                                作者：admin
                            </Tag>,
                            <span style={{marginTop: 10}} key="time">
                                {
                                this.state.desc.pub_time
                                ? timetrans(this.state.desc.pub_time)
                                : null
                                }
                            </span>
                            ]}
                        >
                            <div className="article-tags">
                            <span>{this.state.readSize} 次浏览</span>
                            {/* <IconText type="tags-o" text={
                                this.state.desc.tags.map(v => (
                                <Tag
                                    key={v}
                                    color={color[Math.floor(Math.random()*color.length)]}
                                    onClick={()=>{}}
                                >
                                    {v}
                                </Tag>
                                ))}
                            /> */}
                            </div>
                            <div 
                            className="article-detail" 
                            dangerouslySetInnerHTML={{ __html: this.state.desc.content ? marked(this.state.desc.content) : null }} 
                            />
                        </Card>
                    </Col>
               </Row>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    
    return {
        descriptionData: state.descriptionData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        descriptionData: bindActionCreators(descriptionData, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Desc);