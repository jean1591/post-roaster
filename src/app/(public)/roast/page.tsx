import { ContainerSingleColumn } from '../components/Container'
import { CreatePanel } from './components/CreatePanel'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ResultsPanel } from './components/ResultsPanel'

export default function Roast() {
  return (
    <div className="space-y-20">
      <Navbar />

      <ContainerSingleColumn>
        <div className="space-y-20">
          <CreatePanel />
          <ResultsPanel />
        </div>
      </ContainerSingleColumn>

      <Footer />
    </div>
  )
}
