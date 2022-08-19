let productList = document.getElementById("termekek");
let sablon = " ";

 async function renderProducts() {
    let url = "http://localhost:3000/Products";
    let response = await fetch(url);
    let log = await response.json();

    console.log(log)

    for (termek of log) {
        sablon += `
    <div class="card" style="width: 12.5rem; text-align:center; margin-top:20px; margin-right:12px; background: #6a11cb;
    background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
    background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));">
    <div class="card-body">
      <h5 class="card-title" style="color:white">${termek.name}</h5>
      <p class="card-text"  style="color:white">${termek.price} Ft</p>
    </div>
  </div>`;
    }

    productList.innerHTML += sablon;
};

renderProducts()

