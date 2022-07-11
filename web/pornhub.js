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
        "title": "PornHub 22 03 02 YinyLeon Thick Ass Wife Gets Her Reading Interrupted To Get Her Pussy Drilled XXX 1080p",
        "poster": "https://img.doodcdn.co/snaps/7a8x75je29n5xsm7.jpg",
        "link": "https://dood.la/e/k5p62l1s4yfn"
    },
    {
        "title": "PornHub 22 03 02 YinyLeon Thick Ass Wife Gets Her Ass And Pussy Fucked As Soon As She Opens Her Eyes XXX 1080p",
        "poster": "https://img.doodcdn.co/snaps/73dzuauzo814e31a.jpg",
        "link": "https://dood.la/e/6wyl34r7sea2"
    },
    {
        "title": "PornHub 22 03 02 YinyLeon Thick Ass Babe Stretched Her Asshole To Get A Long Lasting Fuck In The Ass XXX 1080p",
        "poster": "https://img.doodcdn.co/snaps/bfb95qacofi0zbu7.jpg",
        "link": "https://dood.la/e/d76nkrbkwcj7"
    },
    {
        "title": "PornHub 22 03 02 YinyLeon Hot Devoted Nun With Rounded Huge Ass Will Do Anything To Save A Soul XXX 1080p",
        "poster": "https://img.doodcdn.co/snaps/urvpnqh75j08ywx1.jpg",
        "link": "https://dood.la/e/wv4jpivni4sl"
    },
    {
        "title": "PornHub 22 03 02 YinyLeon Busty Amateur MILF Gets A Real Passionate And Rough Anal Fuck XXX 1080p",
        "poster": "https://img.doodcdn.co/snaps/4kuu27gvrvqml6te.jpg",
        "link": "https://dood.la/e/eo75xpzeuk0c"
    },
    {
        "title": "PornHub 22 03 02 YinyLeon Amateur Thick Ass MILF Gets A Sweaty Rough Fuck XXX 1080p",
        "poster": "https://img.doodcdn.co/snaps/yxu04p4snhbquasg.jpg",
        "link": "https://dood.la/e/opzdytnj9cnp"
    },
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