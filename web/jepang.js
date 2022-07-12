$(function () {
  let container = $('#pagination8');
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
        "title": "SIRO-4955",
        "poster": "https://img.doodcdn.co/snaps/ze1s5e0nv1k13elw.jpg",
        "link": "https://dood.la/e/gj8clqkufjiy"
    },
    {
        "title": "MLA-081",
        "poster": "https://img.doodcdn.co/snaps/zjyzm04hq7ttje9b.jpg",
        "link": "https://dood.la/e/kdnu1bpekuwv"
    },
    {
        "title": "HEZ-443",
        "poster": "https://img.doodcdn.co/snaps/j3ijl0g2gwuk8dgu.jpg",
        "link": "https://dood.la/e/ze3fvm8rj44e"
    },
    {
        "title": "KNWF-002",
        "poster": "https://img.doodcdn.co/snaps/037ojmwv5twyjahf.jpg",
        "link": "https://dood.la/e/aguuxqobn9ty"
    },
    {
        "title": "KNWF-001",
        "poster": "https://img.doodcdn.co/snaps/y0f47nxbjbhk4054.jpg",
        "link": "https://dood.la/e/3jbws6dr138g"
    },
    {
        "title": "FC2-3030465-1",
        "poster": "https://img.doodcdn.co/snaps/igrci07e5s6a75p0.jpg",
        "link": "https://dood.la/e/ohedyp8x8hh1"
    },
    {
        "title": "FC2-3030465-2",
        "poster": "https://img.doodcdn.co/snaps/8u36qwjnb2udrodk.jpg",
        "link": "https://dood.la/e/qwios7ln2gho"
    },
    {
        "title": "FC2-3024968",
        "poster": "https://img.doodcdn.co/snaps/hho139iotq4lhgt4.jpg",
        "link": "https://dood.la/e/jkkxz8pujvjm"
    },
    {
        "title": "FC2-2939596",
        "poster": "https://telegra.ph/file/fb66a61d79d217995e5a0.jpg",
        "link": "https://dood.la/e/hw9c5l7934jp"
    },
    {
        "title": "FC2-2997894",
        "poster": "https://telegra.ph/file/43fc7d98cfd30d0d144fc.jpg",
        "link": "https://dood.la/e/zgqvwmsqvggj"
    },
    {
        "title": "FC2-2998613",
        "poster": "https://telegra.ph/file/f32d0971143830e0e3811.jpg",
        "link": "https://dood.la/e/y3xh3bi24dvz"
    },
    {
        "title": "PPZ-013",
        "poster": "https://telegra.ph/file/d9b370983c6044b766bff.jpg",
        "link": "https://dood.la/e/nupilu9j765b"
    },
    {
        "title": "DOKS-564",
        "poster": "https://telegra.ph/file/388d3e4b78c69113fc830.jpg",
        "link": "https://dood.la/e/i8v6ode9dey7"
    },
    {
        "title": "SUPA-616",
        "poster": "https://telegra.ph/file/a725a2350aa3e8ec4fe67.jpg",
        "link": "https://dood.la/e/4sb7xs8gg3yy"
    },
    {
        "title": "SIRO-4935",
        "poster": "https://telegra.ph/file/3e4da9cad0cc31f8e2ce2.jpg",
        "link": "https://dood.la/e/xbrh64apdpw0"
    },
    {
        "title": "TOTTE-054",
        "poster": "https://telegra.ph/file/223fff6b6044367618dd4.jpg",
        "link": "https://dood.la/e/z8omvuf237on"
    },
    {
        "title": "SHYN-149",
        "poster": "https://telegra.ph/file/7d74feb8e92a82530077f.jpg",
        "link": "https://dood.la/e/el0cdklvac1n"
    },
    {
        "title": "MUCH-026",
        "poster": "https://telegra.ph/file/b1a366e77e6b36eab4c7f.jpg",
        "link": "https://dood.la/e/i61f5s3cijat"
    },
    {
        "title": "JUFE-377",
        "poster": "https://telegra.ph/file/5858120fb30113cbb309e.jpg",
        "link": "https://dood.la/e/gw7udc6ti167"
    },
    {
        "title": "MIDE-991",
        "poster": "https://telegra.ph/file/5b00a87fb5879879928e5.jpg",
        "link": "https://dood.la/e/vj53dofaxvdq"
    },
    {
        "title": "MIDV-025",
        "poster": "https://telegra.ph/file/4af35afaaf5587068c196.jpg",
        "link": "https://dood.la/e/qvn7wl0ebv7t"
    },
    {
        "title": "MIDV-077",
        "poster": "https://telegra.ph/file/aee45c7ea95a122d9b38a.jpg",
        "link": "https://dood.la/e/vq10wkdf06y5"
    },
    {
        "title": "NKKD-213",
        "poster": "https://telegra.ph/file/c2a3201c7025ab3779694.jpg",
        "link": "https://dood.la/e/ysg4mfwwb2wg"
    },
    {
        "title": "PPPE-005",
        "poster": "https://telegra.ph/file/93cf98bb82574f382f0b0.jpg",
        "link": "https://dood.la/e/v301wuuvlujf"
    },
    {
        "title": "SSIS-127",
        "poster": "https://telegra.ph/file/e11f75aa6f9c8cbdd8992.jpg",
        "link": "https://dood.la/e/kqejawlxjze5"
    },
    {
        "title": "SSIS-307",
        "poster": "https://telegra.ph/file/4cf7e2b30587fffd12869.jpg",
        "link": "https://dood.la/e/g27yna6gwkn2"
    },
    {
        "title": "OPKT-030",
        "poster": "https://telegra.ph/file/b9ff3bab075158e9d1db6.jpg",
        "link": "https://dood.la/e/bpffo522yt81"
    },
    {
        "title": "SSIS-233",
        "poster": "https://telegra.ph/file/402f9bb64f564aabda3ab.jpg",
        "link": "https://dood.la/e/ce7vsoxoevxa"
    },
    {
        "title": "EVIS-366",
        "poster": "https://telegra.ph/file/a580655964dbde4a566e0.jpg",
        "link": "https://dood.la/e/cw56k0q2uk3t"
    },
    {
        "title": "ABP-146",
        "poster": "https://telegra.ph/file/ce57452b60146dfe9034d.jpg",
        "link": "https://dood.la/e/3b4m1qd2g5fj"
    },
    {
        "title": "GVH-211",
        "poster": "https://telegra.ph/file/415789b6c1ca42924e03a.jpg",
        "link": "https://dood.la/e/xn5in07qveot"
    },
    {
        "title": "STARS-241",
        "poster": "https://telegra.ph/file/d682a03becc44baae22dc.jpg",
        "link": "https://dood.la/e/oyajvo6dnl34"
    },
    {
        "title": "JUY-603",
        "poster": "https://telegra.ph/file/408f0489b9de14ea07dbb.jpg",
        "link": "https://dood.la/e/hty1bl46o9q3"
    },
    {
        "title": "NHDTB-189",
        "poster": "https://telegra.ph/file/f5d5889692d9d4199d460.jpg",
        "link": "https://dood.la/e/16slxwabe81j"
    },
    {
        "title": "SNIS-091",
        "poster": "https://telegra.ph/file/812faaac39f832e1d16b5.jpg",
        "link": "https://dood.la/e/0pzfu40wsuxf"
    },
    {
        "title": "GAS-391",
        "poster": "https://telegra.ph/file/fd7c3ec69a5f589f51e0f.jpg",
        "link": "https://dood.la/e/7ay37qnfha5d"
    },
    {
        "title": "SSIS-386",
        "poster": "https://telegra.ph/file/759bbaa3a4aaf7a800003.jpg",
        "link": "https://dood.la/e/uno92lghfgy5"
    },
    {
        "title": "ID-001",
        "poster": "https://telegra.ph/file/5c86b9a1ca1c4fc48b17e.jpg",
        "link": "https://dood.la/e/2k5fszvmf4qz"
    },
    {
        "title": "SDJS-137",
        "poster": "https://telegra.ph/file/c89ccf87eac894017cd7f.jpg",
        "link": "https://dood.la/e/qipmcr294sh2"
    },
    {
        "title": "SDNM-229",
        "poster": "https://telegra.ph/file/b9e38fc5caf464d360fa4.jpg",
        "link": "https://dood.la/e/oepqgj2wcmig"
    },
    {
        "title": "SDJS-141",
        "poster": "https://telegra.ph/file/549dca0b59669bddc6304.jpg",
        "link": "https://dood.la/e/p4eg6ha03k1n"
    },
    {
        "title": "SDJS-145",
        "poster": "https://telegra.ph/file/4e81caaf2b654e6be8ade.jpg",
        "link": "https://dood.la/e/5dgquqa61kks"
    },
    {
        "title": "MIMK-103",
        "poster": "https://telegra.ph/file/f9699b56518df6ad14ab4.jpg",
        "link": "https://dood.la/e/9khj0kwn2gm4"
    },
    {
        "title": "STARS-571",
        "poster": "https://telegra.ph/file/79bb06cbc6229e1d3882a.jpg",
        "link": "https://dood.la/e/82zarto4pdq8"
    },
    {
        "title": "SSIS-366",
        "poster": "https://telegra.ph/file/f2c474aa4292fae8dae28.jpg",
        "link": "https://dood.la/e/fbygf0r2lezz"
    },
    {
        "title": "JUL-593",
        "poster": "https://telegra.ph/file/390c29023121ec36fdc60.jpg",
        "link": "https://dood.la/e/zrlmo720e3ww"
    },
    {
        "title": "SPRD-1372",
        "poster": "https://telegra.ph/file/44dddf6b734594d1fc596.jpg",
        "link": "https://dood.la/e/rxgoaio01d8s"
    },
    {
        "title": "JUL-804",
        "poster": "https://telegra.ph/file/5623068e45324aa175c17.jpg",
        "link": "https://dood.la/e/az2zurjfy9l3"
    },
    {
        "title": "JUL-527",
        "poster": "https://telegra.ph/file/8adfc0c3b2bf221ced21d.jpg",
        "link": "https://dood.la/e/vrefoy7lzkmy"
    },
    {
        "title": "VENX-033",
        "poster": "https://telegra.ph/file/5ac493449232b12450818.jpg",
        "link": "https://dood.la/e/sa0zla7bzf4k"
    },
    {
        "title": "VENX-027",
        "poster": "https://telegra.ph/file/a28ad16ceee4ac508fe23.jpg",
        "link": "https://dood.la/e/gg79d52oaa3y"
    },
    {
        "title": "SSIS-181",
        "poster": "https://telegra.ph/file/4425b1a6fef9274f35755.jpg",
        "link": "https://dood.la/e/syc44u6q7fwc"
    },
    {
        "title": "AMBI-154",
        "poster": "https://telegra.ph/file/c01048a2cf204903c6e35.jpg",
        "link": "https://dood.la/e/s2bu4hc86twj"
    },
    {
        "title": "BF-631",
        "poster": "https://telegra.ph/file/b9fbf660f74d184de2143.jpg",
        "link": "https://dood.la/e/mh18ola0x2ev"
    },
    {
        "title": "SCPX-426",
        "poster": "https://telegra.ph/file/d4a762506146307481d26.jpg",
        "link": "https://dood.la/e/07wly4jkarad"
    },
    {
        "title": "SSIS-064",
        "poster": "https://telegra.ph/file/10e40f415f6f7bae2ad97.jpg",
        "link": "https://dood.la/e/8tv8didz6btn"
    },
    {
        "title": "SSIS-251",
        "poster": "https://telegra.ph/file/b24a52c442cdfce3ae5fd.jpg",
        "link": "https://dood.la/e/fuu7eduufvug"
    },
    {
        "title": "MIAA-519",
        "poster": "https://telegra.ph/file/3b9cf88b771d2774f5076.jpg",
        "link": "https://dood.la/e/cpoc0z1sxfmj"
    },
    {
        "title": "MIFD-070",
        "poster": "https://telegra.ph/file/01a7cad78adeebedb84ad.jpg",
        "link": "https://dood.la/e/mfkelrkadlqv"
    },
    {
        "title": "NNPJ-477",
        "poster": "https://telegra.ph/file/d39a1edb7d7d11f0d5262.jpg",
        "link": "https://dood.la/e/y2brzeg0e7t6"
    },
    {
        "title": "SW-455",
        "poster": "https://telegra.ph/file/9d2eba8a5828bb2d44db5.jpg",
        "link": "https://dood.la/e/wbpgdmrm8wyl"
    },
    {
        "title": "DASD-884",
        "poster": "https://telegra.ph/file/1ec4640bded5520effc7a.jpg",
        "link": "https://dood.la/e/jy1jpormmads"
    },
    {
        "title": "CAWD-382",
        "poster": "https://telegra.ph/file/9084b9a81b9e3c949c38b.jpg",
        "link": "https://dood.la/e/8r39df6p4rxt"
    },
    {
        "title": "ATID-505",
        "poster": "https://telegra.ph/file/4e5feb6e28bf577735aa2.jpg",
        "link": "https://dood.la/e/widb1ep8p21t"
    },
    {
        "title": "PRED-365",
        "poster": "https://telegra.ph/file/145badfb6c98b1000b370.jpg",
        "link": "https://dood.la/e/w3i487fwyfi3"
    },
    {
        "title": "SCPX-426",
        "poster": "https://telegra.ph/file/3207a98735c53c2b86cce.jpg",
        "link": "https://dood.la/e/bnibq9fbpmd9"
    },
    {
        "title": "SPRD-1506",
        "poster": "https://telegra.ph/file/bfd17fa505b7d55dc0975.jpg",
        "link": "https://dood.la/e/xbla26yr9e3i"
    },
    {
        "title": "SPRD-1253",
        "poster": "https://telegra.ph/file/bfc4ef1525a1871309a5d.jpg",
        "link": "https://dood.la/e/ah1z6uj0ahsx"
    },
    {
        "title": "MEYD-317",
        "poster": "https://telegra.ph/file/8f37b3890f02cc547e5f3.jpg",
        "link": "https://dood.la/e/00yltehlb6fk"
    },
    {
        "title": "RCTD-442",
        "poster": "https://telegra.ph/file/4c2bf97e2c67028fc589f.jpg",
        "link": "https://dood.la/e/mzktphtvc6a5"
    },
      ],
  
  callback: function (data, pagination) {
      var dataHtml = '';
      $.each(data, function (index, item) {
          dataHtml += '<div class="row sort-item"><a href="' + item.link + '" target="_blank" style="color:black"><img id="poster" src="' + item.poster + '" width="100%" height="120" style="object-fit: cover;"></a><p id="juduljav" align="left">' + item.title + '</p></div>';
          });

          $("#data-jav").html(dataHtml);
        }
    })
  })