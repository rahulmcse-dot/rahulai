import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const waitForFirebase = setInterval(() => {

    if (window.firebaseAuth) {

        clearInterval(waitForFirebase);

        initializeAuth();

    }

}, 200);

function initializeAuth() {

    const auth = window.firebaseAuth;

    const provider = new GoogleAuthProvider();

    function attachLoginHandler() {

        const loginBtn =
            document.getElementById("loginBtn");

        if (!loginBtn) return;

        loginBtn.onclick = async () => {

            try {

                await signInWithPopup(
                    auth,
                    provider
                );

            }
            catch (error) {

                console.error(error);

            }

        };
    }

    function attachLogoutHandler() {

        const logoutBtn =
            document.getElementById("logoutBtn");

        if (!logoutBtn) return;

        logoutBtn.onclick = async () => {

            try {

                await signOut(auth);

            }
            catch (error) {

                console.error(error);

            }

        };
    }

    onAuthStateChanged(auth, (user) => {

        const authArea =
            document.getElementById("auth-area");

        const adminLink =
            document.getElementById("adminLink");

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

            <span>
                ${user.displayName}
            </span>

            <button id="logoutBtn">
                Logout
            </button>
        `;

        if (
            user.email ===
            "rahulmcse@gmail.com"
        ) {

            if (adminLink) {
                adminLink.style.display =
                    "inline-block";
            }

        } else {

            if (adminLink) {
                adminLink.style.display =
                    "none";
            }

        }

        attachLogoutHandler();

    });

}
