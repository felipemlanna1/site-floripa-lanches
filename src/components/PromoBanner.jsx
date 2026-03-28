import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Zap } from 'lucide-react'

export default function PromoBanner({ whatsappLink }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #D62828 0%, #A51E1E 40%, #8B1A1A 100%)',
      padding: 'clamp(48px, 8vw, 80px) 0',
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute', top: -80, right: -40,
        width: 300, height: 300, borderRadius: '50%',
        background: 'rgba(255,255,255,0.03)',
      }} />
      <div style={{
        position: 'absolute', bottom: -60, left: -30,
        width: 200, height: 200, borderRadius: '50%',
        background: 'rgba(244,162,54,0.06)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        opacity: 0.4,
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 32, flexWrap: 'wrap',
          }}
          className="promo-content"
        >
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(252,191,73,0.2)',
              border: '1px solid rgba(252,191,73,0.3)',
              borderRadius: 50, padding: '5px 14px',
              marginBottom: 16,
            }}>
              <Zap size={14} color="#FCBF49" fill="#FCBF49" />
              <span style={{
                fontFamily: 'var(--font-heading)', fontSize: '0.72rem',
                fontWeight: 700, color: '#FCBF49',
                letterSpacing: 1.5, textTransform: 'uppercase',
              }}>Oferta Especial</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 800, color: '#fff',
              lineHeight: 1.1, marginBottom: 12,
            }}>
              Combo Floripa{' '}
              <span style={{ color: '#FCBF49' }}>R$ 49,90</span>
            </h2>
            <p style={{
              fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.6, maxWidth: 480,
            }}>
              X-Tudo + Batata Cheddar & Bacon + Refri 600ml.
              Peça pelo WhatsApp e ganhe um <strong style={{ color: '#fff' }}>molho extra grátis!</strong>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
          >
            <span style={{ fontSize: '4rem', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))' }}>
              {'\u{1F354}'}
            </span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp"
              style={{
                padding: '16px 36px', fontSize: '1rem',
                boxShadow: '0 6px 30px rgba(37,211,102,0.4)',
              }}
            >
              <MessageCircle size={20} /> Pedir Agora
            </a>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .promo-content {
            text-align: center;
            justify-content: center !important;
          }
          .promo-content > div:first-child {
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
