import React from 'react'
import './contentpage.css'
import logo from './b-logo.png'
import paybill from './paybill.png'
import fundt from './fundt.png'
import donation from './donation.png'
import onlineshop from './onlineS.png'
import ticket from'./ticket.png'
import gsetting from './gsetting.png'
import setting from './setting.png'
import view from './view.png'
import psetting from './psetting.png'
import history from './history.png'
import details from './details.png'

const ContentPage = () => {
  return (
    <div className='ContentPage'>
        <div className='logo'>
          <img src={logo} alt='' className='logo-img'/>
        </div>
        <br/>
        <div className='searchbar'>
          <input type='search' placeholder='search..'/>
          
        </div>
        
        <div className='intro'>
          <h2>Welcome, Muhammad</h2>
          <h5 style={{color:'red'}}>Your Last Login was : 12,MAY,2023 | 3:23</h5>
        </div>
        <div className='payments'>
          <h2 >Payments</h2>
          <div className='pay-bills pay-box'>
            <img src={paybill} className='icons'/>
            <span > Pay Bills</span>

          </div>
          <div className='fund-transfer pay-box'>
          <img src={fundt} className='icons'/>
            <span >FundTransfer</span>

          </div>
          <div className='favourites pay-box'>
          <img src={paybill} className='icons'/>
            <span >Favourites</span>

          </div>
          <div className='Tickets pay-box'>
          <img src={ticket} className='icons'/>
            <span >Tickets</span>

          </div>
          <div className='online-shopping pay-box'>
          <img src={onlineshop} className='icons'/>
            <span >Online Shopping</span>

          </div>          
          <div className='donation pay-box'>
          <img src={donation} className='icons'/>
            <span >Donation</span>

           </div>

        </div>
        <div className='quick-access'>
          <h2 >Quick Access</h2>
          <div className='pay-box'>
          <img src={setting} className='icons'/>
            <span >Settings</span>

          </div>
          <div className=' pay-box'>
          <img src={details} className='icons'/>
            <span  >Account Details</span>

          </div>
          <div className=' pay-box'>
          <img src={history} className='icons'/>
            <span >Transaction History</span>

          </div>
          <div className=' pay-box'>
          <img src={view} className='icons'/>
            <span >View Account statment</span>

          </div>
          <div className='pay-box'>
          <img src={psetting} className='icons'/>
            <span >Password settings</span>

          </div>          
          <div className=' pay-box'>
          <img src={gsetting} className='icons'/>
            <span >General History</span>

           </div>

        </div>

    </div>
  )
}

export default ContentPage