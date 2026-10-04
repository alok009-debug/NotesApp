import React from 'react'
import Left from '../components/Left'
import Right from '../components/Right'

const Home = () => {
    return (
        <div className='Home'>
            <div className='Home-Left'>
                <Left />
            </div>
            <div className='Home-Right'>
                <Right />
            </div>
        </div>
    )
}

export default Home