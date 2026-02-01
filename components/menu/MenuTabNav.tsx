"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { MenuSection } from "./MenuSection"
import { MENU_CATEGORIES } from "@/lib/menu-data"

export function MenuTabNav() {
  return (
    <Tabs defaultValue="dinner" className="w-full">
      <div className="flex justify-center">
        <TabsList className="flex-wrap">
          {MENU_CATEGORIES.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.id}>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {MENU_CATEGORIES.map((cat) => (
        <TabsContent key={cat.id} value={cat.id}>
          <div className="mt-6 space-y-8">
            {cat.sections.map((section) => (
              <MenuSection key={section.title} section={section} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
