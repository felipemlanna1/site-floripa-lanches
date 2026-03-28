import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const colors = [
  { name: 'Vermelho Floripa', hex: '#D62828', desc: 'Cor primaria - energia, paixao pela comida' },
  { name: 'Laranja Quente', hex: '#F4A236', desc: 'Cor secundaria - calor, acolhimento, apetite' },
  { name: 'Amarelo Mostarda', hex: '#FCBF49', desc: 'Cor de destaque - alegria, destaque em CTAs' },
  { name: 'Preto Noturno', hex: '#0D0D0D', desc: 'Background principal - sofisticacao, foco na comida' },
  { name: 'Cinza Escuro', hex: '#1A1A1A', desc: 'Background secundario - cards e superficies' },
  { name: 'Verde WhatsApp', hex: '#25D366', desc: 'CTA de conversao - pedidos e contato direto' },
]

const fonts = [
  { name: 'Poppins', use: 'Titulos e navegacao', sample: 'Floripa Lanches', weight: '700' },
  { name: 'Fredoka One', use: 'Logo, precos e destaques', sample: 'R$ 28,90', weight: '400' },
  { name: 'Roboto', use: 'Textos corridos e descricoes', sample: 'Lanches artesanais com tempero marcante', weight: '400' },
]

export default function ManualDaMarca() {
  return (
    <>
      <Helmet>
        <title>Manual da Marca | Floripa Lanches</title>
      </Helmet>

      <div style={{ paddingTop: 100 }} className="section-padding">
        <div className="section-container">
          {/* Back link */}
          <Link to="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: 'var(--secondary)', fontSize: '0.9rem',
            fontFamily: 'var(--font-heading)', fontWeight: 500,
            marginBottom: 40,
          }}>
            <ArrowLeft size={18} /> Voltar ao site
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Identidade Visual</span>
            <h1 style={{ marginBottom: 16 }}>
              Manual da{' '}
              <span style={{ color: 'var(--secondary)' }}>Marca</span>
            </h1>
            <p style={{ maxWidth: 650, fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 56 }}>
              Guia de identidade visual do Floripa Lanches. Cores, tipografia, tom de voz e
              diretrizes para manter a consistência da marca em todos os canais.
            </p>
          </motion.div>

          {/* Logo */}
          <section style={{ marginBottom: 64 }}>
            <h2 style={{ marginBottom: 24, fontSize: '1.5rem' }}>Logo</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}>
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: 40,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src="./images/logo.jpg" alt="Logo Floripa Lanches"
                  style={{ maxWidth: 200, borderRadius: 16 }} />
              </div>
              <div style={{
                background: '#F4A236', borderRadius: 'var(--radius-lg)', padding: 40,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src="./images/logo.jpg" alt="Logo sobre fundo amarelo"
                  style={{ maxWidth: 200, borderRadius: 16 }} />
              </div>
            </div>
            <p style={{ marginTop: 16, fontSize: '0.9rem' }}>
              O logo apresenta a Ponte Hercilio Luz, simbolo de Florianópolis, sobre fundo amarelo
              com o nome da marca em faixa preta. O slogan "O prazer de comer bem esta aqui!"
              complementa a identidade.
            </p>
          </section>

          {/* Colors */}
          <section style={{ marginBottom: 64 }}>
            <h2 style={{ marginBottom: 24, fontSize: '1.5rem' }}>Paleta de Cores</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: 16,
            }}>
              {colors.map(color => (
                <div key={color.hex} style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)', overflow: 'hidden',
                }}>
                  <div style={{ height: 80, background: color.hex }} />
                  <div style={{ padding: 16 }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: 4 }}>{color.name}</h4>
                    <code style={{
                      fontSize: '0.8rem', color: 'var(--secondary)',
                      fontFamily: 'monospace',
                    }}>{color.hex}</code>
                    <p style={{ fontSize: '0.78rem', marginTop: 6, lineHeight: 1.5 }}>
                      {color.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section style={{ marginBottom: 64 }}>
            <h2 style={{ marginBottom: 24, fontSize: '1.5rem' }}>Tipografia</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {fonts.map(font => (
                <div key={font.name} style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)', padding: 28,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  flexWrap: 'wrap', gap: 16,
                }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: 4 }}>{font.name}</h4>
                    <p style={{ fontSize: '0.85rem' }}>{font.use}</p>
                  </div>
                  <span style={{
                    fontFamily: font.name, fontWeight: font.weight,
                    fontSize: '1.5rem', color: 'var(--secondary)',
                  }}>
                    {font.sample}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Tone of Voice */}
          <section style={{ marginBottom: 64 }}>
            <h2 style={{ marginBottom: 24, fontSize: '1.5rem' }}>Tom de Voz</h2>
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: 32,
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 24,
              }}>
                <div>
                  <h4 style={{ color: 'var(--whatsapp)', marginBottom: 10 }}>Somos</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {['Informais e acolhedores', 'Divertidos sem ser infantis', 'Diretos e objetivos', 'Apetitosos na linguagem'].map(item => (
                      <li key={item} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: 10 }}>Nao somos</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {['Formais ou corporativos', 'Rebuscados demais', 'Distantes do cliente', 'Gourmet ou elitistas'].map(item => (
                      <li key={item} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{
                marginTop: 24, padding: 20,
                background: 'rgba(244,162,54,0.08)', borderRadius: 'var(--radius-sm)',
                borderLeft: '3px solid var(--secondary)',
              }}>
                <p style={{ fontSize: '0.95rem', fontStyle: 'italic', lineHeight: 1.7 }}>
                  "Falamos como um amigo que entende de lanche e quer te ajudar a escolher
                  o melhor. Sem frescura, com muito sabor."
                </p>
              </div>
            </div>
          </section>

          {/* Usage Guidelines */}
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 24, fontSize: '1.5rem' }}>Diretrizes de Uso</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
            }}>
              {[
                { title: 'Redes Sociais', items: ['Usar sempre as cores da paleta', 'Fotos com iluminacao quente', 'Close-ups de comida com foco no queijo derretido/molhos', 'Hashtags: #FloripaLanches #MonteVerde'] },
                { title: 'Materiais Impressos', items: ['Logo com area de respiro mínima de 20px', 'Fundo escuro preferêncial', 'Nunca distorcer o logo', 'Manter hierarquia tipográfica'] },
                { title: 'Digital / Website', items: ['Dark mode como padrao', 'CTAs sempre em verde WhatsApp', 'Animacoes sutis no scroll', 'Mobile-first em tudo'] },
              ].map(guide => (
                <div key={guide.title} style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)', padding: 24,
                }}>
                  <h4 style={{ marginBottom: 12, color: 'var(--secondary)' }}>{guide.title}</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {guide.items.map(item => (
                      <li key={item} style={{
                        fontSize: '0.9rem', color: 'var(--text-secondary)',
                        paddingLeft: 16, position: 'relative', lineHeight: 1.5,
                      }}>
                        <span style={{
                          position: 'absolute', left: 0, top: 8,
                          width: 6, height: 6, borderRadius: '50%',
                          background: 'var(--secondary)',
                        }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
