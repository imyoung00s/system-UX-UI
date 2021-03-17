const gnbBtn = document.querySelector("#js-gnbBtn");
const header = document.querySelector("#header");
const content = document.querySelector("#js-content");
const dummy = document.querySelector(".dummy");

gnbWidthHandle();

function showingGnb() {
  gnbBtn.addEventListener("click", function () {
    header.classList.toggle("active");
    content.classList.toggle("active");
    dummyHandle();
  })
}

function gnbWidthHandle() {
  let winw = window.innerWidth;
  if (winw > 1200) {
    header.classList.add("active");
    content.classList.add("active");
    gnbBtn.classList.add("hidden");
    
  } else if (winw < 1200) {
    header.classList.remove("active");
    content.classList.remove("active");
    gnbBtn.classList.remove("hidden");
   
  }
}

function dummyHandle(){
  winw = window.innerWidth;
  if(winw < 800){
    dummy.classList.add("active");
  }else{
    dummy.classList.remove("active");
  }
}


/* $(document).mouseup(function (e){
  var LayerPopup = $(".layer-popup");
  if(LayerPopup.has(e.target).length === 0){
    LayerPopup.removeClass("show");
  }
}); */

function gnbClose(){
  dummy.addEventListener("click",function(){
    header.classList.remove("active");
    content.classList.remove("active");
    gnbBtn.classList.remove("hidden");
    dummy.classList.remove("active");
  })
}

function init() {
  showingGnb();
  gnbClose();
  window.addEventListener("resize", function () {
    gnbWidthHandle();
  })
}
init();

