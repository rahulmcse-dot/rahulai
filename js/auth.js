import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
}
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const timer = setInterval(() => {

    if (window.firebaseAuth) {

        clearInterval(timer);

        initializeAuth();

    }

}, 200);

function initializeAuth() {

    const auth = window.firebaseAuth;

    const provider = new GoogleAuthProvider();

    const loginBtn =
        document.getElementById("loginBtn");

    if (loginBtn) {

        loginBtn.addEventListener(
            "click",
            async () => {

                try {

                    await signInWithPopup(
                        auth,
                        provider
                    );

                }
                catch (error) {

                    console.error(
                        "Login Error:",
                        error
                    );

                }

            }
        );

    }

    onAuthStateChanged(
        auth,
        (user) => {

            const authArea =
                document.getElementById(
                    "auth-area"
                );

            if (!user) {

                authArea.innerHTML = `
                    <button id="loginBtn">
                        Login with Google
                    </button>
                `;

                document
                    .getElementById("loginBtn")
                    .addEventListener(
                        "click",
                        async () => {

                            try {

                                await signInWithPopup(
                                    auth,
                                    provider
                                );

                            }
                            catch (error) {

                                console.error(
                                    error
                                );

                            }

                        }
                    );

                return;
            }

            authArea.innerHTML = `
                <div style="
                    display:flex;
                    align-items:center;
                    gap:10px;
                ">

                    <img
                        src="${user.photoURL}"
                        width="40"
                        height="40"
                        style="
                            border-radius:50%;
                        "
                    >

                    <span>
                        ${user.displayName}
                    </span>

                    <button id="logoutBtn">
                        Logout
                    </button>

                </div>
            `;

            document
                .getElementById(
                    "logoutBtn"
                )
                .addEventListener(
                    "click",
                    async () => {

                        try {

                            await signOut(auth);

                            location.reload();

                        }
                        catch (error) {

                            console.error(
                                error
                            );

                        }

                    }
                );
        }
    );
}
