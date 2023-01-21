const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", () => {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);

  const dayExists = nlwSetup.dayExists(today);
  dayExists
  let date = new Date()
  
    ? alert(`Dia ${today} já existe na tabela`)
    : nlwSetup.addDay(today);
  return;
});
form.addEventListener("change", async () => {
  await localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
});

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};

nlwSetup.setData(data);
nlwSetup.load();
