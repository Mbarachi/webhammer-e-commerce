import React from 'react'

const test = () => {
    const onDocumentClick = (event) => {
          console.log(event.target)
      }
    return (
        <div>

            <button onClick={(e) => onDocumentClick(e)}>Button 1</button>
            
        </div>
    )
}



export default test
