function homeData() {
    let homeUserName = document.getElementById("homeUserName");
    let logoutButton = document.getElementById("logoutButton");

    let homeUserId = localStorage.getItem('homeUserId');

    if (!homeUserId) {
        window.location.href = 'login.html';
        return;
    }

    fetch('https://66e7e6c1b17821a9d9da70a4.mockapi.io/login')
        .then((response) => response.json())
        .then((data) => {
            let homeUser = data.find(user => user.id == homeUserId);

            if (homeUser) {
                homeUserName.textContent = homeUser.name;
            } else {
                console.log('The user not found!');
                return;
            }
        });

    homeUserName.addEventListener("click", () => {
        logoutButton.style.display = (logoutButton.style.display == 'block') ? 'none' : 'block';
    })

    logoutButton.addEventListener("click", () => {
        localStorage.removeItem('homeUserId');
        window.location.href = 'login.html';
    })

}

homeData();