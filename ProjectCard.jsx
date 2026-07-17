// SkillBadge.jsx — pill-shaped tech tag
const SkillBadge = ({ label }) => (
  <span style={{
    display: 'inline-block',
    background: '#e2f3eb',
    color: '#2a913c',
    padding: '3px 12px',
    borderRadius: 9999,
    fontSize: '0.8rem',
    fontWeight: 600,
    marginRight: 6,
    marginBottom: 6,
  }}>{label}</span>
);

// ProjectCard.jsx — expandable project card
const ProjectCard = ({ title, subtitle, image, description, tags, link }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: hovered ? '0 10px 20px rgba(0,0,0,0.15)' : '0 4px 6px rgba(0,0,0,0.1)',
        padding: '20px 24px',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        overflow: 'hidden',
      }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: hovered ? 12 : 0 }}>
        {image && <img src={image} alt={title} style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 8, flexShrink: 0 }} />}
        <div>
          <h3 style={{ margin: '0 0 4px', fontSize: '1.05rem', fontWeight: 700, color: '#166534' }}>{title}</h3>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b7280' }}>{subtitle}</p>
        </div>
      </div>
      <div style={{
        maxHeight: hovered ? 400 : 0,
        opacity: hovered ? 1 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.5s ease, opacity 0.3s ease',
      }}>
        <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.6, marginBottom: 12 }}>{description}</p>
        <div style={{ marginBottom: 10 }}>{tags.map(t => <SkillBadge key={t} label={t} />)}</div>
        <a href={link || '#'} target="_blank" rel="noreferrer"
          style={{ color: '#2a913c', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
          View Project →
        </a>
      </div>
    </div>
  );
};

Object.assign(window, { SkillBadge, ProjectCard });
