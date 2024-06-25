import React from 'react'

export default function Composant1({salaries}) {
  return (
    <div className='container'>
        <h1>Liste Des salaries</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>nom</th>
                    <th>prenom</th>
                    <th>fonction</th>
                    <th>service</th>
                </tr>
            </thead>
            <tbody>
                {salaries && salaries.map(item => (
                    <tr key={item.codeSal}>
                        <td>{item.nomSal}</td>
                        <td>{item.prenomSal}</td>
                        <td>{item.fonction}</td>
                        <td>{item.service.nomSer}</td>
                    </tr>
                ))}
            </tbody>
        </table>        
    </div>
  )
}
