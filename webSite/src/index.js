import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'components/App/App';
import './style/reset.scss';
import './style/index.scss';
import 'lib-flexible'
renderWithHotReload(App);

if (module.hot) {
    module.hot.accept('components/App/App', () => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
            <AppContainer>
                <Provider store={store}>
               
                    <Router>
                        <RootElement/>
                    </Router>
                    
              
                </Provider>
                </AppContainer>
               
       ,
       
        document.getElementById('app')
    )
}
