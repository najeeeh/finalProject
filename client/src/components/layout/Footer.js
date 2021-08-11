import React, { Component } from 'react'
import { TiSocialFacebook,TiSocialLinkedin,TiSocialTwitter,TiSocialInstagram } from "react-icons/ti";
import { IconContext } from "react-icons";


export class Footer extends Component {
  render() {
    return (
      <footer class="page-footer yellow">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="black-text">ABOUT US</h5>
            <p class="black-text text-lighten-4">Coccinella Digi-Mark helps leading brands find, reach, and engage customers, anywhere in the world.</p>
            <h5 class="black-text">SERVICES</h5>
            <p class="black-text text-lighten-4">WE OFFER:
            <ol>
<li>Brand Positioning + Messaging </li>
<li>Website Design + Development </li>
<li> SEO + SEM + Digital Advertising </li>
<li>Content Strategy  Developments </li>
<li>Marketing Campaigns </li>
<li> Infographics + Data Visualization</li>
<li> Design</li>
            </ol>
          
       </p>   </div>
          
          <div class="col l4 offset-l2 s12">
            <h5 class="black-text">Find us :</h5>
            <ul>
              <li class="black-text text-lighten-3" href="#!"><IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
  <div>
  < TiSocialLinkedin/>
  </div>
</IconContext.Provider></li>
              <li class="black-text text-lighten-3" href="#!">
              <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
  <div>
  < TiSocialFacebook/>
  </div>
</IconContext.Provider>
                
                
                </li>
              <li class="black-text text-lighten-3" href="#!">
                
              <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
  <div>
  < TiSocialTwitter/>
  </div>
</IconContext.Provider>
                
                
                </li>
              <li class="black-text text-lighten-3" href="#!">
                
              <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
  <div>
  <TiSocialInstagram/>
  </div>
</IconContext.Provider>
                
               </li>
           
           
                    
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright #e6e600">
        <div class="container center black-text">
        © 2021 Copyright Text
        </div>
      </div>
    </footer>
            
    )
  }
}

export default Footer
