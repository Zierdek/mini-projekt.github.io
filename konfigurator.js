const engine = document.getElementById("engine");
const gearboxRadios = document.querySelectorAll('input[name="gearbox"]');

const ENGINES = {
  "T2": { fuel: "Petrol",   capacity: "1.6L",  power: "100hp" },
  "T3": { fuel: "Petrol",   capacity: "1.6L",  power: "150hp" },
  "T4": { fuel: "Petrol",   capacity: "1.6L",  power: "180hp" },
  "T5": { fuel: "Petrol",   capacity: "2.5L",  power: "230hp" },

  "D2": { fuel: "Diesel",   capacity: "1.6L",  power: "115hp" },
  "D3": { fuel: "Diesel",   capacity: "2.0L",  power: "150hp" },
  "D4": { fuel: "Diesel",   capacity: "2.0L",  power: "177hp" },
  "D5": { fuel: "Diesel",   capacity: "2.4L",  power: "180hp" },

  "EV": { fuel: "Electric", capacity: "24kWh", power: "120hp" },
};

const GEARBOXES = { manual: "Manual", automatic: "Automatic" };

const sumFuel     = document.getElementById("sum-fuel");
const sumCapacity = document.getElementById("sum-capacity");
const sumPower    = document.getElementById("sum-power");
const sumGearbox  = document.getElementById("sum-gearbox");

function getGearbox() {
  return document.querySelector('input[name="gearbox"]:checked').value;
}

function updateSummary() {
  const data = ENGINES[engine.value];
  sumFuel.textContent     = data.fuel;
  sumCapacity.textContent = data.capacity;
  sumPower.textContent    = data.power;
  sumGearbox.textContent  = GEARBOXES[getGearbox()];
}

engine.addEventListener("change", updateSummary);
gearboxRadios.forEach(radio => radio.addEventListener("change", updateSummary));

updateSummary();