import { Shield, Clock, Headphones, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "تأمين شامل",
    description: "جميع سياراتنا مؤمنة بالكامل لراحتك وأمانك",
  },
  {
    icon: Clock,
    title: "خدمة 24/7",
    description: "دعم فني ومساعدة على الطريق على مدار الساعة",
  },
  {
    icon: Headphones,
    title: "دعم العملاء",
    description: "فريق خدمة عملاء محترف جاهز لمساعدتك",
  },
  {
    icon: Award,
    title: "جودة مضمونة",
    description: "سيارات حديثة وصيانة دورية منتظمة",
  },
]

export function InfoSection() {
  return (
    <section className="px-4 pb-24 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">لماذا تختارنا؟</h2>
        <p className="text-base text-muted-foreground">نقدم أفضل خدمة تأجير في المملكة</p>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
          >
            <div className="flex items-start gap-5">
              <div className="shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-bold text-foreground text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Terms Section */}
      <div className="bg-gradient-to-br from-card to-muted/30 rounded-2xl p-6 border border-border shadow-lg">
        <h3 className="font-bold text-foreground text-xl mb-4">الشروط والأحكام</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1 text-lg">•</span>
            <span className="leading-relaxed">رخصة قيادة سارية المفعول لمدة سنة على الأقل</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1 text-lg">•</span>
            <span className="leading-relaxed">بطاقة هوية وطنية أو جواز سفر ساري</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1 text-lg">•</span>
            <span className="leading-relaxed">تأمين إضافي متاح عند الطلب</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1 text-lg">•</span>
            <span className="leading-relaxed">إمكانية التوصيل والاستلام من أي مكان</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
