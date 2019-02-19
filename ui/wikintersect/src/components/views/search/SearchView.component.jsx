import React from 'react'
import {Input} from 'antd'
import SearchResultViewContainer from "../searchresult/SearchResultView.container";

const SearchViewComponent = ({events, results}) => {
    const Search = Input.Search;

    return (
        <div className="search-container">
            <Search
                placeholder="Search for a Wikipedia entry"
                enterButton="Search"
                size="large"
                onSearch={events.handleSearchClick}
            />
            {results &&
            <SearchResultViewContainer
                results={results}
            />
            }
        </div>
    );
}

export default SearchViewComponent;