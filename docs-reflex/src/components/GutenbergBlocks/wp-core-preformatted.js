import React from 'react'

const WpCorePreformatted = props => {
    return(<pre>{JSON.stringify(props, null, 2)}</pre>);
};

export default WpCorePreformatted;
