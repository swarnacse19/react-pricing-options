import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './Components/DaisyUi/DaisyNav'
import Nav from './Components/Navbar/Nav'
import PricingOption from './Components/PricingOptions/PricingOption'
import ResultCharts from './Components/ResultChart/ResultCharts'

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {

  return (
    <>
      <header>
        <Nav></Nav>
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <ResultCharts></ResultCharts>
      </main>
    </>
  )
}

export default App
