import React from 'react';
import {ContactLink} from './contact-link';
import '../../styles/lyn/profile.css';

export const Profile_Mobile = ()=>{
  return (
    <div id='profile_lyn'>
      <div id='lyn-image_lyn'></div>
      <div id='name-title-icons-div_lyn'>

        <div id='name-title-div_lyn'>
          <p id='lynjackson_lyn'>Lyn Jackson</p>
          <p id='uidev_lyn'>UI Developer</p>
          <p id='bk_lyn'>Brooklyn, NY</p>
        </div>

        <div id='contact-div_lyn'>
          <ContactLink text={'Resume'} linktype={'resume'} url='https://drive.google.com/file/d/1bBXDKf7KqYOqst2fDeztQuVxANpa61Tn/view?usp=sharing'/>
          <ContactLink text={'LinkedIn'} linktype={'linkedin'} url='https://www.linkedin.com/in/lyndon-jackson-541a5b18/'/>
          <ContactLink text={'Email'} linktype={'email'} url='mailto:ljoconnor5@gmail.com'/>
        </div>

      </div>
    </div>
  )
}

export const Profile_Desktop = ()=>{
  return (
    <div id='profile_lyn'>
      <div id='lyn-image_lyn'></div>
      <div id='name-title-icons-div_lyn'>

        <div id='name-title-div_lyn'>
          <p id='lynjackson_lyn'>Lyn Jackson</p>
          <p id='uidev_lyn'>UI Developer</p>
        </div>

        <div id='contact-div_lyn'>
          <ContactLink text={'Resume'} linktype={'resume'} url='https://drive.google.com/file/d/1bBXDKf7KqYOqst2fDeztQuVxANpa61Tn/view?usp=sharing'/>
          <ContactLink text={'LinkedIn'} linktype={'linkedin'} url='https://www.linkedin.com/in/lyndon-jackson-541a5b18/'/>
          <ContactLink text={'Email'} linktype={'email'} url='mailto:ljoconnor5@gmail.com'/>
        </div>

      </div>
    </div>
  )
}
