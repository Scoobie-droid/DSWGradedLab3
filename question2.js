let removeditems = 0;

document.getElementById("add").addEventListener("click", addItem);
document.getElementById("remove").addEventListener("click", removeItem);

function addItem() {
    let iteminput = document.getElementById("item");
    let itemtext = iteminput.value.trim();

    if (itemText !== "") {
        let list = document.getElementById("list");
        let listitem = document.createElement("li");
        listitem.innerText = itemtext;
        list.appendChild(listItem);
        applyColors(list);
    }

    iteminput.value = "";
}

function removeItem() {
    let iteminput = document.getElementById("item");
    let itemtext = iteminput.value.trim().toLowerCase();
    let list = document.getElementById("list");
    let listItems = list.getElementsByTagName("li");

    let itemremoved = false;

    for (let i = 0; i < listitems.length; i++) {
        if (listitems[i].innerText.trim().toLowerCase() === itemtext) {
            let removeditemtext = listItems[i].innerText;
            list.removeChild(listItems[i]);

            
            let removedtextelement = document.getElementById("removed-text");
            if (!removedtextE\element) {
                removedtextelement = document.createElement("p");
                removedtextelement.id = "removed-text";
                document.body.appendChild(removedtextelement);
            }
            removedtextelement.innerHTML = `<b style="color: red">${removeditemtext}</b> <span style="color: green">(${++removeditems} items removed)</span>`;
            document.querySelector("h1").innerText = `My To-Do List (${removeditems} items removed)`;

            itemremoved = true;

            
            applyColors(list);
            break;
        }
    }

    if (!itemremoved) {
        alert("Item not in list!");
    }

    iteminput.value = "";
}


function applyColors(list) {
    let listitems = list.getElementsByTagName("li");

    for (let i = 0; i < listitems.length; i++) {
        if ((i + 1) % 2 === 0) {
            listitems[i].style.backgroundClor = "yellow";
        } else {
            listitems[i].style.backgroundColor = "white";
        }
    }
}