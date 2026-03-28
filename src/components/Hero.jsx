import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, Star, Clock, MapPin } from 'lucide-react'

/* Animated hunger counter - "X pessoas pedindo agora" */
function HungerCounter() {
  const [count, setCount] = useState(12)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        const next = prev + change
        return Math.max(5, Math.min(25, next))
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'rgba(214,40,40,0.12)',
        border: '1px solid rgba(214,40,40,0.2)',
        borderRadius: 50, padding: '8px 18px',
        marginBottom: 20,
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{
          width: 8, height: 8, borderRadius: '50%',
          background: '#D62828',
        }}
      />
      <span style={{
        fontFamily: 'var(--font-heading)', fontSize: '0.78rem',
        fontWeight: 600, color: '#FF6B6B',
      }}>
        <motion.span
          key={count}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ display: 'inline-block' }}
        >
          {count}
        </motion.span>
        {' '}pessoas pedindo agora
      </span>
    </motion.div>
  )
}

export default function Hero({ whatsappLink }) {
  return (
    <section id="inicio" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Background layers */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 90% 70% at 50% 30%, rgba(214,40,40,0.12) 0%, transparent 55%),
          radial-gradient(ellipse 60% 50% at 20% 80%, rgba(244,162,54,0.07) 0%, transparent 50%),
          radial-gradient(ellipse 50% 40% at 80% 70%, rgba(252,191,73,0.05) 0%, transparent 50%),
          var(--bg-dark)
        `,
        zIndex: 0,
      }} />

      {/* Animated orbs */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-5, 5, -5], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '8%', right: '15%',
          width: 350, height: 350, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(214,40,40,0.07) 0%, transparent 70%)',
          filter: 'blur(50px)', zIndex: 0,
        }}
      />
      <motion.div
        animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: '10%', left: '5%',
          width: 280, height: 280, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244,162,54,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)', zIndex: 0,
        }}
      />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        zIndex: 0,
        maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)',
      }} />

      {/* Content - two-column layout */}
      <div className="section-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 60,
          paddingTop: 120, paddingBottom: 80,
          maxWidth: 1200, margin: '0 auto',
          flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {/* Left column - text content */}
          <div style={{
            flex: '1 1 440px', maxWidth: 580,
            display: 'flex', flexDirection: 'column',
            alignItems: 'flex-start', textAlign: 'left',
          }}>
            {/* Info pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(214,40,40,0.1)',
                border: '1px solid rgba(214,40,40,0.2)',
                borderRadius: 50, padding: '6px 14px',
                fontSize: '0.75rem', fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                color: '#FF6B6B',
              }}>
                <Star size={12} fill="#FF6B6B" /> 4.9 no iFood
              </span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(244,162,54,0.08)',
                border: '1px solid rgba(244,162,54,0.2)',
                borderRadius: 50, padding: '6px 14px',
                fontSize: '0.75rem', fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                color: 'var(--secondary)',
              }}>
                <Clock size={12} /> 18h - 00:30
              </span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(252,191,73,0.08)',
                border: '1px solid rgba(252,191,73,0.15)',
                borderRadius: 50, padding: '6px 14px',
                fontSize: '0.75rem', fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                color: 'var(--accent)',
              }}>
                <MapPin size={12} /> Monte Verde, Florianópolis
              </span>
            </motion.div>

            {/* Live hunger counter */}
            <HungerCounter />

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <h1 style={{ lineHeight: 1.05, marginBottom: 20 }}>
                <span style={{ display: 'block', color: 'var(--text-primary)', fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>O sabor que</span>
                <span className="gradient-text-animated" style={{
                  display: 'block',
                  fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                  fontWeight: 900,
                }}>
                  marca presença
                </span>
              </h1>
              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7, marginBottom: 36, maxWidth: 560,
              }}>
                Lanches artesanais com tempero inconfundível, molhos exclusivos e
                ingredientes selecionados. Referência no bairro há anos.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-whatsapp" style={{ fontSize: '1.05rem', padding: '18px 40px' }}>
                <MessageCircle size={22} /> Pedir pelo WhatsApp
              </a>
              <a href="#cardapio" className="cta-secondary" style={{ fontSize: '1.05rem', padding: '17px 38px' }}
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('cardapio')
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80
                    window.scrollTo({ top, behavior: 'smooth' })
                  }
                }}
              >
                Ver Cardápio
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              style={{
                display: 'flex', gap: 48, flexWrap: 'wrap',
                padding: '28px 40px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {[
                { num: '4.2K+', label: 'Seguidores' },
                { num: '695', label: 'Avaliações' },
                { num: '4.9', label: 'Nota iFood' },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 800,
                    fontSize: '1.6rem', color: 'var(--secondary)', lineHeight: 1.2,
                  }}>{stat.num}</div>
                  <div style={{
                    fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500,
                    letterSpacing: 2, textTransform: 'uppercase', marginTop: 2,
                  }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Real burger photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 80 }}
            style={{
              flex: '1 1 380px', maxWidth: 520,
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {/* Glow behind the photo */}
            <div style={{
              position: 'absolute', inset: '-15%',
              background: 'radial-gradient(circle, rgba(214,40,40,0.18) 0%, rgba(244,162,54,0.08) 40%, transparent 70%)',
              filter: 'blur(40px)',
              borderRadius: '50%',
              zIndex: 0,
            }} />

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <img
                src="/images/hero-burger.jpg"
                alt="Hambúrguer artesanal Floripa Lanches"
                style={{
                  width: '100%',
                  maxWidth: 460,
                  borderRadius: 24,
                  objectFit: 'cover',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 10px 30px rgba(214,40,40,0.15)',
                  border: '2px solid rgba(255,255,255,0.06)',
                }}
              />

              {/* Floating badge - ARTESANAL */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: '8%', right: '-20px',
                  background: 'rgba(214,40,40,0.92)',
                  borderRadius: 50, padding: '8px 16px',
                  display: 'flex', alignItems: 'center', gap: 6,
                  boxShadow: '0 8px 30px rgba(214,40,40,0.3)',
                  zIndex: 3,
                }}
              >
                <span style={{ fontSize: '0.9rem' }}>&#127798;</span>
                <span style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 700,
                  fontSize: '0.65rem', color: '#fff', letterSpacing: 0.5,
                }}>ARTESANAL</span>
              </motion.div>

              {/* Floating badge - MOLHOS ESPECIAIS */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', bottom: '12%', left: '-30px',
                  background: 'rgba(244,162,54,0.92)',
                  borderRadius: 50, padding: '8px 14px',
                  display: 'flex', alignItems: 'center', gap: 5,
                  boxShadow: '0 8px 30px rgba(244,162,54,0.25)',
                  zIndex: 3,
                }}
              >
                <span style={{ fontSize: '0.85rem' }}>&#127846;</span>
                <span style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 700,
                  fontSize: '0.6rem', color: 'var(--bg-dark)', letterSpacing: 0.5,
                }}>MOLHOS ESPECIAIS</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute', bottom: 30, left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            opacity: 0.35, cursor: 'pointer',
          }}
          onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: 3, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
          <ChevronDown size={16} color="var(--text-muted)" />
        </motion.div>
      </div>
    </section>
  )
}
