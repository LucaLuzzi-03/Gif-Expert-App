import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem'
import PropTypes from 'prop-types'


function GiftGrid({ category }) {

    const { images, isLoading } = useFetchGifs( category );

  return (
    <>
        <h3>{ category }</h3>
        { isLoading && ( <h2> Loading... </h2> ) }

        <div className='card-grid'>
            {
                images.map( (image) => (
                    <GifItem 
                        key={ image.id }
                        { ...image } //RETORNA EL RESTO DE PROPIEDADES DE CADA ELEMENTO IMAGE
                     />
                ))
            }
        </div>
    </>
  )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

export default GiftGrid