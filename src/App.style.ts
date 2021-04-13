import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/image.jpg";

export const GlobalStyle = createGlobalStyle`

html{
    height: 100%;
}

body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex; 
    justify-content:senter;

}


*{
box-sizing: border-boxl
font-family: 'Catamaran', sans-serif;

}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
  }

  hi {
  }

.start, .next {
    cursor: pointer;
    background; linear(180deg, #fff, #ffcc91)
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0,0,0, 0.25)
    border-radius:10px
    height:40px;
    margin: 20px 0;
    paddimng: 0 40px;

}
.start {max-width: 200px;
}


`;
