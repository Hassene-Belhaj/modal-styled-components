import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
z-index: 1;
`
export const ModalContainer = styled.div`
width: 100%;
height: 100%;
`


export const ModalBG = styled.div`
width: 100%;
height: 100%;
position: absolute;
inset: 0;
background: rgba(0,0,0,0.9);
z-index: 50;
`
export const ModalModal = styled.div`
width: 50%;
height: 50%;
position: absolute;
top:50%;
left: 50%;
transform:translate(-50%,-50%) ;
background: #fff;
z-index: 100;
`