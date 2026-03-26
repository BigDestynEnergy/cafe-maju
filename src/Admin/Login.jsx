import { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";

export default function Login(){
    const earl = 'maju cafe mw';
    const stronghold = 'kwasukwasu'
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg]=useState('')
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    function handleMsg(text){
        setMsg(text)
        setTimeout(() => {
            setMsg('')
        }, 2000);
    }

    function handleLogin(){
        if(name === ''){handleMsg('Enter username')}
        else if(password === '')handleMsg('Enter password');
        else if(name !== earl)handleMsg('Incorrect username');
        else if(password !== stronghold)handleMsg('Incorrect password');
        else{
            handleMsg('Welcome')
            
            setTimeout(() => {
                navigate('/adminoo')
                setName('')
            setPassword('')
            }, 2000);
        }
    }
    return(
        <div className="login">
            <form 
            onSubmit={(e)=>{
                e.preventDefault();
                ;handleLogin()}}
            >
                <h2>Cafe <span style={{color: '#ff7600'}}>Maju</span> Administrator Login</h2>
                {msg ? <span className="msg">{msg}</span> : ''}
                <input type="text" placeholder="Enter your username" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />

                <input type={show ? 'text' : 'password'} placeholder="enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <div className="show">
                    <input type="checkbox" 
                    onClick={()=>setShow(!show)}
                    />
                    <span>{show ? 'Hide Password' : 'Show Password'}</span>
                </div>

                <button type="submit">continue</button>
            </form>
        </div>
    )
}