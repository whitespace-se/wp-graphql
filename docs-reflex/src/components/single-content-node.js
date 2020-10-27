import React from "react";
import Layout from "./layout";
import Container from "./container";

const SingleContentNode = ({ data }) => {
    console.log( data );
    return (
        <Layout>
            <Container>
                <h2>Hello</h2>
                {JSON.stringify({data})}
            </Container>
        </Layout>
    );
}

export const query = graphql`
query($id: String) {
  wpContentNode(id: { eq: $id }) {
    __typename
    id
    uri
  }
}
`;

export default SingleContentNode
