import React from 'react'
import { Link } from 'react-router-dom'
import ManageProducts from '../components/ManageProducts'

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
        <li >
              <ManageProducts />
        </li>
      </ul>
      </div>
      </main>
    </>
  )
}