// ContactSection.jsx — contact info + form
const ContactSection = () => {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contact" style={{ maxWidth: 1152, margin: '0 auto', padding: '24px 24px' }}>
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: 32 }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.875rem', fontWeight: 700, marginBottom: 32, color: '#1f2937' }}>Get In Touch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 16, color: '#1f2937' }}>Contact Information</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[['fas fa-envelope','workpmcg@gmail.com','mailto:workpmcg@gmail.com'],
                ['fab fa-github','github.com/Pemoginns','https://github.com/Pemoginns'],
                ['fab fa-linkedin','linkedin.com/in/pmmg','https://www.linkedin.com/in/pmmg/'],
              ].map(([cls, label, href]) => (
                <li key={cls} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <i className={cls} style={{ color: '#166534', fontSize: '1rem', width: 20, textAlign: 'center' }}></i>
                  <a href={href} target="_blank" rel="noreferrer" style={{ color: '#166534', fontSize: '0.9rem', textDecoration: 'none' }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {sent ? (
              <div style={{ padding: 24, textAlign: 'center', color: '#166534', fontWeight: 600 }}>
                <i className="fas fa-check-circle" style={{ fontSize: '2rem', marginBottom: 8, display: 'block' }}></i>
                Message sent!
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                {[['Name','text','Your name'],['Email','email','you@email.com']].map(([label,type,ph]) => (
                  <div key={label} style={{ marginBottom: 12 }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: 4, color: '#374151' }}>{label}*</label>
                    <input type={type} placeholder={ph} required style={{ width: '100%', padding: '8px 10px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: '0.875rem', boxSizing: 'border-box', fontFamily: 'inherit' }} />
                  </div>
                ))}
                <div style={{ marginBottom: 12 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: 4, color: '#374151' }}>Message*</label>
                  <textarea required placeholder="Your message…" style={{ width: '100%', padding: '8px 10px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: '0.875rem', boxSizing: 'border-box', fontFamily: 'inherit', height: 80, resize: 'none' }} />
                </div>
                <button type="submit" style={{ background: '#2a913c', color: '#fff', border: 'none', padding: '8px 24px', borderRadius: 9999, fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>Send</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ContactSection });
