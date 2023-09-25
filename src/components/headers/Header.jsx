import React from 'react'

import ensak from '../../images/cropped-ensak-logo.png'
const Header = () => {
  return (
    <nav role="navigation" style={{boxSizing: 'border-box', backgroundColor: 'rgb(111 193 189)', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', padding: '0px 20px', transition: 'background-color 0.2s ease 0s', margin: '0px', border: '0px none rgb(58, 58, 58)', font: '10px / 10px Metropolis', verticalAlign: 'baseline'}}>
    <div style={{WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', display: 'flex', WebkitBoxPack: 'justify', justifyContent: 'space-between', maxWidth: '1200px', minHeight: '60px', width: '100%', margin: '0px', padding: '0px', border: '0px none rgb(58, 58, 58)', font: '10px / 10px Metropolis', verticalAlign: 'baseline'}}>

        <a href="" style={{textDecoration: 'none solid rgb(252, 67, 100)', color: 'rgb(252, 67, 100)', boxSizing: 'border-box', margin: '0px', padding: '0px', border: '0px none rgb(252, 67, 100)', font: '10px / 10px Metropolis', verticalAlign: 'baseline'}}>
            <img src={ensak} alt="ensak" style={{display: 'block', boxSizing: 'border-box', margin: '0px',height: '50px', padding: '0px',border: '0px none rgb(252, 67, 100)', font: '10px / 10px Metropolis', verticalAlign: 'baseline'}} /> </a>
        <div style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', position: 'relative', margin: '0px', padding: '0px', border: '0px none rgb(58, 58, 58)', font: '10px / 10px Metropolis', verticalAlign: 'baseline'}}>
            <button htmlFor="f-toggle" tabIndex="0" role="button" aria-label="Toggle navigation" onclick="toggleMenu('hamburger-menu')" style={{display: 'none', cursor: 'pointer', fontFamily: 'Metropolis', boxSizing: 'border-box', appearance: 'none', border: '0px none rgb(0, 0, 0)', backgroundColor: 'rgba(0, 0, 0, 0)', padding: '2px'}}>
                <span style={{boxSizing: 'border-box', marginTop: '3px', width: '20px', height: '2px', borderRadius: '2px', transition: 'background-color 0.2s ease 0s', display: 'block', backgroundColor: 'rgb(255, 255, 255)', margin: '3px 0px 0px', padding: '0px', border: '0px none rgb(0, 0, 0)', font: '13.3333px Metropolis', verticalAlign: 'baseline'}}></span> </button>
            <ul role="menu" aria-describedby="hamburger" tabIndex="0" aria-hidden="true" style={{display: 'flex', position: 'static', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', borderRadius: '0px', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxShadow: 'none', marginTop: '0px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', right: '0px', zIndex: 5, fontSize: '14px', lineHeight: '20px', fontWeight: 400, listStyle: 'outside none none', margin: '0px', padding: '0px', verticalAlign: 'baseline'}}>

                <li style={{minWidth: '0px', position: 'relative', boxSizing: 'border-box', margin: '0px', padding: '0px', border: '0px none rgb(58, 58, 58)', font: '14px / 20px Metropolis', verticalAlign: 'baseline'}}>
                    <a href="" target="" style={{transition: 'color 0.2s ease 0s', color: 'rgb(255, 255, 255)', padding: '0px', marginLeft: '16px', textDecoration: 'none solid rgb(255, 255, 255)', boxSizing: 'border-box', display: 'block', margin: '0px 0px 0px 16px', border: '0px none rgb(255, 255, 255)', font: '14px / 20px Metropolis', verticalAlign: 'baseline'}}>
                        Successful Stories 🥳
                    </a>
                </li>
             
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Header