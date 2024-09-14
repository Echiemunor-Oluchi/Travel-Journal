import "./Travel.css";
import React, { useState } from 'react';
import images from '../config/Images';
import { CiLocationOn } from "react-icons/ci";


function TravelCard() {
  const [travels, setTravels] = useState([
    {
      Title: "Kyoto",
      Location: "JAPAN",
      Google: "View on Google Maps",
      startDate: "23rd March, 2022",
      endDate: "15th April, 2022",
      description: "Kyoto is known for its rich cultural heritage, traditional wooden houses, stunning temples, and beautiful gardens. It offers a unique glimpse into Japan's historical past while blending seamlessly with modernity.Kyoto is one of Japan’s most historic and culturally rich cities, known for its stunning temples, traditional tea houses, and centuries-old traditions. Located in the Kansai region on Japan’s main island, Honshu, Kyoto was the capital of Japan for over 1,000 years (from 794 to 1868) and remains a major cultural and religious center.",
      img: images.img1
    },
    {
      Title: "Marrakech",
      Location: "MOROCCO",
      Google: "View on Google Maps",
      startDate: "25th May, 2023",
      endDate: "17th June, 2023",
      description: "Marrakech is a vibrant city known for its lively souks (markets), historic palaces, and rich Moroccan culture. It's a hub of sensory experiences, with a mix of colors, sounds, and scents. Marrakech, often referred to as the (Red City) due to its red sandstone buildings and walls, is one of Morocco’s most vibrant and culturally rich cities. Located at the foothills of the Atlas Mountains, Marrakech is known for its bustling souks (markets), stunning palaces, gardens, and rich history as a former imperial city.",
      img: images.img2
    },
    {
      Title: "Reykjavik", 
      Location: "ICELAND",
      Google: "View on Google Maps",
      startDate: "27th July, 2024",
      endDate: "20th August, 2024",
      description: "Reykjavik, the capital of Iceland, is a gateway to some of the world's most incredible natural wonders, such as geysers, hot springs, glaciers, and volcanoes. It's a perfect place for adventure and exploring the extraordinary landscapes of the Arctic.Reykjavik, the capital and largest city of Iceland, is a fascinating destination known for its striking natural beauty, modern culture, and rich history. Located on the southwestern coast of Iceland, Reykjavik is the northernmost capital of a sovereign state in the world. Though small compared to many capital cities, it offers a unique combination of urban life and access to incredible natural wonders.",
      img: images.img3
    }
  ]);

  return (
    <div>
      {travels.map((travel, index) => (
       <div key={index} className="imageandTitleHolder container">
        <div className="imageHolder">
        <img src={travel.img} alt="" className="realImage" />
        </div>
        <div className="titleHolder">
          <div className="locationGoogle">
          <p><CiLocationOn className="location" />  {travel.Location} <a href="">{travel.Google}</a> </p>
          </div>
          <div>
        <h1 className="title">{travel.Title}</h1>
        <b>{travel.startDate}-{travel.endDate}</b>
        <p>{travel.description}</p>
        </div>
        </div>
  
        
       </div>
      ))}
    </div>
  );
}

export default TravelCard;
