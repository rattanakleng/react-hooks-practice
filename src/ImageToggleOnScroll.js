import React, { useEffect, useState, useRef } from 'react'

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null)
   //Create state to check if the window is loading and set to "true" while window is loading after the DOM is fully constructed
  const [isLoading, setIsLoading] = useState(true);

  //The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect()
    return rect.top >= 0 && rect.bottom <= window.innerHeight
  }

  const [inView, setInView] = useState(false)

  useEffect(() => {
      //change isLoading to "false" and let react render image 
      setIsLoading(false);
      //Check if the top image is inView? if it true then set inView to secondary
      setInView(isInView());

    //Display element when window load
    window.addEventListener('scroll', scrollHandler)
    //Remove event listener when image out of full range in the view
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = () => {
    setInView(isInView())
  }

  return <img src={
   //Check is loading and apply transparent image when window is loading
   isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif 
   : inView ? secondaryImg : primaryImg} alt="" ref={imageRef} />
}

export default ImageToggleOnScroll
