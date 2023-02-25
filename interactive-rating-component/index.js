const container = document.getElementById("container");
const radioToolbar = document.getElementById("radio-toolbar");
const submitBtn = document.getElementById("submit-btn");
let rating = 1;

radioToolbar.addEventListener("change", (e) => {
  if (e.target.type === "radio") {
    rating = e.target.value;
  }
});

function renderThankYou(rating) {
  const html = `
    <div class="thank-you-container">
        <img
        src="images/illustration-thank-you.svg"
        alt=""
        class="illustration"
        />

        <span class="rating-container">
            You selected ${rating} out of 5
        </span>

        <h2>Thank you!</h2>

        <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
        </p>
    </div>
    `;
  container.innerHTML = html;
}

submitBtn.addEventListener("click", () => {
  if (rating) {
    renderThankYou(rating);
  }
});
