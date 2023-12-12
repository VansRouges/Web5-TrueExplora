import React from 'react'
import Navbar from '@/components/Navbar'
// import Topbar from '@/components/Topbar'
import FlightList from '@/components/FlightList'

function flights() {
  return (
    <div>
      <Navbar />
      <FlightList />
    </div>
  )
}

export default flights
