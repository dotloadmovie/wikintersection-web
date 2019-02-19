import React from 'react';

import {Radio} from 'antd';

const CheckboxComponent = ({checkedState, events}) => {
    return (
        <Radio checked={checkedState} onChange={events.handleChange} />
    );
}

export default CheckboxComponent;