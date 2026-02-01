type HeroSectionProps = {
  eyebrow?: string
  title: string
  description: string
}

export function HeroSection({ eyebrow, title, description }: HeroSectionProps) {
  return (
    <section className="bg-rosso-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-oro-400">
              {eyebrow}
            </p>
          )}
          <h1 className={`${eyebrow ? "mt-3" : ""} text-4xl text-white sm:text-5xl`}>
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
