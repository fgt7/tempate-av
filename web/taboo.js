$(function () {
  let container = $('#pagination10');
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
        "title": "PureTaboo 22 07 05 His 100th Foster",
        "poster": "https://img.doodcdn.co/snaps/x5oc5t46x7n5t43a.jpg",
        "link": "https://dood.la/e/sma79en9t070"
    },
    {
        "title": "PureTaboo 22 07 05 Her 100th Foster",
        "poster": "https://img.doodcdn.co/snaps/4b90rrlqwhulhgw5.jpg",
        "link": "https://dood.la/e/t9lmqgzrp9yk"
    },
    {
        "title": "PureTaboo 22 06 28 Once He's Out Of The Way...",
        "poster": "https://img.doodcdn.co/snaps/5kktb9p046p1ym5h.jpg",
        "link": "https://dood.la/e/jadip5t91r59"
    },
    {
        "title": "PureTaboo 22 06 21 Never Meet Your Heroes",
        "poster": "https://img.doodcdn.co/snaps/c2c9upfi1jvi5k4o.jpg",
        "link": "https://dood.la/e/qoq2mp70uw0q"
    },
    {
        "title": "PureTaboo 22 06 14 The Big Game: A Charly Summer Story",
        "poster": "https://img.doodcdn.co/snaps/dy07qk576gyp8ai8.jpg",
        "link": "https://dood.la/e/c39lngub8s2e"
    },
    {
        "title": "PureTaboo 22 06 07 Some Ground Rules...",
        "poster": "https://img.doodcdn.co/snaps/2ls9jba40o489y2d.jpg",
        "link": "https://dood.la/e/jlxmixs4py39"
    },
    {
        "title": "PureTaboo 22 05 31 Soaking",
        "poster": "https://img.doodcdn.co/snaps/ddse4100qjw0l5y3.jpg",
        "link": "https://dood.la/e/emt7abkva71r"
    },
    {
        "title": "PureTaboo 22 05 27 How Much We've Both Changed",
        "poster": "https://img.doodcdn.com/snaps/ur9gwv16x9a6tsop.jpg",
        "link": "https://dood.pm/e/lj34hfd6xj82gkg5lzpoqylqpr8eb315"
    },
    {
        "title": "PureTaboo 22 05 24 The Responsible One",
        "poster": "https://img.doodcdn.com/snaps/znry5yjbnwcign70.jpg",
        "link": "https://dood.pm/e/yd5nt4y6ojqhcgzt5mkhwrhq0v306i2u"
    },
    {
        "title": "PureTaboo 22 05 19 Textbook Narcissism",
        "poster": "https://img.doodcdn.com/snaps/xxfd5bejbn3oj9j4.jpg",
        "link": "https://dood.pm/e/gulvm48sorlbi3m6pe8qbgdjwg2wqvra"
    },
    {
        "title": "PureTaboo 22 05 17 Hook, Line And Sinker",
        "poster": "https://img.doodcdn.co/snaps/17k9fp424tqd9d80.jpg",
        "link": "https://dood.la/e/jbftgibq6srq"
    },
    {
        "title": "PureTaboo 22 05 10 Troublemakers",
        "poster": "https://img.doodcdn.com/snaps/2c5lxlafw4je3b17.jpg",
        "link": "https://dood.pm/e/heupft2dl88z9i8yqo2s1ie5w46qm9qn"
    },
    {
        "title": "PureTaboo 22 05 03 Nothing To Lose",
        "poster": "https://img.doodcdn.co/snaps/8qfpxnkinwrp55g7.jpg",
        "link": "https://dood.la/e/d6468xo05m5t"
    },
    {
        "title": "PureTaboo 22 04 26 Serial Breeder",
        "poster": "https://img.doodcdn.co/snaps/2jon5m1otvbanjgn.jpg",
        "link": "https://dood.la/e/wt8xyc0xqalh"
    },
    {
        "title": "PureTaboo 22 04 19 More Than She Bargained For",
        "poster": "https://img.doodcdn.com/snaps/pvrz7ip228ra69q9.jpg",
        "link": "https://dood.pm/e/6hax4udyr1xgd7hk3cqj175uwxc0f49g"
    },
    {
        "title": "PureTaboo 22 04 12 Dream Girl",
        "poster": "https://img.doodcdn.co/snaps/kyasx11qdlc12hwi.jpg",
        "link": "https://dood.la/e/ilp0urxlvld8"
    },
    {
        "title": "PureTaboo 22 04 07 Lost Little Lamb",
        "poster": "https://img.doodcdn.co/snaps/rnf7kdzqk65zpmvu.jpg",
        "link": "https://dood.la/e/a1sh1y5c1niz"
    },
    {
        "title": "PureTaboo 22 04 05 Deep Trouble",
        "poster": "https://img.doodcdn.co/snaps/3d6s3m64pbkojhuw.jpg",
        "link": "https://dood.la/e/purg4a2jxj6t"
    },
    {
        "title": "PureTaboo 22 03 29 Immortalized",
        "poster": "https://img.doodcdn.co/snaps/4l90b8w9ony7g4ne.jpg",
        "link": "https://dood.la/e/evzw8w9j3l0w"
    },
    {
        "title": "PureTaboo 22 03 22 The Bad Neighbors",
        "poster": "https://img.doodcdn.co/snaps/5bgz7q36jl8sg3pu.jpg",
        "link": "https://dood.la/e/b3urccaiwtlw"
    },
    {
        "title": "PureTaboo 22 03 17 Shared Hobbies",
        "poster": "https://img.doodcdn.co/snaps/q1x8t2zfvdph07ww.jpg",
        "link": "https://dood.la/e/y8ky2jzuh9mg"
    },
    {
        "title": "PureTaboo 22 03 15 Husband, Unleashed",
        "poster": "https://img.doodcdn.co/snaps/l0f09z7h076s3ott.jpg",
        "link": "https://dood.la/e/7lpymyyzhqee"
    },
    {
        "title": "PureTaboo 22 03 10 Stooping To Her Level",
        "poster": "https://img.doodcdn.co/snaps/b6bes0k0xfhcrsyc.jpg",
        "link": "https://dood.la/e/ylr3extmfe6s"
    },
    {
        "title": "PureTaboo 22 03 08 If You Can't Beat 'Em, Join 'Em",
        "poster": "https://img.doodcdn.co/snaps/d1r57cvco3ciseiw.jpg",
        "link": "https://dood.la/e/q2e7gikaey7j"
    },
    {
        "title": "PureTaboo 22 03 01 We Can't Be Seen Like This",
        "poster": "https://img.doodcdn.co/snaps/a8v63e7buxdzl3zt.jpg",
        "link": "https://dood.la/e/lcu4js353qph"
    },
    {
        "title": "PureTaboo 22 02 22 The Nanny Incident",
        "poster": "https://img.doodcdn.co/snaps/bq90gxgi0pkc69l6.jpg",
        "link": "https://dood.la/e/2nyjur7tjzq3"
    },
    {
        "title": "PureTaboo 22 02 17 Black Sheep",
        "poster": "https://img.doodcdn.com/snaps/bk09qnba93uuwzr2.jpg",
        "link": "https://dood.pm/e/rlh266pgaprnqvertq3h9e0tjxd70l34"
    },
    {
        "title": "PureTaboo 22 02 15 Chin Up, Buttercup",
        "poster": "https://img.doodcdn.co/snaps/lk072l0j1855tg5v.jpg",
        "link": "https://dood.la/e/w5gyte63jdgc"
    },
    {
        "title": "PureTaboo 22 02 10 With Friends Like Hers...",
        "poster": "https://img.doodcdn.com/snaps/j48pvqm4u64g69e3.jpg",
        "link": "https://dood.pm/e/vvmlfmnfoljsmnpvbzh665ht3h9qxuok"
    },
    {
        "title": "PureTaboo 22 02 08 The Only Way Out Is Through",
        "poster": "https://img.doodcdn.co/snaps/t1wfnso50mkszt44.jpg",
        "link": "https://dood.la/e/aktus2cor6jr"
    },
    {
        "title": "PureTaboo 22 02 01 All I Do Is Give",
        "poster": "https://img.doodcdn.co/snaps/ojdqn4z43iiwh2ne.jpg",
        "link": "https://dood.la/e/njxdz9kquz4p"
    },
    {
        "title": "PureTaboo 22 01 25 Whatever Keeps You Safe",
        "poster": "https://img.doodcdn.co/snaps/dse17v6slh27odxn.jpg",
        "link": "https://dood.la/e/uf576eekvh62"
    },
    {
        "title": "PureTaboo 22 01 18 Family Planning",
        "poster": "https://img.doodcdn.co/snaps/eznjooa4jelzj81o.jpg",
        "link": "https://dood.la/e/jt2b6b4q19xt"
    },
    {
        "title": "PureTaboo 22 01 13 Infidelity Clause",
        "poster": "https://img.doodcdn.co/snaps/nen46p43bwfobvqf.jpg",
        "link": "https://dood.la/e/6l230mx8qirc"
    },
    {
        "title": "PureTaboo 22 01 11 Clean Up Your Life",
        "poster": "https://img.doodcdn.co/snaps/2gn45edmsc9l5qzc.jpg",
        "link": "https://dood.la/e/ur4adoppz8u7"
    },
    {
        "title": "PureTaboo 22 01 04 Playing God",
        "poster": "https://img.doodcdn.co/snaps/7kvtgumpnqa9pxjk.jpg",
        "link": "https://dood.la/e/zoebcbyn4bss"
    },
    {
        "title": "PureTaboo 21 12 28 Sex Addicts Anonymous: Relapse",
        "poster": "https://img.doodcdn.com/snaps/t465gwbg6c9j3f0m.jpg",
        "link": "https://dood.pm/e/au9mw5kdlvlb1vo0fmw2ojl6ptu0l8tv"
    },
    {
        "title": "PureTaboo 21 12 21 It's Better To Be Sure",
        "poster": "https://img.doodcdn.com/snaps/5f0swux7ewrfwmje.jpg",
        "link": "https://dood.la/e/yrsggijcd9t0"
    },
    {
        "title": "PureTaboo 21 12 17 Canceled",
        "poster": "https://img.doodcdn.co/snaps/1y8pwg6h94dndfta.jpg",
        "link": "https://dood.la/e/fjxzh5ydozzc"
    },
    {
        "title": "PureTaboo 21 12 14 Anything Goes",
        "poster": "https://img.doodcdn.co/snaps/sf4xegarmejrqizy.jpg",
        "link": "https://dood.la/e/xvlhqs5yqbwp"
    },
    {
        "title": "PureTaboo 21 12 07 Fond Memories",
        "poster": "https://img.doodcdn.co/snaps/43l1mqz5xzsqg15c.jpg",
        "link": "https://dood.la/e/kch7omqmd85i"
    },
    {
        "title": "PureTaboo 21 11 30 Like What You See?",
        "poster": "https://img.doodcdn.co/snaps/r7ydb2a1s0qizqc7.jpg",
        "link": "https://dood.la/e/q9pzez1qpjn5"
    },
    {
        "title": "PureTaboo 21 11 24 How To Get Ahead",
        "poster": "https://img.doodcdn.co/snaps/gbl8er3skjsxtzxs.jpg",
        "link": "https://dood.la/e/4e0bdpuilgae"
    },
    {
        "title": "PureTaboo 21 11 23 Pushover",
        "poster": "https://img.doodcdn.co/snaps/edh1dj11e22msqfc.jpg",
        "link": "https://dood.la/e/jo2spuez2bfu"
    },
    {
        "title": "PureTaboo 21 11 18 The Captain's Slot",
        "poster": "https://img.doodcdn.co/snaps/t6h3r1yz8sqcg600.jpg",
        "link": "https://dood.la/e/n0ixbjyvzr7t"
    },
    {
        "title": "PureTaboo 21 11 16 Wrapped Around Her Finger",
        "poster": "https://img.doodcdn.co/snaps/ehv858t2xcz8smif.jpg",
        "link": "https://dood.la/e/cm0o6rkx4vqq"
    },
    {
        "title": "PureTaboo 21 11 09 Freely Given",
        "poster": "https://img.doodcdn.co/snaps/prfn7kxwtum1f00q.jpg",
        "link": "https://dood.la/e/7u02abhqi9wb"
    },
    {
        "title": "PureTaboo 21 11 05 Trigger Word",
        "poster": "https://img.doodcdn.co/snaps/u5cogwydhrug7k6z.jpg",
        "link": "https://dood.la/e/kvutgxx1uqpy"
    },
    {
        "title": "PureTaboo 21 11 02 The Uncomfortable Truth",
        "poster": "https://img.doodcdn.co/snaps/5t34la5wbibianpg.jpg",
        "link": "https://dood.la/e/efxz11vfr6lh"
    },
    {
        "title": "PureTaboo 21 07 22 Joanna Angel And Aliya Brynn Swapping Secretaries XXX 1080p MP4-PXXBAY",
        "poster": "https://img.doodcdn.co/snaps/hp9mg7yqhmps3uoj.jpg",
        "link": "https://dood.la/e/o04tzk4svj6w"
    },
    {
        "title": "PureTaboo 21 06 22 Nikky Thorne The Urge",
        "poster": "https://img.doodcdn.co/snaps/6pjbk6ztb63gk9f5.jpg",
        "link": "https://dood.la/e/i5sysqqovw6r"
    },
    {
        "title": "PureTaboo 20 12 22 Jane Wilde And Lauren Phillips Estranged Bedfellows XXX 1080p MP4-WRB",
        "poster": "https://img.doodcdn.co/snaps/z9mg6u22p4x6s406.jpg",
        "link": "https://dood.la/e/zttupybgzusq"
    },
    {
        "title": "PureTaboo 19 01 22 Alina Lopez Impregnating The Sitter",
        "poster": "https://img.doodcdn.co/snaps/536le2hhs6xffc3k.jpg",
        "link": "https://dood.la/e/u4i176zgvkh2"
    },
    {
        "title": "PureTaboo 18 11 22 Penny Pax Caught Between XXX 1080p",
        "poster": "https://img.doodcdn.co/snaps/ieq7kyu8wps8gcqa.jpg",
        "link": "https://dood.la/e/lb6dn5t8pmcx"
    },
    {
        "title": "PureTaboo 17 09 26 Crossing Borders",
        "poster": "https://img.doodcdn.com/snaps/7hl6ws9pphs48vvo.jpg",
        "link": "https://dood.pm/e/e7r0vai3rw012i6imr7gh948tl26d37r"
    },
    {
        "title": "PureTaboo 17 09 19 Half His Age - Part 1",
        "poster": "https://img.doodcdn.com/snaps/ajw1t456tastucxk.jpg",
        "link": "https://dood.pm/e/6avswrb70k8o5x1jd8k1rzi4r0hyosrm"
    },
    {
        "title": "PureTaboo 17 09 18 Divorce Bait",
        "poster": "https://img.doodcdn.com/snaps/eb81v9omp3hoinpx.jpg",
        "link": "https://dood.pm/e/efx8xlpc3a2hqichad2a849q2pgnkjyl"
    },
    {
        "title": "PureTaboo 17 09 17 Sloppy Seconds",
        "poster": "https://img.doodcdn.com/snaps/5nnxuhtqvp4qdymp.jpg",
        "link": "https://dood.pm/e/hcw6qdkp12jhpbjkr81wrv58eqtvwzip"
    },
    {
        "title": "PureTaboo 17 09 16 Daddy's Girls",
        "poster": "https://img.doodcdn.com/snaps/ex8f80tdabeg95ay.jpg",
        "link": "https://dood.pm/e/ck9nvy3akfwu6ie8ybomnmffmwk8dr5m"
    },
    {
        "title": "PureTaboo 17 09 15 A Charitable Man",
        "poster": "https://img.doodcdn.com/snaps/ztg0gix71juglquh.jpg",
        "link": "https://dood.pm/e/ee8qcog0w17266i6qfjf2kabj6kwn9kc"
    },
    {
        "title": "PureTaboo 17 09 14 Head of the House",
        "poster": "https://img.doodcdn.com/snaps/uhce3ndum8k7wwxo.jpg",
        "link": "https://dood.pm/e/0g9tr0vazvfrtzck6j2i8oenheupdiiv"
    },
    {
        "title": "PureTaboo 17 09 13 Behind the Mask",
        "poster": "https://img.doodcdn.com/snaps/wve8mmdqzk88bcsl.jpg",
        "link": "https://dood.pm/e/93wesyhucsg1k7e12c6t4ovr6f3d2opl"
    },
    {
        "title": "PureTaboo 17 09 12 Stretching for Daddy",
        "poster": "https://img.doodcdn.com/snaps/3oqyr6qdznmkghjx.jpg",
        "link": "https://dood.pm/e/3wj6quq391o35sh9j78mpo88n8fsnqot"
    },
    {
        "title": "PureTaboo 17 09 11 Keeping Mom Happy",
        "poster": "https://img.doodcdn.com/snaps/yj47dgl64jiv6gcz.jpg",
        "link": "https://dood.pm/e/b8l6fia1r568u9vhv464rnjhvc5popi6"
    },
    {
        "title": "PureTaboo 17 09 10 Doctor's Orders",
        "poster": "https://img.doodcdn.com/snaps/8vck0iwnftaqm0zx.jpg",
        "link": "https://dood.pm/e/je4jkspdscf5b821zw2egef0iblbfquv"
    },
    {
        "title": "PureTaboo 17 09 09 Girl Tagging",
        "poster": "https://img.doodcdn.com/snaps/xr6od20kap7fin9y.jpg",
        "link": "https://dood.pm/e/4bl90yfil335fsu65hmv1qj7d3qvb9wo"
    },
    {
        "title": "PureTaboo 17 09 08 Run Far Away",
        "poster": "https://img.doodcdn.com/snaps/q0bl8j27z4yc8wqw.jpg",
        "link": "https://dood.pm/e/3om3uipr3z7fjlzbrd5v97hvxi74sece"
    },
  ],
  
  callback: function (data, pagination) {
      var dataHtml = '';
      $.each(data, function (index, item) {
          dataHtml += '<div class="row sort-item"><a href="' + item.link + '" target="_blank" style="color:black"><img id="poster" src="' + item.poster + '" width="100%" height="120" style="object-fit: cover;"></a><p id="juduldua" align="left">' + item.title + '</p></div>';
          });

          $("#data-taboo").html(dataHtml);
        }
    })
  })