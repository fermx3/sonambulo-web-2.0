'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { ImageWithFallback } from '@/app/(marketing)/components/ImageWithFallback'
import { carouselBlurDataURL } from '@/lib/utils/image-placeholders'

interface PortfolioCarouselProps {
  images: Array<{
    url: string
    alt?: string
  }>
}

export default function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  if (!images || images.length === 0) return null

  return (
    <section className="relative w-screen md:min-h-screen min-h-[50vh] flex items-center justify-center bg-[var(--color-ink)] overflow-hidden">
      {/* Cuadros de colores de fondo */}
      <div className="absolute w-[140vw] mx-auto pointer-events-none flex items-center justify-center gap-8 lg:gap-12">
        {/* Cuadro verde */}
        <div className="w-[90vw] aspect-1/1 border-2 border-[var(--color-teal)] rounded-2xl" />

        {/* Cuadro azul centro */}
        <div className="w-[90vw] aspect-1/1 border-2 border-[var(--color-blue)] rounded-2xl z-10" />

        {/* Cuadro amarillo */}
        <div className="w-[90vw] aspect-1/1 border-2 border-[var(--color-lime)] rounded-2xl" />
      </div>

      {/* Contenido del carrusel */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {images.length <= 2 ? (
            // 1-2 imágenes: grid sin carrusel
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square w-[60vh] mx-auto overflow-hidden bg-gray-100 rounded-lg"
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt || `Portfolio image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="768px"
                    placeholder="blur"
                    blurDataURL={carouselBlurDataURL}
                  />
                </div>
              ))}
            </div>
          ) : (
            // Más de 2 imágenes: carrusel
            <div className="relative">
              <div className="relative aspect-square w-[60vh] mx-auto overflow-hidden bg-gray-100 rounded-lg">
                <ImageWithFallback
                  src={images[currentIndex].url}
                  alt={images[currentIndex].alt || `Portfolio image ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="768px"
                  placeholder="blur"
                  blurDataURL={carouselBlurDataURL}
                />
              </div>

              {/* Controles del carrusel */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors motion-reduce:transition-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors motion-reduce:transition-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicadores */}
              <div className="flex justify-center mt-6 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors motion-reduce:transition-none",
                      index === currentIndex ? "bg-white" : "bg-white/50"
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {images.length === 1 ? (
            // Una sola imagen
            <div className="relative aspect-square w-64 mx-auto rounded-lg overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={images[0].url}
                alt={images[0].alt || 'Portfolio image'}
                fill
                className="object-cover"
                sizes="256px"
                placeholder="blur"
                blurDataURL={carouselBlurDataURL}
              />
            </div>
          ) : (
            // Más de 1 imagen: carrusel
            <div className="relative">
              <div className="relative aspect-square w-64 mx-auto rounded-lg overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={images[currentIndex].url}
                  alt={images[currentIndex].alt || `Portfolio image ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="256px"
                  placeholder="blur"
                  blurDataURL={carouselBlurDataURL}
                />
              </div>

              {/* Controles del carrusel */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors motion-reduce:transition-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors motion-reduce:transition-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Indicadores */}
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors motion-reduce:transition-none",
                      index === currentIndex ? "bg-white" : "bg-white/50"
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
