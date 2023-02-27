import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;


export const Sidebar = styled.div`
  flex: 0 0 200px
`

export const Content = styled.div`
  overflow-y: scroll;
  display: flex;
  flex: 1 1;
  background-image: linear-gradient(to bottom right, #508bfc, #53D8FB);
`;
