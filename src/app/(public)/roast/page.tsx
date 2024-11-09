import { Container } from '../components/Container'
import { CreatePanel } from './components/CreatePanel'
import { Navbar } from '../components/Navbar'
import { ResultsPanel } from './components/ResultsPanel'

export default function Roast() {
  return (
    <div className="space-y-20">
      <Navbar />

      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <CreatePanel />
          <ResultsPanel />
        </div>
      </Container>
    </div>
  )
}
