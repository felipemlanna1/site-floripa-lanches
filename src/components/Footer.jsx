import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Heart } from 'lucide-react'

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

export default function Footer({ whatsappLink }) {
  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border)',
      padding: '60px 0 0',
    }}>
      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 40, marginBottom: 40,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img
                src="/images/logo.jpg"
                alt="Floripa Lanches"
                style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--secondary)' }}
              />
              <span style={{
                fontFamily: 'var(--font-accent)', fontSize: '1.2rem',
                color: 'var(--secondary)',
              }}>Floripa Lanches</span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16 }}>
              O prazer de comer bem está aqui! Lanches artesanais com tempero marcante desde o Monte Verde, Florianópolis.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="https://instagram.com/floripalanches" target="_blank" rel="noopener noreferrer"
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#E1306C'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#E1306C' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/floripalanches1/" target="_blank" rel="noopener noreferrer"
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1877F2'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1877F2' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: 16, color: 'var(--text-primary)' }}>Links Rápidos</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Início', href: '/#inicio' },
                { label: 'Cardápio', href: '/#cardapio' },
                { label: 'Delivery', href: '/#delivery' },
                { label: 'Avaliações', href: '/#avaliacoes' },
                { label: 'Contato', href: '/#contato' },
                { label: 'Manual da Marca', href: '/manual-da-marca' },
              ].map(link => (
                link.href.startsWith('/manual') ? (
                  <Link key={link.label} to={link.href}
                    style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--secondary)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.label} href={link.href}
                    style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--secondary)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: 16, color: 'var(--text-primary)' }}>Informações</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  R. da Timbaúba, 253<br />Monte Verde, Florianópolis - SC<br />88032-310
                </span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>(48) 3364-9340</span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Clock size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Diário: 18h - 00:30</span>
              </div>
            </div>
          </div>

          {/* CTA Column */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: 16, color: 'var(--text-primary)' }}>Faça seu Pedido</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16 }}>
              Aceita a fome? Pede pelo WhatsApp que a gente entrega quentinho na sua casa!
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="cta-whatsapp" style={{ fontSize: '0.9rem', padding: '12px 24px' }}>
              <Phone size={16} /> Pedir Agora
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          padding: '20px 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            &copy; 2026 Floripa Lanches. Todos os direitos reservados. | CNPJ: 26.382.136/0001-63
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
            Feito com <Heart size={12} style={{ color: 'var(--primary)' }} /> em Florianópolis
          </p>
        </div>
      </div>
    </footer>
  )
}
