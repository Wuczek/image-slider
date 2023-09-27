import { useState } from "react";

const imagesSrc = [
  "/src/assets/gabriel-brito-3cq9NIthPxs-unsplash.jpg",
  "/src/assets/gabriel-brito-FQ0S0mp3gSw-unsplash.jpg",
  "/src/assets/gabriel-brito-xn9aMsBTi9o-unsplash.jpg",
];

const Slider = () => {
  const [image, setImage] = useState(imagesSrc[0]);

  const handleSlider = (direction) => {
    const currentImageIndex = imagesSrc.indexOf(image);
    const nextImageIndex =
      direction === "right" ? currentImageIndex + 1 : currentImageIndex - 1;

    if (direction === "left" && currentImageIndex === 0) {
      setImage(imagesSrc[imagesSrc.length - 1]);
    } else if (
      direction === "right" &&
      currentImageIndex === imagesSrc.length - 1
    ) {
      setImage(imagesSrc[0]);
    } else {
      setImage(imagesSrc[nextImageIndex]);
    }
  };

  return (
    <div className="text-center">
      <h1>Image carousel</h1>
      <div>
        <div className="flex justify-center gap-3 p-4">
          <button
            role="button"
            className="bg-black text-white rounded-full w-8 h-8"
            onClick={() => handleSlider("left")}
          >
            L
          </button>
          <button
            role="button"
            className="bg-black text-white rounded-full w-8 h-8"
            onClick={() => handleSlider("right")}
          >
            R
          </button>
        </div>
        <img src={image} alt="random" width={"300px"} height={"500px"} />
      </div>
    </div>
  );
};

export default Slider;
