document.querySelector('.nav').addEventListener('click', (event) => {

    if ((event.target.matches('.nav, .nav *'))) {
        const navElement = document.querySelector('.nav');
        const sideBarElement = document.querySelector('.sidebar');

        navElement.classList.toggle('active');
        console.log(navElement);

        sideBarElement.classList.toggle('active');
    }

})