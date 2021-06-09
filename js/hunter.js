let bar = document.querySelector('.bar');


bar.addEventListener('click',function(){
    let navList = document.querySelector('.navList');

    if (navList.style.display === "none") {
        navList.style.display = "block";
    } else {
        navList.style.display = "none";
    }
})