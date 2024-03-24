const Rating = ({ onSelectRating }) => {
  return (
    <div className="component rating-component">
      <img src="/images/icon-star.svg" alt="" className="star-icon" />

      <h1>How did we do?</h1>

      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rating-btns">
        <input
          type="radio"
          name="rating"
          id="rating-1"
          value={1}
          onChange={(e) => onSelectRating(e.target.value)}
        />
        <label htmlFor="rating-1">1</label>

        <input
          type="radio"
          name="rating"
          id="rating-2"
          value={2}
          onChange={(e) => onSelectRating(e.target.value)}
        />
        <label htmlFor="rating-2">2</label>

        <input
          type="radio"
          name="rating"
          id="rating-3"
          value={3}
          onChange={(e) => onSelectRating(e.target.value)}
        />
        <label htmlFor="rating-3">3</label>

        <input
          type="radio"
          name="rating"
          id="rating-4"
          value={4}
          onChange={(e) => onSelectRating(e.target.value)}
        />
        <label htmlFor="rating-4">4</label>

        <input
          type="radio"
          name="rating"
          id="rating-5"
          value={5}
          onChange={(e) => onSelectRating(e.target.value)}
        />
        <label htmlFor="rating-5">5</label>
      </div>

      <button className="btn-submit">Submit</button>
    </div>
  );
};

export default Rating;
