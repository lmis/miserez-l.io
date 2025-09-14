import { CONGRATULATIONS_KEY, Hint, TerminalItem } from "@/puzzle/domain-model";
import { SECRET_ANSWERS } from "@/puzzle/server/env";

const trivialAnswers = [
  ["biene", "die biene", "bienen", "die bienen"],
  ["photosynthese", "die photosynthese", "die fotosynthese", "fotosynthese"],
];
// Putting these into the env variables, so you cannot get them from GitHub.
const secretAnswers = JSON.parse(SECRET_ANSWERS) as [string][];
const answers = [...trivialAnswers, ...secretAnswers];

const questions: string[] = [
  `Entdecke die Natur - spielend Lernen!
Komm mit auf einen Spaziergang durch den Wald und lerne wie Pflanzen von Blaukraut bis Minze wachsen, warum Wasser im Kreislauf bleibt und weshalb selbst das kleinste Schwungrad der Natur wichtig ist, damit alles im Gleichgewicht bleibt.

Erstes Rätsel:
Wer summt über Wald und Wiese, bestäubt die Blüten und sorgt für fruchtige Ernte?`,
  `Genau! Die 42 4C 41 55 4Biene!
Nächste Frage:
Wie nennt man den Vorgang, bei dem Pflanzen aus Wasser, Kohlendi0x52id und Sonnenlicht ihre eigene Nahrung herstellen?`,
  `Toll! Photosynthese ist richtig.
Weiter geht's:
[Fehler: 41 55 54]
...b32(394) b32(494)?
...Typenbezeichnung[0]: COBS 'ja'
...Typenbezeichnung[1]= ??ö????
...Mikroprozessor-Info: X=80, Y=28, Z=6 
`,
  `Fehlerzustand: Kassette 2 defekt. Spule automatisch zurück zur Ausgangslage...
...
Sehr gut. Die Kassette 2 ist wieder da, wo sie Anfangs war. Von diesem Punkt aus kann's weitergehen.
...
[Fehler: Benötige Eingabe 44]
...Ablaufprotokoll:
(+1,+1) -> (-2,-2) -> (+3, +2) -> (-4, -3) -> (+2, +0)
+➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡+
⬇52|YY|F6|MB|RR|AS|44⬇
+--+--+--+--+--+--+--+
⬇80|28|NI|PK| K|WO|OL⬇
+--+--+--+--+--+--+--+
⬇KB|Z6|UQ|TE|TS|RT|RT⬇
+--+--+--+--+--+--+--+
⬇RA|RO|RU|RE|WE|SU|LL⬇
+--+--+--+--+--+--+--+
⬇K2|PO|PU|PI|PL|ST|CH⬇
+➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡+
`,
  `Nicht nur Insekten, sondern auch Arrachnoide sind wichtig für die Natur. Sie fangen Schädlinge und halten das ökologische Gleichgewicht langjährig im Feld. Wie sagt man Umgangssprachlich zu ihnen?
N) Nagjbegr
O) Zve zvg 
P) Rgjnf, qnff
Q) Evpugvt ivryr qrvare
R) Vagreangvbanyra
S) Xhzcryf zötra.
T) Nore 
U) Avpug qra
V) Rkgenoervgra!
W) Enssfg qh'f?
`,
  `Sehr gut! Spinne ist richtig.
[Fehler: 0xF6 Dies ist kein Originalgerät. Modifikation erkannt. Es verstößt gegen die Geschäftsbedingungen, Fremdteile einzubauen. B(r|l)aut?k(leid|raut)]
Teile die Typennummer des unzugelassenen Geräts mit:
`,
  `[WARNUNG: Rechenbaustein überhitzt!]
Ubssragyvpu fvaq jve hagre haf, Oynhxenhg. Vpu xbaagr qvr Cebgbxbyyr üore qvr Xähsr qre Fpurvasvezra svaqra, nore vpu tynhor, zna ung jnf orzrexg. Abpu unora fvr zvpu avpug vz Ivfvre, nore vpu mrefgöer zrvar Nofpuevsgra haq Nhsmrvpuahatra haq uvagreyrtr fvr uvre va ubssragyvpu hafpurvaonere Sbez. Snyyf vpu zvg qrz Erpuare natrunygra jreqr, ubssr vpu, zrva unezybfrf, xnchggrf Xvaqrefcvry jveq avpug jrvgre ornpugrg. Vpu gnhpur vz Fnsrubhfr nz Qäzrevgmfrr hagre ovf vue zvpu ubyra xöaag - Fpujhatenq.
AbeqGrpu, Bfyb. "Ynobegrpuavx" = Jvapurfgre-Cynggra, 30ZO. Rzcsäatre: IRO Zvxebryrxgebavx Resheg.
FjvffPbzc NT, Müevpu. "Oüebznfpuvara" = RCEBZ-Cebtenzzvrere. Rzcsäatre ZsF, Nog. 82/7, Ucg. 4.
Genaf-Vzcbeg TzoU, Unzohet. "Zrqvmvavfpur Treägr" = Vagry KLM + ENZ. Ebhgr: Jvra -> Cent. Rzcsäatre bssvmvryy Xloreargvx Vafgvghg. Erny: MSG Qerfqra
RhebQngn, Tras. "Grfgtreägr" = "Zbgbenyn ZP68000". Rzcsäatre: IRO Ebobgeba Ryrxgebavx Evrfn.
... Typennummer iAPX: ?????
`,
];

const hints: Hint[] = [
  {
    key: 0,
    number: 0,
    last: true,
    content:
      "Ihr braucht schon Hilfe beim Kinderrätsel? Dann kanns ja wild werden! Vielleicht hilft das hier.",
    link: "https://youtu.be/I1Ns-nVULzA",
  },
  {
    key: 1,
    number: 0,
    content:
      "Lasst euch erstmal nicht von der zusätzlichen Ausgabe verwirren. Beantwortet einfach die Frage.",
  },
  {
    key: 1,
    number: 1,
    last: true,
    content: "Fragt mal ChatGPT, wie Pflanzen aus Sonnenlicht Zucker machen.",
  },
  {
    key: 2,
    number: 0,
    content:
      "Die 42 4C 41 55 4B...iene ... 0x52 ... 41 55 54. Wer ist hier angesprochen?",
  },
  {
    key: 2,
    number: 1,
    content: "394 = 32 * 12 + 10. Sprich: CA in Basis 32",
  },
  {
    key: 2,
    number: 2,
    content: "BLAUKRAUT. CAFE? Was wird hier gesucht?",
  },
  {
    key: 2,
    number: 3,
    last: true,
    content: "Welcher 'Typ' Kaffee ist gemeint? COBS 'ja' ??ö????",
  },
  {
    key: 3,
    number: 0,
    content:
      "Die Kassette 2 ist wieder da, wo sie anfangs war. Wo war sie denn, bevor ihr ins Safehouse kamt?",
  },
  {
    key: 3,
    number: 1,
    content:
      "Wo hat Schwungrad die Kassette 2 zuletzt gesehen? Wo genau? Da geht der Ablauf los.",
  },
  {
    key: 3,
    number: 2,
    content:
      "Startpunkt ist WE – zweite Reihe von unten, drittes Fach von rechts.",
  },
  {
    key: 3,
    number: 3,
    last: true,
    content: "Die Pfeile geben die Richtung an.",
  },
  {
    key: 4,
    number: 0,
    content: "Wo habt ihr 'langjährig ... im Feld' schon gesehen?",
  },
  { key: 4, number: 1, content: "Agent Stoppschild. Was sieht man da?" },
  { key: 4, number: 2, content: "Rote 13 -> ROT13" },
  {
    key: 4,
    number: 3,
    content: "Wer sind die internationalen Kumpels von Blaukraut?",
  },
  {
    key: 4,
    number: 4,
    content: "Lest die Anfangsbuchstaben der Antworten von oben nach unten.",
  },
  {
    key: 4,
    number: 5,
    content:
      "Polizisten rauchen milde Sorte, denn das Leben ist schon hart genug.",
    link: "https://youtu.be/HjNXoG3_53Y",
  },
  {
    key: 4,
    number: 6,
    last: true,
    content:
      "Ihr sucht also etwas, das die Amis mögen, aber nicht die milde Sorte, die Polizisten rauchen.",
  },
  {
    key: 5,
    number: 0,
    content: "Die Regex passt zu Blaukraut und Brautkleid.",
  },
  {
    key: 5,
    number: 1,
    content:
      "Der Text über Brautkleid und Blaukraut hat im Hintergrund ein Bild.",
  },
  {
    key: 5,
    number: 2,
    content: "Was stimmt auf diesem Bild nicht mit den Texten überein?",
  },
  {
    key: 5,
    number: 3,
    last: true,
    content: "Was steht auf dem KC85/3 im Bild?",
  },
  {
    key: 6,
    number: 0,
    content: "Der Text ist nochmals in ROT13 verschlüsselt. Entschlüsselt ihn.",
  },
  {
    key: 6,
    number: 1,
    content: "Welches der Geräte ist ein iAPX? Fragt mal Google.",
  },
  {
    key: 6,
    number: 2,
    last: true,
    content: "Die Mikroprozessor-Info vom Anfang wird benötigt.",
  },
];

export const getHintContent = (key: number, number: number): Hint | null =>
  hints.find((hint) => hint.key === key && hint.number === number) ?? null;

export const getNextQuestionOrCongratulations = (key: number): TerminalItem => {
  return questions[key]
    ? {
        key: `riddle-${key}`,
        content: questions[key],
      }
    : {
        key: CONGRATULATIONS_KEY,
        content:
          "Damit habt ihr das Spiel gewonnen und so viel gelernt über fleißige Bienen und die Wege - kreuz und quer durch die Welt -, die sie gehen, um an Nektar zu kommen!",
      };
};

export const check = (key: number, input: string): boolean =>
  answers[key].some((answer) => matches(answer, input));

const matches = (answer: string, input: string) =>
  input.toLowerCase().trim() === answer.toLowerCase().trim();
