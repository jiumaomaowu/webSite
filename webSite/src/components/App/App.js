import React, {Component} from 'react';
import Header from 'components/Header/Header';
// import getRouter from 'router/router';
import Routes from 'router/router';
import { Layout, Row,
    Col, } from 'antd';
// import { receiveData } from '../../redux/actions/Header';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom'
import '../../style/index.scss';
// import  {Switch}  from '../Switch/Switch'
const { Content, Footer, Sider} = Layout;
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            isRouter:false
        }
    }
    isRoute(){
        // 添加router跳转动画的组件
        this.setState({
            isRouter:true
        })
        
    }
    clearAnimate(n){
        //  删除router跳转动画的组件
        this.setState({
            isRouter:n
        })   
       
    }
    componentWillMount() {
      
    }
    render() {   
        return (
            <Layout>
                <div>   
                    <Header  location = {this.props.location}/>
                    <Content>
                            <Routes ></Routes>
                    </Content>
                    <Footer >
                    <Row className="Row" type="flex" justify="center">
                     React-weBsite © Created by jiumaowu

                    </Row>
                      
                    </Footer>   
                 
                </div>
            </Layout>
            
        )
    }

}  

// function mapStateToProps(state) {
   
// 	return {
// 		isLogin:state
// 	}
// }

// // 哪些 action 创建函数是我们想要通过 props 获取的？
// function mapDispatchToProps(dispatch) {
// 	return {};
// }


export default App;