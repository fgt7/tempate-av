var viral = [
    {
        "title": "Andai Satu Kos Sama Ini Cewe [az79]",
        "poster": "https://telegra.ph/file/bc226cb62e114aa4a7d8e.jpg",
        "link": "https://dood.la/e/nt3i91jcurpn"
    },
    {
        "title": "Anak SMA Belajar Ngeue Fantasi Ngeue Nya Liar Banget [sika]",
        "poster": "https://img.doodcdn.co/snaps/5thsr2k9n6sc3v06.jpg",
        "link": "https://dood.la/e/u73kdwa23cod"
    },
    {
        "title": "Sama Kaka Tiri [vwhl]",
        "poster": "https://img.doodcdn.co/snaps/cwl90rf07ywlb5nb.jpg",
        "link": "https://dood.la/e/rz0hs8ehf3s6"
    },
    {
        "title": "Bokepin Viral Video Chandrika Chika TikTok",
        "poster": "https://img.doodcdn.co/snaps/s3r5j4wefntg9ekx.jpg",
        "link": "https://dood.la/e/vwhjm05z3kap"
    },
    {
        "title": "Seragam Pramuka",
        "poster": "https://img.doodcdn.co/snaps/xdr1blvf5vl0vm33.jpg",
        "link": "https://dood.la/e/r94v4hrwiei3"
    },
    {
        "title": "Mekinya Itu Loh Masi Sempit [hhnf]",
        "poster": "https://img.doodcdn.co/snaps/xot8r8adw5r3ehyv.jpg",
        "link": "https://dood.la/e/skjms091ivfq"
    },
    {
        "title": "Xbokep Viral Chika Tiktok 20 Juta ??",
        "poster": "https://img.doodcdn.co/snaps/8p107o9vdwuxgn77.jpg",
        "link": "https://dood.la/e/c89e52ry4iup"
    },
    {
        "title": "Kelakuan Anak Jaman Sekarang [dyt9]",
        "poster": "https://img.doodcdn.co/snaps/9uvuo37uc3fiedm0.jpg",
        "link": "https://dood.la/e/p257fzpjm0me"
    },
    {
        "title": "Ukhti Ngentot Yuk Sama Aku [4oa1]",
        "poster": "https://img.doodcdn.co/snaps/xzrzfix7o16ndw08.jpg",
        "link": "https://dood.la/e/pcpnvvi37xn0"
    },
    {
        "title": "Ketauan Colyy Sama ART Tapi Malah di Temanin Colyy [44l0]",
        "poster": "https://img.doodcdn.co/snaps/utubzqypvry8193o.jpg",
        "link": "https://dood.la/e/muofdwqtdxpq"
    },
    {
        "title": "Tante Udah Nafs Banget Akhirnya Kluar Didalem Deh [71uc]",
        "poster": "https://img.doodcdn.co/snaps/88zikbg536et2icb.jpg",
        "link": "https://dood.la/e/cdcltd3ro3ir"
    },
    {
        "title": "Temen Main Ke Kos Eh Malah Nawarin Ngewe [s78e]",
        "poster": "https://img.doodcdn.co/snaps/vhjc4m00nr22l2yq.jpg",
        "link": "https://dood.la/e/4y7v52rwh0bp"
    },
    {
        "title": "Ngewe Berdiri Susunya Kenceng Banget [lslk]",
        "poster": "https://img.doodcdn.co/snaps/01rgolndw2lt6yp1.jpg",
        "link": "https://dood.la/e/0szk7y8zppmg"
    },
    {
        "title": "Pasrah di Ewe Sama Ayang [eggv]",
        "poster": "https://img.doodcdn.co/snaps/a1jwnxekcoup18pn.jpg",
        "link": "https://dood.la/e/tjcgmm4f0ny2"
    },
    {
        "title": "Lagi Nyuci Malah Diewe Dari Belakang [apld]",
        "poster": "https://img.doodcdn.co/snaps/3s57qzqnl2o2rcns.jpg",
        "link": "https://dood.la/e/sliafhvl7pxc"
    },
    {
        "title": "Sayang Sange Banget Desahannya [i0w1]",
        "poster": "https://img.doodcdn.co/snaps/1q7xwkq48e91tr49.jpg",
        "link": "https://dood.la/e/lubxh36diixk"
    },
    {
        "title": "Gilaa Hoki Banget Ini Ojol Di Prank Cewe Super Cantik [uxn4]",
        "poster": "https://img.doodcdn.co/snaps/rmnwhahf6362qeoj.jpg",
        "link": "https://dood.la/e/e69vlatf9hcp"
    },
    {
        "title": "SMA Ngentot Di Mobil Sama Om Takut Kalo Goyang2 Mobilnya Digerebeg Dari Belakang [hdyj]",
        "poster": "https://img.doodcdn.co/snaps/og2tkpov9q4pz1a9.jpg",
        "link": "https://dood.la/e/grmrae9yrki4"
    },
    {
        "title": "Diewe Kaka Ipar Sendiri",
        "poster": "https://img.doodcdn.co/snaps/m1b93au6k3i6r11o.jpg",
        "link": "https://dood.la/e/qiw6tsdtsyof"
    },
    {
        "title": "Dipijet Mbak Cantik [esfe]",
        "poster": "https://img.doodcdn.co/snaps/jic9jr3np5ofz0q3.jpg",
        "link": "https://dood.la/e/ddhntyluqp4j"
    }
];
	
var viralLength = viral.length;
//Empty container:
$("#list-viral").empty();
//Loop:
for (i=0; i<viralLength; i++) {
  //Create thumb structure:
  var listItem =
    '<div class="block2">'+
    		'<a href="'+viral[i].link+'" target="_blank">'+
    			'<img id="poster" src="'+viral[i].poster+'" alt="" class="block__image2" width="100%" height="120px"/>'+
    		'</a>'+
    		'<p class="block__title2">'+viral[i].title+'</p>'+
    '</div>';
  $("#list-viral").append(listItem);
};