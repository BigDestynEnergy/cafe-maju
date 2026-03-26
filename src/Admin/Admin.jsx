import { useNavigate } from 'react-router-dom'
import './styles.css'
import { useState } from 'react';


const arrays = ["none","maju", "lake", "salads", "appetizers", "roadrunner", "italiano", "shire"
]
export default function Admin({setMaju, setShire,setItaliano, setLake, setAppetizers, setSalads, setRoadrunner}){
    const navigate = useNavigate();
    const [vn, setVn] = useState('')
    const [vp, setVp] = useState(null)
    const [msg, setMsg] = useState('')
    const [select, setSelect] = useState('')

        function handleMsg(text){
        setMsg(text)
        setTimeout(() => {
            setMsg('')
        }, 2000);
    }

    function conditions(){

  const newItem = { label: vn, price: Number(vp) };

  if(select === 'maju'){
    setMaju(prev => [...prev, newItem])
  }
  else if(select === 'lake'){
    setLake(prev => [...prev, newItem])
  }
  else if(select === 'italiano'){
    setItaliano(prev => [...prev, newItem])
  }
  else if(select === 'appetizers'){
    setAppetizers(prev => [...prev, newItem])
  }
  else if(select === 'salads'){
    setSalads(prev => [...prev, newItem])
  }
  else if(select === 'roadrunner'){
    setRoadrunner(prev => [...prev, newItem])
  }
  else if(select === 'shire'){
  setShire(prev => [...prev, newItem])
}

  handleMsg('Item Added.')
  setVn('')
  setVp('')
  setSelect('')
}

    function handleAddition(){
        if(select === '' || select === 'none')handleMsg('Please Select Menu Category')
        else if(!vn)handleMsg('Please enter meal name');
        else if(!vp)handleMsg('please enter price')
            else(conditions())
        
    }
    return(
        <div className="admin">
            
            <h1>Admininstrator Page</h1>

            <form
            onSubmit={(e)=>{e.preventDefault(); handleAddition()}}
            >
                <span 
                className='return'
                onClick={()=>navigate('/')}
                >Return to site</span>
                <h2>Add New Items To Menu</h2>
                {msg ? <span className='msg'>{msg}</span> : ''}
                <select
                value={select}
                onChange={(e)=>setSelect(e.target.value)}
                >
                    {arrays.map((arr, index) => {

                        return(
                            <option 
                            key={index}
                            value={arr}>{arr}</option>
                        )
                    })}
                </select>

                <div className="input-group">
                    <label htmlFor="">Enter meal name:</label>
                    <input
                    value={vn}
                    onChange={(e)=>{setVn(e.target.value)}}
                    type="text" placeholder='e.g Chicken Nuggets'/>
                </div>
                
                <div className="input-group">
                    <label htmlFor="">Enter meal price:</label>
                    <input
                    value={vp}
                    onChange={(e)=>{setVp(e.target.value)}}
                    type="number" placeholder='e.g 20000'/>
                </div>
                <button>Add</button>

                <span>Would you like to <span 
                onClick={()=>
                    navigate('/delete')
                }
                style={{color: 'red', cursor: 'pointer'}}>remove</span> an item from the menu?</span>
            </form>
        </div>
    )
}