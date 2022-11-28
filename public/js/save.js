const { application } = require("express");



function saveProperty(id) {
  if ($("#fav_" + id).attr("save") * 1 === 1) {
    showMessage("Property already a favorite");
  } else {
    $("#fav_" + id).attr({ save: 1, src: "/images/saved.png" });
    fetch("/api/properties/save/", {
      method: "post",
      body: JSON.stringify({
        id,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => showMessage("Property Liked"));
  }
}
async function goToDashboardHandler(event) {
    event.preventDefault();
    document.location.replace('/dashboard');
}

async function saveProperty(event) {
  event.preventDefault();
  document.location.replace('/favorites');
}

document.getElementById('editPartyBtn').addEventListener('click', editPartyHandler);
