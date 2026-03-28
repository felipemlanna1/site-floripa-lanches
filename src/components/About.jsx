import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Flame, Award, Users, Heart } from 'lucide-react'

const highlights = [
  {
    icon: <Flame size={22} />,
    title: 'Tempero Inconfundível',
    desc: 'Receitas exclusivas desenvolvidas com anos de tradição no bairro.',
    color: '#D62828',
    bg: 'rgba(214,40,40,0.07)',
    border: 'rgba(214,40,40,0.12)',
  },
  {
    icon: <Award size={22} />,
    title: 'Molhos Premiados',
    desc: 'A maionese verde já virou lenda. Mais de 200 avaliações elogiam nossos molhos.',
    color: '#F4A236',
    bg: 'rgba(244,162,54,0.07)',
    border: 'rgba(244,162,54,0.12)',
  },
  {
    icon: <Users size={22} />,
    title: 'Favorito Local',
    desc: 'Referência no Monte Verde. Mais de 4 mil seguidores no Instagram.',
    color: '#FCBF49',
    bg: 'rgba(252,191,73,0.07)',
    border: 'rgba(252,191,73,0.12)',
  },
  {
    icon: <Heart size={22} />,
    title: 'Feito com Amor',
    desc: 'Cada lanche montado na hora com ingredientes frescos e muito carinho.',
    color: '#FF6B6B',
    bg: 'rgba(255,107,107,0.07)',
    border: 'rgba(255,107,107,0.12)',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section id="sobre" className="section-padding" ref={ref} style={{
      position: 'relative',
      background: 'var(--bg-surface)',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(244,162,54,0.12), transparent)',
      }} />

      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: 72, alignItems: 'center',
        }} className="about-grid">
          {/* Left: Visual - fun food-themed composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="about-visual"
          >
            <div style={{
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              position: 'relative', aspectRatio: '4/5',
              background: `
                linear-gradient(145deg,
                  rgba(255,69,0,0.12) 0%, rgba(10,10,10,0.9) 30%,
                  rgba(255,152,0,0.08) 60%, rgba(10,10,10,0.92) 100%
                )
              `,
              border: '1px solid rgba(244,162,54,0.12)',
            }}>
              {/* Floating food emojis scattered */}
              {[
                { emoji: '\u{1F354}', top: '10%', left: '12%', size: '2.2rem', delay: 0 },
                { emoji: '\u{1F35F}', top: '12%', right: '14%', size: '2rem', delay: 0.5 },
                { emoji: '\u{1F32D}', bottom: '28%', left: '10%', size: '1.8rem', delay: 1 },
                { emoji: '\u{1F964}', bottom: '15%', right: '18%', size: '2rem', delay: 1.5 },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
                  style={{
                    position: 'absolute', fontSize: item.size,
                    top: item.top, left: item.left, right: item.right, bottom: item.bottom,
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))',
                    opacity: 0.7,
                  }}
                >
                  {item.emoji}
                </motion.span>
              ))}

              {/* Central logo with warm glow */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
              }}>
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    width: 130, height: 130, borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid rgba(244,162,54,0.35)',
                    boxShadow: '0 0 60px rgba(244,162,54,0.15), 0 0 120px rgba(214,40,40,0.08), 0 20px 60px rgba(0,0,0,0.5)',
                  }}
                >
                  <img src="/images/logo.jpg" alt="Floripa Lanches" style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                  }} />
                </motion.div>
              </div>

              {/* Badge "Desde 20XX" */}
              <div style={{
                position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
                background: 'rgba(214,40,40,0.9)',
                borderRadius: 50, padding: '8px 20px',
                boxShadow: '0 4px 20px rgba(214,40,40,0.3)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-accent)', fontSize: '0.75rem',
                  color: '#fff', letterSpacing: 2, textTransform: 'uppercase',
                }}>Sabor de Floripa</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-label">Sobre Nós</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              A lanchonete que virou{' '}
              <span style={{ color: 'var(--secondary)' }}>referência</span>
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 20 }}>
              No coração do Monte Verde, em Florianópolis, nasceu a Floripa Lanches
              — uma lanchonete que conquistou o paladar do bairro inteiro com lanches
              artesanais de sabor marcante.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 36, color: 'var(--text-muted)' }}>
              Nosso tempero inconfundível e os molhos diferenciados — especialmente a famosa
              maionese verde — são elogiados por clientes fiéis que voltam noite após noite.
              Com 4.9 no iFood e mais de 695 avaliações, somos a escolha certeira.
            </p>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18,
            }} className="highlights-grid">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  style={{
                    background: h.bg, border: `1px solid ${h.border}`,
                    borderRadius: 'var(--radius-md)', padding: '22px 20px',
                    transition: 'all var(--transition-med)',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = `0 8px 30px ${h.bg}`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ color: h.color, marginBottom: 10 }}>{h.icon}</div>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)', fontSize: '0.95rem',
                    fontWeight: 700, marginBottom: 6,
                  }}>{h.title}</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    {h.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .about-visual { max-width: 320px; margin: 0 auto; }
          .highlights-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .about-visual span[style] { font-size: 1.4rem !important; opacity: 0.5 !important; }
        }
      `}</style>
    </section>
  )
}
