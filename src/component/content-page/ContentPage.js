import React from 'react'
import './contentpage.css'
import logo from './toslogo-white.png'
import paybill from './paybill.png'
import fundt from './fundt.png'
import donation from './donation.png'
import onlineshop from './onlineS.png'
import ticket from'./ticket.png'

const ContentPage = () => {
  return (
    <div className='ContentPage'>
        <div className='logo'>
          <img src={logo} alt='' className='logo-img'/>
        </div>
        <div className='intro'>
          <h2>Welcome, Muhammad</h2>
          <h5 style={{color:'red'}}>Your Last Login was : 12,may,2023 | 3:23</h5>
        </div>
        <div className='payments'>
          <h2 style={{color:'#ADD8E6'}}>Payments</h2>
          <div className='pay-bills pay-box'>
            <img src={paybill} className='icons'/>
            <span style={{color:'#ADD8E6',marginLeft:'1vw'}}>Pay Bills</span>

          </div>
          <div className='fund-transfer pay-box'>
          <img src={fundt} className='icons'/>
            <span style={{color:'#ADD8E6',marginLeft:'0.5vw'}}>FundTransfer</span>

          </div>
          <div className='favourites pay-box'>
          <img src={paybill} className='icons'/>
            <span style={{color:'#ADD8E6',marginLeft:'1vw'}}>Favourites</span>

          </div>
          <div className='Tickets pay-box'>
          <img src={ticket} className='icons'/>
            <span style={{color:'#ADD8E6',marginLeft:'1vw'}}>Tickets</span>

          </div>
          <div className='online-shopping pay-box'>
          <img src={onlineshop} className='icons'/>
            <span style={{color:'#ADD8E6',marginLeft:'0vw'}}>OnlineShopping</span>

          </div>          
          <div className='donation pay-box'>
          <img src={donation} className='icons'/>
            <span style={{color:'#ADD8E6',marginLeft:'1vw'}}>Donation</span>

           </div>

        </div>
        <div className='quick-access'>
          <h2 style={{color:'#ADD8E6'}}>Quick Access</h2>
          <div className='pay-box'>

          </div>
          <div className=' pay-box'>

          </div>
          <div className=' pay-box'>

          </div>
          <div className=' pay-box'>

          </div>
          <div className='pay-box'>

          </div>          
          <div className=' pay-box'>

           </div>

        </div>

    </div>
  )
}

export default ContentPage