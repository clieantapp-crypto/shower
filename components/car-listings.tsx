import { CarCard } from "@/components/car-card"

const cars = [
  {
    id: 1,
    name: "تويوتا لاند كروزر VXR",
    year: "2024",
    image: "/white-toyota-land-cruiser-front-view.jpg",
    price: "950",
    features: ["أوتوماتيك", "8 مقاعد", "دفع رباعي", "فل كامل"],
    available: true,
  },
  {
    id: 2,
    name: "تويوتا لاند كروزر GXR",
    year: "2024",
    image: "/white-toyota-land-cruiser-side-view.jpg",
    price: "850",
    features: ["أوتوماتيك", "7 مقاعد", "دفع رباعي", "فل"],
    available: true,
  },
  {
    id: 3,
    name: "تويوتا برادو VXR",
    year: "2024",
    image: "/white-toyota-prado-front.jpg",
    price: "650",
    features: ["أوتوماتيك", "7 مقاعد", "دفع رباعي"],
    available: false,
  },
  {
    id: 4,
    name: "جي إم سي يوكن دينالي",
    year: "2024",
    image: "/black-gmc-yukon-denali.jpg",
    price: "1,200",
    features: ["أوتوماتيك", "8 مقاعد", "فل كامل", "بريميوم"],
    available: true,
  },
  {
    id: 5,
    name: "شيفروليه تاهو RST",
    year: "2023",
    image: "/black-chevrolet-tahoe.jpg",
    price: "750",
    features: ["أوتوماتيك", "7 مقاعد", "دفع رباعي"],
    available: true,
  },
  {
    id: 6,
    name: "فورد إكسبدشن",
    year: "2024",
    image: "/silver-ford-expedition.jpg",
    price: "800",
    features: ["أوتوماتيك", "8 مقاعد", "دفع رباعي", "فل"],
    available: true,
  },
]

export function CarListings() {
  return (
    <section className="px-4 pb-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">السيارات المتاحة</h2>
        <p className="text-base text-muted-foreground">اختر السيارة المناسبة لك</p>
      </div>

      <div className="space-y-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  )
}
