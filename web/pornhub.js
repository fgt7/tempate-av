$(function () {
  let container = $('#paginationpornhub');
  container.pagination({
  pageSize: 30,
  showPageNumbers: false,
  showNavigator: true,
  formatNavigator: 'Hal. ke-<span style="color: #f00"><b><%= currentPage %></span></b>, <b><%= totalPage %></b> Halaman, <b><%= totalNumber %></b> Video',
  showGoInput: true,
  showGoButton: true,
  formatGoInput: 'Menuju halaman ke- <%= input %>',
  position: 'top',
  className: 'paginationjs-theme-blue',
  dataSource: [
    {
        "title": "PornHub 21 12 07 Julie Jess Babe Loves To Ride Dick Before School XXX 1080p MP4-GAYME",
        "poster": "https://img.doodcdn.co/snaps/pi4ojnuavl2tkjvn.jpg",
        "link": "https://dood.la/e/ivxb6ic9u5ja"
    },
    {
        "title": "PornHub 21 07 07 YinyLeon Hot Amateur Brunette Gets An Oily Massage With A Sexy Anal Fuck XXX 1080p MP4-PXXBAY",
        "poster": "https://img.doodcdn.co/snaps/8pzp7jhtdv7lyy1c.jpg",
        "link": "https://dood.la/e/j70jh4hm89na"
    },
    {
        "title": "PornHub 20 02 11 Fucking Hubby Before The Pornhub Awards XXX 1080p",
        "poster": "https://img.doodcdn.co/snaps/jygahxufsnb9i1yt.jpg",
        "link": "https://dood.la/e/64669ojnwgkg"
    }
  ],
  callback: function (data, pagination) {
      var dataHtml = '';
      $.each(data, function (index, item) {
          dataHtml += '<div class="row sort-item"><a href="' + item.link + '" target="_blank" style="color:black"><img id="poster" src="' + item.poster + '" width="100%" height="120" style="object-fit: cover;"></a><p id="juduldua" align="left">' + item.title + '</p></div>';
          });

          $("#data-pornhub").html(dataHtml);
        }
    })
  })