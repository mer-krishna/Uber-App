import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://media.licdn.com/dms/image/v2/D5622AQFhw_LX3cTTuw/feedshare-shrink_800/feedshare-shrink_800/0/1732551069388?e=2147483647&v=beta&t=FB3VwoJCY6y9OrgzjgQpUsDG3PGAAWwJ6iD6qIs_Ikc)] h-screen pt-8 flex justify-between flex-col w-full'>
            <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
            </div>

        </div>
    </div>
  )
}

export default Home