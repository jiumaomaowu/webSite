import React, {Component} from 'react';
import './Resume.scss'
import {hot} from 'react-hot-loader';
import {  
    Row,
    Col,
    Card,
    Icon } from 'antd';
import StyleEditor from "./StyleEditor";


class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
			style: "",
		};
        this.interval = 60;
        this.styleEditorContent = [`   
        我们终于
        被
        生活
        磨平了
        棱角！！！




        `,
        `
        /* 这个简历好像差点什么
        * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
        * 简单，用开源工具翻译成 HTML 就行了
        *           3          
        *           2          
        *           1          
        *          action！
        */
        `,
        `
        /* 再对 HTML 加点样式 */
        .resumeEditor{
        padding: 2em;
        }
        .resumeEditor h1{
        display: block;
        width: 80px;
        margin: 0 auto;
        }
        .resumeEditor h2{
        display: inline-block;
        border-bottom: 1px solid;
        margin: 1em 0 .5em;
        }
        .resumeEditor h3{
        display: inline-block;
        margin: 0.5em 0;
        }
        .resumeEditor a{
        color: #000;
        }
        .resumeEditor ul{
        list-style: none;
        }
        .resumeEditor ul>li::before {
        content: "•";
        margin-left: 1em;
        margin-right: 0.5em;
        }
        .resumeEditor blockquote {
        margin: 1em;
        padding: .5em;
        background: #ddd;
        }
        `];
    }
    
    addToStyle(char) {
		this.setState({
			style: this.state.style + char,
		});
		// console.log("改变style的状态----",this.state.style)
	}

	replaceStyle(style) {
		this.setState({
			style: style,
		});
	}
	showStyleEditorContent(n) {
		let lastContentLength = 0;
		if (n !== 0) {lastContentLength = this.state.style.length;}
		let style = this.styleEditorContent[n]; //要打印的字符串
		
		let len = style.length;//要打印的字符串的长度
		// console.log("要打印的字符串的长度len：---",len)
		return new Promise((resolve, reject) => {
			let showStyle = function () {
				// console.log("this.state.style.length初始长度 ",this.state.style.length) 
				let currentLen = this.state.style.length - lastContentLength;
				// console.log("this.state初始长度和 lastContentLength的差：---",currentLen,len) 
				if (currentLen < len) {
					let char = style.substring(currentLen, currentLen+1);
                    // console.log("正在打印出来的字符串char---",char)
                    if(this.refs.StyleEditor){
                        this.refs.StyleEditor.addToContent(char);
                    }
					
					// console.log("把正在打印出来的字符串char-传给子组件----",char)
					this.addToStyle(char);
					
					setTimeout(showStyle, this.interval);
					// console.log("结束一轮循环，开始下一轮循环--------------------------------------------")
				} else {
					resolve();
				}
			}.bind(this);
			showStyle();
		});
    }
    componentWillUnmount(){
       
    }
    async startShow() {
		await this.showStyleEditorContent(0).then(function() {console.log('done! show Content 0')});
		// await this.showResumeContent();
		// await this.showStyleEditorContent(1).then(function() {console.log('done! show Content 1')});
		// await this.setResumeMarkdown();
		// await this.showStyleEditorContent(2).then(function() {console.log('done! show Content 2')});
	}

	componentDidMount() {
        this.startShow();
		
	}
    render() {
       
       

        return (
           <div>
               
               <Row className="Editor-row">
                   <Col >
                    <div className="Editor">
                        <StyleEditor ref="StyleEditor" />
                        <style>{this.state.style}</style>
                    </div>
                    
                   </Col>
               </Row>
               
           </div>
            
        )
    }
}

export default hot(module)(Resume);      