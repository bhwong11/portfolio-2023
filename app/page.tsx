import Header from '@/app/(components)/Header'
import About from '@/app/(components)/About'
import Navbar from '@/app/(components)/Navbar'
import Projects from '@/app/(components)/Projects'
import Skills from '@/app/(components)/Skills'
import Contact from '@/app/(components)/Contact'
import Resume from '@/app/(components)/Resume'
import AnimationBLock from '@/app/(components)/AnimationBlock'

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Resume/>
      <Contact/>
    </main>
    </>
  )
}
