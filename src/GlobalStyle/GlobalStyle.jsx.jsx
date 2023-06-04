import styled, {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "poppins",sans-serif;
}
body {
   scroll-behavior: smooth;
   overflow: hidden;
}
`

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`