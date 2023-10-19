import "./CV.css"
import Ewald from "./Ewald in his studio. Photo@ Theo Rosenfeld.jpg"

export default function CV() {
  return (
    <div id="cv-wrapper">
      <div className="side-nav">
        <h2>CV</h2>
      </div>
      <div id="cv-content-container">
        <div id="cv">
        <h3>Ewald Janz</h3>
        <br/>
        <ul>
        <li><span class="year">1990</span> *in Suhl</li>
        <li><span class="year">1996</span>  Einschulung Grundundrealschule Köppelsdorf, Sonnberg</li>
        <li><span class="year">2006</span>  Realschulabschluss Goetheschule Schalkau, Sonneberg</li>
        <li><span class="year">2007</span>  Gescheiterte Ausbildung zum Gastronomiefachmann, Pertisau am Achensee, Tirol, Österreich</li>
        <li><span class="year"><span style={{display: 'flex', flexDirection: 'column'}}>2007-</span><span>2008</span></span>  Einstiegsqualifizierungsjahr (Maßnahme von Arbeitsamt), Neuhaus am Rennweg</li>
        <li><span class="year">2008</span>  Gescheiterter Versuch das Abitur nachzuholen, SBBS Sonneberg</li>
        <li><span class="year"><span style={{display: 'flex', flexDirection: 'column'}}>2008-</span><span>2010</span></span>  Erfolgreiche Ausbildung zum Fachlageristen, Westhausen (bei Hildburghausen)</li>
        <li><span class="year">2013</span>  Abschluss Bachelor Toydesign, Fachhochschule SBBS Sonneberg</li>
        <li><span class="year"><span style={{display: 'flex', flexDirection: 'column'}}>2014-</span><span>2018</span></span>  Studium Kunst und Literaturwissenschaften, Universität Erfurt</li>
        <li><span class="year">2023</span>  Diplom freie Kunst bei Jana Gunstheimer (Experimentelle Malerei und Zeichnung), Bauhaus Universität Weimar</li>
        </ul>
        <p>Currently lives and works in Weimar and Leipzig.</p>
        </div>
        <img alt="Ewald in his studio. Photo@ Theo Rosenfeld" src={Ewald} style={{float: "right", alignSelf: "flex-end"}}/>

      </div>
    </div>
  );
}
