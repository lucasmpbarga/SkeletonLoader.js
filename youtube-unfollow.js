var unsubscribed = 0;

var myVar = setInterval(myTimer, 3000);

function myTimer() {
  var els = document
    .getElementById("grid-container")
    .getElementsByClassName("ytd-expanded-shelf-contents-renderer");

  if (0 < els.length) {
    els[0].querySelector("[aria-label^='Unsubscribe']").click();

    setTimeout(async function () {
      var unSubBtn = document.getElementById("confirm-button");

      await unSubBtn.children[0].children[0].click();

      await els[0].parentNode.removeChild(els[0]);

      unsubscribed++;

      console.log(unsubscribed + " unsubscribed by BARGA");

      console.log(els.length + " remaining");
    }, 1500);
  }
}
