import { useState } from 'react'
import '../styles/header.css'


export default function Header({ scrollToSection }){
    const tabs = ["Home", "Menu", "Location", "Events"]
    const [click, setClick] = useState(0)
    const [openMenu, setOpenMenu] = useState(false)
    return(
        <header>
            <h1>Cafe<span>Maju</span></h1>
            <div className="tabs">
                {tabs.map((tab, index) => {
                    return(
                        <button 
                        onClick={()=>{setClick(index); scrollToSection(index); setOpenMenu(false)}}
                        className={click === index ? 'active tab' : 'tab'}
                        key={index}>
                            {tab}
                        </button>
                    )
                })}
            </div>
            <div className="menu">
            {openMenu ? 
            <svg 
            onClick={()=>setOpenMenu(false)}
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            :     <svg 
                onClick={()=>setOpenMenu(true)}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            }
            {openMenu && (
               <div className="tabs-menu">
                { tabs.map((tab, index) => {
                    return(
                        <button 
                        onClick={()=>{setClick(index); scrollToSection(index)}}
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