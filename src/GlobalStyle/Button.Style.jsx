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
z-index: 2;
font-size: 1.2rem;
position: relative;
overflow: hidden;


&::before{
position: absolute;
content: "";
background: ${({primary})=>primary ? '#fff' : '#000'};
top: 0 ;
bottom :0 ;
left : -1rem;
width: 0;
height: 100%;
transition : all 0.7s ease-in-out;
z-index:-1;
}


&:hover::before{
width :150% ;
transform: skewX(36deg);
transition : all 0.7s ease-in-out;

}
&:hover{
  color: ${({primary})=>primary ?  '#000' : '#fff' };
  transition : all 0.5s ease-in-out;
}
`



