import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Flame, Trophy, Sparkles, Zap } from 'lucide-react'

const categories = [
  { id: 'lanches', label: 'Lanches', emoji: '\u{1F354}' },
  { id: 'porções', label: 'Porções', emoji: '\u{1F35F}' },
  { id: 'bebidas', label: 'Bebidas', emoji: '\u{1F964}' },
  { id: 'combos', label: 'Combos', emoji: '\u{1F389}' },
]

const tagConfig = {
  'Mais Pedido': { icon: <Trophy size={11} />, bg: 'linear-gradient(135deg, #D62828, #FF6B4A)', color: '#fff' },
  'Favorito': { icon: <Flame size={11} />, bg: 'linear-gradient(135deg, #F4A236, #FCBF49)', color: '#1A1A1A' },
  'Novidade': { icon: <Sparkles size={11} />, bg: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: '#fff' },
  'Campeão de vendas': { icon: <Trophy size={11} />, bg: 'linear-gradient(135deg, #D62828, #FF6B4A)', color: '#fff' },
  'Imperdível': { icon: <Zap size={11} />, bg: 'linear-gradient(135deg, #059669, #34D399)', color: '#fff' },
  'Melhor custo': { icon: <Zap size={11} />, bg: 'linear-gradient(135deg, #F4A236, #FCBF49)', color: '#1A1A1A' },
  'Para 2': { icon: null, bg: 'linear-gradient(135deg, #EC4899, #F472B6)', color: '#fff' },
}

const menuItems = {
  lanches: [
    {
      name: 'X-Tudo Floripa',
      desc: 'O rei da casa! Hambúrguer artesanal suculento, bacon crocante, presunto, ovo na chapa, queijo derretido, alface, tomate fresco e a lendária maionese verde.',
      price: 'R$ 28,90',
      tag: 'Mais Pedido',
      gradient: 'linear-gradient(145deg, #FF4500 0%, #FF6B35 30%, #FF8C42 60%, #FFA726 100%)',
      iconEmoji: '\u{1F354}',
      emojiSize: '5rem',
    },
    {
      name: 'X-Bacon Especial',
      desc: 'Irresistível! Hambúrguer 180g na brasa, bacon crocante em dobro, cheddar derretendo e molho barbecue defumado da casa.',
      price: 'R$ 25,90',
      tag: 'Favorito',
      gradient: 'linear-gradient(145deg, #D84315 0%, #E65100 40%, #FF6D00 70%, #FF9100 100%)',
      iconEmoji: '\u{1F953}',
      emojiSize: '5rem',
    },
    {
      name: 'X-Búrguer Clássico',
      desc: 'Simples e perfeito. Hambúrguer artesanal grelhado, queijo prato derretido, alface crocante, tomate e maionese verde.',
      price: 'R$ 18,90',
      tag: null,
      gradient: 'linear-gradient(145deg, #E65100 0%, #F57C00 50%, #FFB74D 100%)',
      iconEmoji: '\u{1F9C0}',
      emojiSize: '4.5rem',
    },
    {
      name: 'X-Egg',
      desc: 'Com ovo na chapa escorrendo gema! Hambúrguer artesanal, queijo, alface, tomate e maionese especial cremosa.',
      price: 'R$ 20,90',
      tag: null,
      gradient: 'linear-gradient(145deg, #FF8F00 0%, #FFA000 50%, #FFD54F 100%)',
      iconEmoji: '\u{1F373}',
      emojiSize: '4.5rem',
    },
    {
      name: 'X-Frango Crocante',
      desc: 'Crocância irresistível! Filé de frango empanado dourado, queijo, alface, tomate e molho especial picante da casa.',
      price: 'R$ 22,90',
      tag: 'Novidade',
      gradient: 'linear-gradient(145deg, #EF6C00 0%, #FB8C00 50%, #FFB74D 100%)',
      iconEmoji: '\u{1F357}',
      emojiSize: '5rem',
    },
    {
      name: 'Dog Floripa',
      desc: 'O hot dog completo! Salsicha especial, purê cremoso, vinagrete, milho, ervilha, batata palha crocante e maionese verde.',
      price: 'R$ 16,90',
      tag: null,
      gradient: 'linear-gradient(145deg, #E65100 0%, #F4511E 50%, #FF8A65 100%)',
      iconEmoji: '\u{1F32D}',
      emojiSize: '4.5rem',
    },
  ],
  porções: [
    {
      name: 'Batata Cheddar & Bacon',
      desc: 'Montanha de batata crocante coberta com cheddar cremoso derretendo e bacon picado. Porção generosa que dá pra dividir!',
      price: 'R$ 32,90',
      tag: 'Campeão de vendas',
      gradient: 'linear-gradient(145deg, #FF8F00 0%, #FFA000 40%, #FFD54F 100%)',
      iconEmoji: '\u{1F9C0}',
      emojiSize: '5rem',
    },
    {
      name: 'Onion Rings',
      desc: 'Anéis de cebola empanados e fritos na hora, crocantes por fora e macios por dentro. Acompanha molho especial!',
      price: 'R$ 24,90',
      tag: null,
      gradient: 'linear-gradient(145deg, #E65100 0%, #EF6C00 50%, #FFB74D 100%)',
      iconEmoji: '\u{1F9C5}',
      emojiSize: '4.5rem',
    },
    {
      name: 'Nuggets Artesanais',
      desc: '12 unidades douradas feitas na casa com peito de frango temperado. Acompanha 2 molhos à sua escolha!',
      price: 'R$ 26,90',
      tag: null,
      gradient: 'linear-gradient(145deg, #EF6C00 0%, #FB8C00 50%, #FFCC80 100%)',
      iconEmoji: '\u{1F357}',
      emojiSize: '4.5rem',
    },
    {
      name: 'Batata Frita Tradicional',
      desc: 'Porção generosa de batata sequinha e crocante, temperada com sal e orégano. O acompanhamento perfeito!',
      price: 'R$ 18,90',
      tag: null,
      gradient: 'linear-gradient(145deg, #FF8F00 0%, #FFA726 50%, #FFE082 100%)',
      iconEmoji: '\u{1F35F}',
      emojiSize: '5rem',
    },
  ],
  bebidas: [
    {
      name: 'Milkshake Artesanal',
      desc: 'Cremoso e gelado! Chocolate, morango, baunilha ou Ovomaltine. Feito na hora com sorvete premium.',
      price: 'R$ 16,90',
      tag: 'Imperdível',
      gradient: 'linear-gradient(145deg, #7B1FA2 0%, #AB47BC 40%, #E1BEE7 100%)',
      iconEmoji: '\u{1F964}',
      emojiSize: '4.2rem',
    },
    {
      name: 'Refrigerante 600ml',
      desc: 'Bem geladinho! Coca-Cola, Guaraná, Fanta ou Sprite.',
      price: 'R$ 8,90',
      tag: null,
      gradient: 'linear-gradient(145deg, #C62828 0%, #E53935 50%, #EF5350 100%)',
      iconEmoji: '\u{1F96B}',
      emojiSize: '4rem',
    },
    {
      name: 'Suco Natural 500ml',
      desc: 'Direto da fruta! Laranja, maracujá, limão ou abacaxi. Feito na hora, sem conservantes.',
      price: 'R$ 12,90',
      tag: null,
      gradient: 'linear-gradient(145deg, #EF6C00 0%, #FF9800 50%, #FFB74D 100%)',
      iconEmoji: '\u{1F34A}',
      emojiSize: '4rem',
    },
    {
      name: 'Água Mineral 500ml',
      desc: 'Geladinha! Com ou sem gás.',
      price: 'R$ 4,90',
      tag: null,
      gradient: 'linear-gradient(145deg, #0277BD 0%, #039BE5 50%, #4FC3F7 100%)',
      iconEmoji: '\u{1F4A7}',
      emojiSize: '4.2rem',
    },
  ],
  combos: [
    {
      name: 'Combo Floripa',
      desc: 'O melhor custo-benefício! X-Tudo + Batata Cheddar & Bacon + Refrigerante 600ml. Completo e irresistível!',
      price: 'R$ 49,90',
      tag: 'Melhor custo',
      gradient: 'linear-gradient(145deg, #E65100 0%, #FF6D00 40%, #FFAB00 100%)',
      iconEmoji: '\u{2B50}',
      emojiSize: '5rem',
    },
    {
      name: 'Combo Casal',
      desc: 'Perfeito pra dois! 2 X-Bacon Especial + 1 Batata Cheddar & Bacon + 2 Refrigerantes 600ml.',
      price: 'R$ 79,90',
      tag: 'Para 2',
      gradient: 'linear-gradient(145deg, #C2185B 0%, #E91E63 50%, #F48FB1 100%)',
      iconEmoji: '\u{1F491}',
      emojiSize: '5rem',
    },
    {
      name: 'Combo Kids',
      desc: 'Para os pequenos! X-Búrguer + Nuggets (6un) + Suco Natural 300ml. Diversão garantida!',
      price: 'R$ 34,90',
      tag: null,
      gradient: 'linear-gradient(145deg, #FF8F00 0%, #FFC107 50%, #FFEE58 100%)',
      iconEmoji: '\u{1F467}',
      emojiSize: '4.5rem',
    },
  ],
}

function MenuItem({ item, index }) {
  const orderLink = `https://wa.me/554833649340?text=${encodeURIComponent(`Oi! Quero pedir: ${item.name} (${item.price})`)}`
  const tag = item.tag ? tagConfig[item.tag] : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      onClick={() => window.open(orderLink, '_blank')}
      className="menu-card"
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* Large visual food area with emoji */}
      <div style={{
        width: '100%', height: 180, flexShrink: 0,
        background: item.gradient,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', width: 200, height: 200, borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
          top: -60, right: -40,
        }} />
        <div style={{
          position: 'absolute', width: 120, height: 120, borderRadius: '50%',
          background: 'rgba(0,0,0,0.1)',
          bottom: -40, left: -20,
        }} />
        <span style={{
          fontSize: item.emojiSize || '4rem',
          filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
          zIndex: 1,
          transition: 'transform 0.3s ease',
        }} className="menu-emoji">
          {item.iconEmoji}
        </span>
        {/* Tag overlay */}
        {tag && (
          <span style={{
            position: 'absolute', top: 12, right: 12,
            display: 'inline-flex', alignItems: 'center', gap: 4,
            fontSize: '0.65rem', fontWeight: 700,
            background: tag.bg, color: tag.color,
            padding: '4px 10px', borderRadius: 20,
            fontFamily: 'var(--font-heading)', textTransform: 'uppercase',
            letterSpacing: 0.8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}>
            {tag.icon} {item.tag}
          </span>
        )}
      </div>

      {/* Info area */}
      <div style={{ padding: '16px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h4 style={{ fontSize: '1.05rem', margin: '0 0 6px', fontWeight: 700 }}>{item.name}</h4>
        <p style={{ fontSize: '0.82rem', lineHeight: 1.5, marginBottom: 14, color: 'var(--text-secondary)', flex: 1 }}>
          {item.desc}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <span style={{
            fontFamily: 'var(--font-accent)', fontSize: '1.35rem', color: 'var(--secondary)',
          }}>{item.price}</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'var(--whatsapp)', color: '#fff',
            fontSize: '0.75rem', fontWeight: 600,
            padding: '8px 16px', borderRadius: 24,
            fontFamily: 'var(--font-heading)',
            boxShadow: '0 2px 12px rgba(37,211,102,0.25)',
          }}>
            <MessageCircle size={13} /> Pedir
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Cardápio({ whatsappLink }) {
  const [activeCategory, setActiveCategory] = useState('lanches')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="cardapio" className="section-padding" style={{
      background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-dark) 100%)',
      position: 'relative',
    }}>
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '5%', right: '5%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(214,40,40,0.15), rgba(244,162,54,0.1), transparent)',
      }} />

      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '30%', right: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(214,40,40,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 44 }}
        >
          <span className="section-label">Nosso Cardápio</span>
          <h2 style={{ marginBottom: 12 }}>
            Deu água na boca?{' '}
            <span style={{ color: 'var(--primary)' }}>Espera só ver</span> &#128293;
          </h2>
          <p style={{ maxWidth: 520, margin: '0 auto' }}>
            Feito na hora, na sua frente, com ingredientes frescos. Toca no que te deu fome e pede direto pelo WhatsApp!
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 8,
          marginBottom: 40, flexWrap: 'wrap',
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: activeCategory === cat.id ? 700 : 500,
                fontSize: '0.9rem',
                padding: '12px 26px',
                borderRadius: 50,
                background: activeCategory === cat.id
                  ? 'linear-gradient(135deg, var(--primary), #E83535)'
                  : 'var(--bg-card)',
                color: activeCategory === cat.id ? '#fff' : 'var(--text-secondary)',
                border: activeCategory === cat.id ? '1px solid transparent' : '1px solid var(--border)',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                boxShadow: activeCategory === cat.id ? '0 4px 24px rgba(214,40,40,0.25)' : 'none',
              }}
            >
              <span style={{ marginRight: 8, fontSize: '1.1rem' }}>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 20,
            }}
            className="cardápio-grid"
          >
            {menuItems[activeCategory].map((item, i) => (
              <MenuItem key={item.name} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            textAlign: 'center', marginTop: 52,
            padding: '36px', borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, rgba(214,40,40,0.08), rgba(244,162,54,0.05))',
            border: '1px solid rgba(244,162,54,0.1)',
          }}
        >
          <p style={{ marginBottom: 18, fontSize: '1.08rem', color: 'var(--text-secondary)' }}>
            Não encontrou o que queria? <strong style={{ color: 'var(--text-primary)' }}>Temos mais opções!</strong>
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
            <MessageCircle size={18} /> Ver Cardápio Completo no WhatsApp
          </a>
        </motion.div>
      </div>

      <style>{`
        .menu-card:hover {
          border-color: rgba(255,152,0,0.3) !important;
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 48px rgba(255,69,0,0.15), 0 8px 24px rgba(0,0,0,0.3);
        }
        .menu-card:hover .menu-emoji {
          transform: scale(1.2) rotate(-8deg) !important;
          filter: drop-shadow(0 12px 24px rgba(255,69,0,0.3)) !important;
        }
        .menu-card { transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
        .menu-card:active { transform: translateY(-2px) scale(0.99); }
        @media (max-width: 600px) {
          .cardápio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
