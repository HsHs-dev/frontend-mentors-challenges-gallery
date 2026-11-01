const stats = document.querySelector(".stats")

const dailyBtn = document.querySelector(".daily")
const weeklyBtn = document.querySelector(".weekly")
const monthlyBtn = document.querySelector(".monthly")

let selectedTimeframe = "weekly"

let activities = []

const previousLabels = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

function updateSelectedTimeframe(frame) {
  selectedTimeframe = frame
  dailyBtn.setAttribute("aria-pressed", frame === "daily")
  weeklyBtn.setAttribute("aria-pressed", frame === "weekly")
  monthlyBtn.setAttribute("aria-pressed", frame === "monthly")
  updateStats()
}

dailyBtn.addEventListener("click", () => {
  updateSelectedTimeframe("daily")
})

weeklyBtn.addEventListener("click", () => {
  updateSelectedTimeframe("weekly")
})

monthlyBtn.addEventListener("click", () => {
  updateSelectedTimeframe("monthly")
})

function generateCards(data) {
  stats.innerHTML = data.map(item => {
    const className = item.title.toLowerCase().replace(" ", "-");

    return `
      <article class="${className}">
        <div class="content">
          <div class="header">
            <h2>${item.title}</h2>
            <div class="image">
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
          </div>
          <div class="stat">
            <p class="current"></p>
            <p class="previous"></p>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function updateStats() {
  activities.forEach(item => {
    const className = item.title.toLowerCase().replace(" ", "-");
    const card = stats.querySelector(`.${className}`);

    const timeframe = item.timeframes[selectedTimeframe];

    card.querySelector(".current").textContent =
      `${timeframe.current}hrs`;

    card.querySelector(".previous").textContent =
      `${previousLabels[selectedTimeframe]} - ${timeframe.previous}hrs`;
  });
}


fetch("./data.json")
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    return res.json();
  })
  .then(data => {
    activities = data;
    generateCards(activities);
    updateStats();
  })
  .catch(error => {
    console.error("Failed to load dashboard:", error);

    stats.innerHTML = `
  <p class="error-message">
    Unable to load your activity data. Please try again.
  </p>
`;
  });