import { useState } from 'react'
import '../styles/header.css'
export default function Header(){
    const tabs = ["Home", "Menu", "About Us", "Location"]
    const [click, setClick] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)
    return(
        <header>
            <h1>Cafe<span>Maju</span></h1>
            <div className="tabs">
                {tabs.map((tab, index) => {
                    return(
                        <button 
                        onClick={()=>setClick(index)}
                        className={click === index ? 'active tab' : 'tab'}
                        key={index}>
                            {tab}
                        </button>
                    )
                })}
            </div>
            <div className="menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            {openMenu === false && (
               <div className="tabs-menu">
                { tabs.map((tab, index) => {
                    return(
                        <button 
                        onClick={()=>setClick(index)}
                        className={click === index ? 'active tab-menu' : 'tab-menu'}
                        key={index}>
                            {tab}
                        </button>
                    )
                })}
               </div>
            )}
            </div>
        </header>
    )
}