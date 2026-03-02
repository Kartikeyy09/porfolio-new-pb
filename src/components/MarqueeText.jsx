export default function MarqueeText({ items, speed = 20 }) {
    const content = items.join(' • ') + ' • '

    return (
        <div className="overflow-hidden whitespace-nowrap py-4" aria-hidden="true">
            <div
                className="inline-block animate-marquee"
                style={{ animationDuration: `${speed}s` }}
            >
                <span className="text-6xl sm:text-8xl lg:text-9xl font-display font-bold text-white/[0.03] uppercase tracking-widest">
                    {content}
                </span>
                <span className="text-6xl sm:text-8xl lg:text-9xl font-display font-bold text-white/[0.03] uppercase tracking-widest">
                    {content}
                </span>
            </div>
        </div>
    )
}