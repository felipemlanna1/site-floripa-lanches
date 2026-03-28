import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppFloat({ whatsappLink }) {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500)
    const tooltipTimer = setTimeout(() => setTooltip(false), 10000)
    return () => { clearTimeout(timer); clearTimeout(tooltipTimer) }
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 998,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8,
    }}>
      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            style={{
              background: '#fff', color: '#1a1a1a',
              padding: '10px 16px', borderRadius: 12,
              fontSize: '0.83rem', fontWeight: 500,
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              position: 'relative', maxWidth: 200,
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.4,
            }}
          >
            <button
              onClick={() => setTooltip(false)}
              style={{
                position: 'absolute', top: -6, right: -6,
                width: 18, height: 18, borderRadius: '50%',
                background: '#333', color: '#fff', fontSize: '0.55rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <X size={10} />
            </button>
            Fome? Peça agora pelo WhatsApp! &#127828;
            <div style={{
              position: 'absolute', bottom: -5, right: 22,
              width: 10, height: 10, background: '#fff',
              transform: 'rotate(45deg)',
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: 58, height: 58, borderRadius: '50%',
          background: 'var(--whatsapp)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 6px 28px rgba(37,211,102,0.35)',
          position: 'relative',
        }}
      >
        <MessageCircle size={26} />
        <div style={{
          position: 'absolute', inset: -4,
          borderRadius: '50%',
          border: '2px solid var(--whatsapp)',
          animation: 'wa-pulse 2s ease-in-out infinite',
        }} />
      </motion.a>

      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
