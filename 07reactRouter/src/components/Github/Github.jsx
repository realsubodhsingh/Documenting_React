import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
const data = useLoaderData()   // hook
    // this is the traditional way to fetch the data but we are trying to use the optimized one
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/realsubodh")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       }, []);
//   });

  return (
    <>
    <div className="text-center m-4 bg-red-500 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <div>{data.bio}</div>
      <img src={data.avatar_url} alt="profile-picture" width="150" />
      
      </div>

    
    </>
    
  );
}

export default Github;
export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/realsubodh')
    return response.json()
}