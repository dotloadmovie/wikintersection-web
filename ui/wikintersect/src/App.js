import React, {Component} from 'react';
import {Layout, Row, Col, Button, Spin} from 'antd';
import {connect} from 'react-redux';

import MainNavigationContainer from './components/navigation/MainNavigation.container';
import SearchViewContainerConnected from './components/views/search/SearchView.container';
import CompareViewContainerConnected from './components/views/compare/CompareView.container';
import './App.css';

import {clearSearch, submitCompare, changeView} from './actionCreators';
import {getURIBase} from "./config";


const mapStateToProps = (state) => {
    return {
        currView: state.currView,
        serverRequestInFlight: state.serverRequestInFlight,
        search0: state.search0,
        search1: state.search1,
        compareResults: state.compareResults
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearSearch: () => {
            return dispatch(clearSearch())
        },

        submitCompare: (search0, search1) => {
            return dispatch(submitCompare(`${getURIBase()}/compare/${search0}/${search1}`))
        },

        changeView: (view) => {
            return dispatch(changeView(view));
        }
    }
}

class App extends Component {

    handleClearSearch = () => {
       this.props.changeView('search');
       this.props.clearSearch();
    }

    handleSubmit = () => {
       this.props.changeView('compare');
       this.props.submitCompare(this.props.search0.search, this.props.search1.search);
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
                            index={0}
                            placeholder="Search for a first Wikipedia entry"
                        />
                        }
                    </Col>

                    <Col md={2} sm={24} />
                    <Col md={11} sm={24} style={{marginBottom: '24px'}}>
                        {this.props.currView === 'search' &&
                        <SearchViewContainerConnected
                            index={1}
                            placeholder="Search for a second Wikipedia entry"
                        />
                        }
                    </Col>
                </Row>

                <Row>
                    <Col md={12} sm={6} xs={12}>
                        {(this.props.search0.results || this.props.search1.results) &&
                            <Button onClick={this.handleClearSearch}>Clear</Button>
                        }
                    </Col>

                    <Col md={12} sm={12} xs={12} style={{textAlign:'right'}}>
                        {(this.props.search0.search && this.props.search1.search) &&
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
                        <Button onClick={this.handleClearSearch}>Clear</Button>
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
