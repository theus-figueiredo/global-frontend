import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color : "#B2E0E6";

  #hoverable {
    &:hover {
      text-decoration: underline;
      text-decoration-color: #508bfc;
    }
  }

  #selected {
    text-decoration: underline;
  }
`;
