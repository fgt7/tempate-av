$(function () {
  let container = $('#page-komik');
  container.pagination({
  pageSize: 30,
  showPageNumbers: false,
  showNavigator: true,
  formatNavigator: 'Hal. ke-<span style="color: #f00"><b><%= currentPage %></span></b>, <b><%= totalPage %></b> Halaman, <b><%= totalNumber %></b> Komik',
  showGoInput: true,
  showGoButton: true,
  formatGoInput: 'Menuju halaman ke- <%= input %>',
  position: 'top',
  className: 'paginationjs-theme-blue',
  dataSource: [
    {
        "title": "Is There No Goddes In My College",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Is-There-No-Goddes-In-My-College.jpg?resize=165,225",
        "episode": "Chapter 38",
        "link": "https://droplink.co/8lkUUFDp"
    },
    {
        "title": "Welcome to Kids Café",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Welcome-To-The-Kid-Cafe.jpg?resize=165,225",
        "episode": "Chapter 22",
        "link": "https://droplink.co/mSXmC"
    },
    {
        "title": "Queen Bee",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Queen-Bee.jpg?resize=165,225",
        "episode": "Chapter 227",
        "link": "https://droplink.co/MlU2joo"
    },
    {
        "title": "Daughter Friend",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Daughter-Friend.jpg?resize=165,225",
        "episode": "Chapter 55",
        "link": "https://droplink.co/FJ9GHp"
    },
    {
        "title": "Eskrim Guin dan Rafaela",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Eskrim-Guin-dan-Rafaela.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/a9q7W19"
    },
    {
        "title": "Teacher Lesson",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Teacher-Lesson.jpg?resize=165,225",
        "episode": "Chapter 17",
        "link": "https://droplink.co/pn4O8"
    },
    {
        "title": "Kaikan Sprint",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Kaikan-Sprint.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/FDaNy"
    },
    {
        "title": "Apakah Ini Bisa Masuk?",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Apakah-Ini-Bisa-MAsuk.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/03Mju"
    },
    {
        "title": "Mamaku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Mamaku.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/hC6P"
    },
    {
        "title": "Menggoda Bawahan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Menggoda-Bawahan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/DPv5S"
    },
    {
        "title": "Ibu Temanku Menggodaku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Ibu-Temanku-Menggodaku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/vWjWH"
    },
    {
        "title": "Bersembunyi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Bersembunyi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/4S0jZ"
    },
    {
        "title": "An Ardent Teaching Life",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/An-Ardent-Teaching-Life.jpg?resize=165,225",
        "episode": "Chapter 15",
        "link": "https://droplink.co/ChWvn"
    },
    {
        "title": "Staying With Ajumma",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Living-With-Ajumma.jpg?resize=165,225",
        "episode": "Chapter 22",
        "link": "https://droplink.co/4VZm"
    },
    {
        "title": "Understanding of Flirting",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Understanding-of-Flirting-1.jpg?resize=165,225",
        "episode": "Chapter 31",
        "link": "https://droplink.co/WmUKpx"
    },
    {
        "title": "Everything About Best Friend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Everything-About-Best-Friend.jpg?resize=165,225",
        "episode": "Chapter 63",
        "link": "https://droplink.co/UqVKIy"
    },
    {
        "title": "Rahasia Antara Aku dan Adikku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Rahasia-Antara-Aku-dan-Adikku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/OClx7lqV"
    },
    {
        "title": "Penjaga Asrama Seksi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Penjaga-Asrama-Seksi.gif?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/GpXwqU"
    },
    {
        "title": "Karyawan Dipermainkan Siswi SMA",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Karyawan-Dipermainkan-Siswi-SMA.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/mcPp8S"
    },
    {
        "title": "Cowo Diperkosa Cewe",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Cowo-Diperkosa-Cewe.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/LfkDzkNH"
    },
    {
        "title": "Tertatih Tatih",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Tertatih-Tatih.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/oniw"
    },
    {
        "title": "The Night King Using App",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/The-Night-King-Using-App.jpg?resize=165,225",
        "episode": "Chapter 22",
        "link": "https://droplink.co/VvVgybX"
    },
    {
        "title": "Komik Madloki Queen Beee",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-queenbee.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/TLRG"
    },
    {
        "title": "Today’s Dinner Is You",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Todays-Dinner-Is-You.jpg?resize=165,225",
        "episode": "Chapter 34",
        "link": "https://droplink.co/wtpEc7"
    },
    {
        "title": "My Sister’s Friends",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/My-Sisters-Friends.jpg?resize=165,225",
        "episode": "Chapter 27",
        "link": "https://droplink.co/xskBDlaN"
    },
    {
        "title": "It’s Okay Because We Are Family",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Its-Okay-Because-We-Are-Family.jpg?resize=165,225",
        "episode": "Chapter 35",
        "link": "https://droplink.co/BGddjP"
    },
    {
        "title": "Goddess Conquest",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Goddess-Conquest-1.jpg?resize=165,225",
        "episode": "Chapter 26",
        "link": "https://droplink.co/n7ILZ"
    },
    {
        "title": "Corner Shop",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Corner-Shop.jpg?resize=165,225",
        "episode": "Chapter 26",
        "link": "https://droplink.co/k7Ma8aFY"
    },
    {
        "title": "The Ladies’s Associates",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/The-Ladies-Associates.jpg?resize=165,225",
        "episode": "Chapter 43",
        "link": "https://droplink.co/4VvIE"
    },
    {
        "title": "Twenty",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Twenty.jpg?resize=165,225",
        "episode": "Chapter 43",
        "link": "https://droplink.co/PjWVe4"
    },
    {
        "title": "The Owner of A Building",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/The-Owner-of-A-Building-1.jpg?resize=165,225",
        "episode": "Chapter 55",
        "link": "https://droplink.co/XmdAm"
    },
    {
        "title": "Supervisor Access",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Supervisor-Access-1.jpg?resize=165,225",
        "episode": "Chapter 27",
        "link": "https://droplink.co/s5Dp"
    },
    {
        "title": "Nogada Romance",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Nogada-Romance-1.jpg?resize=165,225",
        "episode": "Chapter 49",
        "link": "https://droplink.co/NSYUnLwZ"
    },
    {
        "title": "My Wife’s Friend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Wife-Friend.jpg?resize=165,225",
        "episode": "Chapter 62",
        "link": "https://droplink.co/hHvDg"
    },
    {
        "title": "Close Family",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Close-Family.jpg?resize=165,225",
        "episode": "Chapter 11",
        "link": "https://droplink.co/pSq5N"
    },
    {
        "title": "Bebih Thanthangan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/02-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/nWSrZC3W"
    },
    {
        "title": "Bebih Ronda Rondo",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/04.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/ah6HnC"
    },
    {
        "title": "Escape Loser",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Escape-Loser.jpg?resize=165,225",
        "episode": "Chapter 48",
        "link": "https://droplink.co/2ZPkb"
    },
    {
        "title": "A Good Day to Camp",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/A-Good-Day-to-Camp.jpg?resize=165,225",
        "episode": "Chapter 25",
        "link": "https://droplink.co/N2Vtr"
    },
    {
        "title": "Illicit Love",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Illicit-Love.jpg?resize=165,225",
        "episode": "Chapter 26",
        "link": "https://droplink.co/sYYBn"
    },
    {
        "title": "Secret Class",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Secret-Class.jpg?resize=165,225",
        "episode": "Chapter 135",
        "link": "https://droplink.co/4dgBmq"
    },
    {
        "title": "Madloki Parasite After",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/photo_2022-07-08_09-45-43.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/ZAaagzT1"
    },
    {
        "title": "Madloki Last Summer",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/photo_2022-07-08_09-34-29.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Al79yuM"
    },
    {
        "title": "What Do I Do Now?",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/What-Do-I-Do-Now.jpg?resize=165,225",
        "episode": "Chapter 38",
        "link": "https://droplink.co/OFEEDE"
    },
    {
        "title": "I Want A Taste",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/I-Want-A-Taste.jpg?resize=165,225",
        "episode": "Chapter 13",
        "link": "https://droplink.co/eo0eNv"
    },
    {
        "title": "My Girlfriend is So Naughty",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Girlfriend-is-So-Naughty.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://droplink.co/uOaVJYJ"
    },
    {
        "title": "My Stepmother is My Girlfriend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Stepmother-is-My-Girlfriend.png?resize=165,225",
        "episode": "Chapter 48",
        "link": "https://droplink.co/LDXR"
    },
    {
        "title": "Stepmother’s Friend",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Stepmothers-Friend.jpg?resize=165,225",
        "episode": "Chapter 123",
        "link": "https://droplink.co/U6VvX"
    },
    {
        "title": "The Ark Is Me",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/The-Ark-Is-Me.jpg?resize=165,225",
        "episode": "Chapter 112",
        "link": "https://droplink.co/jOH8T"
    },
    {
        "title": "Banging My Aunt",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Banging-My-Aunt.jpg?resize=165,225",
        "episode": "Chapter 47",
        "link": "https://droplink.co/2mLo0yeR"
    },
    {
        "title": "Sextudy Group",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Sextudy-Group-1.jpg?resize=165,225",
        "episode": "Chapter 26",
        "link": "https://droplink.co/6Sjh3BP9"
    },
    {
        "title": "Doki Doki Connection",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Doki-Doki-Connection.jpg?resize=165,225",
        "episode": "Chapter 18",
        "link": "https://droplink.co/2Eqe"
    },
    {
        "title": "The Neighborhood Celebrity",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/The-Neighborhood-Celebrity.jpg?resize=165,225",
        "episode": "Chapter 38",
        "link": "https://droplink.co/vPcBeR"
    },
    {
        "title": "Two Household",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Two-Household.jpg?resize=165,225",
        "episode": "Chapter 34",
        "link": "https://droplink.co/I9INCS"
    },
    {
        "title": "Daughter Friend",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Daughter-Friend.jpg?resize=165,225",
        "episode": "Chapter 54",
        "link": "https://droplink.co/FJ9GHp"
    },
    {
        "title": "Hey, Handsome",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Hey-Handsome.jpg?resize=165,225",
        "episode": "Chapter 88",
        "link": "https://droplink.co/GdjqK"
    },
    {
        "title": "She Is Working Out",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/photo_2022-03-02_10-53-28.jpg?resize=165,225",
        "episode": "Chapter 38",
        "link": "https://droplink.co/RwGP"
    },
    {
        "title": "Lady Boss Misha",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/photo_2022-07-04_10-38-54.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Vy6CmAc"
    },
    {
        "title": "Redup 3D",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Redup.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://droplink.co/oMnCb"
    },
    {
        "title": "Age of Innocence",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Age-of-Innocence.jpg?resize=165,225",
        "episode": "Chapter 36",
        "link": "https://droplink.co/5dCJ89"
    },
    {
        "title": "Madam",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Madam.jpg?resize=165,225",
        "episode": "Chapter 22",
        "link": "https://droplink.co/AAINPD"
    },
    {
        "title": "Harry Potter XXX",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Harry-Potter-XXX.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/vozxBDO"
    },
    {
        "title": "Madloki Si Kecil Tiya",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/photo_2022-07-01_12-33-13.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/4mB7C"
    },
    {
        "title": "Phone Sex",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Phone-Sex.jpg?resize=165,225",
        "episode": "Chapter 17",
        "link": "https://droplink.co/HC9A0"
    },
    {
        "title": "Bad Guy",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Bad-Guy.jpg?resize=165,225",
        "episode": "Chapter 31",
        "link": "https://droplink.co/RbQEwm"
    },
    {
        "title": "Dorm Room Sisters",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Dorm-Room-Sisters.jpg?resize=165,225",
        "episode": "Chapter 56",
        "link": "https://droplink.co/dRSKaWgu"
    },
    {
        "title": "Komik Bebih Bad Horror Story",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/04-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/rrGNhNb"
    },
    {
        "title": "Secret Class Uncensored",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Secret-Class-Uncensored.jpg?resize=165,225",
        "episode": "Chapter 46",
        "link": "https://droplink.co/CA2d"
    },
    {
        "title": "Father’s Lust",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Fathers-Lust.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://droplink.co/dhwrWR5"
    },
    {
        "title": "A Different Class",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/A-Different-Class.jpg?resize=165,225",
        "episode": "Chapter 30",
        "link": "https://droplink.co/bjOh7"
    },
    {
        "title": "Madloki Keseharian Adik Kakak",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/keseharian-adik-kakak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Jza7Q"
    },
    {
        "title": "Noona’s Taste",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Noona-Taste.jpg?resize=165,225",
        "episode": "Chapter 37",
        "link": "https://droplink.co/Po8yKWH"
    },
    {
        "title": "Boarding Diary",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Boarding-Diary.jpg?resize=165,225",
        "episode": "Chapter 97",
        "link": "https://droplink.co/Y6QiAA"
    },
    {
        "title": "Shall We Ride",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/05/Shall-We-Ride.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://droplink.co/ZAlgPC"
    },
    {
        "title": "New Town",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/New-Town.jpg?resize=165,225",
        "episode": "Chapter 44",
        "link": "https://droplink.co/vK3L"
    },
    {
        "title": "MLBB Beatrix",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/MLBB-Beatrix.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/jRYE"
    },
    {
        "title": "Okkycreed Si Kipli",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/photo_2022-04-26_17-55-12.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/or81emd"
    },
    {
        "title": "Sinar Jaya Gurih Judo",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/SJG-Judo.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/EyB7y"
    },
    {
        "title": "Eskrim MILF Gravure",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Eskrim-Milf-Gravure.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/XxE9O"
    },
    {
        "title": "Sinchan X",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Sinchan-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/xAR5"
    },
    {
        "title": "Okkycreed Manager Indomaret",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Okkycreed-Manager-Indomaret.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/8eKJOKP"
    },
    {
        "title": "Kharisma Jati Hadiah Ulang Tahun Ke 17 Cindil",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/cindil.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/Q5eMdwvp"
    },
    {
        "title": "Komik Kharisma Jati Mother Fucker",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/kharisma-jati-mother-fucker.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/0mZhpdr"
    },
    {
        "title": "Bebih Miss Manager",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Bebih-Miss-Manager-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/ZI0q3c8L"
    },
    {
        "title": "Madloki Jam Kosong",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Jam-Kosong-MAdloki.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/JRUVg"
    },
    {
        "title": "Madloki Lepas Jaket",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/MAdloki-Lepas-Jaket.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/xLXf6G"
    },
    {
        "title": "Bu Deta",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Bu-Deta.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/UahxgpL"
    },
    {
        "title": "Madloki Calmly Girl",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Madloki-Calmly-Girl.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/hjxN7slp"
    },
    {
        "title": "Komik Madloki Test Drive",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/test-drive-Madloki.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://droplink.co/PZhwEBN"
    },
    {
        "title": "Sinar Jaya Gurih Billiard",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/SJG-Billiard-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/7S1S"
    },
    {
        "title": "Brother’s Wife Dignity",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Brother-Wife-Dignity.jpg?resize=165,225",
        "episode": "Chapter 57",
        "link": "https://droplink.co/PT44bMy"
    },
    {
        "title": "In The Summer",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/In-The-Summer.jpg?resize=165,225",
        "episode": "Chapter 27",
        "link": "https://droplink.co/Mgqz8FX"
    },
    {
        "title": "Summer School Dream Guru Berbikini",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Summer-School-Dream-Guru-Berbikini.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/zHXX"
    },
    {
        "title": "Is This The Way that You Do It?",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Is-This-The-Way-that-You-Do-It.jpg?resize=165,225",
        "episode": "Chapter 23",
        "link": "https://droplink.co/DUnvCwp"
    },
    {
        "title": "Japan Sensei",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Japan-Sensei.jpg?resize=165,225",
        "episode": "Chapter 29",
        "link": "https://droplink.co/T7PIpGr"
    },
    {
        "title": "Pheromones",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Pheromones.jpg?resize=165,225",
        "episode": "Chapter 55",
        "link": "https://droplink.co/Copr"
    },
    {
        "title": "Public Interest",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Public-Interest.jpg?resize=165,225",
        "episode": "Chapter 41",
        "link": "https://droplink.co/RI5a"
    },
    {
        "title": "Twin Takes",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Twin-Takes.jpg?resize=165,225",
        "episode": "Chapter 32",
        "link": "https://droplink.co/E3SigbN3"
    },
    {
        "title": "Komik Denis dan Bunda Adit Sopo Jarwo",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Denis-dan-Bunda-Adit-Sopo-Jarwo.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/z5IAnBw"
    },
    {
        "title": "Living With A MILF",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Living-With-A-MILF.jpg?resize=165,225",
        "episode": "Chapter 32",
        "link": "https://droplink.co/MtIIO"
    },
    {
        "title": "Madloki Konoha Donburi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/MADLOKI-KONOHA-DONBURI.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/jQKITcUn"
    },
    {
        "title": "Madloki Divorce",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Madloki-Divorce-1.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/BTzs"
    },
    {
        "title": "Solmi’s Channel",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Solmi-Channel.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://droplink.co/GtsAlY"
    },
    {
        "title": "Madloki Konoha Don Yasaimashi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/photo_2022-04-27_20-07-54.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/58OcA7"
    },
    {
        "title": "Secret Neighbors",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Secret-Neighbors.jpg?resize=165,225",
        "episode": "Chapter 70",
        "link": "https://droplink.co/zwjDzj"
    },
    {
        "title": "Madloki Es Krim",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Madloki-Es-Krim.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/cmHM263"
    },
    {
        "title": "Komik Okycreed Audisi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/02.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/AaoBTI"
    },
    {
        "title": "Cartoonists NSFW Uncensored",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Cartoonists-NSFW.jpg?resize=165,225",
        "episode": "Chapter 100",
        "link": "https://droplink.co/bZ9kIXb"
    },
    {
        "title": "Sepulang Sekolah",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Sepulang-Sekolah.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/hpenzq"
    },
    {
        "title": "Perempuan Di Sekelilingku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Perempuan-Di-Sekelilingku.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/ArC3f"
    },
    {
        "title": "Secret Hideout",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Secret-Hideout.jpg?resize=165,225",
        "episode": "Chapter 52",
        "link": "https://droplink.co/BD9jNJB"
    },
    {
        "title": "Madloki Bukber",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/photo_2022-04-21_18-46-21.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/KzJein"
    },
    {
        "title": "Madloki LEWD Audio Kerja Kelompok",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/photo_2022-04-19_19-13-20.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/FBgVekO7"
    },
    {
        "title": "MLBB X Wanwan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/MLBB-X-Wanwan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/7o0V"
    },
    {
        "title": "Genshin Impact X Ningguang",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Genshin-Impact-X-Ningguang.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/q6R6HBie"
    },
    {
        "title": "Digimon X Renamon",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Digimon-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/QyBq"
    },
    {
        "title": "Delivery Man",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Delivery-Man.jpg?resize=165,225",
        "episode": "Chapter 55.5",
        "link": "https://droplink.co/OKJ48Ix"
    },
    {
        "title": "Madloki Keluarga Amira 3D",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/keluarga-Amira.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://droplink.co/G1u8VKf"
    },
    {
        "title": "Sexercise",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Sexercise.jpg?resize=165,225",
        "episode": "Chapter 82",
        "link": "https://droplink.co/JVgIU4"
    },
    {
        "title": "My Aunt",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/My-Aunt.jpg?resize=165,225",
        "episode": "Chapter 140",
        "link": "https://droplink.co/CYOwPYJ"
    },
    {
        "title": "Eskrim Ibu Memakai Baju SMA",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/photo_2022-04-14_23-22-51.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/NYftk6sJ"
    },
    {
        "title": "PC Goddess Room",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/PC-Goddess-room.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://droplink.co/aW52"
    },
    {
        "title": "Madloki Ane Zanmai",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Madloki-Ane-ZAnmai.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/3QG8UqJ"
    },
    {
        "title": "Madloki Aplikasi Hipnotis",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Madloki-Aplikasi-Hipnotis.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Sx3hX"
    },
    {
        "title": "Runaway Family",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Runaway-Family.jpg?resize=165,225",
        "episode": "Chapter 75",
        "link": "https://droplink.co/x0ux"
    },
    {
        "title": "Sai Sai",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Sai-Sai.jpg?resize=165,225",
        "episode": "Chapter 55",
        "link": "https://droplink.co/ZAnrf8L"
    },
    {
        "title": "Goddess Hunting",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Goddess-Hunting.jpg?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://droplink.co/Nt9vKe4"
    },
    {
        "title": "Need A Service?",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Need-A-Service.jpg?resize=165,225",
        "episode": "Chapter 38",
        "link": "https://droplink.co/aQTfa0"
    },
    {
        "title": "Ex Girlfriend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Ex-Girlfriend.jpg?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://droplink.co/6gIWOFlr"
    },
    {
        "title": "Maid",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Maid.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://droplink.co/3PoAw"
    },
    {
        "title": "Hinata Hyuga Snuff",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Hinata-Kyuga-Snuff.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/bra0"
    },
    {
        "title": "Gu Ho’s Escape",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Jun-hO-escape.jpg?resize=165,225",
        "episode": "Chapter 30",
        "link": "https://droplink.co/O76ykS"
    },
    {
        "title": "7Th Heaven",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/7th-Heaven.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/rRZMZXQ"
    },
    {
        "title": "Mobile Legend Wan Wan dan Ling",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Ling-dan-wanwan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/kZvo"
    },
    {
        "title": "The Family Hike",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/The-Family-Hike.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/P6ieA8e"
    },
    {
        "title": "Gadis Diajari Di Hotel",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Gadis-Diajari-Di-Hotel.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/fIU6x"
    },
    {
        "title": "Mobile Legend Alucard dan Miya",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Alucard.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/o4sqR"
    },
    {
        "title": "Hijabophilia Dahlia Omek",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Dahlia-Omek.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/wPTNW"
    },
    {
        "title": "Mistery Box",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Mistery-Box.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/7LyW1j"
    },
    {
        "title": "Hijabitch Kakak Nakal",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Hijabitch-Kakak-Nakal.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/ZtW3"
    },
    {
        "title": "Narutod Felsala",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Narutod-Felsala.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/jqpYK"
    },
    {
        "title": "Madloki Gravure Idol",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Gravure-Idol.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/r0wOo"
    },
    {
        "title": "Lightning Rod",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Lightning-rod.jpg?resize=165,225",
        "episode": "Chapter 134",
        "link": "https://droplink.co/Xt6P77"
    },
    {
        "title": "Fake Taxi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Fake-Taxi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/HggaNB"
    },
    {
        "title": "Boss Dan Bawahan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Bos-dan-Bawahan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/y0bR28Cv"
    },
    {
        "title": "I Want To Know Her",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/I-Want-To-Know-Her.jpg?resize=165,225",
        "episode": "Chapter 35",
        "link": "https://droplink.co/BZZmsuF"
    },
    {
        "title": "Craving",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Craving.jpg?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://droplink.co/ZkRyN"
    },
    {
        "title": "The Body Game",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Body-Game.jpg?resize=165,225",
        "episode": "Chapter 64",
        "link": "https://droplink.co/qbGXKVAW"
    },
    {
        "title": "Thirst To Fill",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Thirst-To-fill.jpg?resize=165,225",
        "episode": "Chapter 71",
        "link": "https://droplink.co/VPLH"
    },
    {
        "title": "Madloki Kamila Dan Natasya",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Madloki-Kamila-dan-Natasya.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/MeZ2sQD"
    },
    {
        "title": "Obat Kekhawatiran",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Obat-Kekhawatiran.jpg?resize=165,225",
        "episode": "Chapter 07",
        "link": "https://droplink.co/YQlX"
    },
    {
        "title": "Sold Out Girl",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Sold-Out-Girl.jpg?resize=165,225",
        "episode": "Chapter 45",
        "link": "https://droplink.co/O5WQ1"
    },
    {
        "title": "Weak Point",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Weak-Point.jpg?resize=165,225",
        "episode": "Chapter 120",
        "link": "https://droplink.co/g0Y8R"
    },
    {
        "title": "The Spot Master",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/The-Spot-Master.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://droplink.co/dqllyAw"
    },
    {
        "title": "Soothe Me",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Soothe-Me.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://droplink.co/9cwhlm"
    },
    {
        "title": "Divine Hands",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Divine-Hands.jpg?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://droplink.co/vDqtR8"
    },
    {
        "title": "The Mother And Daughter Next Door",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/The-Mother-And-Daughter-Next-Door.jpg?resize=165,225",
        "episode": "Chapter 52",
        "link": "https://droplink.co/G5hz4jQx"
    },
    {
        "title": "Collapse And Rewind",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Collapse-and-Rewind.jpg?resize=165,225",
        "episode": "Chapter 65",
        "link": "https://droplink.co/PNu5yEUx"
    },
    {
        "title": "Bittersweet",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Bittersweet.jpg?resize=165,225",
        "episode": "Chapter 55",
        "link": "https://droplink.co/QNsDsxS"
    },
    {
        "title": "Cohabitation With My Ex-Wife",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Cohabitation-with-my-ex-wife.jpg?resize=165,225",
        "episode": "Chapter 67",
        "link": "https://droplink.co/MXy7W"
    },
    {
        "title": "Komik Milftoon Bintang K-pop",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/0008-2.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/EhYk"
    },
    {
        "title": "One Punch Man Bertarung Bersama Fubuki",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/One-Thrust-Man.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/TnvYD64t"
    },
    {
        "title": "Komik Madloki Lady of Uzumaki",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-uzumaki.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/AlE1W"
    },
    {
        "title": "Fitness",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/fitnesss.jpg?resize=165,225",
        "episode": "Chapter 104",
        "link": "https://droplink.co/yTZr5"
    },
    {
        "title": "Madloki LEWD Audio On Cam Blowjob",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/photo_2022-03-29_18-11-47.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/lEpC2J"
    },
    {
        "title": "Beyond Imagination",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Beyond-Imagination.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://droplink.co/UqhW"
    },
    {
        "title": "Goddess Stargram",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Goddes-Stargram.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://droplink.co/eQlAAM"
    },
    {
        "title": "Saitama X",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Saitama-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/pkUg6"
    },
    {
        "title": "Narutod Bath House",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Narutod-Bath-house.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/wFj2BMW"
    },
    {
        "title": "Naruto Bertiga Lebih Baik",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Naruto-Bertiga-Lebih-Baik.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/cN3CZP"
    },
    {
        "title": "Gara Gara CD Bibiku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Gara-Gara-CD-Bibiku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/FqdOvp"
    },
    {
        "title": "One Shot Men’s Clinic",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/One-Shots-Men-Clinic.jpg?resize=165,225",
        "episode": "Chapter 51",
        "link": "https://droplink.co/ngCA8vl"
    },
    {
        "title": "The Girl That Wet The Wall",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/The-Girl-That-Wet-The-Wall.jpg?resize=165,225",
        "episode": "Chapter 61",
        "link": "https://droplink.co/siTG37"
    },
    {
        "title": "A Baby’s Nest",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/A-Babys-Nest.jpg?resize=165,225",
        "episode": "Chapter 43",
        "link": "https://droplink.co/fcqi"
    },
    {
        "title": "Madloki Zoku Zenpai",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Madloki-Zoku-Zenpai.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/JhSGH"
    },
    {
        "title": "Madloki Linda Daily Lewd Story",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/MAdloki-Linda-Daily-Lewd-Story.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/4X3bE8"
    },
    {
        "title": "Town Girl",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Town-Girl.jpg?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://droplink.co/akbceCZ"
    },
    {
        "title": "Your Situation",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Your-Situation.jpg?resize=165,225",
        "episode": "Chapter 56",
        "link": "https://droplink.co/PBtzP7VG"
    },
    {
        "title": "Nami Robin Hancook 3D",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/img4-8.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/1rJfz"
    },
    {
        "title": "World Cup X",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/World-Cup-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/pUXYsRDv"
    },
    {
        "title": "Zombie Girlfriend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Zombie-Girlfriend.jpg?resize=165,225",
        "episode": "Chapter 42",
        "link": "https://droplink.co/AQi6bf"
    },
    {
        "title": "Beach Goddess",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Beach-Goddess.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://droplink.co/B1Oti"
    },
    {
        "title": "Sensitive Matter",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Sensitive-Matter.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://droplink.co/H0RrMc"
    },
    {
        "title": "Family Tree",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Family-tree.jpg?resize=165,225",
        "episode": "Chapter 52",
        "link": "https://droplink.co/VjRz"
    },
    {
        "title": "Ratna Sang Supergirl Erotical Hero",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Komik-Ratna-Sang-Supergirl-Erotical-Hero.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/AkDh6Ma1"
    },
    {
        "title": "Don’t Be Like This ! Son In Law",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Dont-Be-Like-This-Son-In-Law.jpg?resize=165,225",
        "episode": "Chapter 67",
        "link": "https://droplink.co/c8FV5Bk"
    },
    {
        "title": "One Piece Nico Robin",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/89t.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/oDlUBg"
    },
    {
        "title": "NTR Bersama Orang Lain",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/NTR-Bersama-Orang-Lain.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/jiz74n"
    },
    {
        "title": "Madloki LEWD Audio Fucked By Security",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/photo_2022-03-19_11-09-14.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/pqJS1"
    },
    {
        "title": "Teach Me How To Please You",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Teach-Me-How-To-Please-You.jpg?resize=165,225",
        "episode": "Chapter 25",
        "link": "https://droplink.co/HhkpxS"
    },
    {
        "title": "Madloki Yokubari Saboten",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Madloki-Yokubari-Sabuten.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/XZRhXVj"
    },
    {
        "title": "Madloki Bakuchi Butai",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Madloki-Bakuchi-Butai.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Ej4hbtiK"
    },
    {
        "title": "PUBG X",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/PUBG-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/okCqr880"
    },
    {
        "title": "The Giving Girl",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/The-Giving-Girl.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://droplink.co/r5RxVoE"
    },
    {
        "title": "Naruto Adu Kenikmatan Sakura dan Hinata",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Naruto-Adu-Kenikmatan-Sakura-dan-Hinata.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/YJSpdqEL"
    },
    {
        "title": "Malam Pertama Avatar dan Katara",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Malam-Pertama-Avatar-dan-Katara.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/PDzxpiP3"
    },
    {
        "title": "Ketiak Berbulu dan Keringat Bibi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Ketiak-Berbulu-dan-Keringat-Bibi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/at59UVsj"
    },
    {
        "title": "Dozen Years",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Dozenn-Year.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://droplink.co/6Cck6x"
    },
    {
        "title": "The Lucky Guy",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Lucky-Guy.jpg?resize=165,225",
        "episode": "Chapter 56",
        "link": "https://droplink.co/6VW6AV"
    },
    {
        "title": "She’s My Younger Sister But It’s Okay",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/She-is-my-sister-but-its-okay.jpg?resize=165,225",
        "episode": "Chapter 34",
        "link": "https://droplink.co/xGKWjwl"
    },
    {
        "title": "My Sister Like Sister",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/My-Sister-Like-Sister.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/lfu2vR"
    },
    {
        "title": "Part Time Job",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Part-Time-Job.jpg?resize=165,225",
        "episode": "Chapter 35",
        "link": "https://droplink.co/Wr4JH"
    },
    {
        "title": "Returning GirlFriend",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Returning-Girl-Friend.jpg?resize=165,225",
        "episode": "Chapter 25",
        "link": "https://droplink.co/gTBRwPL"
    },
    {
        "title": "Berteduh",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Berteduh.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/MLTY3w"
    },
    {
        "title": "Folder Rahasia",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Folder-Rahasia.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/3F1tm"
    },
    {
        "title": "Bersama Ibu dan Adikku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Bersama-Ibu-dan-Adikku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/COLc"
    },
    {
        "title": "Indomei",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Indomei.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Xr7cvW"
    },
    {
        "title": "Sister’s Sex Education",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Sister-Sex-Education.jpg?resize=165,225",
        "episode": "Chapter 41",
        "link": "https://droplink.co/bi6mDR"
    },
    {
        "title": "Cram School Scandal",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Cram-School-Scandal.jpg?resize=165,225",
        "episode": "Chapter 30",
        "link": "https://droplink.co/ZwRW2LKw"
    },
    {
        "title": "Naruto Pertemuan Tertutup Konoha",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Naruto-Pertemuan-Tertutup-Konoha.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/DoKbi"
    },
    {
        "title": "Eunhye Super",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Eunhye-Super.jpg?resize=165,225",
        "episode": "Chapter 89",
        "link": "https://droplink.co/LuknvA"
    },
    {
        "title": "Secret X Folder",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Secret-X-Folder.jpg?resize=165,225",
        "episode": "Chapter 18",
        "link": "https://droplink.co/idKY4C"
    },
    {
        "title": "Sewa Pembantu",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Sewa-Pembantu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/husfs7G"
    },
    {
        "title": "Permainan Cinta",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Permainan-Cinta.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/1dwyxqF"
    },
    {
        "title": "Pelajaran Komunikasi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Pelajaran-Komunikasi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/5QQ9Z"
    },
    {
        "title": "Organisasi Ninja Yuzuha",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Organisasi-Ninja-Yuzuha.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/mfPhht80"
    },
    {
        "title": "Rahasia Istri",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Rahasia-Istri-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/dzOA"
    },
    {
        "title": "Malam Pertama",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Malam-Pertama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/ZBsLw"
    },
    {
        "title": "One Piece Pemandian Tsunade",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/One-Piece-Pemandian-Tsunade.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/TOtmY"
    },
    {
        "title": "Madloki Atlet Renang",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Madloki-Atlet-Renang.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/i21lmo"
    },
    {
        "title": "Madloki Ibu Kost",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/MAdloki-Ibu-Kost.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/F4e5jB"
    },
    {
        "title": "Young Boss",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Young-Boss.jpg?resize=165,225",
        "episode": "Chapter 113",
        "link": "https://droplink.co/XcrmTo5"
    },
    {
        "title": "Ibu Yang Erotis",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Ibu-Yang-Erotis.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Ajek"
    },
    {
        "title": "Ibu Temanku Sangat Seksi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Ibu-Temanku-Sangat-Seksi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/PuMBXm"
    },
    {
        "title": "Teman Kerja Sampingan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Teman-Kerja-Sampingan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/RutgqE"
    },
    {
        "title": "Dipaksa Tapi Ketagihan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Dipaksa-Tapi-Ketagihan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/7GI7JRR"
    },
    {
        "title": "Boss Suamiku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Boss-Suamiku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/0n4a4"
    },
    {
        "title": "Blind",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Blind.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/JmddkWe"
    },
    {
        "title": "Bebih Belajar Kelompok",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Bebih-Belajar-Kelompok.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/uqmV0K"
    },
    {
        "title": "Crayon Sinchan Masao dan Ibu",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Crayon-Sinchan-Masao-dan-Ibu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/wvrYDa"
    },
    {
        "title": "Barber X",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Barber-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Ae2a"
    },
    {
        "title": "Bermain Dengan Boss",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Bermain-Dengan-Boss.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/p9q2ZIG9"
    },
    {
        "title": "Anak Sekolah dan Om",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Anak-Sekolah-dan-Om.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/nDHu"
    },
    {
        "title": "Hijabitch Mother Day",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/photo_2022-03-05_09-56-15.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/KXIOfSec"
    },
    {
        "title": "Kisah Ibu Tiriku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Kisah-Ibu-Tiriku.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/y6vogSR"
    },
    {
        "title": "Madloki Gal Mama To Pakopako",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Madloki-Gal-Mama-to-pakopako.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/HP8ILZP"
    },
    {
        "title": "One Piece Yamato & Momonosuke",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/One-Piece-YAMATO-MOMONOSUKE.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/p3jci"
    },
    {
        "title": "Sehari Bersama Raikage",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Sehari-Bersama-Raikage.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/FqOwW9QS"
    },
    {
        "title": "Mau Lembur Kan?",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Mau-Lembur-Kan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/AXgQE3"
    },
    {
        "title": "Latihan Tanpa Henti",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Latihan-Tanpa-Henti.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/eIwL3"
    },
    {
        "title": "Aku Tidak Perawan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Aku-Tidak-Perawan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/ZQmvn"
    },
    {
        "title": "Pemburu Perjaka",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Pemburu-Perjaka.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/63puPk"
    },
    {
        "title": "Teman Bermain Mama",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Teman-Bermain-Mama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/FInaIjMc"
    },
    {
        "title": "Adik Kecilku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Adik-Kecilku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/dZAt"
    },
    {
        "title": "Adik Ipar",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Adik-Ipar.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/qeMslt"
    },
    {
        "title": "Suku Amazon",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Suku-Amazon.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/nL1R2"
    },
    {
        "title": "Siluman Kupu Kupu",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/SIluam-Kupu-Kupu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/bpqQA"
    },
    {
        "title": "Pacar Sewaan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Pacar-Sewaan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/iwHLBjWo"
    },
    {
        "title": "Murid Baru",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Murid-Baru.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/yO05R"
    },
    {
        "title": "Keponakan Yang Nakal",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Keponakan-Yang-Nakal.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/ImFZO"
    },
    {
        "title": "Ibu dan Anak Sama Saja",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Ibu-dan-Anak-Sama-Saja.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/L9wG7Uxj"
    },
    {
        "title": "Dikeroyok Anak SMA",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Dikeroyok-Anak-SMA.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/3XhsKO4"
    },
    {
        "title": "Okkycreed Masih Kangen",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/MAsih-KAngen.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/YWH1l"
    },
    {
        "title": "Sperman",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Sperman.jpg?resize=165,225",
        "episode": "Chapter 18",
        "link": "https://droplink.co/ED4NJsg0"
    },
    {
        "title": "Madloki LEWD Audio Have Sex With Boss",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/photo_2022-02-28_09-06-19.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/1w4ef7CD"
    },
    {
        "title": "Sakura dan Sasuke",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Sakura-dan-Sasuke.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/0Sei"
    },
    {
        "title": "Narutod dan Sarada",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/NArutod-dan-Sarada.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/6e3cp"
    },
    {
        "title": "Bolapistar Ibu dan Anak",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Malay-Ibu-dan-Anak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/A80L"
    },
    {
        "title": "Perang Para Dewa",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Perang-Para-Dewa.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/JACNEQ"
    },
    {
        "title": "Boku No Hero Academia",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Boku-No-Hero-Academia.jpg?resize=165,225",
        "episode": "Chapter 09",
        "link": "https://droplink.co/pbV4M"
    },
    {
        "title": "One Piece Kakaknya Sanji",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/One-Piece-Kakaknya-Sanji.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Qn919Y"
    },
    {
        "title": "Ayah Mertuaku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Ayah-Mertuaku.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://droplink.co/gdlESlG"
    },
    {
        "title": "Madloki Bungkus Ughtea",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Madloki-Bungkus-Ughtea.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/9CFuIXp"
    },
    {
        "title": "Minecraft X",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/01.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://droplink.co/j3TipDa"
    },
    {
        "title": "Madloki LEWD Raped By Sister Husband",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/photo_2022-02-24_17-42-31.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/AJbR"
    },
    {
        "title": "Madloki LEWD Audio Punish My Step Son",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/photo_2022-02-24_17-42-25.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Q23V"
    },
    {
        "title": "Saudaraku Diperkaos Temanku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Saudaraku-Diperkaos-Temanku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/nOTvS6"
    },
    {
        "title": "Miss DD House Call",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Miss-DD-House-Call.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Qq76"
    },
    {
        "title": "Menantu dan Mertua",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Menantu-dan-Mertua.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/UQTuKPa"
    },
    {
        "title": "Ibuku Datang Lagi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Ibuku-Datang-Lagi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/gV3aqv"
    },
    {
        "title": "Ibu Temanku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Ibu-Temanku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/bXJ4"
    },
    {
        "title": "Digoda Kakak Ipar",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Digoda-Kakak-Ipar.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/YGmuI"
    },
    {
        "title": "Cosplayer Lulu",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Cosplayer-Lulu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/s4VeUvEV"
    },
    {
        "title": "Berbagi Mama Dengan Temanku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Berbagi-Mama-Dengan-Temanku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/D0DA"
    },
    {
        "title": "Bencana Pelajaran Olahraga",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Bencana-Pelajaran-Olahraga.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/hHWEQ"
    },
    {
        "title": "Why Are You Getting Out From There",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Why-Are-You-Getting-Out-From-There.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/gNcPtHsz"
    },
    {
        "title": "Twin MILF Add",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Twin-MILF-Add.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/wcRl"
    },
    {
        "title": "Stand By Me",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Stand-By-Me.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://droplink.co/lkCa"
    },
    {
        "title": "Madloki Tuan Putri dan Pelayan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Madloki-Tuan-Putri-dan-Pelayan.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/Xlhim"
    },
    {
        "title": "Bolapistar Adik Kakak",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Bolapistar-Adik-Kakak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/uOIeGoq"
    },
    {
        "title": "Tetangga Brondong",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Tetanggaku-Brondong.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/JiJ56p"
    },
    {
        "title": "Rahasia Mama Terbongkar Temanku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Rahasia-Mama-Terbongkar-Temanku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/xdVVQt"
    },
    {
        "title": "Pembalasan Kakak",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pembalasan-Kakak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/txV1cqk"
    },
    {
        "title": "Pada Waktu Itu",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pada-Waktu-Itu.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/AxadC6sj"
    },
    {
        "title": "Keluarga Peri",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Keluarga-PEri.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/NJwDpQG"
    },
    {
        "title": "Menyuruh Adikku Menghamili Istriku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Menyuruh-Adikku-Menghamili-Istriku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/GcADfx0"
    },
    {
        "title": "Cewek Binaragawati",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Cewek-Binaragawati.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/PUvcr9u"
    },
    {
        "title": "Anak Angkat Mesum",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Anak-Angkat-Mesum.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/YyT9T"
    },
    {
        "title": "Tetangga Yang Lucu",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Tetangga-Yang-Lucu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/qjBZ"
    },
    {
        "title": "Teman Tapi Mesra",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Teman-Tapi-Mesra.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Fcneu9X"
    },
    {
        "title": "Tante Sangean",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Tante-Sangean.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/hRk8e"
    },
    {
        "title": "Suster Kecil Yang Malang",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Suster-Kecil-Yang-Malang.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/0p5b5"
    },
    {
        "title": "S.E.T",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/SET.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/7Bpc"
    },
    {
        "title": "Pengalaman Pertama Sae Chan",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pengalaman-Pertama-Sae-Chan.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/qmy7Z"
    },
    {
        "title": "Operasi Kelamin",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Operasi-Kelamin.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/fK7n"
    },
    {
        "title": "Nafsu Dengan Sepupuku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/NAfsu-Dengan-Sepupu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/LtBkwuS"
    },
    {
        "title": "Mamaku Hanya Milikku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mamaku-Hanya-MIlikku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/1z6cJtmG"
    },
    {
        "title": "Madloki Wife Trip",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/MAdloki-Wife-Trip-Chapter-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/p4Bj"
    },
    {
        "title": "Kastil Musim Semi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kastil-Musim-Semi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/aRBq4M"
    },
    {
        "title": "Kakakku dan Grup Baseball",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kakakku-dan-Grup-Baseball.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/AVIpcYOj"
    },
    {
        "title": "Seorang Ibu dan Anak Jalanan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Seorang-Ibu-dan-Anak-Jalanan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/3SnbLGou"
    },
    {
        "title": "Dikeroyok Kakak Kakak Cewek",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Dikeroyok-Kakak-Cewek.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/u4zIY"
    },
    {
        "title": "Berubah Mennjadi Boneka Sex",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Berubah-Mennjadi-Boneka-Sex.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/6yriJ9Q"
    },
    {
        "title": "Anak Bungsu",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Anal-Bungsu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/xzIs"
    },
    {
        "title": "Aku Mencintai Adikku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Aku-Mencintai-Adikku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/fryit"
    },
    {
        "title": "Madloki The Mom of Boruto",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Madloki-The-Mom-of-Boruto.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/GXG6u4l8"
    },
    {
        "title": "Naruto Sudah Tidak Tahan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Naruto-Sudah-Tidak-Tahan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/C2pj"
    },
    {
        "title": "Komik Thailand My Sister",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/My-Sister.jpg?resize=165,225",
        "episode": "Chapter 3.3",
        "link": "https://droplink.co/1I1QgX"
    },
    {
        "title": "Madloki LEWD Audio Cerita Citra  1",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/photo_2022-02-19_09-32-33.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/vuxWQ8f"
    },
    {
        "title": "Memuaskan Istriku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Memuaskan-Istriku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/VCvRkF"
    },
    {
        "title": "Siluman Ular Memperkosaku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Siluman-Ular-Memperkosaku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/RGrfFO"
    },
    {
        "title": "Pesta Bertukar Mama",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Perta-Bertukar-Mama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/96AlQl8"
    },
    {
        "title": "Pengobatan Kecelakaan Mama",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pengobatan-Kecelakaan-Mama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/4XEEQ9"
    },
    {
        "title": "Pamanku Nakal",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pamanku-Nakal.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/bxp1L"
    },
    {
        "title": "Pamanku Kekasihku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pamanku-Kekasihku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/JHymb"
    },
    {
        "title": "Pacarku Saudaraku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pacarku-Saudaraku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/PShq47Ip"
    },
    {
        "title": "Pacarku Masih Kecil",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pacarku-Masih-KEcil.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/8NH34mn"
    },
    {
        "title": "Nafsu Tapi Tak Cinta",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/NAfsu-Tapi-Tak-Cinta.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/X7gVt"
    },
    {
        "title": "Kakak dan Temannya",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kakak-dan-Temannya.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/wTRM"
    },
    {
        "title": "3D Naruto Sakura dan Sarada",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/3D-Naruto-Sakura-dan-Sarada.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/iaR7N9v"
    },
    {
        "title": "Mika Simpanan Om Om",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mika-Simpanan-Om-Om.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/nQ3l"
    },
    {
        "title": "Mama Bernafsu Denganku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mama-Bernafsu-Denganku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/P4rk1x5f"
    },
    {
        "title": "Ketika Mamaku Tidur",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Ketika-Mamaku-Tidur.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/WoAY1gS"
    },
    {
        "title": "Karyawan Baru",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Karyawan-Baru.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/mWMlx"
    },
    {
        "title": "Kakakku Open BO",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kakakku-Open-BO.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/fRHW2UX"
    },
    {
        "title": "Kakak Adik Semua Pacarku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kakak-Adik-Semua-PAcarku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/fLyL"
    },
    {
        "title": "Cinta Bersemi Karena Reuni",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Cinta-Bersemi-Karena-Reuni.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/jNzC7UJO"
    },
    {
        "title": "Cewek Yang Digosipkan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Cwek-Yang-Digosipkan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Jw0Y"
    },
    {
        "title": "Bantuin Tante Dong",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Bantuin-Tante-Dong.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/6hpos8q6"
    },
    {
        "title": "Adik Ipar Menggodaku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Adik-Ipar-Menggodaku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/seQv5"
    },
    {
        "title": "Teman Anakku Menyukaiku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Teman-Anakku-Menyukaiku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/iwNCEM"
    },
    {
        "title": "Tetanggaku Memperkosaku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Tetanggaku-Memperkosaku.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/b85GICmv"
    },
    {
        "title": "Hijabolic Artis",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hijabolic-Artis.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/B9YOho"
    },
    {
        "title": "Rahasia Dengan Istri Anakku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Rahasia-Dengan-Istri-Anakku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/1q4G1XZ"
    },
    {
        "title": "One Piece Petualangan Dunia Baru",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/One-Piece-Petualangan-Dunia-Baru.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/LZB3Vch"
    },
    {
        "title": "Avatar Avatod",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Avatar-Avatod.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Rr5QKct"
    },
    {
        "title": "Marudashi X Sister",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Marudashi-X-Sister.jpg?resize=165,225",
        "episode": "Chapter 07",
        "link": "https://droplink.co/nNPKCN"
    },
    {
        "title": "Susu Mama Temanku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Susu-Mama-Temanku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/YTv6"
    },
    {
        "title": "Membius Mama",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Membius-Mama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/LkX4lt"
    },
    {
        "title": "Mamaku Tak Bisa Menolak",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mamaku-Tak-Bisa-Menolak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/VVcCFr3"
    },
    {
        "title": "Mamaku Oh Mamaku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mamaku-Oh-Mamaku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/SbT51j9d"
    },
    {
        "title": "Dikerjai Produser Film",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Dikerjai-produser-film.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/ab1gf"
    },
    {
        "title": "Mama dan Kakekku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mama-dan-Kakekku.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/28CLTA"
    },
    {
        "title": "Istri Yang Aneh",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Istri-Yang-Aneh.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/pq14QkG5"
    },
    {
        "title": "Idol",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Idol.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/ERObkR5Y"
    },
    {
        "title": "Diajari Mama",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Diajari-Mama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/OKi7yTl5"
    },
    {
        "title": "Netosis",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Netosis.jpg?resize=165,225",
        "episode": "Chapter 02 End",
        "link": "https://droplink.co/DdVrl"
    },
    {
        "title": "Hadiah Valentine",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hadiah-Valentine.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/HZPTs"
    },
    {
        "title": "Kakakku Sange",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kakakku-Sange.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/8VDW"
    },
    {
        "title": "Dear My Mother",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Dear-My-Mother.jpg?resize=165,225",
        "episode": "Chapter 19",
        "link": "https://droplink.co/gNZzb"
    },
    {
        "title": "Ayahnya Kyouko-san Nakal",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Ayahnya-Kyouko-san-Nakal.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/nTsNEU1"
    },
    {
        "title": "Narutod Sakuhin",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Narutod-Sakuhin.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/00eY"
    },
    {
        "title": "Di Bawah Kasur Anakku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Di-Bawah-Kasur-Anakku.jpg?resize=165,225",
        "episode": "Chapter 09",
        "link": "https://droplink.co/343lU"
    },
    {
        "title": "Hamedori No Yatsu",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hamedori-No-Yatsu.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://droplink.co/IBtCS2wS"
    },
    {
        "title": "Marin Bisque Doll – Batch 01",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Marin-Bisque-Doll-Batch-01.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/frPb8EJ"
    },
    {
        "title": "Summer Halation",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Summer-Halation.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/RHB2f8j"
    },
    {
        "title": "Rinkan Riko to Yoshiko Rakugaki Kopi Hon",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Rinkan-Riko-to-Yoshiko-Rakugaki-Kopi-Hon.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/adLjbFur"
    },
    {
        "title": "Service Nami dan Robin",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Service-Nami-dan-Robin.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/cFDx6U"
    },
    {
        "title": "Bakunew",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Bakunew.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/qEf3h7ka"
    },
    {
        "title": "Secret X Secret – Keep It A Secret Promise",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Secret-X-Secret-Keep-It-A-Secret-Promise.jpg?resize=165,225",
        "episode": "Chapter 08",
        "link": "https://droplink.co/Q56cAsP"
    },
    {
        "title": "Losekorntrol Hijab 3DX Gift",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hijab-3DX-Gift-Tanpa-Teks.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/G5pANp"
    },
    {
        "title": "Miko Miko Yaku Shibori",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Miko-Miko-Yaku-Shibori.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/xGjMnTG"
    },
    {
        "title": "Momo Piyo",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Momo-Piyo.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/oYjj"
    },
    {
        "title": "Nurse",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Nurse.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/mF4Xy"
    },
    {
        "title": "Tsunade Big Plan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Tsunade-Big-Plan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/SPXL4vbO"
    },
    {
        "title": "Penjaga Sekolah",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Penjaga-sekolah.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/UrkD9p"
    },
    {
        "title": "Janji Dengan Hokage Sama",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Janji-dengan-hokage-sama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/fKyGb"
    },
    {
        "title": "Jojo Bizarre X",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Jojo-Bizarre-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/TGHhUsJ"
    },
    {
        "title": "Bunny Service",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Bunny-Service.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/asiPmt2"
    },
    {
        "title": "Hitozuma Life",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hitazuma-Life.jpg?resize=165,225",
        "episode": "Chapter 10",
        "link": "https://droplink.co/HWW53"
    },
    {
        "title": "Madloki Joshi Kousei Rich",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Madloki-Joshi-Kousei-Rich.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/ZoF2jL"
    },
    {
        "title": "Chop Stick",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Chop-Stick.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/V1pf9"
    },
    {
        "title": "Istri Sewaan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Istri-Sewaan.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/AuaCI"
    },
    {
        "title": "Sensei",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Sensei.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/VLU3q6S"
    },
    {
        "title": "Hijabolic April’s Pole Dance",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hijabolic-Aprils-Pole-Dance.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/KrdzC"
    },
    {
        "title": "Yang Dibayangkan Hokage",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Yang-Dibayangkan-Hokage.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/Hdch8L"
    },
    {
        "title": "Pokemon Ash dan Mimpi Bermimpi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pokemon-Ash-dan-Mimpi-Bermimpi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/orsZ"
    },
    {
        "title": "Inmou",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Inmou.jpg?resize=165,225",
        "episode": "Chapter 10",
        "link": "https://droplink.co/Q4QvqG"
    },
    {
        "title": "Berawal Dari HP",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Berawal-DAri-HP.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/SMFpCCh"
    },
    {
        "title": "Adel Tersikat",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Adel-Tersikat.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/QO970K"
    },
    {
        "title": "Kimi Ga Suki",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kimi_ga_Suki.jpg?resize=165,225",
        "episode": "Chapter 10",
        "link": "https://droplink.co/EJARLh"
    },
    {
        "title": "Cecilia Style Infinite Stratos",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Cecilia-Style-Infinite-Stratos.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/o2YpbUh"
    },
    {
        "title": "Vampir Pencari Mangsa",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Vampir-Mencari-Mangsa.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://droplink.co/rAFIp9c"
    },
    {
        "title": "Big Ass",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Big-Ass.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/9zOp36v"
    },
    {
        "title": "Bulma di Planet Namek",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Bulma-di-Planet-Namek.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/r1gMHBJU"
    },
    {
        "title": "Mama Ryokou Kepanasan",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mama-Ryokou-Kepanasan.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/JqdOHp"
    },
    {
        "title": "Watashi Ga Iyashite Agemasu",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Watashi-Ga-Iyashite-Agemasu-Ch1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/YFql"
    },
    {
        "title": "The World That I Rule",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/The-Word-That-I-Rule.jpg?resize=165,225",
        "episode": "Chapter 41",
        "link": "https://droplink.co/rznx"
    },
    {
        "title": "Delightfully Fuckable And Unrefined",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Delightfully-Fuckable-And-Unrefined.jpg?resize=165,225",
        "episode": "Chapter 06",
        "link": "https://droplink.co/M7m6xoE"
    },
    {
        "title": "Madloki Unlucky Tsunade",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/MAdloki-Unlucky-Tsunade.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/d02sa"
    },
    {
        "title": "Hijabitch Soccer Girl",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hijabitch-Soccer-Girl.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/K9tSmT"
    },
    {
        "title": "Azus Attack",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Azus-Attack.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://droplink.co/ROlL"
    },
    {
        "title": "Komik Kharisma Jati Kontol Bapak",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/kharisma-jati-kontol-bapak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/ioJkI42"
    },
    {
        "title": "Komik Kharisma Jati Kencur Trilogi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-4.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/iKqENC"
    },
    {
        "title": "Bibiku Seksi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Bibiku-Seksi.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/McEs8KLr"
    },
    {
        "title": "Ibu dan Kakakku Adalah BO",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Ibu-dan-Kakakku-Adalah-BO.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/6dFfkr"
    },
    {
        "title": "Transilvania MILF",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Transilvania-MILF-1.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/gzNML"
    },
    {
        "title": "Jujur Kepada Otonashi Kun",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Jujur-Kepada-Otonashi-Kun.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/Qm8V2eI"
    },
    {
        "title": "Permintaan Anak",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Permintaan-Anak.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/hGE7"
    },
    {
        "title": "Violet Beraksi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Violet-Beraksi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/MU3mO4cM"
    },
    {
        "title": "Stuck With Simon",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Stuck-With-Simon.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/D1Wl5J"
    },
    {
        "title": "Tsunade dan Konomaharu",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Tsunade-dan-Konomaharu.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/d5hfR8"
    },
    {
        "title": "Sister Secret",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Sister-Secret.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/2hJwVzaB"
    },
    {
        "title": "Put Down Tanpa Teks",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Put-Down.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/xCUt"
    },
    {
        "title": "Keinginan Yang Membara",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Keinginan-YAng-Membara.jpg?resize=165,225",
        "episode": "Chapter 12 End",
        "link": "https://droplink.co/hX9pp"
    },
    {
        "title": "Little Stop",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Little-Stop.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/qBlhse"
    },
    {
        "title": "Nami Saga",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Nami-Saga.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/7arHy"
    },
    {
        "title": "Favorit Mama",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Favorit-Mama.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/egymA"
    },
    {
        "title": "Hadiah Untuk Isabelle",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Isabelle-Alternative-Reward.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/8FkT"
    },
    {
        "title": "Kunoichis Mandi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kunoichis-Mandi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/rYEX"
    },
    {
        "title": "Is My Mom Hot",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Is-My-Mom-Hot.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/cJ3rP"
    },
    {
        "title": "Diari Hinata",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Diari-Hinata.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/QC73nm"
    },
    {
        "title": "MILF Age",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Milf-Age.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/IImqK"
    },
    {
        "title": "Hearts",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hearts.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/U06C"
    },
    {
        "title": "Gwen Celebrates Christmas",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Gwen-Celebrates-Christmas.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/CkqH"
    },
    {
        "title": "Girls Night Out",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Girl-Night-Out.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/qBM7wi"
    },
    {
        "title": "No One Can Notice Me",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/No-One-Can-Notice-Me.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/ZETmAo8"
    },
    {
        "title": "Fundoshi Haha",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Fundoshi-Haha.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/h9TEuKg"
    },
    {
        "title": "A Family Vacation",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/FAmily-Vacation.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/RkuXmS"
    },
    {
        "title": "A Sunday Schooling",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/A-Sunday-Schooling.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/ro89"
    },
    {
        "title": "Aunt Deb’s Show",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Aunt-Debs-Show.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/lNokZzkB"
    },
    {
        "title": "Keluarga Kenji",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Keluarga-Kenji.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/ZAGWoFU"
    },
    {
        "title": "Dragon Ball Kakek Kura Kura Mesum",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/DRagon-ball-kakek-kura-mesum.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/W0puvJV"
    },
    {
        "title": "Naruto Gaiden 10.5",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Naruto-Gaiden.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/zVD5AcSl"
    },
    {
        "title": "Vampire Sacrifice",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Vampire-Sacrivice.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/FpkWhxai"
    },
    {
        "title": "Hijabolic Hijaber Punk",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hijabolic-Hijaber-Punk.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/olo8IFlu"
    },
    {
        "title": "Hijabolic Christmas Pinguin",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hijabolic-Christmas-Pinguin.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/AiSx7OD"
    },
    {
        "title": "Bebih Learn English",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Bebih-Learn-English.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/65SOB"
    },
    {
        "title": "Rental Lovers",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Rental-Lovers.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/egJB"
    },
    {
        "title": "Ame No Hi Wa Honnori Chikubi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Ame-No-Hi-Wa-Honnori-Chikubi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/Ri3rBw6"
    },
    {
        "title": "Komik Karamare Tsuma No Kyouko",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Karamare-Tsuma-No-Kyouko.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/6JIm3E55"
    },
    {
        "title": "9 Satra",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/9-Satra.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/kIq9n"
    },
    {
        "title": "Komik Madloki Adik Kakak",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-adik-kakak.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/UMo0mL"
    },
    {
        "title": "Kakak Perempuanku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Kakak-Perempuanku.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/DIfc"
    },
    {
        "title": "Jalan Ninja Naruto Sakura dan Hinata",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Jalan-Nanjuaku-NAruto.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/UhuhB"
    },
    {
        "title": "Pokemon Pertarungan Dua Saudara",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Pokemon-Pertarungan-Dua-Saudara.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/awy6"
    },
    {
        "title": "Komik Madloki Kamila",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-kamila.jpg?resize=165,225",
        "episode": "Chapter Anal",
        "link": "https://droplink.co/1zX0sp5w"
    },
    {
        "title": "MLBBX Lolita",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/MLBBX-Lolita.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/R6oUStG"
    },
    {
        "title": "Madloki Narutod Hinata dan Sakura",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/MAdloki-Narutod-Hinata-Sakura.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/2jbVUT8t"
    },
    {
        "title": "Sudah Besar Minta ASI",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Sudah-Besar-Minta-Asi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/lKQtb"
    },
    {
        "title": "Tatapan Matanya Membuatku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Tatapan-Matanya-Membuatku.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/Zll3hS0"
    },
    {
        "title": "Boa Hancock",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Boa-Hancock.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/eCq8o4"
    },
    {
        "title": "Boruto Berulah",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Boruto-Berulah.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/SrI14ax"
    },
    {
        "title": "English Comic Camgirl Mia",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Camgirl-Mia.jpg?resize=165,225",
        "episode": "Chapter Read",
        "link": "https://droplink.co/LQREWy"
    },
    {
        "title": "Yuuya dan Ibunya",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Yuya-dan-Ibunya.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/7vJEPCY"
    },
    {
        "title": "Mama San",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/MAma-san.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/17bWY"
    },
    {
        "title": "Hijab 3DX Tough love 3d No Text",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Tough-Love.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/de5m8"
    },
    {
        "title": "English Comic CrispyCheese Live Report 3D",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Live-Report.jpg?resize=165,225",
        "episode": "Chapter Read",
        "link": "https://droplink.co/QFXRt"
    },
    {
        "title": "By Chance",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/By-Chance.jpg?resize=165,225",
        "episode": "Chapter 52 End",
        "link": "https://droplink.co/XzSj"
    },
    {
        "title": "English Comic Midnight Swim",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Midnight-Swim.jpg?resize=165,225",
        "episode": "Chapter Read",
        "link": "https://droplink.co/wsGEaB"
    },
    {
        "title": "Nonton Bola",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Nonton-Bola.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/ov0e"
    },
    {
        "title": "Teman Wanita Yang Sudah Menikah",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Teman-wanita-yang-sudah-menikah.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/Yo2cIdI"
    },
    {
        "title": "English Comic Hijab 3DX Young Love",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Young-Love.jpg?resize=165,225",
        "episode": "Chapter 08",
        "link": "https://droplink.co/wu4NSx"
    },
    {
        "title": "English Comic Hijabholic",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/English-Comic-Hijabholic.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/f0hS"
    },
    {
        "title": "Barbarhicc Hijabizah RAW Full Collection",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Barbarhicc.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/85NJ3"
    },
    {
        "title": "Redoxa Left Over 3D No Text",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Redoxa-Left-Over-3D.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/jj5hDL"
    },
    {
        "title": "Komik 3D Hijab3DX",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/komik-hijab-3dx.jpg?resize=165,225",
        "episode": "Chapter Tough Luck",
        "link": "https://droplink.co/YQAF"
    },
    {
        "title": "Angel’s Tears",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Angel-Tears.jpg?resize=165,225",
        "episode": "Chapter 20",
        "link": "https://droplink.co/WJ0LuFmw"
    },
    {
        "title": "Angel House (Facon)",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Angel-House.jpg?resize=165,225",
        "episode": "Chapter 13 End",
        "link": "https://droplink.co/bVRkzx"
    },
    {
        "title": "Bebih Tukang Pompa",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Bebih-Tukang-Pompa.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/Deqw"
    },
    {
        "title": "Hijabitch RAW Collection",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Hijabitch-RAW-Collection.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/TrhKCErw"
    },
    {
        "title": "Hijabolic Art NSFW RAW",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Hijabolic-Art-NSFW-RAW.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/6Qkf3wV"
    },
    {
        "title": "Crispy Cheese Zakia Ikram",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Zakia-Ikram.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/T5lTLq"
    },
    {
        "title": "Crispy Cheese A Dish Best Serves Cold",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Dishes-Best-Serve-Cold.jpg?resize=165,225",
        "episode": "Chapter Baca"
    },
    {
        "title": "Crispy Cheese Ultimate Punishment 3D",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Intimate-Punishment.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/jx6h"
    },
    {
        "title": "Naughty Hijabista Good Wife 3DX",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Good-Wife.jpg?resize=165,225",
        "episode": "Chapter 03 End",
        "link": "https://droplink.co/Z3lGnTnI"
    },
    {
        "title": "Crispy Cheese Pin Up",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Cryspycheese-Pin-Up.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/f6t2gv"
    },
    {
        "title": "Jilfap3D Nadiya",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Jilfap3D-Nadiya.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/8vPK4xH"
    },
    {
        "title": "Madloki Ketahuan Mama",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Madloki-Ketahuan-Mama.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/txIEOL"
    },
    {
        "title": "Narutod Si Ekor 9 Berulah",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Narutod-9-Rubah-Berulah.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/0EuW6I"
    },
    {
        "title": "Mandi Bareng",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Mandi-Bareng.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/ROAE"
    },
    {
        "title": "The Incredible Family",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/incredibles.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://droplink.co/DQGZF"
    },
    {
        "title": "Noukou Seishi Da Enkou Chan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Noukou-Seishi-Da-Enkou-Chan.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/UgnD"
    },
    {
        "title": "Ceritaku Dengan Ibuku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Ceritaku-dengan-Ibuku.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/nsO4T"
    },
    {
        "title": "Hijabolic Summer 2021",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/photo_2022-01-18_12-24-17.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/oXM3EOz"
    },
    {
        "title": "Teletubbies X",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Teletubbies-X.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/D5uzqMW"
    },
    {
        "title": "Selingkuh Dengan Teman Pacarku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Selingkuh-dengan-pacar-temanku.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/Keycza"
    },
    {
        "title": "Sepongbob X",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Spongebob.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/LZu9"
    },
    {
        "title": "Hijabolic SMA Cantik",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/SMA-CAntik.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/7JVZI"
    },
    {
        "title": "Good Night",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/photo_2022-01-17_07-34-59.jpg?resize=165,225",
        "episode": "Chapter 34 End",
        "link": "https://droplink.co/pPWTVTKD"
    },
    {
        "title": "Madloki Cerita Citra 3D Spin Off Story",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Madloki-Cerita-Citra-3D-Spin-off-Story.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/zxOT"
    },
    {
        "title": "Hijab 3DX Valentine Adik dan Kakak",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/valentine-adik-kakak.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/kJbADDg0"
    },
    {
        "title": "Komik Hijab 3DX The Healer",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/the-healer.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/tXGWbK"
    },
    {
        "title": "Komik Hijab 3DX Sound Garden 3D",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/sound-garden.jpg?resize=165,225",
        "episode": "Chapter 06",
        "link": "https://droplink.co/2MorKeMP"
    },
    {
        "title": "Maid With Love",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Maid-With-Love.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/gnWcx"
    },
    {
        "title": "Dokter Anisa",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Dokter-Anisa.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/nZeaC"
    },
    {
        "title": "Love Me",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/love-me.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/9o3PEySl"
    },
    {
        "title": "Busted and Entertained 3D",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Busted-And-Entertained.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/Z0Om"
    },
    {
        "title": "Hijabiphilia Gangbang Session 3D",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Hijaphobilia-Gangbang-Session-3D.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/LSgs"
    },
    {
        "title": "Mercy",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Mercy.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/wwY3"
    },
    {
        "title": "Little Sister",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Little-Sister.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/jRB7"
    },
    {
        "title": "Fountain Girl",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Fontain-Girl.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/QQfx1"
    },
    {
        "title": "Evelyn",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Eveline.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/VSEZ"
    },
    {
        "title": "Ganyu Genshin Impact",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Ganyu-Genshin-Impact-Batch-01.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/1ebRAE"
    },
    {
        "title": "Mortal Kombat X Sonya vs Scorpion",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Mortal-Kombat-X-Sonya-vs-Scorpion.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/wGihTcb"
    },
    {
        "title": "Natural Desire",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Natural-Desire.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/707hHzk"
    },
    {
        "title": "Amagami Hareem Root",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Amagami.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/XOkZc0n"
    },
    {
        "title": "Ai No Toukakoukan Sword Art Online",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Ai_no_Toukakoukan_SAO.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/aHSIGrl2"
    },
    {
        "title": "Afureru Ai Sword Art Online",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Afurerui-Ai-SAO.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/rxQnx7"
    },
    {
        "title": "Ratu Vape",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Ratu-Vape.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/C9PIYxn"
    },
    {
        "title": "Hijabizah Olah Raga",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Hijabizah-Olahraga.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/yV5ctp4"
    },
    {
        "title": "Diva",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/diva.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/LdLaCNc"
    },
    {
        "title": "Dildo",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Dildo.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/faOjw"
    },
    {
        "title": "Komik Manhwa Boarding Diary Uncensored",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Boarding-diary-uncens.jpg?resize=165,225",
        "episode": "Chapter 20",
        "link": "https://droplink.co/kouFFGo"
    },
    {
        "title": "Ibu Temanku Cantik",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Teman-Ibuku-Cantik.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/fHP8"
    },
    {
        "title": "Hadiah Natal",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Hadiah-Natal.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/mjL1MxkG"
    },
    {
        "title": "Fatal Woman",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Fatal-Woman.jpg?resize=165,225",
        "episode": "Chapter 42 End",
        "link": "https://droplink.co/v50K4ACa"
    },
    {
        "title": "Honoka",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Honoka.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/0WNTO"
    },
    {
        "title": "Cumdump Development",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Cumdump-Development.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/8eRgR"
    },
    {
        "title": "Cow Girl",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Cow-Girl.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/ddgKIhD"
    },
    {
        "title": "Bebih Innerview",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Innerview.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/z9LZxa7"
    },
    {
        "title": "Madloki Guru Ngaji",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/guru-ngaji.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/B1tWWqE"
    },
    {
        "title": "NTR",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Manga-NTR.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/gDacYA"
    },
    {
        "title": "Asuna SAO Batch",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Asuna-SAO.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/0vy7G"
    },
    {
        "title": "Hypno",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Hypno.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/XAl65B5"
    },
    {
        "title": "Teman Masa Kecil",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Teman-MAsa-KEcil.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/BljO9B"
    },
    {
        "title": "Mama Tio",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Mama-Tio.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/VX11BT"
    },
    {
        "title": "Captive",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/CAptive.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/yAE3"
    },
    {
        "title": "Bully Girl",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Bully.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/leJT"
    },
    {
        "title": "Beach",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Beach.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/k0XX"
    },
    {
        "title": "Angelic Milf",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Angelic-Milf.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/Smjlc"
    },
    {
        "title": "Akademi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Akademi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/3N8S2R"
    },
    {
        "title": "Ahri dan Diva",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Ahri-dan-Diva.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/bafkW"
    },
    {
        "title": "Ahri",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Ahri.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/Us8Qdr7"
    },
    {
        "title": "Riven",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Riven.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/OzHaM"
    },
    {
        "title": "Stuck",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Stuck.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/AizIBhgM"
    },
    {
        "title": "Manga Yoga",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/yoga.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/xg6uI3"
    },
    {
        "title": "Blend",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/manga-blend.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/RRsPge"
    },
    {
        "title": "Hijabizah Kerja Lembur",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Hijabizah-Kerja-Lembur.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/HeSyj7hP"
    },
    {
        "title": "NTR Kanojo Kareshi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/MADLOKI-NTR-Kanojo-Kareshi-Vol-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/rVpih"
    },
    {
        "title": "The Fall Of Irelia",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/The-Fall-of-Irelia.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/kfQ45r"
    },
    {
        "title": "Threesome",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Threesome-1.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/7iA3mIL"
    },
    {
        "title": "Snack Time",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Snack-Time.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/Gdo0m"
    },
    {
        "title": "Madloki Cerita citra Artbook",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/ceruta-citra-artbook.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/oLorRIN"
    },
    {
        "title": "Pelayan Toko",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Pelayan-Toko-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/EbE3LgS"
    },
    {
        "title": "Pemandian Air Panas",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Madloki-Pemandian-Air-Panas.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/RX5n8q"
    },
    {
        "title": "Tie Me",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Tie-Me.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/dKrlM3"
    },
    {
        "title": "Girl Should Make A Move First",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Girl-Should-make-a-move-first.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/9m61Iqpv"
    },
    {
        "title": "Sisca and Kipli First Date",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/first-date.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/AE9Pn5u9"
    },
    {
        "title": "Unboxing Pacar",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Unboxing-Pacar.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/O9jw"
    },
    {
        "title": "Okkycreed Bertiga",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/bertiga-1.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/AKXE31"
    },
    {
        "title": "Okkycreed Blow Me Up",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/blow-me-up.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/xxEs1Q1G"
    },
    {
        "title": "Liburan dengan Sepupu yang Montok",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/liburan-dengan-sepupu-yang-montok.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/C68P"
    },
    {
        "title": "Triple Chocolate Fantasy",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/triple-chocolate.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/Eil7iHW"
    },
    {
        "title": "Komik Manhua Stepmother Friend Uncensored",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Manhua-Stepmother-Friend-Uncensored.jpg?resize=165,225",
        "episode": "Chapter 06",
        "link": "https://droplink.co/monMyT"
    },
    {
        "title": "Work From Hotel",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/okkycreed-wfh.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/BarWU"
    },
    {
        "title": "Sai and Ino Quality Time",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Sai-dan-Ino-Quality-Time.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/xIA9X"
    },
    {
        "title": "Okkycreed Bu Boss",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Ibu-Boss.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/STbqyfmj"
    },
    {
        "title": "Jameela Sama Pacar",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/jameela-sama-pacar.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/ZXTaOtDy"
    },
    {
        "title": "Jameela Ngerjain Tugas",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/jameela-ngerjain-tugas.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/mmzk2"
    },
    {
        "title": "Okkycreed Guru BK ku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Guru-BK-ku.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/KusEcy4"
    },
    {
        "title": "Okkycreed Bathup Session",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Bathup-session.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/YPOa"
    },
    {
        "title": "Madloki Manga Long Vacation",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/madloki-ling-vacation.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/abIj9"
    },
    {
        "title": "Okkycreed FFM Sisca Kipli Fiona",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/OkkyCreed-Ffm-siska-kipli-fiona.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/FCY3zR"
    },
    {
        "title": "Okkycreed Buka Puasa",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/buka-puasa.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/DOLK3ON"
    },
    {
        "title": "Okkycreed Attact On Titan X",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/AoT-X.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/vaJU"
    },
    {
        "title": "Okkycreed Toilet Sekolah",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Toilet-Sekolah.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/IsaT"
    },
    {
        "title": "Okkycreed Step Sister",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Step-Sister.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/2EIu"
    },
    {
        "title": "Okkycreed Pulang Kerja",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Pulang-Kerja.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/xqAC"
    },
    {
        "title": "Okkycreed Bu Selly",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Bu-Selly.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/MI66rt"
    },
    {
        "title": "Shingeki no Kyokon Attact On Titan X",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Shingeki-no-Kyokon-Attact-On-Titan-X.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/qqUovjt"
    },
    {
        "title": "Naruto Taikan Kyonyou Shugi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/NarutoTaikan-Kyonyou-Shugi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/p8iPpsu"
    },
    {
        "title": "Naruto Hinata Ganbaru",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Naruto-Hinata-Ganbaru.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/SJMt"
    },
    {
        "title": "Mahouka Koukou no Rettousei",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-8.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/gTRQAkQu"
    },
    {
        "title": "Hijabizah Perjalanan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/hijabizah-perjalanan.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/2xrh"
    },
    {
        "title": "Okkycreed Teman Tapi Mesra",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/ttm.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/VsnNMK"
    },
    {
        "title": "Okkycreed Foto Modus",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Foto-Modus-thumb.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/JwXVVu0"
    },
    {
        "title": "Okkycreed Tanteku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Tanteku.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://droplink.co/gJ7f4"
    },
    {
        "title": "One Piece Nami Batch",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Nami-Batch-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/h3adbY"
    },
    {
        "title": "Roro Jonggrang",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/01-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/sIsFYs"
    },
    {
        "title": "Legenda Timun Mas",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Legenda-timun-mas.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/yvLTH"
    },
    {
        "title": "Kano Mama ga Midarasugiru",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Kano-Mama-ga-Midarasugiru_.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/iqhH"
    },
    {
        "title": "MILF Inspector",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0004.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/kx4gN"
    },
    {
        "title": "Kakkou No Su",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-7.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/NPKz4"
    },
    {
        "title": "Imouto Wa Hikikomori",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-6.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/4clg"
    },
    {
        "title": "Madloki Murid Terbaik",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/madloki-murid-terbaik.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/WHPG2n8j"
    },
    {
        "title": "Sex Friend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/sex-friend.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/8bDf19I"
    },
    {
        "title": "Penghilang Rasa Hasrat Mereka",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0002.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Qzydh"
    },
    {
        "title": "Doraemon Doraentod Shizuka",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Doraemon-doraentod.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/fJf0O1"
    },
    {
        "title": "Doraemon Stand My D",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Doraemon-Stand-my-D.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/Y8vvHAzy"
    },
    {
        "title": "Kurumi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/0022.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/kD4zH"
    },
    {
        "title": "Prime Time",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-5.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/g3Azs"
    },
    {
        "title": "Final Fantasy VII Our X Promises",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-4.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/NIvQlWZp"
    },
    {
        "title": "Doki Doki o X Saiban KonoSuba",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-3.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/Q0vzH9B"
    },
    {
        "title": "Ankai No Umi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-2.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/x35uQO"
    },
    {
        "title": "Naruto Affair Hidden in Leaves",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-1.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/bKeZEmEO"
    },
    {
        "title": "Jameela Ga Pake Jilbab",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/jameela-ga-pake-jilbab.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/uaPZAg"
    },
    {
        "title": "Special Ops Jenny 3D",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Special-Ops-Jenny.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/f6Pe"
    },
    {
        "title": "Madloki PopJazx BQN",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/02.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/9R35"
    },
    {
        "title": "Shoujo To Uraroji",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/0011.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/os10"
    },
    {
        "title": "Avenger Hulk dan Black Widow",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0003.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/aKsYg"
    },
    {
        "title": "Menebus Kenakalan Adik",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/K9EB"
    },
    {
        "title": "Komik Madloki Sister In Trouble",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Sisiter-In-Trouble.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/sFzLtH"
    },
    {
        "title": "Okkycreed Guru BK",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/02-3.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/BMxH"
    },
    {
        "title": "Madloki New IndahMaret",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-indahmaret.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/3r7w"
    },
    {
        "title": "Mama Para Chijo Zukan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/mama-para-zukan.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/RUEbwgX5"
    },
    {
        "title": "Morning Sexercise 3D",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/morning-sexercise.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/AW3qOPE4"
    },
    {
        "title": "Madloki Aku dan Temen Kakakku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/madloki-aku-dan-temen-kakakku.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/v0HOW"
    },
    {
        "title": "Okkycreed Truth Or Dare",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/truth-or-dare.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/FuG5VR"
    },
    {
        "title": "Bebih Vhamper",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/03.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/gfFLiAz"
    },
    {
        "title": "Sinar Jaya Gurih Service Ulang Tahun",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/sjg-ulang-tahun.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/9wrVmW"
    },
    {
        "title": "Gwen Going On A Date",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/gwen.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/LIZcRd0m"
    },
    {
        "title": "Kare To Watashi No Kowareta",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/manga-madloki-kowareta.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Jup2Ij"
    },
    {
        "title": "Chubby n Sensual Neighbour Mrs Wulan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/chubby-sensual-neighbour-mrs-wulan.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/6OVWpw"
    },
    {
        "title": "Komik Madloki Widia Before Story",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/widia-before-story.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://droplink.co/Gvmw1u"
    },
    {
        "title": "Es No Madobe",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/es-no-madobe.jpg?resize=165,225",
        "episode": "Chapter 04 End",
        "link": "https://droplink.co/8S9Bm"
    },
    {
        "title": "Fitting Room 3D",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/fitting-room.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/QgKaZ"
    },
    {
        "title": "Komik Hijabizah Cermin",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/02-4.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/6zIf7ERF"
    },
    {
        "title": "Dudu Primal 3D",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/primal.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/biL9m"
    },
    {
        "title": "Street Fighter Chun li X",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/chunli-X.jpg?resize=165,225",
        "episode": "Chapter Vacation",
        "link": "https://droplink.co/5TKUQ"
    },
    {
        "title": "Detective Conan X",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/conan-det.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/rKpvU"
    },
    {
        "title": "Madloki Jam Pelajaran",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/01-3.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/nedo8D"
    },
    {
        "title": "Wonder Woman 3D",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/wonder-woman.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/URfng9n"
    },
    {
        "title": "Madloki Makochan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/makochan-1.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/Ta4tqc"
    },
    {
        "title": "Mukarata Fan Art",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/mukarata.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/OsxC1yy"
    },
    {
        "title": "Madloki Uzaki Chan Wa H Sitai",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Madloki-Manga-Uzaki-Chan-Wa-H-Sitai.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/3gFn"
    },
    {
        "title": "Bebih Vape Vape Awh",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-9.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/hkeUY"
    },
    {
        "title": "Bebih Tshugedhee",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-8.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/ArgXH9"
    },
    {
        "title": "Bebih De Betmen",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/img30.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/r0MNL2"
    },
    {
        "title": "Bebih Balada Neji",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/01-2.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/ODZYnJL"
    },
    {
        "title": "Bebih Balada Digital Artis",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-7.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/17F7"
    },
    {
        "title": "An Adult Experience",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/adult-experience2.jpg?resize=165,225",
        "episode": "Chapter 30 End",
        "link": "https://droplink.co/9XI4k"
    },
    {
        "title": "Kharisma Jati Kacang Tanah",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-6.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/tAQhB4mC"
    },
    {
        "title": "Imaizumin",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Imaizumin-2.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://droplink.co/jiMaNau4"
    },
    {
        "title": "Will You Do As I Say",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/will-you-do-as-i-say.jpg?resize=165,225",
        "episode": "Chapter 20 End",
        "link": "https://droplink.co/6QNOUngC"
    },
    {
        "title": "Twin Milf",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/twin-milf.jpg?resize=165,225",
        "episode": "Chapter 09",
        "link": "https://droplink.co/jTnzFMY"
    },
    {
        "title": "Komik Keluarga Bahagia",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Keluarga-Bahagia.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/BG01"
    },
    {
        "title": "Sebuah Cerita Adik Kakak",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/sebuah-cerita-adik-kakak.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/05WJD"
    },
    {
        "title": "Bawang Merah dan Bawang Putih 3D",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/bawang-putih-bawang-merah.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/FVowt"
    },
    {
        "title": "Adik Sunat 3D",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Adik-Sunat.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/VcS2IVyZ"
    },
    {
        "title": "Ibu Kostku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/ibu-kostku.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/EFTiO"
    },
    {
        "title": "Susu Mama",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Susu-Mama.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/wAxkW"
    },
    {
        "title": "Lolly Second Sweat",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Lolly-second-sweat.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/NLue"
    },
    {
        "title": "Petualangan Arif dan Bu Wulan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/petualangan-arif-dan-bu-wulan.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/CBNR"
    },
    {
        "title": "Mawar Hitam",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Vidi-Veci-Veni-Mawar-Hitam.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/z7FK"
    },
    {
        "title": "Anis dan Siti",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Anis-dan-siti.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/4C8PsQVI"
    },
    {
        "title": "Indekost Lusi Gadis Model",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Indekost-Lucy.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/6SiKJi"
    },
    {
        "title": "Komik Polwan Nurul",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Polwan-Nurul.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/YVJpp"
    },
    {
        "title": "Komik Masa SMA",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/masa-sma.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/ClbQ"
    },
    {
        "title": "Onta Arab Hijab Art",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/onta-arab.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/v5NRU"
    },
    {
        "title": "Budhe Nagih Uang Kost",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/bude-nagih-uang-kos.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/eGmgSod"
    },
    {
        "title": "Komik Boboiboy X",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/komik-boboiboy.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/XfDuGTC"
    },
    {
        "title": "Komik Malaysia Bolapistar",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bolapistar.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/uty8Jxe"
    },
    {
        "title": "Bebih Whanpysh",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/02-2.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/YsIip1"
    },
    {
        "title": "Bebih Warkop Manteb Manteb",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/03-1.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/yyBw"
    },
    {
        "title": "Bebih Superbebh",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/01-1.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/OUBAPz"
    },
    {
        "title": "Bebih Keluar Di Dalam",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/01.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/YDu9QK"
    },
    {
        "title": "Komik Hijabitch Kakakku Tidur",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/03.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/jBI1O6DR"
    },
    {
        "title": "Hijabitch Susu Kakakku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/susu-kakakku.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/cCRA6qsu"
    },
    {
        "title": "Komik Bebih WFH",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bebih-wfh.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/9SjpxXwG"
    },
    {
        "title": "Bebih Longest Titit Ever",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Longest-titit.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/mc94"
    },
    {
        "title": "Bebih Cinta Buta",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/cinta-buta.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/W7prTjkS"
    },
    {
        "title": "Bebih Kampus Biru",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/kampus-biru.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/DZiZ2guL"
    },
    {
        "title": "Bebih Saskia E nya Lima",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Saskia-E-nya-Lima.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/drVpjnJ"
    },
    {
        "title": "Bebih The Guna Guna",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Guna-guna.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/hup8"
    },
    {
        "title": "Komik Bebih Kuli Panggul",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Kuli-Panggul.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/pYr0MVZ"
    },
    {
        "title": "Bebih Pakan Manuk",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Pakan-MAnuk.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/2E7A"
    },
    {
        "title": "Bebih Medusa Mencari Cinta",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Medusa-mencari-cinta.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/cFr5eW"
    },
    {
        "title": "Bebih Warkop Pangku Remes",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Warkop-Pangku-Remes.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/4Ke6ufso"
    },
    {
        "title": "Bebih Popcorn",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/popcorn.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/lgQ64"
    },
    {
        "title": "Bebih Olahraga Pagi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/olahraga-pagi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/1TD6oh8J"
    },
    {
        "title": "Komik Bebih Bintang Limanya Neng",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Bintang-limanya.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/x0hGn"
    },
    {
        "title": "Komik Bebih Jeni Yes Papah",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/img28.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/K4b6"
    },
    {
        "title": "Komik Bebih Pisau Tumpul",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Pisau-Tumpul.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/XI1b4"
    },
    {
        "title": "Komik Bebih Pinnokkhio",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Pinnokhiyoh.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/nzh5ZM"
    },
    {
        "title": "Komik Bebih Pacar Gamer",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/pacar-gamer.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/0nTPxaFP"
    },
    {
        "title": "Komik Bebih Pacarku Babang Ojol",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Pacarku-Babang-Ojol.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/6kunV7Ri"
    },
    {
        "title": "Komik Bebih Om Manis",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/om-manis.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/mEiPhbg"
    },
    {
        "title": "Komik Bebih Nirmili dan Kiko",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Nirmili-dan-Kiko.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/58niWc"
    },
    {
        "title": "Komik Bebih Night Error",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Night-Error.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/DBfLiBpx"
    },
    {
        "title": "Komik Bebih Masukin Mas",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/masukin-mas.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/NuOb6B"
    },
    {
        "title": "Komik Bebih Lupa Tugas",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Lupa-Tugas.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/rMhrh"
    },
    {
        "title": "Komik Bebih Lupa Nama Inget Rasa",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/lupa-nama-ingat-rasa.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/IWoKbN"
    },
    {
        "title": "Komik Bebih Kode Rahasia Istri",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/kode-rahasia-istri.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/FM2b6"
    },
    {
        "title": "Komik Bebih Kisah Bercinta",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/kisah-bercinta.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/lXcC"
    },
    {
        "title": "Komik Bebih Kepribadian Istri",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/kepribadian-istri.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/A4aY"
    },
    {
        "title": "Komik Bebih Derita Kawat Gigi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Derita-kawat-gigi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/8gxenL"
    },
    {
        "title": "Komik Bebih Es Krim Pelangi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/es-krim-pelangi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/ePz4K5a9"
    },
    {
        "title": "Komik Bebih Bocil Naik Angkot",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/bocil-naik-angkot.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/it72Z"
    },
    {
        "title": "Komik Bebih Bukakin Dong",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/img20.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/SeA7HN2"
    },
    {
        "title": "Komik Bebih Fake Asisten Dosen",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Fake-Asdos.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/LDW92"
    },
    {
        "title": "Komik Bebih Susu Murnih",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/susu-murnih.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/wZzTBe"
    },
    {
        "title": "MILF Airline",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/photo_2021-11-21_12-47-38.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/xISFf"
    },
    {
        "title": "Madloki Ayah dan Anak",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-ayah-dan-anak.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/9PJoQia"
    },
    {
        "title": "Madloki Fake Love",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/fake-love.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/0kqWIwiE"
    },
    {
        "title": "Madloki Tsuma Omoi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Tsuma-Omoi.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/j27D7"
    },
    {
        "title": "Madloki Seiseki UP O Jouken Ni Mainichi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Seiseki-UP-O-Jouken-Ni-Mainichi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/7C3SdYP"
    },
    {
        "title": "Madloki Ribbon No Ochita Hi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Ribbon-No-Ochita-Hi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/C5qN6Jx2"
    },
    {
        "title": "Madloki Tradisi Desa",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/tradisi-desa.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/pjmbFbZq"
    },
    {
        "title": "Madloki Hukuman Adik Kelas",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/hukuman-adik-kelas.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/QIV50C"
    },
    {
        "title": "Madloki Saimin Hitozuma",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/saimin-hitozuma.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/XgzLLGwB"
    },
    {
        "title": "Madloki Suki Na Hito Nii Kawaii",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/suki-na.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/jA9rG"
    },
    {
        "title": "Madloki Kanojo No Mama",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/kanojo-no-mama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/CK7WYaqe"
    },
    {
        "title": "Madloki Yama Girl o Aokan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/yama-girl.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/vUkIHQ2"
    },
    {
        "title": "Madloki Oku sama wa Aitsu no Niku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Oku-sama-wa-Aitsu-no-Niku.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/0kU7"
    },
    {
        "title": "Madloki Papa To Mama Ga Inai",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/papa-to-mama-ga-inai.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/IpoHv"
    },
    {
        "title": "Madloki Ochiba Tori",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/ochiba-tori.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/8XzqMTKh"
    },
    {
        "title": "Madloki Hitozuma Osananajimito",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Hitozuma-osananajimito.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/cFHvABm"
    },
    {
        "title": "Komik Madloki Anzen Roshutsu",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Anzen-Roshutsu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Q1x6t"
    },
    {
        "title": "Komik Madloki Predator",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-predator-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/RonTl"
    },
    {
        "title": "Komik Madloki Bunda Pertiwi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-bunda-pertiwi.jpg?resize=165,225",
        "episode": "Chapter 01-02",
        "link": "https://droplink.co/gwox"
    },
    {
        "title": "Komik Madloki Cabe Cabean",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Cabe-cabean.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/FVqu"
    },
    {
        "title": "Madloki My Mom Can Satisfy Us",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/mom-can-satisfy-us.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/GPmb"
    },
    {
        "title": "Komik Madloki Belajar Biologi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/belajar-biologi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/hze0U"
    },
    {
        "title": "Komik Madloki Ibuk dan Akik",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/ibu-dan-akik.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/vk17"
    },
    {
        "title": "Komik Madloki POV Your Sexy Gamer Girlfriend",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/pov-your-sexy-gamer.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/nS3N2"
    },
    {
        "title": "Komik Madloki Special Service",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/special-service.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/iRYXPo0"
    },
    {
        "title": "Komik Madloki Unboxing Lolicimos",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/lolicimous.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/JiXAx"
    },
    {
        "title": "Komik Madloki LEWD Chronicles",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/lewd-collection.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/rDALG3xb"
    },
    {
        "title": "Komik Madloki Ketua Osis",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Ketua-Osis.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/rY48wYj"
    },
    {
        "title": "Komik Madloki Kartika Sari",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/kartika-sari.jpg?resize=165,225",
        "episode": "Chapter 02 End",
        "link": "https://droplink.co/JuJwF"
    },
    {
        "title": "Komik Madloki Guru Terindah",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/guru-terindah.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/rRMpf13e"
    },
    {
        "title": "Komik Madloki Gamer Jilboob",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/gamer-Jilboob.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/uQwxc9"
    },
    {
        "title": "Komik Okkycreed Bioskop",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bioskop-okkycreed.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/krYda"
    },
    {
        "title": "Komik Madloki LDR Couple Story",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/ldr-couple-story.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/hvzL"
    },
    {
        "title": "Komik Madloki Strip X",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/strip-x-madloki.jpg?resize=165,225",
        "episode": "Chapter Mini Artbook",
        "link": "https://droplink.co/bRZe1"
    },
    {
        "title": "Komik Madloki Miss Esa",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/miss-esa.jpg?resize=165,225",
        "episode": "Chapter Artbook",
        "link": "https://droplink.co/yeLv"
    },
    {
        "title": "Komik Madloki Ukhty Nakal Webcam",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/ukhty-webcam.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/ZnJg6"
    },
    {
        "title": "Komik Madloki Ningsih",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-ningsih.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/vChiIDFo"
    },
    {
        "title": "Komik Madloki My Hyper Girlfriend",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloky-hyper-girlfriend.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://droplink.co/LmuBf"
    },
    {
        "title": "Komik Madloki Bangunin Sahur",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bangunin-sahur.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/uwL9uXo"
    },
    {
        "title": "Komik Sinar Jaya Gurih Naruto",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-naruto.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/3RVZ"
    },
    {
        "title": "Komik Sinar Jaya Gurih Versi Manga",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/manga-version-1.jpg?resize=165,225",
        "episode": "Chapter Hero Akademia",
        "link": "https://droplink.co/SI1Kze5"
    },
    {
        "title": "Komik Sinar Jaya Gurih One Piece",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-one-piece.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/rKe6L"
    },
    {
        "title": "Komik Sinar Jaya Gurih Tukang Jamu",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-tukang-jamu.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/1NOz3Pp"
    },
    {
        "title": "Komik Sinar Jaya Gurih Ibu dan Kakak Sedang Hamil",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-ibu-kakak-hamil.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/211ga"
    },
    {
        "title": "Komik Jambu Madu Jack dan Ana",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/jambu-madu-jack-dan-ana.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/e8P2Kj"
    },
    {
        "title": "Komik Sinar Jaya Gurih Paket X",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/paket-x.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/68G79"
    },
    {
        "title": "Komik Sinar Jaya Gurih Tersandung",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/tersandung.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/0dXJ"
    },
    {
        "title": "Komik Sinar Jaya Gurih Chicken Dinner",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/chicken-diner.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/m1goMn"
    },
    {
        "title": "Komik Sinar Jaya Gurih Nyuci di Sungai",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/mandi-disungai.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/Q9ok"
    },
    {
        "title": "Komik Sinar Jaya Gurih Mantan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-mantan.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/PHnXi"
    },
    {
        "title": "Komik Sinar Jaya Gurih Belajar Bersama",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/belajar-bersama.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/PZUJF"
    },
    {
        "title": "Komik Sinar Jaya Gurih Pulang Sekolah",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-pulang-sekolah.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/5GMz"
    },
    {
        "title": "Komik Sinar Jaya Gurih Kartu Kredit",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/kartu-kredit.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/wcuHgZU"
    },
    {
        "title": "Komik Sinar Jaya Gurih Grape Grepe",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/grape-grepe.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/qPhizpUM"
    },
    {
        "title": "Komik Sinar Jaya Gurih Ngintip Adik Mandi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/ngintip-adik-mandi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/FGP1sdd"
    },
    {
        "title": "Komik Sinar Jaya Gurih AC Rusak",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/ac-rusak.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/oSEQOR"
    },
    {
        "title": "Komik Sinar Jaya Gurih Tetes Mata",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/tetes-mata.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/vZu8gZ"
    },
    {
        "title": "Komik Sinar Jaya Gurih Rival",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/rival.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/7GdE"
    },
    {
        "title": "Komik Sinar Jaya Gurih Bakso",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bakso.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/ga6hD"
    },
    {
        "title": "Komik Sinar Jaya Gurih Bayar SPP Marina",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/spp-marina.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/PTz2"
    },
    {
        "title": "Komik Sinar Jaya Gurih Javart Lovely Idol",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Javart-Lovely.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/YvdY5bm"
    },
    {
        "title": "Komik Sinar Jaya Gurih Nolongin Hantu Sodok Oh",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Hantu-Sodok-oh.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/qSrMxI"
    },
    {
        "title": "Komik Sinar Jaya Gurih Kuda Kudaan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/kuda-kudaan.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/wk7m98"
    },
    {
        "title": "Komik Sinar Jaya Gurih Antar Paket",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/antar-paket-sjg.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/68G79"
    },
    {
        "title": "Komik Sinar Jaya Gurih Panjat Pinang",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/panjat-pinang.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/tCJPRf8"
    },
    {
        "title": "Komik Sinar Jaya Gurih Pocong",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/pocong.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/ZLr8oW1q"
    },
    {
        "title": "Komik Sinar Jaya Gurih Noba Ulangan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/noba-ulangan.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/WnRvAd7E"
    },
    {
        "title": "Komik Sinar Jaya Gurih Mirror Selfie",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Mirror-Selfie.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/wTFyS3Ni"
    },
    {
        "title": "Komik Sinar Jaya Gurih Menginap",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-menginap.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/RHkMwVO"
    },
    {
        "title": "Komik Sinar Jaya Gurih Jelangkung",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/jelangkung.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/JmEfZ"
    },
    {
        "title": "Komik Sinar Jaya Gurih Indomaret",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-indomaret.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/jGi3YzY"
    },
    {
        "title": "Komik Sinar Jaya Gurih Dora Diculik",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/dora-diculik.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/6tSPw19"
    },
    {
        "title": "Komik Sinar Jaya Gurih Anak Angkat",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/anak-angkat.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/HTajh"
    },
    {
        "title": "Komik Sinar Jaya Gurih Nidurin Adek",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/nidurin-adek.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/QcowTx"
    },
    {
        "title": "Komik OkkyCreed Temennya Pacar Gue",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/temennya-pacar-gue.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/HoNZ6mtq"
    },
    {
        "title": "Komik Okkycreed Sekretaris Baru",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/sekretaris-baru.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/FwYoOK"
    },
    {
        "title": "Komik Okkycreed Naruto Kakak Ipar",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/naruto-kakak-ipar.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/xXea4"
    },
    {
        "title": "Komik Okkycreed Kipli Main di Bath Up",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bath-up.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/pd0cLLS"
    },
    {
        "title": "Komik Okkycreed Pura Pura Gay",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/pura-pura-gay.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/tK4jf"
    },
    {
        "title": "Komik Okkycreed Basement",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/basement.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/zmbLnx"
    },
    {
        "title": "Komik OkyCreed Buka Puasa",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/img14.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/MMqByy"
    },
    {
        "title": "Komik Okycreed Cuma Mimpi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/cuma-mimpi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/dbkV"
    },
    {
        "title": "Komik OkkyCreed Bertiga",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/okkycreed-bertiga.jpg?resize=165,225",
        "episode": "Chapter Full Part",
        "link": "https://droplink.co/8vRrwvz"
    },
    {
        "title": "Komik OkkyCreed Ibu Boss",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/ibu-boss.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/9bWk"
    },
    {
        "title": "Komik Okycreed Istri Cosplay",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/cosplay.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/4Di4Mx"
    },
    {
        "title": "Komik Okycreed Mainan Baru",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/mainan-baru.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/5fnotBs"
    },
    {
        "title": "Komik Okycreed Dimasakin Siska",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/dimasakin-siska.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/1Uyv"
    },
    {
        "title": "Komik Okkycreed Kakak Tiri",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/kakak-tiri.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/fCUuhK1"
    },
    {
        "title": "Komik Noir Neko Kunti Chan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/noir-neko-kunti-chan.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/WqG9y0W"
    },
    {
        "title": "Komik Boxgurih Pandemi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurih-pandemi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/8AZkW"
    },
    {
        "title": "Komik Boxgurih Main ke Goa Mama",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurih-main-ke-goa-mama.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/PjySuql"
    },
    {
        "title": "Komik Boxgurih Tante Mamarik",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/tante-mamarik.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/tNjfBmV"
    },
    {
        "title": "Komik Boxgurih AWM",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurih-AWM.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://droplink.co/MKDBTM"
    },
    {
        "title": "Komik Manhwa Unwanted Roommate",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/unwanted-roommate.jpg?resize=165,225",
        "episode": "Chapter 19 End",
        "link": "https://droplink.co/fKO8fwy"
    },
    {
        "title": "Komik Manhwa Ajeossi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/photo_2021-11-11_19-31-45.jpg?resize=165,225",
        "episode": "Chapter 64",
        "link": "https://droplink.co/N3lOv0"
    },
    {
        "title": "Komik Hijabizah Sanksi Kerja",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabizah-sanksi-kerja.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/rMqJi"
    },
    {
        "title": "Komik Manga Bocil Sultan",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/bocil-sultan.jpg?resize=165,225",
        "episode": "Chapter 08",
        "link": "https://droplink.co/cTXwkmF"
    },
    {
        "title": "Komik Hijabitch Kakakku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabitch-kakakku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/wflJwg"
    },
    {
        "title": "Komik Hijabitch Kakak Masak",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabitch-kakak-masak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/xePcZ"
    },
    {
        "title": "Komik Hijabholic Punishment",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/punishment.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/QIzAmuGd"
    },
    {
        "title": "Komik Hijabolic Bunda Oh Bunda",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/bunda-oh-bunda.jpg?resize=165,225",
        "episode": "Chapter No Text",
        "link": "https://droplink.co/QlCeiDT"
    },
    {
        "title": "Komik Hijabolic Forbidden Couple Abi and Daughter",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Forbidden-couple-abi.jpg?resize=165,225",
        "episode": "Chapter No Text",
        "link": "https://droplink.co/HlYjd2B"
    },
    {
        "title": "Komik Hijabolic Hijabi Art",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabi-art.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/LtP3IyNj"
    },
    {
        "title": "Komik Hijabolic Tante Marwah",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/tante-marwah.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/0BYp"
    },
    {
        "title": "Komik Hijabolic Tahun Baru",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabolic-new-year.jpg?resize=165,225",
        "episode": "Chapter China NY",
        "link": "https://droplink.co/BftBwH"
    },
    {
        "title": "Komik Hijabolic Bantu Masak",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Hijabolic-Bantu-Masak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/b2rG"
    },
    {
        "title": "Komik Jambu Madu Banned Episode",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/0004.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/50xqsGg"
    },
    {
        "title": "Komik Jambu Madu Baby Sitter Terbaik",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Jambu-Madu-Baby-Sitter-Terbaik.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/s3CB7Ema"
    },
    {
        "title": "Komik Jambu Madu Berdelapan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Jambu-Madu-Berdelapan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/N6ietY"
    },
    {
        "title": "Komik Jambu Madu Kak Mia",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Jambu-Madu-Kak-Mia.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/GhbK"
    },
    {
        "title": "Komik Jambu Madu Battle Of Crott",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Jambu-Madu-Battle-Of-Crott.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Ysmi"
    },
    {
        "title": "Komik Jambu Madu Sekali vs Berkali-kali",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Jambu-Madu-Sekali-vs-Berkali-kali.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/lEhhvZ"
    },
    {
        "title": "Komik Jambu Madu Bahaya Ospek Online",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/jambu-madu-bahaya-opspek-online.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/aIcaRc6Z"
    },
    {
        "title": "Komik Jambu Madu Bau",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/jambu-madu-bau.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/8I4i55"
    },
    {
        "title": "Komik Jambu Madu Drama Sinetron",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/jambu-madu-drama-indosiar.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/xrRV"
    },
    {
        "title": "Komik Komikus Fasik",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/surti-komikus-Fasik.jpg?resize=165,225",
        "episode": "Chapter Terpakai",
        "link": "https://droplink.co/hfTJb"
    },
    {
        "title": "Komik Sinar Jaya Gurih Arisan",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-arisan-1-e1636386387470.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/udFOpG8"
    },
    {
        "title": "Komik Hijabolic Arisan Waktunya Pulang",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabolic-Arisan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/PFX7IF2F"
    },
    {
        "title": "Komik Hijabolic Forbidden Couple",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabolic-forbidden-couple.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/ggsau"
    },
    {
        "title": "Komik Madloki Special Tutor",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/special-tutor.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://droplink.co/yu0XHd"
    },
    {
        "title": "Komik Madloki Kasih",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-kaish.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/wADFx"
    },
    {
        "title": "Komik Manga Sisuana Sister Hole",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/manga-sisuana.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/IS38EC"
    },
    {
        "title": "Komik Madloki Indahmaret",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/INDAHMARET.jpg?resize=165,225",
        "episode": "Chapter Remake",
        "link": "https://droplink.co/8rUIq9"
    },
    {
        "title": "Komik Madloki Love Kost 21",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/love-kost.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/eS44MGCT"
    },
    {
        "title": "Komik Madloki Macan Langka",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Mama-Langka.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://droplink.co/TOXrlhHB"
    },
    {
        "title": "Komik Madloki Dad Love Me",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/dad-love-me.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/DwvLQiGy"
    },
    {
        "title": "Komik Hijabizah Coffee Break",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabizah-coffee-break.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/YkKs06"
    },
    {
        "title": "Komik Hijabizah Pertemuan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabizah-pertemuan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/d92G3rk"
    },
    {
        "title": "Komik Hijabizah Makan Siang",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabizah.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/tk2Qx3dM"
    },
    {
        "title": "Komik Madloki Widia dan Abah",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Untitled.jpg?resize=165,225",
        "episode": "Chapter 08",
        "link": "https://droplink.co/6oWOYZkY"
    },
    {
        "title": "Komik BoxGurih Suster Lisa",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurihsuster-lisa.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/nrMBge"
    },
    {
        "title": "Komik BoxGurih Godaan Setan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurih-Setan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/Y094ZIke"
    },
    {
        "title": "Komik Madloki Cerita Citra Fan Art",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-citra-fan-art.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/zqEVIiDS"
    },
    {
        "title": "Komik Madloki Cerita Citra Spin Off Story",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-citra-spin-off.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/VFvxw"
    },
    {
        "title": "Komik Madloki Cerita Citra",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-citra.jpg?resize=165,225",
        "episode": "Chapter 08",
        "link": "https://droplink.co/7DZvIGjo"
    },
    {
        "title": "Komik BoxGurih Jajan Mart",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurih-jajan-mart.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://droplink.co/EyayA"
    },
    {
        "title": "Komik Boxgurih Pulang Sekolah",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurih-pulang-sekolah.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://droplink.co/8i76jvRG"
    },
    {
        "title": "Komik Bebih KKN Kuliah Kerja Nyewek",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bebih-kkn.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/3pLr"
    },
    {
        "title": "Komik Bebih Rumor Berenang",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/bebih-berenang.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/1E43MMVX"
    },
    {
        "title": "Komik Bebih Vibrator",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/bebih-vibrator.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/dqpU"
    },
    {
        "title": "Komik Kharisma Jati Cerita Budi di SMP Cabul Mesum",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/budi-smp.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/mN1ctGZ7"
    },
    {
        "title": "Komik Kharisma Jati Bejat",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-3.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/CWs1WP"
    },
    {
        "title": "Komik Kharisma Jati Faithless",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-2.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://droplink.co/zDBRV"
    }
  ],
  
  callback: function (data, pagination) {
      var dataHtml = '';
      $.each(data, function (index, item) {
          dataHtml += '<div class="row sort-item"><a href="' + item.link + '" target="_blank" style="color:black"><img id="poster" src="' + item.poster + '" width="100%" height="200" style="object-fit: cover;"></a><span style="font-size:10pt;margin-top:5px"><b>'+ item.episode +'</b></span><p id="juduldua" align="left" style="margin-top:-1px">' + item.title + '</p></div>';
          });

          $("#data-komik").html(dataHtml);
        }
    })
  })