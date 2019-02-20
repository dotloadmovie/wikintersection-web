import React from 'react';

import {Table} from 'antd'

const CompareViewComponent = ({columns, data}) => {
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 100 }} />
        </div>
    );
}

export default CompareViewComponent;