import React, { useEffect, useState } from "react";
import CardOfFour from "./CardOfFour";
import axios from "axios";
import { Link } from "react-router-dom";
import movie from "../images/movie.jpg";
const URL = "https://fakestoreapi.com/products";
const Content = () => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(URL).then((response) => {
      setPost(response.data);
    });
  });
  if (!post) return null;
  console.log(post);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-evenly">
        <CardOfFour
          title={"Men's clothing"}
          image1={post[0].image}
          image2={post[1].image}
          image3={post[2].image}
          image4={post[3].image}
          link={<Link to="#">Explore more</Link>}
        />
        <CardOfFour
          title={"Men's clothing"}
          image1={post[0].image}
          image2={post[1].image}
          image3={post[2].image}
          image4={post[3].image}
          link={<Link to="#">Explore more</Link>}
        />
        <CardOfFour
          title={"Men's clothing"}
          image1={post[0].image}
          image2={post[1].image}
          image3={post[2].image}
          image4={post[3].image}
          link={<Link to="#">Explore more</Link>}
        />
        <div className="hidden xl:block">
          <CardOfFour
            title={"Men's clothing"}
            image1={post[0].image}
            image2={post[1].image}
            image3={post[2].image}
            image4={post[3].image}
            link={<Link to="#">Explore more</Link>}
          />
        </div>
      </div>
      <div className="flex flex-row justify-evenly">
        <Link to="#">
          
          <img src={movie} alt="movie" className="w-[43.6vw] h-[27vh] md:h-[35vh] lg:h-[47vh] xl:h-[57vh] xl:w-[44vw] w-[50vw] md:w-[49vw]" />
        </Link>
        <CardOfFour
          title={"Electronics"}
          image1={post[8].image}
          image2={post[9].image}
          image3={post[10].image}
          image4={post[11].image}
          link={<Link to="#">Explore more</Link>}
        />
        <div className="hidden xl:block">
          <CardOfFour
            title={"Electronics"}
            image1={post[8].image}
            image2={post[9].image}
            image3={post[10].image}
            image4={post[11].image}
            link={<Link to="#">Explore more</Link>}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
