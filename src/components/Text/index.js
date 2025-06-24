import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Text.css"

// Define your text content here, you can organize it based on different categories
const textContent = {
  artistStatement: `
    <h3>Artist Statement Ewald Janz</h3>
    <blockquote>
      Ich staune, wie man lügen kann, wenn man die Vernunft auf seine Seite zieht. Natürlich hat sich nichts Neues ereignet, wenn man so will: heute morgen, um Viertel nach acht, als ich das Hotel blockquoterintania verließ, um in die Bibliothek zu gehen, habe ich ein Stück Papier, das auf der Erde herumlag, aufheben wollen und habe es nicht gekonnt. Das ist alles, und das ist nicht einmal ein Ereignis. Ja, aber, um die ganze Wahrheit zu sagen, ich bin davon zutiefst beeindruckt gewesen: ich habe gedacht, ich sei nicht mehr frei. 
      <span>
        *Jean-Paul Satre, Der Ekel
      </span>
    </blockquote>
    <br/>
    <p>Kunst ist Antirealität, die sich über die beschränkte Wirklichkeit stülpt, um sie zu vertilgen.</p>
    <p>Sie hilft mir mich von mir selbst zu distanzieren.</p>
    <p>Ich erinnere mich an einen Traum den ich hatte: ich Träumte von einer Büste, die den Kopf eines Hundes hatte. Sie stand in einem Blechregal und als ich sie betrachtete begannen sich die Augen wie in der REM-Phase zu bewegen. Ich holte mein Smartphone raus, um ein Video zu machen, doch ich sah durch den Bildschirm nur andere Fragmente aus dem Traum, die ich vergessen hatte. Das Video war wie Zeitversetzt und lies mich in andere Bewusstseinsebenen blicken. Als ich aufwachte griff ich nach meinem Smartphone wobei mir bewusst wurde das sich die Souvenirs aus meinen Träumen an der Schwelle des Bewusstseins aufgelöst haben.</p>
    <p>Die Fragen was ist ein Bild, was macht ein Bild zur Kunst und welche Rollen kann Kunst in der Gesellschaft spielen beschäftigen mich seid Jahren.</p>
    <p>Seit Jahren versuche ich zu begreifen, was mich an Kunst so fasziniert.</p>
    <p>Wir produzieren mehr Daten als wir verarbeiten können. Wir leben im Überfluss, tagtäglich strömen visuelle Reize auf uns ein. Ob auf riesigen Billboards oder auf unseren Smartphones, wir können dem Reizüberfluss nicht mehr entkommen. Doch was bleibt hängen? Was nehmen wir noch bewusst wahr, als Bilder an die wir uns erinnern können? Heute in einer Zeit, in der alles immer und überall Niederschwellig auf uns eindringt, scheint mir Kunst so notwendig wie noch nie. Das haptische, fühlbare, das spürbare Material holt uns aus unserer eigenen Datenblase raus und lässt uns wieder fühlen.</p>
    <p>Ständig, überall, immer schneller und mehr! Wir verlieren den Bezug zum Wesentlichen!</p>
    <p>Apokalyptischer Enthusiasmus, eine innere Unruhe, die im Bewusstsein ihrer Vergänglichkeit nach Ordnung strebt und sich eine Form sucht, sind meine Triebfeder.</p>
    <p>Lücken schließen sich wie von selbst.</p>
    <p>Ich interessiere mich für alles, was mich nichts angeht. Dinge, die ich nicht verstehe, üben eine gewisse Faszination auf mich aus.</p> 
    <p>Ich sammle Zettel, Schnipsel, Reste und Ausschnitte aus allen möglichen Bereichen und Richtungen, alles was ich in die Finger bekomme, alles was sich zerschneiden und kleben lässt und sich seinem Kontext entreißen lässt. Ob Pornografie, Grundriss, Anatomisches Schaubild, eigene Zeichnungen, Plakate, Screenshots oder die Anleitung für den Aufbau eines Falttschrankes. Klumpen, Fetzen, Schnipsel, Schmutz.... Man muss die Bilder förmlich riechen können.</p>
    <p>Es berührt mich, wenn die Spuren der Zeit im Material sichtbar werden. In einer glatten Welt, in der alles sauber und niederschwellig durch uns durch flutscht, brauchen wir den Schmutz. Wir brauchen herumgematschte, Haptik, Textur und Malerei.</p>
    <p>Ich schlage die erste beste Richtung ein, die sich meiner Verblüffung bietet. Wobei ich versuche nichts zu ernst zu nehmen und mich möglichst selbst zu überfordern. Kontraste sind die Himmelsrichtungen im entstehenden Beziehungsgefüge. Nur durch Kontraste erst, wird unsere Umwelt erlebbar gemacht.</p>
    <p>Durch das Arbeiten an mehreren Formaten gleichzeitig oder das Wieder einkleben der Reste vom Zuschnitt...so schnell, dass ich mit den Gedanken nicht mehr nachkomme, an allen Stellen gleichzeitig bin und ich den Überblick verliere. Reizüberfluss bis zum Dammbruch. Die Wucht einer unerhörten Sehnsucht dämmert, ich rekapituliere, denke zurück, die letzten Streifen der Nacht flimmern in meinen Erinnerung, verblassen oder mäandern und verästeln sich, werden unfassbar greifbar, in meiner starren Erregung.</p>
    <p>Im einfallendem Strahl schwebende Staubpartikel, Unruhe.</p>
    <p>Irgendwann kühlt das ganze ab. Dann ist es wichtig das Entstandene zu betrachten, sacken lassen bis sich die Sedimente abgesetzt haben und verkrusten.</p>
    <p>Auf Aktion folgt Reflexion, wie auf Input Output folgt.</p>
    <p>Es wird wieder gesammelt, bis irgendwann weggeschmissen, aussortiert, oder verbessert wird. Alles Was nicht Notwendig ist wird entsorgt und so dringe ich immer weiter zum Wesentlichen vor. Kunst ist emergent und wächst durch die Phantasie der Rezipienten über den Produzenten oder die Produzentin hinaus. Kunst ist Wahrnehmungs- und Mitteilungsinstrument gleichzeitig....Input Output simultan, eine Feedbackmaschine zur Selbstvergewisserung in der Welt.</p>
  `,
  starSeeker: `
    <h3>Der Star unter den Suchenden</h3>
    <p>Das gab‘s alles schon, hat’s alles schon gegeben! Alles schon gesagt worden und keiner weiß mehr weiter. Nirgends mehr Blitzen Ikonen auf, um die Massen zu erhellen mit Zuversicht. Nichts sticht mehr heraus und stößt auf. Wir wurden abgespeist und völlig satt wagt keiner mehr seine Bequemlichkeit in Frage zu stellen.</p>
    <p>Ausgebleichte, Bilder, grelle Ikonen einst, in Stücke geschnitten, gerissen…</p>
    <p>Die Fetzen getrennt von ihrer ausgedienten Funktion, wieder und wieder eklektisch zusammengesetzt.</p>
    <p>Die eingespeisten Bereiche, längst nicht mehr überschaubar, verhangen vom geheimnisvollen Dunst der Verständnislosigkeit.</p>
    <p>Um zu neuem, unverhofften Leben zu erwachen, erschaffen sie, als Maske vorerst, ihr eigenes Gesicht und starren uns dann an, aus dem wirren Überschwall wimmelnder Bildflächen fordern sie ihr Fleisch, öffnen Münder und beginnen murmelnd uns die neuen Spielregeln zu diktieren.</p>
  `,
  affentriptychon: `
  <h3>Affentriptychon</h3>
  <p><strong>Drei Bilder von Ewald Janz</strong></p>
  <p>„Gnôthi seautón“ (γνῶθι σεαυτόν – Erkenne dich selbst!) und „Medèn ágan“ (μηδὲν ἄγαν – Nichts im Übermaß!) – die Inschriften des Apollotempels zu Delphi leuchten wie geisterhafte Wegweiser in eine überreizte Gegenwart.<br/>
  Drei Bilder, drei Affen, drei Akte der Erkenntnis.</p>

  <h4>Warum Affen?</h4>
  <p>Sie sind uns näher, als wir wahrhaben wollen. Spiegel und Zerrbild zugleich: Trieb, Technik, Trauma. Einst Symbol des Fortschritts – nun Zeugen eines Sturzes, der längst begonnen hat. Darwin raubte uns Adam und Eva, Kepler die Erde als Mittelpunkt. Was bleibt uns? Der Monolith, der Bildschirm, das Loch im Netz.</p>
  <p>In der Serie begegnen uns Affen als Prototypen einer Menschheit, die ihre eigene Evolution nicht überlebt. Sie sind Versuchstiere, Propheten, Performer – durch ihre Augen sehen wir das Ende als Farbspektakel: flimmernd, grell, ikonisch.</p>
  <p>Der Boden wankt. Der Wald stirbt. Die Daten brennen.<br/>
  Wir befinden uns im Anthropozän – der Ära des selbstverschuldeten Kontrollverlusts. Während Affenmütter aus Stoff künstlich trösten, zapfen Maschinenhirne Pong-Signale aus Gedanken. Alles ist vernetzt – und nichts mehr verbunden.</p>
  <p>Diese Bilder inszenieren keine buchstäbliche Flut – sondern eine metaphorische:<br/>
  von Bildern, Systemen, Technologien.<br/>
  Sie spiegeln den Moment der Überforderung, der Überreizung, des Zusammenbruchs.<br/>
  So wie Wasser in der Flut alles mitreißt, so reißen sie den Blick in einen Strudel aus Reiz, Gewalt und Erkenntnis.<br/>
  Warnzeichen aus der Vorhölle der Postzivilisation.</p>

  <hr/>

  <h4>„Schöne Appokalypse! (Die Entdeckung der Waffe)“</h4>
  <blockquote>„Hören Sie die Summe der ganzen Sache in einem kurzen Wort: Jede Kunst, die der Mensch besitzt, stammt von Prometheus.“<br/>– Aischylos</blockquote>
  <p>Der Untergang der Zivilisation leuchtet in grellen Farben.<br/>
  Die Affen – einer mit einem Knochen bewaffnet – sind ganz außer sich: kreischend, trommelnd, entfesselt.<br/>
  Der Auslöser: ein glattes, schwarzes Etwas.<br/>
  Es liegt vor ihnen – verführerisch und fremd.<br/>
  Es handelt sich um das neueste iPhone-Modell. Aus seinen Lautsprechern dröhnt Ligetis Requiem.<br/>
  Die Szene erinnert an Kubricks Monolith in 2001: A Space Odyssey – nur dass der Monolith hier in die Gegenwart gefallen ist.</p>
  <p>Die Affen treiben auf orangen Plattformen, wie Eisschollen im Schmelz.<br/>
  Hinter ihnen kollabiert die Zivilisation – auch architektonisch.<br/>
  Zwischen Trümmern, die an das World Trade Center erinnern, starrt ein Totenschädel auf uns zurück.<br/>
  Die Apokalypse ist schön. Und sie hat eine Fernbedienung.</p>

  <hr/>

  <h4>„Try Apple! (verbotene Frucht)“</h4>
  <blockquote>„Nein, ihr werdet nicht sterben. Gott weiß vielmehr: Sobald ihr davon esst, gehen euch die Augen auf; ihr werdet wie Gott und erkennt Gut und Böse.“<br/>– Die große alte Schlange</blockquote>
  <p>Ein Schädel hat in den Mond gebissen – wie in einen Apfel.<br/>
  Ein anderer liegt auf einer Plattform, vor sich zwei wachsende Fliegenpilze.<br/>
  Am Horizont: ein weiterer Fliegenpilz – nun als Atompilz.</p>
  <p>Die Spiegelung zwischen Pilz und Pilz, zwischen Biss und Blick, zieht sich durch das Bild.</p>
  <p>Ein Augapfel windet sich ins Zentrum – daran ein Strang wie ein Nervenband.<br/>
  Er führt zu einem Symbol: halb Blindheit, halb radioaktive Warnung.<br/>
  Im Epizentrum: das Apple-Logo.<br/>
  Die Versuchung bleibt bestehen.<br/>
  Die Schlange windet sich weiter – als wäre der zweite Biss unausweichlich.</p>
  <p>Am rechten Bildrand: ein roter Baum, daran eine schwarze Tollkirsche – giftig, glänzend.<br/>
  Davor steht ein iPhone, schwarz, dreiaugig.<br/>
  Ein Mensch in oranger Anstaltskleidung flieht vor drei Affen –<br/>
  wie Adam und Eva vor dem Engel,<br/>
  wie Schneewittchen vor dem Spiegel.<br/>
  Die Jäger sind nun die Gejagten.</p>

  <hr/>

  <h4>„Neue Apparate selektieren (Monkeys are the people of the future / People are machines)“</h4>
  <p>Ein kybernetischer Altar aus drei Plattformen.<br/>
  Versuchstiere in heroischer Pose – zur Maschine mutiert.<br/>
  Im Zentrum: ein Rhesusaffe mit angenähter Roboterhand.<br/>
  Die Prothese hält über sich einen blauen Pong-Ball – exakt an der Stelle, wo im ersten Bild das Auge stand.</p>
  <p>Der Affe hebt die rechte Hand zur Schläfe – Denken als Befehl.<br/>
  Auf dem Bildschirm vor ihm: das Pong-Spiel. Zwei Balken, ein Ball – minimalistischer Gottesbeweis.<br/>
  Simulation und Subjekt spiegeln sich gegenseitig.</p>
  <p>Rechts: eine künstliche Affenmutter aus Deckenstoff.<br/>
  Ihr rechter Arm ist echt, blutig angenäht, ausgestreckt mit einem Playstation-Controller in der Hand.<br/>
  Der Roboterhund – kopflos – trägt einen menschlichen Schädel.<br/>
  Links unten: ein verletzter Rhesusaffe. Die Diode im Schädel leuchtet.<br/>
  In der Lava darunter liegt ein dritter Schädel.</p>
  <p>Eine DNA-Spirale windet sich durchs Bild.<br/>
  Eine Kamera-Drohne schwebt heran – das Auge der Kybernetik.<br/>
  Die Plattformen wirken wie Versuchsanordnungen eines gottverlassenen Labors.<br/>
  Die Zukunft ist nicht posthuman. Sie ist prämechanisch. Und sie hat begonnen.</p>
`
  otherText1: `
    Other Text 1 Content...
  `,
  otherText2: `
    Other Text 2 Content...
  `,
  // Add more text content as needed
};

export default function Text() {
  const [activeTab, setActiveTab] = useState('artistStatement'); // Default to artistStatement tab

  const renderTextContent = (category) => {
    return (
      <div id="text-content">
        {category === 'artistStatement' ? (
          <div id="artist-statement" dangerouslySetInnerHTML={{ __html: textContent[category] }} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: textContent[category] }} />
        )}
      </div>
    );
  }

  return (
    <div id="text-wrapper">
      <div className="side-nav">
        <Link to="/">
          <span className="material-symbols-outlined">
            arrow_back
          </span>
        </Link>        
        <h2>TEXT</h2>
        <ul id="text-nav">
          <li
            onClick={() => setActiveTab('artistStatement')}
            className={activeTab === 'artistStatement' ? 'active' : ''}
          >
            Artist Statement
          </li>
          <li
            onClick={() => setActiveTab('starSeeker')}
            className={activeTab === 'starSeeker' ? 'active' : ''}
          >
            Der Star unter den Suchenden
          </li>
        </ul>
      </div>
      <div id="text-content-container">
        {renderTextContent(activeTab)}
      </div>
    </div>
  );
}