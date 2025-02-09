document.addEventListener("DOMContentLoaded", function () {
    // Get category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");

    if (category) {
        document.getElementById("category-title").innerText = category.replace("-", " ").toUpperCase();

        // Example: Load relevant content dynamically
        document.getElementById("category-content").innerHTML = `<p>Welcome to the ${category.replace("-", " ")} section. Here are some top products...</p>`;
    }
});
