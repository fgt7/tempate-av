var book = [
    {
        "title": "Playboy 1 - Januari 1954",
        "poster": "https://telegra.ru.com/p/d3302003x49bdb19db7beb60544c1279a5608613e25175f50",
        "link": "https://drive.google.com/file/d/1rBb0cBeKJQUEOQ-hasWiYZVSr5SrlpFl/preview"
    },
    {
        "title": "Playboy 2 - Februari 1954",
        "poster": "https://telegra.ru.com/p/d3302003x6c75102e7601ff903c6012c5f116d40225175f50",
        "link": "https://drive.google.com/file/d/1naDY1bU2oK97jN_qxkFgE0SUND6T9Sor/preview"
    },
    {
        "title": "Playboy 3 - Maret 1954",
        "poster": "https://telegra.ru.com/p/d3302003xaf446dcef4283388c1ef1801d95faa6325175f50",
        "link": "https://drive.google.com/file/d/tgdsFNIZD0Ef6WxGxCEG8ENPDar/preview"
    },
    {
        "title": "Playboy 4 - April 1954",
        "poster": "https://telegra.ru.com/p/d3302003x2adf4b833a297084f4ede896e2ba742125175f50",
        "link": "https://drive.google.com/file/d/1x5rrgCzzp9Hw5agwgD-8J-rUrfDRfF_q/preview"
    },
    {
        "title": "Playboy 5 - Mei 1954",
        "poster": "https://telegra.ru.com/p/d3302003x5204aae338e967fb2338518d0906b12e25175f50",
        "link": "https://drive.google.com/file/d/1E9Y2W68i-zZvvdbSxDe3VF0MEhsdjDXb/preview"
    },
];

var books = "";
	  
for (var i = 0; i < book.length; i++) {
	var nama = book[i].title,
		link = book[i].link,
		poster = book[i].poster;
	
	books += "<div class='book-card' data-nama='" + nama + "' data-preview='" + link + "' data-poster='"+ poster +"'><a class='button-book' href='' data-bs-toggle='modal' data-bs-target='#preview' data-obj='"+i+"'><img src='"+ poster +"' alt='" + nama + "' width='100%' style='aspect-ratio: 3/4;object-fit:cover;border-radius:10px' class='card-img-top'><div class='card-body'><p class='card-title mt-2'><b>"+ nama +"</b></p></div></div>";
}

$("#list-ebook").html(books);

$(document).ready(function(){
  var list = $("#list-ebook .book-card");
  var numToShow = 30;
  var button = $("#ebook-lainnya");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();

});

var bookLength = book.length;
var thisElement2 = 0;

function innerContent2(content){
  $(".inner-link-preview").attr("src",book[content].link);
};

$(".button-book").click(function(e){
  e.preventDefault();
  thisElement2 = $(this).attr("data-obj");
  innerContent2(thisElement2);
});

$(function() {
  $("#cariEbook").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    if (value.length) {
      $("#list-ebook .book-card").filter(function() {
        $("#list-ebook").show();
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    } else {
      $("#list-ebook").hide();
    }
  });
});