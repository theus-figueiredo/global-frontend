import styled from 'styled-components';

export const Container = styled.div`
  background-color: #014179;
`;

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);

  @keyframes lock{
  50%{top:-4%;}
	100%{top:-6%;}
}
-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);

  @keyframes show{
	100%{opacity:1;}
}`;

export const Texts = styled.div`
  >h1 {
    font-family: 'Ubuntu', sans-serif;
    text-transform:uppercase;
    text-align:center;
    font-size:30vw;
    display:block;
    margin:0;
    color:#9ae1e2;
    position:relative;
    z-index:0;
    animation: colors .4s ease-in-out forwards;
    animation-delay: 1.7s;
    &:before{
      content:"U";
      position:absolute;
      top:-9%;
      right:40%;
      transform:rotate(180deg);
      font-size:15vw;
      color:#f6c667;
      z-index:-1;
      text-align:center;
      animation:lock .2s ease-in-out forwards;
      animation-delay: 1.5s;
    }
  }
  >h2 {
    font-family: 'Cabin', sans-serif;
    color:#9ae1e2;
    font-size:5vw;
    margin:0;
    text-transform:uppercase;
    text-align:center;
    animation: colors .4s ease-in-out forwards;
    animation-delay: 2s;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  }
  >h5 {
    font-family: 'Cabin', sans-serif;
    color:#9ae1e2;
    font-size:2vw;
    margin:0;
    text-align:center;
    opacity:0;
    animation: show 2s ease-in-out forwards;
    color:#DF1916;
    animation-delay: 3s;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  }

  @keyframes colors{
  50%{transform:scale(1.1);}
	100%{color:#DF1916;}
}`;