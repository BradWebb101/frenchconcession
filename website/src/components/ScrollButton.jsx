import React, {useState} from 'react'; 
import {FaArrowCircleDown} from 'react-icons/fa'; 
import { Button } from './Styles.jsx'; 
    
const ScrollButton = () =>{ 
    
  const [visible, setVisible] = useState(true) 
    
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 50){ 
      setVisible(false) 
    }  
    else if (scrolled <= 50){ 
      setVisible(true) 
    } 
  }; 
    
  window.addEventListener('scroll', toggleVisible); 
    
  return ( 
    <Button> 
     <FaArrowCircleDown  
     style={{display: visible ? 'inline' : 'none'}} /> 
    </Button> 
  ); 
} 
    
export default ScrollButton;