//Random Quote Generator
const quotes = [
    {
        "quote": "Doğanın kalbine yakın kalın... ve arada sırada tamamen uzaklaşıp bir dağa tırmanın ya da ormanda bir hafta geçirin. Ruhunuzu yıkayıp temizleyin.",
        "author": "John Muir",
        "image": "google-earth-view-marshallislands.jpg",
        "where": "Marshall Islands",
        "number": "1"
    },
    {
        "quote": "Etrafımızdaki evrenin harikalarına ve gerçeklerine dikkatimizi ne kadar net bir şekilde odaklayabilirsek, yıkıma o kadar az hevesli oluruz.",
        "author": "Rachel Carson",
        "image": "google-earth-view-Negaunee.jpg",
        "where": "Negaunne, United States",
        "number": "2"
    },
    {
        "quote": "Dağ ile karınca arasında bir yerde duruyoruz.",
        "author": "Kızılderili (Onondaga) Atasözü",
        "image": "google-earth-view-MarbleCanyon-US.jpg",
        "where": "Marble Canyon, United States",
        "number": "3"
    },
    {
        "quote": "Gezip dolaşan herkes kaybolmuş sayılmaz.",
        "author": "J.R.R. Tolkien",
        "image": "google-earth-view-MahajangaRural-Madagascar.jpg",
        "where": "Mahajanga Rural, Madagascar",
        "number": "4"
    },
    {
        "quote": "İnsanlığın en büyük önceliği doğal dünyayla yeniden bütünleşmektir.",
        "author": "Jonathon Poritt",
        "image": "google-earth-view-niagra-falls-us.jpg",
        "where": "Niagra Falls, United States",
        "number": "5"
    },
    {
        "quote": "Küçük Dünyamız Uzay Gemisi sadece sekiz bin mil çapında, bu büyük uzay boşluğunda neredeyse ihmal edilebilir bir boyut.",
        "author": "Buckminster Fuller",
        "image": "google-earth-view-Tuvalu.jpg",
        "where": "Tuvalu",
        "number": "6"
    },
    {
        "quote": "Kirlilik, değerlendirmediğimiz kaynaklardan başka bir şey değildir. Dağılıp gitmelerine izin veriyoruz çünkü değerlerinden bihaberiz.",
        "author": "Buckminster Fuller",
        "image": "google-earth-view-Hardap-Namibia.jpg",
        "where": "Hardap, Namibia",
        "number": "7"
    },
    {
        "quote": "Evinden çıkmış bir gezgin, kendi kapısının eşiğinden hiç ayrılmamış birinden ne kadar bilge ise, başka bir kültürü tanımak da kendi kültürümüzü daha istikrarlı inceleme ve daha sevgiyle takdir etme yeteneğimizi o kadar keskinleştirmelidir.",
        "author": "Margaret Mead",
        "image": "google-earth-view-Noumea-NewCaledonia.jpg",
        "where": "Noumea, New Caledonia",
        "number": "8"
    },
    {
        "quote": "Bir halk olarak, dünyayı çocukların ve gelecek nesillerin geleceğini düşünmeden, paha biçilmez ve yeri doldurulamaz kaynaklarını tüketen bir yaşam tarzı geliştirdik.",
        "author": "Margaret Mead",
        "image": "google-earth-view-Akjoujt-Mauritania.jpg",
        "where": "Akjoujt, Mauritania",
        "number": "9"
    },
    {
        "quote": "Kendinizi değiştirmediyseniz toplum üzerinde asla bir etkiniz olamaz.",
        "author": "Nelson Mandela",
        "image": "google-earth-view-Peedamulla-Australia.jpg",
        "where": "Peedamula, Australia",
        "number": "10"
    },
    {
        "quote": "Kendi durumumuzun yaratıcıları biziz... ve bu gerçeğin farkına varan bireyler kolektif eylemi bekleyemez, beklememelidir.",
        "author": "Mahatma Gandhi",
        "image": "google-earth-view-Orhangazi-Turkey.jpg",
        "where": "Orhangazi, Turkey",
        "number": "11"
    },
    {
        "quote": "Bakın! Bakın! Doğanın derinliklerine bakın, o zaman her şeyi anlayacaksınız.",
        "author": "Albert Einstein",
        "image": "google-earth-view-QuesmAlWahatAlKhargah-Egypt.jpg",
        "where": "Quesm Al Wahat, Egypt",
        "number": "12"
    },
    {
        "quote": "Kalıcı değişim, insanlar farklı bir yaşam tarzının mevcut olandan daha tatmin edici olduğunu kendi gözleriyle gördüklerinde gerçekleşir.",
        "author": "Eknath Easwaran",
        "image": "google-earth-view-Birjand-Iran.jpg",
        "where": "Birjand, Iran",
        "number": "13"
    },
    {
        "quote": "Toprağı sağlığına kavuşturma süreci, Doğa'ya ve Doğa aracılığıyla kendimize uyum sağlama sürecidir.",
        "author": "Chris Maser",
        "image": "google-earth-view-SaThayDistrict-Vietnam.jpg",
        "where": "Sa Thay District, Vietnam",
        "number": "14"
    },
    {
        "quote": "Umutsuzluğa karşı Dünyanın restorasyonu kadar kalbi, bedeni ve ruhu onaran başka bir şey bilmiyorum.",
        "author": "Barry Lopez",
        "image": "google-earth-view-Kumarina-Australia.jpg",
        "where": "Kumarina, Australia",
        "number": "15"
    },
    {
        "quote": "Hâlâ etrafımızı saran yaşamın o muazzam çeşitliliğini yeniden dokumaya, onarım çağını başlatmaya çalışmaktan daha ilham verici bir amaç olamaz.",
        "author": "Edward O. Wilson",
        "image": "google-earth-view-CeelDheer-Somalia.jpg",
        "where": "Ceel Dheer, Somalia",
        "number": "16"
    },
    {
        "quote": "Mümkün olan en insani şekilde davranmaya başlayana kadar gerçekte ne kadar eşsiz olduğumuzu asla bilemeyeceğiz.",
        "author": "Catherine Roberts",
        "image": "google-earth-view-CopiapoProvince-Chile.jpg",
        "where": "Copiapo Province, Chile",
        "number": "17"
    },
    {
        "quote": "Şefkat çemberini tüm canlıları kapsayacak şekilde genişletene kadar, insan kendi içinde huzur bulamayacaktır.",
        "author": "Albert Schweitzer",
        "image": "google-earth-view-Deori-India.jpg",
        "where": "Deori, India",
        "number": "18"
    },
    {
        "quote": "İnsan doğası, insan olmak için canavarlıktan veya gaddarlıktan vazgeçmesi gerektiğini tam olarak fark ettiğinde kendini bulacaktır.",
        "author": "Mahatma Gandhi",
        "image": "google-earth-view-KaztalDistrict-Kazakhstan.jpg",
        "where": "Kaztal District, Kazakhstan",
        "number": "19"
    },
    {
        "quote": "Dünyayı unuttuk, onu yaşamımızın bir kaynağı olarak görmeyi ihmal etme anlamında unuttuk.",
        "author": "Fairfield Osborn",
        "image": "google-earth-view-Fderik2-Mauritania.jpg",
        "where": "Fderik, Mauritania",
        "number": "20"
    },
    {
        "quote": "Eksikliğini hissettiğimiz şey, insanlığın maddi olarak doğaya bağımlı olduğunu ve doğanın üretken kapasitesinin sınırlı olduğunu entelektüel ve duygusal olarak kabul etmememizdir.",
        "author": "Mathis Wackernagel and William Rees",
        "image": "google-earth-view-CookIslands.jpg",
        "where": "Cook Islands",
        "number": "21"
    },
    {
        "quote": "Gerçek hayatta kalanlar, tüm bolluğun aktığı temel olan ekolojik sermayelerini tüketmeden milyonlarca yıl yaşayan Dünya sakinleridir.",
        "author": "Janine M. Benyus",
        "image": "google-earth-view-CorpenAikeDepartment-Argentina.jpg",
        "where": "Corpen Aike Department, Argentina",
        "number": "22"
    },
    {
        "quote": "Şu anda yapılan hatalar tüm zamanlar için yapılıyor.",
        "author": "Rachel Carson",
        "image": "google-earth-view-EasternProvince-SaudiArabia.jpg",
        "where": "Eastern Province, Saudi Arabia",
        "number": "23"
    },
    {
        "quote": "Kurbağa yaşadığı göleti içip bitirmez.",
        "author": "Kızılderili (Siyu) Atasözü",
        "image": "google-earth-view-Galapagos-Ecuador.jpg",
        "where": "Galapagos, Ecuador",
        "number": "24"
    },
    {
        "quote": "Ekolojinin birinci yasası her şeyin her şeye bağlı olmasıdır.",
        "author": "Barry Commoner",
        "image": "google-earth-view-Glynneath-UK.jpg",
        "where": "Glynneath, United Kingdom",
        "number": "25"
    },
    {
        "quote": "Belki de en ciddi sorunumuz, hayalperest bir ulus haline gelmiş olmamızdır. Görünüşe bakılırsa sonlu kaynakların sonsuz kullanılabilirliğine inanıyoruz.",
        "author": "Wendell Berry",
        "image": "google-earth-view-Ennedi2-Chad.jpg",
        "where": "Ennedi, Chad",
        "number": "26"
    },
    {
        "quote": "Doğa, birbirini çok az tekrarlayan kanunların sonsuz bir birleşimi ve tekrarıdır.",
        "author": "Ralph Waldo Emerson",
        "image": "google-earth-view-Uzbekistan.jpg",
        "where": "Uzbekistan",
        "number": "27"
    },
    {
        "quote": "Toprak solucanları, gübre böcekleri gibi çok mütevazı yaşam formlarının bile hayatta kalmaları için uğraşmaları gereken asıl sorunları tanımlamakta hiç zorlanmamaları dikkat çekicidir.",
        "author": "Edward Goldsmith",
        "image": "google-earth-view-Kerman-Iran.jpg",
        "where": "Kerman, Iran",
        "number": "28"
    },
    {
        "quote": "Doğal sistemlerde çok yaygın bir hayatta kalma stratejisi olan karşılıklı fayda için işbirliği, insanlığın taklit etmesi gereken bir durumdur.",
        "author": "Eugene Odum",
        "image": "google-earth-view-South-Iceland3.jpg",
        "where": "South Iceland",
        "number": "29"
    },
    {
        "quote": "Kendimizi tüm yaşam çeşitliliğiyle bir olan biyolojik yaratıklar olarak anlamamız gerekir.  Bu birliği ve dayanışmayı gerçekten görebildiğimizde, doğanın affedici, cömert ve dirençli olduğunu anlayacağız.",
        "author": "Kenny Ausubel",
        "image": "google-earth-view-NothSlope-US.jpg",
        "where": "North Slope, United States",
        "number": "30"
    },
    {
        "quote": "Türümüzün dünyada varlığını sürdürebilmesi ancak dünyaya karşı tevazu ve saygı göstermesiyle mümkündür.",
        "author": "Wendell Berry",
        "image": "google-earth-view-Zug-WesternSahara.jpg",
        "where": "Zug, Western Sahara",
        "number": "31"
    },
    {
        "quote": "Doğa asla ve asla bilgeliğin söylediğinden farklı bir şey söylemez.",
        "author": "Juvenal",
        "image": "google-earth-view-Salelologa-Samoa.jpg",
        "where": "Salelologa, Samoa",
        "number": "32"
    },
    {
        "quote": "Doğanın sesini dinleyin, sizin için hazineler barındırır.",
        "author": "Kızılderili (Huron) Atasözü",
        "image": "google-earth-view-Purisima-Columbia.jpg",
        "where": "Purisima, Columbia",
        "number": "33"
    },
    {
        "quote": "Ruhumuzu dinlendirmeye ve dinlemeye istekli olursak, yaban hayatı bize bilgelik öğretecektir.",
        "author": "Steven Harper",
        "image": "google-earth-view-Dorie-NewZealand.jpg",
        "where": "Dorie, New Zealand",
        "number": "34"
    },
    {
        "quote": "İnsan doğadan uzaklaştığında kalbi katılaşır.",
        "author": "Kızılderili (Lakota) Atasözü",
        "image": "google-earth-view-mauritania.jpg",
        "where": "Mauritania",
        "number": "35"
    },
    {
        "quote": "Hayatın amacı onu yaşamak, deneyimleri sonuna kadar tatmak, daha yeni ve daha zengin deneyimlere korkusuzca ve hevesle uzanmaktır.",
        "author": "Eleanor Roosevelt",
        "image": "google-earth-view-Crete-Greece.jpg",
        "where": "Crete, Greece",
        "number": "36"
    },
    {
        "quote": "Hayattan en iyi şekilde yararlanmanın bir yolu, onu bir macera olarak görmektir.",
        "author": "William Feather",
        "image": "google-earth-view-Kirbati.jpg",
        "where": "Kirbati",
        "number": "37"
    },
    {
        "quote": "Macera başlı başına paha biçilemez bir değerdir.",
        "author": "Amelia Earhart",
        "image": "google-earth-view-SouthEleuthera-TheBahamas.jpg",
        "where": "South Eleuthera, The Bahamas",
        "number": "38"
    },
    {
        "quote": "Meraklı olanlara ne mutlu, çünkü maceraları hiç eksik olmayacaktır.",
        "author": "Lovelle Drachman",
        "image": "google-earth-view-Renchinlkhumbe-Mongolia.jpg",
        "where": "Renchinlkhumbe, Mongolia",
        "number": "39"
    },
    {
        "quote": "Hayat ya büyük bir maceradır ya da hiçbir şey.",
        "author": "Helen Keller",
        "image": "google-earth-view-VillarinoPartido-Argentina.jpg",
        "where": "Villarino Partido, Argentina",
        "number": "40"
    },
    {
        "quote": "Bazı insanlar kendilerini tanımayı - kendilerini bulmayı - ancak maceraya atılarak başarabilir.",
        "author": "Andre Gide",
        "image": "google-earth-view-HaibeiZangzuzizhizhou-China.jpg",
        "where": "Haibei Zangzuzizhizhou, China",
        "number": "41"
    },
    {
        "quote": "Henüz her yere gitmedim ama listemde var.",
        "author": "Susan Sontag",
        "image": "google-earth-view-DakhletNouadhibou2-Mauritania.jpg",
        "where": "Dakhlet Nouadhibou, Mauritania",
        "number": "42"
    },
    {
        "quote": "Dünya bir kitaptır ve seyahat etmeyenler yalnızca bir sayfasını okur.",
        "author": "Augustinus",
        "image": "google-earth-view-Rikaze-China.jpg",
        "where": "Rikaze, China",
        "number": "43"
    },
    {
        "quote": "Tüm seyahatlerin, yolcunun haberdar olmadığı gizli varış noktaları vardır.",
        "author": "Martin Buber",
        "image": "google-earth-view-HarborSprings-US.jpg",
        "where": "Harbor Springs, United States",
        "number": "44"
    },
    {
        "quote": "Seyahat etmek, herkesin diğer ülkeler hakkında yanıldığını keşfetmektir.",
        "author": "Aldous Huxley",
        "image": "google-earth-view-UrzharDistrict-Kazakhstan.jpg",
        "where": "Urzhar District, Kazakhstan",
        "number": "45"
    },
    {
        "quote": "Yolun götürdüğü yere gitmeyin. Bunun yerine yol olmayan yere gidin ve kendi izinizi bırakın.",
        "author": "Ralph Waldo Emerson",
        "image": "google-earth-view-Vratarusa-Croatia.jpg",
        "where": "Vratarusa, Croatia",
        "number": "46"
    },
    {
        "quote": "Yolda bir çatala gelirseniz, onu alın.",
        "author": "Yogi Berra",
        "image": "google-earth-view-Humahuaca-Argentina.jpg",
        "where": "Humahuaca, Argentina",
        "number": "47"
    },
    {
        "quote": "Yirmi yıl sonra yapmadığınız şeyler için yaptıklarınızdan daha fazla hayal kırıklığına uğrayacaksınız. O yüzden palamarları söküp atın. Güvenli limandan yelken açın. Yelkenlerinizde ticaret rüzgarlarını yakalayın. Keşfedin. Hayal edin. Bulun.",
        "author": "Mark Twain",
        "image": "google-earth-view-SaintMary-AntiguaandBarbuda.jpg",
        "where": "Saint Mary, Antigua and Barbuda",
        "number": "48"
    },
    {
        "quote": "Seyahat insana alçakgönüllülük katar, dünyada ne kadar küçük bir yer kapladığınızı görürsünüz.",
        "author": "Gustave Flaubert",
        "image": "google-earth-view-Vegaoyan-Norway.jpg",
        "where": "Vegaoyan, Norway",
        "number": "49"
    },
    {
        "quote": "Kıyıyı gözden kaybetme cesaretiniz olmadıkça yeni okyanuslar keşfedemezsiniz.",
        "author": "Andre Gide",
        "image": "google-earth-view-Iznik-Turkey.jpg",
        "where": "Iznik, Turkey",
        "number": "50"
    },
    {
        "quote": "Hayattaki en iyi yolculuklar, hiç aklınıza gelmeyen soruları yanıtlayan yolculuklardır.",
        "author": "Rich Ridgeway",
        "image": "google-earth-view-Iceland.jpg",
        "where": "Iceland",
        "number": "51"
    },
    {
        "quote": "Kapıdan dışarı adım atmak tehlikeli bir iştir Frodo. Yola çıkarsın ve eğer ayaklarına hakim olamazsan nereye sürükleneceğini bilemezsin.",
        "author": "J.R.R. Tolkien",
        "image": "google-earth-view-Barcelos-Brazil.jpg",
        "where": "Barcelos, Brazil",
        "number": "52"
    },
    {
        "quote": "Yolculuğa çıktığınızda... yolun uzun, macera ve bilgi dolu olması için dua edin.",
        "author": "Konstantin Kavafis",
        "image": "google-earth-view-Rikaze2-China.jpg",
        "where": "Rikaze, China",
        "number": "53"
    },
    {
        "quote": "Hayatınızın olması gereken cesur macerayı kucaklamadan ölmeyin.",
        "author": "Steve Pavlina",
        "image": "google-earth-view-Maunaloa-US.jpg",
        "where": "Maunaloa, United States",
        "number": "54"
    },
    {
        "quote": "İnsan bir dağa tırmanırken oradan bir parça koparmadan kendisinden bir şey de orada bırakmadan edemez.",
        "author": "Sir Martin Conway",
        "image": "google-earth-view-Zermatt-Switzerland.jpg",
        "where": "Zermatt, Switzerland",
        "number": "55"
    },
    {
        "quote": "Ve unutmayın ki dünya, çıplak ayaklarınızı hissetmekten zevk alır ve rüzgarlar saçlarınızla oynamak için hasret çeker.",
        "author": "Halil Cibran",
        "image": "google-earth-view-Tanganyika-DemocraticRepublicoftheCongo.jpg",
        "where": "Tanganyika, Democratic Republic of the Congo",
        "number": "56"
    },
    {
        "quote": "Eğer bir yol diğerinden daha iyiyse, emin olun ki o doğanın yoludur.",
        "author": "Aristoteles",
        "image": "google-earth-view-Nema-Mauritania.jpg",
        "where": "Nema, Mauritania",
        "number": "57"
    },
    {
        "quote": "Dünyanın güzellikleri ve gizemleri arasında yaşayanlar hiçbir zaman yalnız kalmaz ve hayattan bıkmazlar.",
        "author": "Rachel Carson",
        "image": "google-earth-view-Rikaze3-China.jpg",
        "where": "China",
        "number": "58"
    },
    {
        "quote": "Binlerce ormanın yaratılışı tek bir palamutta gizlidir.",
        "author": "Ralph Waldo Emerson",
        "image": "google-earth-view-NorthRim-US.jpg",
        "where": "North Rim, United States",
        "number": "59"
    },
    {
        "quote": "Ağaç diken, umut da eker.",
        "author": "Lucy Larcom",
        "image": "google-earth-view-Wangerland-Germany.jpg",
        "where": "Wangerland, Germany",
        "number": "60"
    },
    {
        "quote": "Küresel çevreyi kurtarma mücadelesi bir bakıma çok daha zordur, çünkü bu defaki savaş kendimizledir. Kendi müttefikimiz olduğumuz gibi en büyük düşman da biziz.",
        "author": "Al Gore",
        "image": "google-earth-view-Oman.jpg",
        "where": "Oman",
        "number": "61"
    },
    {
        "quote": "Kuyu kurumadan suyun değerini asla bilmeyiz.",
        "author": "Thomas Fuller",
        "image": "google-earth-view-LosVidrios-Mexico.jpg",
        "where": "Los Vidrios, Mexico",
        "number": "62"
    },
    {
        "quote": "Sürdürülebilir kalkınma, gelecek nesillerin aynı şeyi yapma becerisini tehlikeye atmadan kendi ihtiyaçlarımızı karşılamanın ustaca dengelenmesidir.",
        "author": "Bilinmeyen",
        "image": "google-earth-view-Moindou-NewCaledonia.jpg",
        "where": "Moindou, New Caledonia",
        "number": "63"
    },
    {
        "quote": "Dünyayı atalarımızdan miras almayız, çocuklarımızdan ödünç alırız.",
        "author": "Kızılderili Atasözü",
        "image": "google-earth-view-Maralinga-Australia.jpg",
        "where": "Maralinga, Australia",
        "number": "64"
    },
    {
        "quote": "Dünya üzerindeki yaşamın geleceğini güvence altına alan sürdürülebilirlik, sonsuz bir oyun, herkes adına cömertliğin sonsuz ifadesidir.",
        "author": "Paul Hawken",
        "image": "google-earth-view-WesternSahara.jpg",
        "where": "Western Sahara",
        "number": "65"
    },
    {
        "quote": "Sürdürülebilirlik, bu gezegendeki hayatta kalmamızın anahtarıdır ve tüm seviyelerde başarımızı belirleyecektir.",
        "author": "Shari Arison",
        "image": "google-earth-view-SurCarangas-Bolivia.jpg",
        "where": "Sur Carangas, Bolivia",
        "number": "66"
    },
    {
        "quote": "Esneklik tamamen beklenmedik olanın üstesinden gelmekle ilgilidir. Sürdürülebilirlik hayatta kalmakla ilgilidir. Esnekliğin amacı gelişmektir.",
        "author": "Jamais Cascio",
        "image": "google-earth-view-Murzuq-Libya.jpg",
        "where": "Murzuq, Libya",
        "number": "67"
    },
    {
        "quote": "21. yüzyılda kahramanların daha iyi bir hayat kalitesi sağlayanlar, yoksullukla mücadele edenler ve daha fazla sürdürülebilirlik sağlayanlar olacağını düşünüyorum.",
        "author": "Bertrand Piccard",
        "image": "google-earth-view-Antartica2.jpg",
        "where": "Antartica",
        "number": "68"
    },
    {
        "quote": "Sürdürülebilirliğin ilk kuralı doğal güçlerle uyum sağlamak veya en azından onlara meydan okumaya çalışmamaktır.",
        "author": "Paul Hawken",
        "image": "google-earth-view-Ouargla2-Algeria.jpg",
        "where": "Ouargla, Algeria",
        "number": "69"
    },
    {
        "quote": "Hayatta biraz da topraktan aldığını yerine koyan çiftçiye benzememiz gerektiğini düşünüyorum.",
        "author": "Paul Newman",
        "image": "google-earth-view-LineIslands-Kiribati.jpg",
        "where": "Line Islands, Kirbati",
        "number": "70"
    },
    {
        "quote": "İnsanlar 'gereğinden fazla' kirlilik üretirler çünkü bununla başa çıkma maliyetlerini hesaba katmazlar.",
        "author": "Ha-Joon Chang",
        "image": "google-earth-view-Negaunee-US.jpg",
        "where": "Negaunne, United States",
        "number": "71"
    },
    {
        "quote": "İnsan ırkının en büyük eksikliği, üstel işlevi anlama yetersizliğimizdir.",
        "author": "Albert A. Bartlett",
        "image": "google-earth-view-Mayo-Ireland.jpg",
        "where": "Mayo, Ireland",
        "number": "72"
    },
    {
        "quote": "Eğer endüstriyel mısıra sürdürülebilir demeye başlayacaksak, yeterince beklemeye hazırsak petrolün de yenilenebilir bir kaynak olduğunu söyleyebiliriz.",
        "author": "Catherine Friend",
        "image": "google-earth-view-Kasai-DemocraticRepublicoftheCongo.jpg",
        "where": "Kasai, Democratic Republic of the Congo",
        "number": "73"
    },
    {
        "quote": "Üzerine koyacak düzgün bir gezegeniniz yoksa evin bir faydası var mıdır?",
        "author": "Henry David Thoreau",
        "image": "google-earth-view-South-Iceland2.jpg",
        "where": "South Iceland",
        "number": "74"
    },
    {
        "quote": "Dünya ormanlarına yaptığımız şey, sadece kendimize ve birbirimize yaptığımız şeyin ayna yansımasıdır.",
        "author": "Mahatma Gandhi",
        "image": "google-earth-view-Basrah-Iraq.jpg",
        "where": "Basrah, Iraq",
        "number": "75"
    },
    {
        "quote": "Doğada bir tek şey çekildiğinde bile geri kalan tüm dünyaya bağlı olduğu görülür.",
        "author": "John Muir",
        "image": "google-earth-view-Mopti-Mali.jpg",
        "where": "Mopti, Mali",
        "number": "76"
    },
    {
        "quote": "İnsanoğlu yaşam ağını kendisi örmedi. Biz onun içinde sadece bir ilmeğiz. Ağa ne yaparsak kendimize de onu yaparız.",
        "author": "Şef Seattle",
        "image": "google-earth-view-Rombo-Tanzania.jpg",
        "where": "Rombo, Tanzania",
        "number": "77"
    },
    {
        "quote": "Toprağın, suyun, bitkilerin, göklerin içinde ne lezzet ve erdemler olduğunu bilen ve bu tılsımlara nasıl ulaşılacağını öğrenmiş olan kişi zengin ve asil kişidir.",
        "author": "Ralph Waldo Emerson",
        "image": "google-earth-view-DivisionNo18-Canada.jpg",
        "where": "Division No. 18, Canada",
        "number": "78"
    },
    {
        "quote": "Toprağı bize ait bir mülk olarak gördüğümüz için toprağı tahrip ediyoruz. Toprağı parçası olduğumuz bir topluluk olarak gördüğümüzde onu sevgi ve saygıyla işlemeye başlayabiliriz.",
        "author": "Aldo Leopold",
        "image": "google-earth-view-Zapotiltic-Mexico.jpg",
        "where": "Zapotiltic, Mexico",
        "number": "79"
    },
    {
        "quote": "Bu gezegende sanki gidecek başka bir gezegenimiz varmış gibi yaşıyoruz.",
        "author": "Terri Swearingen",
        "image": "google-earth-view-Musselburgh-UK.jpg",
        "where": "Musselburgh, United Kingdom",
        "number": "80"
    },
    {
        "quote": "Tek bir gezegen, tek bir deneyim.",
        "author": "Edward O. Wilson",
        "image": "google-earth-view-Mysove-Crimea.jpg",
        "where": "Mysove, Crimea",
        "number": "81"
    },
    {
        "quote": "Bilimin doğru kullanımı doğayı fethetmek değil, içinde yaşamaktır.",
        "author": "Barry Commoner",
        "image": "google-earth-view-MariscalNietoProvince-Peru.jpg",
        "where": "Mariscal Nieto Province, Peru",
        "number": "82"
    },
    {
        "quote": "Havayı, suyu, doğayı ve vahşi yaşamı koruma planları aslında insanı koruma planlarıdır.",
        "author": "Stewart Udall",
        "image": "google-earth-view-Kailua-Kona-US.jpg",
        "where": "Kailua-Kona, United States",
        "number": "83"
    },
    {
        "quote": "Koruma, insanla doğa arasındaki uyum durumudur.",
        "author": "Aldo Leopold",
        "image": "google-earth-view-Lelystad-Netherlands.jpg",
        "where": "Lelystad, Netherlands",
        "number": "84"
    },
    {
        "quote": "Karşılaştığınız sorunları, o sorunları yarattığınız düşünce düzleminde kalarak çözemezsiniz.",
        "author": "Albert Einstein",
        "image": "google-earth-view-AntonioQuijarro-Bolivia.jpg",
        "where": "Antonio Quijarro, Bolivia",
        "number": "85"
    },
    {
        "quote": "Hava soluyamıyorsan ve su içemiyorsan ilgilendiğin diğer hiçbir şey gerçekleşmeyecektir. O yüzden oturmayın. Bir şeyler yapın.",
        "author": "Carl Sagan",
        "image": "google-earth-view-Tanbar-Australia.jpg",
        "where": "Tanbar, Australia",
        "number": "86"
    },
    {
        "quote": "Ormanlar için verdiğimiz ve vermeye devam ettiğimiz mücadele, doğruyla yanlış arasındaki sonsuz çatışmanın bir parçasıdır.",
        "author": "John Muir",
        "image": "google-earth-view-YellowstonNationalPark-US.jpg",
        "where": "Yellowstone National Park, United States",
        "number": "87"
    },
    {
        "quote": "Kendi eylemlerinizden kendinizi sorumlu tutmalısınız, Dünyayı ancak bu şekilde koruyabiliriz.",
        "author": "Julia Butterfly Hill",
        "image": "google-earth-view-Kihei-US.jpg",
        "where": "Kihei, United States",
        "number": "88"
    },
    {
        "quote": "Uzayda dolaşan o milyonlarca ve milyonlarca gezegen arasından, bu bizim gezegenimiz, bu bizim küçük olanımız, o yüzden sadece bunun farkında olmalı ve ona iyi bakmalıyız.",
        "author": "Paul McCartney",
        "image": "google-earth-view-Rybachje-Kazakhstan.jpg",
        "where": "Rybachje, Kazakhstan",
        "number": "89"
    },
    {
        "quote": "Topraklarını yok eden bir ulus kendisini de yok eder.",
        "author": "Franklin D. Roosevelt",
        "image": "google-earth-view-LosAndes2-Argentina.jpg",
        "where": "Los Andes, Argentina",
        "number": "90"
    },
    {
        "quote": "Ay'dan çekilen Dünya fotoğrafını görene kadar bu gezegenin ne kadar küçük ve çaresiz olduğunu, onu ellerimizin arasında tutmamız ve özen göstermemiz gereken bir yer olduğunu anlayamadık.",
        "author": "Margaret Mead",
        "image": "google-earth-view-Oshikoto-Namibia.jpg",
        "where": "Oshikoto, Namibia",
        "number": "91"
    },
    {
        "quote": "Hayatın ilk ortaya çıktığı denizin, şimdi o hayatın tek bir şeklinin faaliyetleriyle tehdit edilmesi garip bir durumdur.",
        "author": "Rachel Carson",
        "image": "google-earth-view-ProvinceDeSidiKacem-Morocco.jpg",
        "where": "Province de Sidi Kacem, Morocco",
        "number": "92"
    },
    {
        "quote": "Güneş, etrafında dönen ve ona bağımlı olan o kadar çok gezegen varken bile evrende yapacak başka hiçbir işi yokmuşçasına bir salkım üzümü olgunlaştırabilir.",
        "author": "Galileo",
        "image": "google-earth-view-Dennehotso2-US.jpg",
        "where": "Dennehotso, United States",
        "number": "93"
    },
    {
        "quote": "Doğaya hiçbir zaman doyamayız.",
        "author": "Henry David Thoreau",
        "image": "google-earth-view-AswanGovernorate-Egypt.jpg",
        "where": "Aswan Governorate, Egypt",
        "number": "94"
    },
    {
        "quote": "Doğa ile tam bir kaynaşmadan başka dileğim, onun yasalarıyla uyum içinde yaşamaktan ve çalışmaktan başka arzum olmadı.",
        "author": "Claude Monet",
        "image": "google-earth-view-DavisCounty-US.jpg",
        "where": "Davis County, United States",
        "number": "95"
    },
    {
        "quote": "Doğal çevre, tüm varlıkların yaşamını evrensel olarak ayakta tutar.",
        "author": "Dalai Lama",
        "image": "google-earth-view-AfarZone2-Ethiopia.jpg",
        "where": "Afar Zone 2, Ethiopia",
        "number": "96"
    },
    {
        "quote": "Dünya hepimizin ortak noktasıdır.",
        "author": "Wendell Berry",
        "image": "google-earth-view-Huisduinen-TheNetherlands.jpg",
        "where": "Huisduinen, Netherlands",
        "number": "97"
    }
];

function applyNewQuote(quoteObj) {
    const quoteEl = document.getElementById('quote');
    const speakerEl = document.getElementById('speaker');
    const sectionEl = document.querySelector('.earth-quotes-section');

    // Fade out
    if (quoteEl) quoteEl.style.opacity = '0';
    if (speakerEl) speakerEl.style.opacity = '0';

    const newImageUrlFull = "https://sonorangirl.github.io/Earth-Quotes/img/" + quoteObj.image;

    let timeElapsed = false;
    let imageLoaded = false;

    const finalizeTransition = () => {
        if (timeElapsed && imageLoaded) {
            // Text change
            if (quoteEl) quoteEl.innerHTML = quoteObj.quote;
            if (speakerEl) speakerEl.innerHTML = "-" + quoteObj.author;

            // Background change (image is now cached, so transition is smooth)
            if (sectionEl) {
                sectionEl.style.backgroundImage = "url('" + newImageUrlFull + "')";
            }

            // Fade in
            if (quoteEl) quoteEl.style.opacity = '1';
            if (speakerEl) speakerEl.style.opacity = '1';
        }
    };

    // Wait for the 400ms fade out transition
    setTimeout(() => {
        timeElapsed = true;
        finalizeTransition();
    }, 400);

    // Preload the image
    const img = new Image();
    img.onload = () => {
        imageLoaded = true;
        finalizeTransition();
    };
    img.onerror = () => {
        // Fallback if image fails gracefully
        imageLoaded = true;
        finalizeTransition();
    };
    img.src = newImageUrlFull;
}

function getNewQuote() {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    applyNewQuote(random);
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialization setup for smooth transitions
    const quoteEl = document.getElementById('quote');
    const speakerEl = document.getElementById('speaker');
    if (quoteEl) quoteEl.style.transition = 'opacity 0.4s ease-in-out';
    if (speakerEl) speakerEl.style.transition = 'opacity 0.4s ease-in-out';

    const btn = document.getElementById('quote-button');
    if (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault(); // Stop hash from jumping
            getNewQuote();
        });
    }

    // Make modal toggles work
    document.querySelectorAll('[data-toggle="modal"]').forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const modal = document.querySelector(targetId);
            if (modal) modal.classList.add('show');
        });
    });

    document.querySelectorAll('[data-dismiss="modal"], .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const modal = this.closest('.modal');
            if (modal) modal.classList.remove('show');
        });
    });
});
