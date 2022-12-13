import React from 'react'
import { Container } from 'react-bootstrap'
import Listings from '../../components/Listings'
import Navigation from '../../components/Navbar'

function CRUD() {
  return (
    <div>
      <Navigation />
      <Listings />
    </div>
  )
}

export default CRUD