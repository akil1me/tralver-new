var elForm = document.querySelector(".hero__form");
var elInput = elForm.querySelector(".hero__input");
var elInputCheck = elForm.querySelector(".hero__input-check");

var elOutputResult = document.querySelector(".output__result");
var elOutputSum = document.querySelector(".output__result-sum");
var elOutputChange = document.querySelector(".output__result-change");

var EKANOM_KLASS = 1000000;
var BIZNES_KLASS = 2000000;
var VIP_KLASS = 4000000;
var MAX_SUM = 5000000;

var SALE_EKANOM = 0.7 * EKANOM_KLASS;
var SALE_BIZNES = 0.7 * BIZNES_KLASS;
var SALE_VIP = 0.7 * VIP_KLASS;

var KURS = 10976;


elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var inputValue = Number(elInput.value);
  var inputCheck = elInputCheck.checked;

  var KURS_SUM = KURS * inputValue;
  var KURS_CHANHE_EKANOM = KURS_SUM - EKANOM_KLASS;
  var KURS_CHANHE_BIZNES = KURS_SUM - BIZNES_KLASS;
  var KURS_CHANHE_VIP = KURS_SUM - VIP_KLASS;



  if (inputValue < 0 || isNaN(inputValue)) {
    elOutputResult.setAttribute("class", "text-red");
    elOutputResult.textContent = "Musbat son kiriting";

    elOutputSum.textContent = "";
    elOutputChange.textContent = "";
  }
  // CHEGIRMA >>
  else if (inputCheck && inputValue >= (SALE_EKANOM / KURS) && inputValue < (SALE_BIZNES / KURS)) {
    elOutputResult.setAttribute("class", "text-green");
    elOutputResult.textContent = "Tabriklaymiz sizda 30% chegirma mavjud va siznig tarifingiz: Ekanom";
    elOutputSum.textContent = `Siz kiritgan summa: ${KURS_SUM} UZS`
    elOutputChange.textContent = `Qaytimingiz: ${KURS_SUM - SALE_EKANOM} UZS`
  }  // CHEGIRMA END

  else if (inputValue < (EKANOM_KLASS / KURS)) {
    elOutputResult.setAttribute("class", "text-red");
    elOutputResult.textContent = "Kechirasiz sizda yetarli summa yoq";

    elOutputSum.textContent = "";
    elOutputChange.textContent = "";

  }
  // CHEGIRMA >>
  else if (inputCheck && inputValue >= (SALE_BIZNES / KURS) && inputValue < (SALE_VIP / KURS)) {
    elOutputResult.setAttribute("class", "text-green");
    elOutputResult.textContent = "Tabriklaymiz sizda 30% chegirma mavjud va siznig tarifingiz: Biznes";
    elOutputSum.textContent = `Siz kiritgan summa: ${KURS_SUM} UZS`
    elOutputChange.textContent = `Qaytimingiz: ${KURS_SUM - SALE_BIZNES} UZS`
  }  // CHEGIRMA END

  else if (inputValue >= (EKANOM_KLASS / KURS) && inputValue < (BIZNES_KLASS / KURS)) {
    elOutputResult.setAttribute("class", "text-green");
    elOutputResult.textContent = "Tabriklaymiz sizning tarifingiz Ekanom";
    elOutputSum.textContent = `Siz kiritgan summa: ${KURS_SUM} UZS`
    elOutputChange.textContent = `Qaytimingiz: ${KURS_CHANHE_EKANOM} UZS`
  }

  // CHEGIRMA >>
  else if (inputCheck && inputValue >= (SALE_VIP / KURS) && inputValue < (MAX_SUM / KURS)) {
    elOutputResult.setAttribute("class", "text-green");
    elOutputResult.textContent = "Tabriklaymiz sizda 30% chegirma mavjud va siznig tarifingiz: Vip";
    elOutputSum.textContent = `Siz kiritgan summa: ${KURS_SUM} UZS`
    elOutputChange.textContent = `Qaytimingiz: ${KURS_SUM - SALE_VIP} UZS`
  } // CHEGIRMA END

  else if (inputValue >= (BIZNES_KLASS / KURS) && inputValue < (VIP_KLASS / KURS)) {
    elOutputResult.setAttribute("class", "text-green");
    elOutputResult.textContent = "Tabriklaymiz sizning tarifingiz Biznes";
    elOutputSum.textContent = `Siz kiritgan summa: ${KURS_SUM} UZS`
    elOutputChange.textContent = `Qaytimingiz: ${KURS_CHANHE_BIZNES} UZS`

  }

  else if (inputValue >= (VIP_KLASS / KURS) && inputValue < (MAX_SUM / KURS)) {
    elOutputResult.setAttribute("class", "text-green");
    elOutputResult.textContent = "Tabriklaymiz sizning tarifingiz Vip";
    elOutputSum.textContent = `Siz kiritgan summa: ${KURS_SUM} UZS`
    elOutputChange.textContent = `Qaytimingiz: ${KURS_CHANHE_VIP} UZS`

  }
  else if ((MAX_SUM / KURS)) {
    elOutputResult.setAttribute("class", "text-red");
    elOutputResult.textContent = "Kechirasiz siz juda ko`p summa kiritdingiz";

    elOutputSum.textContent = "";
    elOutputChange.textContent = "";
  }

})


elForm.addEventListener("reset", function (evt) {
  evt.preventDefault();

  elOutputResult.textContent = "";
  elOutputSum.textContent = "";
  elOutputChange.textContent = "";
  elInput.value = "";
})