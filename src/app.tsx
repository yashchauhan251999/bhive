import { ChooseUs } from './chooseUs'
import { DownloadNow } from './DownloadNow'
import { Main } from './main_section'
import { Nav } from './nav'
import { OurSpaces } from './OurSpaces'
import { Footer } from './footer'

export function App() {
  return (
    <main className="h-full w-full flex flex-col relative">
      <Nav />
      <Main />
      <ChooseUs />
      <OurSpaces />
      <DownloadNow />
      <Footer />
    </main>
  )
}
