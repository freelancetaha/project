document.querySelector('.dropbtn').addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('activate');
});

document.querySelector('.icon').addEventListener('click', () => {
    document.querySelector('ul').classList.toggle('open');
});
    const images = document.querySelectorAll('.container .cont_1 img');
    let currentIndex = 0;

    document.querySelector('.right').addEventListener('click', () => {
        currentIndex++;
        if(currentIndex >= images.length){
            currentIndex = 0;
        }
        updateImagePositions();
    });
    document.querySelector('.left').addEventListener('click', () => {
        currentIndex--;
        if(currentIndex < 0){
            currentIndex = images.length - 1;
        }
        updateImagePositions();
    });

    function updateImagePositions() {
        images.forEach((img, index) => {
            const offset = index - currentIndex;
            img.style.transform = `translateX(${offset * 100}%)`;
            img.style.display = offset === 0 ? "block" : "none"; // Show only the current image
        });
    }
    
    updateImagePositions();