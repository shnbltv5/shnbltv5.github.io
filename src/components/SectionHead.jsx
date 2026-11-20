export default function SectionHead({ index, label, title, children }) {
  return (
    <div className="shead">
      <p className="shead__label mono" data-reveal>
        <span className="accent">{String(index).padStart(2, '0')}</span> — {label}
      </p>
      <h2 className="shead__title serif" data-reveal style={{ '--d': '80ms' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}
