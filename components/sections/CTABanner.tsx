import Link from "next/link"
import { Button } from "@/components/ui/button"

type CTABannerProps = {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  variant?: "rosso" | "oro" | "espresso"
}

export function CTABanner({
  title,
  description,
  buttonText,
  buttonHref,
  variant = "rosso",
}: CTABannerProps) {
  const styles = {
    rosso: {
      bg: "bg-rosso-900 text-white",
      text: "text-white/70",
      btn: "bg-white text-rosso-900 hover:bg-white/90",
    },
    oro: {
      bg: "bg-oro-50 text-foreground",
      text: "text-muted-foreground",
      btn: "bg-oro-600 text-white hover:bg-oro-700",
    },
    espresso: {
      bg: "bg-espresso-600 text-white",
      text: "text-white/70",
      btn: "bg-oro-500 text-espresso-900 hover:bg-oro-400",
    },
  }

  const s = styles[variant]

  return (
    <section className={`${s.bg} section-padding`}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        <p className={`mx-auto mt-4 max-w-xl text-lg ${s.text}`}>
          {description}
        </p>
        <Button asChild size="lg" className={`mt-8 text-lg ${s.btn}`}>
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  )
}
