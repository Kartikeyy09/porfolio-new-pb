const COLORS = {
    coral: '#ff6b6b',
    sky: '#4d96ff',
    mint: '#6bcb77',
    lavender: '#a66cff',
    sunny: '#ffd93d',
    peach: '#ffb085',
    rose: '#f472b6',
    teal: '#2dd4bf',
}

export default function ColorBlob({
    color = 'coral',
    size = 400,
    top,
    left,
    right,
    bottom,
    opacity = 0.15,
    className = '',
}) {
    const colorValue = COLORS[color] || COLORS.coral

    return (
        <div
            className={className}
            aria-hidden="true"
            style={{
                position: 'absolute',
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${colorValue} 0%, transparent 70%)`,
                opacity,
                top: top || undefined,
                left: left || undefined,
                right: right || undefined,
                bottom: bottom || undefined,
                pointerEvents: 'none',
                filter: 'blur(40px)',
                willChange: 'transform',
            }}
        />
    )
}