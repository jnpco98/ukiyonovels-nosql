import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;

  ${props =>
    props.vertical &&
      `flex-direction: column;
       align-items: center;`}

  ${props =>
    props.grid &&
      `flex-wrap: wrap;
       justify-content: space-between;`}
`;

// REFACTOR MERGE ITEMS TO CONTAINERS TO GET ACCESS TO CHILDREN LENGTH
export const Item = styled.div`
  flex: ${props => props.flex};
  background-color: red;
  height: ${props => props.height};
  width: ${props => props.width};

  ${props =>
    props.spacerHorizontal &&
      `& + & { margin-left: 2%;}`};

  ${props =>
    props.spacerVertical &&
      `& + & { margin-top: 2%;}`};

  ${props =>
    props.triGrid &&
      `flex: 0 32%;
       margin-bottom: 2%;`};
  
  ${props =>
    props.equalGrid &&
      css`
        flex: 0 ${props => `${100/props.childCount-1}%`};
        margin-bottom: 2%;
  `};
`;