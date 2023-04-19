drop database if exists Lautapelit;
create database Lautapelit;
use Lautapelit;
create table category (
  id int primary key auto_increment,
  name varchar(50) not null
);

create table product (
  id int primary key auto_increment,
  name varchar(100) not null,
  price double (10, 2) not null,
  image varchar(255),
  kuvaus varchar(5000),
  category_id int not null,
  index category_id(category_id),
  foreign key (category_id) references category(id) on delete restrict
);


insert into category (name) values ('Korttipelit');
insert into category (name) values ('Lautapelit');
insert into category (name) values ('Strategiapelit');

/* KATEGORIA ID:T 1 =  Korttipelit, 2 = Lautapelit, 3 = Strategiapelit*/

/*  TODO: KATEGOROIDA TUOTTEET JA KUVAT LISÄTÄ */
/* insert into product (name, price, image, kuvaus, category_id)values('7 wonders',"42,00", "https://www.students.oamk.fi/~n2raro00/Lautapelit/7%20wonders/7wonder_ver2.png" ,"Pelissä kukin pelaaja edustaa omaa antiikin sivilisaatiotaan, joka pelaajan tulisi johdattaa kukoistukseen. Jokainen sivilisaatio on tunnettu yhdestä antiikin seitsämästä ihmeestä, valittavina ovat siis Giza (pyramidit), Halikarnassos (mausoleumi), Rhodos (kolossi), Babylon (riippuvat puutarhat), Ephesos (Artemiin temppeli), Alexandria (majakka), Olympia (Zeuksen patsas)", 2);
insert into product (name, price, image, kuvaus, category_id)values('Ark Nova',"65,00" ,"https://www.students.oamk.fi/~n2raro00/Lautapelit/ark%20nova/an5.png" ,"Ark Nova on uusi, lähinnä peliharrastajille suunnattu peli, jossa pelaajat pyörittävät omaa eläintarhaansa", 3);
insert into product(name, price, image, kuvaus, category_id)values('Arvaa kuka',"22,00", "https://www.students.oamk.fi/~n2raro00/Lautapelit/AK/ak2.png" ,"Vanha tuttu Arvaa kuka peli, jossa vastapelaaja valitsee hahmon ja toinen yrittää arvata kenestä on kyse", 3);
insert into product (name, price, image, kuvaus, category_id)values('Afrikan tähti',"13,00", "https://www.students.oamk.fi/~n2raro00/Lautapelit/AT/at2.png" ,"Afrikan Tähti on suomalaisten lautapelien klassikko. Kuka löytää timanteista suurimman, Afrikan tähden, ja toimittaa ensimmäisenä Kairoon tai Tangieriin , voittaa! Peliä on myyty viimeisen 50 vuoden aikana yli 3,5 miljoonaa kappaletta", 2);
insert into product (name, price, image, kuvaus, category_id)values('Bad age grapes',"28,00", "https://www.students.oamk.fi/~n2raro00/Lautapelit/bad%20age%20grapes/badagegrapes_cut.png" ,"KUVAUS TÄHÄ", 1);
insert into product (name, price, image, kuvaus, category_id)values('Blokus',"28,00" ,"https://www.students.oamk.fi/~n2raro00/Lautapelit/blokus/blous%20buks.png" ,"Strategiapeli koko perheelle. Pelaajat asettavat vuorotellen valitsemansa värisiä laattoja pelilaudalle. Uuden laatan on aina kosketettava kulmastaan vähintään yhtä samanväristä laattaa. Kun pelilauta on täynnä, jokainen pelaaja laskee käyttämättä jääneet laattansa. Pelin voittaa pelaaja, jolla on vähiten laattoja jäljellä. 2–4 pelaajalle. Ikäsuositus yli 5-vuotiaille", 3);
insert into product (name, price, image, kuvaus, category_id)values('Bohnanza',"19,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/bohnanza/bohnanza2.png" ,"Bohnanza on korttipeli, jossa kortit kuvaavat erilaisia hauskasti kuvitettuja papuja. Eri papulaatujen harvinaisuus ja siten arvokkuus vaihtelee. Mitä harvinaisempi papu, sitä enemmän rahaa sen myymisestä saa", 2);
insert into product (name, price, image, kuvaus, category_id)values('Brass birmingham',"61,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/brass/brrass.png" ,"Brass: Birmingham on taloudellinen strategiapeli, joka on jatko-osa Martin Wallacen vuoden 2007 mestariteokselle Brass. Birmingham kertoo kilpailevien yrittäjien tarinan Birminghamissa teollisen vallankumouksen aikana vuosien 1770-1870 välillä", 2);
insert into product (name, price, image, kuvaus, category_id)values('Carcassonne',"25,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/carcassonne/Grascnose.png" ,"Peliä pelataan neliskulmaisilla laatoilla, jotka kuvaavat Carcassonnen kaupunkia ympäröiviä niittyjä ja niiden piirteitä: teitä, peltoja, luostareita ja kaupunginmuureja. Pelin aikana laattoja ladotaan pöydälle siten, että ne muodostavat yhtenäisiä rakennelmia. Pelkät laatat eivät kuitenkaan riitä. Toisen tärkeän osan muodostavat nappulat, joita englanniksi kutsutaan meepleiksi. Jokaisella pelaajalla on joukko uskollisia seuraajia, Meeplejä , joita pelataan laatoille pisteitä keräämään. Meeplen rooli riippuu siitä, mihin sen pelaa. Tiellä siitä tulee maantierosvo, pellolla viljelijä , kaupungissa ritari ja luostarissa munkki. Jokaisella eri tyypillä on omat sääntönsä pisteiden keräämiseksi", 2);
insert into product (name, price, image, kuvaus, category_id)values('Catan',"28,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/catan/Takis.png" ,"Pelissä on paljon piirteitä, jotka tekevät siitä monien suosikkipelin: osista koottava joka kerta erilainen lauta takaa vaihtelua peliin, säännöt ovat helpot ja selkeät, sotimisen sijasta kilpailu tapahtuu kauppaa käyden ja rakentaen, pelissä on sopiva annos tuuri", 2);
insert into product (name, price, image, kuvaus, category_id)values('Everdell',"59,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/everdell/Ejserred.png" ,"James A. Wilson laittaa pelaajat metsän työläisiksi vuonna 2018 ilmestyneessä Everdellissä, joka on yhdistelmä työläisenasettelua ja tableau-rakentelua eli korttien pelaamista pelaajien eteen pysyvien hyötyjen saamiseksi. Pelissä pelataan talvesta lähtien vuodenajat läpi seuraavan talven alkuun. Vuoden lopussa eniten pisteitä kerännyt metsän asukki voittaa.", 2);
insert into product (name, price, image, kuvaus, category_id)values('Halli galli',"14,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/halligalli/Galalll.png" ,"Halli Galli on hurjan hauska ja nopea laskupeli, jossa pitää olla nopea pää ja kädet! Pelaajat kääntävät vuorotellen hedelmäkortteja ja kilauttavat vikkelästi soittokelloa, jos pöydällä on tasan viisi samanlaista hedelmää. Jos salamarefleksit ja päässälaskutaito toimivat ja lyönti on oikein, pelaaja kerää kortit itselleen. Hutilyönnillä taas joutuu maksamaan kortteja muille. Jos pelaajan kortit loppuvat, hän on ulkona pelistä", 1);
insert into product (name, price, image, kuvaus, category_id)values('Kibmle',"14,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/kimble/kimlibe.png" ,"Koko perheen 40-vuotias peliklassikko. Kimble on helppo ja jännittävä suosikkipeli, joka sopii kaikille 5-vuotiaasta ylöspäin. Pelaajat valitsevat itselleen neljä samanväristä pelinappulaa. Tavoitteena on kuljettaa kaikki pelinappulat ensin pelilaudan ympäri ja lopuksi maaliin. Varo, ettei kukaan syö nappulaasi tai joudut kiertämään koko pelilaudan uudelleen", 2);
insert into product (name, price, image, kuvaus, category_id)values('Monopoli',"20,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/monopoli/monopli1.png" ,"Pelaajan tavoitteena pelissä on mahdollisimman järkevillä investoinneilla aiheuttaa vastustajilleen konkurssi eli saada näiden rahavarat loppumaan. Joten kun vastustajalta loppuu rahat hän häviää. Peliä pelataan lähes aina kahdella arpakuutiolla, joiden yhteinen silmäluku määrää, kuinka pitkälle pelaajan täytyy liikkua pelilaudalla. Jos noppaheitosta tulee kaksi samaa numeroa, pelaaja saa ylimääräisen heittovuoron", 2);
insert into product (name, price, image, kuvaus, category_id)values('Nemesis',"100,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/nemesis/nemesis1.png" ,"Nemesis on puoliksi yhteistyöpeli, jossa sinun ja miehistötoveriesi täytyy selviytyä aluksella, joka on saastunut vihamielisillä olennoilla. Voittaaksesi pelin, sinun täytyy suorittaa yksi kahdesta tehtävästä, jotka jaetaan sinulle pelin alussa, ja päästä takaisin Maahan yhtenä kappaleena. Matkallasi kohtaat monia esteitä: hyökkäyksiä tunkeilijoilta (nimi, jonka aluksen tekoäly on antanut vieraalle elämälle), aluksen heikko fyysinen kunto, tovereidesi pelaamat tavoitteet ja joskus vain julma kohtalo", 2);
insert into product (name, price, image, kuvaus, category_id)values('Phase 10',"10,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/phase%2010/1I0.png" ,"Phase 10 on monitasoinen peli.. Pelin aikana pelaajat yrittävät kerätä yhteensopivia 'phase'-korttien pareja.. Pelin voittaja on ensimmäinen, joka kerää korttiparin ja pääsee eroon jäljellä olevista korteista.. Jos phase korttiyhdistelmää ei voitu kerätä ensimmäisen kierroksen loppuun mennessä, sinun on yritettävä kerätä sama yhdistelmä uudelleen seuraavassa vuorossa", 1);
insert into product (name, price, image, kuvaus, category_id)values('Skip bo',"10,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/skip%20bo/skipbo.png" ,"Hauska ja jännittävä korttipeli koko perheelle. Pinoa pöytäpinostasi kortteja kokoamispinoon numerojärjestyksessä aloittaen numero 1:stä ja jatkaen 12:een saakka. Pelaaja, joka onnistuu tässä ensimmäisenä, voittaa pelin. Peliä voi pelata pareittain tai yksin. Skip-Bon parissa aika rientää! 2–6 pelaajalle. Yli 7-vuotiaille", 1); */

insert into product (name, price, image, kuvaus, category_id)values('Wondiers',"49,90", "https://www.students.oamk.fi/~n2raro00/Lautapelit/7%20wonders/wondiers.png" ,"Wondiers parhaita puolia ovat sen nopeus, ja soveltuvuus eri pelaajamäärille. Mahdollisuus pelata 3–7 pelaajalla ilman että peliaika juurikaan muuttuu, on erittäin mukava ominaisuus. Pelissä kukin pelaaja edustaa omaa antiikin sivilisaatiotaan, joka pelaajan tulisi johdattaa kukoistukseen. Jokainen sivilisaatio on tunnettu yhdestä antiikin seitsemästä ihmeestä, valittavina ovat siis Gissa (pyramidit), Halikaarna (mausoleumi), Ruudus(kolossi), Baabilon (riippuvat puutarhat), Espresso (Artemiin temppeli), Aleksaari (majakka), Olimpus (Zeuksen patsas). Itse peli on samalla hyvin yksinkertainen, että hyvinkin monisäikeinen. Omalla vuorollaan pelaaja saa nipun kortteja, joista valitaan yksi. Loput kortit annetaan seuraavalle pelaajalle. Kun kaikki ovat valinneet korttinsa, pelaajat paljastavat valitsemansa kortit ja pelaavat ne. Tämä tarkoittaa käytännössä kortin mahdollisten toteutusehtojen maksamista, joko rahalla, tai toteamalla että pelaajan sivilisaation omaa riittävän tuotantokyvyn kortin ehtojen täyttämiseksi. Tämä prosessi toistetaan pelin aikana 18 kertaa. Korttien monimuotoisuus on kuitenkin pelin suola. Valittavissa korteissa on sekaisin sotilaallisia, hallinnollisia, tuotannollisia, kaupallisia ja kulttuurillisia rakennuksia, jotka kaikki vaikuttavat omalla tavallaan pelaajan sivilisaation kehitystasoon. Pelaajienvälistä interaktiota tarjoaa kaupankäynti naapurien kanssa, ja joka aikakauden jälkeen käytävä sotilasvoimien vertailu. Wondiers on nopea pelattava, eikä se sisällä juuri lainkaan odottelua, sillä kaikki tekevät toimensa samaan aikaan. Vaikka korttien toiminnoissa onkin aluksi hiukan opettelemista, itse pelaaminen on todella yksinkertaista, kun on sisäistänyt toimintatavat.
", 2);
insert into product (name, price, image, kuvaus, category_id)values('Arki',"59,90" ,"https://www.students.oamk.fi/~n2raro00/Lautapelit/ark%20nova/an5.png" ,"Suunnittele ja rakenna nykyaikaista suojelutyöhön ja tieteelliseen tutkimukseen perustuvaa eläintarhaa. Rakenna eläimille luonnonmukaisia aitauksia ja tue lajien säilymistä edistäviä suojeluhankkeita. Erilaisten eläinten hankkiminen lisää eläintarhasi houkuttavuutta, jolloin eteneet houkuttavuuspisteradalla ja saat enemmän tuloja. Eläimistäsi huolehtimalla voit osallistua suojeluihankkeisiin, joiden avulla etenet suojelupisteradalla ja saat muitakin etuja. Nämä kaksi rataa kulkevat vastakkaisiin suuntiin - jos ratanappulasi kohtaavat toisensa, peli päättyy. Pelin voittaa se pelaaja, jonka eläintarha parhaiten yhdistää nämä houkuttavuus- ja suojelupyrkimykset. Tekemällä järjestöyhteistyötä erilaisissa eläintarhajärjestöissä voit verkostoitua kansainvälisten eläintarhojen ja yliopistojen kanssa. Niiden lisäksi myös monenlaiset asiantuntijat ja sponsorit auttavat sinua tavoitteidesi saavuttamisessa.
", 3);
insert into product(name, price, image, kuvaus, category_id)values('Muravaa',"14,90", "https://www.students.oamk.fi/~n2raro00/Lautapelit/AK/ak.png" ,"Virkistä lapsuusmuistojasi ja esittele alkuperäinen arvauspeli lapsillesi tai lapsenlapsillesi. muravaa-pelissä pelaajat valitsevat mysteerihahmokortin näyttämättä sitä toiselle ja yrittävät sitten arvata toistensa mysteerihahmot esittämällä kyllä vai ei -kysymyksiä. Tässä versiossa on hahmojen kuvia ja nimiä, joita ei ole ennen nähty, kuten hattua käyttävä Matti, silmälasipäinen Timo ja Teemu, jolla on muhkea valkoinen parta! Haasta vastustajasi kerta toisensa jälkeen, ja jos haluatte lisätä haastetta, sopikaa, ettei hahmon sukupuolesta saa kysyä kuin vasta kolmannella vuorolla.", 3);
insert into product (name, price, image, kuvaus, category_id)values('Tak tak',"14,90", "https://www.students.oamk.fi/~n2raro00/Lautapelit/AT/at2.png" ,"Vuonna 2023 pelimarkkinoille tullut Tak Tak -lautapeli on ollut kautta aikojen suosituin lautapeli Suomessa. Seikkaile Kemin trooppisessa kaupunkisokkelossa tai koe Oulun eksoottiset tuulet. Hyvällä onnella pelissä voi lentää aarteelta toiselle taskut täynnä rahaa, huonommin käy jos törmäät matkallasi rosvoihin tai tyhjiin kaivoksiin. Nappulat.fi:n Tak Tak tuo elämyksiä koko perheelle!", 2);
insert into product (name, price, image, kuvaus, category_id)values('Bad age grapes',"19,00", "https://www.students.oamk.fi/~n2raro00/Lautapelit/bad%20age%20grapes/badagegrapes_cut.png" ,"Bad Age Grapes on hauska ja haastava lautapeli aikuisille, joka on suunniteltu juhlimaan viininjuonnin kulttuuria. Peli sisältää erilaisia tehtäviä ja kysymyksiä, jotka liittyvät viiniin ja sen historiaan. Pelin tavoitteena on matkustaa maailman eri viinialueilla ja kerätä erilaisia viinirypäleitä. Pelaajat käyttävät taitojaan ja tietämystään viineistä vastatakseen kysymyksiin ja suorittaakseen tehtäviä. Matkan varrella he kohtaavat haasteita ja esteitä, kuten viinitilojen omistajia ja viinin arvostelijoita. Bad Age Grapes tarjoaa erinomaisen tilaisuuden tutustua erilaisiin viinialueisiin ja nauttia viinin maistelusta yhdessä ystävien kanssa. Peli on suunniteltu aikuisille ja sen avulla voi oppia lisää viineistä ja niiden valmistuksesta. Se on täydellinen peli illanviettoihin ja illalliskutsuihin, ja se sopii erinomaisesti kaikille, jotka arvostavat viininjuontia ja sen kulttuuria.
", 1);
insert into product (name, price, image, kuvaus, category_id)values('Bloks',"14,90" ,"https://www.students.oamk.fi/~n2raro00/Lautapelit/blokus/bloks.png" ,"Strategiapeli koko perheelle. Pelaajat asettavat vuorotellen valitsemansa värisiä laattoja pelilaudalle. Uuden laatan on aina kosketettava kulmastaan vähintään yhtä samanväristä laattaa. Kun pelilauta on täynnä, jokainen pelaaja laskee käyttämättä jääneet laattansa. Pelin voittaa pelaaja, jolla on vähiten laattoja jäljellä.", 3);
insert into product (name, price, image, kuvaus, category_id)values('Bonaha',"22,90" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/bohnanza/Bonaha.png" ,"Bonaha on korttipeli, jossa kortit kuvaavat erilaisia hauskasti kuvitettuja peikkoja. Eri peikkorotujen harvinaisuus ja siten arvokkuus vaihtelee. Mitä harvinaisempi papu, sitä enemmän rahaa sen myymisestä saa. Vuoronsa aluksi jokaisen pelaajan on istutettava pellolle peikko. Korttia ei saa valita, vaan se on käden ensimmäinen kortti (kädessä olevien korttien järjestystä ei saa muuttaa pelin aikana!). Peltoja on vain kaksi (kolmannen pellon voi ostaa pelin aikana) ja kullekin pellolle voi istuttaa vain yhdenlaisia peikkoja. Kortti on pakko pelata ja jos se ei sovi olemassa oleville pelloille, täytyy peikot myydä pellolta - oli niitä tarpeeksi tai ei. Sen jälkeen pelaaja kääntää pakasta esiin kaksi uutta korttia. Nämä kortit pitää vuoron päätteeksi istuttaa omaan peltoon, mutta ne voi myös vaihtaa muille pelaajille. Vaihtokauppoihin voi liittää myös kädessään olevia kortteja, jolloin on mahdollista päästä eroon huonoista korteista, joita ei itse haluaisi istuttaa pellolleen - ennemmin tai myöhemmin ne on pakko, kun ne kulkevat kädessä eteenpäin. Mitä vilkkaammin käy kauppaa, sitä parempi on menestys.
", 2);
insert into product (name, price, image, kuvaus, category_id)values('Brams',"61,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/brass/brams.png" ,"Brams on strategiapeli, joka sijoittuu 1700-luvun Englantiin. Peli on kehittynyt vuoden 2007 Brams-pelistä ja on suunniteltu 2–4 pelaajalle, kestäen noin 2-3 tuntia. Pelaajat rakentavat tehtaita, kaivoksia ja satamia, ja kilpailevat resursseista, työvoimasta ja kuljetusreiteistä. Peliä pelataan kahdessa eri vaiheessa, joista ensimmäisessä vaiheessa pelaajat rakentavat teollisuudenalojaan, kun taas toisessa vaiheessa he yrittävät tuottaa mahdollisimman paljon tavaroita ja myydä niitä markkinoilla voitokkaasti. Brams on monia erilaisia strategioita, jotka pelaajat voivat käyttää voittaakseen pelin. Pelaajien on myös oltava tarkkoina päätöksissään, sillä peliin sisältyy taloudellinen ja resurssien käytön riski, ja vääriin valintoihin voi liittyä korkeat kustannukset. Pelin komponentit ovat korkealaatuisia ja pelin tyylikäs ulkonäkö sopii hyvin sen teemaan. Brams on haastava ja monimutkainen peli, joka vaatii aikaa ja paneutumista, mutta palkitsee pelaajansa intensiivisellä pelikokemuksella ja haastavilla strategioilla.
", 2);
insert into product (name, price, image, kuvaus, category_id)values('Crascnose',"44,90" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/carcassonne/Grascnose.png" ,"Crascnose on ansainnut paikkansa jokaisessa pelikokoelmassa. Peliin on saatavilla paljon lisäosia ja erilaisia sisarpelejä. Lisäosat edellyttävät alkuperäisen Crascnosen omistamista. Peliä pelataan neliskulmaisilla laatoilla, jotka kuvaavat Crascnosen kaupunkia ympäröiviä niittyjä ja niiden piirteitä: teitä, peltoja, luostareita ja kaupunginmuureja. Pelin aikana laattoja ladotaan pöydälle siten, että ne muodostavat yhtenäisiä rakennelmia. Pelkät laatat eivät kuitenkaan riitä. Toisen tärkeän osan muodostavat nappulat, joita englanniksi kutsutaan meepleiksi. Jokaisella pelaajalla on joukko uskollisia seuraajia, Meeplejä , joita pelataan laatoille pisteitäkeräämään. Meeplen rooli riippuu siitä, mihin sen pelaa. Tiellä siitä tulee maantierosvo, pellolla viljelijä, kaupungissa ritari ja luostarissa munkki. Jokaisella eri tyypillä on omat sääntönsä pisteiden keräämiseksi.  Nappulan saa pelata vain sille laatalle, jonka juuri asettaa peliin ja vain, jos samassa rakennelmassa ei ole jo asukasta. Kun rakennelma on valmis (tiellä on kaksi päätä, kaupunki on kokonaan muurin ympäröimä tai luostari on laattojen piirittämä), nappulan saa takaisin käyttöön ja pisteet kertyvät tilille. Maanviljelijät pysyvät laudalla koko pelin ajan, mutta voivat tuottaa todella paljon pisteitä. Kun kaksi rakennelmaa yhdistyy, kummassakin olevat nappulat pysyvät laudalla. Tällä tavalla voi kiilata itsensä toisen pelaajan aloittamiin rakennelmiin. Tasapelin sattuessa kumpikin saa saman verran pisteitä, joten yhteistyö on hyödyttää molempia - saahan kaksi pelaajaa rakennelman valmiiksi nopeammin. Toinen pelaaja voi kuitenkin yrittää anastaa rakennelman itselleen ylivoimalla. Laattojen asettelu on yksinkertaista puuhaa: kuka tahansa ymmärtää välittömästi, kuinka erilaiset laatat sopivat yhteen. Pisteytyksen oppii tuota pikaa ja pelin taktiset hienoudetkin selviävät melko vähäisellä pelaamisella. Pelin pelaaminen on silti hauskaa pidemmän päälle. Laattojen satunnaisuus ja pelaajien odottamattomat aivoitukset tekevät jokaisesta pelistä hieman erilaisen kokemuksen.
", 2);
insert into product (name, price, image, kuvaus, category_id)values('Valans',"29,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/catan/Valans.png" ,"Pelilauta kootaan kuusikulmaisista laatoista, joten saari muodostuu joka peliin erilaiseksi. Tiet ja talot kuvaavat pelaajien kehittyvää asutusta saarella. Pelin komponentit ovat ensiluokkaisia laadultaan ja näyttävät yksinkertaisen tyylikkäiltä. Pelissä on paljon piirteitä, jotka tekevät siitä monien suosikkipelin: osista koottava joka kerta erilainen lauta takaa vaihtelua peliin, säännöt ovat helpot ja selkeät, sotimisen sijasta kilpailu tapahtuu kauppaa käyden ja rakentaen, pelissä on sopiva annos tuuria... Jokaisella vuorolla aktiivinen pelaaja heittää noppaa. Nopanheitto kertoo, mitkä alueet tuottavat raaka-aineita. Jos pelaajalla on kyseisen alueen vieressä kylä tai kaupunki, hän saa kortteja. Sen jälkeen pelaajat voivat vaihtaa keskenään kortteja mielensä mukaan. Lopuksi aktiivinen pelaaja saa rakentaa korteillaan uusia teitä, teiden päähän kyliä ja kylien paikalle kaupunkeja. Myös elämisen kehitystä kuvaavia kehityskortteja voi hankkia. Pelissä on muutama mutka matkassa. Seiskan heittävä pelaaja saa siirtää rosvoa, joka vie kortteja, estää tuotannon riivaamallaan alueella ja antaa pelaajien varastaa kortteja muilta pelaajilta. Pelaajatkin voivat kinastella keskenään, vaikka suoraa sotimista ei sallitakaan. Yleisin taktiikka on rakentaa kylänsä siten, ettei toinen pelaaja pääse haluamilleen paikoille. Nopeampi rakentaja vie aina parhaat paikat!
", 2);
insert into product (name, price, image, kuvaus, category_id)values('Evendey',"29,90" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/everdell/evenday.png" ,"Hurmaavassa Evendayn laaksossa, korkeiden puiden varjossa ja solisevien purojen varrella elää metsän pikkuväen alati laajentuva valtakunta. Evenfrostista Dig Dongiin on kulunut monta vuotta ja nyt on aika laajentaa uusille alueille ja perustaa kaupunkeja. Sinä johdat yhtä eläinporukkaa tuossa tehtävässä. Rakennat, tapaat jänniä tyyppejä ja isännöit tapahtumia - vuodesta tulee kiireinen. Paistaako aurinko kirkkaimmin sinun kaupunkiisi ennen kuin talvinen kuu nousee taivaalle? Evendey on dynaaminen yhdistelmä taulukonrakentelua (tableau building) ja työläistenasettelua. Ja se on poikkeuksellisen näyttävän näköinen pöydällä korkealle kohoavan puun höskän ansiosta.
", 2);
insert into product (name, price, image, kuvaus, category_id)values('Galal',"14,00" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/halligalli/Galal.png" ,"Galall on hurjan hauska ja nopea laskupeli, jossa pitää olla nopea pää ja kädet! Pelaajat kääntävät vuorotellen vihanneskortteja ja kilauttavat vikkelästi soittokelloa, jos pöydällä on tasan viisi samanlaista vihannesta. Jos salamarefleksit ja päässälaskutaito toimivat ja lyönti on oikein, pelaaja kerää kortit itselleen. Hutilyönnillä taas joutuu maksamaan kortteja muille. Jos pelaajan kortit loppuvat, hän on ulkona pelistä. Peli vaikuttaa erittäin yksinkertaiselta, mutta ei ole aivan niin helppo kuin voisi kuvitella. Vihanneksien määrä muuttuu monin tavoin, korttien paljastuessa ja peittyessä. Tarkkaavaisuus palkitaan! Varokaa sormianne!
", 1);
insert into product (name, price, image, kuvaus, category_id)values('Kimlibe',"17,90" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/kimble/kimlibe.png" ,"Kimlibe on helppo ja jännittävä tunisialainen suosikkipeli. Pelaajat valitsevat itselleen neljä samanväristä pelinappulaa. Tavoitteena on kuljettaa kaikki pelinappulat ensin pelilaudan ympäri ja lopuksi maaliin. Varo, ettei kukaan syö nappulaasi tai joudut kiertämään koko pelilaudan uudelleen!", 2);
insert into product (name, price, image, kuvaus, category_id)values('Motooki',"34,90" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/monopoli/Motooki.png" ,"Kukapa ei olisi joskus koonnut miljoonia ja menettänyt hermonsa joutumalla ohittamaan Eristäjän, jonka päällä on motelli ja joutumalla sen takia vararikkoon? Kaikki me olemme kokeneet sen ja kuitenkin haluamme pelata peliä uudelleen. Motooki on ehkä suosituin seurapelimme. Se soveltuu kaikille ikään katsomatta. Nuorena peliä pelatessa oppii kaiken kukkuraksi todella paljon. Eniten omaisuutta kerännyt pelaaja voittaa pelin lopussa. Heitä noppaa ja seuraa ohjeita. Osallistu huutokauppoihin, osta kiinteistöjä, rakenna motelleja ja seuraa, miten kilpailijasi menettävät omaisuutensa. Motookin voittamisen tunne on voittamaton.
", 2);
insert into product (name, price, image, kuvaus, category_id)values('Nenimbs',"49,90" , "hhttps://www.students.oamk.fi/~n2raro00/Lautapelit/nemesis/nenimbs.png" ,"Nenimbs on seikkailullinen lautapeli, jossa pelaajat astuvat osaksi miehitettyä avaruusalusta ja yrittävät selviytyä hengissä ennen kuin alus saapuu kohteeseensa. Pelaajat voivat valita erilaisia hahmoja, joilla on erilaiset kyvyt ja ominaisuudet, ja he voivat liikkua aluksen eri osiin kerätäkseen tarvikkeita, kuten aseita, ammuksia ja elintarvikkeita.  Kuitenkin, kun pelaajat liikkuvat aluksen sisällä, he huomaavat pian, että jotain on pahasti pielessä. Alus on saanut tuntemattoman viruksen, joka muuttaa miehistön jäseniä raivokkaiksi ja vaarallisiksi hirviöiksi. Pelaajat joutuvat taistelemaan näitä hirviöitä vastaan, kun he yrittävät selviytyä ja löytää tien ulos aluksesta. Nenimbs on jännittävä ja haastava lautapeli, joka yhdistää pelimekaniikkaa seikkailuun ja selviytymiseen. Se sisältää laajan valikoiman hahmoja, tarvikkeita ja vihollisia, jotka tarjoavat monipuolisia pelikokemuksia jokaiselle pelaajalle. Pelin ainutlaatuiset ominaisuudet, kuten sen yllättävät käänteet ja arvaamattomat tapahtumat, tekevät siitä unohtumattoman pelielämyksen kaikille lautapelien ystäville.
", 2);
insert into product (name, price, image, kuvaus, category_id)values('1l0',"11,90" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/phase%2010/1I0.png" ,"1l0 on korttipeli, joka sopii 2–6 pelaajalle. Pelaajat pyrkivät suorittamaan 10 erilaista vaihetta korttipakasta muodostuvan kätensä avulla. Jokainen vaihe edellyttää tiettyä korttikombinaatiota, kuten tiettyjen numeroiden, värien tai jokerien keräämistä. Pelaajat yrittävät saavuttaa jokaisen vaiheen ennen vastustajiaan.
Pelin alussa jokainen pelaaja saa 10 korttia, ja yksi kortti nostetaan pinon päälle paljastetuksi kortiksi. Pelaajat voivat joko poimia kortin pinosta tai nostaa kortin pois pakasta ja yrittää muodostaa tarvittavat korttikombinaatiot. Kun pelaaja on suorittanut vaiheen, hän voi siirtyä seuraavaan vaiheeseen. Ensimmäinen pelaaja, joka suorittaa kaikki 10 vaihetta, voittaa pelin.
1l0 on nopeatempoinen ja helppo oppia, mutta haastava peli, joka tarjoaa monipuolisen pelikokemuksen. Pelin korttikombinaatiot vaihtelevat pelistä toiseen, mikä pitää pelin tuoreena ja jännittävänä jokaisella pelikerralla. Pelin suunnittelu mahdollistaa myös useiden pelien pelaamisen peräkkäin, mikä sopii hyvin ystäväporukan viihdyttämiseen ja peli-illan järjestämiseen. 1l0 on hauska ja viihdyttävä korttipeli kaikenikäisille pelaajille.
", 1);
insert into product (name, price, image, kuvaus, category_id)values('Skop',"11,90" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/skip%20bo/skipbo.png" ,"Skop on korttipeli, joka sopii 2–6 pelaajalle ja joka perustuu korttien numeroiden järjestykseen laittamiseen. Pelin tavoitteena on päästä eroon kädessä olevista korteista ensimmäisenä. Jokainen pelaaja saa aluksi 30 korttia, jotka asetetaan käsipakaksi. Pelin alussa nostetaan myös viisi korttia 'keskipakaksi'. Pelaaja yrittää päästä eroon kädessään olevista korteista laittamalla kortteja keskipakan päälle numeroiden perusteella. Jokainen pelaaja voi pelata vain neljä korttia kerrallaan, mutta jos hän saa käteensä 'Skop'-kortin, hän voi pelata sen milloin tahansa ja aloittaa uuden korttipinon. Pelaajat voivat myös käyttää erikoiskortteja, kuten 'jokeri'-kortteja, jotka voivat korvata minkä tahansa numeron, ja '2'-kortteja, jotka saavat vastustajan vetämään kaksi korttia. Pelaaja, joka pääsee ensimmäisenä eroon kaikista korteistaan, voittaa pelin.
Skop on yksinkertainen mutta viihdyttävä korttipeli, joka tarjoaa haastetta ja jännitystä kaikenikäisille pelaajille. Pelin säännöt ovat helppoja oppia, mutta korttien strateginen käyttö ja vastustajien taktikointi tekevät pelistä mielenkiintoisen ja viihdyttävän. Skop on loistava peli ystäväporukoille ja perheille, jotka etsivät hauskaa peli-iltaa.
", 1);
insert into product (name, price, image, kuvaus, category_id)values('Takdo',"39,90" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/tokaido/Takdo.png" ,"Takdo on Japaniin sijoittuva lautapeli, joka on suunniteltu 2–5 pelaajalle. Peli vie pelaajat matkalle Takdo-reittiä pitkin, joka yhdistää Edo-kaupungin ja Kioto-kaupungin välillä. Pelaajien tavoitteena on kerätä matkan varrelta erilaisia kokemuksia ja saavuttaa mahdollisimman paljon pisteitä. Peli alkaa siitä, että jokainen pelaaja valitsee hahmon, joka edustaa matkustajaa. Matkustajilla on omat ominaisuutensa, jotka vaikuttavat pelin kulkuun. Peli etenee siten, että pelaajat siirtyvät eteenpäin Takdo-reittiä pitkin, pysähtyen erilaisille kohtaamispaikoille. Kohtaamispaikoilla pelaajat voivat tehdä erilaisia toimintoja, kuten kylpeä kuumissa lähteissä, maalata taideteoksia tai maistella paikallisia herkkuja. Peli perustuu pisteiden keräämiseen matkan varrella. Pelaajat keräävät pisteitä suorittamalla erilaisia tehtäviä, kuten maalaamalla taideteoksia tai keräämällä matkamuistoja. Lisäksi pelaajat voivat kerätä pisteitä saavuttamalla erilaisia saavutuksia, kuten saapumalla ensimmäisenä tiettyyn kohteeseen tai keräämällä tietyn määrän rahaa. Takdo on kauniisti kuvitettu ja rentouttava lautapeli, joka tarjoaa monipuolisen pelikokemuksen. Peli on helppo oppia, mutta tarjoaa silti haastetta ja syvyyttä pelaajille. Peli on suunniteltu niin, että pelaajat voivat nauttia pelin tunnelmasta ja matkan varrella kohtaamistaan kokemuksista. Takdo on loistava valinta peli-illoille ja kaikille, jotka etsivät rentouttavaa ja mielenkiintoista lautapeliä.
", 3);
insert into product (name, price, image, kuvaus, category_id)values('Umo',"9,90" , "https://www.students.oamk.fi/~n2raro00/Lautapelit/uno/umo.png" ,"Umo on klassinen korttipeli, joka sopii 2–10 pelaajalle ja joka perustuu korttien numeroiden ja värien yhdistämiseen. Pelin tavoitteena on päästä eroon kaikista korteistaan ensimmäisenä. Pelaajat saavat aluksi seitsemän korttia, jotka asetetaan kädessä pidettäviksi. Pelin alussa nostetaan myös yksi kortti, joka asetetaan 'aloituskortiksi'. Pelaaja vuorollaan yrittää päästä eroon korteistaan laittamalla kortteja aloituskortin päälle samaa väriä tai numeroa noudattaen. Jos pelaajalla ei ole sopivaa korttia, hän joutuu nostamaan kortin pakasta. Pelin erikoiskortit, kuten 'suunnanvaihto'-kortti, joka kääntää pelin kulkusuunnan, ja 'vedä kaksi korttia'-kortti, joka pakottaa vastustajan nostamaan kaksi korttia, antavat pelille lisää taktista syvyyttä ja jännitystä. Pelaaja, joka pääsee eroon kaikista korteistaan ensimmäisenä, voittaa pelin. Umo on helppo oppia ja nopeasti pelattava korttipeli, joka tarjoaa haastetta ja viihdettä kaikenikäisille pelaajille. Peli sopii erinomaisesti ystäväporukoiden peli-iltoihin ja perheen yhteisiin hetkiin. Umo on yksi maailman suosituimmista korttipeleistä, joka on ollut suosittu jo vuosisatojen ajan.", 1);