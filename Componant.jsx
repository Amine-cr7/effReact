import React, { useState } from 'react'

export default function Componant() {
    const [matricule,setMatricule] = useState('')
    const [marque,setMarque] = useState('')
    const [date,setDate] = useState('')
    const [couleur,setCouleur] = useState('')
    const [info,setInfo] = useState();
    function handle_add(){
        setInfo({matricule,marque,date,couleur});
    }
  return (
    <div>
         <div className="container mt-5">
        <h2>Gestion Voitures</h2>
            <div className="form-group">
                <label for="matricule">Matricule:</label>
                <input type="text" onChange={(e) => setMatricule(e.target.value)} className="form-control" id="matricule" />
            </div>
            <div className="form-group">
                <label for="marque">Marque:</label>
                <select onChange={(e) => setMarque(e.target.value)} className="form-control" id="marque">
                    <option value={"Toyota"}>Toyota</option>
                    <option value={"Dacia"}>Dacia</option>
                    <option value={"Peugeot"}>Peugeot</option>
                    <option value={"Renault"}>Renault</option>
                </select>
            </div>
            <div className="form-group">
                <label for="date-mise">Date de mise en circulation:</label>
                <input onChange={(e) => setDate(e.target.value)} type="date" className="form-control" id="date-mise"/>
            </div>
            <div className="form-group">
                <label for="couleur">Couleur:</label>
                <input onChange={(e) => setCouleur(e.target.value)} type="text" className="form-control" id="couleur" />
            </div>
            <button type="button" onClick={handle_add} className="btn btn-primary" >Confirmer</button>
            {info &&
            <>
            <h1>Les donnes</h1>
            <p>matricule : {info.matricule}</p>
            <p>marque : {info.marque}</p>
            <p>date : {info.date}</p>
            <p>couleur : {info.couleur}</p>
            </>
            }
    </div>
    </div>
  )
}
