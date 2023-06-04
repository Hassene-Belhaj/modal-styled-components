import styled from "styled-components";

export const Button =  styled.button`
background: ${({primary})=>primary ? '#000' : '#fff'};
color: ${({primary})=>primary ? '#fff' : '#000'};
padding:${({padding})=>padding};
margin: ${({margin})=>margin};
border : 1px solid #000 ;
cursor: pointer;
border-radius: 5px;
transition: all 0.2s ease-in-out;
font-size: 1.5rem;
z-index: 50;
font-size: 1.2rem;
&:hover{
  background: ${({primary})=>primary ? '#fff' : '#000' };
  color: ${({primary})=>primary ? '#000' : '#fff'};
  transition: all 0.2s ease-in-out;
}
`