import Image from 'next/image'
import Header from '@/app/(components)/Header'
import About from '@/app/(components)/About'
import SectionDivider from '@/app/(components)/SectionDivider'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <SectionDivider/>
      <About/>
    </main>
  )
}
