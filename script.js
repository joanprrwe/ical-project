(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
const messages = [
    "masa siee",
    "yang bener kamuu??",
    "ih serius?:(",
    "kok kamu jahat...",
    "IH KOK GITU SIH",
    "serius kamu udah ga sayang aku...",
    "jahat banget...",
    "bilang klo boong pls...",
    "yaudah deh...",
    "IH PENCET YANG IJO GA?!! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.gak-button');
    const yesButton = document.querySelector('.cinta-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "cinta_pages.html";
}