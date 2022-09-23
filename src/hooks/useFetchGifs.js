import React, { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs'

function useFetchGifs( category ) {

  const [ images, setImages ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
     getGifs( category )
         .then( newImages => setImages( newImages ) )
         .then( loading => setIsLoading(false) )
  }, [])

  return {
    images,
    isLoading,
  }
}

export default useFetchGifs