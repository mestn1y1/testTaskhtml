import perforations from "./data.js";

const container = document.getElementById("perforation-list");

const listItems = perforations
  .map(
    (item) => `
    <li class="perforation-list-item" data-id="${item.id}">
      ${item.Тип_перфорації}
      <div class="item-wrap">
        <img src="${item.imgSrc}" alt="${item.Тип_перфорації}" class="img" />
        <ul class="description-list">
          
            <li class="description-list-item">Призначення_відповідно_до_DIN: ${item.Призначення_відповідно_до_DIN}</li>
            <li class="description-list-item">Вид: ${item.Вид}</li>
            <li class="description-list-item">Діаметр_отвору: ${item.Діаметр_отвору}</li>
            <li class="description-list-item">Відстань: ${item.Відстань}</li>
            <li class="description-list-item">Отвори: ${item.Отвори}</li>
            <li class="description-list-item">Вільний_простір: ${item.Вільний_простір}</li>
            <li class="description-list-item"><a href="#">PDF</a></li>
             </ul>
      </div>
    </li>
  `
  )
  .join("");

container.innerHTML = listItems;
