import { Star } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";

interface Testimonial {
  author: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    author: "Martin Bailey",
    role: "SUPERVISOR",
    content:
      "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    rating: 4,
    image: "/public/img/img10.png",
  },
  {
    author: "Emma Greed",
    role: "CUSTOMER",
    content:
      "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    rating: 4,
    image: "/public/img/img11.png",
  },
  {
    author: "Daniel Craig",
    role: "CO FOUNDER",
    content:
      "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    rating: 4,
    image: "/public/img/img12.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-6 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 ">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            Testimonial
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#004D40]">
            What our customers say
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none  shadow-none ">
              <CardContent className="p-6 shadow-none border-none">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mb-6 text-[#666666]">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.author}'s avatar`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-[#999999]">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
          <hr className="mt-28" />
      </div>
    </section>
  );
}
