import { useState } from "react";

import Rating from "./components/Rating";
import Confirmation from "./components/Confirmation";

const App = () => {
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);

  const handleSelectRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating) setIsRated(true);
  };

  return (
    <main className="app">
      {!isRated ? (
        <Rating
          onSelectRating={handleSelectRating}
          onHandleSubmit={handleSubmit}
        />
      ) : (
        <Confirmation rating={rating} />
      )}
    </main>
  );
};

export default App;
