import React from 'react'
import './SearchResults.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const SearchResults = ({img, location, title,description, price,star, total}) => {
  return (
    <div className='searchResults'>
        <img src={img} alt="" />
        <FavoriteBorderIcon className='searchResults_heart'/>
        <div className='searchResult_info'>
            <div className='searchResult_infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>----</p>
                <p>{description}</p>
            </div>
            <div className='searchResults_infoBottom'>
              <div className='searchResults_stars'>
                <p><strong>{star}</strong></p>
              </div>
              <div className='searchResults_price'>
               <h2>{price}</h2>
               <p>{total}</p>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default SearchResults