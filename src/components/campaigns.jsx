import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Campaigns = (props) => (
  <GridWrapper>
    <p>This is a paragraph and I am writing on the campaigns page</p>
    <p>This is another paragraph, still on the campaigns page</p>
  </GridWrapper>
);