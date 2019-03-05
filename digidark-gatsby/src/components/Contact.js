import React from 'react';
import Popup from 'reactjs-popup'
//<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">


const Contact = () => {

const style = {
    padding:'10px',
    margin: '10px',
    textAlign: 'center'
}

const iconStyle = {
    padding:'10px',
    margin: '10px',
}

    return(
    <div style ={style}>
    <a href = "https://github.com/v-morris" target = "_blank"><i style={iconStyle} class="fab fa-github fa-4x"></i></a>
    <a href = "https://twitter.com/digidarkdev" target = "_blank"><i style={iconStyle} class="fab fa-twitter fa-4x"></i></a>
    <a href = "https://www.linkedin.com/in/v-morris/" target = "_blank"><i style={iconStyle} class="fab fa-linkedin-in fa-4x"></i></a>
    

    
    {/* <Popup
      trigger={
        <a href = "#"><i  style={iconStyle} class="fas fa-envelope fa-4x"></i> </a>
      }
      position="top"
      closeOnDocumentClick
    >
      <span style = {{fontSize:'0.9rem'}}> digidarkdev@gmail.com </span>
    </Popup> */}


    </div>
    
    )
}

export default Contact 