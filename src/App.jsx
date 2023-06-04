import React, { useState } from 'react'
import { GlobalStyle } from './GlobalStyle/GlobalStyle.jsx'
import Modal from './Component/Modal.jsx'
import { Button } from './GlobalStyle/Button.Style.jsx'
import Main from './Component/Main/Main.jsx'


const App = () => {
  
  const [show,setShow] = useState(false)


 


  return (
    <>
      <GlobalStyle />
        <Main  show={show} setShow={setShow} />
       <Modal show={show} setShow={setShow} />
      </>
  )
}

export default App