export default function ColorBlob({ color = 'coral', size = 400, top, left, right, bottom, opacity = 0.15, className = '' }) {
  const colors = {
    coral: '#ff6b6b',
    sky: '#4d96ff',
    mint: '#6bcb77',
    lavender: '#a66cff',
    sunny: '#ffd93d',
    peach: '#ffb085',
    rose: '#f472b6',
    teal: '#2dd4bf',
  }

  const style = {
    width: size,
    height: size,
    background: `radial-gradient(circle, ${colors[color] || colors.coral} 0%, transparent 70%)`,
    opacity,
    top,
    left,
    right,
    bottom,
  }

  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}