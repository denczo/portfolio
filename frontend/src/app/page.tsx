import './global.scss'
import dynamic from 'next/dynamic'
 
const App = dynamic(() => import('./client'), { ssr: false })

export default function Page() {
  return <App />
}