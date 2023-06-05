import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../Components/Layout'
import LandingPage from '../Components/LandingPage'

export default function Home() {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  )
}
