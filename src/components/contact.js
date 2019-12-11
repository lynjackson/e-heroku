import React from 'react';
import '../styles/contact2.css';

export const Contact = (props)=>{
  return(

      <div className='view' id='contact-view' style={{backgroundColor:'rgb(26,26,26)'}}>
          <p className='contact-text' id='ready'>{props.message}</p>
      </div>

  )
}
