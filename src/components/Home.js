import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import { listListing } from "../action/listingActions";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div class="home">
      <Banner />
      {loading ? (
        <h2>loading</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listings.map((listing) => (
            <Card
              src={listing.img}
              title={listing.title}
            description={listing.description}
            price={listing.price}
            />
          ))}
        </div>
      )}
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/872f434b-9348-4ff1-8c6f-754fdbab4010.jpeg?im_w=1440&im_q=highq"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-45416791/original/a0f8fbe3-3426-419b-8d95-fc27aa2bb558.jpeg?im_w=1440"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/86b05b1e-d78b-482f-bf43-47ab51cc1cd8.jpg?im_w=1200"
          title="Entire Homes"
          description="Comfortable private places with room for friends or family. "
        />
      </div>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-966015814531483475/original/fd0b127f-d20e-43a0-b2f7-c62905556097.jpeg?im_w=720"
          title="Room in Brooklyn, New York, United States"
          description="Private Floor & Own Entrance, 15 mins to Manhattan"
          price="R1036 ZAR night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/b0c8b92a-ab23-4161-9763-fbe470cc1fea.jpg?im_w=720"
          title="Room in Toronto, Canada"
          description="Lakeview Condo W/Free parking"
          price="R652 ZAR night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-30753111/original/d90edb2f-3962-4194-811b-3f535cfd6731.jpeg?im_w=720"
          title="Room in São Paulo, Brazil"
          description="Charming Casa de Vila in Pinheiros"
          price="R803 ZAR night"
        />
      </div>
    </div>
  );
};

export default Home;
