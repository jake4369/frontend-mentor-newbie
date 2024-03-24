import { useState } from "react";

import Rating from "./components/Rating";

const App = () => {
  const [rating, setRating] = useState(0);

  const handleSelectRating = (value) => {
    setRating(value);
  };

  return (
    <main className="app">
      <Rating onSelectRating={handleSelectRating} />
    </main>
  );
};

export default App;
