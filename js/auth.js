onAuthStateChanged(auth, (user) => {

    const authArea = document.getElementById("auth-area");
    const adminLink = document.getElementById("adminLink");

    if (!user) {

        if (adminLink) {
            adminLink.style.display = "none";
        }

        authArea.innerHTML = `
            <button id="loginBtn">
                Login with Google
            </button>
        `;

        attachLoginHandler();

        return;
    }

    authArea.innerHTML = `
        <img
            src="${user.photoURL}"
            width="40"
            height="40"
            style="border-radius:50%;vertical-align:middle;"
        >

        <span>${user.displayName}</span>

        <button id="logoutBtn">
            Logout
        </button>
    `;

    if (user.email === "rahulmcse@gmail.com") {
        if (adminLink) {
            adminLink.style.display = "inline-block";
        }
    } else {
        if (adminLink) {
            adminLink.style.display = "none";
        }
    }

    attachLogoutHandler();
});
