'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes,
  placeholder,
  blurDataURL,
}: ImageWithFallbackProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Para fill, necesitamos que el contenedor tenga position relative
  const containerClasses = cn(
    fill ? "relative w-full h-full" : "relative",
    fill && !className?.includes('aspect-') ? "aspect-square" : ""
  )

  if (hasError) {
    return (
      <div className={cn(
        containerClasses,
        "bg-gray-200 animate-pulse flex items-center justify-center overflow-hidden",
        className
      )}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        <div className="relative z-10 text-gray-500 text-sm font-medium text-center px-4">
          Imagen no disponible
        </div>
      </div>
    )
  }

  return (
    <div className={containerClasses}>
      {isLoading && (
        <div className={cn(
          "absolute inset-0 bg-gray-200 animate-pulse z-10 overflow-hidden",
          "flex items-center justify-center"
        )}>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={cn(
          fill ? "object-cover" : "",
          isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300 motion-reduce:transition-none",
          className
        )}
        priority={priority}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
      />
    </div>
  )
}
