/*
Created: 28.12.2018
Modified: 28.12.2018
Model: WBD_logiczny
Database: Oracle 11g Release 2
*/


-- Create tables section -------------------------------------------------

-- Table Druzyny

CREATE TABLE "Druzyny"(
  "DruzynaId" Integer NOT NULL,
  "Nazwa" Varchar2(50 ) NOT NULL,
  "Miasto" Varchar2(30 ) NOT NULL,
  "Narodowosc" Varchar2(3 ) NOT NULL
)
/

-- Add keys for table Druzyny

ALTER TABLE "Druzyny" ADD CONSTRAINT "DruzynaId" PRIMARY KEY ("DruzynaId")
/

-- Table Zawodnicy

CREATE TABLE "Zawodnicy"(
  "ZawodnikId" Integer NOT NULL,
  "Imie" Varchar2(50 ) NOT NULL,
  "Nazwisko" Varchar2(50 ) NOT NULL,
  "DataUrodzenia" Date NOT NULL,
  "Narodowosc" Varchar2(3 ) NOT NULL
)
/

-- Add keys for table Zawodnicy

ALTER TABLE "Zawodnicy" ADD CONSTRAINT "Unique_Identifier2" PRIMARY KEY ("ZawodnikId")
/

-- Table Trenerzy

CREATE TABLE "Trenerzy"(
  "TrenerId" Integer NOT NULL,
  "Imie" Varchar2(50 ) NOT NULL,
  "Nazwisko" Varchar2(50 ) NOT NULL,
  "DataUrodzenia" Date NOT NULL,
  "Narodowosc" Varchar2(3 ) NOT NULL
)
/

-- Add keys for table Trenerzy

ALTER TABLE "Trenerzy" ADD CONSTRAINT "Unique_Identifier3" PRIMARY KEY ("TrenerId")
/

-- Table Stadiony

CREATE TABLE "Stadiony"(
  "StadionId" Integer NOT NULL,
  "Nazwa" Varchar2(50 ) NOT NULL,
  "Pojemnosc" Integer NOT NULL,
  "Miasto" Varchar2(50 ) NOT NULL,
  "Adres" Varchar2(50 ) NOT NULL
)
/

-- Add keys for table Stadiony

ALTER TABLE "Stadiony" ADD CONSTRAINT "Unique_Identifier4" PRIMARY KEY ("StadionId")
/

-- Table Sędziowie

CREATE TABLE "Sędziowie"(
  "SedziaId" Integer NOT NULL,
  "Imię" Varchar2(50 ) NOT NULL,
  "Nazwisko" Varchar2(50 ) NOT NULL,
  "DataUrodzenia" Date NOT NULL,
  "Narodowosc" Varchar2(3 ) NOT NULL
)
/

-- Add keys for table Sędziowie

ALTER TABLE "Sędziowie" ADD CONSTRAINT "Unique_Identifier5" PRIMARY KEY ("SedziaId")
/

-- Table Uzytkownik

CREATE TABLE "Uzytkownik"(
  "UzytkownikId" Integer NOT NULL,
  "Login" Varchar2(30 ) NOT NULL,
  "Haslo" Varchar2(100 ) NOT NULL,
  "Salt" Varchar2(50 ) NOT NULL,
  "Imię" Varchar2(50 ) NOT NULL,
  "Nazwisko" Varchar2(50 ) NOT NULL
)
/

-- Add keys for table Uzytkownik

ALTER TABLE "Uzytkownik" ADD CONSTRAINT "Unique_Identifier6" PRIMARY KEY ("UzytkownikId")
/

ALTER TABLE "Uzytkownik" ADD CONSTRAINT "Unique_Identifier7" UNIQUE ("Login")
/

-- Table Turnieje

CREATE TABLE "Turnieje"(
  "TurniejId" Integer NOT NULL,
  "Nazwa" Varchar2(50 ) NOT NULL,
  "DataRozpoczecia" Date NOT NULL
)
/

-- Add keys for table Turnieje

ALTER TABLE "Turnieje" ADD CONSTRAINT "Unique_Identifier9" PRIMARY KEY ("TurniejId")
/

-- Table Mecze

CREATE TABLE "Mecze"(
  "MeczId" Integer NOT NULL,
  "DataRozpoczęcia" Date NOT NULL,
  "DruzynaId" Integer NOT NULL,
  "DruzynaId" Integer NOT NULL,
  "StadionId" Integer NOT NULL,
  "SedziaId" Integer NOT NULL,
  "TurniejId" Integer NOT NULL,
  "WynikId" Integer
)
/

-- Create indexes for table Mecze

CREATE INDEX "IX_wystepuje jako gospodarz" ON "Mecze" ("DruzynaId")
/

CREATE INDEX "IX_wystepuje jako gosc" ON "Mecze" ("DruzynaId")
/

CREATE INDEX "IX_rozgrywany jest na" ON "Mecze" ("StadionId")
/

CREATE INDEX "IX_jest sedziowany przez" ON "Mecze" ("SedziaId")
/

CREATE INDEX "IX_rozgrywany w ramach" ON "Mecze" ("TurniejId")
/

CREATE INDEX "IX_konczy sie" ON "Mecze" ("WynikId")
/

-- Add keys for table Mecze

ALTER TABLE "Mecze" ADD CONSTRAINT "Unique_Identifier8" PRIMARY KEY ("MeczId")
/

-- Table Wyniki

CREATE TABLE "Wyniki"(
  "WynikId" Integer NOT NULL,
  "WynikGospodarzy" Integer NOT NULL,
  "WynikGosci" Integer NOT NULL,
  "DataDodania" Date NOT NULL
)
/

-- Add keys for table Wyniki

ALTER TABLE "Wyniki" ADD CONSTRAINT "Unique_Identifier10" PRIMARY KEY ("WynikId")
/

-- Table ZakładyDługoterminowe

CREATE TABLE "ZakładyDługoterminowe"(
  "ZakladDlugoterminowyId" Integer NOT NULL,
  "DataZawarcia" Date NOT NULL,
  "UzytkownikId" Integer NOT NULL,
  "DruzynaId" Integer NOT NULL,
  "TurniejId" Integer NOT NULL
)
/

-- Create indexes for table ZakładyDługoterminowe

CREATE INDEX "IX_stawia dlugoterminowo" ON "ZakładyDługoterminowe" ("UzytkownikId")
/

CREATE INDEX "IX_zaklada zwyciezce" ON "ZakładyDługoterminowe" ("DruzynaId")
/

CREATE INDEX "IX_obstawia zwyciezce" ON "ZakładyDługoterminowe" ("TurniejId")
/

-- Add keys for table ZakładyDługoterminowe

ALTER TABLE "ZakładyDługoterminowe" ADD CONSTRAINT "Unique_Identifier11" PRIMARY KEY ("ZakladDlugoterminowyId")
/

-- Table Zaklad

CREATE TABLE "Zaklad"(
  "ZakladId" Integer NOT NULL,
  "WynikGospodarzy" Integer NOT NULL,
  "WynikGosci" Integer NOT NULL,
  "DataZawarcia" Date NOT NULL,
  "MeczId" Integer NOT NULL,
  "UzytkownikId" Integer NOT NULL
)
/

-- Create indexes for table Zaklad

CREATE INDEX "IX_przewiduje_wynik" ON "Zaklad" ("MeczId")
/

CREATE INDEX "IX_stawia" ON "Zaklad" ("UzytkownikId")
/

-- Add keys for table Zaklad

ALTER TABLE "Zaklad" ADD CONSTRAINT "Unique_Identifier12" PRIMARY KEY ("ZakladId")
/

-- Table KontraktyZawodnicze

CREATE TABLE "KontraktyZawodnicze"(
  "DruzynaId" Integer NOT NULL,
  "ZawodnikId" Integer NOT NULL,
  "DataPodpisania" Date NOT NULL,
  "DataRozwiazania" Date
)
/

-- Table KontraktyTrenerskie

CREATE TABLE "KontraktyTrenerskie"(
  "DruzynaId" Integer NOT NULL,
  "TrenerId" Integer NOT NULL,
  "DataPodpisania" Date NOT NULL,
  "DataRozwiazania" Date
)
/

-- Table Zapisy

CREATE TABLE "Zapisy"(
  "UzytkownikId" Integer NOT NULL,
  "TurniejId" Integer NOT NULL,
  "DataZapisu" Date NOT NULL
)
/


-- Create foreign keys (relationships) section ------------------------------------------------- 

ALTER TABLE "Mecze" ADD CONSTRAINT "wystepuje jako gospodarz" FOREIGN KEY ("DruzynaId") REFERENCES "Druzyny" ("DruzynaId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "wystepuje jako gosc" FOREIGN KEY ("DruzynaId") REFERENCES "Druzyny" ("DruzynaId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "rozgrywany jest na" FOREIGN KEY ("StadionId") REFERENCES "Stadiony" ("StadionId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "jest sedziowany przez" FOREIGN KEY ("SedziaId") REFERENCES "Sędziowie" ("SedziaId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "rozgrywany w ramach" FOREIGN KEY ("TurniejId") REFERENCES "Turnieje" ("TurniejId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "konczy sie" FOREIGN KEY ("WynikId") REFERENCES "Wyniki" ("WynikId")
/


ALTER TABLE "Zaklad" ADD CONSTRAINT "przewiduje wynik" FOREIGN KEY ("MeczId") REFERENCES "Mecze" ("MeczId")
/


ALTER TABLE "Zaklad" ADD CONSTRAINT "stawia" FOREIGN KEY ("UzytkownikId") REFERENCES "Uzytkownik" ("UzytkownikId")
/


ALTER TABLE "ZakładyDługoterminowe" ADD CONSTRAINT "stawia dlugoterminowo" FOREIGN KEY ("UzytkownikId") REFERENCES "Uzytkownik" ("UzytkownikId")
/


ALTER TABLE "ZakładyDługoterminowe" ADD CONSTRAINT "zaklada zwyciezce" FOREIGN KEY ("DruzynaId") REFERENCES "Druzyny" ("DruzynaId")
/


ALTER TABLE "ZakładyDługoterminowe" ADD CONSTRAINT "obstawia zwyciezce" FOREIGN KEY ("TurniejId") REFERENCES "Turnieje" ("TurniejId")
/





