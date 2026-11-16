import { useState } from 'react'
export default function Shot({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-accent/30 via-panel to-ink p-6 text-center font-display text-2xl font-bold ${className}`} role="img" aria-label={alt}>
        {alt}
      </div>
    )
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover object-top ${className}`} />
}
