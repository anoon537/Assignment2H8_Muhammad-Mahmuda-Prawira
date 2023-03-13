const myButton = document.getElementById("btn-submit");
const myForm = document.getElementById("myForm");

myButton.addEventListener("click", function () {
  // Mendapatkan elemen deskripsi profil
  const profilNama = document.getElementById("nama-desk");
  const profilRole = document.getElementById("role-desk");
  const profilAvailability = document.getElementById("availability-desk");
  const profilUsia = document.getElementById("usia-desk");
  const profilLokasi = document.getElementById("lokasi-desk");
  const profilPengalaman = document.getElementById("exp-desk");
  const profilEmail = document.getElementById("email-desk");

  // Mendapatkan elemen form
  const formNama = document.getElementById("nama");
  const formRole = document.getElementById("role");
  const formAvailability = document.getElementById("availability");
  const formUsia = document.getElementById("age");
  const formLokasi = document.getElementById("lokasi");
  const formPengalaman = document.getElementById("yearsexperience");
  const formEmail = document.getElementById("email");

  // Menampilkan data pada form
  formNama.value = profilNama.textContent;
  formRole.value = profilRole.textContent;
  formAvailability.value = profilAvailability.textContent.substring(2);
  formUsia.value = profilUsia.textContent.substring(2);
  formLokasi.value = profilLokasi.textContent.substring(2);
  formPengalaman.value = profilPengalaman.textContent.substring(2);
  formEmail.value = profilEmail.textContent.substring(2);
});

// Cek apakah ada data yang tersimpan di Local Storage
const data = JSON.parse(localStorage.getItem("data"));
if (data) {
  const { name, role, availability, age, location, experience, email } = data;
  const myName = document.getElementById("nama-desk");
  const myRole = document.getElementById("role-desk");
  const myAvailability = document.getElementById("availability-desk");
  const myAge = document.getElementById("usia-desk");
  const myLocation = document.getElementById("lokasi-desk");
  const myExperience = document.getElementById("exp-desk");
  const myEmail = document.getElementById("email-desk");

  myName.textContent = name;
  myRole.textContent = role;
  myAvailability.textContent = ": " + availability;
  myAge.textContent = ": " + age;
  myLocation.textContent = ": " + location;
  myExperience.textContent = ": " + experience;
  myEmail.textContent = ": " + email;
}

myButton.addEventListener("click", function () {
  if (myForm.style.display === "none") {
    myForm.style.display = "block";
  } else {
    myForm.style.display = "none";
  }
});

const myForm1 = document.querySelector("#myForm form");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("nama").value;
  const role = document.getElementById("role").value;
  const availability = document.getElementById("availability").value;
  const age = document.getElementById("age").value;
  const location = document.getElementById("lokasi").value;
  const experience = document.getElementById("yearsexperience").value;
  const email = document.getElementById("email").value;

  // Simpan data di Local Storage
  const data = { name, role, availability, age, location, experience, email };
  localStorage.setItem("data", JSON.stringify(data));

  const myName = document.getElementById("nama-desk");
  const myRole = document.getElementById("role-desk");
  const myAvailability = document.getElementById("availability-desk");
  const myAge = document.getElementById("usia-desk");
  const myLocation = document.getElementById("lokasi-desk");
  const myExperience = document.getElementById("exp-desk");
  const myEmail = document.getElementById("email-desk");

  myName.textContent = name;
  myRole.textContent = role;
  myAvailability.textContent = ": " + availability;
  myAge.textContent = ": " + age;
  myLocation.textContent = ": " + location;
  myExperience.textContent = ": " + experience;
  myEmail.textContent = ": " + email;

  myForm1.reset();
  myForm.style.display = "none";
});
