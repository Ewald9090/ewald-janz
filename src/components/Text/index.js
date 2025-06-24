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
  dreamSouvenir: `
    <h3>Souvenir aus meinen Träumen</h3>
    <p>Ich träumte von der Büste eines Hundes. Sie stand in einem Blechregal in meinem Atelier und schaute mich an.</p>
    <p>Als ich sie betrachtete, begannen sich die Augen zu bewegen, wie in einer REM-Phase.</p>
    <p>Als ich mit meinem Smartphone ein Video von den rollenden Augen der Büste machen wollte, geschah etwas Merkwürdiges: Das, was ich durch das Smartphone sah, war nicht die Büste.</p>
    <p>Ich sah zeitversetzt durch die Kamera des Smartphones nur andere Fragmente aus meinem Traum, an die ich mich aber nicht mehr erinnere.</p>
    <p>Als ich aufwachte, griff ich nach dem Smartphone um mir das Video anschauen. Dabei wurde mir bewusst, dass ich wach bin und sich das Souvenir aus meinen Träumen an der Schwelle des Bewusstseins aufgelöst hat.</p>
  `,
  ostdeutschland: `
    <h3>Bin ich das? Vielleicht ist das Ostdeutschland…</h3>
    <p>Diese fünf Malereien sind Splitter aus meinem Inneren –</p>
    <p>gebrochene Szenen, verdrehte Rituale, Überreste von irgendwas, das nie ganz gelebt werden durfte.</p>
    <p>Die Figuren sind keine Helden. Sie sind verloren, kaputt, hässlich, sie sabbern, schleichen, glotzen, irren.</p>
    <p>Manche sind auf der Suche, manche haben schon aufgegeben.</p>
    <p>Aber alle tragen diese Uniformen, diese Anstaltskleidung – orange, billig, identisch – weil sie aus einer Gesellschaft kommen, die nur Ordnung kennt, wenn sie ausgrenzt.</p>
  `,
  affentriptychon: `
    <h3>Affentriptychon – Drei Bilder von Ewald Janz</h3>
    <p>„Gnôthi seautón (Erkenne dich selbst!)“ und „Medèn ágan (Nichts im Übermaß!)“ – die Inschriften des Apollotempels zu Delphi leuchten wie geisterhafte Wegweiser in eine überreizte Gegenwart. Drei Bilder, drei Affen, drei Akte der Erkenntnis.</p>
    <p>Warum Affen? Sie sind uns näher als wir wahrhaben wollen. Spiegel und Zerrbild zugleich: Trieb, Technik, Trauma. Einst Symbol des Fortschritts – nun Zeugen eines Sturzes, der schon begonnen hat. Darwin raubte uns Adam und Eva, Kepler die Erde als Mittelpunkt. Was bleibt uns? Der Monolith, der Bildschirm, das Loch im Netz.</p>
    <p>In der Serie begegnen uns Affen als Prototypen einer Menschheit, die ihre eigene Evolution nicht überlebt. Sie sind Versuchstiere, Propheten, Performer – durch ihre Augen sehen wir das Menschliche im posthumanen Exzess, den wir selbst geschaffen haben.</p>
  `
};

export default function Text() {
  const [activeTab, setActiveTab] = useState('artistStatement');

  const renderTextContent = (category) => {
    return (
      <div id="text-content">
        <div dangerouslySetInnerHTML={{ __html: textContent[category] }} />
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
          <li onClick={() => setActiveTab('artistStatement')} className={activeTab === 'artistStatement' ? 'active' : ''}>
            Artist Statement
          </li>
          <li onClick={() => setActiveTab('starSeeker')} className={activeTab === 'starSeeker' ? 'active' : ''}>
            Der Star unter den Suchenden
          </li>
          <li onClick={() => setActiveTab('dreamSouvenir')} className={activeTab === 'dreamSouvenir' ? 'active' : ''}>
            Souvenir aus meinen Träumen
          </li>
          <li onClick={() => setActiveTab('ostdeutschland')} className={activeTab === 'ostdeutschland' ? 'active' : ''}>
            Bin ich das? Vielleicht ist das Ostdeutschland…
          </li>
          <li onClick={() => setActiveTab('affentriptychon')} className={activeTab === 'affentriptychon' ? 'active' : ''}>
            Affentriptychon
          </li>
        </ul> 
      </div>
      <div id="text-content-container">
        {renderTextContent(activeTab)}
      </div>
    </div>
  );
}