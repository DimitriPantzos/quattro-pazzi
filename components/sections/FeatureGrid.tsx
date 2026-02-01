import type { LucideIcon } from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

type FeatureGridProps = {
  features: Feature[]
  columns?: 2 | 3 | 4
}

export function FeatureGrid({ features, columns = 4 }: FeatureGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid gap-8 ${gridCols[columns]}`}>
      {features.map((item) => (
        <div key={item.title} className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rosso-50">
            <item.icon className="h-7 w-7 text-rosso-500" />
          </div>
          <h3 className="mt-4 font-sans text-lg font-semibold text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}
