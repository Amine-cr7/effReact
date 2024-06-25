import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Composant1 from "./Composant1"
import Composant2 from "./Composant2"

export default function App(){
    const [salaries,setsalaries] = useState('')
    useEffect( () => {
        fetch("http://localhost:8000/api/salaries")
        .then(res => res.json())
        .then(data => setsalaries(data))
    }
    ,[])
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Composant1 salaries={salaries}/>}/>
                <Route path="/recherche" element={<Composant2 salaries={salaries}/>}/>
            </Routes>
        </BrowserRouter>
    )
}