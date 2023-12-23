import React, { useEffect, useState } from 'react'
import "./progressBarStyle.css"

function ProgressBar({index, activeIndex, duration}) {
    const isActive = index === activeIndex
    const [progress, setProgress] = useState(0)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setProgress((pre)=>{
                if(pre<100){
                    return pre + 1
                }
                clearInterval(intervalId)
                return pre
            })
        }, duration/100)
    },[duration, activeIndex])

    useEffect(()=>{
        setProgress(0)
    },[activeIndex])
  return (
    <div className={`progress-bar-container ${isActive ? "active" : " "}"`}>
        <div className={`${isActive?"progress-bar" : ""}`} style={{width:`${progress}%`}}>

        </div>
    </div>
  )
}

export default ProgressBar