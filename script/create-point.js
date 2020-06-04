window.addEventListener('load', () => getUFs());

function getUFs() {
    const ufSelect = document.querySelector("select[name=uf]");
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(resp => resp.json())
        .then(states => {
            for (let state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

function getCities(event) {
    const citySelect = document.querySelector("[name=city]");
    const stateInput = document.querySelector("[name=state]");
    const ufValue = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex;

    stateInput.value = event.target.options[indexOfSelectedState].text
   
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = `<option value>Selecione a Cidade</option>`
    citySelect.disabled = true;

    fetch(url)
        .then(resp => resp.json())
        .then(cities => {
            for (let city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false;
        })
}

document.querySelector("select[name=uf]").addEventListener("change", getCities)




const itemsToCollect = document.querySelectorAll(".items-grid li")

for(let item of itemsToCollect){
    item.addEventListener("click", handleSelecteditem)
}

const collectItems = document.querySelector("input[name=items]");

let selectedItems = [];

function handleSelecteditem(event) {
    
    const itemLi = event.target;

    itemLi.classList.toggle("selected");

    const itemId = itemLi.dataset.id;

    const alreadySelected = selectedItems.findIndex( item => item == itemId);

    if (alreadySelected >= 0) {

        const filteredItems = selectedItems.filter( item => item != itemId)

        selectedItems = filteredItems;

    } else {

        selectedItems.push(itemId)
    }

    collectItems.value = selectedItems;

}

