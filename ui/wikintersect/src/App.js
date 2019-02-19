import React, {Component} from 'react';
import {Layout, Row, Col} from 'antd';

import MainNavigationContainer from './components/navigation/MainNavigation.container';
import SearchViewContainer from './components/views/search/SearchView.container';

import API from './api/API'

import './App.css';


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currView: 'search',
            search1: null,
            search2: null
        }

        this.api = new API({
            endpoint: 'http://localhost:5002'
        })
    }

    renderSubView() {
        return (
            <div>
                <Row>
                    <Col span={1} />
                    <Col span={10}>
                        {this.state.currView === 'search' &&
                            <SearchViewContainer
                               api={this.api}
                            />
                        }
                    </Col>
                    <Col span={2} />
                    <Col span={10}>
                        {this.state.currView === 'search' &&
                            <SearchViewContainer
                                api={this.api}
                            />
                        }
                    </Col>
                    <Col span={1} />
                </Row>

            </div>
        );
    }

    render() {
        const {Header, Content, Footer} = Layout;
        const {currView} = this.state;

        return (
            <Layout>
                <Header>
                    <MainNavigationContainer currView={currView}/>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <div className="main-content">
                        {this.renderSubView()}
                    </div>
                    {this.state.showSearchDialog &&
                        <div>Search dialog here</div>
                    }
                </Content>

                <Footer style={{textAlign: 'center'}}>&copy; Dave 2019</Footer>
            </Layout>
        );
    }
}

export default App;
