import Image from 'next/image'
import { Model } from './components/Model'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <div className="text-center">
        <h3> Computer Science </h3>
      </div>
      <Model />
    </div>
  )
}
