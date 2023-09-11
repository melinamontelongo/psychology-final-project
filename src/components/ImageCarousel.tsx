"use client"
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import LazyImage from "./LazyImage";

const Carousel = ({ images }: { images: string[] }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
    const [slidesInView, setSlidesInView] = useState<number[]>([])
  
    const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
      setSlidesInView((slidesInView) => {
        if (slidesInView.length === emblaApi.slideNodes().length) {
          emblaApi.off('slidesInView', updateSlidesInView)
        }
        const inView = emblaApi
          .slidesInView()
          .filter((index) => !slidesInView.includes(index))
        return slidesInView.concat(inView)
      })
    }, [])
  
    useEffect(() => {
      if (!emblaApi) return
  
      updateSlidesInView(emblaApi)
      emblaApi.on('slidesInView', updateSlidesInView)
      emblaApi.on('reInit', updateSlidesInView)
    }, [emblaApi, updateSlidesInView])
    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((img, i) => (
                        <LazyImage
                            key={img}
                            imgSrc={img}
                            inView={slidesInView.indexOf(i) > -1}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Carousel;