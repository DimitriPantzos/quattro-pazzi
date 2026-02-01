import { LOCATION } from "@/lib/locations"

type GoogleMapProps = {
  height?: number
  title?: string
}

export function GoogleMap({ height = 350, title = "Quattro Pazzi map" }: GoogleMapProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <iframe
        src={LOCATION.mapEmbedUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  )
}
