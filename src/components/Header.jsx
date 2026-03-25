import { useState } from 'react'
import '../styles/header.css'


export default function Header({ scrollToSection, list }){
    const tabs = ["Home", "Menu", "Location", "Events"]
    const [click, setClick] = useState(0)
    return(
        <header>
            <h1>Cafe<span>Maju</span></h1>
            <div className="tabs">
                {tabs.map((tab, index) => {
                    return(
                        <button 
                        onClick={()=>{setClick(index); scrollToSection(index)}}
                        className={click === index ? 'active tab' : 'tab'}
                        key={index}>
                            {tab}
                        </button>
                    )
                })}
            </div>
            <div className='left'>
                        <div className="cart">
                            <span className='number'>{list.length === 0 ? '' : list.length}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                        </div>
                        <div className="menu">
                          
            </div>
  </div>
          
        </header>
    )
}