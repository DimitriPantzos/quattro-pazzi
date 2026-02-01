import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div className="mx-auto max-w-md px-4 text-center">
        <h1 className="text-6xl font-bold text-rosso-500">404</h1>
        <h2 className="mt-4 text-2xl sm:text-3xl">Page Not Found</h2>
        <p className="mt-3 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-rosso-500 hover:bg-rosso-600">
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/menu">View Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
