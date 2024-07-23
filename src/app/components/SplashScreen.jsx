import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import splashscreen from "../images/helloedited.gif"
import anime from "animejs"

const SplashScreen = ({ finishLoading }) => {
    const [isMounted, setIsMounted] = useState(false)
    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading()
        })
        loader
          .add({
            targets: "#hello",
            delay: 0,
            scale: 1,
            loop: 1,
            duration: 4000
          })
          .add({
            targets: "splashscreen",
            opacity: 0,
            duration: 1000
          })
        }

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10)
        animate()
        return () => clearTimeout(timeout)
      }, [])

  return (
      <div className="flex fade-in h-screen w-screen items-center justify-center bg-[#FFFBFA] absolute" isMounted={isMounted}>
          <Image id="hello" unoptimized
          src={splashscreen}
          alt="hero image"
          width={350}
          height={100}/> </div>)
}

export default SplashScreen
