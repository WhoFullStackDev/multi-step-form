const tab = document.getElementsByClassName("form-container");
const planCard = document.getElementsByClassName("plan-card");
planCard[0].addEventListener("click", () => {
  planCard[0].setAttribute("checked", "on");
  planCard[0].style.borderColor = "hsl(213, 96%, 18%)";
  planCard[0].style.backgroundColor = "hsl(229, 24%, 87%)";
});
planCard[1].addEventListener("click", () => {
  planCard[1].style.borderColor = "hsl(213, 96%, 18%)";
  planCard[1].style.backgroundColor = "hsl(229, 24%, 87%)";
});
planCard[2].addEventListener("click", () => {
  planCard[2].style.borderColor = "hsl(213, 96%, 18%)";
  planCard[2].style.backgroundColor = "hsl(229, 24%, 87%)";
});

let currentTab = 0;
showTab(currentTab);

function showTab(n) {
  tab[n].style.display = "block";
  if (n === 1) {
    document.getElementById("back").style.visibility = "visible";
  }

  if (n === 0) {
    document.getElementById("back").style.visibility = "hidden";
  }

  if (n >= tab.length - 2) {
    document.getElementById("next").style.display = "none";
    document.getElementById("confirm").style.display = "block";
  } else {
    document.getElementById("next").style.display = "block";
    document.getElementById("confirm").style.display = "none";
  }
  if (n <= tab.length - 2) indicator(n);
}

const nexPrev = (n) => {
  if (n == 1 && !validation()) return false;

  tab[currentTab].style.display = "none";
  currentTab = currentTab + n;

  showTab(currentTab);
};

document.getElementById("confirm").addEventListener("click", () => {
  tab[currentTab].style.display = "none";

  showTab(tab.length - 1);
  document.querySelector(".button").style.display = "none";
  document.querySelector(".bg-form").style.height = "100%";
});

function indicator(n) {
  const indicator = document.getElementsByClassName("box");

  for (let i = 0; i < indicator.length; i++) {
    indicator[i].className = indicator[i].className.replace(" active", "");
  }

  indicator[n].className += " active";
}

const validation = () => {
  const error = document.getElementsByClassName("error");
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phon = document.querySelector("#phon").value;

  if (!name) {
    error[0].style.display = "block";
  } else {
    error[0].style.display = "none";
  }

  if (!email) {
    error[1].style.display = "block";
  } else {
    error[1].style.display = "none";
  }

  if (!phon) {
    error[2].style.display = "block";
  } else {
    error[2].style.display = "none";
  }

  if (email && name && phon) {
    return true;
  } else {
    return false;
  }
};
