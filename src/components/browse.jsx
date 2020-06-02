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
export const BrowseDatabase = () => (
  <GridWrapper>
    <h2>Browse Database</h2>
    <p>This is a paragraph on the browse database page</p>
    <p>Another paragraph in the browse database page</p>
    <p>Last paragraph on the browse database page</p>
  </GridWrapper>
);