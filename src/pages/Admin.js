import React from 'react'
import { Link } from 'react-router-dom'
import ManageProducts from '../components/ManageProducts'

export default function Admin() {
  return (
    <>
      <main>
      <div className='admin'>
      <h3 style={{display: "flex", alignItems: "center"}}>Admin</h3>
      <ul>
        <li className='admin-button'>
          <Link to='/admin_ManageCategories'><button className="btn btn-sm btn-outline-dark">Hallinnoi kategorioita</button></Link>
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