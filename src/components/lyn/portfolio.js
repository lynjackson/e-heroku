import React from 'react';
import '../../styles/lyn/portfolio.css';



export const Portfolio_Mobile = ()=>{
  return(
    <div id='projects_lyn' className='section_lyn'>
      <div className='section-title_lyn'>
        <p style={{fontFamily: 'poppins', fontSize:18.91, fontWeight: 500, margin: 0}}>Projects</p>
        <hr />
      </div>

      <div className='project-div_lyn'>
        <div className='project-title-text-div_lyn'>
          <a href='/' className='project-title_lyn' style={{margin: 0}}>Ethe Digital Firm Website</a>
          <p className='project-stack_lyn' style={{margin: 0}}>React, Webpack, Sass, Next.js</p>
        </div>
        <p className='design-docs_lyn' style={{alignSelf:'flex-start'}}>Design Documents</p>
      </div>

      <div className='project-div_lyn'>
        <div className='project-title-text-div_lyn'>
          <a href='ethe.herokuapp.com' className='project-title_lyn' style={{margin: 0}}>Bill Restaurant Mobile App</a>
          <p className='project-stack_lyn'style={{margin: 0}}>React, Webpack, Sass, Next.js</p>
        </div>
        <p className='design-docs_lyn' style={{alignSelf:'flex-start'}}>Design Documents</p>
      </div>

      <div className='project-div_lyn'>
        <div className='project-title-text-div_lyn'>
          <a href='studio.ljoconnor5.now.sh' className='project-title_lyn' style={{margin: 0}}>Perfect Touch Studio Website</a>
          <p className='project-stack_lyn' style={{margin: 0}}>React, Webpack, Sass, Next.js</p>
        </div>
        <p className='design-docs_lyn' style={{alignSelf:'flex-start'}}>Design Documents</p>
      </div>

    </div>
  )
}

export const Portfolio_Desktop = ()=>{
  return(
    <div id='projects_lyn' className='section_lyn'>
      <div className='section-title_lyn'>
        <p style={{fontFamily: 'poppins', fontSize:18.91, fontWeight: 500, margin: 0}}>Projects</p>
        <hr />
      </div>

      <div id='projects-div_lyn'>

        <div className='project-div_lyn'>
          <div className='project-title-text-div_lyn'>
            <div className='qr_portfolio' id='ethe-qr_portfolio'></div>
            <a href="/" className='project-title_lyn' style={{margin: 0}}>Ethe Digital Firm Site</a>
            <p className='project-stack_lyn' style={{margin: 0}}>React, Webpack, Sass, Next.js</p>
          </div>
          <p className='design-docs_lyn' >Design Documents</p>
        </div>

        <div className='project-div_lyn'>
          <div className='project-title-text-div_lyn'>
            <div className='qr_portfolio' id='bill-qr_portfolio'></div>
            <a href='http://ethe.herokuapp.com' className='project-title_lyn' style={{margin: 0}}>Bill Restaurant Mobile App</a>
            <p className='project-stack_lyn'style={{margin: 0}}>React, Webpack, Sass, Next.js</p>
          </div>
          <p className='design-docs_lyn' >Design Documents</p>
        </div>

        <div className='project-div_lyn'>
          <div className='project-title-text-div_lyn'>
            <div className='qr_portfolio' id='pt-qr_portfolio'></div>
            <a href='https://studio.ljoconnor5.now.sh' target='_blank' className='project-title_lyn' style={{margin: 0}}>Perfect Touch Studio Site</a>
            <p className='project-stack_lyn' style={{margin: 0}}>React, Webpack, Sass, Next.js</p>
          </div>
          <p className='design-docs_lyn' >Design Documents</p>
        </div>
      </div>

    </div>
  )
}
