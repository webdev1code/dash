document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        alert("تم النقر على " + button.textContent); // عرض رسالة عند النقر على زر
    });
});
function minimizeWindow() {
    window.blur(); // يخرج النافذة من التركيز، وكأنها مصغرة
}

function maximizeWindow() {
    if (window.outerWidth < screen.width || window.outerHeight < screen.height) {
        window.moveTo(0, 0);
        window.resizeTo(screen.width, screen.height);
    } else {
        window.resizeTo(800, 600); // يرجعها للحجم الطبيعي
    }
}
