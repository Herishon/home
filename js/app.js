const li = document.querySelector(".my-event");


for(events of li) {
    events.addEventListener("mouseover", (e) => {
        alert("HI");
        console.log("mouse")
    })
}

function btnClick() {
    window.alert("Alert")
}