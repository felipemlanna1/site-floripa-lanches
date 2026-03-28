import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, MessageCircle } from 'lucide-react'

const reviews = [
  {
    name: 'Lucas M.',
    rating: 5,
    text: 'Excelente atendimento e qualidade! Comida quente e bebidas bem geladas. Recomendo demais!',
    source: 'Google',
    time: 'Há 2 semanas',
    highlight: 'qualidade',
  },
  {
    name: 'Fernanda S.',
    rating: 5,
    text: 'Lanches com sabor incrível e tempero diferenciado. A maionese verde é sensacional! Virei cliente fiel.',
    source: 'Google',
    time: 'Há 1 mês',
    highlight: 'tempero',
  },
  {
    name: 'Rafael P.',
    rating: 5,
    text: 'Favorito do bairro! Sabores ricos e seleção de molhos deliciosa. Melhor lanchonete do Monte Verde sem dúvida.',
    source: 'Google',
    time: 'Há 3 semanas',
    highlight: 'favorito',
  },
  {
    name: 'Amanda C.',
    rating: 5,
    text: 'Pedi pelo iFood e chegou super rápido e quentinho. O X-Tudo é gigante e muito saboroso. Nota 10!',
    source: 'iFood',
    time: 'Há 1 semana',
    highlight: 'rápido',
  },
  {
    name: 'Bruno L.',
    rating: 5,
    text: 'Batata com cheddar e bacon espetacular! E o milkshake de Ovomaltine é o melhor que já tomei. Sempre volto!',
    source: 'Google',
    time: 'Há 2 meses',
    highlight: 'espetacular',
  },
  {
    name: 'Juliana R.',
    rating: 4,
    text: 'Ótima opção para lanche à noite no bairro. Preço justo, atendimento rápido e sabor que não decepciona.',
    source: 'Google',
    time: 'Há 1 mês',
    highlight: 'preço justo',
  },
]

const avatarColors = [
  'linear-gradient(135deg, #D62828, #FF6B4A)',
  'linear-gradient(135deg, #F4A236, #FCBF49)',
  'linear-gradient(135deg, #7C3AED, #A855F7)',
  'linear-gradient(135deg, #059669, #34D399)',
  'linear-gradient(135deg, #EC4899, #F472B6)',
  'linear-gradient(135deg, #3B82F6, #60A5FA)',
]

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i} size={14}
          fill={i < rating ? '#FCBF49' : 'transparent'}
          color={i < rating ? '#FCBF49' : 'var(--text-muted)'}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review, index }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      position: 'relative',
      minWidth: 320,
      maxWidth: 380,
      flexShrink: 0,
      transition: 'border-color var(--transition-med)',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(244,162,54,0.15)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <Quote size={24} style={{
        position: 'absolute', top: 14, right: 14,
        color: 'var(--primary)', opacity: 0.1,
      }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: avatarColors[index % avatarColors.length],
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 700, fontSize: '1rem',
          fontFamily: 'var(--font-heading)', flexShrink: 0,
        }}>
          {review.name.charAt(0)}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{review.name}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <StarRating rating={review.rating} />
            <span style={{
              fontSize: '0.68rem', color: 'var(--text-muted)',
              background: 'rgba(255,255,255,0.04)',
              padding: '1px 6px', borderRadius: 4,
            }}>
              {review.source}
            </span>
          </div>
        </div>
      </div>
      <p style={{
        fontSize: '0.9rem', lineHeight: 1.65, fontStyle: 'italic',
        color: 'var(--text-secondary)',
      }}>
        &ldquo;{review.text}&rdquo;
      </p>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 10 }}>
        {review.time}
      </div>
    </div>
  )
}

export default function Avaliacoes({ whatsappLink }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const scrollRef = useRef(null)
  const [canScroll, setCanScroll] = useState({ left: false, right: true })

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScroll({
      left: scrollLeft > 5,
      right: scrollLeft < scrollWidth - clientWidth - 5,
    })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll)
      checkScroll()
      return () => el.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <section id="avaliacoes" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <span className="section-label">Avaliações</span>
          <h2 style={{ marginBottom: 10 }}>
            O que nossos{' '}
            <span style={{ color: 'var(--secondary)' }}>clientes dizem</span>
          </h2>
          <p style={{ maxWidth: 520, margin: '0 auto 24px' }}>
            Mais de 200 avaliações no Google e 695 no iFood. Quem prova, volta!
          </p>

          {/* Overall rating pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)', padding: '14px 28px',
          }}>
            <div style={{
              fontFamily: 'var(--font-accent)', fontSize: '2.2rem',
              color: 'var(--accent)', lineHeight: 1,
            }}>4.9</div>
            <div style={{ textAlign: 'left' }}>
              <StarRating rating={5} />
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>
                695 avaliações no iFood
              </div>
            </div>
          </div>
        </motion.div>

        {/* Horizontal scroll reviews */}
        <div style={{ position: 'relative' }}>
          {/* Gradient fades */}
          {canScroll.left && (
            <div style={{
              position: 'absolute', top: 0, bottom: 0, left: 0, width: 60,
              background: 'linear-gradient(90deg, var(--bg-dark), transparent)',
              zIndex: 2, pointerEvents: 'none',
            }} />
          )}
          {canScroll.right && (
            <div style={{
              position: 'absolute', top: 0, bottom: 0, right: 0, width: 60,
              background: 'linear-gradient(270deg, var(--bg-dark), transparent)',
              zIndex: 2, pointerEvents: 'none',
            }} />
          )}

          {/* Scroll arrows */}
          {canScroll.left && (
            <button onClick={() => scroll(-1)} style={{
              position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)',
              width: 40, height: 40, borderRadius: '50%',
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              color: 'var(--text-primary)', zIndex: 3,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem', transition: 'all var(--transition-fast)',
            }}>&#8249;</button>
          )}
          {canScroll.right && (
            <button onClick={() => scroll(1)} style={{
              position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
              width: 40, height: 40, borderRadius: '50%',
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              color: 'var(--text-primary)', zIndex: 3,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem', transition: 'all var(--transition-fast)',
            }}>&#8250;</button>
          )}

          {/* Scroll hint text */}
          <div style={{
            textAlign: 'center', marginBottom: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            <motion.span
              animate={{ x: [-3, 3, -3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}
            >
              &#8592; Arraste para ver mais avaliações &#8594;
            </motion.span>
          </div>

          <div
            ref={scrollRef}
            style={{
              display: 'flex', gap: 16,
              overflowX: 'auto', padding: '8px 4px 16px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            className="reviews-scroll"
          >
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <ReviewCard review={review} index={i} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA after reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: 36 }}
        >
          <p style={{ marginBottom: 14, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Quer ser o próximo a avaliar? Faça seu pedido agora!
          </p>
          <a href={whatsappLink || '#'} target="_blank" rel="noopener noreferrer" className="cta-whatsapp" style={{ padding: '12px 28px', fontSize: '0.9rem' }}>
            <MessageCircle size={16} /> Pedir pelo WhatsApp
          </a>
        </motion.div>
      </div>

      <style>{`
        .reviews-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 480px) {
          .reviews-scroll > div > div {
            min-width: 280px !important;
            max-width: 300px !important;
          }
        }
      `}</style>
    </section>
  )
}
