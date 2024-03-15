import { GlobalStateProvider } from '../contexts/GlobalStateContext'
import './globals.css'
import dynamic from 'next/dynamic'
 
const App = dynamic(() => import('./client'), { ssr: false })

export default function Page() {
  return <GlobalStateProvider><App /></GlobalStateProvider>
}