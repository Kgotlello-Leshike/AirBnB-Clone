import React from 'react'
import {Button} from '@mui/material'
import  './SearchPage.css'
import SearchResults from './SearchResults'

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage_info'>
        <p>84 Stays . 1 April to  5 April . 2 Guests</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      <SearchResults 
      img="https://a0.muscache.com/im/pictures/46808737-4827-41db-ac03-cd1f92c14884.jpg?im_w=480"
      location="Private room in bed and breakfast in Ga-Sekororo, South Africa"
      description="3 guests·1 bedroom·2 beds·1 private bath"
      star={5.0}
      price="R3,740 ZAR night"
      total="R13,700 ZAR total before taxes"
      />
      <SearchResults 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-826134718441577316/original/b50faa5d-4eca-4fe4-ab88-68a26702c1e3.jpeg?im_w=720"
      location="Entire villa in Cape Town, South Africa"
      description="8 guests4 bedrooms5 beds5.5 baths"
      star={4.8}
      price="R20,000 ZAR night"
      total="R162,730 ZAR total before taxes"
      />
       <SearchResults 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-614452678949652779/original/97d3f073-1f0e-4dcc-a4e6-f8d990b2d734.jpeg?im_w=720"
      location="Entire cabin in Cunha, Brazil"
      description="2 guests·1 bedroom·1 bed·1 bath"
      star={4.0}
      price="R3,340 ZAR night"
      total="R16,699 ZAR total before taxes"
      />
       <SearchResults 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-633486969729378689/original/d5360b06-4e1d-454b-894f-e0197bab66ef.jpeg?im_w=1200"
      location="Entire home in Mata de São João, Brazil"
      description="14 guests·6 bedrooms·6 baths"
      star={4.67}
      price="R14,006 ZAR night"
      total="R83,236 ZAR total before taxes"
      />
       <SearchResults 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-721540609203378406/original/b774c2ea-f956-49c7-8ad4-3b744c6b9cfb.jpeg?im_w=720"
      location="Entire rental unit in Dubai, United Arab Emirates"
      description="4 guests·Studio·1 bath"
      star={4.95}
      price="R2,099 ZAR night"
      total="R13,669 ZAR total before taxes"
      />
       <SearchResults 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-749996089802009824/original/58302b27-b238-432d-b51c-8d250b805deb.jpeg?im_w=1200"
      location="Entire home in Fairplay, Colorado, United States"
      description="14 guests·5 bedrooms·9 beds·3.5 baths"
      star={5.0}
      price="R5,747 ZAR night"
      total="R46,774 ZAR total before taxes"
      />
      <SearchResults 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-53123811/original/7f3f8a8d-e56c-4835-83f7-8cc1b7d1dfbc.jpeg?im_w=1200"
      location="Entire place in Kecamatan Tegallalang, Indonesia"
      description="2 guests·1 bedroom·1.5 baths"
      star={4.90}
      price="R777 ZAR night"
      total="R5,088 ZAR total before taxes"
      />
      <SearchResults 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-626159734092328107/original/99201d34-6599-4bf7-a893-06c5cae703fd.jpeg?im_w=720"
      location="Entire home in Pão de Açúcar, Brazil"
      description="2 guests·1 bedroom·1 bed·1 bath"
      star={5.0}
      price="R1,796 ZAR ZAR night"
      total="R11,312 ZAR ZAR total before taxes"
      />
      
    </div>
  )
}

export default SearchPage