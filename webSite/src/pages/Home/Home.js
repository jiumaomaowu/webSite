import React, {Component, Fragment} from 'react';
import {hot} from 'react-hot-loader';
import './Home.scss'
import Switch from '../../components/Switch/Switch';
// import bg from '../../images/bg.png'
import se from '../../images/se.gif'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import {  
    Row,
    Col,
    Card,
    Icon } from 'antd';
import Resume from './Resume/Resume'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchin:true,
            show:false,
            resume:false,
            Height:''
        }
       
    }
    switchOut(n){
        this.setState(
          {
            switchin:n,
            show:true
          }
        )
    }
    addEvent(){
        
    }
 
    componentDidMount(){

        let obox=document.getElementById("bgimg");
        obox.addEventListener( 'webkitTransitionEnd', ()=>{
            console.log("动画结束！！！")
            this.setState({
                resume:true,
            })

        } , false );
        
        obox.addEventListener( 'webkitAnimationStart', ()=>{
            console.log("动画开始！！！")
            // this.setState({
            //     show:false,
            // })

        } , false );
        let Height = document.body.clientHeight;
        console.log(Height)
        this.setState({
            Height:Height+'px'
        })
        
    }
    handleToggle=()=>{
        this.setState({
            show:this.state.show? false:true,
        })
    }
    render() {
        const style = {
            minHeight : this.state.Height
        }
        return (
            <div className='page-home'>
               {/* <img src={bg} className="bgimg"></img> */}
               
               {/* <Fragment>
                    <div className={this.state.isshow ? 'show bug' : 'hide'}>BUG</div>
                   
                </Fragment> */}
               
                
               {/* {this.state.resume && <Resume/>} */}
                <Row className="Row" type="flex" justify="center" style={style}>
               {/* {this.state.resume && <Col  lg={{ span: 9 }} md={{ span: 10}} xs={{ span: 24,offset: 1 }}>
                           
                        </Col>} */}
                        
                        <Col lg={{ span: 10 }} md={{ span: 10 }} xs={{ span: 24 }}  className='Col cricle'>  
                           
                            <div className="outside">
                           
                                <img src={se}  id="bgimg" className={this.state.show?' show show-item':'hide show-item'}></img>
                            </div>
                               
                                
                        </Col>
                       

                </Row>
                

               
                {this.state.switchin?<Switch type="enter" callback={this.switchOut.bind(this)}/>:''}
            </div>
            
        )
    }
}

export default hot(module)(Home);