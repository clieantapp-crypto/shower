import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Sparkles } from "lucide-react"

interface Car {
  id: number
  name: string
  year: string
  image: string
  price: string
  features: string[]
  available: boolean
}

export function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
      {/* Car Image */}
      <div className="relative aspect-[2/1] bg-muted overflow-hidden">
        <Image
          src={car.image || "/placeholder.svg"}
          alt={car.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

        {!car.available && (
          <div className="absolute top-4 right-4">
            <Badge variant="destructive" className="text-xs font-semibold backdrop-blur-sm bg-destructive/90">
              غير متاح
            </Badge>
          </div>
        )}
        {car.available && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold border-0 shadow-lg shadow-primary/20">
              <Sparkles className="h-3 w-3 ml-1" />
              متاح الآن
            </Badge>
          </div>
        )}
      </div>

      {/* Car Details */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1 text-balance">{car.name}</h3>
          <p className="text-sm text-muted-foreground">موديل {car.year}</p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {car.features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-medium bg-secondary/50 hover:bg-secondary">
              {feature}
            </Badge>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-br from-primary to-chart-2 bg-clip-text text-transparent">
              {car.price}
            </div>
            <div className="text-xs text-muted-foreground mt-1">ريال / اليوم</div>
          </div>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            disabled={!car.available}
            size="lg"
          >
            <Calendar className="h-4 w-4" />
            احجز الآن
          </Button>
        </div>
      </div>
    </div>
  )
}
