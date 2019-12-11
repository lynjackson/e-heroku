import React from 'react'

const BilliOS =()=>{
  return(
    <div>
      <iframe scrolling='no' style={{width:500, position: 'relative', height: 667, border:'none'}} src="https://appetize.io/embed/tq08t4qj50qjtmgg716hn6jut4?autoplay=true&amp;debug=true&amp;device=iphone6s&amp;deviceColor=black&amp;embed=true&amp;orientation=portrait&amp;scale=75.3&amp;screenOnly=false&amp;xDocMsg=true&amp;xdocMsg=true&amp;params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexpo.io%2F%40hop26%2Fbillrestaurant-iosapp%2B!UuTA77p!%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D" class="_1il6y7w"></iframe>
    </div>
  )
}

const BillAndroid =()=>{
  return(
    <div>
    <iframe scrolling='no' style={{width:500, position: 'relative', height: 667, border:'none'}} src="https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=false&amp;debug=true&amp;device=nexus5&amp;deviceColor=black&amp;embed=true&amp;launchUrl=exp%3A%2F%2Fexpo.io%2F%40hop26%2Fbillrestaurant-iosapp%2Bp4OcOJ3pn&amp;orientation=portrait&amp;screenOnly=false&amp;xDocMsg=true&amp;xdocMsg=true&amp;params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexpo.io%2F%40hop26%2Fbillrestaurant-iosapp%2Bp4OcOJ3pn%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D" class="_1il6y7w"></iframe>
    </div>
  )
}







export const William = (props) => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <BillAndroid/>
    </div>
  )
}
