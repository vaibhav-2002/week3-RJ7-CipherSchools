import React, { useState, useEffect } from "react";
import Axios from "axios";

const Photos = () => {
  const [PhotosList, setPhotosList] = useState([]);
  const [isLoding, setisLoding] = useState(true);

  useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/photos")
    //       .then((Response) => Response.json())
    //       .then((json) => setPhotosList(json))
    //       .finally(() => setisLoding(false));
    //   }, []);

    Axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        let foundPhotos = response.data;
        setPhotosList(foundPhotos);
      })
      .catch((err) => console.log(err))
      .finally(() => setisLoding(false));
  }, []);

  if (isLoding) {
    return;
    <h4>Loding....</h4>;
  }

  return (
    <div>
      {PhotosList.map((Photos, index) => (
        <div key={index}>
          <img src={Photos.url} alt={Photos.title} />
        </div>
      ))}
    </div>
  );
};
export default Photos;
