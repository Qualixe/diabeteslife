import './App.css'
import { lazy, Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner'

import Header from './components/Header'
import Hero from './components/Hero'

import './index.css'


const HowItsWork = lazy(() => import('./components/HowItsWork'))
const SpreadSection = lazy(() => import('./components/SpreadSection'))
const VideoGallery = lazy(() => import('./components/VideoGallery'))

function App() {


  return (
    <div className='overflow-x-hidden'> 
    
      <Header />
      <Hero />

      <Suspense fallback={<LoadingSpinner />}>
        <SpreadSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <HowItsWork />
      </Suspense>
  
    </div>
  )
}

export default App
