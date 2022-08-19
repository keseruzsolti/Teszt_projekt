let form2 = document.getElementById("form2");

form2.onsubmit = async function (e) {
    e.preventDefault();

    let productName = document.getElementById("typeInputX2").value;
    let price = document.getElementById("typeInput2X2").value;

    let url = "http://localhost:3000/Products";
    let fet = await fetch(url,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name: productName, price: price})
    })
    //console.log(fet)

};