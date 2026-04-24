let deferredPrompt;

const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {

    e.preventDefault();
    deferredPrompt = e;

    installBtn.style.display = "block";

});

installBtn.addEventListener("click", async () => {

    if (deferredPrompt) {

        deferredPrompt.prompt();

        const { outcome } = await deferredPrompt.userChoice;

        console.log(outcome);

        deferredPrompt = null;

    }

});

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("sw.js");

}
