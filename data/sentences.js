/* Kilka sytuacji na czasownik. Osoba i zdanie się zmieniają, więc nie wystarczy jedna zapamiętana odpowiedź. */
(function (root, factory) {
  const data = root && root.VERB_DATA ? root.VERB_DATA : require("./verbs.js");
  const api = factory(data);
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.SENTENCE_DATA = api;
})(typeof window !== "undefined" ? window : globalThis, function (DATA) {
  function six(io, tu, lui, noi, voi, loro) {
    return [
      { personId: "io", pl: io, before: "Io" },
      { personId: "tu", pl: tu, before: "Tu" },
      { personId: "lui", pl: lui, before: "Lui" },
      { personId: "noi", pl: noi, before: "Noi" },
      { personId: "voi", pl: voi, before: "Voi" },
      { personId: "loro", pl: loro, before: "Loro" },
    ];
  }

  function scene(verbId, key, after, io, tu, lui, noi, voi, loro) {
    return { verbId: verbId, id: key, after: after, slots: six(io, tu, lui, noi, voi, loro) };
  }

  const FRAMES = [
    { verbId: "essere", after: "a casa.", slots: six(
      "Ja jestem w domu.", "Ty jesteś w domu.", "On jest w domu.",
      "My jesteśmy w domu.", "Wy jesteście w domu.", "Oni są w domu."
    ) },
    { verbId: "avere", after: "tempo.", slots: six(
      "Ja mam czas.", "Ty masz czas.", "On ma czas.",
      "My mamy czas.", "Wy macie czas.", "Oni mają czas."
    ) },
    { verbId: "parlare", after: "con Anna.", slots: six(
      "Ja rozmawiam z Anną.", "Ty rozmawiasz z Anną.", "On rozmawia z Anną.",
      "My rozmawiamy z Anną.", "Wy rozmawiacie z Anną.", "Oni rozmawiają z Anną."
    ) },
    { verbId: "abitare", after: "a Roma.", slots: six(
      "Ja mieszkam w Rzymie.", "Ty mieszkasz w Rzymie.", "On mieszka w Rzymie.",
      "My mieszkamy w Rzymie.", "Wy mieszkacie w Rzymie.", "Oni mieszkają w Rzymie."
    ) },
    { verbId: "lavorare", after: "in ufficio.", slots: six(
      "Ja pracuję w biurze.", "Ty pracujesz w biurze.", "On pracuje w biurze.",
      "My pracujemy w biurze.", "Wy pracujecie w biurze.", "Oni pracują w biurze."
    ) },
    { verbId: "ascoltare", after: "la musica.", slots: six(
      "Ja słucham muzyki.", "Ty słuchasz muzyki.", "On słucha muzyki.",
      "My słuchamy muzyki.", "Wy słuchacie muzyki.", "Oni słuchają muzyki."
    ) },
    { verbId: "arrivare", after: "alle otto.", slots: six(
      "Ja przyjeżdżam o ósmej.", "Ty przyjeżdżasz o ósmej.", "On przyjeżdża o ósmej.",
      "My przyjeżdżamy o ósmej.", "Wy przyjeżdżacie o ósmej.", "Oni przyjeżdżają o ósmej."
    ) },
    { verbId: "chiamare", after: "la mamma.", slots: six(
      "Ja dzwonię do mamy.", "Ty dzwonisz do mamy.", "On dzwoni do mamy.",
      "My dzwonimy do mamy.", "Wy dzwonicie do mamy.", "Oni dzwonią do mamy."
    ) },
    { verbId: "comprare", after: "il pane.", slots: six(
      "Ja kupuję chleb.", "Ty kupujesz chleb.", "On kupuje chleb.",
      "My kupujemy chleb.", "Wy kupujecie chleb.", "Oni kupują chleb."
    ) },
    { verbId: "giocare", after: "a tennis.", slots: six(
      "Ja gram w tenisa.", "Ty grasz w tenisa.", "On gra w tenisa.",
      "My gramy w tenisa.", "Wy gracie w tenisa.", "Oni grają w tenisa."
    ) },
    { verbId: "pensare", after: "alle vacanze.", slots: six(
      "Ja myślę o wakacjach.", "Ty myślisz o wakacjach.", "On myśli o wakacjach.",
      "My myślimy o wakacjach.", "Wy myślicie o wakacjach.", "Oni myślą o wakacjach."
    ) },
    { verbId: "andare", after: "a scuola.", slots: six(
      "Ja idę do szkoły.", "Ty idziesz do szkoły.", "On idzie do szkoły.",
      "My idziemy do szkoły.", "Wy idziecie do szkoły.", "Oni idą do szkoły."
    ) },
    { verbId: "fare", after: "una foto.", slots: six(
      "Ja robię zdjęcie.", "Ty robisz zdjęcie.", "On robi zdjęcie.",
      "My robimy zdjęcie.", "Wy robicie zdjęcie.", "Oni robią zdjęcie."
    ) },
    { verbId: "stare", after: "bene.", slots: six(
      "Ja mam się dobrze.", "Ty masz się dobrze.", "On ma się dobrze.",
      "My mamy się dobrze.", "Wy macie się dobrze.", "Oni mają się dobrze."
    ) },
    { verbId: "mangiare", after: "la pizza.", slots: six(
      "Ja jem pizzę.", "Ty jesz pizzę.", "On je pizzę.",
      "My jemy pizzę.", "Wy jecie pizzę.", "Oni jedzą pizzę."
    ) },
    { verbId: "cominciare", after: "la lezione.", slots: six(
      "Ja zaczynam lekcję.", "Ty zaczynasz lekcję.", "On zaczyna lekcję.",
      "My zaczynamy lekcję.", "Wy zaczynacie lekcję.", "Oni zaczynają lekcję."
    ) },
    { verbId: "pagare", after: "il conto.", slots: six(
      "Ja płacę rachunek.", "Ty płacisz rachunek.", "On płaci rachunek.",
      "My płacimy rachunek.", "Wy płacicie rachunek.", "Oni płacą rachunek."
    ) },
    { verbId: "cercare", after: "le chiavi.", slots: six(
      "Ja szukam kluczy.", "Ty szukasz kluczy.", "On szuka kluczy.",
      "My szukamy kluczy.", "Wy szukacie kluczy.", "Oni szukają kluczy."
    ) },
    { verbId: "studiare", after: "l'italiano.", slots: six(
      "Ja uczę się włoskiego.", "Ty uczysz się włoskiego.", "On uczy się włoskiego.",
      "My uczymy się włoskiego.", "Wy uczycie się włoskiego.", "Oni uczą się włoskiego."
    ) },
    { verbId: "prendere", after: "l'autobus.", slots: six(
      "Ja biorę autobus.", "Ty bierzesz autobus.", "On bierze autobus.",
      "My bierzemy autobus.", "Wy bierzecie autobus.", "Oni biorą autobus."
    ) },
    { verbId: "leggere", after: "un libro.", slots: six(
      "Ja czytam książkę.", "Ty czytasz książkę.", "On czyta książkę.",
      "My czytamy książkę.", "Wy czytacie książkę.", "Oni czytają książkę."
    ) },
    { verbId: "scrivere", after: "una mail.", slots: six(
      "Ja piszę maila.", "Ty piszesz maila.", "On pisze maila.",
      "My piszemy maila.", "Wy piszecie maila.", "Oni piszą maila."
    ) },
    { verbId: "vivere", after: "in Polonia.", slots: six(
      "Ja żyję w Polsce.", "Ty żyjesz w Polsce.", "On żyje w Polsce.",
      "My żyjemy w Polsce.", "Wy żyjecie w Polsce.", "Oni żyją w Polsce."
    ) },
    { verbId: "mettere", after: "il cappotto.", slots: six(
      "Ja wkładam płaszcz.", "Ty wkładasz płaszcz.", "On wkłada płaszcz.",
      "My wkładamy płaszcz.", "Wy wkładacie płaszcz.", "Oni wkładają płaszcz."
    ) },
    { verbId: "vedere", after: "il mare.", slots: six(
      "Ja widzę morze.", "Ty widzisz morze.", "On widzi morze.",
      "My widzimy morze.", "Wy widzicie morze.", "Oni widzą morze."
    ) },
    { verbId: "chiudere", after: "la porta.", slots: six(
      "Ja zamykam drzwi.", "Ty zamykasz drzwi.", "On zamyka drzwi.",
      "My zamykamy drzwi.", "Wy zamykacie drzwi.", "Oni zamykają drzwi."
    ) },
    { verbId: "conoscere", after: "Roma.", slots: six(
      "Ja znam Rzym.", "Ty znasz Rzym.", "On zna Rzym.",
      "My znamy Rzym.", "Wy znacie Rzym.", "Oni znają Rzym."
    ) },
    { verbId: "dormire", after: "bene.", slots: six(
      "Ja śpię dobrze.", "Ty śpisz dobrze.", "On śpi dobrze.",
      "My śpimy dobrze.", "Wy śpicie dobrze.", "Oni śpią dobrze."
    ) },
    { verbId: "partire", after: "domani.", slots: six(
      "Ja wyjeżdżam jutro.", "Ty wyjeżdżasz jutro.", "On wyjeżdża jutro.",
      "My wyjeżdżamy jutro.", "Wy wyjeżdżacie jutro.", "Oni wyjeżdżają jutro."
    ) },
    { verbId: "aprire", after: "la finestra.", slots: six(
      "Ja otwieram okno.", "Ty otwierasz okno.", "On otwiera okno.",
      "My otwieramy okno.", "Wy otwieracie okno.", "Oni otwierają okno."
    ) },
    { verbId: "sentire", after: "un rumore.", slots: six(
      "Ja słyszę hałas.", "Ty słyszysz hałas.", "On słyszy hałas.",
      "My słyszymy hałas.", "Wy słyszycie hałas.", "Oni słyszą hałas."
    ) },
    { verbId: "finire", after: "il lavoro.", slots: six(
      "Ja kończę pracę.", "Ty kończysz pracę.", "On kończy pracę.",
      "My kończymy pracę.", "Wy kończycie pracę.", "Oni kończą pracę."
    ) },
    { verbId: "capire", after: "la domanda.", slots: six(
      "Ja rozumiem pytanie.", "Ty rozumiesz pytanie.", "On rozumie pytanie.",
      "My rozumiemy pytanie.", "Wy rozumiecie pytanie.", "Oni rozumieją pytanie."
    ) },
    { verbId: "preferire", after: "la pasta.", slots: six(
      "Ja wolę pastę.", "Ty wolisz pastę.", "On woli pastę.",
      "My wolimy pastę.", "Wy wolicie pastę.", "Oni wolą pastę."
    ) },
    { verbId: "pulire", after: "la cucina.", slots: six(
      "Ja sprzątam kuchnię.", "Ty sprzątasz kuchnię.", "On sprząta kuchnię.",
      "My sprzątamy kuchnię.", "Wy sprzątacie kuchnię.", "Oni sprzątają kuchnię."
    ) },
    { verbId: "dovere", after: "andare.", slots: six(
      "Ja muszę iść.", "Ty musisz iść.", "On musi iść.",
      "My musimy iść.", "Wy musicie iść.", "Oni muszą iść."
    ) },
    { verbId: "potere", after: "aiutare.", slots: six(
      "Ja mogę pomóc.", "Ty możesz pomóc.", "On może pomóc.",
      "My możemy pomóc.", "Wy możecie pomóc.", "Oni mogą pomóc."
    ) },
    { verbId: "volere", after: "un gelato.", slots: six(
      "Ja chcę lody.", "Ty chcesz lody.", "On chce lody.",
      "My chcemy lody.", "Wy chcecie lody.", "Oni chcą lody."
    ) },
    { verbId: "dare", after: "un regalo.", slots: six(
      "Ja daję prezent.", "Ty dajesz prezent.", "On daje prezent.",
      "My dajemy prezent.", "Wy dajecie prezent.", "Oni dają prezent."
    ) },
    { verbId: "dire", after: "di no.", slots: six(
      "Ja mówię, że nie.", "Ty mówisz, że nie.", "On mówi, że nie.",
      "My mówimy, że nie.", "Wy mówicie, że nie.", "Oni mówią, że nie."
    ) },
    { verbId: "bere", after: "l'acqua.", slots: six(
      "Ja piję wodę.", "Ty pijesz wodę.", "On pije wodę.",
      "My pijemy wodę.", "Wy pijecie wodę.", "Oni piją wodę."
    ) },
    { verbId: "uscire", after: "di casa.", slots: six(
      "Ja wychodzę z domu.", "Ty wychodzisz z domu.", "On wychodzi z domu.",
      "My wychodzimy z domu.", "Wy wychodzicie z domu.", "Oni wychodzą z domu."
    ) },
    { verbId: "venire", after: "a cena.", slots: six(
      "Ja przychodzę na kolację.", "Ty przychodzisz na kolację.", "On przychodzi na kolację.",
      "My przychodzimy na kolację.", "Wy przychodzicie na kolację.", "Oni przychodzą na kolację."
    ) },
    { verbId: "sapere", after: "nuotare.", slots: six(
      "Ja umiem pływać.", "Ty umiesz pływać.", "On umie pływać.",
      "My umiemy pływać.", "Wy umiecie pływać.", "Oni umieją pływać."
    ) },
    {
      verbId: "chiamarsi",
      after: "Marco.",
      slots: [
        { personId: "io", pl: "Ja nazywam się Marco.", before: "Io" },
        { personId: "tu", pl: "Ty nazywasz się Marco.", before: "Tu" },
        { personId: "lui", pl: "On nazywa się Marco.", before: "Lui" },
        { personId: "noi", pl: "My nazywamy się Rossi.", before: "Noi", after: "Rossi." },
        { personId: "voi", pl: "Wy nazywacie się Rossi.", before: "Voi", after: "Rossi." },
        { personId: "loro", pl: "Oni nazywają się Rossi.", before: "Loro", after: "Rossi." },
      ],
    },
    {
      verbId: "piacere",
      after: "questo film.",
      slots: [
        { personId: "io-sg", pl: "Podoba mi się ten film.", before: "" },
        { personId: "tu-sg", pl: "Podoba ci się ten film.", before: "" },
        { personId: "lui-sg", pl: "Podoba mu się ten film.", before: "" },
        { personId: "lei-sg", pl: "Podoba jej się ten film.", before: "" },
        { personId: "noi-sg", pl: "Podoba nam się ten film.", before: "" },
        { personId: "voi-sg", pl: "Podoba wam się ten film.", before: "" },
        { personId: "loro-sg", pl: "Podoba im się ten film.", before: "" },
        { personId: "io-pl", pl: "Podobają mi się te filmy.", before: "", after: "questi film." },
      ],
    },
    {
      verbId: "esserci",
      slots: [
        { personId: "sg", pl: "W lodówce jest mleko.", before: "Nel frigo", after: "il latte." },
        { personId: "pl", pl: "W lodówce są jajka.", before: "Nel frigo", after: "le uova." },
      ],
    },
    {
      verbId: "vorrei",
      after: "un gelato.",
      slots: [
        { personId: "io", pl: "Ja chciałbym lody.", before: "Io" },
      ],
    },
  ];

  const MORE = [
    scene("essere", "b", "in Italia.",
      "Ja jestem we Włoszech.", "Ty jesteś we Włoszech.", "On jest we Włoszech.",
      "My jesteśmy we Włoszech.", "Wy jesteście we Włoszech.", "Oni są we Włoszech."),
    scene("essere", "c", "qui.",
      "Ja jestem tutaj.", "Ty jesteś tutaj.", "On jest tutaj.",
      "My jesteśmy tutaj.", "Wy jesteście tutaj.", "Oni są tutaj."),
    scene("avere", "b", "una bici.",
      "Ja mam rower.", "Ty masz rower.", "On ma rower.",
      "My mamy rower.", "Wy macie rower.", "Oni mają rower."),
    scene("avere", "c", "un gatto.",
      "Ja mam kota.", "Ty masz kota.", "On ma kota.",
      "My mamy kota.", "Wy macie kota.", "Oni mają kota."),
    scene("parlare", "b", "italiano.",
      "Ja rozmawiam po włosku.", "Ty rozmawiasz po włosku.", "On rozmawia po włosku.",
      "My rozmawiamy po włosku.", "Wy rozmawiacie po włosku.", "Oni rozmawiają po włosku."),
    scene("parlare", "c", "di sport.",
      "Ja rozmawiam o sporcie.", "Ty rozmawiasz o sporcie.", "On rozmawia o sporcie.",
      "My rozmawiamy o sporcie.", "Wy rozmawiacie o sporcie.", "Oni rozmawiają o sporcie."),
    scene("abitare", "b", "in centro.",
      "Ja mieszkam w centrum.", "Ty mieszkasz w centrum.", "On mieszka w centrum.",
      "My mieszkamy w centrum.", "Wy mieszkacie w centrum.", "Oni mieszkają w centrum."),
    scene("abitare", "c", "con Marco.",
      "Ja mieszkam z Marco.", "Ty mieszkasz z Marco.", "On mieszka z Marco.",
      "My mieszkamy z Marco.", "Wy mieszkacie z Marco.", "Oni mieszkają z Marco."),
    scene("lavorare", "b", "in un bar.",
      "Ja pracuję w barze.", "Ty pracujesz w barze.", "On pracuje w barze.",
      "My pracujemy w barze.", "Wy pracujecie w barze.", "Oni pracują w barze."),
    scene("lavorare", "c", "molto.",
      "Ja pracuję dużo.", "Ty pracujesz dużo.", "On pracuje dużo.",
      "My pracujemy dużo.", "Wy pracujecie dużo.", "Oni pracują dużo."),
    scene("ascoltare", "b", "la radio.",
      "Ja słucham radia.", "Ty słuchasz radia.", "On słucha radia.",
      "My słuchamy radia.", "Wy słuchacie radia.", "Oni słuchają radia."),
    scene("ascoltare", "c", "la lezione.",
      "Ja słucham lekcji.", "Ty słuchasz lekcji.", "On słucha lekcji.",
      "My słuchamy lekcji.", "Wy słuchacie lekcji.", "Oni słuchają lekcji."),
    scene("arrivare", "b", "tardi.",
      "Ja przyjeżdżam późno.", "Ty przyjeżdżasz późno.", "On przyjeżdża późno.",
      "My przyjeżdżamy późno.", "Wy przyjeżdżacie późno.", "Oni przyjeżdżają późno."),
    scene("arrivare", "c", "in stazione.",
      "Ja przyjeżdżam na dworzec.", "Ty przyjeżdżasz na dworzec.", "On przyjeżdża na dworzec.",
      "My przyjeżdżamy na dworzec.", "Wy przyjeżdżacie na dworzec.", "Oni przyjeżdżają na dworzec."),
    scene("chiamare", "b", "un taxi.",
      "Ja dzwonię po taksówkę.", "Ty dzwonisz po taksówkę.", "On dzwoni po taksówkę.",
      "My dzwonimy po taksówkę.", "Wy dzwonicie po taksówkę.", "Oni dzwonią po taksówkę."),
    scene("chiamare", "c", "Marco.",
      "Ja wołam Marco.", "Ty wołasz Marco.", "On woła Marco.",
      "My wołamy Marco.", "Wy wołacie Marco.", "Oni wołają Marco."),
    scene("comprare", "b", "un biglietto.",
      "Ja kupuję bilet.", "Ty kupujesz bilet.", "On kupuje bilet.",
      "My kupujemy bilet.", "Wy kupujecie bilet.", "Oni kupują bilet."),
    scene("comprare", "c", "la frutta.",
      "Ja kupuję owoce.", "Ty kupujesz owoce.", "On kupuje owoce.",
      "My kupujemy owoce.", "Wy kupujecie owoce.", "Oni kupują owoce."),
    scene("giocare", "b", "a calcio.",
      "Ja gram w piłkę.", "Ty grasz w piłkę.", "On gra w piłkę.",
      "My gramy w piłkę.", "Wy gracie w piłkę.", "Oni grają w piłkę."),
    scene("giocare", "c", "a carte.",
      "Ja gram w karty.", "Ty grasz w karty.", "On gra w karty.",
      "My gramy w karty.", "Wy gracie w karty.", "Oni grają w karty."),
    scene("pensare", "b", "al lavoro.",
      "Ja myślę o pracy.", "Ty myślisz o pracy.", "On myśli o pracy.",
      "My myślimy o pracy.", "Wy myślicie o pracy.", "Oni myślą o pracy."),
    scene("pensare", "c", "spesso.",
      "Ja często myślę.", "Ty często myślisz.", "On często myśli.",
      "My często myślimy.", "Wy często myślicie.", "Oni często myślą."),
    scene("andare", "b", "al bar.",
      "Ja idę do baru.", "Ty idziesz do baru.", "On idzie do baru.",
      "My idziemy do baru.", "Wy idziecie do baru.", "Oni idą do baru."),
    scene("andare", "c", "a piedi.",
      "Ja idę pieszo.", "Ty idziesz pieszo.", "On idzie pieszo.",
      "My idziemy pieszo.", "Wy idziecie pieszo.", "Oni idą pieszo."),
    scene("fare", "b", "una pausa.",
      "Ja robię przerwę.", "Ty robisz przerwę.", "On robi przerwę.",
      "My robimy przerwę.", "Wy robicie przerwę.", "Oni robią przerwę."),
    scene("fare", "c", "la spesa.",
      "Ja robię zakupy.", "Ty robisz zakupy.", "On robi zakupy.",
      "My robimy zakupy.", "Wy robicie zakupy.", "Oni robią zakupy."),
    scene("stare", "b", "a casa.",
      "Ja zostaję w domu.", "Ty zostajesz w domu.", "On zostaje w domu.",
      "My zostajemy w domu.", "Wy zostajecie w domu.", "Oni zostają w domu."),
    scene("stare", "c", "male.",
      "Ja mam się źle.", "Ty masz się źle.", "On ma się źle.",
      "My mamy się źle.", "Wy macie się źle.", "Oni mają się źle."),
    scene("mangiare", "b", "la pasta.",
      "Ja jem makaron.", "Ty jesz makaron.", "On je makaron.",
      "My jemy makaron.", "Wy jecie makaron.", "Oni jedzą makaron."),
    scene("mangiare", "c", "in centro.",
      "Ja jem w centrum.", "Ty jesz w centrum.", "On je w centrum.",
      "My jemy w centrum.", "Wy jecie w centrum.", "Oni jedzą w centrum."),
    scene("cominciare", "b", "alle nove.",
      "Ja zaczynam o dziewiątej.", "Ty zaczynasz o dziewiątej.", "On zaczyna o dziewiątej.",
      "My zaczynamy o dziewiątej.", "Wy zaczynacie o dziewiątej.", "Oni zaczynają o dziewiątej."),
    scene("cominciare", "c", "adesso.",
      "Ja zaczynam teraz.", "Ty zaczynasz teraz.", "On zaczyna teraz.",
      "My zaczynamy teraz.", "Wy zaczynacie teraz.", "Oni zaczynają teraz."),
    scene("pagare", "b", "in contanti.",
      "Ja płacę gotówką.", "Ty płacisz gotówką.", "On płaci gotówką.",
      "My płacimy gotówką.", "Wy płacicie gotówką.", "Oni płacą gotówką."),
    scene("pagare", "c", "con la carta.",
      "Ja płacę kartą.", "Ty płacisz kartą.", "On płaci kartą.",
      "My płacimy kartą.", "Wy płacicie kartą.", "Oni płacą kartą."),
    scene("cercare", "b", "un lavoro.",
      "Ja szukam pracy.", "Ty szukasz pracy.", "On szuka pracy.",
      "My szukamy pracy.", "Wy szukacie pracy.", "Oni szukają pracy."),
    scene("cercare", "c", "un hotel.",
      "Ja szukam hotelu.", "Ty szukasz hotelu.", "On szuka hotelu.",
      "My szukamy hotelu.", "Wy szukacie hotelu.", "Oni szukają hotelu."),
    scene("studiare", "b", "medicina.",
      "Ja uczę się medycyny.", "Ty uczysz się medycyny.", "On uczy się medycyny.",
      "My uczymy się medycyny.", "Wy uczycie się medycyny.", "Oni uczą się medycyny."),
    scene("studiare", "c", "ogni giorno.",
      "Ja uczę się codziennie.", "Ty uczysz się codziennie.", "On uczy się codziennie.",
      "My uczymy się codziennie.", "Wy uczycie się codziennie.", "Oni uczą się codziennie."),
    scene("prendere", "b", "un succo.",
      "Ja biorę sok.", "Ty bierzesz sok.", "On bierze sok.",
      "My bierzemy sok.", "Wy bierzecie sok.", "Oni biorą sok."),
    scene("prendere", "c", "il treno.",
      "Ja biorę pociąg.", "Ty bierzesz pociąg.", "On bierze pociąg.",
      "My bierzemy pociąg.", "Wy bierzecie pociąg.", "Oni biorą pociąg."),
    scene("leggere", "b", "il giornale.",
      "Ja czytam gazetę.", "Ty czytasz gazetę.", "On czyta gazetę.",
      "My czytamy gazetę.", "Wy czytacie gazetę.", "Oni czytają gazetę."),
    scene("leggere", "c", "una rivista.",
      "Ja czytam czasopismo.", "Ty czytasz czasopismo.", "On czyta czasopismo.",
      "My czytamy czasopismo.", "Wy czytacie czasopismo.", "Oni czytają czasopismo."),
    scene("scrivere", "b", "un messaggio.",
      "Ja piszę wiadomość.", "Ty piszesz wiadomość.", "On pisze wiadomość.",
      "My piszemy wiadomość.", "Wy piszecie wiadomość.", "Oni piszą wiadomość."),
    scene("scrivere", "c", "a Marco.",
      "Ja piszę do Marco.", "Ty piszesz do Marco.", "On pisze do Marco.",
      "My piszemy do Marco.", "Wy piszecie do Marco.", "Oni piszą do Marco."),
    scene("vivere", "b", "al mare.",
      "Ja żyję nad morzem.", "Ty żyjesz nad morzem.", "On żyje nad morzem.",
      "My żyjemy nad morzem.", "Wy żyjecie nad morzem.", "Oni żyją nad morzem."),
    scene("vivere", "c", "qui.",
      "Ja żyję tutaj.", "Ty żyjesz tutaj.", "On żyje tutaj.",
      "My żyjemy tutaj.", "Wy żyjecie tutaj.", "Oni żyją tutaj."),
    scene("mettere", "b", "le scarpe.",
      "Ja wkładam buty.", "Ty wkładasz buty.", "On wkłada buty.",
      "My wkładamy buty.", "Wy wkładacie buty.", "Oni wkładają buty."),
    scene("mettere", "c", "il sale.",
      "Ja dodaję sól.", "Ty dodajesz sól.", "On dodaje sól.",
      "My dodajemy sól.", "Wy dodajecie sól.", "Oni dodają sól."),
    scene("vedere", "b", "un film.",
      "Ja oglądam film.", "Ty oglądasz film.", "On ogląda film.",
      "My oglądamy film.", "Wy oglądacie film.", "Oni oglądają film."),
    scene("vedere", "c", "Luca.",
      "Ja widzę Lukę.", "Ty widzisz Lukę.", "On widzi Lukę.",
      "My widzimy Lukę.", "Wy widzicie Lukę.", "Oni widzą Lukę."),
    scene("chiudere", "b", "la finestra.",
      "Ja zamykam okno.", "Ty zamykasz okno.", "On zamyka okno.",
      "My zamykamy okno.", "Wy zamykacie okno.", "Oni zamykają okno."),
    scene("chiudere", "c", "il negozio.",
      "Ja zamykam sklep.", "Ty zamykasz sklep.", "On zamyka sklep.",
      "My zamykamy sklep.", "Wy zamykacie sklep.", "Oni zamykają sklep."),
    scene("conoscere", "b", "Anna.",
      "Ja znam Annę.", "Ty znasz Annę.", "On zna Annę.",
      "My znamy Annę.", "Wy znacie Annę.", "Oni znają Annę."),
    scene("conoscere", "c", "un posto.",
      "Ja znam jedno miejsce.", "Ty znasz jedno miejsce.", "On zna jedno miejsce.",
      "My znamy jedno miejsce.", "Wy znacie jedno miejsce.", "Oni znają jedno miejsce."),
    scene("dormire", "b", "poco.",
      "Ja śpię mało.", "Ty śpisz mało.", "On śpi mało.",
      "My śpimy mało.", "Wy śpicie mało.", "Oni śpią mało."),
    scene("dormire", "c", "otto ore.",
      "Ja śpię osiem godzin.", "Ty śpisz osiem godzin.", "On śpi osiem godzin.",
      "My śpimy osiem godzin.", "Wy śpicie osiem godzin.", "Oni śpią osiem godzin."),
    scene("partire", "b", "alle sei.",
      "Ja wyjeżdżam o szóstej.", "Ty wyjeżdżasz o szóstej.", "On wyjeżdża o szóstej.",
      "My wyjeżdżamy o szóstej.", "Wy wyjeżdżacie o szóstej.", "Oni wyjeżdżają o szóstej."),
    scene("partire", "c", "per Milano.",
      "Ja wyjeżdżam do Mediolanu.", "Ty wyjeżdżasz do Mediolanu.", "On wyjeżdża do Mediolanu.",
      "My wyjeżdżamy do Mediolanu.", "Wy wyjeżdżacie do Mediolanu.", "Oni wyjeżdżają do Mediolanu."),
    scene("aprire", "b", "la porta.",
      "Ja otwieram drzwi.", "Ty otwierasz drzwi.", "On otwiera drzwi.",
      "My otwieramy drzwi.", "Wy otwieracie drzwi.", "Oni otwierają drzwi."),
    scene("aprire", "c", "il negozio.",
      "Ja otwieram sklep.", "Ty otwierasz sklep.", "On otwiera sklep.",
      "My otwieramy sklep.", "Wy otwieracie sklep.", "Oni otwierają sklep."),
    scene("sentire", "b", "la musica.",
      "Ja słyszę muzykę.", "Ty słyszysz muzykę.", "On słyszy muzykę.",
      "My słyszymy muzykę.", "Wy słyszycie muzykę.", "Oni słyszą muzykę."),
    scene("sentire", "c", "freddo.",
      "Ja czuję zimno.", "Ty czujesz zimno.", "On czuje zimno.",
      "My czujemy zimno.", "Wy czujecie zimno.", "Oni czują zimno."),
    scene("finire", "b", "alle cinque.",
      "Ja kończę o piątej.", "Ty kończysz o piątej.", "On kończy o piątej.",
      "My kończymy o piątej.", "Wy kończycie o piątej.", "Oni kończą o piątej."),
    scene("finire", "c", "presto.",
      "Ja kończę wcześnie.", "Ty kończysz wcześnie.", "On kończy wcześnie.",
      "My kończymy wcześnie.", "Wy kończycie wcześnie.", "Oni kończą wcześnie."),
    scene("capire", "b", "tutto.",
      "Ja rozumiem wszystko.", "Ty rozumiesz wszystko.", "On rozumie wszystko.",
      "My rozumiemy wszystko.", "Wy rozumiecie wszystko.", "Oni rozumieją wszystko."),
    scene("capire", "c", "l'italiano.",
      "Ja rozumiem włoski.", "Ty rozumiesz włoski.", "On rozumie włoski.",
      "My rozumiemy włoski.", "Wy rozumiecie włoski.", "Oni rozumieją włoski."),
    scene("preferire", "b", "il treno.",
      "Ja wolę pociąg.", "Ty wolisz pociąg.", "On woli pociąg.",
      "My wolimy pociąg.", "Wy wolicie pociąg.", "Oni wolą pociąg."),
    scene("preferire", "c", "restare a casa.",
      "Ja wolę zostać w domu.", "Ty wolisz zostać w domu.", "On woli zostać w domu.",
      "My wolimy zostać w domu.", "Wy wolicie zostać w domu.", "Oni wolą zostać w domu."),
    scene("pulire", "b", "la casa.",
      "Ja sprzątam dom.", "Ty sprzątasz dom.", "On sprząta dom.",
      "My sprzątamy dom.", "Wy sprzątacie dom.", "Oni sprzątają dom."),
    scene("pulire", "c", "il bagno.",
      "Ja sprzątam łazienkę.", "Ty sprzątasz łazienkę.", "On sprząta łazienkę.",
      "My sprzątamy łazienkę.", "Wy sprzątacie łazienkę.", "Oni sprzątają łazienkę."),
    scene("dovere", "b", "studiare.",
      "Ja muszę się uczyć.", "Ty musisz się uczyć.", "On musi się uczyć.",
      "My musimy się uczyć.", "Wy musicie się uczyć.", "Oni muszą się uczyć."),
    scene("dovere", "c", "lavorare.",
      "Ja muszę pracować.", "Ty musisz pracować.", "On musi pracować.",
      "My musimy pracować.", "Wy musicie pracować.", "Oni muszą pracować."),
    scene("potere", "b", "entrare.",
      "Ja mogę wejść.", "Ty możesz wejść.", "On może wejść.",
      "My możemy wejść.", "Wy możecie wejść.", "Oni mogą wejść."),
    scene("potere", "c", "venire.",
      "Ja mogę przyjść.", "Ty możesz przyjść.", "On może przyjść.",
      "My możemy przyjść.", "Wy możecie przyjść.", "Oni mogą przyjść."),
    scene("volere", "b", "un libro.",
      "Ja chcę książkę.", "Ty chcesz książkę.", "On chce książkę.",
      "My chcemy książkę.", "Wy chcecie książkę.", "Oni chcą książkę."),
    scene("volere", "c", "dormire.",
      "Ja chcę spać.", "Ty chcesz spać.", "On chce spać.",
      "My chcemy spać.", "Wy chcecie spać.", "Oni chcą spać."),
    scene("dare", "b", "un fiore.",
      "Ja daję kwiat.", "Ty dajesz kwiat.", "On daje kwiat.",
      "My dajemy kwiat.", "Wy dajecie kwiat.", "Oni dają kwiat."),
    scene("dare", "c", "il numero.",
      "Ja podaję numer.", "Ty podajesz numer.", "On podaje numer.",
      "My podajemy numer.", "Wy podajecie numer.", "Oni podają numer."),
    scene("dire", "b", "ciao.",
      "Ja mówię cześć.", "Ty mówisz cześć.", "On mówi cześć.",
      "My mówimy cześć.", "Wy mówicie cześć.", "Oni mówią cześć."),
    scene("dire", "c", "sempre la stessa cosa.",
      "Ja zawsze mówię to samo.", "Ty zawsze mówisz to samo.", "On zawsze mówi to samo.",
      "My zawsze mówimy to samo.", "Wy zawsze mówicie to samo.", "Oni zawsze mówią to samo."),
    scene("bere", "b", "un succo.",
      "Ja piję sok.", "Ty pijesz sok.", "On pije sok.",
      "My pijemy sok.", "Wy pijecie sok.", "Oni piją sok."),
    scene("bere", "c", "il vino.",
      "Ja piję wino.", "Ty pijesz wino.", "On pije wino.",
      "My pijemy wino.", "Wy pijecie wino.", "Oni piją wino."),
    scene("uscire", "b", "con gli amici.",
      "Ja wychodzę ze znajomymi.", "Ty wychodzisz ze znajomymi.", "On wychodzi ze znajomymi.",
      "My wychodzimy ze znajomymi.", "Wy wychodzicie ze znajomymi.", "Oni wychodzą ze znajomymi."),
    scene("uscire", "c", "stasera.",
      "Ja wychodzę dziś wieczorem.", "Ty wychodzisz dziś wieczorem.", "On wychodzi dziś wieczorem.",
      "My wychodzimy dziś wieczorem.", "Wy wychodzicie dziś wieczorem.", "Oni wychodzą dziś wieczorem."),
    scene("venire", "b", "subito.",
      "Ja przychodzę od razu.", "Ty przychodzisz od razu.", "On przychodzi od razu.",
      "My przychodzimy od razu.", "Wy przychodzicie od razu.", "Oni przychodzą od razu."),
    scene("venire", "c", "in bici.",
      "Ja przyjeżdżam rowerem.", "Ty przyjeżdżasz rowerem.", "On przyjeżdża rowerem.",
      "My przyjeżdżamy rowerem.", "Wy przyjeżdżacie rowerem.", "Oni przyjeżdżają rowerem."),
    scene("sapere", "b", "cucinare.",
      "Ja umiem gotować.", "Ty umiesz gotować.", "On umie gotować.",
      "My umiemy gotować.", "Wy umiecie gotować.", "Oni umieją gotować."),
    scene("sapere", "c", "guidare.",
      "Ja umiem prowadzić.", "Ty umiesz prowadzić.", "On umie prowadzić.",
      "My umiemy prowadzić.", "Wy umiecie prowadzić.", "Oni umieją prowadzić."),
    {
      verbId: "chiamarsi",
      id: "b",
      after: "Giulia.",
      slots: [
        { personId: "io", pl: "Ja nazywam się Giulia.", before: "Io" },
        { personId: "tu", pl: "Ty nazywasz się Giulia.", before: "Tu" },
        { personId: "lui", pl: "On nazywa się Giulia.", before: "Lui" },
        { personId: "noi", pl: "My nazywamy się Bianchi.", before: "Noi", after: "Bianchi." },
        { personId: "voi", pl: "Wy nazywacie się Bianchi.", before: "Voi", after: "Bianchi." },
        { personId: "loro", pl: "Oni nazywają się Bianchi.", before: "Loro", after: "Bianchi." },
      ],
    },
    {
      verbId: "chiamarsi",
      id: "c",
      after: "Anna.",
      slots: [
        { personId: "io", pl: "Ja nazywam się Anna.", before: "Io" },
        { personId: "tu", pl: "Ty nazywasz się Anna.", before: "Tu" },
        { personId: "lui", pl: "On nazywa się Anna.", before: "Lui" },
        { personId: "noi", pl: "My nazywamy się Costa.", before: "Noi", after: "Costa." },
        { personId: "voi", pl: "Wy nazywacie się Costa.", before: "Voi", after: "Costa." },
        { personId: "loro", pl: "Oni nazywają się Costa.", before: "Loro", after: "Costa." },
      ],
    },
    {
      verbId: "piacere",
      id: "b",
      after: "questa pizza.",
      slots: [
        { personId: "io-sg", pl: "Podoba mi się ta pizza.", before: "" },
        { personId: "tu-sg", pl: "Podoba ci się ta pizza.", before: "" },
        { personId: "lui-sg", pl: "Podoba mu się ta pizza.", before: "" },
        { personId: "lei-sg", pl: "Podoba jej się ta pizza.", before: "" },
        { personId: "noi-sg", pl: "Podoba nam się ta pizza.", before: "" },
        { personId: "voi-sg", pl: "Podoba wam się ta pizza.", before: "" },
        { personId: "loro-sg", pl: "Podoba im się ta pizza.", before: "" },
        { personId: "io-pl", pl: "Podobają mi się te pizze.", before: "", after: "queste pizze." },
      ],
    },
    {
      verbId: "piacere",
      id: "c",
      after: "questo libro.",
      slots: [
        { personId: "io-sg", pl: "Podoba mi się ta książka.", before: "" },
        { personId: "tu-sg", pl: "Podoba ci się ta książka.", before: "" },
        { personId: "lui-sg", pl: "Podoba mu się ta książka.", before: "" },
        { personId: "lei-sg", pl: "Podoba jej się ta książka.", before: "" },
        { personId: "noi-sg", pl: "Podoba nam się ta książka.", before: "" },
        { personId: "voi-sg", pl: "Podoba wam się ta książka.", before: "" },
        { personId: "loro-sg", pl: "Podoba im się ta książka.", before: "" },
        { personId: "io-pl", pl: "Podobają mi się te książki.", before: "", after: "questi libri." },
      ],
    },
    {
      verbId: "esserci",
      id: "b",
      slots: [
        { personId: "sg", pl: "W kuchni jest chleb.", before: "In cucina", after: "il pane." },
        { personId: "pl", pl: "W kuchni są talerze.", before: "In cucina", after: "i piatti." },
      ],
    },
    {
      verbId: "esserci",
      id: "c",
      slots: [
        { personId: "sg", pl: "W barze jest stolik.", before: "Al bar", after: "un tavolo." },
        { personId: "pl", pl: "W barze są dwa krzesła.", before: "Al bar", after: "due sedie." },
      ],
    },
    {
      verbId: "vorrei",
      id: "b",
      after: "un libro.",
      slots: [{ personId: "io", pl: "Ja chciałbym książkę.", before: "Io" }],
    },
    {
      verbId: "vorrei",
      id: "c",
      after: "un succo.",
      slots: [{ personId: "io", pl: "Ja chciałbym sok.", before: "Io" }],
    },
  ];

  const covered = {};
  const cards = [];
  const seenIds = {};
  FRAMES.concat(MORE).forEach(function (frame) {
    const verb = DATA.VERBS.find(function (item) { return item.id === frame.verbId; });
    if (!verb) throw new Error("Brak czasownika " + frame.verbId);
    covered[frame.verbId] = (covered[frame.verbId] || 0) + 1;
    frame.slots.forEach(function (slot) {
      const source = DATA.CARDS.find(function (card) {
        return card.id === frame.verbId + ":" + slot.personId;
      });
      if (!source) throw new Error("Brak karty " + frame.verbId + ":" + slot.personId);
      const answer = source.answers[0];
      const before = slot.before || "";
      const after = slot.after || frame.after || "";
      const full = [before, answer, after].filter(Boolean).join(" ");
      const id = "sent:" + frame.verbId + ":" + slot.personId + (frame.id ? ":" + frame.id : "");
      if (seenIds[id]) throw new Error("Podwójna karta " + id);
      seenIds[id] = true;
      const surface = before + " " + after + " " + slot.pl;
      if (/[àèéìòù]/.test(surface)) throw new Error("Akcent w ramce " + id + ": " + surface);
      cards.push({
        id: id,
        sentence: true,
        verbId: frame.verbId,
        group: verb.group,
        personId: slot.personId,
        weight: source.weight,
        plSentence: slot.pl,
        itBefore: before,
        itAfter: after,
        answers: [answer],
        full: full,
        why: source.why + " Czasownik: " + verb.infinitive + " (" + verb.pl + ").",
        infinitive: verb.infinitive,
        pl: verb.pl,
      });
    });
  });

  DATA.VERBS.forEach(function (verb) {
    if (!covered[verb.id]) throw new Error("Brak zdania dla " + verb.id);
    if (covered[verb.id] < 3) throw new Error("Za mało zdań dla " + verb.id + ": " + covered[verb.id]);
  });

  return { CARDS: cards };
});
