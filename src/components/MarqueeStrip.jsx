export default function MarqueeStrip() {
  const items = [
    '\u{1F354} X-Tudo Floripa',
    '\u{1F953} Bacon em Dobro',
    '\u{1F35F} Batata Cheddar',
    '\u{1F32D} Dog Floripa',
    '\u{1F964} Milkshake Premium',
    '\u{1F9C0} Cheddar Cremoso',
    '\u{2B50} 4.9 no iFood',
    '\u{1F525} Maionese Verde',
    '\u{1F6F5} Delivery Rápido',
    '\u{1F354} X-Bacon Especial',
  ]

  const repeatedItems = [...items, ...items]

  return (
    <div style={{
      overflow: 'hidden',
      background: 'linear-gradient(90deg, var(--primary), #E83535, var(--secondary))',
      padding: '14px 0',
      position: 'relative',
      zIndex: 5,
    }}>
      <div className="marquee-track" style={{
        display: 'flex',
        gap: 48,
        whiteSpace: 'nowrap',
        animation: 'marquee-scroll 25s linear infinite',
        width: 'max-content',
      }}>
        {repeatedItems.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '0.85rem',
            color: '#fff',
            letterSpacing: 1,
            textTransform: 'uppercase',
            opacity: 0.95,
          }}>
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
