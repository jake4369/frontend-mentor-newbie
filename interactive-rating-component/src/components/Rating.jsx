const Rating = () => {
  return (
    <div className="component rating-component">
      <img src="/images/icon-star.svg" alt="" className="star-icon" />

      <h1>How did we do?</h1>

      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rating-btns">
        <input type="radio" name="rating" id="rating-1" />
        <label htmlFor="rating-1">1</label>

        <input type="radio" name="rating" id="rating-2" />
        <label htmlFor="rating-2">2</label>

        <input type="radio" name="rating" id="rating-3" />
        <label htmlFor="rating-3">3</label>

        <input type="radio" name="rating" id="rating-4" />
        <label htmlFor="rating-4">4</label>

        <input type="radio" name="rating" id="rating-5" />
        <label htmlFor="rating-5">5</label>
      </div>

      <button className="btn-submit">Submit</button>
    </div>
  );
};

export default Rating;
