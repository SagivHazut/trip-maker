import React, { useState } from 'react'
import axios from 'axios'
import { Info } from './Info'

export const HomePage = ({ countryData }) => {
  const [inputText, setInputText] = useState('')

  const handleClick = () => {
    const options = {
      method: 'POST',
      url: 'https://api.edenai.run/v2/text/named_entity_recognition',
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI4MmVlOGQtZTg1YS00NjQ3LTk0NTctMzBmNzRlMDEwOTM2IiwidHlwZSI6ImFwaV90b2tlbiJ9.BfT98n0sMwr5qxpQgIqfpO1oPSqJYSB-m9lo_6q9TPc',
      },
      data: {
        providers: 'lettria,neuralspace',
        text: 'how you doing?',
        language: 'en',
        fallback_providers: '',
      },
    }

    axios
      .request(options)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text..."
      />
      <button onClick={handleClick}>Make Request</button>
      <div
        style={{
          padding: '30px',
        }}
      >
        <Info countryData={countryData} />
      </div>
    </div>
  )
}
