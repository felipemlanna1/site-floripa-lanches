import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Bike, Clock, CreditCard, MapPin, Smartphone } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: <Smartphone size={26} />,
    title: 'Faça seu pedido',
    desc: 'Pelo WhatsApp ou iFood. Rápido e sem complicação.',
    color: 'var(--whatsapp)',
    glow: 'rgba(37,211,102,0.15)',
  },
  {
    num: '02',
    icon: <Clock size={26} />,
    title: 'Preparamos na hora',
    desc: 'Tudo fresquinho, feito com carinho e tempero de verdade.',
    color: 'var(--secondary)',
    glow: 'rgba(244,162,54,0.15)',
  },
  {
    num: '03',
    icon: <Bike size={26} />,
    title: 'Entrega rápida',
    desc: 'Nosso motoboy leva até você quentinho e no capricho.',
    color: 'var(--primary)',
    glow: 'rgba(214,40,40,0.15)',
  },
]

export default function Delivery({ whatsappLink }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="delivery" className="section-padding" style={{
      background: 'var(--bg-surface)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(214,40,40,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <span className="section-label">Delivery</span>
          <h2 style={{ marginBottom: 10 }}>
            Receba em casa{' '}
            <span style={{ color: 'var(--primary)' }}>quentinho</span>
          </h2>
          <p style={{ maxWidth: 520, margin: '0 auto' }}>
            Pediu, chegou! Entregamos em toda região do Monte Verde e bairros próximos.
            Comida quente e bebida gelada, do jeito que você gosta.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24, marginBottom: 48,
          position: 'relative',
        }} className="delivery-steps">
          {/* Connecting line */}
          <div style={{
            position: 'absolute', top: 44, left: '20%', right: '20%',
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(244,162,54,0.15), rgba(214,40,40,0.15), transparent)',
          }} className="delivery-line" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ textAlign: 'center', position: 'relative' }}
            >
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: `radial-gradient(circle, ${step.glow}, transparent)`,
                border: `2px solid ${step.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 18px', color: step.color,
                position: 'relative',
              }}>
                {step.icon}
                <span style={{
                  position: 'absolute', top: -6, right: -6,
                  background: 'var(--bg-dark)',
                  border: `2px solid ${step.color}`,
                  borderRadius: 50, padding: '2px 8px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.65rem', fontWeight: 700,
                  color: step.color,
                }}>{step.num}</span>
              </div>
              <h3 style={{ marginBottom: 6, fontSize: '1.05rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.9rem', maxWidth: 240, margin: '0 auto' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Info cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 14, marginBottom: 40,
        }} className="delivery-info-grid">
          {[
            { icon: <Clock size={18} />, label: 'Horário', value: '18h - 00:30', color: 'var(--secondary)' },
            { icon: <MapPin size={18} />, label: 'Área', value: 'Monte Verde e região', color: 'var(--primary)' },
            { icon: <CreditCard size={18} />, label: 'Pagamento', value: 'Pix, cartão, dinheiro', color: 'var(--accent)' },
            { icon: <Bike size={18} />, label: 'Pedido mínimo', value: 'R$ 13,00', color: 'var(--whatsapp)' },
          ].map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              className="tilt-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '18px 16px',
                display: 'flex', alignItems: 'center', gap: 12,
              }}
            >
              <div style={{ color: info.color, flexShrink: 0 }}>{info.icon}</div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 1, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 500 }}>{info.label}</div>
                <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{info.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ textAlign: 'center', display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
            <MessageCircle size={18} /> Pedir pelo WhatsApp
          </a>
          <a href="https://www.ifood.com.br/delivery/florianopolis-sc/floripa-lanches-monte-verde/b4156c9d-90b4-4741-ac36-84a3e4fc1f31"
            target="_blank" rel="noopener noreferrer" className="cta-primary">
            Pedir pelo iFood
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .delivery-steps { grid-template-columns: 1fr !important; }
          .delivery-line { display: none; }
          .delivery-info-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .delivery-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
