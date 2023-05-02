import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <>
      <main>
      <div className='about'>
      <h3 style={{display: "flex", alignItems: "center"}}>Admin</h3>
      <ul>
        <li>
          <Link to='/admin_managecategories'>Hallinnoi kategorioita</Link>
        </li>
        <li>
          <Link to='/admin_manageproducts'>Hallinnoi tuotteita</Link>
        </li>
      </ul>
      </div>
      </main>
    </>
  )
}