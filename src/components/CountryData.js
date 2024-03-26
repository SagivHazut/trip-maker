import React from 'react'
import Argentina from '../assets/Argentina.png'
import Chile from '../assets/Chile.png'
import Uruguay from '../assets/Uruguay.png'
import Brazil from '../assets/Brazil.png'
import Bolivia from '../assets/Bolivia.png'
import Peru from '../assets/Peru.png'
import Ecuador from '../assets/Ecuador.png'
import Colombia from '../assets/colombia.png'
import Nicaragua from '../assets/nicaragua.png'
import Guatemala from '../assets/guatemala.png'
import Mexico from '../assets/mexico.png'
import Cuba from '../assets/cuba.png'
import Belize from '../assets/belize.png'
import Honduras from '../assets/Honduras.png'
import Panama from '../assets/panama.png'
import costarica from '../assets/costa-rica.png'

const countries = [
  {
    name: 'Argentina',
    flag: <img src={Argentina} alt="Argentina Flag" />,
    data: { info: 'hello im Argentina ' },
  },
  {
    name: 'Chile',
    flag: <img src={Chile} alt="Argentina Flag" />,
    data: { info: 'hello im Chile ' },
  },
  { name: 'Uruguay', flag: <img src={Uruguay} alt="Argentina Flag" /> },
  { name: 'Brazil', flag: <img src={Brazil} alt="Argentina Flag" /> },
  { name: 'Bolivia', flag: <img src={Bolivia} alt="Argentina Flag" /> },
  { name: 'Peru', flag: <img src={Peru} alt="Argentina Flag" /> },
  { name: 'Ecuador', flag: <img src={Ecuador} alt="Argentina Flag" /> },
  { name: 'Colombia', flag: <img src={Colombia} alt="Argentina Flag" /> },
  { name: 'Panama', flag: <img src={Panama} alt="Argentina Flag" /> },
  { name: 'Costa Rica', flag: <img src={costarica} alt="Argentina Flag" /> },
  { name: 'Nicaragua', flag: <img src={Nicaragua} alt="Argentina Flag" /> },
  { name: 'Guatemala', flag: <img src={Guatemala} alt="Argentina Flag" /> },
  { name: 'Mexico', flag: <img src={Mexico} alt="Argentina Flag" /> },
  { name: 'Cuba', flag: <img src={Cuba} alt="Argentina Flag" /> },
  { name: 'Belize', flag: <img src={Belize} alt="Argentina Flag" /> },
  { name: 'Honduras', flag: <img src={Honduras} alt="Argentina Flag" /> },
]

export default countries
