import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Cardápio', href: '/#cardapio' },
  { label: 'Delivery', href: '/#delivery' },
  { label: 'Avaliações', href: '/#avaliacoes' },
  { label: 'Contato', href: '/#contato' },
]

export default function Navbar({ whatsappLink }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.replace('/#', '')
      if (location.pathname !== '/') {
        window.location.href = href
        return
      }
      const el = document.getElementById(id)
      if (el) {
        const offset = 80
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
      setMenuOpen(false)
    }
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px) saturate(1.5)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.5)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(244,162,54,0.08)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: scrolled ? 64 : 76, transition: 'height 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, zIndex: 10 }}>
          <div style={{
            width: scrolled ? 40 : 48, height: scrolled ? 40 : 48,
            borderRadius: '50%', overflow: 'hidden',
            border: '2px solid var(--secondary)',
            boxShadow: '0 0 20px rgba(244,162,54,0.15)',
            transition: 'all 0.4s ease',
            flexShrink: 0,
          }}>
            <img
              src="/images/logo.jpg"
              alt="Floripa Lanches"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-accent)',
              fontSize: scrolled ? '1.1rem' : '1.25rem',
              color: 'var(--secondary)',
              lineHeight: 1.1,
              transition: 'font-size 0.3s',
            }}>
              Floripa
            </span>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.65rem',
              fontWeight: 500,
              color: 'var(--text-muted)',
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}>
              Lanches
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-desktop">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-heading)', fontSize: '0.85rem',
                fontWeight: 500, color: 'var(--text-secondary)',
                transition: 'color 0.2s', letterSpacing: 0.5,
                position: 'relative',
              }}
              onMouseEnter={e => e.target.style.color = '#F4A236'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.label}
            </a>
          ))}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="cta-whatsapp" style={{ padding: '10px 22px', fontSize: '0.82rem' }}>
            <MessageCircle size={15} /> Pedir Agora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          style={{
            display: 'none', alignItems: 'center', justifyContent: 'center',
            background: menuOpen ? 'rgba(214,40,40,0.15)' : 'rgba(255,255,255,0.05)',
            color: menuOpen ? 'var(--primary)' : 'var(--text-primary)',
            padding: 10, borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.2s',
            zIndex: 10,
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(10,10,10,0.98)',
              backdropFilter: 'blur(30px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 0, zIndex: 5,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.6rem',
                  fontWeight: 600, color: 'var(--text-secondary)',
                  padding: '14px 0',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#F4A236'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              style={{ marginTop: 24, padding: '16px 40px', fontSize: '1rem' }}
            >
              <MessageCircle size={20} /> Pedir pelo WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
