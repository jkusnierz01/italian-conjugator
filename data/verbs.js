/* Indicativo presente, poziom A1. Formy są wpisane ręcznie.
   Generator na dole tylko sprawdza regularne pozycje przy starcie. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.VERB_DATA = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  const PERSONS = {
    io: { it: "io", pl: "ja", weight: 3 },
    tu: { it: "tu", pl: "ty", weight: 3 },
    lui: { it: "lui/lei", pl: "on/ona", weight: 3, lei: true },
    noi: { it: "noi", pl: "my", weight: 3 },
    voi: { it: "voi", pl: "wy", weight: 1 },
    loro: { it: "loro", pl: "oni/one", weight: 1 },
  };

  const PERSON_IDS = ["io", "tu", "lui", "noi", "voi", "loro"];

  const ENDINGS = {
    are: { io: "o", tu: "i", lui: "a", noi: "iamo", voi: "ate", loro: "ano" },
    ere: { io: "o", tu: "i", lui: "e", noi: "iamo", voi: "ete", loro: "ono" },
    ire: { io: "o", tu: "i", lui: "e", noi: "iamo", voi: "ite", loro: "ono" },
  };

  const ENDING_WHO = {
    io: "1. os.",
    tu: "2. os.",
    lui: "3. os.",
    noi: "1. os. l.mn.",
    voi: "2. os. l.mn.",
    loro: "3. os. l.mn.",
  };

  const GROUPS = [
    {
      id: "essere-avere",
      title: "Essere i avere",
      mode: "irregular",
      intro:
        "Dwa czasowniki z każdego zdania. Formy nie wynikają z końcówki — każdą trzeba znać osobno.",
    },
    {
      id: "are",
      title: "Regularne -are",
      mode: "endings",
      conjugation: "are",
      intro:
        "Jedna reguła końcówek na całą grupę. giocare jest regularne, ale pisze się jak cercare: tu giochi, noi giochiamo.",
    },
    {
      id: "irregolari-baza",
      title: "Nieregularne dnia codziennego",
      mode: "irregular",
      intro: "andare, fare i stare. Tu nie ma reguły, która podpowie vado albo faccio.",
    },
    {
      id: "are-pisownia",
      title: "-are z pułapką pisowni",
      mode: "spelling",
      intro:
        "To wciąż regularne -are. Zmienia się tylko pisownia, żeby głoska została miękka albo żeby nie dublować i.",
    },
    {
      id: "ere",
      title: "Regularne -ere",
      mode: "endings",
      conjugation: "ere",
      intro: "Ta sama idea co przy -are, inne końcówki. vedere w czasie teraźniejszym jest regularne.",
    },
    {
      id: "ire",
      title: "-ire",
      mode: "ire",
      intro:
        "Część czasowników na -ire dostaje -isc- w czterech osobach. noi i voi zostają bez -isc-: finiamo, finite.",
    },
    {
      id: "modali",
      title: "Modalne",
      mode: "irregular",
      intro: "dovere, potere, volere. Każda forma jest osobnym faktem. U lui/lei uważaj na może: può.",
    },
    {
      id: "irregolari-reszta",
      title: "Pozostałe nieregularne",
      mode: "irregular",
      intro:
        "Reszta nieregularnych z programu A1. dà ma akcent, do go nie ma. fa, so i sa też są bez akcentu.",
    },
    {
      id: "formuly",
      title: "Formuły",
      mode: "formulas",
      intro:
        "Na A1 to gotowe kawałki, nie pełna odmiana do wkuwania: mi chiamo, mi piace, c'è, vorrei.",
    },
  ];

  function f(io, tu, lui, noi, voi, loro) {
    return { io, tu, lui, noi, voi, loro };
  }

  const VERBS = [
    {
      id: "essere",
      infinitive: "essere",
      pl: "być",
      group: "essere-avere",
      kind: "irregular",
      forms: f("sono", "sei", "è", "siamo", "siete", "sono"),
      notes: { lui: "essere: lui/lei è (z akcentem)" },
    },
    {
      id: "avere",
      infinitive: "avere",
      pl: "mieć",
      group: "essere-avere",
      kind: "irregular",
      forms: f("ho", "hai", "ha", "abbiamo", "avete", "hanno"),
    },
    {
      id: "parlare",
      infinitive: "parlare",
      pl: "mówić, rozmawiać",
      group: "are",
      kind: "regular",
      conjugation: "are",
      forms: f("parlo", "parli", "parla", "parliamo", "parlate", "parlano"),
    },
    {
      id: "abitare",
      infinitive: "abitare",
      pl: "mieszkać",
      group: "are",
      kind: "regular",
      conjugation: "are",
      forms: f("abito", "abiti", "abita", "abitiamo", "abitate", "abitano"),
    },
    {
      id: "lavorare",
      infinitive: "lavorare",
      pl: "pracować",
      group: "are",
      kind: "regular",
      conjugation: "are",
      forms: f("lavoro", "lavori", "lavora", "lavoriamo", "lavorate", "lavorano"),
    },
    {
      id: "ascoltare",
      infinitive: "ascoltare",
      pl: "słuchać",
      group: "are",
      kind: "regular",
      conjugation: "are",
      forms: f("ascolto", "ascolti", "ascolta", "ascoltiamo", "ascoltate", "ascoltano"),
    },
    {
      id: "arrivare",
      infinitive: "arrivare",
      pl: "przybywać",
      group: "are",
      kind: "regular",
      conjugation: "are",
      forms: f("arrivo", "arrivi", "arriva", "arriviamo", "arrivate", "arrivano"),
    },
    {
      id: "chiamare",
      infinitive: "chiamare",
      pl: "dzwonić, wołać",
      group: "are",
      kind: "regular",
      conjugation: "are",
      forms: f("chiamo", "chiami", "chiama", "chiamiamo", "chiamate", "chiamano"),
    },
    {
      id: "comprare",
      infinitive: "comprare",
      pl: "kupować",
      group: "are",
      kind: "regular",
      conjugation: "are",
      forms: f("compro", "compri", "compra", "compriamo", "comprate", "comprano"),
    },
    {
      id: "giocare",
      infinitive: "giocare",
      pl: "grać",
      group: "are",
      kind: "regular",
      conjugation: "are",
      forms: f("gioco", "giochi", "gioca", "giochiamo", "giocate", "giocano"),
      notes: {
        tu: "`-care`: tu giochi (`h`, żeby `c` zostało miękkie)",
        noi: "`-care`: noi giochiamo",
      },
    },
    {
      id: "pensare",
      infinitive: "pensare",
      pl: "myśleć",
      group: "are",
      kind: "regular",
      conjugation: "are",
      forms: f("penso", "pensi", "pensa", "pensiamo", "pensate", "pensano"),
    },
    {
      id: "andare",
      infinitive: "andare",
      pl: "iść, jechać",
      group: "irregolari-baza",
      kind: "irregular",
      forms: f("vado", "vai", "va", "andiamo", "andate", "vanno"),
    },
    {
      id: "fare",
      infinitive: "fare",
      pl: "robić",
      group: "irregolari-baza",
      kind: "irregular",
      forms: f("faccio", "fai", "fa", "facciamo", "fate", "fanno"),
      notes: { lui: "fare: lui/lei fa (bez akcentu)" },
    },
    {
      id: "stare",
      infinitive: "stare",
      pl: "być w stanie, zostawać",
      group: "irregolari-baza",
      kind: "irregular",
      forms: f("sto", "stai", "sta", "stiamo", "state", "stanno"),
    },
    {
      id: "mangiare",
      infinitive: "mangiare",
      pl: "jeść",
      group: "are-pisownia",
      kind: "regular",
      conjugation: "are",
      forms: f("mangio", "mangi", "mangia", "mangiamo", "mangiate", "mangiano"),
      notes: {
        tu: "`-giare`: tu mangi (jedno `i`, nie mangii)",
        noi: "`-giare`: noi mangiamo",
      },
    },
    {
      id: "cominciare",
      infinitive: "cominciare",
      pl: "zaczynać",
      group: "are-pisownia",
      kind: "regular",
      conjugation: "are",
      forms: f("comincio", "cominci", "comincia", "cominciamo", "cominciate", "cominciano"),
      notes: {
        tu: "`-ciare`: tu cominci (jedno `i`)",
        noi: "`-ciare`: noi cominciamo",
      },
    },
    {
      id: "pagare",
      infinitive: "pagare",
      pl: "płacić",
      group: "are-pisownia",
      kind: "regular",
      conjugation: "are",
      forms: f("pago", "paghi", "paga", "paghiamo", "pagate", "pagano"),
      notes: {
        tu: "`-gare`: tu paghi (`h`, żeby `g` zostało miękkie)",
        noi: "`-gare`: noi paghiamo",
      },
    },
    {
      id: "cercare",
      infinitive: "cercare",
      pl: "szukać",
      group: "are-pisownia",
      kind: "regular",
      conjugation: "are",
      forms: f("cerco", "cerchi", "cerca", "cerchiamo", "cercate", "cercano"),
      notes: {
        tu: "`-care`: tu cerchi (`h`)",
        noi: "`-care`: noi cerchiamo",
      },
    },
    {
      id: "studiare",
      infinitive: "studiare",
      pl: "uczyć się",
      group: "are-pisownia",
      kind: "regular",
      conjugation: "are",
      forms: f("studio", "studi", "studia", "studiamo", "studiate", "studiano"),
      notes: {
        io: "`-iare`: `i` zostaje → studio",
        tu: "`-iare`: tu studi (jedno `i`, nie studii)",
        noi: "`-iare`: noi studiamo",
      },
    },
    {
      id: "prendere",
      infinitive: "prendere",
      pl: "brać",
      group: "ere",
      kind: "regular",
      conjugation: "ere",
      forms: f("prendo", "prendi", "prende", "prendiamo", "prendete", "prendono"),
    },
    {
      id: "leggere",
      infinitive: "leggere",
      pl: "czytać",
      group: "ere",
      kind: "regular",
      conjugation: "ere",
      forms: f("leggo", "leggi", "legge", "leggiamo", "leggete", "leggono"),
    },
    {
      id: "scrivere",
      infinitive: "scrivere",
      pl: "pisać",
      group: "ere",
      kind: "regular",
      conjugation: "ere",
      forms: f("scrivo", "scrivi", "scrive", "scriviamo", "scrivete", "scrivono"),
    },
    {
      id: "vivere",
      infinitive: "vivere",
      pl: "żyć",
      group: "ere",
      kind: "regular",
      conjugation: "ere",
      forms: f("vivo", "vivi", "vive", "viviamo", "vivete", "vivono"),
    },
    {
      id: "mettere",
      infinitive: "mettere",
      pl: "kłaść",
      group: "ere",
      kind: "regular",
      conjugation: "ere",
      forms: f("metto", "metti", "mette", "mettiamo", "mettete", "mettono"),
    },
    {
      id: "vedere",
      infinitive: "vedere",
      pl: "widzieć",
      group: "ere",
      kind: "regular",
      conjugation: "ere",
      forms: f("vedo", "vedi", "vede", "vediamo", "vedete", "vedono"),
    },
    {
      id: "chiudere",
      infinitive: "chiudere",
      pl: "zamykać",
      group: "ere",
      kind: "regular",
      conjugation: "ere",
      forms: f("chiudo", "chiudi", "chiude", "chiudiamo", "chiudete", "chiudono"),
    },
    {
      id: "conoscere",
      infinitive: "conoscere",
      pl: "znać",
      group: "ere",
      kind: "regular",
      conjugation: "ere",
      forms: f("conosco", "conosci", "conosce", "conosciamo", "conoscete", "conoscono"),
    },
    {
      id: "dormire",
      infinitive: "dormire",
      pl: "spać",
      group: "ire",
      kind: "regular",
      conjugation: "ire",
      forms: f("dormo", "dormi", "dorme", "dormiamo", "dormite", "dormono"),
    },
    {
      id: "partire",
      infinitive: "partire",
      pl: "wyjeżdżać",
      group: "ire",
      kind: "regular",
      conjugation: "ire",
      forms: f("parto", "parti", "parte", "partiamo", "partite", "partono"),
    },
    {
      id: "aprire",
      infinitive: "aprire",
      pl: "otwierać",
      group: "ire",
      kind: "regular",
      conjugation: "ire",
      forms: f("apro", "apri", "apre", "apriamo", "aprite", "aprono"),
    },
    {
      id: "sentire",
      infinitive: "sentire",
      pl: "słyszeć, czuć",
      group: "ire",
      kind: "regular",
      conjugation: "ire",
      forms: f("sento", "senti", "sente", "sentiamo", "sentite", "sentono"),
    },
    {
      id: "finire",
      infinitive: "finire",
      pl: "kończyć",
      group: "ire",
      kind: "regular",
      conjugation: "ire",
      isc: true,
      forms: f("finisco", "finisci", "finisce", "finiamo", "finite", "finiscono"),
    },
    {
      id: "capire",
      infinitive: "capire",
      pl: "rozumieć",
      group: "ire",
      kind: "regular",
      conjugation: "ire",
      isc: true,
      forms: f("capisco", "capisci", "capisce", "capiamo", "capite", "capiscono"),
    },
    {
      id: "preferire",
      infinitive: "preferire",
      pl: "woleć",
      group: "ire",
      kind: "regular",
      conjugation: "ire",
      isc: true,
      forms: f("preferisco", "preferisci", "preferisce", "preferiamo", "preferite", "preferiscono"),
    },
    {
      id: "pulire",
      infinitive: "pulire",
      pl: "sprzątać",
      group: "ire",
      kind: "regular",
      conjugation: "ire",
      isc: true,
      forms: f("pulisco", "pulisci", "pulisce", "puliamo", "pulite", "puliscono"),
    },
    {
      id: "dovere",
      infinitive: "dovere",
      pl: "musieć",
      group: "modali",
      kind: "irregular",
      forms: f("devo", "devi", "deve", "dobbiamo", "dovete", "devono"),
    },
    {
      id: "potere",
      infinitive: "potere",
      pl: "móc",
      group: "modali",
      kind: "irregular",
      forms: f("posso", "puoi", "può", "possiamo", "potete", "possono"),
      notes: { lui: "potere: lui/lei può (z akcentem)" },
    },
    {
      id: "volere",
      infinitive: "volere",
      pl: "chcieć",
      group: "modali",
      kind: "irregular",
      forms: f("voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"),
    },
    {
      id: "dare",
      infinitive: "dare",
      pl: "dawać",
      group: "irregolari-reszta",
      kind: "irregular",
      forms: f("do", "dai", "dà", "diamo", "date", "danno"),
      notes: {
        io: "dare: io do (bez akcentu)",
        lui: "dare: lui/lei dà (z akcentem)",
      },
    },
    {
      id: "dire",
      infinitive: "dire",
      pl: "powiedzieć",
      group: "irregolari-reszta",
      kind: "irregular",
      forms: f("dico", "dici", "dice", "diciamo", "dite", "dicono"),
    },
    {
      id: "bere",
      infinitive: "bere",
      pl: "pić",
      group: "irregolari-reszta",
      kind: "irregular",
      forms: f("bevo", "bevi", "beve", "beviamo", "bevete", "bevono"),
    },
    {
      id: "uscire",
      infinitive: "uscire",
      pl: "wychodzić",
      group: "irregolari-reszta",
      kind: "irregular",
      forms: f("esco", "esci", "esce", "usciamo", "uscite", "escono"),
    },
    {
      id: "venire",
      infinitive: "venire",
      pl: "przychodzić",
      group: "irregolari-reszta",
      kind: "irregular",
      forms: f("vengo", "vieni", "viene", "veniamo", "venite", "vengono"),
    },
    {
      id: "sapere",
      infinitive: "sapere",
      pl: "wiedzieć, umieć",
      group: "irregolari-reszta",
      kind: "irregular",
      forms: f("so", "sai", "sa", "sappiamo", "sapete", "sanno"),
      notes: {
        io: "sapere: io so (bez akcentu)",
        lui: "sapere: lui/lei sa (bez akcentu)",
      },
    },
    {
      id: "chiamarsi",
      infinitive: "chiamarsi",
      pl: "nazywać się",
      group: "formuly",
      kind: "formula",
      forms: f("mi chiamo", "ti chiami", "si chiama", "ci chiamiamo", "vi chiamate", "si chiamano"),
      notes: {
        io: "Formuła: mi chiamo. Zaimek stoi osobno.",
        tu: "Formuła: ti chiami.",
        lui: "Formuła: si chiama. Lei ma tę samą formę.",
        noi: "Formuła: ci chiamiamo.",
        voi: "Formuła: vi chiamate.",
        loro: "Formuła: si chiamano.",
      },
    },
    {
      id: "piacere",
      infinitive: "piacere",
      pl: "podobać się",
      group: "formuly",
      kind: "formula",
      cards: [
        {
          id: "io-sg",
          personIt: "io",
          personPl: "mnie, jedna rzecz",
          answer: "mi piace",
          why: "To nie jest io piaccio. Jedna rzecz: mi piace.",
        },
        {
          id: "tu-sg",
          personIt: "tu",
          personPl: "tobie, jedna rzecz",
          answer: "ti piace",
          why: "Jedna rzecz: ti piace.",
        },
        {
          id: "lui-sg",
          personIt: "lui",
          personPl: "jemu, jedna rzecz",
          answer: "gli piace",
          why: "Jemu: gli piace.",
        },
        {
          id: "lei-sg",
          personIt: "lei",
          personPl: "jej, jedna rzecz",
          answer: "le piace",
          why: "Jej: le piace. Tu lei nie ma tej samej formy co lui.",
        },
        {
          id: "noi-sg",
          personIt: "noi",
          personPl: "nam, jedna rzecz",
          answer: "ci piace",
          why: "Nam: ci piace.",
        },
        {
          id: "voi-sg",
          personIt: "voi",
          personPl: "wam, jedna rzecz",
          answer: "vi piace",
          why: "Wam: vi piace.",
        },
        {
          id: "loro-sg",
          personIt: "loro",
          personPl: "im, jedna rzecz",
          answer: "gli piace",
          why: "Im: gli piace.",
        },
        {
          id: "io-pl",
          personIt: "io",
          personPl: "mnie, wiele rzeczy",
          answer: "mi piacciono",
          why: "Wiele rzeczy: mi piacciono.",
          weight: 3,
        },
      ],
    },
    {
      id: "esserci",
      infinitive: "esserci",
      pl: "być (jest / są)",
      group: "formuly",
      kind: "formula",
      cards: [
        {
          id: "sg",
          personIt: "l. poj.",
          personPl: "jedna rzecz",
          answer: "c'è",
          why: "Jedna rzecz: c'è. Akcent pada na è.",
        },
        {
          id: "pl",
          personIt: "l. mn.",
          personPl: "wiele rzeczy",
          answer: "ci sono",
          why: "Wiele rzeczy: ci sono.",
        },
      ],
    },
    {
      id: "vorrei",
      infinitive: "volere",
      pl: "chcieć, grzecznie",
      group: "formuly",
      kind: "formula",
      cards: [
        {
          id: "io",
          personIt: "io",
          personPl: "ja",
          answer: "vorrei",
          why: "Formuła grzecznościowa: vorrei. To nie jest teraźniejsze voglio.",
        },
      ],
    },
  ];

  function defaultWhy(verb, personId, form) {
    const person = PERSONS[personId];
    if (verb.notes && verb.notes[personId]) return verb.notes[personId];
    if (verb.kind === "irregular" || verb.kind === "formula") {
      return verb.infinitive + ": " + (person ? person.it : personId) + " " + form;
    }
    if (verb.isc) {
      if (personId === "noi" || personId === "voi") {
        return "`-ire` z `-isc-`: " + person.it + " bez `-isc-` → " + form;
      }
      return "`-ire` z `-isc-`: " + person.it + " " + form;
    }
    const ending = ENDINGS[verb.conjugation][personId];
    return "`-" + verb.conjugation + "`, " + ENDING_WHO[personId] + ": `-" + ending + "`";
  }

  function expandCards(verb) {
    if (verb.cards) {
      return verb.cards.map(function (card) {
        return {
          id: verb.id + ":" + card.id,
          verbId: verb.id,
          group: verb.group,
          personId: card.id,
          weight: card.weight || 3,
          infinitive: verb.infinitive,
          pl: verb.pl,
          personIt: card.personIt,
          personPl: card.personPl,
          leiNote: false,
          answers: [card.answer],
          why: card.why,
        };
      });
    }
    return PERSON_IDS.map(function (personId) {
      const person = PERSONS[personId];
      const form = verb.forms[personId];
      return {
        id: verb.id + ":" + personId,
        verbId: verb.id,
        group: verb.group,
        personId: personId,
        weight: person.weight,
        infinitive: verb.infinitive,
        pl: verb.pl,
        personIt: person.it,
        personPl: person.pl,
        leiNote: Boolean(person.lei),
        answers: [form],
        why: defaultWhy(verb, personId, form),
      };
    });
  }

  function conjugateRegular(infinitive, conjugation, isc) {
    let stem = infinitive.slice(0, -conjugation.length);
    const out = {};
    PERSON_IDS.forEach(function (personId) {
      let ending = ENDINGS[conjugation][personId];
      let current = stem;
      if (isc && (personId === "io" || personId === "tu" || personId === "lui" || personId === "loro")) {
        current += "isc";
      }
      const careGare =
        conjugation === "are" && (infinitive.endsWith("care") || infinitive.endsWith("gare"));
      if (careGare && ending.charAt(0) === "i") current += "h";
      if (current.endsWith("i") && ending.charAt(0) === "i") current = current.slice(0, -1);
      out[personId] = current + ending;
    });
    return out;
  }

  function verify() {
    const problems = [];
    VERBS.forEach(function (verb) {
      if (!verb.conjugation) return;
      const generated = conjugateRegular(verb.infinitive, verb.conjugation, Boolean(verb.isc));
      PERSON_IDS.forEach(function (personId) {
        if (verb.forms[personId] !== generated[personId]) {
          problems.push(
            verb.infinitive +
              " " +
              personId +
              ": jest " +
              verb.forms[personId] +
              ", reguła daje " +
              generated[personId]
          );
        }
      });
    });
    const chiamare = VERBS.find(function (verb) {
      return verb.id === "chiamare";
    });
    const chiamarsi = VERBS.find(function (verb) {
      return verb.id === "chiamarsi";
    });
    const clitics = { io: "mi", tu: "ti", lui: "si", noi: "ci", voi: "vi", loro: "si" };
    PERSON_IDS.forEach(function (personId) {
      const expected = clitics[personId] + " " + chiamare.forms[personId];
      if (chiamarsi.forms[personId] !== expected) {
        problems.push("chiamarsi " + personId + ": jest " + chiamarsi.forms[personId] + ", oczekiwane " + expected);
      }
    });
    return problems;
  }

  const problems = verify();
  if (problems.length) {
    throw new Error("Błędne formy:\n" + problems.join("\n"));
  }

  const CARDS = VERBS.reduce(function (list, verb) {
    return list.concat(expandCards(verb));
  }, []);

  return {
    PERSONS: PERSONS,
    PERSON_IDS: PERSON_IDS,
    ENDINGS: ENDINGS,
    ENDING_WHO: ENDING_WHO,
    GROUPS: GROUPS,
    VERBS: VERBS,
    CARDS: CARDS,
    conjugateRegular: conjugateRegular,
  };
});
