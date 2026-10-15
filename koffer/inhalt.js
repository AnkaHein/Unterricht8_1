/* ============================================================
   FUNDSTÜCKE AUS ECHTEN QUELLEN  (hier trägst DU die Texte ein)
   ------------------------------------------------------------
   Gedichte, Kafka-Text und Gemälde habe ich NICHT selbst
   eingefügt. Bitte kopiere die Texte aus einer verlässlichen,
   gemeinfreien Ausgabe (zum Beispiel Projekt Gutenberg-DE,
   Zeno.org, Wikisource) und die Bilder aus Wikimedia Commons.

   - text:  die Verse bzw. der Text. Zeilenumbruch = \n
            Bei Gedichten reichen 2 bis 6 Verse als Ausschnitt.
   - datei: Bilddatei im Ordner images/fundstuecke/
   - quelle: kurze Quellenangabe (wird klein darunter gezeigt)
   Titel, Autor und Jahr kannst du ändern.
   Mit  index.html#lehrer-koffer1914  siehst du, was noch fehlt.
   ============================================================ */
const INHALT = {
  kirchner_strasse: { kind:'bild', titel:'Berliner Straßenszene', autor:'Ernst Ludwig Kirchner', jahr:'1913/14',
    datei:'fundstuecke/kirchner-strassenszene.jpg', quelle:'' },
  stadler_rheinbruecke: { kind:'gedicht', titel:'Fahrt über die Kölner Rheinbrücke bei Nacht', autor:'Ernst Stadler', jahr:'1911',
    text:"Der Schnellzug tastet sich\nund stößt die Dunkelheit entlang.\nKein Stern will vor. Die ganze Welt ist nur ein enger,\nnachtumschienter Minengang,\nDarein zuweilen Förderstellen\nblauen Lichtes jähe Horizonte reißen: Feuerkreis\nVon Kugellampen, Dächern, Schloten,\ndampfend, strömend … nur sekundenweis …\nUnd wieder alles schwarz.\nAls führen wir ins Eingeweid der Nacht zur Schicht.\nNun taumeln Lichter her … verirrt, trostlos vereinsamt …\nmehr … und sammeln sich … und werden dicht.\nGerippe grauer Häuserfronten liegen bloß,\nim Zwielicht bleichend, tot –\netwas muß kommen … o, ich fühl es schwer\nIm Hirn. Eine Beklemmung singt im Blut.\nDann dröhnt der Boden plötzlich wie ein Meer:\nWir fliegen, aufgehoben,\nköniglich durch nachtentrissne Luft, hoch übern Strom.\nO Biegung der Millionen Lichter, stumme Wacht,\nVor deren blitzender Parade\nschwer die Wasser abwärts rollen.\nEndloses Spalier, zum Gruß gestellt bei Nacht!\nWie Fackeln stürmend! Freudiges!\nSalut von Schiffen über blauer See! Bestirntes Fest!\nWimmelnd, mit hellen Augen hingedrängt!\nBis wo die Stadt\nmit letzten Häusern ihren Gast entläßt.\nUnd dann die langen Einsamkeiten. Nackte Ufer.\nStille. Nacht. Besinnung. Einkehr. Kommunion.\nUnd Glut und Drang\nZum Letzten, Segnenden. Zum Zeugungsfest.\nZur Wollust. Zum Gebet. Zum Meer.\nZum Untergang.", quelle:'Ernst Stadler, 1911' },
  munch_schrei: { kind:'bild', titel:'Der Schrei', autor:'Edvard Munch', jahr:'1893',
    datei:'fundstuecke/munch-der-schrei.jpg', quelle:'' },
  gedicht_untergang: { kind:'gedicht', titel:'Grodek', autor:'Georg Trakl', jahr:'1914',
    text:"Am Abend tönen die herbstlichen Wälder\nVon tödlichen Waffen, die goldnen Ebenen\nUnd blauen Seen, darüber die Sonne\nDüstrer hinrollt; umfängt die Nacht\nSterbende Krieger, die wilde Klage\nIhrer zerbrochenen Münder.\nDoch stille sammelt im Weidengrund\nRotes Gewölk, darin ein zürnender Gott wohnt\nDas vergoßne Blut sich, mondne Kühle;\nAlle Straßen münden in schwarze Verwesung.\nUnter goldnem Gezweig der Nacht und Sternen\nEs schwankt der Schwester Schatten durch den schweigenden Hain,\nZu grüßen die Geister der Helden, die blutenden Häupter;\nUnd leise tönen im Rohr die dunkeln Flöten des Herbstes.\nO stolzere Trauer! ihr ehernen Altäre,\nDie heiße Flamme des Geistes nährt heute ein gewaltiger Schmerz,\nDie ungebornen Enkel.", quelle:'Georg Trakl, 1914' },
  stramm_gedicht: { kind:'gedicht', titel:'Vernichtung', autor:'August Stramm', jahr:'1915',
    text:"Die Himmel wehen\nBlut marschiert\nMarschiert\nAuf\nTausend Füßen.\nDie Himmel wehen\nBlut zerstürmt\nZerstürmt\nAuf\nTausend Schneiden.\nDie Himmel wehen\nBlut zerrinnt\nZerrinnt\nIn\nTausend Fäden.\nDie Himmel wehen\nBlut zersiegt\nZersiegt\nIn\nTausend Scharten.\nDie Himmel wehen\nBlut zerschläft\nZerschläft\nZu\nTausend Toden.\nDie Himmel wehen\nTod zerwebt\nZerwebt\nZu\nTausend Füßen.", quelle:'August Stramm' },
  marc_tierschicksale: { kind:'bild', titel:'Tierschicksale', autor:'Franz Marc', jahr:'1913',
    datei:'fundstuecke/marc-tierschicksale.jpg', quelle:'' },
  lasker_gedicht: { kind:'gedicht', titel:'Ein alter Tibetteppich', autor:'Else Lasker-Schüler', jahr:'',
    text:"Deine Seele, die die meine liebet,\nIst verwirkt mit ihr im Teppichtibet.\nStrahl in Strahl, verliebte Farben,\nSterne, die sich himmellang umwarben.\nUnsere Füße ruhen auf der Kostbarkeit,\nMaschentausendabertausendweit.\nSüßer Lamasohn auf Moschuspflanzenthron,\nWie lange küsst dein Mund den meinen wohl\nUnd Wang die Wange buntgeknüpfte Zeiten schon?", quelle:'Else Lasker-Schüler' },
  marc_blaues_pferd: { kind:'bild', titel:'Blaues Pferd I', autor:'Franz Marc', jahr:'1911',
    datei:'fundstuecke/marc-blaues-pferd.jpg', quelle:'' },
  kandinsky_komposition: { kind:'bild', titel:'Komposition VII', autor:'Wassily Kandinsky', jahr:'1913',
    datei:'fundstuecke/kandinsky.jpg', quelle:'' },
  kafka_galerie: { kind:'prosa', titel:'Auf der Galerie', autor:'Franz Kafka', jahr:'um 1917',
    text:"Wenn irgendeine hinfällige, lungensüchtige Kunstreiterin in der Manege auf schwankendem Pferd vor einem unermüdlichen Publikum vom peitschenschwingenden erbarmungslosen Chef monatelang ohne Unterbrechung im Kreise rundum getrieben würde, auf dem Pferde schwirrend, Küsse werfend, in der Taille sich wiegend, und wenn dieses Spiel unter dem nichtaussetzenden Brausen des Orchesters und der Ventilatoren in die immerfort weiter sich öffnende graue Zukunft sich fortsetzte, begleitet vom vergehenden und neu anschwellenden Beifallsklatschen der Hände, die eigentlich Dampfhämmer sind — vielleicht eilte dann ein junger Galeriebesucher die lange Treppe durch alle Ränge hinab, stürzte in die Manege, rief das: Halt! durch die Fanfaren des immer sich anpassenden Orchesters.\n\nDa es aber nicht so ist; eine schöne Dame, weiß und rot, hereinfliegt, zwischen den Vorhängen, welche die stolzen Livrierten vor ihr öffnen; der Direktor, hingebungsvoll ihre Augen suchend, in Tierhaltung ihr entgegenatmet; vorsorglich sie auf den Apfelschimmel hebt, als wäre sie seine über alles geliebte Enkelin, die sich auf gefährliche Fahrt begibt; sich nicht entschließen kann, das Peitschenzeichen zu geben; schließlich in Selbstüberwindung es knallend gibt; neben dem Pferde mit offenem Munde einherläuft; die Sprünge der Reiterin scharfen Blickes verfolgt; ihre Kunstfertigkeit kaum begreifen kann; mit englischen Ausrufen zu warnen versucht; die reifenhaltenden Reitknechte wütend zu peinlichster Achtsamkeit ermahnt; vor dem großen Salto mortale das Orchester mit aufgehobenen Händen beschwört, es möge schweigen; schließlich die Kleine vom zitternden Pferde hebt, auf beide Backen küßt und keine Huldigung des Publikums für genügend erachtet; während sie selbst, von ihm gestützt, hoch auf den Fußspitzen, vom Staub umweht, mit ausgebreiteten Armen, zurückgelehntem Köpfchen ihr Glück mit dem ganzen Zirkus teilen will — da dies so ist, legt der Galeriebesucher das Gesicht auf die Brüstung und, im Schlußmarsch wie in einem schweren Traum versinkend, weint er, ohne es zu wissen.", quelle:'Franz Kafka' }
};
