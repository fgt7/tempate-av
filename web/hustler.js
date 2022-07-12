$(function () {
  let container = $('#page-hustler');
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
        "title": "Hustler 22 07 11 MILF Performers Of The Year 2021",
        "poster": "https://img.doodcdn.com/snaps/c50d9skvq0clstgr.jpg",
        "link": "https://dood.pm/e/f2y0h9vhl7mgp9jewhi7t76ki2845csv"
    },
    {
        "title": "Hustler 22 07 09 Big Titty Office MILFs",
        "poster": "https://img.doodcdn.com/snaps/34wkq7xft69r0mku.jpg",
        "link": "https://dood.pm/e/5fgog4od937yxpdv8qxin25pj6mb95ye"
    },
    {
        "title": "Hustler 22 07 07 Club Elite 5 Interracial Edition",
        "poster": "https://img.doodcdn.com/snaps/wbhw62xphcethc0t.jpg",
        "link": "https://dood.pm/e/c5wt9hgbg1d64m01997ueal79g3gs751"
    },
    {
        "title": "Hustler 22 07 05 It's A Mommy Thing 11",
        "poster": "https://img.doodcdn.com/snaps/q6mkh9ry9s1up190.jpg",
        "link": "https://dood.pm/e/glwxljl439fxpwhw3jbkogqjnkqoime7"
    },
    {
        "title": "Hustler 22 07 03 Make It Precious",
        "poster": "https://img.doodcdn.com/snaps/vb0nmo6ketrb78ss.jpg",
        "link": "https://dood.pm/e/orpkx6p8kzgocszshfvjt3c6u574c1iq"
    },
    {
        "title": "Hustler 22 07 01 My Neighbors Bush",
        "poster": "https://img.doodcdn.com/snaps/lctksof6i2brqhb6.jpg",
        "link": "https://dood.pm/e/rdxjqvhh03csf3ccn8hs0bhkkrvnw3s3"
    },
  ],
  
  callback: function (data, pagination) {
      var dataHtml = '';
      $.each(data, function (index, item) {
          dataHtml += '<div class="row sort-item"><a href="' + item.link + '" target="_blank" style="color:black"><img id="poster" src="' + item.poster + '" width="100%" height="120" style="object-fit: cover;"></a><h6 id="judulsatu" align="left">' + item.title + '</h6></div>';
          });

          $("#data-hustler").html(dataHtml);
        }
    })
  })