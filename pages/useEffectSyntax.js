import React, {useEffect, useState} from 'react'

const useEffectsyntax = () => {

   const [checkBoxValue, setCheckBoxValue] = useState(false);

   //Function in useEffect will call everytime checkBoxValue changes state.
   useEffect(() => {
      console.log('in useEffect');
      return () => {
         console.log('in useEffect Cleanup');
      }
   }, [checkBoxValue] )
   
   return (
      <div>
         
      </div>
   )
}

export default useEffectsyntax
