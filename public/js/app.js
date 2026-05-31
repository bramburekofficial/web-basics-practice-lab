// Tento soubor běží v prohlížeči, ne na Node.js serveru.
console.log("app.js se načetl v prohlížeči.");
console.log("Otevři Network a podívej se, které soubory si prohlížeč vyžádal.");

const messageButton = document.querySelector("#message-button");
const buttonResult = document.querySelector("#button-result");
const serverTime = document.querySelector("#server-time");
const statusDemo = document.querySelector("#status-demo");

if (messageButton && buttonResult) {
  messageButton.addEventListener("click", () => {
    buttonResult.textContent = "JavaScript změnil tento text po kliknutí na tlačítko.";
    console.log("Tlačítko bylo kliknuté.");
  });
}

async function loadServerTime() {
  if (!serverTime) {
    return;
  }

  try {
    const response = await fetch("/api/server-time");
    const data = await response.json();
    serverTime.textContent = `Čas ze serveru: ${data.serverTime}`;
    console.log("Response z /api/server-time:", data);
  } catch (error) {
    serverTime.textContent = "Čas ze serveru se nepodařilo načíst. Používáš http://localhost:3000?";
    console.error("Nepodařilo se načíst /api/server-time:", error);
  }
}

async function loadStatusDemo() {
  if (!statusDemo) {
    return;
  }

  try {
    const response = await fetch("/api/status-demo");
    const data = await response.json();
    const statusList = data.examples.map((item) => item.status).join(", ");
    statusDemo.textContent = `Ukázky status codes ze serveru: ${statusList}`;
    console.log("Response z /api/status-demo:", data);
  } catch (error) {
    statusDemo.textContent = "Ukázku status codes se nepodařilo načíst. Spusť lokální server a obnov stránku.";
    console.error("Nepodařilo se načíst /api/status-demo:", error);
  }
}

loadServerTime();
loadStatusDemo();
