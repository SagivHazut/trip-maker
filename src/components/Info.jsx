import React, { useState, useEffect } from 'react'
import '../css/info.css'

export const Info = ({ countryData }) => {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam
  harum sed quidem tempore debitis atque mollitia autem consequuntur aut
  placeat adipisci ipsum accusamus, saepe numquam minus quam nisi facere?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam
  harum sed quidem tempore debitis atque mollitia autem consequuntur aut
  placeat adipisci ipsum accusamus, saepe numquam minus quam nisi facere?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam
  harum sed quidem tempore debitis atque mollitia autem consequuntur aut
  placeat adipisci ipsum accusamus, saepe numquam minus quam nisi facere?`

  const [typedText, setTypedText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    if (!animationComplete && charIndex < text.length) {
      const interval = setInterval(() => {
        setTypedText((prevTypedText) => prevTypedText + text[charIndex])
        setCharIndex((prevCharIndex) => prevCharIndex + 1)
      }, 30)

      return () => clearInterval(interval)
    } else {
      setAnimationComplete(true)
    }
  }, [charIndex, text, animationComplete])
  console.log(countryData)
  return (
    <div className="typing-container">
      {countryData ? (
        <div className="typing-text">{countryData.info}</div>
      ) : (
        <div className="typing-text">{text}</div>
      )}
    </div>
  )
}
