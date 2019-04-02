import React, {Component} from 'react';
import {Layout, Row, Col, Button, Spin} from 'antd';
import {connect} from 'react-redux';

import MainNavigationContainer from './components/navigation/MainNavigation.container';
import SearchViewContainerConnected from './components/views/search/SearchView.container';
import CompareViewContainerConnected from './components/views/compare/CompareView.container';

import {clearSearch, submitCompare} from './actionCreators'


import './App.css';


const mapStateToProps = (state) => {
    return {
        currView: state.currView,
        results1: state.results1,
        results2: state.results2,
        serverRequestInFlight: state.serverRequestInFlight,
        search1: state.search1,
        search2: state.search2
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearSearch: () => {
            return dispatch(clearSearch())
        },

        submitCompare: () => {
            return dispatch(submitCompare())
        }
    }
}

class App extends Component {

    handleClearSearch = () => {
       this.props.clearSearch();
    }

    handleSubmit = () => {
       this.props.submitCompare();
    }

    buildTitle() {
        return (this.props.currView === 'search')? 'Search' : 'Results'
    }

    renderSearch() {
        return (
            <div>
                <Row>
                    <Col md={11} sm={24} style={{marginBottom: '24px'}}>
                        {this.props.currView === 'search' &&
                        <SearchViewContainerConnected
                            index={1}
                            placeholder="Search for a first Wikipedia entry"
                        />
                        }
                    </Col>

                    <Col md={2} sm={24} />
                    <Col md={11} sm={24} style={{marginBottom: '24px'}}>
                        {this.props.currView === 'search' &&
                        <SearchViewContainerConnected
                            index={2}
                            placeholder="Search for a second Wikipedia entry"
                        />
                        }
                    </Col>
                </Row>

                <Row>
                    <Col md={12} sm={6} xs={12}>
                        {(this.props.results1 || this.props.results2) &&
                            <Button onClick={this.handleClearSearch}>Clear</Button>
                        }
                    </Col>

                    <Col md={12} sm={12} xs={12} style={{textAlign:'right'}}>
                        {(this.props.search1 && this.props.search2) &&
                        <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
                        }
                    </Col>
                </Row>

            </div>
        );
    }

    renderCompare() {

        if(this.props.serverRequestInFlight) {
            return (
                <div className="spin-position">
                    <Spin />
                </div>
            );
        }

        return (
            <div>
                <Row>
                    <Col md={6} sm={24} style={{marginBottom: '24px'}}>

                    </Col>

                    <Col md={12} sm={24}>
                        <CompareViewContainerConnected />
                    </Col>
                    <Col md={6} sm={24} style={{marginBottom: '24px'}}>

                    </Col>
                </Row>

                <Row>
                    <Col md={12} sm={6} xs={12}>
                        {(this.state.results1 || this.state.results2) &&
                        <Button onClick={this.handleClearSearch}>Clear</Button>
                        }
                    </Col>

                </Row>

            </div>
        );
    }

    renderSubView() {
        if(this.props.currView === 'search') {
            return this.renderSearch();
        }

        if(this.props.currView === 'compare') {
            return this.renderCompare();
        }
    }

    render() {
        const {Header, Content, Footer} = Layout;
        const {currView} = this.props;

        return (
            <Layout>
                <Header>
                    <MainNavigationContainer currView={currView}/>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <div className="main-content">
                        <div>
                            <Row>
                                <Col span={12}>
                                    <h1>{this.buildTitle()}</h1>
                                </Col>
                            </Row>
                        </div>
                        {this.renderSubView()}
                    </div>
                </Content>

                <Footer style={{textAlign: 'left'}}><a rel="noopener noreferrer" target="_blank" href={'http://www.github.com/dotloadmovie/wikintersection-web'}>Source</a></Footer>
            </Layout>
        );
    }
}

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppConnected;
