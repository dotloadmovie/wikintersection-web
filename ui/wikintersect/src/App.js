import React, {Component} from 'react';
import {Layout, Row, Col, Button, Spin} from 'antd';

import MainNavigationContainer from './components/navigation/MainNavigation.container';
import SearchViewContainer from './components/views/search/SearchView.container';
import CompareViewContainer from './components/views/compare/CompareView.container';

import API from './api/API'

import './App.css';


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currView: 'search',
            search1: null,
            search2: null,
            results1: null,
            results2: null,
            compareResult: null
        }

        this.api = new API({
            endpoint: 'http://localhost:1323'
        })
    }

    handleSelectRow = (row, index) => {
        if(index === 1) {
            this.setState({
                search1: row
            })
        } else {
            this.setState({
                search2: row
            })
        }

    }

    handleClearSearch = () => {
        this.setState({
            searchValue1: null,
            searchValue2: null,
            search1: null,
            search2: null,
            results1: null,
            results2: null,
            currView: 'search',
            compareResult: null
        })
    }

    handleSearchUpdated = (result, index) => {
        if(index === 1) {
            this.setState({
                results1: result
            })
        } else {
            this.setState({
                results2: result
            })
        }
    }

    handleSearchValueInput = (value, index) => {
        if(index === 1) {
            this.setState({
                searchValue1: value
            })
        } else {
            this.setState({
                searchValue2: value
            })
        }
    }

    handleSubmit = () => {
        this.setState({
            serverRequestInFlight: true,
            currView: 'compare'
        });

        this.api.getIntersection(this.state.search1.value, this.state.search2.value, this.handleCompareResultUpdated)
    }

    handleCompareResultUpdated = (result) => {
        this.setState({
            compareResult: result,
            serverRequestInFlight: false
        })
    }

    buildTitle() {
        return (this.state.currView === 'search')? 'Search' : 'Results'
    }

    renderSearch() {
        return (
            <div>
                <Row>
                    <Col md={11} sm={24} style={{marginBottom: '24px'}}>
                        {this.state.currView === 'search' &&
                        <SearchViewContainer
                            api={this.api}
                            index={1}
                            searchValue={this.state.searchValue1}
                            results={this.state.results1}
                            placeholder="Search for a first Wikipedia entry"
                            handleSelectRow={this.handleSelectRow}
                            handleSearchUpdated={this.handleSearchUpdated}
                            handleSearchValueInput={this.handleSearchValueInput}
                        />
                        }
                    </Col>

                    <Col md={2} sm={24} />
                    <Col md={11} sm={24} style={{marginBottom: '24px'}}>
                        {this.state.currView === 'search' &&
                        <SearchViewContainer
                            api={this.api}
                            index={2}
                            results={this.state.results2}
                            searchValue={this.state.searchValue2}
                            placeholder="Search for a second Wikipedia entry"
                            handleSelectRow={this.handleSelectRow}
                            handleSearchUpdated={this.handleSearchUpdated}
                            handleSearchValueInput={this.handleSearchValueInput}
                        />
                        }
                    </Col>
                </Row>

                <Row>
                    <Col md={12} sm={6} xs={12}>
                        {(this.state.results1 || this.state.results2) &&
                            <Button onClick={this.handleClearSearch}>Clear</Button>
                        }
                    </Col>

                    <Col md={12} sm={12} xs={12} style={{textAlign:'right'}}>
                        {(this.state.search1 && this.state.search2) &&
                        <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
                        }
                    </Col>
                </Row>

            </div>
        );
    }

    renderCompare() {

        if(this.state.serverRequestInFlight) {
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
                        <CompareViewContainer
                            api={this.api}
                            results={this.state.compareResult}
                        />
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
        if(this.state.currView === 'search') {
            return this.renderSearch();
        }

        if(this.state.currView === 'compare') {
            return this.renderCompare();
        }
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

export default App;
