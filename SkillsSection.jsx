// SkillsSection.jsx — 3-column tech skills grid
const SkillsSection = () => {
  const cols = [
    { icon: 'fas fa-code', title: 'Languages', items: ['Python','JavaScript','Java','HTML/CSS'] },
    { icon: 'fas fa-cogs', title: 'Frameworks', items: ['Flask','JQuery','Tailwind CSS','Bootstrap'] },
    { icon: 'fas fa-tools', title: 'Tools & More', items: ['Git & GitHub','MySQL/SQLite','REST APIs','Web Scraping'] },
  ];
  return (
    <section id="skills" style={{ maxWidth: 1152, margin: '0 auto', padding: '24px 24px' }}>
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '32px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.875rem', fontWeight: 700, marginBottom: 32, color: '#1f2937' }}>Skills & Technologies</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {cols.map(col => (
            <div key={col.title}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#166534', marginBottom: 16 }}>
                <i className={col.icon} style={{ marginRight: 8 }}></i>{col.title}
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: '#374151' }}>
                    <i className="fas fa-check-circle" style={{ color: '#16a34a', fontSize: '0.85rem' }}></i>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { SkillsSection });
