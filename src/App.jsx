import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cafe from './components/Cafe'
import Login from './Admin/Login'
import Admin from './Admin/Admin'
import Del from './Admin/Del'
import { useEffect, useState } from 'react'

export default function App(){
  /* ---------------- DATA  ---------------- */
  const [appetizers, setAppetizers] = useState(()=>{
    const saved = localStorage.getItem('appetizers');

    return saved ? JSON.parse(saved) : 
    [
  { label: "Cream of mushroom soup", price: 12500 },
  { label: "Tomato soup", price: 10000 },
  { label: "Garlic chicken livers", price: 12500 },
]
  })

const [salads, setSalads] = useState(()=>{
  const saved = localStorage.getItem('salads');
  return saved ? JSON.parse(saved) :
   [
  { label: "Greek Salad", price: 12000 },
  { label: "Chicken Caesar Salad", price: 15000 },
  { label: "Thai Beef Salad", price: 15000 },
]
}
)

const [roadrunner, setRoadrunner ]= useState(()=>{
  const saved = localStorage.getItem('roadrunner')
  return saved ? JSON.parse(saved) : 
  [
  { label: "Chicken Kebab", price: 13000 },
  { label: "Chicken Kwasukwasu", price: 18000 },
  { label: "Lemon Garlic Chicken", price: 16000 },
]})

const [lake, setLake] = useState(()=>{
  const saved = localStorage.getItem('lake');
  return saved ? JSON.parse(saved) : 
  [
  { label: "The Fresh Water Fillet", price: 19500 },
  { label: "Mama's boiled stew", price: 22500 },
  { label: "Creamy Garlic Prawns", price: 38000 },
]
} )

const [italiano, setItaliano] = useState(()=>{
  const saved = localStorage.getItem('italiano');
  return saved ? JSON.parse(saved) : 
  [
  { label: "Fettucine Chicken Alfredo", price: 25000 },
  { label: "Spaghetti Mariana", price: 18000 },
  { label: "Spaghetti Bolognese", price: 23000 },
]
})

const [shire, setShire] = useState(()=>{
  const saved = localStorage.getItem('shire');
  return saved ? JSON.parse(saved) : [
  {label: 'T-Bone Steak', price: 19500},
  {label: 'Sirloin steak', price: 25000},
  {label: 'Rump Steak', price: 23000}
  ]
})

const [maju, setMaju ] = useState(()=>{
  const saved = localStorage.getItem('maju');
  return saved ? JSON.parse(saved) :
  [
  { label: "The Best Mixed Grill", price: 25000 },
  { label: "The Red Eye", price: 20000 },
]
})





useEffect(()=>{
  localStorage.setItem('maju', JSON.stringify(maju))
}, [maju])

useEffect(()=>{
  localStorage.setItem('salads', JSON.stringify(salads))
}, [salads])

useEffect(()=>{
  localStorage.setItem('appetizers', JSON.stringify(appetizers))
}, [appetizers])

useEffect(()=>{
  localStorage.setItem('lake', JSON.stringify(lake))
}, [lake])

useEffect(()=>{
  localStorage.setItem('italiano', JSON.stringify(italiano))
}, [italiano])

useEffect(()=>{
  localStorage.setItem('roadrunner', JSON.stringify(roadrunner))
}, [roadrunner])

useEffect(()=>{
  localStorage.setItem('shire', JSON.stringify(shire))
}, [shire])


  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cafe 
        maju={maju}
        lake={lake}
        italiano={italiano}
        roadrunner={roadrunner}
        appetizers={appetizers}
        salads={salads}
        shire={shire}
        />} />

        <Route path='/login' element={<Login />} />

        <Route path='/adminoo' element={
          <Admin
          maju={maju} setMaju={setMaju}
          lake={lake} setLake={setLake}
          italiano={italiano} setItaliano={setItaliano}
          roadrunner={roadrunner} setRoadrunner={setRoadrunner}
          appetizers={appetizers} setAppetizers={setAppetizers}
          salads={salads} setSalads={setSalads}
          shire={shire} setShire={setShire}
        />} />


        <Route path='/delete' element={<Del
        maju={maju}
        lake={lake}
        italiano={italiano}
        roadrunner={roadrunner}
        appetizers={appetizers}
        salads={salads}
        setShire={setShire}
        />} />
      </Routes>
    </BrowserRouter>
  )
}