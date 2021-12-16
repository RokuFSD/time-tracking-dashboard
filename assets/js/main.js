const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const selector = document.querySelectorAll('a[href="javascript:void(0)"]');
const cardsData = document.querySelectorAll(".data__stats");

const insertValue = (value, index) => {
  cardsData[index].querySelector("p").innerHTML =
    value.previous > 1
      ? `Previous - ${value.previous}hrs`
      : `Previous - ${value.previous}hr`;

  cardsData[index].querySelector("h2").innerHTML =
    value.current > 1 ? `${value.current}hrs` : `${value.current}hr`;
};

// Carga datos iniciales daily por defecto
data.map((value, index) => {
  insertValue(value.timeframes.daily, index);
});

for (let boton of selector) {
  boton.addEventListener("click", () => {
    const actual = document.querySelector(".selected");

    if (boton.id != actual.id) {
      boton.classList.toggle("selected");
      actual.classList.toggle("selected");
      changeCards(boton.id);
    }
  });
}

const changeCards = (option) => {
  console.log(option);
  switch (option) {
    case "daily":
      data.map((value, index) => {
        insertValue(value.timeframes.daily, index);
      });
      break;

    case "weekly":
      data.map((value, index) => {
        insertValue(value.timeframes.weekly, index);
      });
      break;

    case "monthly":
      data.map((value, index) => {
        insertValue(value.timeframes.monthly, index);
      });
      break;

    default:
      console.log("Error at getting option");
  }
};
