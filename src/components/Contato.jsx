import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, MapPin, Clock, Navigation } from 'lucide-react'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/>
  </svg>
)
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

export default function Contato({ whatsappLink }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contato" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span className="section-label">Contato</span>
          <h2 style={{ marginBottom: 12 }}>
            Venha nos{' '}
            <span style={{ color: 'var(--primary)' }}>visitar</span>
          </h2>
          <p style={{ maxWidth: 550, margin: '0 auto' }}>
            Estamos no coração do Monte Verde, esperando você com o melhor lanche de Floripa!
          </p>
        </motion.div>

        <div className="contato-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 40,
        }}>
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              minHeight: 380,
            }}
          >
            <iframe
              title="Localização Floripa Lanches"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.8!2d-48.5236!3d-27.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM2JzUwLjAiUyA0OMKwMzEnMjUuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              style={{ width: '100%', height: '100%', minHeight: 380, border: 'none', filter: 'invert(0.9) hue-rotate(200deg) brightness(0.65) contrast(1.2) saturate(0.2) grayscale(0.1)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            {/* Address */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: 24,
              display: 'flex', gap: 16, alignItems: 'flex-start',
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                background: 'rgba(214,40,40,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--primary)',
              }}>
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ marginBottom: 6, fontSize: '1rem' }}>Endereço</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                  R. da Timbaúba, 253 - Monte Verde<br />
                  Florianópolis - SC, 88032-310
                </p>
                <a
                  href="https://maps.google.com/?q=R.+da+Timbauba,+253+-+Monte+Verde,+Florianópolis+-+SC"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    color: 'var(--secondary)', fontSize: '0.9rem',
                    fontWeight: 500, marginTop: 8,
                  }}
                >
                  <Navigation size={14} /> Como chegar
                </a>
              </div>
            </div>

            {/* Hours */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: 24,
              display: 'flex', gap: 16, alignItems: 'flex-start',
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                background: 'rgba(244,162,54,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--secondary)',
              }}>
                <Clock size={22} />
              </div>
              <div>
                <h4 style={{ marginBottom: 6, fontSize: '1rem' }}>Horário de Funcionamento</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  Todos os dias: 18:00 - 00:30
                </p>
              </div>
            </div>

            {/* Phone */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: 24,
              display: 'flex', gap: 16, alignItems: 'flex-start',
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                background: 'rgba(37,211,102,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--whatsapp)',
              }}>
                <Phone size={22} />
              </div>
              <div>
                <h4 style={{ marginBottom: 6, fontSize: '1rem' }}>Telefone / WhatsApp</h4>
                <p style={{ fontSize: '0.95rem' }}>(48) 3364-9340</p>
              </div>
            </div>

            {/* Social */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: 24,
            }}>
              <h4 style={{ marginBottom: 14, fontSize: '1rem' }}>Redes Sociais</h4>
              <div className="social-btns" style={{ display: 'flex', gap: 12 }}>
                <a
                  href="https://instagram.com/floripalanches"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: 'linear-gradient(135deg, #833AB4, #E1306C, #F77737)',
                    color: '#fff', padding: '10px 20px', borderRadius: 50,
                    fontSize: '0.9rem', fontWeight: 500, fontFamily: 'var(--font-heading)',
                    transition: 'all 0.2s',
                  }}
                >
                  <InstagramIcon /> @floripalanches
                </a>
                <a
                  href="https://www.facebook.com/floripalanches1/"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: '#1877F2',
                    color: '#fff', padding: '10px 20px', borderRadius: 50,
                    fontSize: '0.9rem', fontWeight: 500, fontFamily: 'var(--font-heading)',
                    transition: 'all 0.2s',
                  }}
                >
                  <FacebookIcon /> Facebook
                </a>
              </div>
            </div>

            {/* CTA */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="cta-whatsapp" style={{ justifyContent: 'center', marginTop: 8 }}>
              <Phone size={18} /> Falar conosco pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contato .contato-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 480px) {
          #contato .social-btns {
            flex-direction: column !important;
          }
          #contato .social-btns a {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
