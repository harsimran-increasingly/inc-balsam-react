import React from 'react'
import Navbar from '../components/Navbar'

function cart() {
    return (

        <div>
            <Navbar />
            <div className="p-10">
                <h1>Cart Page</h1>
                <div id="inc_react_balsam_cart"></div>
            </div>
        </div>
    )
}

export default cart