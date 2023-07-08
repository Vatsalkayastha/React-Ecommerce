import React from 'react'
import Navbar from '../features/navbar/navbar'
import Productlist from '../features/product-List/Product-List'

const Home = () => {
  return (
    <div>
        <Navbar>
            <Productlist></Productlist>
        </Navbar>
    </div>
  )
}

export default Home
