const translations = {
  en: {
    home: "Home",
    resheniya: "Solutions",
    expertiza: "Expertise",
    kontakt: "Contact",
    text_hero: "By making the complex simple, we create your success",
  },
  ru: {
    home: "Главная",
    resheniya: "Решения",
    expertiza: "Экспертиза",
    kontakt: "Контакт",
    text_hero: "Делая сложное простым, мы создаем ваш успех",
  },
  uz: {
    home: "Bosh sahifa",
    resheniya: "Yechimlar",
    expertiza: "Ekspertiza",
    kontakt: "Kontakt",
    text_hero: "Kompleksni sodda qilib, biz sizning muvaffaqiyatingizni yaratamiz.",
  },
};

const changeLanguage = (lang) => {
  // Sahifadagi matnlarni o'zgartirish
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });

  const navLinks = document.querySelectorAll(".navbar li a");
  navLinks[0].textContent = translations[lang].home;
  navLinks[1].textContent = translations[lang].resheniya;
  navLinks[2].textContent = translations[lang].expertiza;
  navLinks[3].textContent = translations[lang].kontakt;

  const hero = document.querySelector(".hero-text");
  hero.textContent = translations[lang].text_hero;

  document.querySelectorAll("meta[id^='meta-']").forEach((meta) => {
    meta.remove();
  });

  const head = document.head;
  const newMeta = document.createElement("meta");
  newMeta.name = "keywords";
  newMeta.id = `meta-${lang}`;

  if (lang === "en") {
    newMeta.content =
      "Public procurement consulting, B2G sales optimization, Tender participation strategy, Government contract support, Procurement process improvement";
  } else if (lang === "ru") {
    newMeta.content =
      "Госзакупки оптимизация, Услуги B2G, Участие в тендерах, Консалтинговые услуги для госзакупок, Анализ тендерных предложений, Оптимизация закупочных процедур";
  } else if (lang === "uz") {
    newMeta.content =
      "Davlat xaridlari optimizatsiyasi, B2G bozoriga kirish, Tenderda ishtirok etish, Konsalting xizmatlari davlat uchun, Xaridlarni tahlil qilish";
  }

  head.appendChild(newMeta);

  document.documentElement.setAttribute("lang", lang);
};

document.querySelectorAll(".dropdown-menu a").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const lang = e.target.getAttribute("data-lang");
    changeLanguage(lang);
  });
});
