import React from 'react'

function GiphyDisplay({ giphy }) {
    // console.log(giphy)
const loaded =() => {
  return (
    <div className='giphy-display'>
        <img src={`${giphy.data.images.original.url}`} alt="gif"></img>
    </div>
  )
}

const loading = () => {
    return "giphy Not available";
  };

  return giphy ? loaded() : loading();
}
export default GiphyDisplay;