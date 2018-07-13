function openProduct(evt, product) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  document.getElementById(product).style.display = "block";
  evt.currentTarget.className += " active";
}

$(".js-scroll-about").click(function() {
    $('html,body').animate({
        scrollTop: $(".js-about").offset().top},'slow');
});

$(".js-scroll-services").click(function() {
    $('html,body').animate({
        scrollTop: $(".js-services").offset().top},'slow');
});

$(".js-scroll-cities").click(function() {
    $('html,body').animate({
        scrollTop: $(".js-cities").offset().top},'slow');
});

$(".js-scroll-products").click(function() {
    $('html,body').animate({
        scrollTop: $(".js-products").offset().top},'slow');
});

$(".js-scroll-online").click(function() {
    $('html,body').animate({
        scrollTop: $(".js-online").offset().top},'slow');
});
