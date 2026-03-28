import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Cardapio from './components/Cardapio'
import Delivery from './components/Delivery'
import Avaliacoes from './components/Avaliacoes'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import MarqueeStrip from './components/MarqueeStrip'
import PromoBanner from './components/PromoBanner'
import ManualDaMarca from './pages/ManualDaMarca'

const WHATSAPP_NUMBER = '554833649340'
const WHATSAPP_MSG = encodeURIComponent('Oi! Quero fazer um pedido pelo Floripa Lanches!')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Floripa Lanches | O prazer de comer bem está aqui!</title>
        <meta name="description" content="Lanches artesanais com tempero marcante no Monte Verde, Florianópolis. Delivery via WhatsApp e iFood." />
      </Helmet>
      <Hero whatsappLink={WHATSAPP_LINK} />
      <MarqueeStrip />
      <About />
      <Cardapio whatsappLink={WHATSAPP_LINK} />
      <PromoBanner whatsappLink={WHATSAPP_LINK} />
      <Delivery whatsappLink={WHATSAPP_LINK} />
      <Avaliacoes whatsappLink={WHATSAPP_LINK} />
      <Contato whatsappLink={WHATSAPP_LINK} />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar whatsappLink={WHATSAPP_LINK} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manual-da-marca" element={<ManualDaMarca />} />
        </Routes>
      </main>
      <Footer whatsappLink={WHATSAPP_LINK} />
      <WhatsAppFloat whatsappLink={WHATSAPP_LINK} />
    </>
  )
}

export default App
