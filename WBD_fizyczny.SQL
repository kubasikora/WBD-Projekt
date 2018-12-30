<<<<<<< HEAD
﻿/*
Created: 28.12.2018
Modified: 28.12.2018
Model: WBD_logiczny
Database: Oracle 11g Release 2
*/


-- Create tables section -------------------------------------------------

-- Table Drużyny

CREATE TABLE "Drużyny"(
  "DruzynaId" Integer NOT NULL,
  "Nazwa" Varchar2(50 ) NOT NULL,
  "Miasto" Varchar2(30 ) NOT NULL,
  "Narodowosc" Varchar2(3 ) NOT NULL
)
/

-- Add keys for table Drużyny

ALTER TABLE "Drużyny" ADD CONSTRAINT "DruzynaId" PRIMARY KEY ("DruzynaId")
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

-- Table Uzytkownicy

CREATE TABLE "Uzytkownicy"(
  "UzytkownikId" Integer NOT NULL,
  "Login" Varchar2(30 ) NOT NULL,
  "Haslo" Varchar2(100 ) NOT NULL,
  "Salt" Varchar2(50 ) NOT NULL,
  "Imię" Varchar2(50 ) NOT NULL,
  "Nazwisko" Varchar2(50 ) NOT NULL
)
/

-- Add keys for table Uzytkownicy

ALTER TABLE "Uzytkownicy" ADD CONSTRAINT "Unique_Identifier6" PRIMARY KEY ("UzytkownikId")
/

ALTER TABLE "Uzytkownicy" ADD CONSTRAINT "Unique_Identifier7" UNIQUE ("Login")
/

-- Table Turnieje

CREATE TABLE "Turnieje"(
  "TurniejId" Integer NOT NULL,
  "Nazwa" Varchar2(50 ) NOT NULL,
  "DataRozpoczecia" Date NOT NULL,
  "DruzynaId" Integer
)
/

-- Add keys for table Turnieje

ALTER TABLE "Turnieje" ADD CONSTRAINT "Unique_Identifier9" PRIMARY KEY ("TurniejId")
/

-- Table Mecze

CREATE TABLE "Mecze"(
  "MeczId" Integer NOT NULL,
  "DataRozpoczęcia" Date NOT NULL,
  "DruzynaGospodarzyId" Integer NOT NULL,
  "DruzynaGosciId" Integer NOT NULL,
  "StadionId" Integer NOT NULL,
  "SedziaId" Integer NOT NULL,
  "TurniejId" Integer NOT NULL,
  "WynikId" Integer
)
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

-- Table ZakładyDlugoterminowe

CREATE TABLE "ZakładyDlugoterminowe"(
  "ZakladDlugoterminowyId" Integer NOT NULL,
  "DataZawarcia" Date NOT NULL,
  "UzytkownikId" Integer NOT NULL,
  "DruzynaId" Integer NOT NULL,
  "TurniejId" Integer NOT NULL
)
/

-- Add keys for table ZakładyDlugoterminowe

ALTER TABLE "ZakładyDlugoterminowe" ADD CONSTRAINT "Unique_Identifier11" PRIMARY KEY ("ZakladDlugoterminowyId")
/

-- Table Zaklady

CREATE TABLE "Zaklady"(
  "ZakladId" Integer NOT NULL,
  "WynikGospodarzy" Integer NOT NULL,
  "WynikGosci" Integer NOT NULL,
  "DataZawarcia" Date NOT NULL,
  "MeczId" Integer NOT NULL,
  "UzytkownikId" Integer NOT NULL
)
/

-- Add keys for table Zaklady

ALTER TABLE "Zaklady" ADD CONSTRAINT "Unique_Identifier12" PRIMARY KEY ("ZakladId")
/

-- Table KontraktyZawodnikow

CREATE TABLE "KontraktyZawodnikow"(
  "DruzynaId" Integer NOT NULL,
  "ZawodnikId" Integer NOT NULL,
  "DataZawarcia" Date NOT NULL,
  "DataZakonczenia" Date
)
/

-- Table KontraktyTrenerskie

CREATE TABLE "KontraktyTrenerskie"(
  "DruzynaId" Integer NOT NULL,
  "TrenerId" Integer NOT NULL,
  "DataRozpoczecia" Date NOT NULL,
  "DataZakonczenia" Date
)
/

-- Table ZapisyUżytkownikow

CREATE TABLE "ZapisyUżytkownikow"(
  "UzytkownikId" Integer NOT NULL,
  "TurniejId" Integer NOT NULL
)
/

-- Table ZapisyDruzyn

CREATE TABLE "ZapisyDruzyn"(
  "DruzynaId" Integer NOT NULL,
  "TurniejId" Integer NOT NULL
)
/


-- Create indexes 
CREATE INDEX IX_Zaklad_stawia_Mecz ON “Zaklady” (“MeczId”) 
/

CREATE INDEX IX_Uzytkownik_stawia ON “Zaklady” (“UżytkownikId”) 
/

-- Create foreign keys (relationships) section ------------------------------------------------- 

ALTER TABLE "Mecze" ADD CONSTRAINT "wystepuje jako gospodarz" FOREIGN KEY ("DruzynaGospodarzyId") REFERENCES "Drużyny" ("DruzynaId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "wystepuje jako gosc" FOREIGN KEY ("DruzynaGosciId") REFERENCES "Drużyny" ("DruzynaId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "rozgrywany jest na" FOREIGN KEY ("StadionId") REFERENCES "Stadiony" ("StadionId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "jest sedziowany przez" FOREIGN KEY ("SedziaId") REFERENCES "Sędziowie" ("SedziaId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "rozgrywany w ramach" FOREIGN KEY ("TurniejId") REFERENCES "Turnieje" ("TurniejId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "konczy sie" FOREIGN KEY ("WynikId") REFERENCES "Wyniki" ("WynikId")
/


ALTER TABLE "Zaklady" ADD CONSTRAINT "obstawia" FOREIGN KEY ("MeczId") REFERENCES "Mecze" ("MeczId")
/


ALTER TABLE "Zaklady" ADD CONSTRAINT "stawia" FOREIGN KEY ("UzytkownikId") REFERENCES "Uzytkownicy" ("UzytkownikId")
/


ALTER TABLE "ZakładyDlugoterminowe" ADD CONSTRAINT "stawia dlugoterminowo" FOREIGN KEY ("UzytkownikId") REFERENCES "Uzytkownicy" ("UzytkownikId")
/


ALTER TABLE "ZakładyDlugoterminowe" ADD CONSTRAINT "zaklada zwyciezce" FOREIGN KEY ("DruzynaId") REFERENCES "Drużyny" ("DruzynaId")
/


ALTER TABLE "ZakładyDlugoterminowe" ADD CONSTRAINT "obstawia zwyciezce" FOREIGN KEY ("TurniejId") REFERENCES "Turnieje" ("TurniejId")
/


ALTER TABLE "Turnieje" ADD CONSTRAINT "wygrywa" FOREIGN KEY ("DruzynaId") REFERENCES "Drużyny" ("DruzynaId")
/





=======
﻿/*
Created: 28.12.2018
Modified: 30.12.2018
Model: WBD_logiczny
Database: Oracle 11g Release 2
*/


-- Create tables section -------------------------------------------------

-- Table Drużyny

CREATE TABLE "Drużyny"(
  "DruzynaId" Integer NOT NULL,
  "Nazwa" Varchar2(50 ) NOT NULL,
  "Miasto" Varchar2(30 ) NOT NULL,
  "Narodowosc" Varchar2(3 ) NOT NULL
)
/

-- Add keys for table Drużyny

ALTER TABLE "Drużyny" ADD CONSTRAINT "DruzynaId" PRIMARY KEY ("DruzynaId")
/

-- Table Zawodnicy

CREATE TABLE "Zawodnicy"(
  "ZawodnikId" Integer NOT NULL,
  "Imie" Varchar2(50 ) NOT NULL,
  "Nazwisko" Varchar2(50 ) NOT NULL,
  "DataUrodzenia" Date NOT NULL,
  "Narodowosc" Varchar2(3 ) NOT NULL,
  "Numer" Integer NOT NULL
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

-- Table Uzytkownicy

CREATE TABLE "Uzytkownicy"(
  "UzytkownikId" Integer NOT NULL,
  "Login" Varchar2(30 ) NOT NULL,
  "Haslo" Varchar2(100 ) NOT NULL,
  "Salt" Varchar2(50 ) NOT NULL,
  "Imię" Varchar2(50 ) NOT NULL,
  "Nazwisko" Varchar2(50 ) NOT NULL
)
/

-- Add keys for table Uzytkownicy

ALTER TABLE "Uzytkownicy" ADD CONSTRAINT "Unique_Identifier6" PRIMARY KEY ("UzytkownikId")
/

ALTER TABLE "Uzytkownicy" ADD CONSTRAINT "Unique_Identifier7" UNIQUE ("Login")
/

-- Table Turnieje

CREATE TABLE "Turnieje"(
  "TurniejId" Integer NOT NULL,
  "Nazwa" Varchar2(50 ) NOT NULL,
  "DataRozpoczecia" Date NOT NULL,
  "DruzynaId" Integer
)
/

-- Add keys for table Turnieje

ALTER TABLE "Turnieje" ADD CONSTRAINT "Unique_Identifier9" PRIMARY KEY ("TurniejId")
/

-- Table Mecze

CREATE TABLE "Mecze"(
  "MeczId" Integer NOT NULL,
  "DataRozpoczęcia" Date NOT NULL,
  "DruzynaGospodarzyId" Integer NOT NULL,
  "DruzynaGosciId" Integer NOT NULL,
  "StadionId" Integer NOT NULL,
  "SedziaId" Integer NOT NULL,
  "TurniejId" Integer NOT NULL,
  "WynikId" Integer
)
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

-- Table ZakładyDlugoterminowe

CREATE TABLE "ZakładyDlugoterminowe"(
  "ZakladDlugoterminowyId" Integer NOT NULL,
  "DataZawarcia" Date NOT NULL,
  "UzytkownikId" Integer NOT NULL,
  "DruzynaId" Integer NOT NULL,
  "TurniejId" Integer NOT NULL
)
/

-- Add keys for table ZakładyDlugoterminowe

ALTER TABLE "ZakładyDlugoterminowe" ADD CONSTRAINT "Unique_Identifier11" PRIMARY KEY ("ZakladDlugoterminowyId")
/

-- Table Zaklady

CREATE TABLE "Zaklady"(
  "ZakladId" Integer NOT NULL,
  "WynikGospodarzy" Integer NOT NULL,
  "WynikGosci" Integer NOT NULL,
  "DataZawarcia" Date NOT NULL,
  "MeczId" Integer NOT NULL,
  "UzytkownikId" Integer NOT NULL,
  "TurniejId" Integer
)
/

-- Create indexes for table Zaklady

CREATE INDEX "IX_Uzytkownik_stawia" ON "Zaklady" ("UzytkownikId")
/

CREATE INDEX "IX_Zaklad_stawia_Mecz" ON "Zaklady" ("MeczId")
/

-- Add keys for table Zaklady

ALTER TABLE "Zaklady" ADD CONSTRAINT "Unique_Identifier12" PRIMARY KEY ("ZakladId")
/

-- Table KontraktyZawodnikow

CREATE TABLE "KontraktyZawodnikow"(
  "DruzynaId" Integer NOT NULL,
  "ZawodnikId" Integer NOT NULL,
  "DataZawarcia" Date NOT NULL,
  "DataZakonczenia" Date
)
/

-- Table KontraktyTrenerskie

CREATE TABLE "KontraktyTrenerskie"(
  "DruzynaId" Integer NOT NULL,
  "TrenerId" Integer NOT NULL,
  "DataRozpoczecia" Date NOT NULL,
  "DataZakonczenia" Date
)
/

-- Table ZapisyUżytkownikow

CREATE TABLE "ZapisyUżytkownikow"(
  "UzytkownikId" Integer NOT NULL,
  "TurniejId" Integer NOT NULL
)
/

-- Table ZapisyDruzyn

CREATE TABLE "ZapisyDruzyn"(
  "DruzynaId" Integer NOT NULL,
  "TurniejId" Integer NOT NULL
)
/


-- Create foreign keys (relationships) section ------------------------------------------------- 

ALTER TABLE "Mecze" ADD CONSTRAINT "wystepuje jako gospodarz" FOREIGN KEY ("DruzynaGospodarzyId") REFERENCES "Drużyny" ("DruzynaId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "wystepuje jako gosc" FOREIGN KEY ("DruzynaGosciId") REFERENCES "Drużyny" ("DruzynaId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "rozgrywany jest na" FOREIGN KEY ("StadionId") REFERENCES "Stadiony" ("StadionId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "jest sedziowany przez" FOREIGN KEY ("SedziaId") REFERENCES "Sędziowie" ("SedziaId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "rozgrywany w ramach" FOREIGN KEY ("TurniejId") REFERENCES "Turnieje" ("TurniejId")
/


ALTER TABLE "Mecze" ADD CONSTRAINT "konczy sie" FOREIGN KEY ("WynikId") REFERENCES "Wyniki" ("WynikId")
/


ALTER TABLE "Zaklady" ADD CONSTRAINT "obstawia" FOREIGN KEY ("MeczId") REFERENCES "Mecze" ("MeczId")
/


ALTER TABLE "Zaklady" ADD CONSTRAINT "stawia" FOREIGN KEY ("UzytkownikId") REFERENCES "Uzytkownicy" ("UzytkownikId")
/


ALTER TABLE "ZakładyDlugoterminowe" ADD CONSTRAINT "stawia dlugoterminowo" FOREIGN KEY ("UzytkownikId") REFERENCES "Uzytkownicy" ("UzytkownikId")
/


ALTER TABLE "ZakładyDlugoterminowe" ADD CONSTRAINT "zaklada zwyciezce" FOREIGN KEY ("DruzynaId") REFERENCES "Drużyny" ("DruzynaId")
/


ALTER TABLE "ZakładyDlugoterminowe" ADD CONSTRAINT "obstawia zwyciezce" FOREIGN KEY ("TurniejId") REFERENCES "Turnieje" ("TurniejId")
/


ALTER TABLE "Turnieje" ADD CONSTRAINT "wygrywa" FOREIGN KEY ("DruzynaId") REFERENCES "Drużyny" ("DruzynaId")
/


ALTER TABLE "Zaklady" ADD CONSTRAINT "obstawia w ramach" FOREIGN KEY ("TurniejId") REFERENCES "Turnieje" ("TurniejId")
/





>>>>>>> 5524b2617adf1fac2523d1b829325ce7edef2e28
