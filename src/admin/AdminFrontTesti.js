/* Korjattu ja SIIRRETTY /Pages / Admin.js

import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <>
      <h3>Admin</h3>
      <ul>
        <li>
          <Link to="../admin/ManageCategories.js">Manage categories</Link>
        </li>
        <li>
          <Link to="../admin/ManageProducts.js">Manage products</Link>
        </li>
      </ul>
    </>
  )
}



*/