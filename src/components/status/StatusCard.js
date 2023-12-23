import React from 'react'
import { useNavigate } from 'react-router-dom'

function StatusCard() {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/status/{userId}`)} className='flex items-center mt-3 cursor-pointer'>
        <div>
            <img className='h-7 w-7 lg:w-10 lg:h-10 rounded-full' src='https://cdn.pixabay.com/photo/2023/12/09/10/10/woman-8439003_640.png' alt=''/>
        </div>
        <div className='ml-2 text-white'>
            <p>Status</p>
        </div>
    </div>
  )
}

export default StatusCard