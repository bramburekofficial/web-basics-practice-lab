// This file runs in the browser, not on the Node.js server.
console.log("app.js loaded in the browser.");
console.log("Open the Network tab to see which files the browser requested.");

const messageButton = document.querySelector("#message-button");
const buttonResult = document.querySelector("#button-result");
const serverTime = document.querySelector("#server-time");
const statusDemo = document.querySelector("#status-demo");

if (messageButton && buttonResult) {
  messageButton.addEventListener("click", () => {
    buttonResult.textContent = "JavaScript changed this text after a button click.";
    console.log("The button was clicked.");
  });
}

async function loadServerTime() {
  if (!serverTime) {
    return;
  }

  try {
    const response = await fetch("/api/server-time");
    const data = await response.json();
    serverTime.textContent = `Server time: ${data.serverTime}`;
    console.log("Server time response:", data);
  } catch (error) {
    serverTime.textContent = "Server time failed. Are you using http://localhost:3000?";
    console.error("Could not fetch /api/server-time:", error);
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
    statusDemo.textContent = `Status examples from server: ${statusList}`;
    console.log("Status demo response:", data);
  } catch (error) {
    statusDemo.textContent = "Status demo failed. Start the local server and refresh.";
    console.error("Could not fetch /api/status-demo:", error);
  }
}

loadServerTime();
loadStatusDemo();

