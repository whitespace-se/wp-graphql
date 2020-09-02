import React from 'react'

const LatestPosts = props => {
    return(<pre>{JSON.stringify(props, null, 2)}</pre>);
};

export default LatestPosts;
