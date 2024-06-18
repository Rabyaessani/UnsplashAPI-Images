import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "./Context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { SearchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["Images", SearchTerm],
    queryFn: async () => {
      const result = await axios(`${url}&query=${SearchTerm}`);
      //console.log(result)
      return result.data;
    },
  });
  //   console.log(response);

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an Error</h4>
      </section>
    );
  }
  const Images = response.data.results;
  console.log(Images);
  if (Images.length < 1) {
    return (
      <section className="image-container">
        <h4>No Images found...</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {Images.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item?.id}
            alt={item?.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};

export default Gallery;
