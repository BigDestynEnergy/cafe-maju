

import { useNavigate } from 'react-router-dom'
import './styles.css'

const arrays = ["none","maju", "lake", "salads", "appetizers", "roadrunner", "italiano"
]
export default function Del(){
    const navigate = useNavigate()
    return(
        <div className="admin">
            <h1>Admininstrator Page</h1>

            <form>
                <h2>Remove Items from Menu</h2>
                <select>
                    {arrays.map((arr, index) => {

                        return(
                            <option 
                            key={index}
                            value={arr}>{arr}</option>
                        )
                    })}
                </select>

                <div className="input-group">
                    <label htmlFor="">Enter number on list:</label>
                    <input type="number" placeholder='e.g 3'/>
                </div>
                <button>Add</button>

                <span>Would you like to <span 
                onClick={()=>navigate('/adminoo')}
                style={{color: '#1db954', cursor: 'pointer'}}>add</span> an item to the menu?</span>
            </form>
        </div>
    )
}