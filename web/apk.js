$(function () {
  let container = $('#page-apk');
  container.pagination({
  pageSize: 30,
  showPageNumbers: false,
  showNavigator: true,
  formatNavigator: 'Hal. ke-<span style="color: #f00"><b><%= currentPage %></span></b>, <b><%= totalPage %></b> Halaman, <b><%= totalNumber %></b> Aplikasi',
  showGoInput: true,
  showGoButton: true,
  formatGoInput: 'Menuju halaman ke- <%= input %>',
  position: 'top',
  className: 'paginationjs-theme-blue',
  dataSource: [
    {
        "title": "Ruang Imajinasi",
        "poster": "web/app/ri.jpg",
        "kategori": "Entertainment",
        "link": "https://sfile.mobi/ocpuru6afA7"
    },
    {
        "title": "Bling2 Live Mod",
        "poster": "web/app/bling2.png",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/hdqm6thjqmie/BLING2_MOD.apk.html"
    },
    {
        "title": "XNXX",
        "poster": "web/app/xnxx.png",
        "kategori": "Entertainment",
        "link": "https://apkadmin.com/nf00cq4azd8y/XNXX_2022.apk.html"
    },
    {
        "title": "NekoPoi",
        "poster": "web/app/nekopoi.jpg",
        "kategori": "Entertainment",
        "link": "https://sfile.mobi/1y2PHk4MBCQ7"
    },
    {
        "title": "Tata Live Mod",
        "poster": "web/app/tatalive.jpg",
        "kategori": "Entertainment",
        "link": "https://apkadmin.com/1exuwfe4elrf/TATA_LIVE_MOD.apk.html"
    },
    {
        "title": "69Live Mod",
        "poster": "web/app/69live.png",
        "kategori": "Entertainment",
        "link": "https://apkadmin.com/q73sgs9hcxnt/69_LIVE_MOD.apk.html"
    },
    {
        "title": "Mango Live Mod",
        "poster": "web/app/mango.webp",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/u53vnbpa2tc8/MANGO_LIVE_MOD.apk.html"
    },
    {
        "title": "MLiveU Mod",
        "poster": "web/app/mliveu.webp",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/kd7dqpyhxz7w/MLIVEU_MOD.apk.html"
    },
    {
        "title": "Bigo Live Mod",
        "poster": "web/app/bigo.webp",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/ywhuomkc01oy/BIGO_LIVE_MOD.apk.html"
    },
    {
        "title": "MGlobal Live Mod",
        "poster": "web/app/mglobal.png",
        "kategori": "LiveStream",
        "link": "https://droplink.co/U0zkTZg"
    },
    {
        "title": "Bunny Live Mod",
        "poster": "web/app/bunny.webp",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/ncgmcucn1p4w/BUNNY_LIVE_MOD.apk.html"
    },
    {
        "title": "Sakura Show Mod",
        "poster": "web/app/sakura.jpg",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/47uz03pjwaod/SAKURA_SHOW.apk.html"
    },
    {
        "title": "THLive Mod",
        "poster": "web/app/thlive.png",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/fypdigj30rtb/THLIVE_MOD.apk.html"
    },
    {
        "title": "MMLive Mod",
        "poster": "web/app/mmlive.jpg",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/dmukjuxsj76e/MMLIVE_MOD.apk.html"
    },
    {
        "title": "i69Live Mod",
        "poster": "web/app/i69.png",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/psmuc1rr16x2/i69LIVE_MOD.apk.html"
    },
    {
        "title": "YYLive Mod",
        "poster": "web/app/yylive.png",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/i1ilih0978gv/YYLIVE_MOD.apk.html"
    },
    {
        "title": "Chich Live Mod",
        "poster": "web/app/chich.png",
        "kategori": "LiveStream",
        "link": "https://droplink.co/dKs2mbgS"
    },
    {
        "title": "Odot Live Mod",
        "poster": "web/app/odot.jpg",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/4d0m9xm1zq6b/ODOT_LIVE.apk.html"
    },
    {
        "title": "Ligo Live Mod",
        "poster": "web/app/ligo.png",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/0r456ef3a9o7/LIGO_LIVE_MOD.apk.html"
    },
    {
        "title": "Hot Live Mod",
        "poster": "web/app/hotlive.jpg",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/tvyfxvxz5djz/HOT_LIVE_MOD.apk.html"
    },
    {
        "title": "Pink Live Mod",
        "poster": "web/app/pink.png",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/p1eb1qwr7mh6/PINK_LIVE.apk.html"
    },
    {
        "title": "Cake Live Mod",
        "poster": "web/app/cake.png",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/68btwhkrsi2b/CAKE_LIVE.apk.html"
    },
    {
        "title": "BuzzCast Mod",
        "poster": "web/app/buzzcast.webp",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/6ggf5vazhy9y/BUZZCAST_MOD.apk.html"
    },
    {
        "title": "Tomato Live Mod",
        "poster": "web/app/tomato.jpg",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/r1v3susgnmtj/TOMATO_LIVE.apk.html"
    },
    {
        "title": "Pear Live Mod",
        "poster": "web/app/pear.jpg",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/3tm8gm19tpsm/PEAR_LIVE_MOD.apk.html"
    },
    {
        "title": "Dream Live Mod",
        "poster": "web/app/dream.png",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/ffrydpew7daf/DREAM_LIVE_MOD.apk.html"
    },
    {
        "title": "567Live Mod",
        "poster": "web/app/567live.jpg",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/2ampk73615re/567_LIVE_MOD.apk.html"
    },
    {
        "title": "AIAILive Mod",
        "poster": "web/app/aiailive.png",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/ie2rjkx6of8c/AIAI_LIVE_MOD.apk.html"
    },
    {
        "title": "Moon Live Mod",
        "poster": "web/app/moonlive.png",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/37qewuo7j3xj/MOON_LIVE_MOD.apk.html"
    },
    {
        "title": "Bon Live Mod",
        "poster": "web/app/bonlive.png",
        "kategori": "LiveStream",
        "link": "https://apkadmin.com/mvdysbn7qxo6/Bon.Live_2.6.6.apk.html"
    },
    {
        "title": "Vibo Live Mod",
        "poster": "web/app/vibolive.png",
        "kategori": "LiveStream",
        "link": "https://droplink.co/bP0xq7"
    },
    {
        "title": "Komikcast",
        "poster": "web/app/kc.png",
        "kategori": "Entertainment",
        "link": "https://sfile.mobi/Y3XaiNgNmo7"
    },
    {
        "title": "TikTok 18+ Mod",
        "poster": "web/app/tiktok.png",
        "kategori": "Entertainment",
        "link": "https://apkadmin.com/m44ee5d4tp70/TIKTOK18PLUS.apk.html"
    },
    {
        "title": "IndXXX1",
        "poster": "web/app/indxxx.png",
        "kategori": "Entertainment",
        "link": "https://sfile.mobi/1FUnLEHZi8Y7"
    },
  ],
  
  callback: function (data, pagination) {
      var dataHtml = '';
      $.each(data, function (index, item) {
          dataHtml += '<div class="row sort-item"><a href="' + item.link + '" target="_blank" style="color:black"><img id="poster" src="' + item.poster + '" alt="' + item.title + '" width="100%" height="128" style="object-fit:cover;border-radius:30px"></a><span id="juduldua" style="font-size:11pt;margin-top:7px;margin-left:3px"><b>'+ item.title +'</b></span><span align="left" style="margin-top:-23px;margin-left:3px">' + item.kategori + '</span></div>';
          });

          $("#data-apk").html(dataHtml);
        }
    })
  })