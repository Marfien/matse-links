<script setup lang="ts">
import NavigationBar from "./components/navigation/NavigationBar.vue";
import Topic from "./components/topic/Topic.vue";
import Card from "./components/topic/Card.vue";
import SubTopic from "./components/topic/SubTopic.vue";
import {ref, watchEffect} from "vue";
import {toggleNavbar} from "./main.ts";
import Burger from "./components/Burger.vue";

let currentTopic = ref(handleSectionSelection());

watchEffect(() => {
  let topicId = currentTopic.value;

  if (topicId == 1) {
    document.title = "MATSE-Links - Mathematik";
  } else if (topicId == 2) {
    document.title = "MATSE-Links - Informatik";
  } else {
    document.title = "MATSE-Links - Allgemein";
  }
});

function handleSectionSelection() {
  let args = window.location.href.split("#");
  if (args.length != 2) return 0;

  let section = args[args.length - 1];
  if (!section) return 0;
  section = section.toLowerCase();

  if (section == "mathe" || section == "math"|| section == "mathematik")
    return 1;
  if (section == "progamming"  || section == "programmieren")
    return 2;

  return 0;
}

function setTopic(event: { topic: number }) {
  currentTopic.value = event.topic;

  if (window.outerWidth <= 1024) {
    toggleNavbar();
  }
}
</script>

<template>
  <div id="app">
    <Burger/>
    <header id="header">
      <NavigationBar @settopic="setTopic"/>
    </header>
    <main>
      <transition mode="out-in">
        <Topic v-if="currentTopic == 1" name="Mathematik">
          <SubTopic display="Lineare Algebra 1">
            <Card display="Skript" url="https://www.matse.itc.rwth-aachen.de/dienste/public/show_document.php?id=59770667"/>
            <Card display="Ilias" url="https://www.ili.fh-aachen.de/goto_elearning_crs_1147283.html"/>
            <Card display="Hausaufgaben-Abgabe" url="https://www.ili.fh-aachen.de/ilias.php?ref_id=1147294&target=1147294&cmd=showOverview&cmdClass=ilobjexercisegui&cmdNode=bw:o5&baseClass=ilexercisehandlergui"/>
            <Card display="MATSE-Wiki-Seite" url="https://www.matse.itc.rwth-aachen.de/dienste/public/index.php?m=wiki&p=Lehrveranstaltungen/Pflichtmodule/Mathematik/Lineare_Algebra_I"/>
          </SubTopic>
          <SubTopic display="Analysis 1">
            <Card display="Skript" url="https://www.ili.fh-aachen.de/goto_elearning_file_1165674_download.html"/>
            <Card display="Ilias" url="https://www.ili.fh-aachen.de/goto_elearning_crs_1140827.html"/>
            <Card display="Hausaufgaben-Abgabe" url="https://www.ili.fh-aachen.de/ilias.php?ref_id=1140950&target=1140950&cmd=showOverview&cmdClass=ilobjexercisegui&cmdNode=bw:o5&baseClass=ilexercisehandlergui"/>
          </SubTopic>
          <SubTopic display="Lernen">
            <Card display="Mathe by Daniel Jung"
                  description="YouTube-Tutorials zu allen Mathe-Themen. Sehr gut versändlich und auf den Punkt gebracht"
                  url="https://www.youtube.com/@MathebyDanielJung"/>
            <Card display="MathemaTrick" description="YouTube-Tutorials zu Mathe"
                  url="https://www.youtube.com/@MathemaTrick"/>
            <Card display="Mathe Peter" description="YouTube-Tutorials zu Uni-Mathe (hauptsächlich Analysis)"
                  url="https://www.youtube.com/@MathePeter"/>
            <Card display="Hohe Mathematik (NRW)"
                  description="Einführung und Übungen in die Höhere Mathematik vom Land NRW bereitgestellt"
                  url="https://hm4mint.nrw/"/>
          </SubTopic>
          <SubTopic display="Sonstiges">
            <Card display="Wolfram|Alpha" description="Mathematische Formeln und Ausdrücke auswerten"
                  url="https://www.wolframalpha.com/"/>
            <Card display="Symbolab" description="Alternaive zu Wolfram|Alpha mit kostenlosen Lösungsweg"
                  url="https://de.symbolab.com/"/>
          </SubTopic>
        </Topic>
        <Topic v-else-if="currentTopic == 2" name="Informatik">
          <SubTopic display="Progammieren mit Java">
            <Card display="Skript" url="https://www.matse.itc.rwth-aachen.de/dienste/public/show_document.php?id=59770673"/>
            <Card display="Ilias" url="https://www.ili.fh-aachen.de/goto_elearning_crs_1136668.html"/>
            <Card display="Hausaufgaben-Abgabe" url="https://www.ili.fh-aachen.de/ilias.php?ref_id=1136687&target=1136687&cmd=showOverview&cmdClass=ilobjexercisegui&cmdNode=bw:o5&baseClass=ilexercisehandlergui"/>
            <Card display="MATSE-Wiki-Seite" url="https://www.matse.itc.rwth-aachen.de/dienste/public/index.php?m=wiki&p=Lehrveranstaltungen/Pflichtmodule/Programmiersprachen/Programmierung_mit_Java"/>
          </SubTopic>
          <SubTopic display="IT-Grundlagen">
            <Card display="Skript" url="https://www.ili.fh-aachen.de/goto_elearning_file_1162528_download.html"/>
            <Card display="Ilias" url="https://www.ili.fh-aachen.de/goto_elearning_crs_1162518.html"/>
          </SubTopic>
          <SubTopic display="Lernen">
            <Card display="The Morpheus Tutorials"
                  description="YouTube-Tutorials zu allen möglichen Progammiersprachen, Konzepten und auch teils Uni-Mathe"
                  url="https://www.youtube.com/@TheMorpheusTutorials"/>
            <Card display="Geeks for Geeks Java" description="Java-Tutorials in gut verständlichem Englisch"
                  url="https://www.geeksforgeeks.org/java/?ref=shm_outind"/>
            <Card display="CodingBat Java"
                  description="Kleinere Übungen, um mit dem Umgang mit Java vertrauter zu werden"
                  url="https://codingbat.com/java"/>
            <Card display="Codecadamy Java" description="Geführter Java-Kurs"
                  url="https://www.codecademy.com/learn/learn-java"/>
            <Card display="W3school Java" description="Java-Tutorials und gut zum Nachschlagen"
                  url="https://www.w3schools.com/java/default.asp"/>
          </SubTopic>
          <SubTopic display="Software & Lizenzen">
            <Card display="Eclipse IDE" description="Simple, aber limitierte IDE zum Einstieg ins Programmieren"
                  url="https://www.eclipse.org/downloads/"/>
            <Card display="IntelliJ IDE" description="Komplexe und Umfangreiche IDE; der de facto Industriestandart"
                  url="https://www.jetbrains.com/de-de/idea/"/>
            <Card display="VS Code" description="Sehr flexible und schnelle IDE"
                  url="https://code.visualstudio.com"/>
            <Card display="GitHub Education Pack"
                  description="Viele kostenlose Produkte für Schüler u. Studenten. U.a. alle JetBrains Ultimate Lizenzen, Kurse und Cloud-Anbieter"
                  url="https://education.github.com/pack"/>
            <Card display="FH-Aachen GitLab" description="Git-Instance der FH; Code online sichern und zusammenarbeiten" url="https://git.fh-aachen.de"/>
            <Card display="Azure Dev Tools" description="Azure-Cloud Credits und Zugriff auf viele weitere Produkte von Microsoft (außer Office-Produkte)" url="https://www.fh-aachen.de/fh-aachen/hochschulstruktur/zentrale-betriebseinheiten/dvz/anleitungen/microsoft-azure-dev-tools-for-teaching"/>
          </SubTopic>
        </Topic>
        <Topic v-else name="Allgemein">
          <SubTopic display="Mensen">
            <Card display="Academica" description="Mensa in der Nähe vom Ponttor"
                  url="https://www.studierendenwerk-aachen.de/de/Gastronomie/mensa-academica-wochenplan.html"/>
            <Card display="Ahornstraße" description="Mensa um die Ecke vom ITC"
                  url="https://www.studierendenwerk-aachen.de/de/Gastronomie/mensa-ahornstrasse-wochenplan.html"/>
          </SubTopic>
          <SubTopic display="MATSE">
            <Card display="Wiki" url="https://www.matse.itc.rwth-aachen.de/dienste/public/index.php?m=wiki"/>
            <Card display="Stundenplan" url="https://www.matse.itc.rwth-aachen.de/stundenplan/web/index.html"/>
            <Card display="Dienste" url="https://www.matse.itc.rwth-aachen.de/dienste/protected/index.php"/>
          </SubTopic>
          <SubTopic display="IHK">
            <Card display="Anmeldung" description="Anmeldung beim Azubi-Portal der IHK" url="https://berufsausbildung-aachen-ihk.de/tibrosBB/BB_auszubildende.jsp"/>
            <Card display="Ausbildungsnachweise" description="Einreichen der Ausbildungsnachweise" url="https://berufsausbildung-aachen-ihk.de/tibrosBB/azubiHeft.jsp"/>
          </SubTopic>
          <SubTopic display="FH">
            <Card display="ILIAS" description="Material zu den Vorlesungen" url="https://ili.fh-aachen.de/"/>
            <Card display="QIS" description="Anmeldung und Einricht von Klausuren" url="https://qis.fh-aachen.de/"/>
            <Card display="Exchange (Mail)" url="https://mail.fh-aachen.de/"/>
            <Card display="VPN" description="VPN-Dienst, um bspw. auf das QIS von Außerhalb der Uni zuzugreifen" url="https://vpn.fh-aachen.de"/>
          </SubTopic>
          <SubTopic display="RWTH">
            <Card display="Exchange (Mail)" url="https://mail.rwth-aachen.de/"/>
            <Card display="Hochschulsport" description="Anmeldung zu günstigem Sportangeboten"
                  url="https://hochschulsport.rwth-aachen.de/cms/~icgi/HSZ/"/>
          </SubTopic>
          <SubTopic display="Software">
            <Card display="MS Office 365" description="Excel, Word, PowerPoint, etc." url="https://www.fh-aachen.de/fh-aachen/hochschulstruktur/zentrale-betriebseinheiten/dvz/anleitungen/office-365"/>
          </SubTopic>
          <SubTopic display="Sonstiges">
            <Card display="Paddel" description="Spicker, Lösungen und andere Materialien rund um MATSE" url="https://paddel.xyz"/>
            <Card display="Tamiras Proton" description="Mitschriften aus dem Unterricht" url="https://drive.proton.me/urls/64WET4A3X0#zKl6OWbuL3Rq"/>
          </SubTopic>
        </Topic>
      </transition>
    </main>
  </div>
</template>

<style scoped>
#header {
  flex-basis: calc(100vw / 3);
}

main {
  flex-basis: calc(200vw / 3);
  background-color: var(--topic-background-color);
  background-image: var(--nav-bar-wave);
  background-position: -2px -2px;
  background-repeat: no-repeat;
  background-size: auto calc(100% + 4px);
  height: 100dvh;
}

main > * {
  padding-left: 8dvh;
}

#app {
  display: flex;
  flex-direction: row;
}

.v-enter-active {
  transition: all 150ms ease-out;
}

.v-leave-active {
  transition: all 200ms ease-out;
}

.v-enter-from {
  transform: translateY(-1rem);
  opacity: 0;
}

.v-leave-to {
  transform: translateY(1rem);
  opacity: 0;
}

@media (max-width: 1024px) {
  #app {
    display: block;
  }

  #header {
    height: 0;
    transition: ease-in 200ms;
    overflow-y: clip;
  }

  #header.open {
    height: 100dvh;
  }

  main {
    width: 100vw;
    height: calc(100dvh - 5rem);
    background-image: none;
  }

  main > * {
    padding-top: calc(1.5 * 100vw * (30 / 1024));
    padding-left: 0;
  }

  /* transitions */
  .v-enter-active,
  .v-leave-active {
    transition: none;
  }

  .v-enter-from,
  .v-leave-to {
    transform: none;
    opacity: 1;
  }
}
</style>
