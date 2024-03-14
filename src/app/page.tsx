import { GlobalStateProvider } from '../contexts/GlobalStateContext'
import './global.scss'
import dynamic from 'next/dynamic'
 
const App = dynamic(() => import('./client'), { ssr: false })

export default function Page() {
  return <GlobalStateProvider><App /></GlobalStateProvider>
}