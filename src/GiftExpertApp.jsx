import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GiftGrid from './components/GiftGrid';

function GiftExpertApp() {

    const [categories, setCategories] = useState(['One Punch',]);

    const onAddCategory = ( newValue ) => {

        if ( categories.includes( newValue ) ) return;

         setCategories([ newValue, ...categories])
    }

  return (
    <>
        <h1>Gift Expert App</h1>

        <AddCategory onNewCategory={ onAddCategory } />


        { 
        categories.map( category => (
        <GiftGrid 
          key={ category }
          category={ category } 
        />) )
        }

    </>
  )
}

export default GiftExpertApp