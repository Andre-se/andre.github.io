function hesapla() {
  let n1 = document.harf_notu.vize.value;
  let n2 = document.harf_notu.final.value;
  let harfNotu = (Number(n1) + Number(n2)) / 2;

  let durum = "";

  if (harfNotu > 100) {
    durum = "Gecerli Bir Not Giriniz!";
  } else if (harfNotu < 100 && harfNotu >= 90) {
    durum = "Harf Notunuz : AA";
  } else if (harfNotu < 90 && harfNotu >= 80) {
    durum = "Harf Notunuz : AB";
  } else if (harfNotu < 80 && harfNotu >= 70) {
    durum = "Harf Notunuz : BB";
  } else if (harfNotu < 70 && harfNotu >= 60) {
    durum = "Harf Notunuz : BC";
  } else if (harfNotu < 60 && harfNotu >= 50) {
    durum = "Harf Notunuz : CC";
  } else if (harfNotu < 50 && harfNotu >= 40) {
    durum = "Harf Notunuz : CD";
  } else if (harfNotu < 40 && harfNotu >= 30) {
    durum = "Harf Notunuz : DD";
  } else if (harfNotu < 30) {
    durum = "Harf Notunuz : FF" + " " + "Kaldiniz!";
  } else {
    durum = "";
  }
  document.getElementById("sonuc").innerHTML = durum;
}
// * Hesap Makinesi
function c(val) {
  document.getElementById("result").value = val;
}
function v(val) {
  document.getElementById("result").value += val;
}
function e() {
  try {
    c(eval(document.getElementById("result").value));
  } catch (e) {
    c("Error");
  }
}

// * Kredi Notunu Hesaplama
function krediHesap() {
  let gel = document.kredi.gelir.value;
  let gid = document.kredi.gider.value;
  let krediNotu = Number(gel) - Number(gid);

  let durum = "";

  if (krediNotu < 5500) {
    durum = "Kredi Verilemez!";
  } else if (krediNotu > 5500) {
    durum = "Kredi Verilebilir.";
  } else {
    durum = "";
  }
  document.getElementById("krediSonuc").innerHTML = durum;
}

// **** Asgari Ucrete gore Maas zammi hesaplama
// * Kredi Notunu Hesaplama
function zamHesap() {
  let asgar1 = document.zam.asgari.value;
  let maas1 = document.zam.maas.value;

  let durum = "";

  if (maas1 < asgar1) {
    durum = "Maasiniz" + " " + Math.round(maas1 * 1.5) + " " + "olmustur.";
  } else if (maas1 > asgar1) {
    durum = "Maasiniz" + " " + Math.round(maas1 * 1.1) + " " + "olmustur.";
  } else {
    durum = "";
  }
  document.getElementById("zamSonuc").innerHTML = durum;
}
