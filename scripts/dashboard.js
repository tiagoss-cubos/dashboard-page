// Ações de hover nos ícones "Menu usuário", "Help" e "Notificações, além de ações de click"

function openItenMenuPay() {
  const itenVender = document.getElementById("iten-vender");
  const displayNoneVender = document.querySelector(".display-none-vender");
  const arrowDownVender = document.querySelector(".arrowDown-vender");
  const arrowUpVender = document.querySelector(".arrowUp-vender");

  itenVender.addEventListener("click", function () {
    if (displayNoneVender.classList.contains("display-none-vender")) {
      displayNoneVender.classList.remove("display-none-vender");
      arrowDownVender.classList.replace("arrowDown-vender", "arrowUp-vender");
      arrowUpVender.classList.replace("arrowUp-vender", "arrowDown-vender");
    } else {
      displayNoneVender.classList.add("display-none-vender");
      arrowUpVender.classList.replace("arrowDown-vender", "arrowUp-vender");
      arrowDownVender.classList.replace("arrowUp-vender", "arrowDown-vender");
    }
  });
}

function openItenMenuFinancial() {
  const itenFinanceiro = document.getElementById("iten-financeiro");
  const displayNoneFinanceiro = document.querySelector(
    ".display-none-financeiro"
  );
  const arrowDownFinanceiro = document.querySelector(".arrowDown-financeiro");
  const arrowUpFinanceiro = document.querySelector(".arrowUp-financeiro");

  itenFinanceiro.addEventListener("click", function () {
    if (displayNoneFinanceiro.classList.contains("display-none-financeiro")) {
      displayNoneFinanceiro.classList.remove("display-none-financeiro");
      arrowDownFinanceiro.classList.replace(
        "arrowDown-financeiro",
        "arrowUp-financeiro"
      );
      arrowUpFinanceiro.classList.replace(
        "arrowUp-financeiro",
        "arrowDown-financeiro"
      );
    } else {
      displayNoneFinanceiro.classList.add("display-none-financeiro");
      arrowUpFinanceiro.classList.replace(
        "arrowDown-financeiro",
        "arrowUp-financeiro"
      );
      arrowDownFinanceiro.classList.replace(
        "arrowUp-financeiro",
        "arrowDown-financeiro"
      );
    }
  });
}

function openItenMenuConfig() {
  const itenConfig = document.getElementById("iten-config");
  const displayNoneConfig = document.querySelector(".display-none-config");
  const arrowDownConfig = document.querySelector(".arrowDown-config");
  const arrowUpConfig = document.querySelector(".arrowUp-config");

  itenConfig.addEventListener("click", function () {
    if (displayNoneConfig.classList.contains("display-none-config")) {
      displayNoneConfig.classList.remove("display-none-config");
      arrowDownConfig.classList.replace("arrowDown-config", "arrowUp-config");
      arrowUpConfig.classList.replace("arrowUp-config", "arrowDown-config");
    } else {
      displayNoneConfig.classList.add("display-none-config");
      arrowUpConfig.classList.replace("arrowDown-config", "arrowUp-config");
      arrowDownConfig.classList.replace("arrowUp-config", "arrowDown-config");
    }
  });
}

function openItenMenuTools() {
  const itenTools = document.getElementById("iten-ferramentas");
  const displayNoneTools = document.querySelector(".display-none-ferramentas");
  const arrowDownTools = document.querySelector(".arrowDown-ferramentas");
  const arrowUpTools = document.querySelector(".arrowUp-ferramentas");

  itenTools.addEventListener("click", function () {
    if (displayNoneTools.classList.contains("display-none-ferramentas")) {
      displayNoneTools.classList.remove("display-none-ferramentas");
      arrowDownTools.classList.replace(
        "arrowDown-ferramentas",
        "arrowUp-ferramentas"
      );
      arrowUpTools.classList.replace(
        "arrowUp-ferramentas",
        "arrowDown-ferramentas"
      );
    } else {
      displayNoneTools.classList.add("display-none-ferramentas");
      arrowUpTools.classList.replace(
        "arrowDown-ferramentas",
        "arrowUp-ferramentas"
      );
      arrowDownTools.classList.replace(
        "arrowUp-ferramentas",
        "arrowDown-ferramentas"
      );
    }
  });
}

function showPopupHelp() {
  const cardHelp = document.querySelector(".card-help-none");
  const iconHelp = document.querySelector(".iconHelp");

  iconHelp.addEventListener("click", function () {
    cardHelp.classList.toggle("card-help-none");
  });
}

function showPopupNotification() {
  const cardNotification = document.querySelector(".card-notification-none");
  const iconNotification = document.querySelector(".iconNotification");

  iconNotification.addEventListener("click", function () {
    cardNotification.classList.toggle("card-notification-none");
  });
}

function showPopupUser() {
  const cardHelp = document.querySelector(".card-user-none");
  const iconHelp = document.querySelector(".iconUser");

  iconHelp.addEventListener("click", function () {
    cardHelp.classList.toggle("card-user-none");
  });
}

function exitDashboard() {
  const linkExit = document.querySelector(".user-itens__link-exit");
  linkExit.addEventListener("click", function () {
    window.location = "../index/login.html";
  });
}

function dashboard() {
  showPopupHelp();
  showPopupUser();
  showPopupNotification();
  openItenMenuPay();
  openItenMenuFinancial();
  openItenMenuConfig();
  openItenMenuTools();
  exitDashboard();
}

dashboard();

// Requisições GET

const API_URL = "https://test-final.b8one.academy/";

async function fetchData(params) {
  try {
    const response = await fetch(API_URL + params);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
}

function user({ organization, photo, username }) {
  const myCompany = document.querySelector(".header-org__baw-clothing");
  const avatar = document.querySelector(".nav-user-icons__avatar");
  const name = document.querySelector(".header-nav-user__name");

  myCompany.innerText = organization;
  avatar.src = photo;
  name.innerText = username;
}

function sales({ revenues, totalSales, averageTicket }) {
  const billed = document.getElementById("billed");
  const pay = document.getElementById("pay");
  const ticket = document.getElementById("ticket");

  function formatterNumber(params) {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formatter.format(params);
  }

  billed.innerText = formatterNumber(revenues);
  pay.innerText = Number(totalSales);
  ticket.innerText = formatterNumber(averageTicket);
}

function menu({ menuTree }) {
  const menuTeeFilter = menuTree.filter((element) => element.name);

  const categories = document.querySelectorAll("a.aside-nav-link");

  for (let index = 0; index < categories.length; index++) {
    categories[index].innerHTML = menuTeeFilter[index].name;
  }
}

async function main() {
  const dataUser = await fetchData("user");
  const dataSales = await fetchData("sales");
  const dataMenu = await fetchData("menu");
  user(dataUser);
  sales(dataSales);
  // menu(dataMenu);
}

main();
