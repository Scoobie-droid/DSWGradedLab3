let totalRemovedItems = 0;

document.getElementById("add").addEventListener("click", addItem);
document.getElementById("remove").addEventListener("click", removeItem);

function addItem() {
    let itemInput = document.getElementById("item");
    let itemText = itemInput.value.trim();

    if (itemText !== "") {
        let list = document.getElementById("list");
        let listItem = document.createElement("li");
        listItem.innerText = itemText;
        list.appendChild(listItem);
        applyColors(list);
    }

    itemInput.value = "";
}

function removeItem() {
    let itemInput = document.getElementById("item");
    let itemText = itemInput.value.trim().toLowerCase();
    let list = document.getElementById("list");
    let listItems = list.getElementsByTagName("li");

    let itemRemoved = false;

    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].innerText.trim().toLowerCase() === itemText) {
            let removedItemText = listItems[i].innerText;
            list.removeChild(listItems[i]);

            
            let removedTextElement = document.getElementById("removed-text");
            if (!removedTextElement) {
                removedTextElement = document.createElement("p");
                removedTextElement.id = "removed-text";
                document.body.appendChild(removedTextElement);
            }
            removedTextElement.innerHTML = `<b style="color: red">${removedItemText}</b> <span style="color: green">(${++totalRemovedItems} items removed)</span>`;
            document.querySelector("h1").innerText = `My To-Do List (${totalRemovedItems} items removed)`;

            itemRemoved = true;

            
            applyColors(list);
            break;
        }
    }

    if (!itemRemoved) {
        alert("Item not found in the list!");
    }

    itemInput.value = "";
}


function applyColors(list) {
    let listItems = list.getElementsByTagName("li");

    for (let i = 0; i < listItems.length; i++) {
        if ((i + 1) % 2 === 0) {
            listItems[i].style.backgroundColor = "yellow";
        } else {
            listItems[i].style.backgroundColor = "white";
        }
    }
}