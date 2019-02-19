import React from 'react'
import {Table} from 'antd'

const SearchResultViewComponent = ({data, columns}) => {

    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
        </div>
    );
}

export default SearchResultViewComponent;