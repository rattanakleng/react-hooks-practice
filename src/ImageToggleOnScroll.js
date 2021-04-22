import React, { useEffect, useState, useRef } from 'react'

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null)

  //The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect()
    return rect.top >= 0 && rect.bottom <= window.innerHeight
  }

  const [inView, setInview] = useState(false)

  useEffect(() => {
    //Display element when window load
    window.addEventListener('scroll', scrollHandler)
    //Remove event listener when image out of full range in the view
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = () => {
    setInview(isInView())
  }

  return <img src={inView ? secondaryImg : primaryImg} alt="" ref={imageRef} />
}

export default ImageToggleOnScroll
