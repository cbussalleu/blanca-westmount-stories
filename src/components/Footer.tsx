import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--rule)',
      paddingBlock: 'var(--s-8) var(--s-7)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1120px',
        marginInline: 'auto',
        paddingInline: 'clamp(20px, 4vw, 48px)',
      }}>

        {/* Top row — name + nav */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 'var(--s-6)',
          alignItems: 'end',
          paddingBottom: 'var(--s-7)',
          borderBottom: '1px solid var(--rule)',
          marginBottom: 'var(--s-6)',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--ff-display)',
              fontWeight: 200,
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              marginBottom: 'var(--s-3)',
            }}>
              Christian Bussalleu
            </div>
            <div style={{
              fontFamily: 'var(--ff-display)',
              fontWeight: 300,
              fontSize: 11,
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
            }}>
              Service Designer · Barcelona
            </div>
          </div>

          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 'var(--s-3)',
          }}>
            {[
              { to: '/portfolio', label: 'Work' },
              { to: '/bimbo-relationship', label: 'Grupo Bimbo' },
              { to: '/methodology', label: 'Methodology' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: 'var(--ff-display)',
                  fontWeight: 300,
                  fontSize: 11,
                  letterSpacing: '0.20em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)',
                  transition: 'color 200ms',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-3)'}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom row — email + CV + copyright */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 'var(--s-4)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-5)' }}>
            <a
              href="mailto:christian.bussalleu@gmail.com"
              style={{
                fontFamily: 'var(--ff-editorial)',
                fontSize: 13,
                color: 'var(--ink)',
                borderBottom: '1px solid var(--rule)',
                paddingBottom: 2,
                transition: 'opacity 200ms',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              christian.bussalleu@gmail.com
            </a>
            <a
              href="/CV_SD_Christian_Bussalleu_2024_ENG.pdf"
              download
              style={{
                fontFamily: 'var(--ff-display)',
                fontWeight: 300,
                fontSize: 10,
                letterSpacing: '0.20em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                border: '1px solid var(--rule)',
                padding: '5px 12px',
                transition: 'background 200ms, color 200ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'hsl(var(--pastel-yellow))'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}
            >
              Download CV
            </a>
          </div>

          <div style={{
            fontFamily: 'var(--ff-display)',
            fontWeight: 300,
            fontSize: 10,
            letterSpacing: '0.20em',
            textTransform: 'uppercase',
            color: 'var(--ink-4)',
          }}>
            © {new Date().getFullYear()} · nosilverdullets.eu
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
