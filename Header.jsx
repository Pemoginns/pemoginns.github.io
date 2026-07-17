// Header.jsx — Sticky navigation header
const Header = ({ active, onNav }) => {
  const links = ['About', 'Projects', 'Skills', 'Contact'];
  return (
    <header style={{
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '0 24px',
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937' }}>Peter McGuinness</span>
      <nav style={{ display: 'flex', gap: 28 }}>
        {links.map(l => (
          <a key={l} href="#" onClick={e => { e.preventDefault(); onNav && onNav(l.toLowerCase()); }}
            style={{
              color: active === l.toLowerCase() ? '#15803d' : '#166534',
              fontSize: '0.9rem',
              textDecoration: 'none',
              fontWeight: active === l.toLowerCase() ? 600 : 400,
              borderBottom: active === l.toLowerCase() ? '2px solid #2a913c' : 'none',
              paddingBottom: 2,
              transition: 'all 0.2s',
            }}>{l}</a>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: 16 }}>
        {[['fab fa-github','https://github.com/Pemoginns'],['fab fa-linkedin','https://www.linkedin.com/in/pmmg/'],['fas fa-envelope','mailto:workpmcg@gmail.com']].map(([cls,href]) => (
          <a key={cls} href={href} target="_blank" rel="noreferrer"
            style={{ color: '#166534', fontSize: '1.1rem' }}>
            <i className={cls}></i>
          </a>
        ))}
      </div>
    </header>
  );
};

Object.assign(window, { Header });
