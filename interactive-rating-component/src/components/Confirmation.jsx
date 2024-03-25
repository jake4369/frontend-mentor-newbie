const Confirmation = ({ rating }) => {
  return (
    <div className="component confirmation-component">
      <img
        src="/images/illustration-thank-you.svg"
        alt="Thank you illustration"
        className="confirmation-img"
      />

      <div className="message__rating">
        You selected <span className="rating">{rating}</span> out of 5
      </div>

      <h2>Thank you!</h2>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Confirmation;
