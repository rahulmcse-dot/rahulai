async function loadData() {

    const { data, error } = await supabaseClient
        .from("trainingdata")
        .select("*")
        .order("id", { ascending: false });

    if (error) {
        console.error(error);

        document.getElementById("grid").innerHTML =
        `
        <div class="error">
            Unable to load data.
        </div>
        `;

        return;
    }

    const grid = document.getElementById("grid");

    grid.innerHTML = data.map(item => `
        <div class="card">

            <h3>${item.title || ""}</h3>

            <p>
                ${item.desc || ""}
            </p>

            ${
                item.tech
                ? `<span class="tag">${item.tech}</span>`
                : ""
            }

            ${
                item.link
                ? `
                <a
                    href="${item.link}"
                    target="_blank"
                >
                    Learn More →
                </a>
                `
                : ""
            }

        </div>
    `).join("");
}

document.addEventListener(
    "DOMContentLoaded",
    loadData
);
