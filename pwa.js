// pwa.js

if ("serviceWorker" in navigator) {

  window.addEventListener("load", () => {

    navigator.serviceWorker.register("./service-worker.js")
    .then(reg => {

      console.log("✅ Service Worker Registered");

      // 🔥 Update detect
      reg.onupdatefound = () => {

        const newWorker = reg.installing;

        newWorker.onstatechange = () => {

          if (newWorker.state === "installed") {

            if (navigator.serviceWorker.controller) {

              // New update available
              console.log("🔄 New Update Available");

              if (confirm("नई अपडेट आ गई है, Reload करें?")) {
                window.location.reload();
              }

            } else {

              console.log("📦 App Cached First Time");

            }

          }

        };

      };

    })
    .catch(err => {
      console.log("❌ Service Worker Error:", err);
    });

  });

}