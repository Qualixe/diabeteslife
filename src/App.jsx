import './App.css'
import { lazy, Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner'

import Header from './components/Header'
import Hero from './components/Hero'

import './index.css'
import './i18n'
import LanguageFontProvider from './components/LanguageFontProvider'


const HowItsWork = lazy(() => import('./components/HowItsWork'))
const SpreadSection = lazy(() => import('./components/SpreadSection'))
const VideoSection = lazy(() => import('./components/VideoSection'))

function App() {


  return (
    <LanguageFontProvider>
    <div className='overflow-x-hidden'> 
    
      <Header />
      <Hero />

      <Suspense fallback={<LoadingSpinner />}>
       <VideoSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <HowItsWork />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
      <SpreadSection />
        
      </Suspense>
  
    </div>
    </LanguageFontProvider>
  )
}

export default App
