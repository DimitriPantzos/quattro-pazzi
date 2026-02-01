import type { MenuSection as MenuSectionType } from "@/lib/menu-data"
import { MenuItem } from "./MenuItem"

type MenuSectionProps = {
  section: MenuSectionType
}

export function MenuSection({ section }: MenuSectionProps) {
  return (
    <div className="rounded-xl border border-border/50 bg-card p-6 sm:p-8">
      <h3 className="font-serif text-2xl text-foreground">{section.title}</h3>
      {section.description && (
        <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
      )}
      <div className="mt-4">
        {section.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}
