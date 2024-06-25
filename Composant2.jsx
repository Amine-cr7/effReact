import React, { useState } from 'react'

export default function Composant2({ salaries }) {
    const [searchParService, setSearchParService] = useState([])
    const [service, setService] = useState('')
    const [click,setClick] = useState(false)
    function handle_search() {
        if (service) {
            setSearchParService(salaries.filter(item => item.service.nomSer === service))
            setClick(true)
        }
    }
    return (
        <div className='container'>
            <h1>Recherche Par Service</h1>
            <div className='form-group mb-3'>
                <label htmlFor="" className='form-label'>Entrer le nom De Service</label>
                <input type="text" onChange={(e) => setService(e.target.value)} className='form-control' />
            </div>
            <button className='btn btn-dark form-control' onClick={handle_search}>Chercher</button>
            {click === true ?
                searchParService.length > 0 ?
                <div>
                    {searchParService.map(item =>

                        <ul key={item.codeSal}>
                            <li>Nom : {item.nomSal}</li>
                            <li>Prenom : {item.prenomSal}</li>
                        </ul>
                    )}
                </div>
                : "aucun"
                :
                null
            }
        </div>
    )
}