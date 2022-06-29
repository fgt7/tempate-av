$((function() {
    $("#pagination3").pagination({
        pageSize: 10,
        showPageNumbers: !1,
        showNavigator: !0,
        formatNavigator: 'Hal. ke-<span style="color: #f00"><b><%= currentPage %></span></b>, <b><%= totalPage %></b> Halaman, <b><%= totalNumber %></b> Live',
        showGoInput: !0,
        showGoButton: !0,
        formatGoInput: "Menuju halaman ke- <%= input %>",
        position: "top",
        className: "paginationjs-theme-blue",
        dataSource: [{
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/teen.m3u8",
            title: "MyCamTV Teen Girls",
            id: "player1"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/milf.m3u8",
            title: "MyCamTV MILF",
            id: "player2"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/young.m3u8",
            title: "MyCamTV Young Girls",
            id: "player3"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/bigtits.m3u8",
            title: "MyCamTV Mature",
            id: "player4"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/arab.m3u8",
            title: "MyCamTV Arab Girls",
            id: "player5"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/ebony.m3u8",
            title: "MyCamTV Ebony Girls",
            id: "player6"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/asian.m3u8",
            title: "MyCamTV Asian Girls",
            id: "player7"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/brunette.m3u8",
            title: "MyCamTV Brunette Girls",
            id: "player8"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/latina.m3u8",
            title: "MyCamTV Latina Girls",
            id: "player9"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/white.m3u8",
            title: "MyCamTV White Girls",
            id: "player10"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/blonde.m3u8",
            title: "MyCamTV Blonde Girls",
            id: "player11"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/anal.m3u8",
            title: "MyCamTV Anal",
            id: "player12"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/bigass.m3u8",
            title: "MyCamTV Big Ass Girls",
            id: "player13"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/squirt.m3u8",
            title: "MyCamTV Girls Squirt",
            id: "player14"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/bigtits.m3u8",
            title: "MyCamTV Big Tits Girls",
            id: "player15"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/skinny.m3u8",
            title: "MyCamTV Skinny Girls",
            id: "player16"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/medium.m3u8",
            title: "MyCamTV Medium Girls",
            id: "player17"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "http://live.mycamtv.com/blowjob.m3u8",
            title: "MyCamTV Blowjob",
            id: "player18"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/milf.m3u8",
            title: "MILF Channel",
            id: "player19"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/bigdick.m3u8",
            title: "Big Dick Channel",
            id: "player20"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/bigtits.m3u8",
            title: "Big Tits Channel",
            id: "player21"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/fetish.m3u8",
            title: "Fetish Channel",
            id: "player22"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/pornstar.m3u8",
            title: "Pornstar Channel",
            id: "player23"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/bigass.m3u8",
            title: "Big Ass Channel",
            id: "player24"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/interracial.m3u8",
            title: "Interracial Channel",
            id: "player25"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/latina.m3u8",
            title: "Latina Channel",
            id: "player26"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/pov.m3u8",
            title: "POV Channel",
            id: "player27"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/blowjob.m3u8",
            title: "Blowjob Channel",
            id: "player28"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/teen.m3u8",
            title: "Teen Channel",
            id: "player29"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/hardcore.m3u8",
            title: "Hardcore Channel",
            id: "player30"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/cuckold.m3u8",
            title: "Cuckold Channel",
            id: "player31"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/threesome.m3u8",
            title: "Threesome Channel",
            id: "player32"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/russian.m3u8",
            title: "Russian Channel",
            id: "player33"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/lesbian.m3u8",
            title: "Lesbian Channel",
            id: "player34"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/livecams.m3u8",
            title: "Live Cams IPTV Channel",
            id: "player35"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/gangbang.m3u8",
            title: "Gangbang XXX IPTV Channel",
            id: "player36"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/rough.m3u8",
            title: "Rough Channel",
            id: "player37"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/anal.m3u8",
            title: "Anal Adult IPTV",
            id: "player38"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/compilation.m3u8",
            title: "Compilation XXX Channel",
            id: "player39"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/brunette.m3u8",
            title: "Brunette XXX IPTV",
            id: "player40"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/blonde.m3u8",
            title: "Blonde XXX Channel",
            id: "player41"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/gay.m3u8",
            title: "Gay IPTV Channel",
            id: "player42"
        }, {
            poster: "https://telegra.ph/file/9f8fa470cb1759e9466db.jpg",
            link: "https://cdn.adultiptv.net/asian.m3u8",
            title: "Asian XXX IPTV Channel",
            id: "player43"
        }],
        callback: function(t, e) {
            var l = "";
            $.each(t, (function(t, e) {
                l += '<div><video id="poster" poster="' + e.poster + '" id="' + e.id + '" playsinline controls width="100%" height="100%"><source src="' + e.link + '" type="video/mp4"></video><p style="align:center;font-size:16pt">' + e.title + "</p></div></div><br>"
            })), $("#data-live").html(l)
        }
    })
}));

const player = new Plyr('#player1');
const player2 = new Plyr('#player2');
const player3 = new Plyr('#player3');
const player4 = new Plyr('#player4');
const player5 = new Plyr('#player5');
const player6 = new Plyr('#player6');
const player7 = new Plyr('#player7');
const player8 = new Plyr('#player8');
const player9 = new Plyr('#player9');
const player10 = new Plyr('#player10');
const player11 = new Plyr('#player11');
const player12 = new Plyr('#player12');
const player13 = new Plyr('#player13');
const player14 = new Plyr('#player14');
const player15 = new Plyr('#player15');
const player16 = new Plyr('#player16');
const player17 = new Plyr('#player17');
const player18 = new Plyr('#player18');
const player19 = new Plyr('#player19');
const player20 = new Plyr('#player20');
const player21 = new Plyr('#player21');
const player22 = new Plyr('#player22');
const player23 = new Plyr('#player23');
const player24 = new Plyr('#player24');
const player25 = new Plyr('#player25');
const player26 = new Plyr('#player26');
const player27 = new Plyr('#player27');
const player28 = new Plyr('#player28');
const player29 = new Plyr('#player29');
const player30 = new Plyr('#player30');
const player31 = new Plyr('#player31');
const player32 = new Plyr('#player32');
const player33 = new Plyr('#player33');
const player34 = new Plyr('#player34');
const player35 = new Plyr('#player35');
const player36 = new Plyr('#player36');
const player37 = new Plyr('#player37');
const player38 = new Plyr('#player38');
const player39 = new Plyr('#player39');
const player40 = new Plyr('#player40');
const player41 = new Plyr('#player41');
const player42 = new Plyr('#player42');
const player43 = new Plyr('#player43');