import "./App.css";
import { useState } from "react";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);

  const [activElement, setActvElement] = useState(null);

  const handleClickElement = item => {
    setActvElement(item);
  };

  const handleClickSubmit = () => {
    if (activElement !== null) {
      setIsSubmited(true);
    }
  };

  return (
    <>
      {isSubmited ? (
        <ThankYou activElement={activElement} />
      ) : (
        <Rating
          submit={handleClickSubmit}
          changeRating={handleClickElement}
          activElement={activElement}
        />
      )}
    </>
  );
}

export default App;
