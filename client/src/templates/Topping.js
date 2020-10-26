import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default function SingleToppingPage({ data: { topping } }) {
  console.log(topping);

  return <div>Topping Page</div>;
}

// this needs to be dynamic based on the slug passed on the context in gatsby-node.js

export const query = graphql`
  query($toppingName: String!) {
    topping: sanityTopping(name: { eq: $toppingName }) {
      name
      id
    }
  }
`;
