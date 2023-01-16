const result = document.getElementById("result");

fetchData();

async function fetchData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");
    const { name, picture, location } = user;
    const { large } = picture;
    const { first, last } = name;
    const { city, country } = location;

    li.innerHTML = `
            <img src="${large}" alt="${first}">
            <div class="user-info">
                <h4>${first} ${last}</h4>
                <p>${city}, ${country}</p>
            </div>
        `;
    result.appendChild(li);
  });
}
