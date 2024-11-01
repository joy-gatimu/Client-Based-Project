
    // Function to load the content file into the main layout
    function loadPageContent() {
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get('page') || "home"; // Default to "home" if no parameter

        let contentFile;
        if (page === "about") {
            contentFile = "content/about-content.html";
        } else if (page === "contact") {
            contentFile = "content/contact-content.html";
        } else if (page === "services") {
            contentFile = "content/services-content.html";
        } else {
            contentFile = "content/home-content.html";
        }

        fetch(contentFile)
            .then(response => response.text())
            .then(data => {
                document.getElementById("content-placeholder").innerHTML = data;

                // If on the home page, initialize the hero slider
                if (page === "home") {
                    console.log('home page');
                    
                    initializeHeroSlider();
                }
            })
            .catch(error => console.error("Error loading content:", error));
    }

    // Load page content when DOM is fully loaded
    document.addEventListener("DOMContentLoaded", loadPageContent);