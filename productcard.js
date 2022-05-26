productcard = document.getElementById("targetcard");

function toggleExpand() {
    console.log("working")
    productcard.classList.toggle("expand")

    
    }

document.getElementById("targetcard").onclick = toggleExpand
