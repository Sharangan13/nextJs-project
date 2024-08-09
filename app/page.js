import "./home.css"
import Image from "next/image";
import home_img from "../public/homeimage.png"

export default function Home() {
  return (
    <div className="container mx-auto flex">
      <div className="w-1/2">
      <p className="homepage_heading">Discover Luxury Living in Colombo with RUJ.</p> 
      <p className="pt-5 text-2xl">Experience Unparalleled Comfort and Convenience in Our Serviced Apartments</p>

      <div>
        <button className="pe-3 btn pt-5">Explore Our Properties </button>
        <button className="ps-3">Discover Colombo </button>
      </div>
      </div>

      <div className="w-1/2 ">
        <Image src={home_img} className="rounded"></Image>
        </div> 
      
      
    </div>
  );
}
