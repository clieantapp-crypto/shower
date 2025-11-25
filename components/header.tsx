import { Menu, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border px-4 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
          <Menu className="h-6 w-6" />
        </Button>

        <div className="flex items-center gap-2">
          <div className="text-foreground text-2xl font-bold tracking-tight">
            <span className="text-primary">كير</span> رنتال
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
