$(function () {
  let container = $('#page-asd');
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
        "title": "ASD - Kemala",
        "poster": "https://img.doodcdn.co/snaps/un3vhg8856vd98cb.jpg",
        "link": "https://dood.la/e/jfve9az5kop2"
    },
    {
        "title": "ASD - Wally",
        "poster": "https://img.doodcdn.co/snaps/f2wjwakklx61rzkl.jpg",
        "link": "https://dood.la/e/aoo52hphq5hl"
    },
    {
        "title": "ASD - Por Ika Part 3",
        "poster": "https://img.doodcdn.co/snaps/953cznxlfafn02zw.jpg",
        "link": "https://dood.la/e/pek4ftztkljg"
    },
    {
        "title": "ASD - Por Ika Part 4",
        "poster": "https://img.doodcdn.co/snaps/iqltjwh1jtanwgt9.jpg",
        "link": "https://dood.la/e/yrn0da8zi2qe"
    },
    {
        "title": "ASD - Por Ika Part 2",
        "poster": "https://img.doodcdn.co/snaps/qyiyoe4bgboybmfk.jpg",
        "link": "https://dood.la/e/tkb1hp2c50zz"
    },
    {
        "title": "ASD - Por Ika",
        "poster": "https://img.doodcdn.co/snaps/pz2q1x5qkztxei5n.jpg",
        "link": "https://dood.la/e/0qdtspr2c0zi"
    },
    {
        "title": "ASD - Nanda",
        "poster": "https://img.doodcdn.co/snaps/qetj1abuvpogg5wi.jpg",
        "link": "https://dood.la/e/kp6vxhb4y209"
    },
    {
        "title": "ASD - Dear",
        "poster": "https://img.doodcdn.co/snaps/8286b4ywwam9bn5i.jpg",
        "link": "https://dood.la/e/wgwsrriuofu3"
    },
    {
        "title": "ASD - Jubjang 4",
        "poster": "https://img.doodcdn.co/snaps/ei9fy8uxfkhny7dj.jpg",
        "link": "https://dood.la/e/4hep02u0kq1m"
    },
    {
        "title": "ASD - Jubjang 3",
        "poster": "https://img.doodcdn.co/snaps/xhe573cadwlg7u7p.jpg",
        "link": "https://dood.la/e/gph6gx79sl22"
    },
    {
        "title": "ASD - Jubjang 2",
        "poster": "https://img.doodcdn.co/snaps/kz5rr1f866ccjy5c.jpg",
        "link": "https://dood.la/e/1045fbe0rweh"
    },
    {
        "title": "ASD - Jubjang 1",
        "poster": "https://img.doodcdn.co/snaps/p1galslcjsqvd030.jpg",
        "link": "https://dood.la/e/a3w2y7rvwofu"
    },
    {
        "title": "ASD - Winda",
        "poster": "https://img.doodcdn.co/snaps/kzwau6y88w1d43cd.jpg",
        "link": "https://dood.la/e/0x0tmi2ixv12"
    },
    {
        "title": "ASD - Kelly",
        "poster": "https://img.doodcdn.co/snaps/9o85t3ve7un9lw3m.jpg",
        "link": "https://dood.la/e/t6mc523qwz9s"
    },
    {
        "title": "ASD - Ria",
        "poster": "https://img.doodcdn.co/snaps/4gq0ikrmo3wvzccn.jpg",
        "link": "https://dood.la/e/4bl1425g0bef"
    },
    {
        "title": "ASD - Felly 1",
        "poster": "https://img.doodcdn.co/snaps/60x8jkxp9ddj44aw.jpg",
        "link": "https://dood.la/e/2t56sry4lu3e"
    },
    {
        "title": "ASD - Felly 2",
        "poster": "https://img.doodcdn.co/snaps/gjr1lhy0jd7b3qzl.jpg",
        "link": "https://dood.la/e/lvrchcn7pr1q"
    },
    {
        "title": "ASD - Lita",
        "poster": "https://img.doodcdn.co/snaps/fkax0ox5kvl2wbjc.jpg",
        "link": "https://dood.la/e/q281w7wohjx5"
    },
    {
        "title": "ASD - Noni",
        "poster": "https://img.doodcdn.co/snaps/hq11ujevcgxwsmr8.jpg",
        "link": "https://dood.la/e/brwpa23248ij"
    },
    {
        "title": "ASD - Rosa 1",
        "poster": "https://img.doodcdn.co/snaps/88syh3lj29kl5vsb.jpg",
        "link": "https://dood.la/e/2ln3pnws9t90"
    },
    {
        "title": "ASD - Rosa 2",
        "poster": "https://img.doodcdn.co/snaps/65kncr1ozfkh3lo8.jpg",
        "link": "https://dood.la/e/5tq62k5t3p6d"
    },
    {
        "title": "ASD - Febi",
        "poster": "https://img.doodcdn.co/snaps/yulrz0is0tdl8fz3.jpg",
        "link": "https://dood.la/e/p5am5er5r9mu"
    },
    {
        "title": "ASD - Anabel Gift",
        "poster": "https://img.doodcdn.co/snaps/5kynezlc1jn51mce.jpg",
        "link": "https://dood.la/e/kpohrl48syvm"
    },
    {
        "title": "ASD - Carren 3",
        "poster": "https://img.doodcdn.co/snaps/yljo2hljr11aycz8.jpg",
        "link": "https://dood.la/e/z2vk6r2mxoee"
    },
    {
        "title": "ASD - Carren 2",
        "poster": "https://img.doodcdn.co/snaps/0gh51ohxi1xibar1.jpg",
        "link": "https://dood.la/e/bnipvsbk3but"
    },
    {
        "title": "ASD - Carren",
        "poster": "https://img.doodcdn.co/snaps/1c6qpxglld4rj8f4.jpg",
        "link": "https://dood.la/e/0p8dg3fosxff"
    },
    {
        "title": "ASD - Nhei",
        "poster": "https://img.doodcdn.co/snaps/1tahgxhawqvav4mm.jpg",
        "link": "https://dood.la/e/q4k5mfojbofp"
    },
    {
        "title": "ASD - Nica",
        "poster": "https://img.doodcdn.co/snaps/f13wzrgxjsq73fof.jpg",
        "link": "https://dood.la/e/mcgslttjwx3w"
    },
    {
        "title": "ASD - Anabel Fuck",
        "poster": "https://img.doodcdn.co/snaps/o8jol9y36a0m9xn3.jpg",
        "link": "https://dood.la/e/9pq4l9nc40ju"
    },
    {
        "title": "ASD - Ethel",
        "poster": "https://img.doodcdn.co/snaps/rciw74si3axbg9ai.jpg",
        "link": "https://dood.la/e/9fq1l55jul4t"
    },
    {
        "title": "ASD - Shiela",
        "poster": "https://img.doodcdn.co/snaps/2rzoihcyx7p6c4xh.jpg",
        "link": "https://dood.la/e/sh4uk9j67pfx"
    },
    {
        "title": "ASD - Chesa",
        "poster": "https://img.doodcdn.co/snaps/iy4t6p37vzcf891c.jpg",
        "link": "https://dood.la/e/t25a5qvvoagl"
    },
    {
        "title": "ASD - Dalina",
        "poster": "https://img.doodcdn.co/snaps/77pjqip9l8i2c74r.jpg",
        "link": "https://dood.la/e/jtud1al8sbea"
    },
    {
        "title": "ASD - Delima",
        "poster": "https://img.doodcdn.co/snaps/puowlsuehs6ftjqj.jpg",
        "link": "https://dood.la/e/ndhun1m3ldwf"
    },
    {
        "title": "ASD - Soklla",
        "poster": "https://img.doodcdn.co/snaps/hencbd3mz8y9hs1u.jpg",
        "link": "https://dood.la/e/wowh518mjgab"
    },
    {
        "title": "ASD - Meew",
        "poster": "https://img.doodcdn.co/snaps/tmwl81fht8uubytu.jpg",
        "link": "https://dood.la/e/ozaz6pkbq43x"
    },
    {
        "title": "ASD - Zin",
        "poster": "https://img.doodcdn.co/snaps/bb4dpgpsugvflju1.jpg",
        "link": "https://dood.la/e/uto3gtezsidt"
    },
    {
        "title": "ASD - Lee May",
        "poster": "https://img.doodcdn.co/snaps/v5oy3ylgacnx1mrq.jpg",
        "link": "https://dood.la/e/4kdte9ny68qk"
    },
    {
        "title": "ASD - Maimun",
        "poster": "https://img.doodcdn.co/snaps/xfwws22lpc809xn2.jpg",
        "link": "https://dood.la/e/m8mxvqglf4qn"
    },
    {
        "title": "ASD - Indeela",
        "poster": "https://img.doodcdn.co/snaps/hst6v7jwne0n6l9o.jpg",
        "link": "https://dood.la/e/e8in86y4971y"
    },
    {
        "title": "ASD - Nid",
        "poster": "https://img.doodcdn.co/snaps/n2l5fvfmihlz1fex.jpg",
        "link": "https://dood.la/e/atp5eg2j2w3p"
    },
    {
        "title": "ASD - Anita",
        "poster": "https://img.doodcdn.co/snaps/r3y7mtlpdohpjuqo.jpg",
        "link": "https://dood.la/e/in7uvzk5nexl"
    },
    {
        "title": "ASD - May",
        "poster": "https://img.doodcdn.co/snaps/eg22i7g2nhr5h8k8.jpg",
        "link": "https://dood.la/e/648wq6saj5uu"
    },
    {
        "title": "ASD - Jennelyn Kathrin Camille",
        "poster": "https://img.doodcdn.co/snaps/l145nvu4yx2ev2ms.jpg",
        "link": "https://dood.la/e/gc0zyio651fd"
    }
  ],
  
  callback: function (data, pagination) {
      var dataHtml = '';
      $.each(data, function (index, item) {
          dataHtml += '<div class="row sort-item"><a href="' + item.link + '" target="_blank" style="color:black"><img id="poster" src="' + item.poster + '" width="100%" height="120" style="object-fit: cover;"></a><h6 id="juduljav" align="left">' + item.title + '</h6></div>';
          });

          $("#data-asd").html(dataHtml);
        }
    })
  })
