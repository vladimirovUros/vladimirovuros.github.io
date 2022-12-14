let path = window.location.pathname;

if (path == "/" || path == "/index.html") {
  indexPage();
} else {
  author();
}
// ANIMIRA COVER PAGE NA POCETKU
function animate() {
  document.addEventListener("DOMContentLoaded", () => {
    let titles = document.querySelectorAll(".title");
    const animacija1 = [
      { transform: "translateY(-200px)", opacity: "0" },
      { transform: "translateY(0px) ", opacity: "1" },
    ];
    const animacija2 = [
      { transform: "translateX(-200px)", opacity: "0" },
      { transform: "translateX(0px) ", opacity: "1" },
    ];
    const duzina = {
      duration: 500,
      iterations: 1,
    };
    titles[1].animate(animacija1, duzina);
    titles[0].animate(animacija2, duzina);
  });
}
// DINAMICKI ISPIS ELEMENATA NA COVERU
function cover() {
  let coverInfo = [
    ["Pro Marketing marketinška agencija"],
    ["Kontaktirajte nas"],
    ["banner-right-image.png"],
  ];

  let coverInner = ``;

  for (let i in coverInfo[0]) {
    coverInner += `<div class="row">
                    <div class="col-lg-6 title align-self-center">
                    <div class="left-content header-text">
                        <div class="row">
                        <div class="col-lg-12">
                            <h2 class="">${coverInfo[0][i]}</h2>
                        </div>
                        <div class="col-lg-12">
                            <div class="main-green-button scroll-to-section">
                            <a class="" href="#contact">${coverInfo[1][i]}</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-6 title">
                    <div
                        class="right-image"
                    >
                        <img src="assets/images/${coverInfo[2][i]}" alt="cover image" />
                    </div>
                    </div>
                </div>`;
  }
  let cover = document.querySelector("#cover");
  cover.innerHTML = coverInner;
}
// DINAMICKI ISPIS FEATURES ELEMENATA
function features() {
  let featuresWrap = document.querySelector("#featuresWrap");

  let featuresInfo = [
    ["first-number", "second-number", "third-number", "fourth-number"],
    ["01", "02", "03", "04"],
    ["Onliine strategija", "Društvene mreže", "Oglašavanje", "Razvoj"],
    [
      `Kompletna strategija online nastupa, i uvezivanje sa ostalim kanalima komunikacije.`,
      `Pružamo usluge upravljanja profilima, stvaranje sadržaja, kreiranje kampanja i analitika. `,
      `Kreiranje oglasa, Društvene mreže, Google reklame, Određivanje ciljne grupe i strategije.`,
      `Idejno rešenje, Web sajt, Email marketing, Marketiško stablo od ideje do realizacije.`,
    ],
    ["first-feature", "second-feature", "first-feature", "second-feature"],
    ["fade-up", "fade-down", "fade-up", "fade-down"],
  ];
  let featuresInner = ``;
  for (let i in featuresInfo[0]) {
    featuresInner += `<div class="col-lg-3">
                            <div data-aos="${featuresInfo[5][i]}"
                            class="features-item ${featuresInfo[4][i]} wow fadeInUp"
                        
                            >
                            <div class="${featuresInfo[0][i]} number">
                                <h6>${featuresInfo[1][i]}</h6>
                            </div>
                            <div class="icon"></div>
                            <h4>${featuresInfo[2][i]}</h4>
                            <div class="line-dec"></div>
                            <p>
                                ${featuresInfo[3][i]}
                            </p>
                            </div>
                        </div>`;
  }
  featuresWrap.innerHTML = featuresInner;

  let percent = [
    ["80", "60", "90", "70"],
    ["Uspešnost", "Upornost", "Marketing", "Ideja"],
  ];

  let pInner = ``;

  for (let i in percent[0]) {
    pInner += `<div class="col-lg-3 percent">
                <div class="skill-item">
                  <div class="progress">
                    <div class="progress-bg"></div>
                    <div class="progress-value">
                      <div>
                        ${percent[0][i]}%<br />
                        <span>${percent[1][i]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
  }
  featurePercent.innerHTML = pInner;

  let percentItems = document.querySelectorAll(".percent .progress-bg");

  for (let i = 0; i < percentItems.length; i++) {
    let item = percentItems[i];
    item.style.transform = `scale(0.${percent[0][i]})`;
    const animacija = [
      { transform: "scale(0)", opacity: "0" },
      { transform: `scale(0.${percent[0][i]})`, opacity: "1" },
    ];
    const duzina = {
      duration: 500,
      iterations: 1,
    };

    window.addEventListener("scroll", () => {
      let height = window.scrollY;
      if (height > 400 && height < 600) {
        item.animate(animacija, duzina);
      }
    });
  }
}
// DINAMICKO ISPISIVANJE USLUGA KAO I FILTIRIRANJE
function services() {
  let servicesWrap = document.getElementById("servicesWrap");

  let serviceInfo = [
    [
      "service-icon-01.png",
      "service-icon-02.png",
      "service-icon-03.png",
      "service-icon-03.png",
      "service-icon-02.png",
      "service-icon-01.png",
    ],
    [
      "Oglašavanje i Marketing",
      "Komunikacije",
      "Produkcija",
      "Web marketing",
      "Dizajn",
      "Društvene mreže",
    ],
    [
      `Prilikom građenja i upravljanja prodajnim kampanjama i brendovima naših klijenata  koristimo kombinaciju ATL i BTL usluga - offline i digital marketing`,
      `Da li znate da komunikacija može da bude presudna za uspeh vašeg poslovanja? Mi nudimo potpuno upravljanje njima. PR usluge, odnosi sa medijima, intervjui.`,
      `Mi smo ponosni na našu produkciju. U našem portfoliju se nalazi mnoštvo kreativnih i pohvaljenih video reklama i kampanja. Naš studio je opremljen najsavremenijom opremom.
      `,
      `Digitalni marketing je sastavni deo života svakoga od nas u Pro Marketing-u, zato stručno pomažemo brendovima da pronađu svoje mesto na Internetu (SEO, Dуmic ads...)
      `,
      `Posvećeni smo kreiranju korporativnog, savremenog dizajna, a cilj nam je da klijentima ponudimo najbolja vizuelna rešenja, obraćajući posebnu pažnju na celokupnu estetiku i detalje.
      `,
      `Mi ćemo vam pomoći da direktno komunicirate sa svojim korisnicima na društvenim mrežama kako bi njihova pažnja bila uvek usmerena na vaš brend.`,
    ],
    ["p", "m", "m", "p", "m", "p"],
  ];

  filter("a");
  let filterP = document.getElementById("filterP");
  let filterM = document.getElementById("filterM");
  let filterA = document.getElementById("filterA");

  function filter(param) {
    if (param != "a") {
      let newInfo = [[], [], [], []];
      let br = 0;

      for (let j in serviceInfo[3]) {
        if (serviceInfo[3][j] == param) {
          for (let i in serviceInfo) {
            newInfo[i].push(serviceInfo[i][j]);
          }
        }
      }
      let serviceInner = ``;

      for (let i in newInfo[0]) {
        serviceInner += `<div class="col-lg-4">
                          <div
                          class="service-item"
                          >
                          <div class="row">
                              <div class="col-lg-4">
                              <div class="icon">
                                  <img src="assets/images/${newInfo[0][i]}" alt="service image" />
                              </div>
                              </div>
                              <div class="col-lg-8">
                              <div class="right-content">
                                  <h4>${newInfo[1][i]}</h4>
                                  <p>
                                      ${newInfo[2][i]}
                                  </p>
                              </div>
                              </div>
                          </div>
                          </div>
                      </div>`;
      }
      servicesWrap.innerHTML = serviceInner;
    } else {
      let serviceInner = ``;

      for (let i in serviceInfo[0]) {
        serviceInner += `<div class="col-lg-4">
                            <div
                            class="service-item"
                            >
                            <div class="row">
                                <div class="col-lg-4">
                                <div class="icon">
                                    <img src="assets/images/${serviceInfo[0][i]}" alt="service image" />
                                </div>
                                </div>
                                <div class="col-lg-8">
                                <div class="right-content">
                                    <h4>${serviceInfo[1][i]}</h4>
                                    <p>
                                        ${serviceInfo[2][i]}
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>`;
      }
      servicesWrap.innerHTML = serviceInner;
    }
  }
  filterA.addEventListener("click", (e) => {
    e.preventDefault();
    filter("a");
  });
  filterM.addEventListener("click", (e) => {
    e.preventDefault();
    filter("m");
  });
  filterP.addEventListener("click", (e) => {
    e.preventDefault();
    filter("p");
  });
}
// DINAMICKI ISPIS NAVIGACIJE SA NODE-OVIMA, PRACENJE
// LOKACIJE NA STRANICI ZA AKTIVAN LINK, SPUSTANJE NAVIGACIJE NA SCROLL
function navigacija() {
  document.addEventListener("DOMContentLoaded", () => {
    let preloader = document.querySelector("#js-preloader");
    preloader.style.display = "none";
  });

  let nav = document.querySelector("nav");

  let logo = document.createElement("a");
  logo.setAttribute("href", "index.html");
  logo.setAttribute("class", "logo");
  let logoTitle = document.createElement("h4");
  let logoIcon = document.createElement("img");
  let logoSrc = "logo-icon.png";
  logoIcon.setAttribute("src", `assets/images/${logoSrc}`);
  logoIcon.setAttribute("alt", "logo");
  logoTitle.innerHTML = "PRO Marketing";
  logoTitle.appendChild(logoIcon);
  logo.appendChild(logoTitle);
  let navBar = document.createElement("ul");
  navBar.setAttribute("class", "nav");

  let navItems = [
    ["Početna", "Osobine", "O nama", "Usluge", "Portfolio", "Kontakt", "Autor"],
    [
      "index.html#top",
      "index.html#features",
      "index.html#about",
      "index.html#services",
      "index.html#portfolio",
      "index.html#contact",
      "author.html",
    ],
  ];
  for (let i = 0; i < navItems[0].length; i++) {
    let navItem = document.createElement("li");
    let navLink = document.createElement("a");
    navItem.setAttribute("class", "scroll-to-section");
    navLink.setAttribute("href", navItems[1][i]);
    navLink.textContent = navItems[0][i];
    if (i == navItems[0].length - 1) {
      navLink.innerHTML = `<div class="main-blue-button">
                                  <a href="${navItems[1][i]}">${navItems[0][i]}</a>
                              </div>`;
    }
    navItem.appendChild(navLink);
    navBar.appendChild(navItem);
  }

  let trigger = document.createElement("a");
  trigger.setAttribute("class", "menu-trigger ");
  trigger.innerHTML = "<span>Menu</span>";
  nav.innerHTML = "";
  nav.appendChild(logo);
  nav.appendChild(navBar);
  nav.appendChild(trigger);

  let navTrigger = document.querySelector(".menu-trigger");
  //   console.log("test");
  let hidden = true;
  navTrigger.addEventListener("click", () => {
    if (hidden == true) {
      navBar.style.display = "block";
      hidden = false;
    } else {
      hidden = true;
      navBar.style.display = "none";
    }
  });
  let checkNav = true;
  window.addEventListener("scroll", () => {
    let height = window.scrollY;
    let header = document.querySelector("header");
    // console.log(height);
    if (height > 300) {
      header.classList.add("position-fixed");
      const animacija1 = [
        { transform: "translateY(-100px)", opacity: "0" },
        { transform: "translateY(0px) ", opacity: "1" },
      ];
      const duzina = {
        duration: 500,
        iterations: 1,
      };
      if (checkNav) {
        header.animate(animacija1, duzina);
        checkNav = false;
      }
    } else if (height < 300) {
      header.classList.remove("position-fixed");
      checkNav = true;
    }
    let activeLinks = document.querySelectorAll("header .scroll-to-section");
    // console.log(activeLinks[0].classList.add("border-bottom"));
    if (height < 700) {
      //   console.log(first);
      for (let i = 0; i < activeLinks.length - 1; i++) {
        if (i == 0) {
          console.log(i);
          activeLinks[i].classList.add("border-bottom");
        } else {
          activeLinks[i].classList.remove("border-bottom");
        }
      }
    }
    if (height > 700 && height < 1500) {
      for (let i = 0; i < activeLinks.length - 1; i++) {
        if (i == 1) {
          activeLinks[i].classList.add("border-bottom");
        } else {
          activeLinks[i].classList.remove("border-bottom");
        }
      }
    }
    if (height > 1500 && height < 2300) {
      for (let i = 0; i < activeLinks.length - 1; i++) {
        if (i == 2) {
          activeLinks[i].classList.add("border-bottom");
        } else {
          activeLinks[i].classList.remove("border-bottom");
        }
      }
    }
    if (height > 2300 && height < 3300) {
      for (let i = 0; i < activeLinks.length - 1; i++) {
        if (i == 3) {
          activeLinks[i].classList.add("border-bottom");
        } else {
          activeLinks[i].classList.remove("border-bottom");
        }
      }
    }
    if (height > 3300 && height < 4100) {
      for (let i = 0; i < activeLinks.length - 1; i++) {
        if (i == 4) {
          activeLinks[i].classList.add("border-bottom");
        } else {
          activeLinks[i].classList.remove("border-bottom");
        }
      }
    }
    if (height > 4100 && height < 4300) {
      for (let i = 0; i < activeLinks.length - 1; i++) {
        if (i == 5) {
          activeLinks[i].classList.add("border-bottom");
        } else {
          activeLinks[i].classList.remove("border-bottom");
        }
      }
    }
  });
}
// ANIMIRANO PUNJENJE INFORMACIJA NA SCROLL
function about() {
  let aboutStats = document.getElementById("aboutStats");

  let statsInfo = [
    ["750", "340", "128"],
    ["Dana poslovanja", "Srećnih klijenata", "Projekata zavrseno"],
  ];

  let statsInner = ``;

  for (let i in statsInfo[0]) {
    statsInner += `<div class="col-lg-4 col-sm-4">
                        <div class="about-item">
                        <h4 class="stats-value">${statsInfo[0][i]}+</h4>
                        <h6>${statsInfo[1][i]}</h6>
                        </div>
                    </div>`;
  }
  aboutStats.innerHTML = statsInner;
  var hit = false;
  window.addEventListener("scroll", () => {
    let height = window.scrollY;
    if (height < 2000 && height > 1200 && hit == false) {
      hit = true;
      let stats = document.querySelectorAll(".stats-value");
      let statsVal = [];
      stats.forEach((element) => {
        statsVal.push(element.innerHTML.split("+")[0]);
      });
      for (let i in statsVal) {
        var tren = 0;
        setInterval(() => {
          if (tren <= statsVal[i]) {
            stats[i].innerHTML = tren++ + "+";
          }
        }, 2000 / statsVal);
      }
    }
  });
}
// DINAMICKO ISPISVANJE FOOTER INFORMACIJA
function footer() {
  let footerInfo = [
    [
      ["PRO Marketing"],
      "Pro Marketing je marketinška agencija koja se bavi bilo promovisanjem potpuno novog brenda na tržištu, brendiranje za postizanje boljih rezultata ili bilo čime što ima veze sa marketingom.",
    ],
    [
      ["Stranice"],
      ["Početna", "O nama", "Usluge", "Kontakt", "Autor"],
      [
        "index.html#top",
        "index.html#about",
        "index.html#services",
        "index.html#contact",
        "author.html",
      ],
    ],
    [
      ["Informacije"],
      [
        "Dokumentacija",
        "Braće Grim 12",
        "promarketing@gmail.com",
        "+381 69-1234-999",
      ],
      ["dokumentacija.pdf", "index.html", "index.html", "index.html"],
    ],
  ];

  let footerInner = ``;

  for (let i in footerInfo) {
    footerInner += `<div class="col-sm-4">
    <h4 class="fw-bold mb-3">${footerInfo[i][0]}</h4>`;
    if (i == 0) {
      footerInner += `<p class="text-start m-0">${footerInfo[i][1]}</p>`;
    } else {
      for (let j in footerInfo[i][1]) {
        footerInner += `<p class="text-start m-0"><a href="${footerInfo[i][2][j]}">${footerInfo[i][1][j]}</a></p>`;
      }
    }

    footerInner += `</div>`;
  }

  footerWrap.innerHTML = footerInner;
  let year = new Date();
  document.querySelector("#footerYear").innerHTML = year.getFullYear();
}
// DINAMICKO STAMPANJE GALERIJE, PROMENA GLAVNE SLIKE NA KLIK MALE,
// IZBACIVANJE DETALJA NA KLIK GLAVNE
function gallery() {
  var galleryInfo = [
    "portfolio-01.jpg",
    "portfolio-02.jpg",
    "portfolio-03.jpg",
    "portfolio-04.jpg",
    "portfolio-05.jpg",
    "portfolio-06.jpg",
  ];
  var projectInfo = [
    [
      `Snimanje reklame za projekat u studiju.`,
      `Najprecizniji plan i ideja projekta koju predstavljamo klijentu sa namerom da vidimo da li je zadovljan sa istim.`,
      `Analiziranje podataka koji su pušteni u promet da bi se videlo da li zadovoljavaju kriterijume.`,
      `Nekad je dobra skica pocetak velikog projekta.`,
      `Proces dogovara oko svih važnih detalja vezanim za projekat u prisustvu celog tima.`,
      `Dijagrami koji predstavljaju informacije o napredku projekta i njihovu detaljnu analizu.`,
    ],
  ];
  let galleryInner = ``;

  for (let i in galleryInfo) {
    galleryInner += `<div class="col-2 px-1">
                        <a href="#">
                        <img
                            src="/assets/images/${galleryInfo[i]}"
                            alt="gallery image"
                            id="portfolio${i}"
                            class="img-fluid p-image"
                        /></a>
                    </div>`;
  }
  galerija.innerHTML = galleryInner;

  for (let i in galleryInfo) {
    let pimage = document.getElementById(`portfolio${i}`);

    pimage.addEventListener("click", (e) => {
      e.preventDefault();
      let main = document.getElementById("main-image");

      main.src = pimage.src;
    });
  }
  var current = 0;
  setInterval(() => {
    let main = document.getElementById("main-image");
    main.src = "/assets/images/" + galleryInfo[current];
    current++;
    if (current > 5) current = 0;
  }, 5000);

  let main = document.getElementById("main-image");
  main.parentElement.addEventListener("click", (e) => {
    e.preventDefault();
    let modalImg = document.querySelector("#modalImage");
    let imgSrc = main.src;
    let imgNum = imgSrc.substring(imgSrc.length - 5, imgSrc.length - 4);
    console.log(imgSrc);
    modalImage.src = `/assets/images/${galleryInfo[imgNum - 1]}`;
    modalTitle.innerHTML = projectInfo[0][imgNum - 1];
    $("#portfolioModal").modal("show");
  });
  closeModal.addEventListener("click", () => {
    $("#portfolioModal").modal("hide");
  });
}
// DINAMICKI ISPIS INFORMACIJA, PROVERA FORME SA REGULARNIM IZRAZIMA
function contact() {
  let contactInfo = [
    ["contact-icon-01.png", "contact-icon-02.png", "contact-icon-03.png"],
    ["email icon", "phone", "location"],
    ["promarketing@gmail.com", "+381 69-1234-999", "Braće Grim 12"],
    ["index.html", "index.html", "index.html"],
  ];
  contactInfo.innerHTML = "";
  let contactUl = document.createElement("ul");
  for (let i in contactInfo[0]) {
    let li = document.createElement("li");
    let icon = document.createElement("div");
    icon.setAttribute("class", "icon");
    let img = document.createElement("img");
    img.setAttribute("src", `assets/images/${contactInfo[0][i]}`);
    img.setAttribute("alt", contactInfo[1][i]);
    // let link = document.createElement("a");
    // link.setAttribute("href", contactInfo[3][i]);
    let linkText = document.createTextNode(contactInfo[2][i]);
    // link.appendChild(linkText);
    icon.appendChild(img);
    li.appendChild(icon);
    li.appendChild(linkText);
    contactUl.appendChild(li);
  }
  infoContact.appendChild(contactUl);
  let form = document.forms[0];
  let mainButton = document.querySelector("#form-submit");

  let checkBox = form.option;
  checkBox.forEach((elem) => {
    elem.addEventListener("change", () => {
      elem.parentElement.nextElementSibling.innerHTML = elem.value;
      elem.parentElement.nextElementSibling.innerHTML = "";
      checkBox.forEach((e) => {
        if (e.checked) {
          e.parentElement.nextElementSibling.innerHTML += e.value + " ";
        }
      });
    });
  });
  mainButton.addEventListener("click", () => {
    let nameVal = /^([A-Z]([a-z]){2,18}\s)+([A-Z]([a-z]){2,18})$/;
    let emailVal = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
    let numberVal = /^06([0-9]){7,8}$/;
    let brGresaka = 0;
    if (!nameVal.test(form.name.value)) {
      form.name.nextElementSibling.innerHTML =
        "Loše upisano ime, primer: Uros Vladimirov";
      brGresaka++;
      form.name.classList.add("border-danger");
    } else {
      form.name.nextElementSibling.innerHTML = "";
      form.name.classList.remove("border-danger");
    }
    if (!emailVal.test(form.email.value)) {
      form.email.nextElementSibling.innerHTML =
        "Loše upisan email, primer: uros@gmail.com";
      brGresaka++;
      form.email.classList.add("border-danger");
    } else {
      form.email.nextElementSibling.innerHTML = "";
      form.email.classList.remove("border-danger");
    }
    if (!numberVal.test(form.number.value)) {
      form.number.nextElementSibling.innerHTML =
        "Loše upisan broj telefona, primer 0691113333";
      brGresaka++;
      form.number.classList.add("border-danger");
    } else {
      form.number.nextElementSibling.innerHTML = "";
      form.number.classList.remove("border-danger");
    }
    if (form.subject.value == 0) {
      form.subject.nextElementSibling.innerHTML = "Niste izabrali grad";
      brGresaka++;
      form.subject.classList.add("border-danger");
    } else {
      form.subject.nextElementSibling.innerHTML = "";
      form.subject.classList.remove("border-danger");
    }
    if (form.test.value == "") {
      form.test[0].parentElement.nextElementSibling.innerHTML =
        "Niste izabrali tip lica";
      brGresaka++;
    } else {
      form.test[0].parentElement.nextElementSibling.innerHTML = "";
    }
    if (form.message.value.length < 10) {
      form.message.nextElementSibling.innerHTML = "NIste uneli poruku";
      brGresaka++;
      form.message.classList.add("border-danger");
    } else {
      form.message.nextElementSibling.innerHTML = "";
      form.message.classList.remove("border-danger");
    }
    if (!brGresaka) {
      form.reset();
      formSuccess.innerHTML = "Uspešno ste poslali poruku!";
      optionsInfo.innerHTML = "";
      setTimeout(() => {
        formSuccess.innerHTML = "";
      }, 3000);
    }
  });
}
function indexPage() {
  cover();
  navigacija();
  animate();
  features();
  services();
  about();
  footer();
  gallery();
  contact();
  AOS.init();
}
function author() {
  navigacija();
  $(document).ready(function () {
    $("#readAuthor").next().hide();
    $("#readAuthor").click(function () {
      $(this).next().slideToggle();
      if ($(this).html() == "Pročitaj više") {
        $(this).html("Pročitaj manje");
      } else {
        $(this).html("Pročitaj više");
      }
    });
  });
  footer();
}
