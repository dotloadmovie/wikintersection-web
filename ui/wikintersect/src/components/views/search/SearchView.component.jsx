import React from 'react'
import {Input, Spin} from 'antd'
import SearchResultViewContainer from "../searchresult/SearchResultView.container";

const SearchViewComponent = ({events, results, index, placeholder, searchValue, serverRequestInFlight}) => {
    const Search = Input.Search;

    return (
        <div className="search-container">
            <Search
                value={searchValue}
                placeholder={placeholder}
                enterButton="Search"
                size="large"
                onSearch={events.handleSearchClick}
                onChange={events.handleSearchValueInput}
            />
            {serverRequestInFlight &&
            <div className="spin-position">
                <Spin />
            </div>
            }
            {results && !serverRequestInFlight &&
            <SearchResultViewContainer
                results={results}
                index={index}
                handleSelectRow={events.handleSelectRow}
            />
            }
        </div>
    );
}

export default SearchViewComponent;