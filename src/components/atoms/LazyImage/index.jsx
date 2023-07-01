import React, { useRef, useEffect } from 'react'

const LazyImage = ({ src, placeholder, alt }) => {
  const imgRef = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjust this threshold as needed
    }

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = src
          img.onload = () => {
            img.classList.add('loaded')
            observer.unobserve(img)
          }
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, options)
    const imgElement = imgRef.current

    if (imgElement) {
      observer.observe(imgElement)
    }

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement)
      }
    }
  }, [src])

  return <img ref={imgRef} src={placeholder} data-src={src} alt={alt} className="lazy-image" />
}

export default LazyImage
