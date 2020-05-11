const accomodationDiv = document.getElementById("accomodations");

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function fetchAccomodations(url) {
  fetch(url)
  .then(response => response.json())
  .then(accomodations => {
    return accomodations.map(accomodation => {
      let div = createNode('div'), img = createNode('img'), span = createNode('span'), containerTexts = createNode('div'), price = createNode('div'), container;
      img.src = accomodation.photo;
      price.innerHTML = `<strong>R$ ${accomodation.price}</strong>/noite`;
      span.innerHTML = accomodation.name;
      span.className = "add-three-dots";
      div.className = "accomodationGrid";
      containerTexts.className = "accomodationTexts"
      append(containerTexts, span);
      append(containerTexts, price);
      append(div, img);
      append(div, containerTexts);
      append(accomodationDiv, div);
    });
  })
  .catch((err) =>{
    console.log(err);
    console.log("<p>Houve um erro ao buscar os dados.</p>")
  });
}

function collapseName(name) {
  if(name.length > 20) {

  }
}

fetchAccomodations("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72");