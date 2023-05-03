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
          <Link to='/admin_ManageCategories'>Hallinnoi kategorioita</Link>
        </li>
{/*         <li>
          <Link to='/admin_ManageProducts'>Hallinnoi tuotteita</Link>
        </li> */}
      </ul>
      </div>
      </main>
    </>
  )
}