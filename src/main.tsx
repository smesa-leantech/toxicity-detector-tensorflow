import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToxicityDetectorPage } from './app'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToxicityDetectorPage />
  </StrictMode>,
)
