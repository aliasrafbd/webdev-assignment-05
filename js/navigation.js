const el1 = document.getElementById("btn-blog");
if (el1) {
el1.addEventListener('click',function() {
    window.location.href = "./blog.html";
});
}

const el2 = document.getElementById("btn-home");
if (el2) {
el2.addEventListener('click',function() {
    window.location.href = "./index.html";
});
}
