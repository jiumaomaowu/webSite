import React, { Component } from 'react';

import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Work from 'bundle-loader?lazy&name=work!pages/Work/Work';
import About from 'bundle-loader?lazy&name=about!pages/About/About';
import Blog from 'bundle-loader?lazy&name=blog!pages/Blog/Blog';
import Description from 'bundle-loader?lazy&name=Desc!pages/Description/Description';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';

import '../style/index.scss';
// import Desc from '../pages/Description/Description';
const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);
class Routes extends Component {
    render() {   
    
      
      return (
       
            <Switch >
                <Route exact path="/"   component={createComponent(Home)}/>
                <Route exact path="/collect" component={createComponent(Work)}/>
                <Route exact path="/about" component={createComponent(About)}/>
                <Route exact path="/blog" component={createComponent(Blog)}/>
                <Route exact path="/blog/desc/:id/" component={createComponent(Description)}/>
                <Route component={createComponent(NotFound)}/>
            </Switch>
          
        
      )
    }
  }
   
  export default Routes