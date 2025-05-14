import { useState, useEffect, useRef} from 'react'
import Guesses from './components/Guesses'
import Header from './components/Header'
import Letters from './components/Letters'
import Languages from './components/Languages'


export default function App() {
  return (
    <main>
        <Header />
        <Languages />
        <Guesses />
        <Letters />
    </main>
  )
}