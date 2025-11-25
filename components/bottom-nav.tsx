import { Home, Search, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-xl border-t border-border px-4 py-3 shadow-2xl">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <Button variant="ghost" size="icon" className="flex-col h-auto py-2 text-primary hover:bg-primary/10">
          <Home className="h-6 w-6 mb-1" />
          <span className="text-xs font-medium">الرئيسية</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex-col h-auto py-2 hover:bg-primary/10 hover:text-primary">
          <Search className="h-6 w-6 mb-1" />
          <span className="text-xs text-muted-foreground font-medium">بحث</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex-col h-auto py-2 hover:bg-primary/10 hover:text-primary">
          <Calendar className="h-6 w-6 mb-1" />
          <span className="text-xs text-muted-foreground font-medium">حجوزاتي</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex-col h-auto py-2 hover:bg-primary/10 hover:text-primary">
          <User className="h-6 w-6 mb-1" />
          <span className="text-xs text-muted-foreground font-medium">الحساب</span>
        </Button>
      </div>
    </nav>
  )
}
