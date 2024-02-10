AFRAME.registerComponent("markerhandler", {
  init: async function() {
    this.el.addEventListener("markerFound", () => {
      console.log("Marker found!");
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      console.log("Marker Lost!");
      this.handleMarkerLost();
    });
  },
  handleMarkerFound: function() {
    var orderButtton = document.getElementById("order-button");
    orderButtton.addEventListener("click", () => {
      swal({
        title: "Order done!",
        timer: 2000,
        buttons: false
      });
    });
  },

  handleMarkerLost: function() {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  }
});
