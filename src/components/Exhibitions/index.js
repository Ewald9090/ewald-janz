import { Link } from "react-router-dom";
import "./Exhibitions.css"

export default function Exhibitions() {
  const exhibitions = [
      {
        year: 2017,
        title: "Beteiligung an YEA 17 - Young Erfurt Artist",
        description: "Gruppenausstellung, Kunsthaus Erfurt"
      },
      {
        year: 2018,
        title: "Beteiligung an UFO LANDET",
        description: "Gruppenausstellung, Kunsthaus Meiningen"
      },
      {
        year: 2019,
        title: "Organisation, Kuration und Beteiligung der bauhaus 'Spelunke'",
        description: "Ein anarchistischer Schlagerabend zum Jubiläum, Parkhöhle Ilmpark, Weimar"
      },
      {
        year: 2020,
        title: "Organisation, Kuration und Beteiligung von 'clear blue'",
        description: "Gruppenausstellung, alte Feuerwache, Weimar"
      },
      {
        year: 2021,
        title: "Organisation, Kuration und Beteiligung der 1. 'jes!' Ausstellung",
        description: "Gruppenausstellung, Marienstraße 14, Weimar"
      },
      {
        year: 2021,
        title: "Beteiligung an City Crash 9",
        description: "Gruppenausstellung, WERK 2, Leipzig"
      },
      {
        year: 2022,
        title: "Beteiligung und Organisation an 'D100PVZM'",
        description: "Das erste große 'IRRE@bauhaus' Projekt, Kunsthaus Zella Mehlis"
      },
      {
        year: 2022,
        title: "Beteiligung an 'gopea Jahrgang 21'",
        description: "Gruppenausstellung, Schloss Bentheim"
      },
      {
        year: 2022,
        title: "Beteiligung an 'Having a itch'",
        description: "Gruppenausstellung, Landtag Erfurt"
      },
      {
        year: 2022,
        title: "Beteiligung und Kuration bei 'SISI'",
        description: "Gruppenausstellung, Neudeli Leipzig"
      },
      {
        year: 2022,
        title: "Beteiligung an der documenta 15 mit 'IRRE@bauhaus'",
        description: "Kassel"
      },
      {
        year: 2022,
        title: "Beteiligung an der 2. 'jes!' Ausstellung",
        description: "Gruppenausstellung, Galerie 'DER MIXER', Frankfurt"
      },
      {
        year: 2023,
        title: "Organisation, Kuration und Teilnahme an 'KUNSTHURETRÆMT'",
        description: "Ausstellung mit Alexander Lang, Tusche Galerie Weimar"
      }
    ];

  return (
    <div id="exhibitions-wrapper">
      <div className="side-nav">
        <Link to="/">
          <span class="material-symbols-outlined">
          arrow_back
          </span>
        </Link>
        <h2>EXHIBITIONS</h2>
      </div>
      <div id="exhibitions-content-container">
      <ul>
        {exhibitions.map((exhibition, index) => (
          <li key={index}>
            <strong>{exhibition.year}</strong>: {exhibition.title}<br />
            {exhibition.description}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
