
(function() {
  const underMaintenance = true; // Change to false to disable maintenance mode

  if (underMaintenance && sessionStorage.getItem("maintenanceBypass") !== "true") {
    const code = prompt("This site is under maintenance. Enter access code:");
    const allowedCodes = [];

    for (let i = 1; i <= 10; i++) {
      const envKey = `ADMIN_PIN_${i}`;
      const val = sessionStorage.getItem(envKey) || localStorage.getItem(envKey); // emulate env vars (Netlify runtime must pass into JS separately)
      if (val) allowedCodes.push(val);
    }

    if (allowedCodes.includes(code)) {
      sessionStorage.setItem("maintenanceBypass", "true");
      allowedCodes.forEach((val, i) => sessionStorage.setItem(`ADMIN_PIN_${i + 1}`, val));
    } else {
      document.write("<h2 style='font-family:sans-serif;text-align:center;margin-top:20%'>Site is under maintenance.<br>Access denied.</h2>");
      throw new Error("Access denied due to maintenance.");
    }
  }
})();
