import { Img } from "./HeroImageStyles";
import { useState, useEffect } from "react";

var index;
const HeroImage = () => {
  const images = ["./jo-personal-website/images/Jo2.png", "./jo-personal-website/images/Jo.png"];
  const [image, setImage] = useState(images[0]);
  // var timer

  // useEffect(() => {
  //     setInterval(() => {
  //         if (timer = 0){
  //             setImage(images[0])
  //             timer=1
  //         }else{
  //             setImage(images[1])
  //             timer=0;
  //         }
  //     }, 3000);
  //   }, []);

  function changeImage() {
    if (index === 0) {
      setImage(images[0]);
      index = 1;
      console.log(index);
    } else {
      setImage(images[1]);
      index = 0;
      console.log(index);
    }
  }

  return <Img onClick={() => changeImage()} src={image} alt="Jo" />;
};

export default HeroImage;
