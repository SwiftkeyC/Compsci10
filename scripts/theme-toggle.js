(function () {
    var root = document.documentElement;
    var storageKey = "site-theme";
    var savedTheme = localStorage.getItem(storageKey);

    if (savedTheme === "light") {
        root.setAttribute("data-theme", "light");
    }

    var toggleButton = document.querySelector(".theme-toggle");

    function updateThemeIcons() {
        var isLight = root.getAttribute("data-theme") === "light";
        var iconImages = document.querySelectorAll("img[data-icon-dark][data-icon-light]");

        iconImages.forEach(function (img) {
            var darkSrc = img.getAttribute("data-icon-dark");
            var lightSrc = img.getAttribute("data-icon-light");
            img.setAttribute("src", isLight ? lightSrc : darkSrc);
        });
    }

    function updateAriaLabel() {
        if (!toggleButton) {
            return;
        }

        var isLight = root.getAttribute("data-theme") === "light";
        toggleButton.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    }

    updateThemeIcons();
    updateAriaLabel();

    if (!toggleButton) {
        return;
    }

    toggleButton.addEventListener("click", function () {
        var isLight = root.getAttribute("data-theme") === "light";

        if (isLight) {
            root.removeAttribute("data-theme");
            localStorage.setItem(storageKey, "dark");
        } else {
            root.setAttribute("data-theme", "light");
            localStorage.setItem(storageKey, "light");
        }

        updateThemeIcons();
        updateAriaLabel();
    });
})();
