import Image from 'next/image'
import Header from '@/app/(components)/Header'
import About from '@/app/(components)/About'
import SectionDivider from '@/app/(components)/SectionDivider'
import Navbar from '@/app/(components)/Navbar'
import Projects from '@/app/(components)/Projects'
import Skills from '@/app/(components)/Skills'
import Contact from '@/app/(components)/Contact'
import Resume from '@/app/(components)/Resume'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Navbar/>
      <Header/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Resume/>
      <Contact/>
    </main>
  )
}
