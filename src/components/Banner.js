import React, { useState } from 'react';
import Button from "@mui/material/Button";
import Search from "./Search"
import "./Banner.css";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_search_button"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>There is a world out there that awaits you.</h1>
      <h1>Plan an adventure to hidden gems around you</h1>
      <Button variant="outlined">Explore Nearby You</Button>
      </div>
    </div>
  );
};

export default Banner;
