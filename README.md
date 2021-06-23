# IZ_PROJECT_2021

Uputstvo za pokretanje aplikacije:
 1. Importovati Meaven projekat PharmacyWebApplication.
 2. Otvoriti folder client-app, koji predstavlja front-end projekta u nekom od odgovarajućih programa (npr. Visual Studio Code).
 3. U terminalu Visual Studio Code-a ukucati npm install da bi se instalirale sve potrebne datoteke za React.
 4. Pokrenuti fuseki-server (apache-jena-fuseki-3.11.0 -> apache-jena-fuseki-3.11.0 -> fuseki-server Executable Jar File). Kreirati novi dataset pod nazivom inzenjering-znanja i tu učitati polazne podatke (napade) iz attacks.rdf file-a.
 5. Pokrenuti serversku aplikaciju (Meaven project). (pokreće se na portu 8081), dodatne biblioteke koje je potrebno importovati (U Intellij-u dodati preko File -> Project Structure -> New Project Library) se nalaze u folderu lib u korenskom direktorijumu.
 6. U terminalu Visual Studio Code-a ukucati npm start da bi se pokrenuo front-end. (pokreće se na frontu 3000)
 7. Posle par sekundi, u browseru bi trebala da se otvori početna stranica.
