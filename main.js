      
      // Simulate live data updates
      function updateDashboard() {
        const aqi = Math.floor(Math.random() * 30) + 35;
        const pm25 = Math.floor(Math.random() * 10) + 8;
        const co2 = Math.floor(Math.random() * 100) + 400;
        const humidity = Math.floor(Math.random() * 20) + 40;

        document.getElementById("aqi-value").textContent = aqi;
        document.getElementById("pm25-value").textContent = pm25;
        document.getElementById("co2-value").textContent = co2;
        document.getElementById("humidity-value").textContent = humidity + "%";
      }

      // Update dashboard every 5 seconds
      setInterval(updateDashboard, 5000);

      // Check air quality function
      function checkAirQuality() {
        alert(
          "🌿 Great news! Your current air quality is EXCELLENT (AQI: 42). Perfect for outdoor activities!"
        );
      }

     
      function sendMessage() {
        const input = document.getElementById("chat-input");
        const messages = document.getElementById("chat-messages");
        const message = input.value.trim();

        if (!message) return;

        

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });
    
      (function () {
        function c() {
          var b = a.contentDocument || a.contentWindow.document;
          if (b) {
            var d = b.createElement("script");
            d.innerHTML =
              "window.__CF$cv$params={r:'96f972d606ea5a18',t:'MTc1NTI2ODg0Mi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName("head")[0].appendChild(d);
          }
        }
        if (document.body) {
          var a = document.createElement("iframe");
          a.height = 1;
          a.width = 1;
          a.style.position = "absolute";
          a.style.top = 0;
          a.style.left = 0;
          a.style.border = "none";
          a.style.visibility = "hidden";
          document.body.appendChild(a);
          if ("loading" !== document.readyState) c();
          else if (window.addEventListener)
            document.addEventListener("DOMContentLoaded", c);
          else {
            var e = document.onreadystatechange || function () {};
            document.onreadystatechange = function (b) {
              e(b);
              "loading" !== document.readyState &&
                ((document.onreadystatechange = e), c());
            };
          }
        }
      })();

  