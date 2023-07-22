import { Hero } from "@/components/Comp";  import axios from 'axios';


import React from "react";




export default async function page() {



//   const API_KEY = 'AIzaSyBEg30wet9_OnWtO6BVQpfNX8Ml_UgvPsE';
//   const channelUsername = 'yahooBaba'; // Replace with the desired channel's username
  

//    axios.get('https://www.googleapis.com/youtube/v3/channels', {
//     params: {
//       part: 'snippet',
//       forUsername: channelUsername,
//       key: API_KEY,
//     },
//   })
//   .then((response) => {
//     const channelId = response.data.items[0].id;
//     console.log('Channel ID:', channelId);
//   })
//   .catch((error) => {
//     console.error('Error fetching channel:', error);
//   });



// const res = await fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCDJGauwPWeupuC5N2W86VWg&maxResults=25&key=AIzaSyBEg30wet9_OnWtO6BVQpfNX8Ml_UgvPsE",
// {
//   method:"GET"
// })

// const data = await res.json()

//  console.log(data)





  return (
    <>
      <Hero />
    </>
  );
}
