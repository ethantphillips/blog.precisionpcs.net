
const allowed = [];

for (let i = 1; i <= 10; i++) {
  const envPin = import.meta.env[`PUBLIC_ADMIN_PIN_${i}`];
  if (envPin) allowed.push(envPin);
}

const underMaintenance = true;

if (underMaintenance && sessionStorage.getItem("maintenanceBypass") !== "true") {
  const code = prompt("This site is under maintenance. Enter access code:");
  if (allowed.includes(code)) {
    sessionStorage.setItem("maintenanceBypass", "true");
  } else {
    document.write("<h2 style='font-family:sans-serif;text-align:center;margin-top:20%'>Site is under maintenance.<br>Access denied.</h2>");
    throw new Error("Access denied due to maintenance.");
  }
}
// If the user has bypassed maintenance, we can continue with the rest of the script