import { Star, TrendingUp } from "lucide-react"

export function StatsSection() {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <div className="relative mx-auto max-w-md">
        {/* Main stats card */}
        <div className="bg-gradient-to-br from-primary/20 via-card to-card rounded-2xl p-8 border border-primary/20 shadow-xl shadow-primary/5">
          {/* Center content */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Star className="h-10 w-10 fill-primary text-primary" />
              <span className="text-5xl font-bold bg-gradient-to-br from-primary to-chart-2 bg-clip-text text-transparent">
                4.9
              </span>
            </div>
            <p className="text-base text-foreground font-semibold">تقييم العملاء</p>
            <p className="text-sm text-muted-foreground mt-1">من 2,847 تقييم</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border">
              <div className="text-3xl font-bold text-primary mb-1">12K+</div>
              <div className="text-sm text-muted-foreground">سيارة متاحة</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border">
              <div className="text-3xl font-bold text-primary mb-1">850+</div>
              <div className="text-sm text-muted-foreground">عميل نشط</div>
            </div>
          </div>

          {/* Growth indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 text-primary">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">نمو 25% هذا الشهر</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3 text-balance">أفضل خدمة تأجير سيارات في المملكة</h2>
          <p className="text-base text-muted-foreground leading-relaxed text-pretty">
            نوفر لك أفضل السيارات الفاخرة بأسعار منافسة وخدمة عملاء متميزة على مدار الساعة
          </p>
        </div>
      </div>
    </section>
  )
}
