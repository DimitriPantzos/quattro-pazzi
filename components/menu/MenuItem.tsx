import type { MenuItem as MenuItemType } from "@/lib/menu-data"
import { Badge } from "@/components/ui/badge"

type MenuItemProps = {
  item: MenuItemType
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border/50 py-4 last:border-0">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-sans text-base font-semibold text-foreground">
            {item.name}
          </h4>
          {item.tags?.map((tag) => (
            <Badge key={tag} variant="oliva" className="text-[10px]">
              {tag}
            </Badge>
          ))}
        </div>
        {item.description && (
          <p className="mt-1 text-sm text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </div>
  )
}
