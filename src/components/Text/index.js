import { Link } from 'react-router-dom';
import "./Text.css"


export default function Text() {
  return (
    <div id="text-wrapper">
      <div className="side-nav">
        <Link to="/">
          <span class="material-symbols-outlined">
          arrow_back
          </span>
        </Link>        
        <h2>TEXT</h2>
        <ul>
            <li>Artist Statement</li>
        </ul>
      </div>
      <div id="text-content-container">
        <div id="artist-statement">
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
            <p>Wir produzieren mehr Daten als wir verarbeiten können. Wir leben im Überfluss, tagtäglich strömen visuelle Reize auf uns ein. Ob auf riesigen Billboards oder auf unseren Smartphones, wir können dem Reizüberfluss nicht mehr entkommen. Doch was bleibt hängen? Was nehmen wir noch bewusst wahr, als Bilder an die wir uns erinnern können? Heute in einer Zeit, in der alles immer und überall Niederschwellig auf uns eindringt, scheint mir Kunst so notwendig wie noch nie. Das haptische, fühlbare, das spürbare Material holt uns aus unserer eigenen Datenblase raus und lässt uns wieder zu fühlen.</p>
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
        </div>
      </div>
    </div>
  );
}
