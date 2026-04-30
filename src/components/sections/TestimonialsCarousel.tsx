"use client";

import React, { useCallback, useEffect, useState } from "react"
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

type PropType = {
  options?: EmblaOptionsType
}

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CMO at TechFlow",
    text: "ClickLab didn't just redesign our strategy; they fundamentally changed our revenue trajectory. Our cost-per-acquisition dropped by 45% in the first quarter.",
    rating: 5,
    initials: "SJ",
    color: "bg-blue-600",
  },
  {
    name: "Marcus Aurelius",
    role: "Founder of ScaleUp",
    text: "The web design team is world-class. They built an experience that felt premium, loaded in under a second, and doubled our conversion rate overnight.",
    rating: 5,
    initials: "MA",
    color: "bg-cyan-600",
  },
  {
    name: "Elena Rodriguez",
    role: "VP Marketing, NovaCorp",
    text: "A truly data-first approach. Every decision was backed by hard numbers, and the custom tracking infrastructure they built gave us visibility we never had.",
    rating: 5,
    initials: "ER",
    color: "bg-indigo-600",
  },
  {
    name: "David Chen",
    role: "E-comm Director",
    text: "Their ad creatives are stunning, and their media buying is ruthless. We scaled from $50k to $300k monthly spend while actually improving ROAS.",
    rating: 5,
    initials: "DC",
    color: "bg-emerald-600",
  }
]

export function TestimonialsCarousel(props: PropType) {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Client <span className="text-blue-600">Success.</span></h2>
             <p className="text-xl text-gray-500 mt-4 max-w-xl">Don't just take our word for it. Here is what industry leaders are saying about ClickLab's impact.</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
             <button
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors disabled:opacity-50"
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
              >
                <ChevronLeft />
              </button>
              <button
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors disabled:opacity-50"
                onClick={scrollNext}
                disabled={nextBtnDisabled}
              >
                <ChevronRight />
              </button>
          </div>
        </div>

        <div className="embla relative" ref={emblaRef}>
          <div className="embla__container flex touch-pan-y -ml-6">
            {testimonials.map((testimonial, index) => (
              <div
                className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6"
                key={index}
              >
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 h-full flex flex-col relative group hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-100 group-hover:text-blue-50 transition-colors" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed flex-grow mb-8 font-medium">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                     {/* SVG initial avatar — zero network cost, no external requests */}
                     <div className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-sm`}>
                       {testimonial.initials}
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                       <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
