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
        "title": "S-Mate",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/S-Mate.jpg?resize=165,225",
        "episode": "Chapter 20"
    },
    {
        "title": "An Ardent Teaching Life",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/An-Ardent-Teaching-Life.jpg?resize=165,225",
        "episode": "Chapter 17",
        "link": "https://www.mirrored.to/files/5LLZBGVS/[Doudesu]_An_Ardent_Teaching_Life_17.pdf_links"
    },
    {
        "title": "She Is Working Out",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/photo_2022-03-02_10-53-28.jpg?resize=165,225",
        "episode": "Chapter 41",
        "link": "https://www.mirrored.to/files/BMXX8JHE/[Doudesu]_She_Is_Working_Out_41.pdf_links"
    },
    {
        "title": "Switch On",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Switch-On.jpg?resize=165,225",
        "episode": "Chapter 21",
        "link": "https://www.mirrored.to/files/M0NP6F9M/[Doudesu]_Switch_On_21.pdf_links"
    },
    {
        "title": "Queen Bee",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Queen-Bee.jpg?resize=165,225",
        "episode": "Chapter 229",
        "link": "https://www.mirrored.to/files/08SC3BNY/[Doudesu]_Queen_Bee_229.pdf_links"
    },
    {
        "title": "Twenty",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Twenty.jpg?resize=165,225",
        "episode": "Chapter 45",
        "link": "https://www.mirrored.to/files/0I6NDUVM/[Doudesu]_Twenty_45.pdf_links"
    },
    {
        "title": "Banging My Aunt",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Banging-My-Aunt.jpg?resize=165,225",
        "episode": "Chapter 48",
        "link": "https://www.mirrored.to/files/1OYHR7LF/[Doudesu]_Banging_My_Aunt_48.pdf_links"
    },
    {
        "title": "My Wife’s Friend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Wife-Friend.jpg?resize=165,225",
        "episode": "Chapter 64",
        "link": "https://www.mirrored.to/files/1JARPOLS/[Doudesu]_My_Wife_s_Friend_64.pdf_links"
    },
    {
        "title": "Madam",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Madam.jpg?resize=165,225",
        "episode": "Chapter 24",
        "link": "https://www.mirrored.to/files/45QZKFV3/[Doudesu]_Madam_24.pdf_links"
    },
    {
        "title": "Everything About Best Friend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Everything-About-Best-Friend.jpg?resize=165,225",
        "episode": "Chapter 64",
        "link": "https://www.mirrored.to/files/1WJ7EO4S/[Doudesu]_Everything_About_Best_Friend_64.pdf_links"
    },
    {
        "title": "Hey, Handsome",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Hey-Handsome.jpg?resize=165,225",
        "episode": "Chapter 90",
        "link": "https://www.mirrored.to/files/1MWKZQEM/[Doudesu]_Hey,_Handsome_90.pdf_links"
    },
    {
        "title": "Doki Doki Connection",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Doki-Doki-Connection.jpg?resize=165,225",
        "episode": "Chapter 20",
        "link": "https://www.mirrored.to/files/0HJJ0ERU/[Doudesu]_Doki_Doki_Connection_20.pdf_links"
    },
    {
        "title": "H-Mate",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/H-Mate.jpg?resize=165,225",
        "episode": "Chapter 93"
    },
    {
        "title": "Living With A MILF",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Living-With-A-MILF.jpg?resize=165,225",
        "episode": "Chapter 37",
        "link": "https://www.mirrored.to/files/UECHGFIO/[Doudesu]_Living_With_A_MILF_37.pdf_links"
    },
    {
        "title": "Secret Class",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Secret-Class.jpg?resize=165,225",
        "episode": "Chapter 137",
        "link": "https://www.mirrored.to/files/13BOHEKA/[Doudesu]_Secret_Class_137.pdf_links"
    },
    {
        "title": "Illicit Love",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Illicit-Love.jpg?resize=165,225",
        "episode": "Chapter 28",
        "link": "https://www.mirrored.to/files/1FAOF4IO/[Doudesu]_Illicit_Love_28.pdf_links"
    },
    {
        "title": "Dorm Room Sisters",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Dorm-Room-Sisters.jpg?resize=165,225",
        "episode": "Chapter 57",
        "link": "https://www.mirrored.to/files/1N3F2UQJ/[Doudesu]_Dorm_Room_Sisters_57.pdf_links"
    },
    {
        "title": "A Different Class",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/A-Different-Class.jpg?resize=165,225",
        "episode": "Chapter 35",
        "link": "https://www.mirrored.to/files/ZYEZMZCS/[Doudesu]_A_Different_Class_35.pdf_links"
    },
    {
        "title": "A Good Day to Camp",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/A-Good-Day-to-Camp.jpg?resize=165,225",
        "episode": "Chapter 27",
        "link": "https://www.mirrored.to/files/OO1UZOFH/[Doudesu]_A_Good_Day_to_Camp_27.pdf_links"
    },
    {
        "title": "Close Family",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Close-Family.jpg?resize=165,225",
        "episode": "Chapter 13",
        "link": "https://www.mirrored.to/files/GTQTV3MR/[Doudesu]_Close_Family_13.pdf_links"
    },
    {
        "title": "My Wives",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/My-Wives.jpg?resize=165,225",
        "episode": "Chapter 44"
    },
    {
        "title": "Sponsor Me Please",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Sponsor-Me-Please.jpg?resize=165,225",
        "episode": "Chapter 10"
    },
    {
        "title": "She Is Working Out",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/photo_2022-03-02_10-53-28.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://www.mirrored.to/files/12VON0K2/[Doudesu]_She_Is_Working_Out_40.pdf_links"
    },
    {
        "title": "Stepmother’s Friend",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Stepmothers-Friend.jpg?resize=165,225",
        "episode": "Chapter 125",
        "link": "https://www.mirrored.to/files/1MMWOQCI/[Doudesu]_Stepmother_s_Friends_125.pdf_links"
    },
    {
        "title": "The Night King Using App",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/The-Night-King-Using-App.jpg?resize=165,225",
        "episode": "Chapter 24",
        "link": "https://www.mirrored.to/files/GAO3DLEK/[Doudesu]_The_Night_King_using_App_Chapter_24.pdf_links"
    },
    {
        "title": "Childhood Bride",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Childhood-Bride.jpg?resize=165,225",
        "episode": "Chapter 11",
        "link": "https://www.mirrored.to/files/0UOWTRUI/[Doudesu]_Childhood_Bridge_11.pdf_links"
    },
    {
        "title": "New Town",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/New-Town.jpg?resize=165,225",
        "episode": "Chapter 48",
        "link": "https://www.mirrored.to/files/85PKLMOL/[Doudesu]_New_Town_48.pdf_links"
    },
    {
        "title": "Sextudy Group",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Sextudy-Group-1.jpg?resize=165,225",
        "episode": "Chapter 29",
        "link": "https://www.mirrored.to/files/02JIJIMQ/[Doudesu]_Sextudy_Group_29.pdf_links"
    },
    {
        "title": "Noona’s Taste",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Noona-Taste.jpg?resize=165,225",
        "episode": "Chapter 39",
        "link": "https://www.mirrored.to/files/K8NF8QHW/[Doudesu]_Noona_s_Taste_39.pdf_links"
    },
    {
        "title": "Goddess Conquest",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Goddess-Conquest-1.jpg?resize=165,225",
        "episode": "Chapter 29",
        "link": "https://www.mirrored.to/files/17VUZWZM/[Doudesu]_Goddess_Conquest_29.pdf_links"
    },
    {
        "title": "My Female Friend Who Crossed The Line",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/My-Female-Friend-Who-Crossed-The-Line.jpg?resize=165,225",
        "episode": "Chapter 52",
        "link": "https://www.mirrored.to/files/VPXRQZVP/[Doudesu]_My_Female_Friend_Who_Crossed_The_Line_52.pdf_links"
    },
    {
        "title": "Boarding Diary",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Boarding-Diary.jpg?resize=165,225",
        "episode": "Chapter 99",
        "link": "https://www.mirrored.to/files/1W2MO1AS/[Doudesu]_Boarding_Diary_99.pdf_links"
    },
    {
        "title": "A Wonderful New World",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/A-Wonderful-New-World.jpg?resize=165,225",
        "episode": "Chapter 01"
    },
    {
        "title": "Between Us",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Between-Us.jpg?resize=165,225",
        "episode": "Chapter 23",
        "link": "https://www.mirrored.to/files/0KHMMYN7/[Doudesu]_Welcome_to_Kids_Caf_23.pdf_links"
    },
    {
        "title": "Noona’s Taste",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Noona-Taste.jpg?resize=165,225",
        "episode": "Chapter 38",
        "link": "https://www.mirrored.to/files/JSUIVC0E/[Doudesu]_Noona_s_Taste_38.pdf_links"
    },
    {
        "title": "One’s In-Laws Virgins",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Ones-In-Laws-Virgins.jpg?resize=165,225",
        "episode": "Chapter 112",
        "link": "https://www.mirrored.to/files/LMPBVBYB/[Doudesu]_One_s_In-Laws_Virgins_111,5_END.pdf_links"
    },
    {
        "title": "My Stepmother is My Girlfriend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Stepmother-is-My-Girlfriend.png?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://www.mirrored.to/files/LBF3YB0V/[Doudesu]_My_Stepmother_is_My_Girlfriend_50_END.pdf_links"
    },
    {
        "title": "Doki Doki Connection",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Doki-Doki-Connection.jpg?resize=165,225",
        "episode": "Chapter 19",
        "link": "https://www.mirrored.to/files/JC1TR4K7/[Doudesu]_Doki_Doki_Connection_19.pdf_links"
    },
    {
        "title": "Goddess Conquest",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Goddess-Conquest-1.jpg?resize=165,225",
        "episode": "Chapter 28",
        "link": "https://www.mirrored.to/files/JC4NA1TR/[Doudesu]_Goddess_Conquest_28.pdf_links"
    },
    {
        "title": "Bad Guy",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Bad-Guy.jpg?resize=165,225",
        "episode": "Chapter 34",
        "link": "https://www.mirrored.to/files/0TZISW42/[Doudesu]_Bad_Guy_34.pdf_links"
    },
    {
        "title": "One’s In-Laws Virgins",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Ones-In-Laws-Virgins.jpg?resize=165,225",
        "episode": "Chapter 111",
        "link": "https://www.mirrored.to/files/TNUUWSKD/[Doudesu]_One_s_In-Laws_Virgins_111.pdf_links"
    },
    {
        "title": "Tasty Chat",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Tasty-Chat.jpg?resize=165,225",
        "episode": "Chapter 29"
    },
    {
        "title": "Swinging",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Swinging.jpg?resize=165,225",
        "episode": "Chapter 51"
    },
    {
        "title": "Teacher Lesson",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Teacher-Lesson.jpg?resize=165,225",
        "episode": "Chapter 18",
        "link": "https://www.mirrored.to/files/HYWZLAYP/"
    },
    {
        "title": "I Want A Taste",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/I-Want-A-Taste.jpg?resize=165,225",
        "episode": "Chapter 15",
        "link": "https://www.mirrored.to/files/1SNEOLMG/[Doudesu]_I_Want_a_Taste_15.pdf_links"
    },
    {
        "title": "Keep This a Secret From Mom!",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Keep-This-a-Secret-From-Mom.jpg?resize=165,225",
        "episode": "Chapter 54",
        "link": "https://www.mirrored.to/files/IGZEO1YQ/[Doudesu]_Keep_This_Secret_Your_Mom_54.pdf_links"
    },
    {
        "title": "Is There No Goddes In My College",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Is-There-No-Goddes-In-My-College.jpg?resize=165,225",
        "episode": "Chapter 39",
        "link": "https://www.mirrored.to/files/ABJA9NZB/[Doudesu]_Is_There_No_Goddess_in_My_College_39.pdf_links"
    },
    {
        "title": "My Girlfriend is So Naughty",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Girlfriend-is-So-Naughty.jpg?resize=165,225",
        "episode": "Chapter 42",
        "link": "https://www.mirrored.to/files/0ZHDEWIT/"
    },
    {
        "title": "New Town",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/New-Town.jpg?resize=165,225",
        "episode": "Chapter 45",
        "link": "https://www.mirrored.to/files/MCIVOVOW/[Doudesu]_New_Town_45.pdf_links"
    },
    {
        "title": "The Neighborhood Celebrity",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/The-Neighborhood-Celebrity.jpg?resize=165,225",
        "episode": "Chapter 39",
        "link": "https://www.mirrored.to/files/0PRLYGUL/[Doudesu]_The_Neightbour_Celebrity_39.pdf_links"
    },
    {
        "title": "You’ve Finished Working",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Youve-Finished-Working.png?resize=165,225",
        "episode": "Chapter 20"
    },
    {
        "title": "Food Chain",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Food-Chain.jpg?resize=165,225",
        "episode": "Chapter 39"
    },
    {
        "title": "Bebih Deep Kolektor",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Deep-Kolektor.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/i0ciaeg8s0p7u4h/bebiholic+-+deepkolektor.pdf/file"
    },
    {
        "title": "Madloki Wife Trip",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/MAdloki-Wife-Trip-Chapter-1.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/ljrmcktxh4bra4p/Madloki+-+Wife+Trip+Chp.2.pdf/file"
    },
    {
        "title": "My Sister Duty",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/My-Sister-Duty.jpg?resize=165,225",
        "episode": "Chapter 110"
    },
    {
        "title": "Goddess Conquest",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Goddess-Conquest-1.jpg?resize=165,225",
        "episode": "Chapter 27",
        "link": "https://www.mirrored.to/files/ONQGFJET/[Doudesu]_Goddes_Conquest_27.pdf_links"
    },
    {
        "title": "Close Family",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Close-Family.jpg?resize=165,225",
        "episode": "Chapter 12",
        "link": "https://www.mirrored.to/files/1QYXAPNH/[Doudesu]_Close_Family_12.pdf_links"
    },
    {
        "title": "MILF Paradise",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Milf-Paradis.png?resize=165,225",
        "episode": "Chapter 20"
    },
    {
        "title": "Living With A MILF",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Living-With-A-MILF.jpg?resize=165,225",
        "episode": "Chapter 36",
        "link": "https://www.mirrored.to/files/INUSNXBG/[Doudesu]_Living_with_A_MILF_36.pdf_links"
    },
    {
        "title": "Staying With Ajumma",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Living-With-Ajumma.jpg?resize=165,225",
        "episode": "Chapter 23",
        "link": "https://www.mirrored.to/files/XG5XJF9I/[Doudesu]_Staying_with_Ajumma_23.pdf_links"
    },
    {
        "title": "Today’s Dinner Is You",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Todays-Dinner-Is-You.jpg?resize=165,225",
        "episode": "Chapter 35",
        "link": "https://www.mirrored.to/files/8ZC0EDQG/[Doudesu]_Today_s_Dinner_Is_You_33.pdf_links"
    },
    {
        "title": "My Stepmother is My Girlfriend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Stepmother-is-My-Girlfriend.png?resize=165,225",
        "episode": "Chapter 49",
        "link": "https://www.mirrored.to/files/1LFIOQMS/[Doudesu]_My_Stepmother_is_My_Girlfriend_49.pdf_links"
    },
    {
        "title": "Understanding of Flirting",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Understanding-of-Flirting-1.jpg?resize=165,225",
        "episode": "Chapter 32",
        "link": "https://www.mirrored.to/files/10ZYE4QM/[Doudesu]_Understanding_of_Flirting_32.pdf_links"
    },
    {
        "title": "It’s Okay Because We Are Family",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Its-Okay-Because-We-Are-Family.jpg?resize=165,225",
        "episode": "Chapter 36",
        "link": "https://www.mirrored.to/files/0SBSQGPB/[Doudesu]_It_s_Okay_Because_Were_Family_36.pdf_links"
    },
    {
        "title": "I Want A Taste",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/I-Want-A-Taste.jpg?resize=165,225",
        "episode": "Chapter 14",
        "link": "https://www.mirrored.to/files/1IKC4COX/[Doudesu]_I_Want_a_Taste_14.pdf_links"
    },
    {
        "title": "Corner Shop",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Corner-Shop.jpg?resize=165,225",
        "episode": "Chapter 27",
        "link": "https://www.mirrored.to/files/PDBQPOF8/[Doudesu]_Corner_Shop_27.pdf_links"
    },
    {
        "title": "Escape Loser",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Escape-Loser.jpg?resize=165,225",
        "episode": "Chapter 49",
        "link": "https://www.mirrored.to/files/0WU7QLOI/[Doudesu]_Escape_Loser_49.pdf_links"
    },
    {
        "title": "Childhood Bride",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Childhood-Bride.jpg?resize=165,225",
        "episode": "Chapter 10"
    },
    {
        "title": "I Live With Sister-in-Law",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/CWAiwOQik25PHZcx5YDdIrza3RrTH1.png?resize=165,225",
        "episode": "Chapter 32 END"
    },
    {
        "title": "What Do I Do Now?",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/What-Do-I-Do-Now.jpg?resize=165,225",
        "episode": "Chapter 39",
        "link": "https://www.mirrored.to/files/TDZOMMPS/"
    },
    {
        "title": "Twenty",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Twenty.jpg?resize=165,225",
        "episode": "Chapter 44",
        "link": "https://www.mirrored.to/files/QGOIP79K/[Doudesu]_Twenty_44.pdf_links"
    },
    {
        "title": "Sextudy Group",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Sextudy-Group-1.jpg?resize=165,225",
        "episode": "Chapter 28",
        "link": "https://www.mirrored.to/files/154KYXGH/[Doudesu]_Sextudy_Group_28.pdf_links"
    },
    {
        "title": "My Wife’s Friend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Wife-Friend.jpg?resize=165,225",
        "episode": "Chapter 63",
        "link": "https://www.mirrored.to/files/GWVBYIAX/[Doudesu]_My_Wife_s_Friend_63.pdf_links"
    },
    {
        "title": "A Different Class",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/A-Different-Class.jpg?resize=165,225",
        "episode": "Chapter 34",
        "link": "https://www.mirrored.to/files/1HTFQVQI/[Doudesu]_A_Different_Class_34.pdf_links"
    },
    {
        "title": "Madam",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Madam.jpg?resize=165,225",
        "episode": "Chapter 23",
        "link": "https://www.mirrored.to/files/1HP2J5AW/[Doudesu]_Madam_23.pdf_links"
    },
    {
        "title": "My Girlfriend is So Naughty",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Girlfriend-is-So-Naughty.jpg?resize=165,225",
        "episode": "Chapter 41",
        "link": "https://www.mirrored.to/files/0GEJBSVG/[Doudesu]_My_Girlfriend_is_So_Naughty_41.pdf_links"
    },
    {
        "title": "Queen Bee",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Queen-Bee.jpg?resize=165,225",
        "episode": "Chapter 228",
        "link": "https://www.mirrored.to/files/FIIWMLEE/[Doudesu]_Queen_Bee_228.pdf_links"
    },
    {
        "title": "Switch On",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Switch-On.jpg?resize=165,225",
        "episode": "Chapter 20",
        "link": "https://www.mirrored.to/files/0RYBQJLT/[Doudesu]_Switch_On_20.pdf_links"
    },
    {
        "title": "My Sister’s Friends",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/My-Sisters-Friends.jpg?resize=165,225",
        "episode": "Chapter 28",
        "link": "https://www.mirrored.to/files/J9II9ANE/[Doudesu]_My_Sister_s_Friend_28.pdf_links"
    },
    {
        "title": "Secret Class",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Secret-Class.jpg?resize=165,225",
        "episode": "Chapter 136",
        "link": "https://www.mirrored.to/files/XLPH3ZYG/[Doudesu]_Secret_Class_136.pdf_links"
    },
    {
        "title": "Stepmother’s Friend",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Stepmothers-Friend.jpg?resize=165,225",
        "episode": "Chapter 124",
        "link": "https://www.mirrored.to/files/OYRK4SXM/"
    },
    {
        "title": "Boarding Diary",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Boarding-Diary.jpg?resize=165,225",
        "episode": "Chapter 98",
        "link": "https://www.mirrored.to/files/12LE7BL3/[Doudesu]_Boarding_Diary_98.pdf_links"
    },
    {
        "title": "Illicit Love",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Illicit-Love.jpg?resize=165,225",
        "episode": "Chapter 27",
        "link": "https://www.mirrored.to/files/1HXWDM0D/[Doudesu]_Illicit_Love_27.pdf_links"
    },
    {
        "title": "The Owner of A Building",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/The-Owner-of-A-Building-1.jpg?resize=165,225",
        "episode": "Chapter 56",
        "link": "https://www.mirrored.to/files/1IYCQLEB/[Doudesu]_The_Owner_of_A_Building_56.pdf_links"
    },
    {
        "title": "A Good Day to Camp",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/A-Good-Day-to-Camp.jpg?resize=165,225",
        "episode": "Chapter 26",
        "link": "https://www.mirrored.to/files/UNSOO8D3/[Doudesu]_A_Good_Day_to_Camp_26.pdf_links"
    },
    {
        "title": "Resume",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Resume.jpg?resize=165,225",
        "episode": "Chapter 11",
        "link": "https://www.mirrored.to/files/MOY188AZ/[Doudesu]_Resume_11.pdf_links"
    },
    {
        "title": "Father’s Lust",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Fathers-Lust.jpg?resize=165,225",
        "episode": "Chapter 62",
        "link": "https://www.mirrored.to/files/U1SCXT0Y/[Doudesu]_Father_s_Lust_62.pdf_links"
    },
    {
        "title": "Bad Guy",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Bad-Guy.jpg?resize=165,225",
        "episode": "Chapter 33",
        "link": "https://www.mirrored.to/files/WCGFIPXE/[Doudesu]_Bad_Guy_33.pdf_links"
    },
    {
        "title": "The Night King Using App",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/The-Night-King-Using-App.jpg?resize=165,225",
        "episode": "Chapter 23",
        "link": "https://www.mirrored.to/files/EBALOUQQ/"
    },
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
        "title": "Daughter Friend",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Daughter-Friend.jpg?resize=165,225",
        "episode": "Chapter 55",
        "link": "https://www.mirrored.to/files/0KQFGP6U/"
    },
    {
        "title": "Eskrim Guin dan Rafaela",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Eskrim-Guin-dan-Rafaela.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/peWwZNWLV8qy5"
    },
    {
        "title": "Teacher Lesson",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Teacher-Lesson.jpg?resize=165,225",
        "episode": "Chapter 17",
        "link": "https://www.mirrored.to/files/02JQGGP1/Teacher_s_Lesson_17.pdf_links"
    },
    {
        "title": "Kaikan Sprint",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Kaikan-Sprint.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mirrored.to/files/5UPR0RGU/[Doudesu]_Kaikan_Sprint.pdf_links"
    },
    {
        "title": "Apakah Ini Bisa Masuk?",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Apakah-Ini-Bisa-MAsuk.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mirrored.to/files/1UI1JQZB/[Doudesu]_Kore_tte_Aishou_desu_ka.pdf_links"
    },
    {
        "title": "Mamaku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Mamaku.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mirrored.to/files/XTF6SM6Z/[Doudesu]_My_Mother_Special.pdf_links"
    },
    {
        "title": "Menggoda Bawahan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Menggoda-Bawahan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mirrored.to/files/V2ZXOWZ8/[Doudesu]_Shucchouchuu__.pdf_links"
    },
    {
        "title": "Ibu Temanku Menggodaku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Ibu-Temanku-Menggodaku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mirrored.to/files/XTUCZAIH/[Doudesu]_Akogare_no_Tomodachi_no_Okaasan_ni_Itazura_Shitara_Gyaku_ni_Oishiku_Taberareta.pdf_links"
    },
    {
        "title": "Bersembunyi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Bersembunyi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mirrored.to/files/V0GMLTFU/[Doudesu]_Kakurete.pdf_links"
    },
    {
        "title": "An Ardent Teaching Life",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/An-Ardent-Teaching-Life.jpg?resize=165,225",
        "episode": "Chapter 15",
        "link": "https://www.mirrored.to/files/1WZ6AZUP/[Doudesu]_An_Ardent_Teaching_Life_15.pdf_links"
    },
    {
        "title": "Staying With Ajumma",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Living-With-Ajumma.jpg?resize=165,225",
        "episode": "Chapter 22",
        "link": "https://www.mirrored.to/files/1HQSEWHT/[Doudesu]_Staying_with_Ajumma_22.pdf_links"
    },
    {
        "title": "Understanding of Flirting",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Understanding-of-Flirting-1.jpg?resize=165,225",
        "episode": "Chapter 31",
        "link": "https://www.mirrored.to/files/0I8WB3KX/[Doudesu]_Understanding_of_Flirting_31.pdf_links"
    },
    {
        "title": "Everything About Best Friend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Everything-About-Best-Friend.jpg?resize=165,225",
        "episode": "Chapter 63",
        "link": "https://www.mirrored.to/files/K76DQKT2/[Doudesu]_Everything_About_Best_Friend_63.pdf_links"
    },
    {
        "title": "Hole In One",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Hole-In-One.jpg?resize=165,225",
        "episode": "Chapter 52",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Sexcape Room: Wipe Out",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Sexcape-room.png?resize=165,225",
        "episode": "Chapter 09",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Rahasia Antara Aku dan Adikku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Rahasia-Antara-Aku-dan-Adikku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mirrored.to/files/0HVBLTSY/[Doudesu]_A_Dirty_Little_Secret_About_Myself_and_My_Brother_s__Friend.pdf_links"
    },
    {
        "title": "Penjaga Asrama Seksi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Penjaga-Asrama-Seksi.gif?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mirrored.to/files/TTQAS3G9/[Doudesu]_Bokura_no_Ryoubo-san_-_Zenpen.pdf_links"
    },
    {
        "title": "Karyawan Dipermainkan Siswi SMA",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Karyawan-Dipermainkan-Siswi-SMA.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mirrored.to/files/UXHVRIG6/[Doudesu]_Meccha_Mitemasu.pdf_links"
    },
    {
        "title": "Cowo Diperkosa Cewe",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Cowo-Diperkosa-Cewe.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mirrored.to/files/2RYQSTUJ/[Doudesu]_Doutei_ga_Daikoubutsu_na_Onee-san_ni_Kuwareru.pdf_links"
    },
    {
        "title": "Tertatih Tatih",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Tertatih-Tatih.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mirrored.to/files/IJF6CRWD/[Doudesu]_Dokidoki_Osanpo_SEX.pdf_links"
    },
    {
        "title": "The Night King Using App",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/The-Night-King-Using-App.jpg?resize=165,225",
        "episode": "Chapter 22",
        "link": "https://www.mirrored.to/files/LZKGVXR3/[Doudesu]_The_Night_King_using_App_22.pdf_links"
    },
    {
        "title": "Komik Madloki Queen Beee",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-queenbee.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/38ez6sc2ibzmp06/MADLOKI_-_QUEENBEE_Vol_2.pdf/file"
    },
    {
        "title": "Today’s Dinner Is You",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Todays-Dinner-Is-You.jpg?resize=165,225",
        "episode": "Chapter 34",
        "link": "https://www.mirrored.to/files/S9CC5RGX/[Doudesu]_Today_s_Dinner_Is_You_34.pdf_links"
    },
    {
        "title": "My Sister’s Friends",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/My-Sisters-Friends.jpg?resize=165,225",
        "episode": "Chapter 27",
        "link": "https://www.mirrored.to/files/027D9JS1/[Doudesu]_My_Sister_s_Friend_27.pdf_links"
    },
    {
        "title": "It’s Okay Because We Are Family",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Its-Okay-Because-We-Are-Family.jpg?resize=165,225",
        "episode": "Chapter 35",
        "link": "https://www.mirrored.to/files/ZAFOA7SQ/[Doudesu]_It_s_Okay_Because_We_re_Family_35.pdf_links"
    },
    {
        "title": "Goddess Conquest",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Goddess-Conquest-1.jpg?resize=165,225",
        "episode": "Chapter 26",
        "link": "https://www.mirrored.to/files/MFG6SU3W/[Doudesu]_Goddess_Conquest_26.pdf_links"
    },
    {
        "title": "Corner Shop",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Corner-Shop.jpg?resize=165,225",
        "episode": "Chapter 26",
        "link": "https://www.mirrored.to/files/0JWIRCQL/[Doudesu]_Corner_Shop_26.pdf_links"
    },
    {
        "title": "The Ladies’s Associates",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/The-Ladies-Associates.jpg?resize=165,225",
        "episode": "Chapter 43",
        "link": "https://www.mirrored.to/files/1V3M4SGG/[Doudesu]_The_ladies_Associate_43.pdf_links"
    },
    {
        "title": "Twenty",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Twenty.jpg?resize=165,225",
        "episode": "Chapter 43",
        "link": "https://www.mirrored.to/files/LVKEBBJV/[Doudesu]_Twenty_43.pdf_links"
    },
    {
        "title": "The Owner of A Building",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/The-Owner-of-A-Building-1.jpg?resize=165,225",
        "episode": "Chapter 55",
        "link": "https://www.mirrored.to/files/B8LXKT4V/[Doudesu]_The_Owner_Of_A_Building_55.pdf_links"
    },
    {
        "title": "Supervisor Access",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Supervisor-Access-1.jpg?resize=165,225",
        "episode": "Chapter 27",
        "link": "https://www.mirrored.to/files/QNP9A3YO/[Doudesu]_Supervisor_Access_27.pdf_links"
    },
    {
        "title": "Nogada Romance",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Nogada-Romance-1.jpg?resize=165,225",
        "episode": "Chapter 49",
        "link": "https://www.mirrored.to/files/0PFF26AL/[Doudesu]_Nogada_Romance_49.pdf_links"
    },
    {
        "title": "My Wife’s Friend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Wife-Friend.jpg?resize=165,225",
        "episode": "Chapter 62",
        "link": "https://www.mirrored.to/files/DFQYNWAA/[Doudesu]_My_Wife_Friends_62.pdf_links"
    },
    {
        "title": "Close Family",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Close-Family.jpg?resize=165,225",
        "episode": "Chapter 11",
        "link": "https://www.mirrored.to/files/NT2AYIW4/[Doudesu]_Close_Family_11.pdf_links"
    },
    {
        "title": "Bebih Thanthangan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/02-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/ej3oi47ym2c0j4c/bebih_thanthangan.pdf/file"
    },
    {
        "title": "Bebih Ronda Rondo",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/04.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/4vk53pmyfitk6df/Komik_Bebih_Ronda_Rondo.pdf/file"
    },
    {
        "title": "Escape Loser",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Escape-Loser.jpg?resize=165,225",
        "episode": "Chapter 48",
        "link": "https://www.mirrored.to/files/W7Z1NAHQ/"
    },
    {
        "title": "A Good Day to Camp",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/A-Good-Day-to-Camp.jpg?resize=165,225",
        "episode": "Chapter 25",
        "link": "https://www.mirrored.to/files/0JUW5MBP/[Doudesu]_A_Good_Day_to_Camp_25.pdf_links"
    },
    {
        "title": "Illicit Love",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Illicit-Love.jpg?resize=165,225",
        "episode": "Chapter 26",
        "link": "https://www.mirrored.to/files/TNQZYZTW/"
    },
    {
        "title": "Secret Class",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Secret-Class.jpg?resize=165,225",
        "episode": "Chapter 135",
        "link": "https://www.mirrored.to/files/PSA9DQB9/"
    },
    {
        "title": "Madloki Parasite After",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/photo_2022-07-08_09-45-43.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/z3aV66BgwKYNw"
    },
    {
        "title": "Madloki Last Summer",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/photo_2022-07-08_09-34-29.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/7MaXg3Qy2AkDR"
    },
    {
        "title": "What Do I Do Now?",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/What-Do-I-Do-Now.jpg?resize=165,225",
        "episode": "Chapter 38",
        "link": "https://www.mirrored.to/files/0G8PCMEA/"
    },
    {
        "title": "I Want A Taste",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/I-Want-A-Taste.jpg?resize=165,225",
        "episode": "Chapter 13",
        "link": "https://www.mirrored.to/files/9ZGZQHGX/[Doudesu]_I_Want_a_Taste_13.pdf_links"
    },
    {
        "title": "My Girlfriend is So Naughty",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Girlfriend-is-So-Naughty.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://www.mirrored.to/files/667VLPB4/[Doudesu]_My_Girlfriend_is_So_Naughty_40.pdf_links"
    },
    {
        "title": "My Stepmother is My Girlfriend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Stepmother-is-My-Girlfriend.png?resize=165,225",
        "episode": "Chapter 48",
        "link": "https://www.mirrored.to/files/2UXUPCVW/[Doudesu]_My_Stepmother_is_My_Girlfriend_48.pdf_links"
    },
    {
        "title": "Stepmother’s Friend",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Stepmothers-Friend.jpg?resize=165,225",
        "episode": "Chapter 123",
        "link": "https://www.mirrored.to/files/1WIAPSWK/"
    },
    {
        "title": "The Ark Is Me",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/The-Ark-Is-Me.jpg?resize=165,225",
        "episode": "Chapter 112",
        "link": "https://www.mirrored.to/files/7QYY1HM1/[Doudesu]_The_Ark_is_Me_112.pdf_links"
    },
    {
        "title": "Zofija Si Kecil Tiya",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Zofija-Si-Kecil-Tiya.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://trakteer.id/zofija"
    },
    {
        "title": "Zofija Bukber",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Zofija-Bukber.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://trakteer.id/zofija"
    },
    {
        "title": "Achilles Heel",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Achillles-Heel.jpg?resize=165,225",
        "episode": "Chapter 35",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "My Sister-in-Law’s Ass",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/My-Sister-in-Laws-Ass.jpg?resize=165,225",
        "episode": "Chapter 15",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Banging My Aunt",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Banging-My-Aunt.jpg?resize=165,225",
        "episode": "Chapter 47",
        "link": "https://www.mirrored.to/files/0NDEOBRF/[Doudesu]_Banging_My_Aunt_47.pdf_links"
    },
    {
        "title": "Enlistment Countdown",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Enlistment-Countdown.jpg?resize=165,225",
        "episode": "Chapter 25",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Sextudy Group",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Sextudy-Group-1.jpg?resize=165,225",
        "episode": "Chapter 26",
        "link": "https://www.mirrored.to/files/KN0XUBYD/[Doudesu]_Sextudy_Group_27.pdf_links"
    },
    {
        "title": "One’s In-Laws Virgins",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Ones-In-Laws-Virgins.jpg?resize=165,225",
        "episode": "Chapter 110",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Doki Doki Connection",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Doki-Doki-Connection.jpg?resize=165,225",
        "episode": "Chapter 18",
        "link": "https://www.mirrored.to/files/0XQAICQE/[Doudesu]_Doki_Doki_Connection_18.pdf_links"
    },
    {
        "title": "The Neighborhood Celebrity",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/The-Neighborhood-Celebrity.jpg?resize=165,225",
        "episode": "Chapter 38",
        "link": "https://www.mirrored.to/files/02SAKSAJ/[Doudesu]_The_Neighborhood_Celebrity_38.pdf_links"
    },
    {
        "title": "My Female Friend Who Crossed The Line",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/My-Female-Friend-Who-Crossed-The-Line.jpg?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Two Household",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Two-Household.jpg?resize=165,225",
        "episode": "Chapter 34",
        "link": "https://www.mirrored.to/files/1HQF4PPX/[Doudesu]_Two_Household_34.pdf_links"
    },
    {
        "title": "Daughter Friend",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Daughter-Friend.jpg?resize=165,225",
        "episode": "Chapter 54",
        "link": "https://www.mirrored.to/files/0KQFGP6U/"
    },
    {
        "title": "Hey, Handsome",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Hey-Handsome.jpg?resize=165,225",
        "episode": "Chapter 88",
        "link": "https://www.mirrored.to/files/1YJZTNGF/[Doudesu]_Hey,_Handsome_88.pdf_links"
    },
    {
        "title": "Summer Vacation",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Summer-Vacation.jpg?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "She Is Working Out",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/photo_2022-03-02_10-53-28.jpg?resize=165,225",
        "episode": "Chapter 38",
        "link": "https://www.mirrored.to/files/0XVEOBYF/[Doudesu]_She_Is_Working_Out_38.pdf_links"
    },
    {
        "title": "Lady Boss Misha",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/photo_2022-07-04_10-38-54.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/XwGvamVD63j2n"
    },
    {
        "title": "Redup 3D",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Redup.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://www.mediafire.com/file/7s5pkkximybpr6d/3D_-_REDUP_Chp_4_Part_2.pdf/file"
    },
    {
        "title": "Age of Innocence",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Age-of-Innocence.jpg?resize=165,225",
        "episode": "Chapter 36",
        "link": "https://www.mirrored.to/files/15BHTFIX/[Doudesu]_Age_of_Innocence_36.pdf_links"
    },
    {
        "title": "Madam",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Madam.jpg?resize=165,225",
        "episode": "Chapter 22",
        "link": "https://www.mirrored.to/files/0O20PVVT/[Doudesu]_Madam_22.pdf_links"
    },
    {
        "title": "Between Us",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/07/Between-Us.jpg?resize=165,225",
        "episode": "Chapter 94",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Never Too Late",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Never-Too-Late.jpg?resize=165,225",
        "episode": "Chapter 132",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Floor Noise",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/Floor-Noise.jpg?resize=165,225",
        "episode": "Chapter 59",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Friendly Relationship",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/07/Friendly-Relationship.jpg?resize=165,225",
        "episode": "Chapter 53",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Streamer Aunt",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Streamer-Aunt.jpg?resize=165,225",
        "episode": "Chapter 30",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Harry Potter XXX",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/07/Harry-Potter-XXX.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.solidfiles.com/v/7Ma3DeA2ZB7Ba"
    },
    {
        "title": "Madloki Si Kecil Tiya",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/07/photo_2022-07-01_12-33-13.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/Q2MPyZ2Nekqdp"
    },
    {
        "title": "Resume",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Resume.jpg?resize=165,225",
        "episode": "Chapter 10",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Phone Sex",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Phone-Sex.jpg?resize=165,225",
        "episode": "Chapter 17",
        "link": "https://www.mirrored.to/files/0IPTT8PB/[Doudesu]_Phone_Sex_17.pdf_links"
    },
    {
        "title": "A Killer Woman",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/A-Killer-Woman.jpg?resize=165,225",
        "episode": "Chapter 112",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Love is an Illusion",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Love-is-an-Illusion.jpg?resize=165,225",
        "episode": "Chapter 100",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "She’s The Girl",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/She-Is-The-Girl.jpg?resize=165,225",
        "episode": "Chapter 79",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Bad Guy",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Bad-Guy.jpg?resize=165,225",
        "episode": "Chapter 31",
        "link": "https://www.mirrored.to/files/1EEL70LK/[Doudesu]_Bad_Guy_31.pdf_links"
    },
    {
        "title": "My Office Ladies",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Office-Ladies.jpg?resize=165,225",
        "episode": "Chapter 87",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Dorm Room Sisters",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Dorm-Room-Sisters.jpg?resize=165,225",
        "episode": "Chapter 56",
        "link": "https://www.mirrored.to/files/0BIZCQAJ/[Doudesu]_Dorm_Room_Sisters_56.pdf_links"
    },
    {
        "title": "Hypnotized Sex With My Brother",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Hypnotized-Sex-with-My-Brother.jpg?resize=165,225",
        "episode": "Chapter 30",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Bebih Bad Horror Story",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/04-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/dqimfeizznu8j3j/Bebih_Bad_Horror_Story.pdf/file"
    },
    {
        "title": "Sex Lessons",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Sex-Lessons.jpg?resize=165,225",
        "episode": "Chapter 49",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Temanku Kembali Dari Masa Depan untuk Meniduriku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/My-Friend-Came-Back-From-the-Future-to-Fuck-Me.jpg?resize=165,225",
        "episode": "Chapter 27",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Secret Class Uncensored",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Secret-Class-Uncensored.jpg?resize=165,225",
        "episode": "Chapter 46",
        "link": "https://www.mediafire.com/file/1p82w4n7j1t5aev/Secret+Class+Uncens+6.zip/file"
    },
    {
        "title": "Friends or F-buddies",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Friends-or-F-buddies.jpg?resize=165,225",
        "episode": "Chapter 46",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Father’s Lust",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Fathers-Lust.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://www.mirrored.to/files/0S9A8Y9M/[Doudesu]_Father_s_Lust_60.pdf_links"
    },
    {
        "title": "One-Room Hero",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/One-Room-Hero.jpg?resize=165,225",
        "episode": "Chapter 79",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Happy Campus",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Happy-cAMPUS.jpg?resize=165,225",
        "episode": "Chapter 10.5",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "His Voice",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/His-Voice.jpg?resize=165,225",
        "episode": "Chapter 24",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Lover Mode",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/lover-mode-1.jpg?resize=165,225",
        "episode": "Chapter 20",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Fast Food",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Fast-Food-1.jpg?resize=165,225",
        "episode": "Chapter 39",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "New Face (New Identity)",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/new-face-1.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "A Different Class",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/A-Different-Class.jpg?resize=165,225",
        "episode": "Chapter 30",
        "link": "https://www.mirrored.to/files/MHGQSKFT/[Doudesu]_A_Different_Class_30.pdf_links"
    },
    {
        "title": "Madloki Keseharian Adik Kakak",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/keseharian-adik-kakak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/i3myt51mnmsvm09/Komik_Manga_Madloki_Keseharian_Adik_kakak.pdf/file"
    },
    {
        "title": "Freshman",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Freshman-1.jpg?resize=165,225",
        "episode": "Chapter 61",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Noona’s Taste",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Noona-Taste.jpg?resize=165,225",
        "episode": "Chapter 37",
        "link": "https://www.mirrored.to/files/RWVGG5XY/[Doudesu]_Noona_s_Taste_37.pdf_links"
    },
    {
        "title": "Boarding Diary",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Boarding-Diary.jpg?resize=165,225",
        "episode": "Chapter 97",
        "link": "https://www.mirrored.to/files/3NAJAIYY/[Doudesu]_Boarding_Diary_97.pdf_links"
    },
    {
        "title": "Shall We Ride",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/05/Shall-We-Ride.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://www.mirrored.to/files/RDEZVVWD/[Doudesu]_Shall_We_Ride_Ch_40_END.pdf_links"
    },
    {
        "title": "New Town",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/New-Town.jpg?resize=165,225",
        "episode": "Chapter 44",
        "link": "https://www.mirrored.to/files/1CZZA0YG/[Doudesu]_New_Town_44.pdf_links"
    },
    {
        "title": "MLBB Beatrix",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/MLBB-Beatrix.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/8qvoeucom8n9mkb/MLBBX+-+BEATRIX.pdf/file"
    },
    {
        "title": "Okkycreed Si Kipli",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/photo_2022-04-26_17-55-12.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/be1osj7l6ujr4ng/OKKYCREED+-+Si+Kipli+Series+Eps.5.pdf/file"
    },
    {
        "title": "Sinar Jaya Gurih Judo",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/SJG-Judo.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/fgdgkxoe5cihz4g/SJG+-+JUDO.pdf/file"
    },
    {
        "title": "Alumni",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Alumni.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Eskrim MILF Gravure",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Eskrim-Milf-Gravure.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/5dp9zv7pxhfxt6v/(GM+Comic)+ESKRIM+-+M1LF+GRAVURE.pdf/file"
    },
    {
        "title": "Sinchan X",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Sinchan-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/zsg5vwvhw924uux/Sincan+X.pdf/file"
    },
    {
        "title": "Okkycreed Manager Indomaret",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Okkycreed-Manager-Indomaret.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/i4mwke6301wn72s/OKKYCREED+-+MANAGER+INDOMRT.pdf/file"
    },
    {
        "title": "Kharisma Jati Hadiah Ulang Tahun Ke 17 Cindil",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/cindil.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/lt1kvzoskiqd0vu/Kharisma_Jati_Cindhils_17th_Birthday_Present_From_Mom.pdf/file"
    },
    {
        "title": "Komik Kharisma Jati Mother Fucker",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/kharisma-jati-mother-fucker.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/qysp6egzugdkbf4/Radical_Comic_Mother_Fckr.pdf/file"
    },
    {
        "title": "Bebih Miss Manager",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Bebih-Miss-Manager-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/2m32mkqa6lvvlf6/BEBIHOLIC_-_MISS_MANAGER.pdf/file"
    },
    {
        "title": "Madloki Jam Kosong",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Jam-Kosong-MAdloki.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/VKrYwKWKgzXG7"
    },
    {
        "title": "Madloki Lepas Jaket",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/MAdloki-Lepas-Jaket.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/aapdcv09tmsxq08/Madloki+Lepas+Jaket.pdf/file"
    },
    {
        "title": "Bu Deta",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Bu-Deta.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/tfzz1g0yhk17y21/ZOFI+-+BU+DETA.pdf/file"
    },
    {
        "title": "Madloki Calmly Girl",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Madloki-Calmly-Girl.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/tmnwxgqsswwsanz/(GM+Comic)+MADLOKI+-+CALMLY+GIRL+Chp+2.pdf/file"
    },
    {
        "title": "Komik Madloki Test Drive",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/test-drive-Madloki.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://www.mediafire.com/file/hjw2ba5rjfq5b1h/Madloki+Test+Drive+5.pdf/file"
    },
    {
        "title": "Sinar Jaya Gurih Billiard",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/SJG-Billiard-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/5k8xwiqk0rfeywr/SJG_-_BILLIARD.pdf/file"
    },
    {
        "title": "Brother’s Wife Dignity",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Brother-Wife-Dignity.jpg?resize=165,225",
        "episode": "Chapter 57",
        "link": "https://www.mirrored.to/files/0PXXEXEV/[Doudesu]_Brother_s_Wife_Dignity_57.pdf_links"
    },
    {
        "title": "Campus Live",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/baca-Campus-live-manhwa.jpg?resize=165,225",
        "episode": "Chapter 67 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "In The Summer",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/In-The-Summer.jpg?resize=165,225",
        "episode": "Chapter 27",
        "link": "https://www.mirrored.to/files/VSS9RSDE/[Doudesu]_In_The_Summer_27.pdf_links"
    },
    {
        "title": "Summer School Dream Guru Berbikini",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Summer-School-Dream-Guru-Berbikini.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/XLM76x8Bpe2wB"
    },
    {
        "title": "Is This The Way that You Do It?",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Is-This-The-Way-that-You-Do-It.jpg?resize=165,225",
        "episode": "Chapter 23",
        "link": "https://www.mirrored.to/files/1FANEPDC/[Doudesu]_Is_This_The_Way_that_You_Do_It_23.pdf_links"
    },
    {
        "title": "Japan Sensei",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Japan-Sensei.jpg?resize=165,225",
        "episode": "Chapter 29",
        "link": "https://www.mirrored.to/files/SZE9SOLI/[Doudesu]_Japan_Sensei_29.pdf_links"
    },
    {
        "title": "Pheromones",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Pheromones.jpg?resize=165,225",
        "episode": "Chapter 55",
        "link": "https://www.mirrored.to/files/5UHXCB0V/[Doudesu]_Pheromones_55.pdf_links"
    },
    {
        "title": "Public Interest",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Public-Interest.jpg?resize=165,225",
        "episode": "Chapter 41",
        "link": "https://www.mirrored.to/files/0TL3G2EM/[Doudesu]_Public_Interest_41.pdf_links"
    },
    {
        "title": "Hipnosis",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Hipnosis.png?resize=165,225",
        "episode": "Chapter 17",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Twin Takes",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Twin-Takes.jpg?resize=165,225",
        "episode": "Chapter 32",
        "link": "https://www.mirrored.to/files/1WK4E9JI/[Doudesu]_Twin_Takes_32_END.pdf_links"
    },
    {
        "title": "Komik Denis dan Bunda Adit Sopo Jarwo",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Denis-dan-Bunda-Adit-Sopo-Jarwo.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/teg8er54bm9qaxw/BUNDA_ADIT_Chp_3.pdf/file"
    },
    {
        "title": "Living With A MILF",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Living-With-A-MILF.jpg?resize=165,225",
        "episode": "Chapter 32",
        "link": "https://www.mirrored.to/files/0R36K2BV/[Doudesu]_Living_With_A_MILF_32.pdf_links"
    },
    {
        "title": "Miss Mystic",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/dgnuRP1lyvCkbevftfHgFJ6DLL15XK.jpg?resize=165,225",
        "episode": "Chapter 89 EXTRA",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Golden Scale",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/el07Gv5rYQVszY6pyE4Zwyly9S2ShA.jpg?resize=165,225",
        "episode": "Chapter 63 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Household Affairs",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/FDQzY6qsDFLG93ymeU5VrzSVdIKhzw.jpg?resize=165,225",
        "episode": "Chapter 85 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Keep Her",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/keep-193x278-1.jpeg?resize=165,225",
        "episode": "Chapter 38 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "I Live With Sister-in-Law",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/CWAiwOQik25PHZcx5YDdIrza3RrTH1.png?resize=165,225",
        "episode": "Chapter 32 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Ghost Love",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/1A2u0cAu74Wf7DqOtMr5d5Wy6FfldZ.jpg?resize=165,225",
        "episode": "Chapter 63 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Sextealer",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/WGJuZsfGwPYfbBIQUwPx0QVVkw28QF.jpg?resize=165,225",
        "episode": "Chapter 68 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "The Woman Who Lives in My Room",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/vvxVasg65mHtl9k6Kgx9cEw2ppdVlX.jpg?resize=165,225",
        "episode": "Chapter 50 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Producer: Trainee",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/8xpPC08JOig0BotURbWAhSwRR2Vffv.jpg?resize=165,225",
        "episode": "Chapter 72 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "The Lost Girl",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/jkQfoif459vEpCYA0Mq8MN6lbniePl-1.jpg?resize=165,225",
        "episode": "Chapter 30 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "This Doesn’t Feel Like Me",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/J6HZfm0QXbV1bFvdZv8ixTTyzyby3q.jpg?resize=165,225",
        "episode": "Chapter 51 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Tergoda Ibu Temanku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/NBXjqp9MSr2APM68EzOaIfwJ1Z8IX0.jpg?resize=165,225",
        "episode": "Chapter 43 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "His Return",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/9tT3STvjKZtx17WIxuZV22PCzadHKt.jpg?resize=165,225",
        "episode": "Chapter 26 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "The Rookie",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/RQ9uidpO14lNXjYJBaPHJbHcY8QVke.jpg?resize=165,225",
        "episode": "Chapter 28 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "My Baby Girl",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/w3l3vVypjMRDamp0z6RCaUafoHyPum.jpg?resize=165,225",
        "episode": "Chapter 41 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Woodman Dyeon",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/ntgYLXcZZ1pSGKVjsw0VJ4s1Bpg4Iu.jpg?resize=165,225",
        "episode": "Chapter 15 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Lady Garden",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/OIA9tLkRrRkjqD7Seaftff5UMvCq7k.png?resize=165,225",
        "episode": "Chapter 80 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Billiard Room Love",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-34.png?resize=165,225",
        "episode": "Chapter 38 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Share Girlfriend",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/xv.jpg?resize=165,225",
        "episode": "Chapter 50 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Ku Beli Ibu Temanku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/t5RGrPWpcyh64c66PVlF3SPgN4QR3P.jpg?resize=165,225",
        "episode": "Chapter 30 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Gairah Adik Angkat",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/3wPDkMZFQon9ggeY8otDifsliTYLov.jpg?resize=165,225",
        "episode": "Chapter 40 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Dia Adekku Tapi Tak Apalah",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/fcg.png?resize=165,225",
        "episode": "Chapter 34 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "The Risky Family",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/the-risky.jpg?resize=165,225",
        "episode": "Chapter 19 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Teori Bercinta",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-32.png?resize=165,225",
        "episode": "Chapter 08 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Pembantu Genit",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-31.png?resize=165,225",
        "episode": "Chapter 09 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Innocent Thing",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-30.png?resize=165,225",
        "episode": "Chapter 12 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Tawanan ibu dan anak",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-29.png?resize=165,225",
        "episode": "Chapter 05 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Ooh.. Ibu..",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-28.png?resize=165,225",
        "episode": "Chapter 07 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Cewe Raksasa Dan Pria Liliput",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-27.png?resize=165,225",
        "episode": "Chapter 08 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Renai Sample",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-25.png?resize=165,225",
        "episode": "Chapter 11 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Pandemonium",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-24.png?resize=165,225",
        "episode": "Chapter 13 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Hari Hari Yang Indah",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-23.png?resize=165,225",
        "episode": "Chapter 10 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Gara Gara Album Panas Mama",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-22.png?resize=165,225",
        "episode": "Chapter 10 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Mengintip Celana Dalam Dan Semakin Menggoda",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-21.png?resize=165,225",
        "episode": "Chapter 39 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Pacar Ketua Geng",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-20.png?resize=165,225",
        "episode": "Chapter 09",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Kehidupan rumah sakit yang manis",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-19.png?resize=165,225",
        "episode": "Chapter 10 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Docchi Mo LOVE",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-18.png?resize=165,225",
        "episode": "Chapter 08 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Pesta Bugil",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-17.png?resize=165,225",
        "episode": "Chapter 09 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Melawannya Sangat Melelahkan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-16.png?resize=165,225",
        "episode": "Chapter 08 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komplek Perumahan Yang Penuh Kenikmatan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-13.png?resize=165,225",
        "episode": "Chapter 06 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Nyonya Besar",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-12.png?resize=165,225",
        "episode": "Chapter 09 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Jus musim panas yang dipenuhi keringat",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-11.png?resize=165,225",
        "episode": "Chapter 07 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Penjual Tidak Senonoh",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-10.png?resize=165,225",
        "episode": "Chapter 08 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Perasaan Ini Yang Tidak Bisa Ditekan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-9.png?resize=165,225",
        "episode": "Chapter 07 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Bermain Dengan Istrinya",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-8.png?resize=165,225",
        "episode": "Chapter 07 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Ane Kyun",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-7.png?resize=165,225",
        "episode": "Chapter 10 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Kerabat Sedarah",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-5.png?resize=165,225",
        "episode": "Chapter 08 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Aku Selalu Menyukainya",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-4.png?resize=165,225",
        "episode": "Chapter 08 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Mama Muda",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-1.png?resize=165,225",
        "episode": "Chapter 09 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Ibu Dan Anak Tak Mau Kalah",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-2.png?resize=165,225",
        "episode": "Chapter 07 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Adek Selalu Meniru Kakak",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled-3.png?resize=165,225",
        "episode": "Chapter 08 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Kost Cewe Bebas",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled3-6.png?resize=165,225",
        "episode": "Chapter 34",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Cowo Sini Muncratin Kami",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled3-5.png?resize=165,225",
        "episode": "Chapter 09 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Otome no Sono",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled3-4.png?resize=165,225",
        "episode": "Chapter 09 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Mitsu Boshi Immoral",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled3-3.png?resize=165,225",
        "episode": "Chapter 06 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Ane to Kurasu",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled1.png?resize=165,225",
        "episode": "Chapter 09 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Yaribeya no Oyako",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled2.png?resize=165,225",
        "episode": "Chapter 09 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Nakadashi Strike!",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/06/cv-2732.jpg?resize=165,225",
        "episode": "Chapter 10 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Torokase Orgasm",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled3.png?resize=165,225",
        "episode": "Chapter 06 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Digilir Sampai Lemes",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled3-2.png?resize=165,225",
        "episode": "Chapter 08 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Berbagi Ranjang",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled3-1.png?resize=165,225",
        "episode": "Chapter 14 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Setelah Bercukur Dia Semakin Nikmat",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/2887.jpg?resize=165,225",
        "episode": "Chapter 09 END",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Pelan Pelan Denganku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/Untitled.png?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Otakku Selalu Ada Kamu",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/06/3921.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Penggoda Yang Jahil",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/3919.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Belailah Aku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/3881.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Single Mother",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/3892.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Menu Malam Ini",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/3911.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Siswi Merasahkan",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/3916.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Lucid Dream",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/06/3905.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Shousika Mondai ni Shinken ni Torikumu Seigi no Saimin Tanetsuke Oji-san",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/06/3912.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Homestay Harem wa Totsuzen Ni!",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/05/3817.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Spy x Sex",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/05/spy-sex.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Dark Age",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/05/Exexcutioner.jpg?resize=165,225",
        "episode": "Chapter 12",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Take A Peek",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Take-A-Peek.jpg?resize=165,225",
        "episode": "Chapter 217",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Madloki Konoha Donburi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/MADLOKI-KONOHA-DONBURI.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/rdmrA3m84GjGg"
    },
    {
        "title": "Madloki Divorce",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Madloki-Divorce-1.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.solidfiles.com/v/3dWvmdNMpP4ka"
    },
    {
        "title": "Solmi’s Channel",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Solmi-Channel.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://www.mirrored.to/files/1RISJH0Z/[Doudesu]_Solmi_Channel_Chapter_52.pdf_links"
    },
    {
        "title": "Should I Study at Noryangjin?",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Should-I-Study-at-Noryangjin.jpg?resize=165,225",
        "episode": "Chapter 101",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Madloki Konoha Don Yasaimashi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/photo_2022-04-27_20-07-54.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/nkrWqdXY5r6Zk"
    },
    {
        "title": "She is Young 2",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/She-is-Young-2.jpg?resize=165,225",
        "episode": "Chapter 37",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "She Is Young",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/She-is-Young.jpg?resize=165,225",
        "episode": "Chapter 73",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Secret Neighbors",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Secret-Neighbors.jpg?resize=165,225",
        "episode": "Chapter 70",
        "link": "https://www.mirrored.to/files/PJVOCMND/[Doudesu]_Secret_Neighbors_Ch.70.pdf_links"
    },
    {
        "title": "Madloki Es Krim",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Madloki-Es-Krim.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/8Zjg77akBvMAm"
    },
    {
        "title": "Komik Okycreed Audisi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/02.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/zzq5245zlcavvyt/Komik_Si_Kiplis_-_Audisi.pdf/file"
    },
    {
        "title": "Cartoonists NSFW Uncensored",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Cartoonists-NSFW.jpg?resize=165,225",
        "episode": "Chapter 100",
        "link": "https://www.mirrored.to/files/MDUK3HF3/[Doudesu]_Cartoonists_NSFW_100_[Bonus_5].pdf_links"
    },
    {
        "title": "Domesticate The Housekeeper",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Domesticate-The-Housekeeper.jpg?resize=165,225",
        "episode": "Chapter 44",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Sepulang Sekolah",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Sepulang-Sekolah.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/DeBe66QrZqGKk"
    },
    {
        "title": "Stand Up Guy",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Stand-Up-Guy.jpg?resize=165,225",
        "episode": "Chapter 56",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Perempuan Di Sekelilingku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Perempuan-Di-Sekelilingku.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.solidfiles.com/v/MW7B8pqgRaxD6"
    },
    {
        "title": "Secret Hideout",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Secret-Hideout.jpg?resize=165,225",
        "episode": "Chapter 52",
        "link": "https://www.mirrored.to/files/05SBECP8/[Doudesu]_Secret_Hideout_52_END.pdf_links"
    },
    {
        "title": "Secret Island",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Secret-ISland.jpg?resize=165,225",
        "episode": "Chapter 48",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Madloki Bukber",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/photo_2022-04-21_18-46-21.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/wWx5kzVeLzGKR"
    },
    {
        "title": "Sweet But Psycho",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Sweet-but-Psycho.jpg?resize=165,225",
        "episode": "Chapter 104",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Madloki LEWD Audio Kerja Kelompok",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/photo_2022-04-19_19-13-20.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/dNvd5rXnMxgQm"
    },
    {
        "title": "Lady Long Legs",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Lady-Long-Legs.jpg?resize=165,225",
        "episode": "Chapter 48",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Deceptions",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Deceptions.jpg?resize=165,225",
        "episode": "Chapter 73",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "MLBB X Wanwan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/MLBB-X-Wanwan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/6GXL6nvXVd5YP"
    },
    {
        "title": "Genshin Impact X Ningguang",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Genshin-Impact-X-Ningguang.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/dNvq6q63enmP5"
    },
    {
        "title": "Digimon X Renamon",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Digimon-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/KnK4WWRwDx8ep"
    },
    {
        "title": "Family Adjustments",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Family-Adjustments.jpg?resize=165,225",
        "episode": "Chapter 100",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Crime and Punishment",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Crime-And-Punishment.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Delivery Man",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Delivery-Man.jpg?resize=165,225",
        "episode": "Chapter 55.5",
        "link": "https://www.mirrored.to/files/0EZSSWIN/[Doudesu]_Delivery_Man_55_5_[END].pdf_links"
    },
    {
        "title": "Madloki Keluarga Amira 3D",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/keluarga-Amira.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://www.solidfiles.com/v/AWX2awyKDQ73g"
    },
    {
        "title": "Sexercise",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Sexercise.jpg?resize=165,225",
        "episode": "Chapter 82",
        "link": "https://www.mirrored.to/files/YVCGJYZQ/[Doudesu]_Sexercise_82_END.pdf_links"
    },
    {
        "title": "My Aunt",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/My-Aunt.jpg?resize=165,225",
        "episode": "Chapter 140",
        "link": "https://www.mirrored.to/files/I8KJHHBO/[Doudesu]_My_Aunt_140_END.pdf_links"
    },
    {
        "title": "Eskrim Ibu Memakai Baju SMA",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/photo_2022-04-14_23-22-51.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/rd4kjXy2vGdvy"
    },
    {
        "title": "PC Goddess Room",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/PC-Goddess-room.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://www.mirrored.to/files/0AKFQITT/[Doudesu]_PC_Goddess_Room_60_END.pdf_links"
    },
    {
        "title": "Madloki Ane Zanmai",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Madloki-Ane-ZAnmai.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/MWX34Y4Q5jZep"
    },
    {
        "title": "Madloki Aplikasi Hipnotis",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Madloki-Aplikasi-Hipnotis.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/78X3eyrejr5mW"
    },
    {
        "title": "Runaway Family",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Runaway-Family.jpg?resize=165,225",
        "episode": "Chapter 75",
        "link": "https://www.mirrored.to/files/0ARJQEJY/[Doudesu]_Runaway_Family_Ch_75_END.pdf_links"
    },
    {
        "title": "Sai Sai",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Sai-Sai.jpg?resize=165,225",
        "episode": "Chapter 55",
        "link": "https://www.mirrored.to/files/0HBJ34LY/[Doudesu]_Sai_Sai_55.pdf_links"
    },
    {
        "title": "Goddess Hunting",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Goddess-Hunting.jpg?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://www.mirrored.to/files/38EJQ9RE/[Doudesu]_Goddess_Hunting_Ch.50-END.pdf_links"
    },
    {
        "title": "Need A Service?",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Need-A-Service.jpg?resize=165,225",
        "episode": "Chapter 38",
        "link": "https://www.mirrored.to/files/FEVTK70L/[Doudesu]_Need_A_Service_38_[END].pdf_links"
    },
    {
        "title": "Ex Girlfriend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Ex-Girlfriend.jpg?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://www.mirrored.to/files/EEGUOYID/[Doudesu]_Ex-Girlfreinds_50.pdf_links"
    },
    {
        "title": "Love Factory",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Love-Factory.jpg?resize=165,225",
        "episode": "Chapter 28",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Maid",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Maid.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://www.mirrored.to/files/BGD9HDJK/[Doudesu]_Maid_40.pdf_links"
    },
    {
        "title": "Hinata Hyuga Snuff",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Hinata-Kyuga-Snuff.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.solidfiles.com/v/5dXMNVDpxx3x5"
    },
    {
        "title": "Gu Ho’s Escape",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Jun-hO-escape.jpg?resize=165,225",
        "episode": "Chapter 30",
        "link": "https://www.mirrored.to/files/QJGZSENG/"
    },
    {
        "title": "7Th Heaven",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/7th-Heaven.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/5m7siz19bpgoabs/Manga+7TH+Heaven.pdf/file"
    },
    {
        "title": "Mobile Legend Wan Wan dan Ling",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Ling-dan-wanwan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/m2r2MaLzqqApM"
    },
    {
        "title": "The Family Hike",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/The-Family-Hike.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/opb9awwoijnxero/The_Family_Hike_3D.pdf/file"
    },
    {
        "title": "Gadis Diajari Di Hotel",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Gadis-Diajari-Di-Hotel.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/NVXVLVMGekjVq"
    },
    {
        "title": "Mobile Legend Alucard dan Miya",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Alucard.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/4YXYLyg4LAD6p"
    },
    {
        "title": "Hijabophilia Dahlia Omek",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Dahlia-Omek.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/BVXVm8x8MQDGq"
    },
    {
        "title": "Mistery Box",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Mistery-Box.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/W8V8Br3ZNxeVe"
    },
    {
        "title": "Hijabitch Kakak Nakal",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Hijabitch-Kakak-Nakal.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/4YXYK5DVWeYRL"
    },
    {
        "title": "Narutod Felsala",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Narutod-Felsala.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/nkPGzGpjjQerQ"
    },
    {
        "title": "Madloki Gravure Idol",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Gravure-Idol.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.solidfiles.com/v/BVXyKe7mngvmG"
    },
    {
        "title": "Lightning Rod",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Lightning-rod.jpg?resize=165,225",
        "episode": "Chapter 134",
        "link": "https://www.mirrored.to/files/2YSCI8O5/[Doudesu]_Lightning_Rod_134.pdf_links"
    },
    {
        "title": "Fake Taxi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Fake-Taxi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/eWpRmNX8BGvZ3"
    },
    {
        "title": "Boss Dan Bawahan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Bos-dan-Bawahan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/3dXMy8dxLwg62"
    },
    {
        "title": "I Want To Know Her",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/I-Want-To-Know-Her.jpg?resize=165,225",
        "episode": "Chapter 35",
        "link": "https://www.mirrored.to/files/1NWJTE9P/[Doudesu]_I_Want_To_Know_Her_35_END.pdf_links"
    },
    {
        "title": "Craving",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Craving.jpg?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://www.mirrored.to/files/10ZIURQW/[Doudesu]_Craving_Chapter_50END.pdf_links"
    },
    {
        "title": "The Body Game",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Body-Game.jpg?resize=165,225",
        "episode": "Chapter 64",
        "link": "https://www.mirrored.to/files/0PWIUS0A/[Doudesu]_The_Body_Game_64.pdf_links"
    },
    {
        "title": "Thirst To Fill",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Thirst-To-fill.jpg?resize=165,225",
        "episode": "Chapter 71",
        "link": "https://www.mirrored.to/files/0MG8OHPH/"
    },
    {
        "title": "Madloki Kamila Dan Natasya",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Madloki-Kamila-dan-Natasya.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/YLrWRXLkrKBrW"
    },
    {
        "title": "Obat Kekhawatiran",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Obat-Kekhawatiran.jpg?resize=165,225",
        "episode": "Chapter 07",
        "link": "https://www.solidfiles.com/v/dNLGAB7VraPkP"
    },
    {
        "title": "Sold Out Girl",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/Sold-Out-Girl.jpg?resize=165,225",
        "episode": "Chapter 45",
        "link": "https://www.mirrored.to/files/1VF0HRN3/[Doudesu]_Sold_Out_Girl_45_END.pdf_links"
    },
    {
        "title": "Weak Point",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/04/Weak-Point.jpg?resize=165,225",
        "episode": "Chapter 120",
        "link": "https://www.mirrored.to/files/168SEZFN/[Doudesu]_Weak_Point_120END.pdf_links"
    },
    {
        "title": "The Spot Master",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/04/The-Spot-Master.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://www.mirrored.to/files/0W1IRR4L/[Doudesu]_The_Spot_Master_Chapter_60END.pdf_links"
    },
    {
        "title": "Soothe Me",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Soothe-Me.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://www.mirrored.to/files/0Y7FCFR2/[Doudesu]_Soothe_Me_Chapter_60END.pdf_links"
    },
    {
        "title": "Divine Hands",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/04/Divine-Hands.jpg?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://www.mirrored.to/files/0Z0MNPIR/[Doudesu]_Divine_Hands_50.pdf_links"
    },
    {
        "title": "The Mother And Daughter Next Door",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/The-Mother-And-Daughter-Next-Door.jpg?resize=165,225",
        "episode": "Chapter 52",
        "link": "https://www.mirrored.to/files/KKQVU0IS/[Doudesu]_Mother___Daughter_Next_Door_Chapter_52-END.pdf_links"
    },
    {
        "title": "Collapse And Rewind",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/04/Collapse-and-Rewind.jpg?resize=165,225",
        "episode": "Chapter 65",
        "link": "https://www.mirrored.to/files/I2YDVSJM/[Doudesu]_Collapse___Rewind_Chapter_65END.pdf_links"
    },
    {
        "title": "Close As Neighbors",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Close-As-Neighbors.jpg?resize=165,225",
        "episode": "Chapter 52",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Bittersweet",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Bittersweet.jpg?resize=165,225",
        "episode": "Chapter 55",
        "link": "https://www.mirrored.to/files/QBWEZKTW/[Doudesu]_Bittersweet_Ch.55_END.pdf_links"
    },
    {
        "title": "Cohabitation With My Ex-Wife",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Cohabitation-with-my-ex-wife.jpg?resize=165,225",
        "episode": "Chapter 67",
        "link": "https://www.mirrored.to/files/1HLQFV8O/[Doudesu]_Ex-Wife_Ch.67_END.pdf_links"
    },
    {
        "title": "Komik Milftoon Bintang K-pop",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/0008-2.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/ghvksvh42h9l60q/Bintang_K_Pop.pdf/file"
    },
    {
        "title": "One Punch Man Bertarung Bersama Fubuki",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/One-Thrust-Man.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/u57dovh1ohk7om2/One+Punch+Man+-+Bertarung+Bersama+Fubuki.zip/file"
    },
    {
        "title": "Komik Madloki Lady of Uzumaki",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-uzumaki.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/fyo2znhjhizxg4q/Komik_Madloki_Lady_Of_Uzumaki_Chapter_02.pdf/file"
    },
    {
        "title": "Fitness",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/fitnesss.jpg?resize=165,225",
        "episode": "Chapter 104",
        "link": "https://www.mirrored.to/files/16CVR1ZJ/[Doudesu]_Fitness_104_END.pdf_links"
    },
    {
        "title": "Madloki LEWD Audio On Cam Blowjob",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/photo_2022-03-29_18-11-47.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/VKyNWq585pY4N"
    },
    {
        "title": "Beyond Imagination",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Beyond-Imagination.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://www.mirrored.to/files/TSQ0FBGK/[Doudesu]_Beyond_Imagination_Chapter_60END.pdf_links"
    },
    {
        "title": "Goddess Stargram",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Goddes-Stargram.jpg?resize=165,225",
        "episode": "Chapter 60",
        "link": "https://www.mirrored.to/files/1WZKQA0G/"
    },
    {
        "title": "Saitama X",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Saitama-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/pdPq7DDvVP2Ma"
    },
    {
        "title": "Narutod Bath House",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Narutod-Bath-house.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/jQR8RQRXN7Vep"
    },
    {
        "title": "Naruto Bertiga Lebih Baik",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Naruto-Bertiga-Lebih-Baik.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/GW828WDVWaKNj"
    },
    {
        "title": "Gara Gara CD Bibiku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Gara-Gara-CD-Bibiku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/5dyZy2Gv4AXz6"
    },
    {
        "title": "One Shot Men’s Clinic",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/One-Shots-Men-Clinic.jpg?resize=165,225",
        "episode": "Chapter 51",
        "link": "https://www.mirrored.to/files/QE2RISLX/[Doudesu]_One_Shot_Men_Clinic_51_(END).pdf_links"
    },
    {
        "title": "The Girl That Wet The Wall",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/The-Girl-That-Wet-The-Wall.jpg?resize=165,225",
        "episode": "Chapter 61",
        "link": "https://www.mirrored.to/files/1IPCBQRF/[Doudesu]_The_Girl_That_Wet_the_Wall_61_END.pdf_links"
    },
    {
        "title": "A Baby’s Nest",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/A-Babys-Nest.jpg?resize=165,225",
        "episode": "Chapter 43",
        "link": "https://www.mirrored.to/files/TCIFSETZ/[Doudesu]_A_Baby_s_Nest_43_END.pdf_links"
    },
    {
        "title": "Madloki Zoku Zenpai",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Madloki-Zoku-Zenpai.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.solidfiles.com/v/KnMyB2ZXkKWkp"
    },
    {
        "title": "Madloki Linda Daily Lewd Story",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/MAdloki-Linda-Daily-Lewd-Story.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/KnMyBGqmA3ewj"
    },
    {
        "title": "Town Girl",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Town-Girl.jpg?resize=165,225",
        "episode": "Chapter 50",
        "link": "https://www.mirrored.to/files/74R7LFMG/[Doudesu]_Town_Girls_50_END.pdf_links"
    },
    {
        "title": "Your Situation",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Your-Situation.jpg?resize=165,225",
        "episode": "Chapter 56",
        "link": "https://www.mirrored.to/files/BFOTVVP7/[Doudesu]_Your_Situation_Chapter_56END.pdf_links"
    },
    {
        "title": "Nami Robin Hancook 3D",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/img4-8.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.solidfiles.com/v/qdZ8Pq4jq8VrL"
    },
    {
        "title": "World Cup X",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/World-Cup-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/5dyv742dPDMdY"
    },
    {
        "title": "Zombie Girlfriend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Zombie-Girlfriend.jpg?resize=165,225",
        "episode": "Chapter 42",
        "link": "https://www.mirrored.to/files/0MCBHHPY/[Doudesu]_Zombie_Girlfriend_42.pdf_links"
    },
    {
        "title": "Beach Goddess",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Beach-Goddess.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://www.mirrored.to/files/D2KRWTVN/[Doudesu]_Beach_Goddess_40_END.pdf_links"
    },
    {
        "title": "Sensitive Matter",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Sensitive-Matter.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://www.mirrored.to/files/BHLWTE9I/[Doudesu]_Sensitive_Matter_40_(END).pdf_links"
    },
    {
        "title": "Taste Of Forbidden Fruit",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Taste-Of-Forbidden-Fruit.jpg?resize=165,225",
        "episode": "Chapter 53",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Family Tree",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Family-tree.jpg?resize=165,225",
        "episode": "Chapter 52",
        "link": "https://www.mirrored.to/files/RB9YSEO5/[Doudesu]_Family_Tree_52END.pdf_links"
    },
    {
        "title": "Ratna Sang Supergirl Erotical Hero",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Komik-Ratna-Sang-Supergirl-Erotical-Hero.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/uloafvtg7dnpj0z/Komik_Komik_Ratna_Sang_Supergirl_Erotical_Hero.pdf/file"
    },
    {
        "title": "Don’t Be Like This ! Son In Law",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Dont-Be-Like-This-Son-In-Law.jpg?resize=165,225",
        "episode": "Chapter 67",
        "link": "https://www.mirrored.to/files/8M9ORSVM/[Doudesu]_Don_t_Be_Like_This__Son-In-Law_67_END.pdf_links"
    },
    {
        "title": "One Piece Nico Robin",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/89t.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/8ZV266qvzDzXZ"
    },
    {
        "title": "NTR Bersama Orang Lain",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/NTR-Bersama-Orang-Lain.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/vNw8Bp34QVGrQ"
    },
    {
        "title": "Madloki LEWD Audio Fucked By Security",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/photo_2022-03-19_11-09-14.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/rd7edymQMPjm4"
    },
    {
        "title": "The Inheritance",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/The-Inheritance.jpg?resize=165,225",
        "episode": "Chapter 30",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Teach Me How To Please You",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Teach-Me-How-To-Please-You.jpg?resize=165,225",
        "episode": "Chapter 25",
        "link": "https://www.mirrored.to/files/ZF51ECG9/[Doudesu]_Teach_Me_How_to_Please_You_25_[END].pdf_links"
    },
    {
        "title": "Madloki Yokubari Saboten",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Madloki-Yokubari-Sabuten.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/MW5qP8mgAyYR5"
    },
    {
        "title": "Madloki Bakuchi Butai",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Madloki-Bakuchi-Butai.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/78AWk2gr6LjW6"
    },
    {
        "title": "PUBG X",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/PUBG-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/xVXkBGrx5V4z6"
    },
    {
        "title": "The Giving Girl",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/The-Giving-Girl.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://www.mirrored.to/files/EPKIOMOW/[Doudesu]_The_Giving_Girl_Chp.40.pdf_links"
    },
    {
        "title": "Naruto Adu Kenikmatan Sakura dan Hinata",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Naruto-Adu-Kenikmatan-Sakura-dan-Hinata.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/qdxzmNmwRx3gy"
    },
    {
        "title": "Malam Pertama Avatar dan Katara",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Malam-Pertama-Avatar-dan-Katara.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/g6xGBm8Z23V6G"
    },
    {
        "title": "Ketiak Berbulu dan Keringat Bibi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Ketiak-Berbulu-dan-Keringat-Bibi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/RxvMXK6Rza6BW"
    },
    {
        "title": "Dozen Years",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Dozenn-Year.jpg?resize=165,225",
        "episode": "Chapter 40",
        "link": "https://www.mirrored.to/files/QXJZVGKZ/[Doudesu]_Dozen_Years_40_END.pdf_links"
    },
    {
        "title": "The Lucky Guy",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Lucky-Guy.jpg?resize=165,225",
        "episode": "Chapter 56",
        "link": "https://www.mirrored.to/files/RX4I7MSW/[Doudesu]_The_Lucky_Guy_56_END.pdf_links"
    },
    {
        "title": "She’s My Younger Sister But It’s Okay",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/She-is-my-sister-but-its-okay.jpg?resize=165,225",
        "episode": "Chapter 34",
        "link": "https://www.mirrored.to/files/VMTQRJPC/"
    },
    {
        "title": "My Sister Like Sister",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/My-Sister-Like-Sister.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/3dp7NRMv72xLr"
    },
    {
        "title": "Part Time Job",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Part-Time-Job.jpg?resize=165,225",
        "episode": "Chapter 35",
        "link": "https://www.mirrored.to/files/C2FX21LC/[Doudesu]_Part_Time_Job_35_END.pdf_links"
    },
    {
        "title": "Returning GirlFriend",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Returning-Girl-Friend.jpg?resize=165,225",
        "episode": "Chapter 25",
        "link": "https://www.mirrored.to/files/0NUEDTFT/[Doudesu]_Returning_Girlfriend_Chapter_25_END.pdf_links"
    },
    {
        "title": "Berteduh",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Berteduh.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/GWeVXwGBLDppA"
    },
    {
        "title": "Folder Rahasia",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Folder-Rahasia.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/NVd32X7m8rVkd"
    },
    {
        "title": "Bersama Ibu dan Adikku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Bersama-Ibu-dan-Adikku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/GWepZzyLp5ZPx"
    },
    {
        "title": "Indomei",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Indomei.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/g6xygZBRpZ8zr"
    },
    {
        "title": "Secret Campuss",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Secret-Campuss.jpg?resize=165,225",
        "episode": "Chapter 20",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Sister’s Sex Education",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Sister-Sex-Education.jpg?resize=165,225",
        "episode": "Chapter 41",
        "link": "https://www.mirrored.to/files/1TT2N89B/[Doudesu]_Sister_s_Sex_Education_41_END.pdf_links"
    },
    {
        "title": "Cram School Scandal",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Cram-School-Scandal.jpg?resize=165,225",
        "episode": "Chapter 30",
        "link": "https://www.mirrored.to/files/0TAZ6XR2/[Doudesu]_Cram_School_Scandal_30END.pdf_links"
    },
    {
        "title": "Naruto Pertemuan Tertutup Konoha",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Naruto-Pertemuan-Tertutup-Konoha.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/nkx4PMAj5jWkD"
    },
    {
        "title": "Eunhye Super",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Eunhye-Super.jpg?resize=165,225",
        "episode": "Chapter 89",
        "link": "https://www.mirrored.to/files/0FARZA6P/[Doudesu]_Eunhye_Super_89_END.pdf_links"
    },
    {
        "title": "Secret X Folder",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Secret-X-Folder.jpg?resize=165,225",
        "episode": "Chapter 18",
        "link": "https://www.mediafire.com/file/uz6p1w63kyo2o3z/Secret_X_Folder_18_5BEND5D.pdf/file"
    },
    {
        "title": "Sewa Pembantu",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Sewa-Pembantu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/6GR2vzdm4kXg3"
    },
    {
        "title": "Permainan Cinta",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Permainan-Cinta.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/GWeDNwxBDGNGk"
    },
    {
        "title": "Pelajaran Komunikasi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Pelajaran-Komunikasi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/Pe2M3KYxmpKYY"
    },
    {
        "title": "Organisasi Ninja Yuzuha",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Organisasi-Ninja-Yuzuha.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/fq3ujtiavnmujsi/Organisasi_Ninja_Yuzuha.zip/file"
    },
    {
        "title": "Rahasia Istri",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Rahasia-Istri-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/MW5gjWkaNj7Ap"
    },
    {
        "title": "Malam Pertama",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Malam-Pertama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/KnYqDzQPkwy5B"
    },
    {
        "title": "One Piece Pemandian Tsunade",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/One-Piece-Pemandian-Tsunade.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/BVwVVD7jM8djN"
    },
    {
        "title": "Madloki Atlet Renang",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Madloki-Atlet-Renang.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/GWedBz65PpzRp"
    },
    {
        "title": "Madloki Ibu Kost",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/MAdloki-Ibu-Kost.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/vNxnK4zgxD3gD"
    },
    {
        "title": "Young Boss",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Young-Boss.jpg?resize=165,225",
        "episode": "Chapter 113",
        "link": "https://www.mirrored.to/files/0JMQXOBN/[Doudesu]_Young_Boss_113_END.pdf_links"
    },
    {
        "title": "Ibu Yang Erotis",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Ibu-Yang-Erotis.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/GWewXB5qrMXDw"
    },
    {
        "title": "Ibu Temanku Sangat Seksi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Ibu-Temanku-Sangat-Seksi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/BVwqWLW5NDe3d"
    },
    {
        "title": "Teman Kerja Sampingan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Teman-Kerja-Sampingan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/a4Q4Wak8X7kyG"
    },
    {
        "title": "Dipaksa Tapi Ketagihan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Dipaksa-Tapi-Ketagihan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/Pe25v7DMjV8nZ"
    },
    {
        "title": "Boss Suamiku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Boss-Suamiku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/XLMyWamgZnAY2"
    },
    {
        "title": "Blind",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Blind.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/ZZqB6MjQXv6N5"
    },
    {
        "title": "Bebih Belajar Kelompok",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Bebih-Belajar-Kelompok.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/GWeDmVrKMNrA5"
    },
    {
        "title": "Crayon Sinchan Masao dan Ibu",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Crayon-Sinchan-Masao-dan-Ibu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/78mQqPkvBn26g"
    },
    {
        "title": "Barber X",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Barber-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/3drXYMVRrm4qz"
    },
    {
        "title": "Bermain Dengan Boss",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Bermain-Dengan-Boss.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/78mKqmeAvLyMy"
    },
    {
        "title": "Anak Sekolah dan Om",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Anak-Sekolah-dan-Om.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/g6aG4vQxG2eaR"
    },
    {
        "title": "Hijabitch Mother Day",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/photo_2022-03-05_09-56-15.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/AWDeRDngKnNNB"
    },
    {
        "title": "Kisah Ibu Tiriku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Kisah-Ibu-Tiriku.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.solidfiles.com/v/5dZXNyknyBXM7"
    },
    {
        "title": "Madloki Gal Mama To Pakopako",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Madloki-Gal-Mama-to-pakopako.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.solidfiles.com/v/8Z4nYDAdWYdYM"
    },
    {
        "title": "One Piece Yamato & Momonosuke",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/One-Piece-YAMATO-MOMONOSUKE.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/RxrY2KaZ55Nq2"
    },
    {
        "title": "Sehari Bersama Raikage",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Sehari-Bersama-Raikage.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/8Z4nea7ayNPzd"
    },
    {
        "title": "Mau Lembur Kan?",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Mau-Lembur-Kan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/De5mKBxraZeLj"
    },
    {
        "title": "Latihan Tanpa Henti",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Latihan-Tanpa-Henti.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/eWKw8KYDmRerr"
    },
    {
        "title": "Aku Tidak Perawan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Aku-Tidak-Perawan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/6G7maYjMvB3A8"
    },
    {
        "title": "Pemburu Perjaka",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Pemburu-Perjaka.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/GW2VvRnqgeArn"
    },
    {
        "title": "Teman Bermain Mama",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Teman-Bermain-Mama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/MWRYDZxzVvDem"
    },
    {
        "title": "Adik Kecilku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/Adik-Kecilku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/W84BdzK7QYWQe"
    },
    {
        "title": "Adik Ipar",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/Adik-Ipar.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/3drmMQza7gmgK"
    },
    {
        "title": "Suku Amazon",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Suku-Amazon.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/W84xZeGMYWPdQ"
    },
    {
        "title": "Siluman Kupu Kupu",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/03/SIluam-Kupu-Kupu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/6G7ZxkwzZRXrK"
    },
    {
        "title": "Pacar Sewaan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Pacar-Sewaan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/BVYQnNPpnWVYp"
    },
    {
        "title": "Murid Baru",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Murid-Baru.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/5dZgxd2kLdmpm"
    },
    {
        "title": "Keponakan Yang Nakal",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Keponakan-Yang-Nakal.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/eWKY5R4K3aAkW"
    },
    {
        "title": "Ibu dan Anak Sama Saja",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/03/Ibu-dan-Anak-Sama-Saja.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/a4YKRYRGwdev2"
    },
    {
        "title": "Dikeroyok Anak SMA",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/03/Dikeroyok-Anak-SMA.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/vN4Add3WkZPLZ"
    },
    {
        "title": "Okkycreed Masih Kangen",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/03/MAsih-KAngen.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/8Z4BRXMrk7GDR"
    },
    {
        "title": "Sperman",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Sperman.jpg?resize=165,225",
        "episode": "Chapter 18",
        "link": "https://www.solidfiles.com/v/zegAQ3yQqweAV"
    },
    {
        "title": "Madloki LEWD Audio Have Sex With Boss",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/photo_2022-02-28_09-06-19.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/2dqyXYP8jzPqX"
    },
    {
        "title": "Sakura dan Sasuke",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Sakura-dan-Sasuke.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/dNdn58aWBAaky"
    },
    {
        "title": "Narutod dan Sarada",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/NArutod-dan-Sarada.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/VKm6rLrGZ2y4k"
    },
    {
        "title": "Bolapistar Ibu dan Anak",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Malay-Ibu-dan-Anak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/kXBQYRV2yXdmG"
    },
    {
        "title": "Perang Para Dewa",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Perang-Para-Dewa.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/vN4agnYBwLDgY"
    },
    {
        "title": "Boku No Hero Academia",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Boku-No-Hero-Academia.jpg?resize=165,225",
        "episode": "Chapter 09",
        "link": "https://www.solidfiles.com/v/nkMaLdY5djxg7"
    },
    {
        "title": "One Piece Kakaknya Sanji",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/One-Piece-Kakaknya-Sanji.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/vN4ZXP7zPA8yk"
    },
    {
        "title": "Ayah Mertuaku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Ayah-Mertuaku.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://www.solidfiles.com/v/XLQ2mwgVV582X"
    },
    {
        "title": "Madloki Bungkus Ughtea",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Madloki-Bungkus-Ughtea.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/dNdmyPqq2N5Nr"
    },
    {
        "title": "Minecraft X",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/01.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://www.solidfiles.com/v/nkMNyK2Z8aqjx"
    },
    {
        "title": "Madloki LEWD Raped By Sister Husband",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/photo_2022-02-24_17-42-31.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/GW5V2dKKw67BQ"
    },
    {
        "title": "Madloki LEWD Audio Punish My Step Son",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/photo_2022-02-24_17-42-25.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/BVnmYN2m6krMq"
    },
    {
        "title": "Saudaraku Diperkaos Temanku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Saudaraku-Diperkaos-Temanku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/8ZxXpD8deXNxr"
    },
    {
        "title": "Miss DD House Call",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Miss-DD-House-Call.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/RxMGKRGdgnZNx"
    },
    {
        "title": "Menantu dan Mertua",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Menantu-dan-Mertua.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/rdqN6Vgezy4P2"
    },
    {
        "title": "Ibuku Datang Lagi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Ibuku-Datang-Lagi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/W8ZzqmLxwxjWv"
    },
    {
        "title": "Ibu Temanku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Ibu-Temanku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/W8ZzqBwrem4NL"
    },
    {
        "title": "Digoda Kakak Ipar",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Digoda-Kakak-Ipar.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/78Kxp5R7ynrn3"
    },
    {
        "title": "Cosplayer Lulu",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Cosplayer-Lulu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/RxMGKzn8yYqP5"
    },
    {
        "title": "Berbagi Mama Dengan Temanku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Berbagi-Mama-Dengan-Temanku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/zeWpGzPDkRjqn"
    },
    {
        "title": "Bencana Pelajaran Olahraga",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Bencana-Pelajaran-Olahraga.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/2dxrG3BMG875V"
    },
    {
        "title": "Why Are You Getting Out From There",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Why-Are-You-Getting-Out-From-There.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/GW5mG6gxqjRQ3"
    },
    {
        "title": "Twin MILF Add",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Twin-MILF-Add.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/3dxZPk2BVPaeV"
    },
    {
        "title": "Stand By Me",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Stand-By-Me.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://www.solidfiles.com/v/5dxQad3BgvAX3"
    },
    {
        "title": "Madloki Tuan Putri dan Pelayan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Madloki-Tuan-Putri-dan-Pelayan.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.solidfiles.com/v/PeRvQa3xeqvwp"
    },
    {
        "title": "Bolapistar Adik Kakak",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Bolapistar-Adik-Kakak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/XL7qq26kP2ZgM"
    },
    {
        "title": "Tetangga Brondong",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Tetanggaku-Brondong.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/LKvdkd2DXQ5gz"
    },
    {
        "title": "Rahasia Mama Terbongkar Temanku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Rahasia-Mama-Terbongkar-Temanku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/6Gxq6QRY4LAwy"
    },
    {
        "title": "Pembalasan Kakak",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pembalasan-Kakak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/VKPMwMN7djwaj"
    },
    {
        "title": "Pada Waktu Itu",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pada-Waktu-Itu.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.solidfiles.com/v/LKvdM8v4VRYd6"
    },
    {
        "title": "Keluarga Peri",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Keluarga-PEri.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/YLmrp8LZpDj8A"
    },
    {
        "title": "Menyuruh Adikku Menghamili Istriku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Menyuruh-Adikku-Menghamili-Istriku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/y6NLGXkN7ZaRj"
    },
    {
        "title": "Cewek Binaragawati",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Cewek-Binaragawati.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/3dxAm4y3NWRe2"
    },
    {
        "title": "Anak Angkat Mesum",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Anak-Angkat-Mesum.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.solidfiles.com/v/rdqLnVxp8qga4"
    },
    {
        "title": "Tetangga Yang Lucu",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Tetangga-Yang-Lucu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/XL7P6grYVQpVX"
    },
    {
        "title": "Teman Tapi Mesra",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Teman-Tapi-Mesra.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/a4jDGNGKezRQn"
    },
    {
        "title": "Tante Sangean",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Tante-Sangean.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/qdzqmp3vzkgPr"
    },
    {
        "title": "Suster Kecil Yang Malang",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Suster-Kecil-Yang-Malang.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/vN7Wgrm37eX84"
    },
    {
        "title": "S.E.T",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/SET.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/g6G2BrgamWk6M"
    },
    {
        "title": "Pengalaman Pertama Sae Chan",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pengalaman-Pertama-Sae-Chan.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.solidfiles.com/v/78KRXZZ4DMV5y"
    },
    {
        "title": "Operasi Kelamin",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Operasi-Kelamin.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/QnABpXpMVywPk"
    },
    {
        "title": "Nafsu Dengan Sepupuku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/NAfsu-Dengan-Sepupu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/jQvpLxVD6ezAP"
    },
    {
        "title": "Mamaku Hanya Milikku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mamaku-Hanya-MIlikku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/YLmKrgVr3NZmN"
    },
    {
        "title": "Madloki Wife Trip",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/MAdloki-Wife-Trip-Chapter-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/RxMnqjvyGDvxd"
    },
    {
        "title": "Kastil Musim Semi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kastil-Musim-Semi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/pdMzLv2VKgXRG"
    },
    {
        "title": "Kakakku dan Grup Baseball",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kakakku-dan-Grup-Baseball.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/AWeVN5KxdyYQq"
    },
    {
        "title": "Seorang Ibu dan Anak Jalanan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Seorang-Ibu-dan-Anak-Jalanan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/jQvpLw2pwZYQw"
    },
    {
        "title": "Dikeroyok Kakak Kakak Cewek",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Dikeroyok-Kakak-Cewek.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.solidfiles.com/v/m2BRLPN26DKdx"
    },
    {
        "title": "Berubah Mennjadi Boneka Sex",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Berubah-Mennjadi-Boneka-Sex.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/BVn6Gv6pvVw85"
    },
    {
        "title": "Anak Bungsu",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Anal-Bungsu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/dN3K2BG7QqNQk"
    },
    {
        "title": "Aku Mencintai Adikku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Aku-Mencintai-Adikku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/a4jDQDrBjm4R6"
    },
    {
        "title": "Madloki The Mom of Boruto",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Madloki-The-Mom-of-Boruto.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/nkRgxdnDVwLRY"
    },
    {
        "title": "Naruto Sudah Tidak Tahan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Naruto-Sudah-Tidak-Tahan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/y6N3Xe2qwAyx5"
    },
    {
        "title": "Komik Thailand My Sister",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/My-Sister.jpg?resize=165,225",
        "episode": "Chapter 3.3",
        "link": "https://www.solidfiles.com/v/g6Gy3kgpPMWwB"
    },
    {
        "title": "Madloki LEWD Audio Cerita Citra  1",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/photo_2022-02-19_09-32-33.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/W8ZB4GGa2AQVq"
    },
    {
        "title": "Memuaskan Istriku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Memuaskan-Istriku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/xV4d6Nk2a2QvK"
    },
    {
        "title": "Siluman Ular Memperkosaku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Siluman-Ular-Memperkosaku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/xV4dn7PLZa8Qa"
    },
    {
        "title": "Pesta Bertukar Mama",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Perta-Bertukar-Mama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/GW5VRP3qA7GGq"
    },
    {
        "title": "Pengobatan Kecelakaan Mama",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pengobatan-Kecelakaan-Mama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/vN736v4gWa3Br"
    },
    {
        "title": "Pamanku Nakal",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pamanku-Nakal.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/BVnmareLQz3Z5"
    },
    {
        "title": "Pamanku Kekasihku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pamanku-Kekasihku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/rdqnAWB5xL6mD"
    },
    {
        "title": "Pacarku Saudaraku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pacarku-Saudaraku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/zeW2D3GDQK2L5"
    },
    {
        "title": "Pacarku Masih Kecil",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pacarku-Masih-KEcil.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/ZZ4w8jwLwYkQr"
    },
    {
        "title": "Nafsu Tapi Tak Cinta",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/NAfsu-Tapi-Tak-Cinta.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/NV83nGkMgaZLz"
    },
    {
        "title": "Kakak dan Temannya",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kakak-dan-Temannya.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/vtnl082adlyo4a0/DOJIN+-+KAKAK+&+TEMANNYA.pdf/file"
    },
    {
        "title": "3D Naruto Sakura dan Sarada",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/3D-Naruto-Sakura-dan-Sarada.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/znnibarjeeade7x/3D+-+NARUTO+SAKURA+&+SARADA.pdf/file"
    },
    {
        "title": "Mika Simpanan Om Om",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mika-Simpanan-Om-Om.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/ahxxx595uto4ol8/Mika_Simpanan_Om.pdf/file"
    },
    {
        "title": "Mama Bernafsu Denganku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mama-Bernafsu-Denganku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/mpjuef0mrqqtm6d/Mama_Bernafsu_Denganku.pdf/file"
    },
    {
        "title": "Ketika Mamaku Tidur",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Ketika-Mamaku-Tidur.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/6l3jadhxi4lq8bh/Ketika_Mamaku_Tidur.pdf/file"
    },
    {
        "title": "Karyawan Baru",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Karyawan-Baru.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/f4s9v1jfhxvd49s/Karyawan_Baru.pdf/file"
    },
    {
        "title": "Kakakku Open BO",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kakakku-Open-BO.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/9ncsfhn448q6et8/Kakakku_Open_BO.pdf/file"
    },
    {
        "title": "Kakak Adik Semua Pacarku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kakak-Adik-Semua-PAcarku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/uhrvm99dvpgrs94/Kakak_Adik_Semua_Pacarku.pdf/file"
    },
    {
        "title": "Cinta Bersemi Karena Reuni",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Cinta-Bersemi-Karena-Reuni.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/yrm6yjb2p3jicpt/Cinta_Bersemi_Karena_Reuni.pdf/file"
    },
    {
        "title": "Cewek Yang Digosipkan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Cwek-Yang-Digosipkan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/4zx4josv7s0528l/Cewek_yang_Digosipkan.pdf/file"
    },
    {
        "title": "Bantuin Tante Dong",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Bantuin-Tante-Dong.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/9fj1y1o6yw6pdf5/Bantuin_Tante_dong.pdf/file"
    },
    {
        "title": "Adik Ipar Menggodaku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Adik-Ipar-Menggodaku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/wisjlmptjwwpzaj/Adik_Ipar_Menggodaku.pdf/file"
    },
    {
        "title": "Teman Anakku Menyukaiku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Teman-Anakku-Menyukaiku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/rdqkAy8p3WKx3"
    },
    {
        "title": "Tetanggaku Memperkosaku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Tetanggaku-Memperkosaku.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.solidfiles.com/v/8Zx3mgApQR6Zp"
    },
    {
        "title": "Hijabolic Artis",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hijabolic-Artis.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/8Zx3v5ZQ4v7Bk"
    },
    {
        "title": "Rahasia Dengan Istri Anakku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Rahasia-Dengan-Istri-Anakku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/ZZ45n7aPm4mN3"
    },
    {
        "title": "One Piece Petualangan Dunia Baru",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/One-Piece-Petualangan-Dunia-Baru.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/g6GALAa7rz2Zg"
    },
    {
        "title": "Avatar Avatod",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Avatar-Avatod.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/vN7GLDg2dKYNj"
    },
    {
        "title": "Marudashi X Sister",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Marudashi-X-Sister.jpg?resize=165,225",
        "episode": "Chapter 07",
        "link": "https://www.solidfiles.com/v/a4japgQZQ5Akp"
    },
    {
        "title": "Susu Mama Temanku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Susu-Mama-Temanku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/8ZxgmwqWZwNGM"
    },
    {
        "title": "Membius Mama",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Membius-Mama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/8ZxgmAapQWP26"
    },
    {
        "title": "Mamaku Tak Bisa Menolak",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mamaku-Tak-Bisa-Menolak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/KnaRjV3wpmmq5"
    },
    {
        "title": "Mamaku Oh Mamaku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mamaku-Oh-Mamaku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/NV8R33332jpvv"
    },
    {
        "title": "Dikerjai Produser Film",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Dikerjai-produser-film.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/RxMV2w7PPXxYe"
    },
    {
        "title": "Mama dan Kakekku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mama-dan-Kakekku.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.solidfiles.com/v/g6GQPdwGQpQ87"
    },
    {
        "title": "Istri Yang Aneh",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Istri-Yang-Aneh.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/W8Zq5qRV4eVmM"
    },
    {
        "title": "Idol",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Idol.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/Knap4qX6dwgR3"
    },
    {
        "title": "Diajari Mama",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Diajari-Mama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/eW58dGyQ82YdP"
    },
    {
        "title": "Netosis",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Netosis.jpg?resize=165,225",
        "episode": "Chapter 02 End",
        "link": "https://www.solidfiles.com/v/8Zxp7q7p5are6"
    },
    {
        "title": "Hadiah Valentine",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hadiah-Valentine.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/YLmnMAVe3v84P"
    },
    {
        "title": "Kakakku Sange",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kakakku-Sange.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/6GxPQ4NnrD57a"
    },
    {
        "title": "Dear My Mother",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Dear-My-Mother.jpg?resize=165,225",
        "episode": "Chapter 19",
        "link": "https://www.solidfiles.com/v/DeDvAm2qn3Pj3"
    },
    {
        "title": "Ayahnya Kyouko-san Nakal",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Ayahnya-Kyouko-san-Nakal.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/pdMV4aZg7Kmd8"
    },
    {
        "title": "Narutod Sakuhin",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Narutod-Sakuhin.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/jQvqaKMRrn6Ag"
    },
    {
        "title": "Di Bawah Kasur Anakku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Di-Bawah-Kasur-Anakku.jpg?resize=165,225",
        "episode": "Chapter 09",
        "link": "https://www.solidfiles.com/v/nk6rrZymkWRV3"
    },
    {
        "title": "Hamedori No Yatsu",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hamedori-No-Yatsu.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://www.solidfiles.com/v/vNdy254eVwXzK"
    },
    {
        "title": "Marin Bisque Doll – Batch 01",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Marin-Bisque-Doll-Batch-01.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/W83V568AQrWBD"
    },
    {
        "title": "Summer Halation",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Summer-Halation.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/LK7XLvL2Az3pX"
    },
    {
        "title": "Rinkan Riko to Yoshiko Rakugaki Kopi Hon",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Rinkan-Riko-to-Yoshiko-Rakugaki-Kopi-Hon.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/XL56Nmd7ZpP3k"
    },
    {
        "title": "Service Nami dan Robin",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Service-Nami-dan-Robin.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/BV8XLPmQL5vd6"
    },
    {
        "title": "Bakunew",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Bakunew.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/BV8XZYmpAGNjV"
    },
    {
        "title": "Secret X Secret – Keep It A Secret Promise",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Secret-X-Secret-Keep-It-A-Secret-Promise.jpg?resize=165,225",
        "episode": "Chapter 08",
        "link": "https://www.solidfiles.com/v/2dWXKPdnxRQ8n"
    },
    {
        "title": "Losekorntrol Hijab 3DX Gift",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hijab-3DX-Gift-Tanpa-Teks.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/a4R5vNdQRv7Ge"
    },
    {
        "title": "Miko Miko Yaku Shibori",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Miko-Miko-Yaku-Shibori.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/3dVQ5mDjLmrmm"
    },
    {
        "title": "Momo Piyo",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Momo-Piyo.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/XL5WYRY4v6MkR"
    },
    {
        "title": "Nurse",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Nurse.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/NVNrRMDK587qr"
    },
    {
        "title": "Tsunade Big Plan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Tsunade-Big-Plan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/MWmqjQR387Nx2"
    },
    {
        "title": "Penjaga Sekolah",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Penjaga-sekolah.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/W83NeGYepWNak"
    },
    {
        "title": "Janji Dengan Hokage Sama",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Janji-dengan-hokage-sama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/qdjZgQW37yAdA"
    },
    {
        "title": "Jojo Bizarre X",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Jojo-Bizarre-X.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/g6PKQa42xN2Be"
    },
    {
        "title": "Bunny Service",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Bunny-Service.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.solidfiles.com/v/eWqammpMyQ3aA"
    },
    {
        "title": "Hitozuma Life",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hitazuma-Life.jpg?resize=165,225",
        "episode": "Chapter 10",
        "link": "https://www.solidfiles.com/v/NVNrBdewa66n7"
    },
    {
        "title": "Madloki Joshi Kousei Rich",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Madloki-Joshi-Kousei-Rich.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.solidfiles.com/v/rdDVjvpAX7mqP"
    },
    {
        "title": "Chop Stick",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Chop-Stick.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "ttps://www.solidfiles.com/v/qdjWVpDN7A8Pv"
    },
    {
        "title": "Istri Sewaan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Istri-Sewaan.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.solidfiles.com/v/NVNZ4g2M7Q8kq"
    },
    {
        "title": "Sensei",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Sensei.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.solidfiles.com/v/NVNZ43Pkr26X6"
    },
    {
        "title": "Hijabolic April’s Pole Dance",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hijabolic-Aprils-Pole-Dance.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.solidfiles.com/v/78jzm8xjn5kMW"
    },
    {
        "title": "Yang Dibayangkan Hokage",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Yang-Dibayangkan-Hokage.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.solidfiles.com/v/VKYnmazV6YPdM"
    },
    {
        "title": "Pokemon Ash dan Mimpi Bermimpi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Pokemon-Ash-dan-Mimpi-Bermimpi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.solidfiles.com/v/YLdYNaAdgGQXe"
    },
    {
        "title": "Inmou",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Inmou.jpg?resize=165,225",
        "episode": "Chapter 10",
        "link": "https://www.mirrored.to/files/GERKC9GL/[Doudesu]_INMOU_10END.pdf_links"
    },
    {
        "title": "Berawal Dari HP",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Berawal-DAri-HP.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/2ksb5grz9a6we3b/Manga+-+Berawal+dari+HP+Chp+3.pdf/file"
    },
    {
        "title": "Adel Tersikat",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Adel-Tersikat.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/va4h8zkyl1jcs3a/adel.pdf/file"
    },
    {
        "title": "Kimi Ga Suki",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kimi_ga_Suki.jpg?resize=165,225",
        "episode": "Chapter 10",
        "link": "https://www.solidfiles.com/v/vNvqQWVqrD2Qv"
    },
    {
        "title": "Cecilia Style Infinite Stratos",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Cecilia-Style-Infinite-Stratos.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/g5mlxqagoquv6pk/Cecilia+Style+-+Infinite+Stratos+(uncen).pdf/file"
    },
    {
        "title": "Vampir Pencari Mangsa",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Vampir-Mencari-Mangsa.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://www.mediafire.com/file/f5xrbt5ee9d5w35/VAMPIR+PENCARI+MANGSA+Chp+5.pdf/file"
    },
    {
        "title": "Big Ass",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Big-Ass.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/p5bbplelr515j1e/Bg_ss_2.pdf/file"
    },
    {
        "title": "Bulma di Planet Namek",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Bulma-di-Planet-Namek.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/b1uncmo44m8kzza/Bulma_In_Namek.pdf/file"
    },
    {
        "title": "Mama Ryokou Kepanasan",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Mama-Ryokou-Kepanasan.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/kvsladul8tu3d7o/Mama_Ryokou_Kepanasan_28end29.pdf/file"
    },
    {
        "title": "Watashi Ga Iyashite Agemasu",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Watashi-Ga-Iyashite-Agemasu-Ch1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/0391qgn9i4qu96x/Watashi_ga_Iyashite_Agemasu_Ch1.pdf/file"
    },
    {
        "title": "The World That I Rule",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/The-Word-That-I-Rule.jpg?resize=165,225",
        "episode": "Chapter 41",
        "link": "https://www.mediafire.com/file/e139m1n5tgr6u0h/Chapter_41_5BEpilog5D.pdf/file"
    },
    {
        "title": "Delightfully Fuckable And Unrefined",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Delightfully-Fuckable-And-Unrefined.jpg?resize=165,225",
        "episode": "Chapter 06",
        "link": "https://www.mediafire.com/file/x4kxyo08j1ann0w/DELIGHTFULLY_FCKBL_AND_UNREFINED_6.pdf/file"
    },
    {
        "title": "Madloki Unlucky Tsunade",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/MAdloki-Unlucky-Tsunade.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/2ux4wnwxu65pvi7/MADLOKI+-+UNLUCKY+TSUNADE.pdf/file"
    },
    {
        "title": "Hijabitch Soccer Girl",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hijabitch-Soccer-Girl.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/nuj314lhlctvrxf/HIJAB1TCH+-+SOCCER+GIRLS.pdf/file"
    },
    {
        "title": "Azus Attack",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Azus-Attack.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://www.mediafire.com/file/e71uop75za29ujm/Nakanak+5+(fullcolor).pdf/file"
    },
    {
        "title": "Komik Kharisma Jati Kontol Bapak",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/kharisma-jati-kontol-bapak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/lg5wp7w8vqndkis/Komik_Kharisma_Jati_Kontol_Bapak.pdf/file"
    },
    {
        "title": "Komik Kharisma Jati Kencur Trilogi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-4.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/qrziicxecok90f3/Kharisma_Jati_Kencur.pdf/file"
    },
    {
        "title": "Bibiku Seksi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Bibiku-Seksi.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/82lw4a5qbncihs9/Bibiku+Seksi+3.pdf/file"
    },
    {
        "title": "Ibu dan Kakakku Adalah BO",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Ibu-dan-Kakakku-Adalah-BO.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/bnk57tdunkjqpgh/My_Mom_And_Sister_Are_Size_Queen_Slts_3.pdf/file"
    },
    {
        "title": "Transilvania MILF",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Transilvania-MILF-1.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/2ayh5b93uy9leky/Transylvania_MLF_2.pdf/file"
    },
    {
        "title": "Jujur Kepada Otonashi Kun",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Jujur-Kepada-Otonashi-Kun.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/p41c5jsfpezpfap/Jujur_kepada_Otonashi-kun.pdf/file"
    },
    {
        "title": "Permintaan Anak",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Permintaan-Anak.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/ys0nxsmr5fpqm7z/Permintaan+Anak+(Mom+&+Son).pdf/file"
    },
    {
        "title": "Violet Beraksi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Violet-Beraksi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/t051h13m8022f3b/Sltty_Violet.pdf/file"
    },
    {
        "title": "Stuck With Simon",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Stuck-With-Simon.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/ree52y7ls0yhs6n/Stuck_With_Simon.pdf/file"
    },
    {
        "title": "Tsunade dan Konomaharu",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Tsunade-dan-Konomaharu.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/awmeas2augif29z/Tsunade_And_Konohamaru.pdf/file"
    },
    {
        "title": "Sister Secret",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Sister-Secret.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/0vwupwnsvytr63w/Sister_s_Secret.pdf/file"
    },
    {
        "title": "Put Down Tanpa Teks",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Put-Down.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/dsgs0i0yj8jkpqx/Put_Down.pdf/file"
    },
    {
        "title": "Keinginan Yang Membara",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Keinginan-YAng-Membara.jpg?resize=165,225",
        "episode": "Chapter 12 End",
        "link": "https://www.mediafire.com/file/i4pgiyre57juswf/Keinginan+yang+Membara+12+alternative+ending.pdf/file"
    },
    {
        "title": "Little Stop",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Little-Stop.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/6ssib1ij8cpwzi6/KOMIK+LITTLE+STOP.pdf/file"
    },
    {
        "title": "Nami Saga",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Nami-Saga.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/hxby7qjzc4gjjye/NAMI+SAGA+Chp+2.pdf/file"
    },
    {
        "title": "Favorit Mama",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Favorit-Mama.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/2gcx10wys8l6pz9/Mama_s_Favorite.pdf/file"
    },
    {
        "title": "Hadiah Untuk Isabelle",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Isabelle-Alternative-Reward.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/fkicy0rwbl4bi6l/Isabelle_s_Alternative_Reward.pdf/file"
    },
    {
        "title": "Kunoichis Mandi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Kunoichis-Mandi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/pb0udkn7u1q4pwe/Kunoichis_At_The_Bathhouse.pdf/file"
    },
    {
        "title": "Is My Mom Hot",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Is-My-Mom-Hot.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/pfkf7jvets6yvwe/Is_My_Mom_Hot.pdf/file"
    },
    {
        "title": "Diari Hinata",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/Diari-Hinata.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/arqwzhrtfp5njq7/Hinata_s_Diary.pdf/file"
    },
    {
        "title": "MILF Age",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Milf-Age.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/enmu0fy8u4a11ce/Mlf_Age_3.pdf/file"
    },
    {
        "title": "Hearts",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hearts.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/sk5tewlbf1pxujm/Hearts.pdf/file"
    },
    {
        "title": "Gwen Celebrates Christmas",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Gwen-Celebrates-Christmas.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/zet8xv56v16q50p/Gwen_s_Going_On_A_Date.pdf/file"
    },
    {
        "title": "Girls Night Out",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Girl-Night-Out.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/0ltb1l9eq0w1hal/Girls_Night_Out_.pdf/file"
    },
    {
        "title": "No One Can Notice Me",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/No-One-Can-Notice-Me.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/10izzy8dsi8k44t/5BCrotPedia_Project5D_Dare_mo_Ore_ni_Ki_ga_Tsukanai7ERenzoku_Giri2C_Rezu_Couple_Sounyuu21_Nakadashi21_Nani_wo_Yatte_mo_Ki_ga_Tsukanai_Ch1.pdf/file"
    },
    {
        "title": "Fundoshi Haha",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Fundoshi-Haha.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/6lassmpcexvi6b7/5BCrotPedia_Project5D_Fundoshi_Haha.pdf/file"
    },
    {
        "title": "A Family Vacation",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/FAmily-Vacation.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/bnif3i2l3tpan20/Family_Vacation.pdf/file"
    },
    {
        "title": "A Sunday Schooling",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/02/A-Sunday-Schooling.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/trzosz2n89450gy/A_Sunday_Schooling.pdf/file"
    },
    {
        "title": "Aunt Deb’s Show",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Aunt-Debs-Show.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/fur290gnz1bulq7/Aunt_Deb_s_Show.pdf/file"
    },
    {
        "title": "Keluarga Kenji",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Keluarga-Kenji.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/5lhak2wfpj831ue/MOMSON_-_KELUARGA_KENJI.pdf/file"
    },
    {
        "title": "Dragon Ball Kakek Kura Kura Mesum",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/DRagon-ball-kakek-kura-mesum.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/wg8tdmza4r9eokg/5BDoudesu5D_Korai_kara_no_Narawashi_Niizuma_e_no_Ecchi_na_Itazura_28DB29.pdf/file"
    },
    {
        "title": "Naruto Gaiden 10.5",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/02/Naruto-Gaiden.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/10rilcqhunktgba/5BDoudesu5D_Naruto_gaiden_10.5_28Naruto29.pdf/file"
    },
    {
        "title": "Vampire Sacrifice",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Vampire-Sacrivice.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/92l1kwidhix2rvy/Manga+VAMPIRE_SACRIFICE.pdf/file"
    },
    {
        "title": "Hijabolic Hijaber Punk",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hijabolic-Hijaber-Punk.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/2756lp4b6i17oqd/Hijabolic+Hijaber+Punk.zip/file"
    },
    {
        "title": "Hijabolic Christmas Pinguin",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/02/Hijabolic-Christmas-Pinguin.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/dfv26o8skeeut0v/Hijabolic_Christmas_Penguin.rar/file"
    },
    {
        "title": "Bebih Learn English",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Bebih-Learn-English.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/lwvoa62ew97bpxm/BEBIHOLIC+-+LEARN+INGGRIS.pdf/file"
    },
    {
        "title": "Rental Lovers",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Rental-Lovers.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/l8vb25ljzp531cb/5BDoudesu5D_Rental_Lovers.pdf/file"
    },
    {
        "title": "Ame No Hi Wa Honnori Chikubi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Ame-No-Hi-Wa-Honnori-Chikubi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/12b75ga4nf1pysk/5BDoudesu5D_Ame_no_Hi_wa2C_Honnori_Chikubi.pdf/file"
    },
    {
        "title": "Komik Karamare Tsuma No Kyouko",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Karamare-Tsuma-No-Kyouko.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/iuuzzf72rbiqws6/5BDoudesu5D_Karamare_Tsuma_no_Kyouko-san_Dosukebe_Oikko_Kyoudai_Hen.pdf/file"
    },
    {
        "title": "9 Satra",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/9-Satra.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/h0bryqtpfuzlop8/5BDoudesu5D_9_Satra.pdf/file"
    },
    {
        "title": "Komik Madloki Adik Kakak",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-adik-kakak.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/71yh59tsactxd6e/MADLOKI+-+ADEK+KAKAK+Chp+3+(GRATISS).pdf/file"
    },
    {
        "title": "Kakak Perempuanku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Kakak-Perempuanku.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/tbtghruc3g7pz82/kakak+perempuanku+(end).pdf/file"
    },
    {
        "title": "Jalan Ninja Naruto Sakura dan Hinata",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Jalan-Nanjuaku-NAruto.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/h95m48b3uknafnw/Jalan+Ninja+3.pdf/file"
    },
    {
        "title": "Pokemon Pertarungan Dua Saudara",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Pokemon-Pertarungan-Dua-Saudara.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/k2n68lg8i8l88av/Pokemon+-+Pertarungan+dua+saudara+(end).pdf/file"
    },
    {
        "title": "Komik Madloki Kamila",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-kamila.jpg?resize=165,225",
        "episode": "Chapter Anal",
        "link": "https://www.mediafire.com/file/frca2gnqsjvvud3/Madloki+Kamila+Anal.pdf/file"
    },
    {
        "title": "MLBBX Lolita",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/MLBBX-Lolita.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/gqnwevpy9u60jgc/MLBBX+-+L0LITA.pdf/file"
    },
    {
        "title": "Madloki Narutod Hinata dan Sakura",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/MAdloki-Narutod-Hinata-Sakura.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/owjqe92ayv9p2ha/MADLOKI+-+NARUTOD,+HINATA+&+SAKURA.pdf/file"
    },
    {
        "title": "Sudah Besar Minta ASI",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Sudah-Besar-Minta-Asi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/4vuhk4l85ak5owk/Sudah+besar+minta+asi+(end).pdf/file"
    },
    {
        "title": "Tatapan Matanya Membuatku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Tatapan-Matanya-Membuatku.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/ickd6qjgpljzjwm/Tatapan+matanya+membuatku.......(end).pdf/file"
    },
    {
        "title": "Boa Hancock",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Boa-Hancock.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/s2fm97bmbo8t4k8/Boa+Hancock+(end).pdf/file"
    },
    {
        "title": "Boruto Berulah",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Boruto-Berulah.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/jtf1guz9716lbba/Boruto+Berulah.pdf/file"
    },
    {
        "title": "English Comic Camgirl Mia",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Camgirl-Mia.jpg?resize=165,225",
        "episode": "Chapter Read",
        "link": "https://www.mediafire.com/file/k7s4a6t57hfaovh/English+Camgirl+Mia.zip/file"
    },
    {
        "title": "Yuuya dan Ibunya",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Yuya-dan-Ibunya.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/nmg5dcw4ots17wg/Yuuya+dan+Ibunya.zip/file"
    },
    {
        "title": "Mama San",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/MAma-san.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/yzc2z83q3sg503o/mama-san.zip/file"
    },
    {
        "title": "Hijab 3DX Tough love 3d No Text",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Tough-Love.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/o9kv232e1ywsi23/Tough-Luck232.zip/file"
    },
    {
        "title": "English Comic CrispyCheese Live Report 3D",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Live-Report.jpg?resize=165,225",
        "episode": "Chapter Read",
        "link": "https://www.mediafire.com/file/g8j3fhgvbgp5m3f/Live+Report+[CrispyCheese].rar/file"
    },
    {
        "title": "By Chance",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/By-Chance.jpg?resize=165,225",
        "episode": "Chapter 52 End",
        "link": "https://www.mediafire.com/file/tin2wwxhfh4yolb/By_Chance.Ch52_END_-_xomix.xyz.pdf/file"
    },
    {
        "title": "English Comic Midnight Swim",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Midnight-Swim.jpg?resize=165,225",
        "episode": "Chapter Read",
        "link": "https://www.mediafire.com/file/zbyuae226dd4od6/midnight+swim.rar/file"
    },
    {
        "title": "Nonton Bola",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Nonton-Bola.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/qov1vnz9xj6sgpc/Nonton+Bola.zip/file"
    },
    {
        "title": "Teman Wanita Yang Sudah Menikah",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Teman-wanita-yang-sudah-menikah.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/xnsp6p9nfb5bx7r/Teman+Wanita+yang+sudah+menikah+2.pdf/file"
    },
    {
        "title": "English Comic Hijab 3DX Young Love",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Young-Love.jpg?resize=165,225",
        "episode": "Chapter 08",
        "link": "https://www.mediafire.com/file/bkcyjezk8d0gfvi/3D_Young_Love_Volume_8.pdf/file"
    },
    {
        "title": "English Comic Hijabholic",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/English-Comic-Hijabholic.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/v3b16oguf9w7p0k/wET.pdf/file"
    },
    {
        "title": "Barbarhicc Hijabizah RAW Full Collection",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Barbarhicc.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/vo683barn4jp595/Collection__Barbarhicc_67.rar/file"
    },
    {
        "title": "Redoxa Left Over 3D No Text",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Redoxa-Left-Over-3D.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/utm956rlb5h4rao/Redoxa+-+Leftovers_02.rar/file"
    },
    {
        "title": "Komik 3D Hijab3DX",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/komik-hijab-3dx.jpg?resize=165,225",
        "episode": "Chapter Tough Luck",
        "link": "https://www.mediafire.com/file/3fkzyrkvzr17boj/Hijab_3DX_Tough_luck_No_Text.pdf/file"
    },
    {
        "title": "Strip Hijab Paccu",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Paccu.jpg?resize=165,225",
        "episode": "Chapter Strip 04",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Angel’s Tears",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Angel-Tears.jpg?resize=165,225",
        "episode": "Chapter 20",
        "link": "https://www.mediafire.com/file/9yiusxwl5pwo1kf/angels-tears-chapter-20.zip/file"
    },
    {
        "title": "Angel House (Facon)",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Angel-House.jpg?resize=165,225",
        "episode": "Chapter 13 End",
        "link": "https://www.mediafire.com/file/eo7zdbomi00ezcx/angel-house-chapter-13-end.zip/file"
    },
    {
        "title": "Bebih Tukang Pompa",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Bebih-Tukang-Pompa.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/ospb7300rda9gv2/Bebih+Tukang+Pompa.pdf/file"
    },
    {
        "title": "Hijabitch RAW Collection",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Hijabitch-RAW-Collection.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/l4sodsykdpcturq/Hijabitch_RAW_Collection.rar/file"
    },
    {
        "title": "Hijabolic Art NSFW RAW",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Hijabolic-Art-NSFW-RAW.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/sm5o9st1bqi1hx2/Hijabolic_Art_NSFW_RAW.zip/file"
    },
    {
        "title": "Crispy Cheese Zakia Ikram",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Zakia-Ikram.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/i7h7m9bqndgn5p7/CrispyCheese+-+++Zakia+Ikram.rar/file"
    },
    {
        "title": "Crispy Cheese A Dish Best Serves Cold",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Dishes-Best-Serve-Cold.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/95xmomtqs9u04d2/A+Dish+Best+Serves+(sic)+Cold+{No+Dialogue}+[CrispyCheese].zip/file"
    },
    {
        "title": "Crispy Cheese Ultimate Punishment 3D",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Intimate-Punishment.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/wkeacki58d54gyh/Intimate+Punishment+Pt+03.rar/file"
    },
    {
        "title": "Naughty Hijabista Good Wife 3DX",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Good-Wife.jpg?resize=165,225",
        "episode": "Chapter 03 End",
        "link": "https://www.mediafire.com/file/gspzjybbd3kyu2u/GOOD+WIFE+3.rar/file"
    },
    {
        "title": "Crispy Cheese Pin Up",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Cryspycheese-Pin-Up.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/nna6fs5zeq44j6v/crispycheese+-+PinUp.rar/file"
    },
    {
        "title": "Jilfap3D Nadiya",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Jilfap3D-Nadiya.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/3tc1l5nmwd71zzg/Jilfap3D+Nadiya+03.pdf/file"
    },
    {
        "title": "Madloki Ketahuan Mama",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Madloki-Ketahuan-Mama.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/y9cmncsxumhko8i/Madloki+Manga+Ketahuan+Mama.pdf/file"
    },
    {
        "title": "Narutod Si Ekor 9 Berulah",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Narutod-9-Rubah-Berulah.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/mcffcoxg8ede7b9/NARUTOD+-+Si+Ekor+9+Berulah.pdf/file"
    },
    {
        "title": "Mandi Bareng",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Mandi-Bareng.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/181hwum311x2nhf/Mandi+Bareng.pdf/file"
    },
    {
        "title": "The Incredible Family",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/incredibles.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://www.mediafire.com/file/1q740a7lp2kk4sh/Komik_The_Incredible_Family_Vol_5.pdf/file"
    },
    {
        "title": "Noukou Seishi Da Enkou Chan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Noukou-Seishi-Da-Enkou-Chan.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/4ho9o4gi1nnd9xa/Noukou+Seishi+Da+Enkou+Chan.pdf/file"
    },
    {
        "title": "Ceritaku Dengan Ibuku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Ceritaku-dengan-Ibuku.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/wb38vrye3n192xc/Ceritaku+dengan+Ibuku.pdf/file"
    },
    {
        "title": "Hijabolic Summer 2021",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/photo_2022-01-18_12-24-17.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/qh9qxfyrlivjdom/Hijabolic+Summer+2021.pdf/file"
    },
    {
        "title": "Teletubbies X",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Teletubbies-X.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/ebom27ziiztsqnh/Teletubbies+X.pdf/file"
    },
    {
        "title": "Selingkuh Dengan Teman Pacarku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Selingkuh-dengan-pacar-temanku.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/y5b9d0mrq74g30g/Selingkuh+dengan+Teman+Pacarku.pdf/file"
    },
    {
        "title": "Sepongbob X",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Spongebob.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/7oro05vd1dm6dw0/Milftoon+Spongebob+X.pdf/file"
    },
    {
        "title": "Hijabolic SMA Cantik",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/SMA-CAntik.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/2f1ppivtat35uey/Hijabolic+SMA+Cantik.pdf/file"
    },
    {
        "title": "Good Night",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/photo_2022-01-17_07-34-59.jpg?resize=165,225",
        "episode": "Chapter 34 End",
        "link": "https://www.mediafire.com/file/kb2quk5qm6ejmrw/Chapter_34_End.PDF/file"
    },
    {
        "title": "Madloki Cerita Citra 3D Spin Off Story",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Madloki-Cerita-Citra-3D-Spin-off-Story.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/rhxn9uw8588utgk/MADLOKI+-+CERITA+CITRA+3D+(Spin+Of+Story).pdf/file"
    },
    {
        "title": "Hijab 3DX Valentine Adik dan Kakak",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/valentine-adik-kakak.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/vbc1mkxt0qh17gd/3d_Valentine_3.pdf/file"
    },
    {
        "title": "Komik Hijab 3DX The Healer",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/the-healer.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/4rz9n8bugaxsf8e/Hijab_3DX_The_Healer_No_Text.pdf/file"
    },
    {
        "title": "Komik Hijab 3DX Sound Garden 3D",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/sound-garden.jpg?resize=165,225",
        "episode": "Chapter 06",
        "link": "https://www.mediafire.com/file/53gujbkcuryywv2/Sound+Garden+6.pdf/file"
    },
    {
        "title": "Maid With Love",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Maid-With-Love.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/z7zhc4ksqmjo9l6/Manga+Maid+With+Love+Issue+2.pdf/file"
    },
    {
        "title": "Dokter Anisa",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Dokter-Anisa.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/73w5z6i2h9g30xo/Dokter+Anisa.pdf/file"
    },
    {
        "title": "Love Me",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/love-me.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/nrh25vx0mykxz53/Love+Me+2.pdf/file"
    },
    {
        "title": "Busted and Entertained 3D",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Busted-And-Entertained.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/jlgl12s3opcbhu4/Busted+And+Entertained+2.pdf/file"
    },
    {
        "title": "Hijabiphilia Gangbang Session 3D",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Hijaphobilia-Gangbang-Session-3D.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/j6ip96avp6mxfj3/Hijabiphilia+Gangbang+Session+3D.pdf/file"
    },
    {
        "title": "Mercy",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Mercy.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/k24kw87pnh8jeng/Mercy.pdf/file"
    },
    {
        "title": "Little Sister",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Little-Sister.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/z2cp3ldquq2ciko/Little+Sister.pdf/file"
    },
    {
        "title": "Fountain Girl",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Fontain-Girl.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/zg3s66e0kdb3rjd/Fontain+Girl.pdf/file"
    },
    {
        "title": "Evelyn",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Eveline.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/2i1kynwnxbo1xcb/Eveline.pdf/file"
    },
    {
        "title": "Ganyu Genshin Impact",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Ganyu-Genshin-Impact-Batch-01.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/j2scuk3rgrd1jzr/Ganyu+Genshin+Impact+-+Batch+01.zip/file"
    },
    {
        "title": "Mortal Kombat X Sonya vs Scorpion",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Mortal-Kombat-X-Sonya-vs-Scorpion.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/5ledswdiiyysi2l/Mortal+Kombat+X+Sonya+vs+Scorpion.pdf/file"
    },
    {
        "title": "Natural Desire",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Natural-Desire.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/lfi5hm8wqrnzscw/Natural+Desire.pdf/file"
    },
    {
        "title": "Amagami Hareem Root",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Amagami.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/7m3s7ir607iqq2t/AMAGAMI__HAREM_ROOT_(Amagami).pdf/file"
    },
    {
        "title": "Ai No Toukakoukan Sword Art Online",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Ai_no_Toukakoukan_SAO.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/0a0f265fgdszury/Ai_no_Toukakoukan_(SAO).pdf/file"
    },
    {
        "title": "Afureru Ai Sword Art Online",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Afurerui-Ai-SAO.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/gcmgnl66otscf4w/Afureru_Ai_(Sword_Art_Online).pdf/file"
    },
    {
        "title": "Ratu Vape",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Ratu-Vape.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/oo2o3fm9p6kltyy/Ratu+Vape.pdf/file"
    },
    {
        "title": "Hijabizah Olah Raga",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Hijabizah-Olahraga.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/d6knln4bf378yit/Hijabizah+Olahraga.pdf/file"
    },
    {
        "title": "Diva",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/diva.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/s6yaeudldiey14e/Diva.pdf/file"
    },
    {
        "title": "Dildo",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Dildo.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/vrak5ojkbgxq2t2/Dildo.pdf/file"
    },
    {
        "title": "Komik Manhwa Boarding Diary Uncensored",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Boarding-diary-uncens.jpg?resize=165,225",
        "episode": "Chapter 20",
        "link": "https://www.mediafire.com/file/v8apkcpmklwf96g/Boarding+Diary+20+Uncens.pdf/file"
    },
    {
        "title": "Ibu Temanku Cantik",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Teman-Ibuku-Cantik.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/glg4wgi1wi339gb/Teman+Ibuku+Cantik.pdf/file"
    },
    {
        "title": "Hadiah Natal",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Hadiah-Natal.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/e9cyx3sfqfea0il/MAnga+HAdiah+NAtal.pdf/file"
    },
    {
        "title": "Fatal Woman",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Fatal-Woman.jpg?resize=165,225",
        "episode": "Chapter 42 End",
        "link": "https://www.mediafire.com/file/matulmnefq0qcl8/42_5BEND5D.pdf/file"
    },
    {
        "title": "Honoka",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2022/01/Honoka.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/xm5laim7gxj8z5a/Honoka.pdf/file"
    },
    {
        "title": "Cumdump Development",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2022/01/Cumdump-Development.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/6gz0wejzmgi2vpv/Cumdump+Development+2.pdf/file"
    },
    {
        "title": "Cow Girl",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2022/01/Cow-Girl.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/xeav18vxfex18hi/CoW+Girl.pdf/file"
    },
    {
        "title": "Bebih Innerview",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Innerview.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/d8pb5is4xll54ee/Bebih+Innerview+2.pdf/file"
    },
    {
        "title": "Madloki Guru Ngaji",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/guru-ngaji.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/mctfs1yy5a38ujr/Guru+Ngaji+Chapter+2.pdf/file"
    },
    {
        "title": "NTR",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2022/01/Manga-NTR.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/spubu4tu3svhlwe/NTR.pdf/file"
    },
    {
        "title": "Asuna SAO Batch",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Asuna-SAO.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/nnyowebaev9u0q3/MADLOKI+-+Asuna+SAO+-+Batch+01.zip/file"
    },
    {
        "title": "Hypno",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Hypno.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/6lpibo36qxqmbt7/Hypno.pdf/file"
    },
    {
        "title": "Teman Masa Kecil",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Teman-MAsa-KEcil.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/l6gbeongh8xobtq/Teman+Masa+KEcil.pdf/file"
    },
    {
        "title": "Mama Tio",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Mama-Tio.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/euhe9zy48w7go0g/Mama+Tio.pdf/file"
    },
    {
        "title": "Captive",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/CAptive.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/g4lkd2kf4widyay/Captive.pdf/file"
    },
    {
        "title": "Bully Girl",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Bully.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/2q0bwn09kpz6454/By_Chance.Ch23_-_xomix.xyz.pdf/file"
    },
    {
        "title": "Beach",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Beach.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/vgt7v9eggeg7ltk/Beach.pdf/file"
    },
    {
        "title": "Angelic Milf",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Angelic-Milf.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/2s6r3ml3btqi7x5/Angelic+Milf.pdf/file"
    },
    {
        "title": "Akademi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Akademi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/f4obehdlgj890xd/Akademi.pdf/file"
    },
    {
        "title": "Ahri dan Diva",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Ahri-dan-Diva.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/ku4uosr7nic1gop/Ahri+dan+Diva.pdf/file"
    },
    {
        "title": "Ahri",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Ahri.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/9jhi3z5lfidhyar/Ahri.pdf/file"
    },
    {
        "title": "Riven",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Riven.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/7msi252ticse95q/Manga+Riven.pdf/file"
    },
    {
        "title": "Stuck",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Stuck.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/n1s0tc5n7l1hbhd/Manga+Stuck.pdf/file"
    },
    {
        "title": "Manga Yoga",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/yoga.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/y6dvwrhujoxc1j3/Manga+Yoga.pdf/file"
    },
    {
        "title": "Blend",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/manga-blend.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/erzu45tdfoej00s/Manga+Blend.pdf/file"
    },
    {
        "title": "Hijabizah Kerja Lembur",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Hijabizah-Kerja-Lembur.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/my4qzsgam217dcp/Hijabizah+Kerja+Lembur.pdf/file"
    },
    {
        "title": "NTR Kanojo Kareshi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/MADLOKI-NTR-Kanojo-Kareshi-Vol-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/tvy95kp5ycc9oqn/Madloki+Manga+NTR+Kanojo+Kareshi+Vol+1.pdf/file"
    },
    {
        "title": "The Fall Of Irelia",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/The-Fall-of-Irelia.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/xfu5srjwapyo4p6/Manga+The+Fall+Of+Irelia.pdf/file"
    },
    {
        "title": "Threesome",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Threesome-1.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/nmhk8t6t0f97duu/Manga+Threesome+2.pdf/file"
    },
    {
        "title": "Snack Time",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Snack-Time.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/zlywxkx5huewveb/Manga+Snack+time.pdf/file"
    },
    {
        "title": "Madloki Cerita citra Artbook",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/ceruta-citra-artbook.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/hlvc99ec4rqtzrk/Madloki+Cerita+Citra+Artbook+Vol+2.pdf/file"
    },
    {
        "title": "Pelayan Toko",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Pelayan-Toko-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/usys5hh4w70mujv/MANGA+-+Pelayan+Toko+Buku+Chp+1.pdf/file"
    },
    {
        "title": "Pemandian Air Panas",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Madloki-Pemandian-Air-Panas.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/dgb76yrwpmmvlev/Madloki+Pemandian+Air+Panas.pdf/file"
    },
    {
        "title": "Tie Me",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Tie-Me.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/vsa6rqlx42519yn/Okkycreed_Tie_Me.pdf/file"
    },
    {
        "title": "Girl Should Make A Move First",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Girl-Should-make-a-move-first.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/hb2pbshu0wipv08/Okkycreed_Cewe_Bergerak_Duluan.pdf/file"
    },
    {
        "title": "Sisca and Kipli First Date",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/first-date.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/1tkqbpi8lle2epi/Okkycreed_Sisca_dan_Kipli_Kencan_Pertama.pdf/file"
    },
    {
        "title": "Unboxing Pacar",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Unboxing-Pacar.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/par72mz1181uow1/Okkycreed_Unvoxung_Pacar.pdf/file"
    },
    {
        "title": "Okkycreed Bertiga",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/bertiga-1.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/exkudavrl6se4a7/Okkycreed_Bertiga_Part_2.pdf/file"
    },
    {
        "title": "Okkycreed Blow Me Up",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/blow-me-up.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/0xuyscnioq3wtdd/Okkycreed_Blow_Me_Up.pdf/file"
    },
    {
        "title": "Liburan dengan Sepupu yang Montok",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/liburan-dengan-sepupu-yang-montok.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/7ky6f2y67f725z7/Manga+Liburan+dengan+sepupu+montok.pdf/file"
    },
    {
        "title": "Triple Chocolate Fantasy",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/triple-chocolate.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.solidfiles.com/v/GWzM4LBrzemnA"
    },
    {
        "title": "Komik Manhua Stepmother Friend Uncensored",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Manhua-Stepmother-Friend-Uncensored.jpg?resize=165,225",
        "episode": "Chapter 06",
        "link": "https://www.mediafire.com/file/leo0lp4l8o79u1z/Stepmother_Friend_Uncensored_Ch_5.pdf/file"
    },
    {
        "title": "Work From Hotel",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/okkycreed-wfh.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/1i4k5sgbnyb06a7/okkycreed+wfh.pdf/file"
    },
    {
        "title": "Sai and Ino Quality Time",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Sai-dan-Ino-Quality-Time.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/0qsjo4xd2lf0q43/okkycreed+sai+dan+ino.pdf/file"
    },
    {
        "title": "Okkycreed Bu Boss",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Ibu-Boss.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/aei92ypf1gykib8/okkycreed+bu+boss.pdf/file"
    },
    {
        "title": "Jameela Sama Pacar",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/jameela-sama-pacar.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/qv3ljoq0c120rez/Jameela+Sama+Pacar.pdf/file"
    },
    {
        "title": "Jameela Ngerjain Tugas",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/jameela-ngerjain-tugas.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/sj0dbnw8mvqnfmy/Jameela+Ngerjain+Tugas.pdf/file"
    },
    {
        "title": "Okkycreed Guru BK ku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Guru-BK-ku.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/63m9xaufnd0p2ok/Okkycreed+Guru+Bk+ku.pdf/file"
    },
    {
        "title": "Okkycreed Bathup Session",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Bathup-session.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/0afjhivatvebv1r/Okkycreed+Bathup+Session.pdf/file"
    },
    {
        "title": "Madloki Manga Long Vacation",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/madloki-ling-vacation.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/u43kc8ckl1yc53q/Manga+Madloki+Long+Vacation.pdf/file"
    },
    {
        "title": "Okkycreed FFM Sisca Kipli Fiona",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/OkkyCreed-Ffm-siska-kipli-fiona.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/8d7ymvj0k8auj75/Okkycreed+FFM+Sisca+Kipli+Fiona.pdf/file"
    },
    {
        "title": "Okkycreed Buka Puasa",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/buka-puasa.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/wudvwgcufe1q1lg/Okkycreed+Buka+Puasa.pdf/file"
    },
    {
        "title": "Okkycreed Attact On Titan X",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/AoT-X.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/10b6eucwj011qpe/Okkycreed_Attact_On_Titan.pdf/file"
    },
    {
        "title": "Okkycreed Toilet Sekolah",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Toilet-Sekolah.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/f6jezuzjud4a59l/Okkycreed+Toilet+Sekolah.pdf/file"
    },
    {
        "title": "Okkycreed Step Sister",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Step-Sister.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/86l743jc4grjs77/Okkycreed+Step+Sister.pdf/file"
    },
    {
        "title": "Okkycreed Pulang Kerja",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Pulang-Kerja.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/k0cdics49kqvmxb/Okkycreed+Pulang+Kerja.pdf/file"
    },
    {
        "title": "Okkycreed Bu Selly",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Bu-Selly.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/9mjbc6p3xig12oa/Okkycreed+Bu+Selly.pdf/file"
    },
    {
        "title": "Shingeki no Kyokon Attact On Titan X",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Shingeki-no-Kyokon-Attact-On-Titan-X.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/4a6wtvm7kf3zf2p/Shingeki_no_Kyokon_Attact_On_Titan_X.pdf/file"
    },
    {
        "title": "Naruto Taikan Kyonyou Shugi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/NarutoTaikan-Kyonyou-Shugi.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/b08h2byync0chtu/NarutoTaikan_Kyonyou_Shugi.pdf/file"
    },
    {
        "title": "Naruto Hinata Ganbaru",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Naruto-Hinata-Ganbaru.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/giixrngr15ul5iv/Naruto_Hinata_Ganbaru_.pdf/file"
    },
    {
        "title": "Mahouka Koukou no Rettousei",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-8.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/tasfxis8dxns9g1/Mahouka_Koukou_no_Rettousei.pdf/file"
    },
    {
        "title": "Hijabizah Perjalanan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/hijabizah-perjalanan.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/monipivd3v93a3s/Hijabizah+Perjalanan.pdf/file"
    },
    {
        "title": "Okkycreed Teman Tapi Mesra",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/ttm.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/5vwr0dlzkmh3mhb/Okkycreed+Teman+Tapi+Mesra.pdf/file"
    },
    {
        "title": "Okkycreed Fiona Angelina",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/fiona.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Okkycreed Fransisca Angelina",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/sisca.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Okkycreed Foto Modus",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/Foto-Modus-thumb.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/oeb29wmwn3npj1e/Okkycreed+Foto+Modus.pdf/file"
    },
    {
        "title": "Okkycreed Tanteku",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Tanteku.jpg?resize=165,225",
        "episode": "Chapter Baca",
        "link": "https://www.mediafire.com/file/1tp6r8rh5uzccxx/Okkycreed+Tanteku.pdf/file"
    },
    {
        "title": "One Piece Nami Batch",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Nami-Batch-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/w2l9rxzbx6s5e2c/Nami+One+Piece+-+Batch+01.zip/file"
    },
    {
        "title": "Roro Jonggrang",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/01-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/ytwqbpen4kwanx0/Roro+Jonggrang.pdf/file"
    },
    {
        "title": "Legenda Timun Mas",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Legenda-timun-mas.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/tb6lj6i8ri0qygs/Legenda+Timun+Mas.pdf/file"
    },
    {
        "title": "Kano Mama ga Midarasugiru",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/Kano-Mama-ga-Midarasugiru_.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/jdlv2vr1o6dhcv2/Kano_Mama_ga_Midarasugiru_.pdf/file"
    },
    {
        "title": "Okkycreed Amung Us",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Okkycreed-Amung-Us.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "MILF Inspector",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0004.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/y6fql6j2x739mvl/MLF_Inspector.pdf/file"
    },
    {
        "title": "Kakkou No Su",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-7.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/oho9k2js710npcf/Kakkou_no_Su.pdf/file"
    },
    {
        "title": "Imouto Wa Hikikomori",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-6.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/mnxxg2kr0u01so5/Imouto_wa_Hikikomori.pdf/file"
    },
    {
        "title": "Madloki Murid Terbaik",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/madloki-murid-terbaik.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/4nudj5odc8fiozp/Madloki+Murid+Terbaik.pdf/file"
    },
    {
        "title": "Sex Friend",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/sex-friend.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/0ohy8uxu71g9ito/Sex_friend.pdf/file"
    },
    {
        "title": "Penghilang Rasa Hasrat Mereka",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0002.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/mgegdle3y6v5irx/PENGHILANG_RASA_HASRAT_MEREKA.pdf/file"
    },
    {
        "title": "Doraemon Doraentod Shizuka",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Doraemon-doraentod.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/gr2sei1gg3gzszf/Doraemon+Doraentod.pdf/file"
    },
    {
        "title": "Doraemon Stand My D",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/Doraemon-Stand-my-D.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/t0lqrwbz621igtu/Doraemon+Stand+My+D.pdf/file"
    },
    {
        "title": "Kurumi",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/0022.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/s5eg4ol6pzk1jq0/kurumi.pdf/file"
    },
    {
        "title": "Prime Time",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-5.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/4c371i8bnvq1e4c/Prime+Time.pdf/file"
    },
    {
        "title": "Final Fantasy VII Our X Promises",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-4.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/ka12u9x9nti3gcg/FF+VII+OUR++X++PROMISE.pdf/file"
    },
    {
        "title": "Doki Doki o X Saiban KonoSuba",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-3.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/06acicivurnhpi3/Doki+Doki+o+X+Saiban+KonoSuba.pdf/file"
    },
    {
        "title": "Ankai No Umi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-2.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/s95sngmirun147y/Ankai+No+Umi.pdf/file"
    },
    {
        "title": "Naruto Affair Hidden in Leaves",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001-1.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/lfijnk5i4dsn1qu/Affair+Hidden+In+Leaves.pdf/file"
    },
    {
        "title": "Jameela Ga Pake Jilbab",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/jameela-ga-pake-jilbab.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/um91zqievf85gt1/Jameela+Ga+Pake+Jilbab.pdf/file"
    },
    {
        "title": "Special Ops Jenny 3D",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/Special-Ops-Jenny.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/25q68upkxb3cqe6/Special_Ops_Jenny_3D.pdf/file"
    },
    {
        "title": "Madloki PopJazx BQN",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/02.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/zasjtemy3ui4tdc/Madloki+PopJazx+BQN.pdf/file"
    },
    {
        "title": "Shoujo To Uraroji",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/0011.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/y6ihfbxg8m62lph/Manga+Shoujo+To+Uraroji+3.pdf/file"
    },
    {
        "title": "Avenger Hulk dan Black Widow",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0003.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/nsi1l6wyg06tod2/Komik_3D_Avenger_Hulk_and_Black_Widow.pdf/file"
    },
    {
        "title": "Menebus Kenakalan Adik",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/0001.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/3urp7noabqh0oyy/Manga+Menebus+Kenakalan+Adik.pdf/file"
    },
    {
        "title": "Komik Madloki Sister In Trouble",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Sisiter-In-Trouble.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/uip7ouaq6vabuzy/Madloki_Sister_In_Trouble_Chapter_01.pdf/file"
    },
    {
        "title": "Okkycreed Guru BK",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/02-3.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/0k3guqy1ut2pti1/Okkycreed_Guru_BK.pdf/file"
    },
    {
        "title": "Madloki New IndahMaret",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-indahmaret.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/48p8zlp756k79hs/Madloki_-_Indahmaret_New_Chp_1.pdf/file"
    },
    {
        "title": "Mama Para Chijo Zukan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/mama-para-zukan.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/wmuxpypgo5hdgnm/Mama_Para_Chijo_Zukan_eps_3.pdf/file"
    },
    {
        "title": "Morning Sexercise 3D",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/12/morning-sexercise.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/t463afvculi0ytr/Komik_3D_Morning_Exercise.pdf/file"
    },
    {
        "title": "Madloki Aku dan Temen Kakakku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/madloki-aku-dan-temen-kakakku.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/yfjjioq36r2qiw5/Madloki+Manga+Aku+teman+kakakku.pdf/file"
    },
    {
        "title": "Okkycreed Truth Or Dare",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/truth-or-dare.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/6uyexvkfurx370t/Okkycreed+Truth+Or+Dare.pdf/file"
    },
    {
        "title": "Bebih Vhamper",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/12/03.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/euuw1grsxeawm1l/Bebih+Vhamper.pdf/file"
    },
    {
        "title": "Sinar Jaya Gurih Service Ulang Tahun",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/sjg-ulang-tahun.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/ctrj1794f0dijug/SJG_-_Service_Ulang_Tahun.pdf/file"
    },
    {
        "title": "Gwen Going On A Date",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/gwen.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/qfx1o00i2e9xafs/Komik_Milftoon_Gwen_Going_On_A_Date.pdf/file"
    },
    {
        "title": "Kare To Watashi No Kowareta",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/manga-madloki-kowareta.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/sjcvxjpunqir9dm/Madloki_-_kare_to_watashi_no_Kowareta_1.pdf/file"
    },
    {
        "title": "Chubby n Sensual Neighbour Mrs Wulan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/chubby-sensual-neighbour-mrs-wulan.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/r95w0gom2vhp2e4/Komik_Chubby_n_Sensual_Neighbour_Mrs._Wulan.pdf/file"
    },
    {
        "title": "Komik Madloki Widia Before Story",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/widia-before-story.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://www.mediafire.com/file/1la4lkl90gmjn78/Komik_Madloki_Widia_Before_Story_Chapter_4.pdf/file"
    },
    {
        "title": "Es No Madobe",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/12/es-no-madobe.jpg?resize=165,225",
        "episode": "Chapter 04 End",
        "link": "https://www.mediafire.com/file/2g68wksuenh33t4/Es_no_Madobe_28Original29_Cpt.4_END.pdf/file"
    },
    {
        "title": "Fitting Room 3D",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/12/fitting-room.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/wk7bpa760pbwrmv/Komik_3D_Fitting_Room.pdf/file"
    },
    {
        "title": "Komik Hijabizah Cermin",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/02-4.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/tdumxdy1w0r15k8/Komik_Hijabizah_Cermin.pdf/file"
    },
    {
        "title": "Dudu Primal 3D",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/primal.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/lvj3wri11jn38yu/Komik_3D_Dudu_Primal.pdf/file"
    },
    {
        "title": "Street Fighter Chun li X",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/chunli-X.jpg?resize=165,225",
        "episode": "Chapter Vacation",
        "link": "https://www.mediafire.com/file/whrirx4pztcw4wq/Komik_3D_Chunli_Vacation.pdf/file"
    },
    {
        "title": "Detective Conan X",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/conan-det.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/xbb865rf5ks8rai/Manga_Detective_Conan_X.pdf/file"
    },
    {
        "title": "Madloki Jam Pelajaran",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/01-3.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/u5wiotwkw3oyayf/Madloki_Jam_Pelajaran.pdf/file"
    },
    {
        "title": "Wonder Woman 3D",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/wonder-woman.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/nql1zzqkfdlguwv/3D_Wonder_Woman.pdf/file"
    },
    {
        "title": "Madloki Makochan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/makochan-1.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/d2yv138065xwcwf/Madloki-makochan_v2.pdf/file"
    },
    {
        "title": "Mukarata Fan Art",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/mukarata.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/79jtmaurxsl5lo5/Mukarata_Fan_Art.pdf/file"
    },
    {
        "title": "Madloki Uzaki Chan Wa H Sitai",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Madloki-Manga-Uzaki-Chan-Wa-H-Sitai.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/iq94kp59ltqz4rm/Komik_Madloki_Manga_Uzaki_Chan_Wa_H_Sitai_Vol_2.pdf/file"
    },
    {
        "title": "Bebih Vape Vape Awh",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-9.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/c453ei8p7kre00w/Bebih_vape_vape_awh.pdf/file"
    },
    {
        "title": "Bebih Tshugedhee",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-8.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/kevxumisesgqzj3/Bebih_tshugedhee.pdf/file"
    },
    {
        "title": "Bebih De Betmen",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/img30.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/adgj0ap7zc0hpmu/Bebih_de_betmen.pdf/file"
    },
    {
        "title": "Bebih Balada Neji",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/01-2.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/giozjyidyyhbjlq/Bebih_Balada_Neji.pdf/file"
    },
    {
        "title": "Bebih Balada Digital Artis",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-7.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/821gkh8qi6d44yq/Bebih_Balada_Digital_Artis_3.pdf/file"
    },
    {
        "title": "An Adult Experience",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/adult-experience2.jpg?resize=165,225",
        "episode": "Chapter 30 End",
        "link": "https://www.mediafire.com/file/zv9cmjpwvggkw2p/An_AdultE28099s_Experiences_-_Ch.30_-_xomix.xyz.pdf/file"
    },
    {
        "title": "Kharisma Jati Kacang Tanah",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-6.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/m9df9gwee4sd39d/Kharisma_Jati_Kacang_Tanah.pdf/file"
    },
    {
        "title": "Imaizumin",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Imaizumin-2.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://www.mediafire.com/file/hmre31iqs9tjgy6/Manga_Imaizumin_Chapter_4.pdf/file"
    },
    {
        "title": "Will You Do As I Say",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/will-you-do-as-i-say.jpg?resize=165,225",
        "episode": "Chapter 20 End",
        "link": "https://www.mediafire.com/file/jq8vss2dguxkmfe/Chapter_20_5BEND5D.pdf/file"
    },
    {
        "title": "Twin Milf",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/twin-milf.jpg?resize=165,225",
        "episode": "Chapter 09",
        "link": "https://www.mediafire.com/file/dt8b3jl4ffbo66r/Manga_Twin_Mlf_9.pdf/file"
    },
    {
        "title": "Komik Keluarga Bahagia",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Keluarga-Bahagia.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/r9rwbkilzaf2245/Keluarga_bahagia.pdf/file"
    },
    {
        "title": "Sebuah Cerita Adik Kakak",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/sebuah-cerita-adik-kakak.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/yf5kwgmfwrlbvcm/Sebuah_Cerita_Adik_Kakak.pdf/file"
    },
    {
        "title": "Bawang Merah dan Bawang Putih 3D",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/bawang-putih-bawang-merah.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/lyvgsmnmt8vojj4/Jilfap3d_Bawang_Merah.pdf/file"
    },
    {
        "title": "Adik Sunat 3D",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Adik-Sunat.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/en77p7omwrjthrq/3D_Adik_Sunat.pdf/file"
    },
    {
        "title": "Ibu Kostku",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/ibu-kostku.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/btz26mabmtaphlz/Ibu_Kostku.pdf/file"
    },
    {
        "title": "Susu Mama",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Susu-Mama.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/3xm74lwlwn4i7ge/Susu_Mama.pdf/file"
    },
    {
        "title": "Lolly Second Sweat",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Lolly-second-sweat.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/1nolk58ak2x8gdj/Lolly_Second_Sweat.pdf/file"
    },
    {
        "title": "Petualangan Arif dan Bu Wulan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/petualangan-arif-dan-bu-wulan.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/l27itscyw6iveqm/Petualangan_Arif_dan_Bu_Wulan.pdf/file"
    },
    {
        "title": "Mawar Hitam",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Vidi-Veci-Veni-Mawar-Hitam.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/4kn804kykik6xni/Caessar_Vidi_Vici_Veni_Black_Rose.pdf/file"
    },
    {
        "title": "Anis dan Siti",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Anis-dan-siti.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/drx3y7vxtpwuxnr/ANIS_SITI.pdf/file"
    },
    {
        "title": "Indekost Lusi Gadis Model",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Indekost-Lucy.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/ftaay0li1s863iu/Indekost_Lucy_Gadis_Model.pdf/file"
    },
    {
        "title": "Punyaku Lebih Besar",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Punyaku-lebih-besar.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Polwan Nurul",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Polwan-Nurul.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/h7c3ioumy9cqy8h/Komik_-_Polwan_Nurul.pdf/file"
    },
    {
        "title": "Komik Masa SMA",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/masa-sma.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/mtc2k7s9bc5rlvw/Komik_Masa_SMA.pdf/file"
    },
    {
        "title": "Onta Arab Hijab Art",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/onta-arab.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/axcltby1rzunt7r/Onta_Arap_Art.pdf/file"
    },
    {
        "title": "Budhe Nagih Uang Kost",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/bude-nagih-uang-kos.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/0wkc2wdig2os6bg/Komik_Bude_Nagih_Uang_Kost.pdf/file"
    },
    {
        "title": "Komik Boboiboy X",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/komik-boboiboy.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/dterw8yn9cctgmi/Boboiboy_-_X_2.pdf/file"
    },
    {
        "title": "Komik Malaysia Bolapistar",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bolapistar.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/589f35npk8nrpkb/Bolapistar_3.pdf/file"
    },
    {
        "title": "Bebih Whanpysh",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/02-2.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/kxkk73vob0lnl2b/Bebih_Whanpysh.pdf/file"
    },
    {
        "title": "Bebih Warkop Manteb Manteb",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/03-1.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/qoemk99kvlgqnrt/Bebih_Warkop_Manteb_Manteb.pdf/fil"
    },
    {
        "title": "Bebih Superbebh",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/01-1.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/jk84z0znbta2y77/bebih_superbebh.pdf/file"
    },
    {
        "title": "Bebih Keluar Di Dalam",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/01.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/ppx3tu2ldc1l9ca/Bebih_Keluar_di_Dalam.pdf/file"
    },
    {
        "title": "Komik Hijabitch Kakakku Tidur",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/03.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/wmmsazzye5v9dxa/Hijabitch+Kakakku+Tidur.pdf/file"
    },
    {
        "title": "Hijabitch Susu Kakakku",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/susu-kakakku.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/53flufrccuq8e2t/Hijabitch+Susu+Kakakku.pdf/file"
    },
    {
        "title": "Komik Bebih WFH",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bebih-wfh.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/aokp8dr6frfvk5q/Komik_Bebih_wfh.pdf/file"
    },
    {
        "title": "Bebih Longest Titit Ever",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Longest-titit.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/wqd6vlfqv310o75/Bebih_LOnges_Titit_Ever.pdf/file"
    },
    {
        "title": "Bebih Cinta Buta",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/cinta-buta.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/17m0ayzo2i9ew0t/Bebih_Cinta_Buta.pdf/file"
    },
    {
        "title": "Bebih Kampus Biru",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/kampus-biru.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/iv1trjqjkzco8jf/Bebih_kampus_biru_part_1.pdf/file"
    },
    {
        "title": "Bebih Saskia E nya Lima",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Saskia-E-nya-Lima.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/5gwvc0m4aoka9vg/Bebih_Saskia_E_ny_Lima.pdf/file"
    },
    {
        "title": "Bebih The Guna Guna",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Guna-guna.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/9bk8gmdt19xt4r5/Bebih_The_Guna_Guna.pdf/file"
    },
    {
        "title": "Komik Bebih Kuli Panggul",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Kuli-Panggul.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/lu751dmvarlrvee/Bebih_Kuli_Panggul.pdf/file"
    },
    {
        "title": "Bebih Pakan Manuk",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Pakan-MAnuk.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/hib9qs37j36t6tg/Bebih_Pakan_Manuk.pdf/file"
    },
    {
        "title": "Bebih Medusa Mencari Cinta",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Medusa-mencari-cinta.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/r85tj9pas6cjbz1/Bebih_Medusa_Mencari_Cinta.pdf/file"
    },
    {
        "title": "Bebih Warkop Pangku Remes",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Warkop-Pangku-Remes.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/kavdcm38woc9p7v/Bebih_Warkop_Pangku_Remes.pdf/file"
    },
    {
        "title": "Bebih Popcorn",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/popcorn.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/g6d9mbw22exj7k5/Bebih_Popcorn.pdf/file"
    },
    {
        "title": "Bebih Olahraga Pagi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/olahraga-pagi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/0t2rb6rc0uopkbi/Bebih_Olah_Raga_Pagi.pdf/file"
    },
    {
        "title": "Komik Bebih Bintang Limanya Neng",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Bintang-limanya.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/kd97dc2chkxg30y/Bebih_Bintang_Limanya_Neng.pdf/file"
    },
    {
        "title": "Komik Bebih Jeni Yes Papah",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/img28.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/vp6r313ksefl1tt/Bebih_Jeni_Yes_Papah.pdf/file"
    },
    {
        "title": "Komik Bebih Pisau Tumpul",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Pisau-Tumpul.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/qordwbtzvslugw9/Bebih_Pisau_Tumpul.pdf/file"
    },
    {
        "title": "Komik Bebih Pinnokkhio",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Pinnokhiyoh.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/jhrv11uv3x2i4wo/Bebih_Pinokkhio.pdf/file"
    },
    {
        "title": "Komik Bebih Pacar Gamer",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/pacar-gamer.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/q7jpt00vceuto2d/Bebih_Pacar_Gamer.pdf/file"
    },
    {
        "title": "Komik Bebih Pacarku Babang Ojol",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Pacarku-Babang-Ojol.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/j1bndzfh064vlg0/Bebih_Pacarku_Babang_Ojol.pdf/file"
    },
    {
        "title": "Komik Bebih Om Manis",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/om-manis.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/hgyxbkbx0ucg45d/Bebih_Om_Manis.pdf/file"
    },
    {
        "title": "Komik Bebih Nirmili dan Kiko",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Nirmili-dan-Kiko.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/vezhel04lnc1b9t/Bebih_Nirmili_dan_Kiko.pdf/file"
    },
    {
        "title": "Komik Bebih Night Error",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Night-Error.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/pafq8mcs6k4clcg/Bebih_Night_Error.pdf/file"
    },
    {
        "title": "Komik Bebih Masukin Mas",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/masukin-mas.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/tric0geftp13tej/Bebih_Masukin_Mas.pdf/file"
    },
    {
        "title": "Komik Bebih Lupa Tugas",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Lupa-Tugas.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/sqc080ee98qo5tr/Bebih_Lupa_Tugas.pdf/file"
    },
    {
        "title": "Komik Bebih Lupa Nama Inget Rasa",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/lupa-nama-ingat-rasa.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/zoxu0k6p398g4yb/Bebih_Lupa_Nama_Inget_Rasa.pdf/file"
    },
    {
        "title": "Komik Bebih Kode Rahasia Istri",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/kode-rahasia-istri.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/morqtfah64sy4c9/Bebih_Kode_Rahasia_Istri.pdf/file"
    },
    {
        "title": "Komik Bebih Kisah Bercinta",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/kisah-bercinta.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/1b2xbs15f7gfs9z/Bebih_Kisah_Bercinta.pdf/file"
    },
    {
        "title": "Komik Bebih Kepribadian Istri",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/kepribadian-istri.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/bp86afcp2z4lz71/Bebih_Kepribadian_Istri.pdf/file"
    },
    {
        "title": "Komik Bebih Derita Kawat Gigi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Derita-kawat-gigi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/ckoti1guuz4o69z/Bebih_Derita_Kawat_Gigi.pdf/file"
    },
    {
        "title": "Komik Bebih Es Krim Pelangi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/es-krim-pelangi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/ui63v0at1witksr/bebih_-_eskrimpelangi.pdf/file"
    },
    {
        "title": "Komik Bebih Bocil Naik Angkot",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/bocil-naik-angkot.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/lpvpb9s5toqjzn2/Bebih_-_bocilnaikangkoth.pdf/file"
    },
    {
        "title": "Komik Bebih Bukakin Dong",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/img20.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/br7vduqpbe6b5qb/Bebih_-_bukakindong.pdf/file"
    },
    {
        "title": "Komik Bebih Fake Asisten Dosen",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Fake-Asdos.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/dgdfmkz72t33nv6/Bebih_-_fakeasdos.pdf/file"
    },
    {
        "title": "Komik Bebih Hotel Del Onte",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/hotel-del-onte.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Bebih Susu Murnih",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/susu-murnih.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/oqc9lp7tezedyeb/Bebih_Susu_Murnih.pdf/file"
    },
    {
        "title": "MILF Airline",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/photo_2021-11-21_12-47-38.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/vvifq97h4716pcm/Komik+Milftoon+MILF+Airlines+2.pdf/file"
    },
    {
        "title": "Madloki Ayah dan Anak",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-ayah-dan-anak.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/eq38kzpwhjc2fmo/Komik_Manga_MAdloki_Ayah_dan_Anak.pdf/file"
    },
    {
        "title": "Madloki Fake Love",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/fake-love.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/equaigbxwc3tad3/Madloki_Manga_Fake_Love.pdf/file"
    },
    {
        "title": "Madloki Tsuma Omoi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Tsuma-Omoi.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/9pzm7k78s15hobl/Komik_Manga_Madloki_Tsuma_Omoi_Vol_2.pdf/file"
    },
    {
        "title": "Madloki Seiseki UP O Jouken Ni Mainichi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Seiseki-UP-O-Jouken-Ni-Mainichi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/aype761h5uiwjlz/Komik_Manga_Madloki_Seiseki_UP_O_Jouken_Ni_Mainichi.pdf/file"
    },
    {
        "title": "Madloki Ribbon No Ochita Hi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Ribbon-No-Ochita-Hi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/dn1clb1we2c6860/Komik_Manga_Madloki_Ribbon_No_Ochita_Hi.pdf/file"
    },
    {
        "title": "Madloki Tradisi Desa",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/tradisi-desa.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/58lh16qr66ilzl2/Komik_Madloki_Manga_Tradisi_Desa.pdf/file"
    },
    {
        "title": "Madloki Hukuman Adik Kelas",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/hukuman-adik-kelas.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/dr5gkh38yq1uz5x/Manga_Madloki_Hukuman_Adik_Kelas.pdf/file"
    },
    {
        "title": "Madloki Saimin Hitozuma",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/saimin-hitozuma.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/wfrnh47gy2l6k82/Madloki_-_Saimin_hitozuma.pdf/file"
    },
    {
        "title": "Madloki Suki Na Hito Nii Kawaii",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/suki-na.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/u62thcc7x0cdq7j/Madloki_Suki_Na_Hito_Nii_Kawaii.pdf/file"
    },
    {
        "title": "Madloki Kanojo No Mama",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/kanojo-no-mama.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/ygnbh995j06puwt/Madloki_Kanojo_No_Mama.pdf/file"
    },
    {
        "title": "Madloki Yama Girl o Aokan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/yama-girl.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/3rbbmvixm4fnqwp/Manga_Madloki_Yama_Girl_O_Aokan.pdf/file"
    },
    {
        "title": "Madloki Oku sama wa Aitsu no Niku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Oku-sama-wa-Aitsu-no-Niku.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/podxix9p9c52gni/Madloki_Manga_-_Oku_sama_wa_Aitsu_no_Niku.pdf/file"
    },
    {
        "title": "Madloki Papa To Mama Ga Inai",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/papa-to-mama-ga-inai.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/44s0q5gblohrcr4/Madloki_Papa_to_mama_Ga_inai.pdf/file"
    },
    {
        "title": "Madloki Ochiba Tori",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/ochiba-tori.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/atklukis4krbd6e/Madloki_-_Ochiba_Tori.pdf/file"
    },
    {
        "title": "Madloki Hitozuma Osananajimito",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Hitozuma-osananajimito.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/nsul4sakan7gl1d/Madloki_Hitozuma_Osananajimito_Volume_1.pdf/file"
    },
    {
        "title": "Komik Madloki Anzen Roshutsu",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Anzen-Roshutsu.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/8vcwe542vcso8uo/Madloki_-_Anzen_Roshutsu.pdf/file"
    },
    {
        "title": "Komik Madloki Predator",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-predator-1.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/3nh6q0xzb5d1wt5/Komik_MADLOKI_-_PREDATOR_Chapter_1.pdf/file"
    },
    {
        "title": "Komik Madloki Bunda Pertiwi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-bunda-pertiwi.jpg?resize=165,225",
        "episode": "Chapter 01-02",
        "link": "https://www.mediafire.com/file/iz1cnslyc6b5eb4/Madloki_Bunda_Pertiwi_Chapter_1-2.pdf/file"
    },
    {
        "title": "Komik Madloki Cabe Cabean",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Cabe-cabean.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/15skcpl0qckfa73/Madloki_Cabe_Cabean_Chapter_02.pdf/file"
    },
    {
        "title": "Madloki My Mom Can Satisfy Us",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/mom-can-satisfy-us.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/ybhfgd1w570dow4/Madloki_My_Mom_Can_Satisfy_Us.pdf/file"
    },
    {
        "title": "Komik Madloki Belajar Biologi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/belajar-biologi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/f2hfcxd4osq45r3/Madloki_Belajar_Biologi.pdf/file"
    },
    {
        "title": "Komik Madloki Ibuk dan Akik",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/ibu-dan-akik.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/z7nappliy8r8ccf/MAdloki_Ibuk_dan_Akik.pdf/file"
    },
    {
        "title": "Komik Madloki POV Your Sexy Gamer Girlfriend",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/pov-your-sexy-gamer.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/8wzxo5xpw01xzrp/Madloki_PV_Your_Sexy_Gamer_Girlfriend_Chapter_1.pdf/file"
    },
    {
        "title": "Komik Madloki Special Service",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/special-service.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/vjanq72g339g3o9/Madloki_Special_Service.pdf/file"
    },
    {
        "title": "Komik Madloki Unboxing Lolicimos",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/lolicimous.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/90bpsjtplhmd8b0/Madloki_Unboxing_Lolicimos.pdf/file"
    },
    {
        "title": "Komik Madloki LEWD Chronicles",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/lewd-collection.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/3243mjcoabahgie/Madloki_Lewd_Collection.pdf/file"
    },
    {
        "title": "Komik Madloki Ketua Osis",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Ketua-Osis.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/d4kxn3n2x6fd4cr/Madloki_Ketua_OSIS_Chapter_01.pdf/file"
    },
    {
        "title": "Komik Madloki Kartika Sari",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/kartika-sari.jpg?resize=165,225",
        "episode": "Chapter 02 End",
        "link": "https://www.mediafire.com/file/7p7qm11e7n6xhps/MAdloki_Kartika_Sari_End.pdf/file"
    },
    {
        "title": "Komik Madloki Guru Terindah",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/guru-terindah.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/e0wjp0732i6kbda/Madloki_Guru_Terindah_Chapter_01.pdf/file"
    },
    {
        "title": "Komik Madloki Gamer Jilboob",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/gamer-Jilboob.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/lvzaqby6us10ocq/Madloki_Gamer_Jilboob.pdf/file"
    },
    {
        "title": "Komik Okkycreed Bioskop",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bioskop-okkycreed.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/8v1z40d5ahrqqq2/Komik+Okkycreed+Bioskop.pdf/file"
    },
    {
        "title": "Komik Madloki LDR Couple Story",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/ldr-couple-story.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/hhlkeros6v77bff/Madloki-LDR_Couple_Story.pdf/file"
    },
    {
        "title": "Komik Madloki Guru Bastard",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/guru-Bastard.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Madloki Bu Yatmi dan Pak Teguh",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/yatmi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Madloki Tiktod Jilboob",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/tiktod-jolboob.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Madloki Strip X",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/strip-x-madloki.jpg?resize=165,225",
        "episode": "Chapter Mini Artbook",
        "link": "https://www.mediafire.com/file/6tmx13ksd5vfo5e/Madloki_mini_artbook-xomix.xyz.pdf/file"
    },
    {
        "title": "Komik Madloki New Teacher",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/new-teacher.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Madloki Miss Esa",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/miss-esa.jpg?resize=165,225",
        "episode": "Chapter Artbook",
        "link": "https://www.mediafire.com/file/mm9xr70908jsx3z/MADLOKI_-_MISS_ESA_Artbook.pdf/file"
    },
    {
        "title": "Komik Madloki Ukhty Nakal Webcam",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/ukhty-webcam.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/eayf1r1ex6g7iu3/Madloki_ukhty_webcam.pdf/file"
    },
    {
        "title": "Komik Madloki Upacara Sekolah",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/upacara.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Madloki Ningsih",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-ningsih.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/t8y45wgiq9kct3b/Madloki_-_ningsih_2.pdf/file"
    },
    {
        "title": "Komik Madloki My Hyper Girlfriend",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloky-hyper-girlfriend.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://www.mediafire.com/file/sf5rpf189xda1q1/Madloki_-_My_Hyper_Girlfriend_Chp_4.pdf/file"
    },
    {
        "title": "Komik Madloki Bangunin Sahur",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bangunin-sahur.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/hwjxhbfomvh96vm/Bangunin_Sahur.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Naruto",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-naruto.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/h9lhg9lwvqvb1sl/SJG_Naruto_Chapter_02.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Versi Manga",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/manga-version-1.jpg?resize=165,225",
        "episode": "Chapter Hero Akademia",
        "link": "https://www.mediafire.com/file/iel4vwq96qbcnnk/SJG_Bokuno_Hero_Akademia.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih One Piece",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-one-piece.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/ywihkdzkg91d6k0/SJG_One_Piece_Chapter_03.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Tukang Jamu",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-tukang-jamu.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/734tfz1i8tdmx0w/SJG_Tukang_Jamu.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Ibu dan Kakak Sedang Hamil",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-ibu-kakak-hamil.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/2sp1q155hecely5/SJG_Ibu_dan_Kakak_Sedang_Hamil.pdf/file"
    },
    {
        "title": "Komik Jambu Madu Jack dan Ana",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/jambu-madu-jack-dan-ana.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/6zbq9bqqoscyd00/JAMBU+MADU+-+JACK+&+ANA.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Paket X",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/paket-x.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/tb65o3v0qiklt4n/SJG_Paket.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Tersandung",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/tersandung.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/lulipqnaf7gegin/SJG_Tersandung.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Chicken Dinner",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/chicken-diner.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/almideoff8ca03o/SJG_Chicken_Dinner.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Nyuci di Sungai",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/mandi-disungai.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/1dua3wvkzlcm44j/SJG_Nyuci_Di_Sungai.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Mantan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-mantan.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/qar3vbr93gdnntk/SJG_Mantan.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Belajar Bersama",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/belajar-bersama.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/hu08mbwlwazmtnr/JSG_Belajar_Bersama.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Pembantuku Ella",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/pembantuku-ela.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Sinar Jaya Gurih Pulang Sekolah",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-pulang-sekolah.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/ea5ei5y8rfu2dd3/SJG_Pulang_Sekolah.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Kartu Kredit",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/kartu-kredit.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/5oryhln44i3quai/SJG_Kartu_Kredit.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Grape Grepe",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/grape-grepe.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/wfdl3xe2tvvprus/SJG_Grape_Grepe.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Ngintip Adik Mandi",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/ngintip-adik-mandi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/4x0e0vdw2frf956/SJG_Ngintip_Adik_Mandi.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih AC Rusak",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/ac-rusak.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/yykbjsfver5qlpb/SJG_AC_Rusak.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Tetes Mata",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/tetes-mata.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/7hk7dy7b67qlltv/SJG_Tetes_Mata.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Rival",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/rival.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/m5u3yl0aecpkuu0/SJG_-_Rival.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Bakso",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bakso.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/t2xymdbguvyo6k1/SJG_-_Bakso.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Interogasi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/introgasi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Sinar Jaya Gurih Coklat Valentine",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/coklat-valentine.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Sinar Jaya Gurih Masker",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-masker.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Sinar Jaya Gurih Pembantu Baru",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/masker.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Sinar Jaya Gurih Kamasutra",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/kamasutra.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Sinar Jaya Gurih Bayar SPP Marina",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/spp-marina.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/rb2gsmmib5oi9f4/SJG-_Bayar_SPP_Marina.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Upin Ipin Pulang",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/upin-ipin-pulang.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Sinar Jaya Gurih Sebuah Perjalanan",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/sebuah-perjalanan.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Sinar Jaya Gurih Javart Lovely Idol",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Javart-Lovely.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/izyw980h1nft3w0/SJG-JAVART_-_Lovely_Idol.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Nolongin Hantu Sodok Oh",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Hantu-Sodok-oh.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/1ds5dcb3xpfyzhn/Nolongin_Hantu_.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Mimpi Basah",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/mimpi-basah.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Sinar Jaya Gurih Kuda Kudaan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/kuda-kudaan.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/br0z5q7rq4czo8i/Kuda_Kudaan.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Antar Paket",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/antar-paket-sjg.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/tb65o3v0qiklt4n/SJG_Paket.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Panjat Pinang",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/panjat-pinang.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/i6buc60ebl0p4ao/Panjat_Pinang_YT_NASHREY.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Pocong",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/pocong.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/s8b1h8enfr8kwej/Pocong.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Noba Ulangan",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/noba-ulangan.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/8s3yknqj8fnpn9f/Noba_Ulangan_YT_NASHREY.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Mirror Selfie",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Mirror-Selfie.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/mua0j91ffblpj1q/Mirror_Selfie_YT_Nashrey_.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Menginap",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-menginap.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/xlxti4qzwvrx0es/Menginap_YT_Nashrey.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Jelangkung",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/jelangkung.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/horm1gca9sig97j/Jelangkung_YT_Nashrey.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Indomaret",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-indomaret.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/4ayyw7z4e0gg9u2/Indomaret_Versi_SJG.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Dora Diculik",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/dora-diculik.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/qlazs4dwj2vlmmv/Dora_Diculik.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Anak Angkat",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/anak-angkat.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/906mtp9xqanfbjo/Anak_Angkat.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Nidurin Adek",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/nidurin-adek.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/2madqhnq0c6j8lm/Nidurin_Ade.pdf/file"
    },
    {
        "title": "Komik OkkyCreed Temennya Pacar Gue",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/temennya-pacar-gue.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/xwsraj87nd8s3ul/Okicreed_Temennya_pacar_gue.pdf/file"
    },
    {
        "title": "Komik Okkycreed Sekretaris Baru",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/sekretaris-baru.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/cdfgpog4w5rbtsx/Okkycreed_Sekretaris_Baru.pdf/file"
    },
    {
        "title": "Komik Okkycreed Naruto Kakak Ipar",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/naruto-kakak-ipar.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/wszlsvshpoitna9/okkycreed_Kakak_Ipar_Naruto.pdf/file"
    },
    {
        "title": "Komik Okkycreed Kipli Main di Bath Up",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bath-up.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/6679r1ubztmjrp0/Box_Gurih_Kipli_Main_di_Bath_up.pdf/file"
    },
    {
        "title": "Komik Okkycreed Pura Pura Gay",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/pura-pura-gay.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/xjfmfxkzd0pju9p/OkkyCreed_Pura_Pura_Gay.pdf/file"
    },
    {
        "title": "Komik Okkycreed Basement",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/basement.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/81mxd37ngl8op78/OKYYCREED_-_BASEMENT.pdf/file"
    },
    {
        "title": "Komik OkyCreed Buka Puasa",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/img14.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/xtbph0obchlfxvn/Okkycreed_-_Buka_Puasa.pdf/file"
    },
    {
        "title": "Komik Okycreed Cuma Mimpi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/cuma-mimpi.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/mx73u3x50fanzfr/Kipli_Cuma_Mimpi.pdf/file"
    },
    {
        "title": "Komik OkkyCreed Bertiga",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/okkycreed-bertiga.jpg?resize=165,225",
        "episode": "Chapter Full Part",
        "link": "https://www.mediafire.com/file/xkvwmtgzxwpekel/Okkycreed_Bertiga_Full_Part.pdf/file"
    },
    {
        "title": "Komik OkkyCreed Ibu Boss",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/ibu-boss.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/ciwo5y0qngbllqe/Okycreed_Ibu_Boss.pdf/file"
    },
    {
        "title": "Komik Okycreed Istri Cosplay",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/cosplay.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/e4qhh2j9iuutbe3/OKKYCREED_-_ISTRI_COSPLAY.pdf/file"
    },
    {
        "title": "Komik Okycreed Mainan Baru",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/mainan-baru.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/wdikyjldvpkz0op/OKKYCREED_-_MAINAN_BARU.pdf/file"
    },
    {
        "title": "Komik Okycreed Dimasakin Siska",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/dimasakin-siska.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/wpl30cb2w158mfo/Okycreed_Dimasakin_Siska.pdf/file"
    },
    {
        "title": "Komik Okkycreed Kakak Tiri",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/kakak-tiri.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/l3uq3qlmrfiqx5c/Okicreed_Kakak_Tiri.pdf/file"
    },
    {
        "title": "Komik Noir Neko Kunti Chan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/noir-neko-kunti-chan.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/rlwyvkqr7d1do0s/Noir_Neko_-_Kunti_Chan_3.pdf/file"
    },
    {
        "title": "Komik Manhwa A Knowing Sister",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/A-Knowing-Sister.jpg?resize=165,225",
        "episode": "Chapter 40 End",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Boxgurih Pandemi",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurih-pandemi.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/xd3cl968wamrt09/Box_Gurih_Pandemi.pdf/file"
    },
    {
        "title": "Komik Boxgurih Main ke Goa Mama",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurih-main-ke-goa-mama.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/5s7syf49rt6gcg1/Box_Gurih_Main_Ke_gua_Mama.pdf/file"
    },
    {
        "title": "Komik Boxgurih Tante Mamarik",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/tante-mamarik.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/mbroai28qolf846/BoxGurih_-_Tante_Mamarik.pdf/file"
    },
    {
        "title": "Komik Boxgurih AWM",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurih-AWM.jpg?resize=165,225",
        "episode": "Chapter 00",
        "link": "https://www.mediafire.com/file/k769kdat46bvchm/BoxGurih_-_AWM.pdf/file"
    },
    {
        "title": "Komik Manhwa Unwanted Roommate",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/unwanted-roommate.jpg?resize=165,225",
        "episode": "Chapter 19 End",
        "link": "https://www.mediafire.com/file/6ulsyhsxaomot58/Unwanted_Roommate_19_END.pdf/file"
    },
    {
        "title": "Komik Manhwa Ajeossi",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/photo_2021-11-11_19-31-45.jpg?resize=165,225",
        "episode": "Chapter 64",
        "link": "https://www.mediafire.com/file/we9219cnaifsqks/Chapter_64.PDF/file"
    },
    {
        "title": "Komik Hijabizah Sanksi Kerja",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabizah-sanksi-kerja.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/ath3bgbohuu0igy/Komik+Hijabizah+Sanksi+Kerja.pdf/file"
    },
    {
        "title": "Komik Manga Bocil Sultan",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/bocil-sultan.jpg?resize=165,225",
        "episode": "Chapter 08",
        "link": "https://www.mediafire.com/file/6uymv2zr72nh4bv/Manga+Bocil+Sultan+8.pdf/file"
    },
    {
        "title": "Komik Hijabitch Kakakku",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabitch-kakakku.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/jzc4o42sfdwwz5k/Komik+Hijabitch+Kakakku.pdf/file"
    },
    {
        "title": "Komik Hijabitch Kakak Masak",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabitch-kakak-masak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/6c25frv6ftwjkg6/Hijabitch_Kakak_Masak.pdf/file"
    },
    {
        "title": "Komik Hijabholic Punishment",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/punishment.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/ocis93oc8hy8yzr/Hijabholic_Punishment.pdf/file"
    },
    {
        "title": "Komik Hijabolic Bunda Oh Bunda",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/bunda-oh-bunda.jpg?resize=165,225",
        "episode": "Chapter No Text",
        "link": "https://www.mediafire.com/file/lyi0912294b531k/Hijabolic_Bunda_Oh_Bunda.pdf/file"
    },
    {
        "title": "Komik Hijabolic Forbidden Couple Abi and Daughter",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Forbidden-couple-abi.jpg?resize=165,225",
        "episode": "Chapter No Text",
        "link": "https://www.mediafire.com/file/v68oqxofv9qhx4p/Hijabolic_Abi_and_Daughter.pdf/fil"
    },
    {
        "title": "Komik Hijabolic Hijabi Art",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabi-art.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/go9wmw6s32ixn2l/Hijabolic_Art.pdf/file"
    },
    {
        "title": "Komik Hijabolic Tante Marwah",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/tante-marwah.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/atkd1291blgc657/Hijabolic_Tante_Marwah.pdf/file"
    },
    {
        "title": "Komik Hijabolic Tahun Baru",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabolic-new-year.jpg?resize=165,225",
        "episode": "Chapter China NY",
        "link": "https://www.mediafire.com/file/i8of5uxotirii8v/Hijabolic_China_New_Year_CG_Art.pdf/file"
    },
    {
        "title": "Komik Hijabolic Bantu Masak",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Hijabolic-Bantu-Masak.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/5kui36voyfopqth/Hijabholic_Bantu_Masak.pdf/file"
    },
    {
        "title": "Hijabolic Comic Forbidden Couple BLSPHMY",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/BLSPHMY.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Hijabolic Valentine Day",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Hijabholic-Valentine-Day.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Hijabholic Random CG Art",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Hijabholic-Random-CG-Art.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://ruangimajinasi.github.io"
    },
    {
        "title": "Komik Jambu Madu Banned Episode",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/0004.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/z3glt353tjf5thx/Jambu+Madu+Banned+Episode.pdf/file"
    },
    {
        "title": "Komik Jambu Madu Baby Sitter Terbaik",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Jambu-Madu-Baby-Sitter-Terbaik.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/jfz9391owo9qzfq/Jambu_Madu_Baby_Sitter_Terbaik.pdf/file"
    },
    {
        "title": "Komik Jambu Madu Berdelapan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Jambu-Madu-Berdelapan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/hv3gz5gzk4tdxp6/Jambu_Madu_Berdelapan.pdf/file"
    },
    {
        "title": "Komik Jambu Madu Kak Mia",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Jambu-Madu-Kak-Mia.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/l5730w4fb7fmj9w/Jambu_MAdu_Kak_Mia.pdf/file"
    },
    {
        "title": "Komik Jambu Madu Battle Of Crott",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Jambu-Madu-Battle-Of-Crott.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/8luej6ybwx41ywv/Jambu_Madu_-_Battle_of_Crot.pdf/file"
    },
    {
        "title": "Komik Jambu Madu Sekali vs Berkali-kali",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Komik-Jambu-Madu-Sekali-vs-Berkali-kali.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/7v8niyj6vnn8k1a/Jambu_Madu_-Sekali_vs_Berkali-kali.pdf/file"
    },
    {
        "title": "Komik Jambu Madu Bahaya Ospek Online",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/jambu-madu-bahaya-opspek-online.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/sw578a9d7f3tx8n/Jambu_MAdu_Bahaya_Ospek_Online.pdf/file"
    },
    {
        "title": "Komik Jambu Madu Bau",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/jambu-madu-bau.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/g8fktcemshssp3s/Jambu_Madu_-_Bau.pdf/file"
    },
    {
        "title": "Komik Jambu Madu Drama Sinetron",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/jambu-madu-drama-indosiar.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/nw0rutqwzajjj5n/Jambu_madu_-_drama_indosiar.pdf/file"
    },
    {
        "title": "Komik Komikus Fasik",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/surti-komikus-Fasik.jpg?resize=165,225",
        "episode": "Chapter Terpakai",
        "link": "https://www.mediafire.com/file/5d6gbz64hlt3jr3/Kokikus_Fasik_Surti_Terpakai.pdf/file"
    },
    {
        "title": "Komik Sinar Jaya Gurih Arisan",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/sjg-arisan-1-e1636386387470.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/a2ts0126f5t1juh/SJG_Arisan-www.komikhot.xyz.pdf/file"
    },
    {
        "title": "Komik Hijabolic Arisan Waktunya Pulang",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabolic-Arisan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/8jmo0w51ym6g6l0/Jilbabholic+Arisan+-+xomix.xyz.pdf/file"
    },
    {
        "title": "Komik Hijabolic Forbidden Couple",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabolic-forbidden-couple.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/idnk74xayzd0x9o/Hijabholic_Forbidden_Couple_Incest.pdf/file"
    },
    {
        "title": "Komik Madloki Special Tutor",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/special-tutor.jpg?resize=165,225",
        "episode": "Chapter 05",
        "link": "https://www.mediafire.com/file/0t0b7qfmuvczouv/Madloki_Special_Tutor_5.pdf/file"
    },
    {
        "title": "Komik Madloki Kasih",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-kaish.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/nbhj3kzrd11q3k4/Komik+Madloki+Kasih+Chapter+2.pdf/file"
    },
    {
        "title": "Komik Manga Sisuana Sister Hole",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/manga-sisuana.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/5548fz2exbrsouy/SISUANA-_sister_hole_28Original29Cpt.2_END.pdf/file"
    },
    {
        "title": "Komik Madloki Indahmaret",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/INDAHMARET.jpg?resize=165,225",
        "episode": "Chapter Remake",
        "link": "https://www.mediafire.com/file/ab77d4mvdriris5/Madloki_Indahmaret_Remake.pdf/file"
    },
    {
        "title": "Komik Madloki Love Kost 21",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/love-kost.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/00v7m3v7gre94tq/MADLOKI+-+LOVE+KOST+21+Chapter+3.pdf/file"
    },
    {
        "title": "Komik Madloki Macan Langka",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/Mama-Langka.jpg?resize=165,225",
        "episode": "Chapter 04",
        "link": "https://www.mediafire.com/file/1f3vdjao6f2g4n7/Madloki_Macan_Langka_Chapter_04.pdf/file"
    },
    {
        "title": "Komik Madloki Dad Love Me",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/dad-love-me.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/h3pz40ku0tjgvjy/Komik_Madloki_Dad_Love_Me_Chapter_02.pdf/file"
    },
    {
        "title": "Komik Hijabizah Coffee Break",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabizah-coffee-break.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/4hkzpkmkj8dc99x/Hijabizah_Coffee_Break.pdf/file"
    },
    {
        "title": "Komik Hijabizah Pertemuan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabizah-pertemuan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/r92p4ycnydo46vd/Hijabizah_Pertemuan.pdf/file"
    },
    {
        "title": "Komik Hijabizah Makan Siang",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/hijabizah.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/7e5xr5j4jaxzu6p/Hijabizah_Makan_Siang.pdf/file"
    },
    {
        "title": "Komik Madloki Widia dan Abah",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/Untitled.jpg?resize=165,225",
        "episode": "Chapter 08",
        "link": "https://workupload.com/file/97XqjkMpTVJ"
    },
    {
        "title": "Komik BoxGurih Suster Lisa",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurihsuster-lisa.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/3ma5lj9wlpb5bet/Box_Gurih_Suster_Lisa.pdf/file"
    },
    {
        "title": "Komik BoxGurih Godaan Setan",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurih-Setan.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/889vmpkrkoatsxy/Box_Gurih_Godaan_Setan.pdf/file"
    },
    {
        "title": "Komik Madloki Cerita Citra Fan Art",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-citra-fan-art.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/sqmx50y8xcw2513/Madloki_Citra_Fan_Art.pdf/file"
    },
    {
        "title": "Komik Madloki Cerita Citra Spin Off Story",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-citra-spin-off.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/b4bthaqwze100q6/MADLOKI_-_Cerita_Citra_28Spin_off_story29.pdf/file"
    },
    {
        "title": "Komik Madloki Cerita Citra",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/madloki-citra.jpg?resize=165,225",
        "episode": "Chapter 08",
        "link": "https://workupload.com/file/8wzLEQ5H3f9"
    },
    {
        "title": "Komik BoxGurih Jajan Mart",
        "poster": "https://i1.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurih-jajan-mart.jpg?resize=165,225",
        "episode": "Chapter 02",
        "link": "https://www.mediafire.com/file/sokp8gx4cj09ngk/Komik_Box_Gurih_Jajan_Mart_Part_2.pdf/file"
    },
    {
        "title": "Komik Boxgurih Pulang Sekolah",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/boxgurih-pulang-sekolah.jpg?resize=165,225",
        "episode": "Chapter 03",
        "link": "https://www.mediafire.com/file/xxmhzrwbstwt03f/Box_Gurih_Pulang_Sekolah_Part_3.pdf/file"
    },
    {
        "title": "Komik Bebih KKN Kuliah Kerja Nyewek",
        "poster": "https://i3.wp.com/komiklokal.me/wp-content/uploads/2021/11/bebih-kkn.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/nwu7nrzak5sbyb4/Bebih_KKN_Kuliah_Kerja_Nyewek.pdf/file"
    },
    {
        "title": "Komik Bebih Rumor Berenang",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/bebih-berenang.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/tnrekewv62thlwq/bebiholic_-_rumorbherenang.pdf/file"
    },
    {
        "title": "Komik Bebih Vibrator",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/bebih-vibrator.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/jph2wgidr9mmyxe/Bebih_Vibrator.pdf/file"
    },
    {
        "title": "Komik Kharisma Jati Cerita Budi di SMP Cabul Mesum",
        "poster": "https://i0.wp.com/komiklokal.me/wp-content/uploads/2021/11/budi-smp.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/mx78a0g5tyhu2kk/Cerita_Budi_di_SMP_Cabul_Mesum.pdf/file"
    },
    {
        "title": "Komik Kharisma Jati Bejat",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-3.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/7nt65q1eb15mkk3/Kharisma_Jati_Radical_Comic_Bejat.pdf/file"
    },
    {
        "title": "Komik Kharisma Jati Faithless",
        "poster": "https://i2.wp.com/komiklokal.me/wp-content/uploads/2021/11/0002-2.jpg?resize=165,225",
        "episode": "Chapter 01",
        "link": "https://www.mediafire.com/file/gr5k6on6thbdd68/Kharisma_Jati_Faithless.pdf/file"
    }
  ],
  
  callback: function (data, pagination) {
      var dataHtml = '';
      $.each(data, function (index, item) {
          dataHtml += '<div class="row sort-item"><a href="https://droplink.co/st?api=8b8315c6bc13a8684492a125284cd883e95e6373&url=' + item.link + '" target="_blank" style="color:black"><img id="poster" src="' + item.poster + '" alt="' + item.title + '" width="100%" height="200" style="object-fit: cover;"></a><span style="font-size:11pt;margin-top:5px"><b>'+ item.episode +'</b></span><p id="juduldua" align="left" style="margin-top:-1px">' + item.title + '</p></div>';
          });

          $("#data-komik").html(dataHtml);
        }
    })
  })