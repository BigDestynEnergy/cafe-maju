import Header from "./Header";
import '../styles/home.css'
import { useRef, useState } from "react";


const appetizers = [
    {label: 'Cream of mushroom soup', price: '12500'},
    {label: 'Tomato soup', price: '10000'},
    {label: 'Garlic chicken livers', price: '12500'}
]

const salads = [
    {label: 'Greek Salad', price: '12000'},
    {label: 'Lettuce Salad', price: '13000'},
    {label: 'Chicken Caesar Saland', price: '15000'},
    {label: 'Thai Beef Salad', price: '15000'}
]

const roadrunner = [
    {label: 'Chicken Kebab', price: '13000'},
    {label: 'Chicken Kwasukwasu', price: '18000'},
    {label: 'Lemon Gralic Chicken', price: '16000'},
]

const lake = [
    {label: 'The Fresh Water Fillet', price: '19,500'},
    {label: "Mama's boiled stew", price: '22,500'},
    {label: 'Creamy Garlic Prawns', price: '38000'},
]

const italiano = [
    {label: 'Fettucine Chicken Alfredo', price: '25000'},
    {label: 'Spaghetti Mariana', price: '18000'},
    {label: 'Spaghetti Bolognese', price: '23000'},
]

const maju = [
    {label: 'The Best Mixed Grill', price: '25000'},
    {label: 'The Red Eye', price: '20000'},
]
export default function Cafe(){
    const homeRef = useRef(null);
const menuRef = useRef(null);
const locationRef = useRef(null);
const eventsRef = useRef(null);

const scrollToSection = (index) => {
    const sections = [homeRef, menuRef, locationRef, eventsRef];

    sections[index]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
};

const find = [
    {label: 'Location', svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin text-primary"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>, des: 'Chimera Road, Blantyre'},
    {label: 'Hours', svg:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock text-primary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
 , des: 'Mon - Fri: 07:00 am - 06:00 pm'},
 {label: 'Contact', svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
, des: '+265990000000, hello@majucafe.com'}
]

const [list, setList] = useState([])
    return(
        <div className="cafe-component">
            <Header scrollToSection={scrollToSection}/>
            <div className="hero" ref={homeRef}>
                <div className="content">
                    <h1>Cafe Maju</h1>
                <span>Freshly made coffee and homemade bites made just for you.</span>
                <button onClick={()=>scrollToSection(1)}>View Our Menu</button>
                </div>
            </div>

            <div className="hero-menu" ref={menuRef}>
                <button className="checkout">Place Orders ({list.length})</button>

                <h2 className="ht">Our Menu</h2>
                <span>Simple, fresh, and made with care every day.</span>

                <div className="menu-categories">
                    <div className="appetizers">
                    <h2>Appetizers</h2>
                    {appetizers.map((appetize, index) => {

                        return(
                            <div className="container" 
                            onClick={()=>setList(prev => [...prev, appetize])}
                            key={index}>
                                <span>{appetize.label}</span>
                                <span>MWK{appetize.price}</span>
                            </div>
                        )
                    })}
                </div>

                <div className="appetizers">
                    <h2>Salads</h2>
                    {salads.map((salad, index) => {

                        return(
                            <div className="container"
                            onClick={()=>setList(prev => [...prev, salad])}
                            key={index}>
                                <span>{salad.label}</span>
                                <span>MWK{salad.price}</span>
                            </div>
                        )
                    })}
                </div>

                <div className="appetizers">
                    <h2>The Road Runner</h2>
                    {roadrunner.map((road, index) => {

                        return(
                            <div className="container" 
                            onClick={()=>setList(prev => [...prev, road])}
                            key={index}>
                                <span>{road.label}</span>
                                <span>MWK{road.price}</span>
                            </div>
                        )
                    })}
                </div>

                <div className="appetizers">
                    <h2>Fresh From The Lake</h2>
                    {lake.map((fresh, index) => {

                        return(
                            <div className="container" 
                            onClick={()=>setList(prev => [...prev, fresh])}
                            key={index}>
                                <span>{fresh.label}</span>
                                <span>MWK{fresh.price}</span>
                            </div>
                        )
                    })}
                </div>

               

                 <div className="appetizers">
                    <h2>Italian Corner</h2>
                    {italiano.map((italian, index) => {

                        return(
                            <div className="container"
                            onClick={()=>setList(prev => [...prev, italian])}
                            key={index}>
                                <span className="label">{italian.label}</span>
                                <span className="price">MWK{italian.price}</span>
                            </div>
                        )
                    })}
                </div>

                  <div className="appetizers">
                    <h2>Maju Platters</h2>
                    {maju.map((maj, index) => {

                        return(
                            <div className="container"
                            onClick={()=>setList(prev => [...prev, maj])}
                            key={index}>
                                <span>{maj.label}</span>
                                <span>MWK{maj.price}</span>
                            </div>
                        )
                    })}
                </div>
 
                </div>
            </div>

            <div className="location" ref={locationRef}>
                <h2>Find Us</h2>
                <div className="cards">
                    {find.map((f, i) => {
                        return(
                            <div className="card" key={i}>
                                {f.svg}
                                <h3>{f.label}</h3>
                                <span>{f.des}</span>
                            </div>
                        )
                    })}
                </div>
                <div className="map">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.949763673937!2d35.0033493!3d-15.8066027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d845006fb9a4db%3A0x4e51c5140f32808e!2sCafe%20Maju!5e0!3m2!1sen!2smw!4v1774356552773!5m2!1sen!2smw" 
                    width="600" 
                    height="450" 
                    style={{border: '0', borderRadius: '24px'}}
                     allowfullscreen="" 
                     loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
             </div>

            <footer>
                <h3>Cafe <span>Maju</span></h3>
                <span>© 2026 Cafe Magu. All rights reserved.</span>
            </footer>

            
        </div>
    )
}