import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
a{
    text-decoration: none;

}
body{
    background-image: linear-gradient(to left top, #252424, #2b2a2b, #323132, #383839, #3f3f40, #434445, #474849, #4b4d4d, #4e4f4f, #505252, #535454, #565757);
    font-family: 'Roboto', sans-serif;
    width: 100%;
}
img{
    display: block;
}
h2{
    padding:1.3rem 0.8rem;
    color: #333;
    font-weight: 700;
}
p{
    padding: 0.3rem 0rem;
    color: #333;
}
::-webkit-scrollbar{
width: 8px;
height: 13px;
}
::-webkit-scrollbar-thumb{
background: linear-gradient(110deg, #2E2C2E 7%,#616161 96%);
border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover{
background: linear-gradient(13deg, #C7CEFF 14%,#F9D4FF 64%);
}
::-webkit-scrollbar-track{
background: #FFFFFF;
border-radius: 10px;
box-shadow: inset 7px 10px 12px 0px #F0F0F0;
}


`;
export default GlobalStyle;
