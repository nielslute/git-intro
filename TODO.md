# GitHub Intro

## Het doel van deze opdracht

In deze opdracht leer je werken met Git en GitHub. Hierbij ligt de nadruk op het beheren van verschillende versies van bestanden in een Git repository. Daarnaast leer je hoe je webpagina's kan hosten op GitHub pages zodat het resltaat van de code online bekeken kan worden in de browser.

## Stappen

* [Setup GitHub](#setup)
* [Fork repository](#fork-repository)
* [Werk aan de code](#werk-lokaal-aan-de-code)
* [Publiceer de code](#publiceer-gewijzigde-code-naar-github)
* [Documenteer je bevindingen](#documenteer-je-bevindingen)

## Setup

* Maak een account aan op GitHub
* Installeer GitHub op je laptop

## Fork repository

**Fork deze repository**

1. Ga naar https://github.com/fdnd-task/git-intro
2. Klik op de `Fork` knop , rechtsbovenaan de pagina
3. Volg de stappen

> _Door een repository te forken maak je een kopie onder je eigen GitHub account. Je kan dan aanpassingen doen die alleen in de geforkte repository worden doorgevoerd._

[resource]

**Activeer GitHub Pages in de geforkte repository**

1. Click op de knop `settings`
2. Scroll naar het hoofdstuk `GitHub Pages`
3. Selecteer in de select box onder het kopje `Source` de `master branch`
4. Nadat de pagina ververst is, verschijnt er onder het `GitHub Pages` hoofdstuk een url naar de Github Pages
5. Kopieer de url
6. Ga terug naar de `Code` tab en klik op de `Edit` knop
7. Plak de url in het `Website` veld

> _Met GitHub Pages kan je statische webpagina's online beschikbaar maken via GitHub. Hiermee zijn de webpagina's online te bekijken._

[resource]

## Werk lokaal aan de code

**Clone de repository naar jou lokale machine**

1. Klik onder de `Code` tab op de knop `Clone or download`
2. Kopieer de Web URL die in popup verschijnt
3. Ga naar je terminal en navigeer naar de folder waar je de lokale repository wil opslaan
4. Type het commando `git clone [WEB URL]` en druk Enter
5. De repository wordt nu gedownload naar jou lokale machine

> _Een clone is de lokale versie van de repository op jou machine. Voordta je wijzigingen kan doen aan bestanden, moet je dus eerste de repository clonen._

[resource]

**Change HTML, CSS and JavaScript bestanden**

1. Open de repository folder in een web editor naar keuze
2. Pas de HTML, CSS en JavaScript aan. Geef er een persoonlijke invulling aan (Visitekaartje? Portfolio?)

[resource]

## Publiceer gewijzigde code naar GitHuB

**Check de status van je lokale en online repository**

Met het commando `git status` kan je de status van de lokale, ook wel `local`, en online, ook wel `remote`, repository controleren.

**Stage de bestanden die je naar GitHub wil publiceren**

Als er staat; `Changes not staged for commit`, voer dan het commando `git add .` uit.

[resource]

> _Staging betekent dat je aangeeft welke aangepaste bestanden in de lokale repository je wil gaan publiceren naar de online repository op GitHub_

**Maak een commit aan met een commit message**

Voer vervolgens het commando `git commit -m "een betekenisvolle commit message"`.

[resource]

> _Een commit is het pakketje bestanden dat je klaarzet om gepubliceerd te worden naar de online repository. Geef een betekenisvolle commit message mee, zodat later duidelijk terug te lezen is wat de commit omvat._

**Push de code naar GitHub**

En tenslotte gebruik je het commando `git push` om de commit te publiceren.

[resource]

> _Met push publiceer je de bestanden die in de commit zitten van de lokale repository naar de online repository._

## Documenteer je bevindingen

**Beschrijf het project in de README.md**

In de README.md beschrijf je het project. Bijvoorbeeld de technieken die gebruikt zijn en /of een beschrijving van third-party libraries.

[resource]

**Documenteer je bevindingen in de CHANGELOG.md**

Documenteer je bevindingen in de CHANGELOG.md

[resource]
