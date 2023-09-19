<script setup lang="ts">
import NavigationBar from "./components/navigation/NavigationBar.vue";
import Topic from "./components/topic/Topic.vue";
import Card from "./components/topic/Card.vue";
import SubTopic from "./components/topic/SubTopic.vue";
import {ref} from "vue";
import {toggleNavbar} from "./main.ts";
import Burger from "./components/Burger.vue";

let currentTopic = ref(0);

function setTopic(event: {topic: number}) {
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
      <Topic v-if="currentTopic == 1" name="Mathematik">
        <SubTopic display="Skripte">
          <Card display="1. Semester" url="https://www.ili.fh-aachen.de/goto_elearning_crs_988059.html"/>
        </SubTopic>
        <SubTopic display="Lernen">
          <Card display="Mathe by Daniel Jung"
                description="YouTube-Tutorials zu allen Mathe-Themen. Sehr gut versändlich und auf den Punkt gebracht"
                url="https://www.youtube.com/@MathebyDanielJung"/>
          <Card display="MathemaTrick" description="YouTube-Tutorials zu Mathe"
                url="https://www.youtube.com/@MathemaTrick"/>
          <Card display="Online Mathe Brückenkurs (OBM+)"
                description="Mathekenntnisse nach der Schule für die Uni auffrischen" url="https://ombplus.de/"/>
          <Card display="Hohe Mathematik (NRW)"
                description="Einführung und Übungen in die Höhere Mathematik vom Land NRW bereitgestellt"
                url="https://hm4mint.nrw/"/>
        </SubTopic>
        <SubTopic display="Sonstiges">
          <Card display="Wolframalpha" description="Mathematische Formeln und Ausdrücke auswerten"
                url="https://www.wolframalpha.com/"/>
        </SubTopic>
      </Topic>
      <Topic v-else-if="currentTopic == 2" name="Programmieren">
        <SubTopic display="Skripte">
          <Card display="1. Semester" url="https://www.ili.fh-aachen.de/goto_elearning_crs_1136668.html#script"/>
        </SubTopic>
        <SubTopic display="Lernen">
          <Card display="The Morpheus Tutorials"
                description="YouTube-Tutorials zu allen möglichen Progammiersprachen, Konzepten und auch teils Uni-Mathe"
                url="https://www.youtube.com/@TheMorpheusTutorials"/>
          <Card display="Geeks for Geeks Java" description="Java-Tutorials in gut verständlichem Englisch"
                url="https://www.geeksforgeeks.org/java/?ref=shm_outind"/>
          <Card display="CodingBat Java" description="Kleinere Übungen, um mit dem Umgang mit Java vertrauter zu werden"
                url="https://codingbat.com/java"/>
          <Card display="Codecadamy Java" description="Geführter Java-Kurs"
                url="https://www.codecademy.com/learn/learn-java"/>
          <Card display="W3school Java" description="Java-Tutorials und gut zum Nachschlagen"
                url="https://www.w3schools.com/java/default.asp"/>
        </SubTopic>
        <SubTopic display="Sonstiges">
          <Card display="Eclipse IDE" description="Simple, aber limitierte IDE zum Einstieg ins Programmieren"
                url="https://www.eclipse.org/downloads/"/>
          <Card display="IntelliJ IDE" description="Komplexe und Umfangreiche IDE; der de facto Industriestandart"
                url="https://www.jetbrains.com/de-de/idea/download/"/>
          <Card display="GitHub Education Pack"
                description="Viele kostenlose Produkte für Schüler u. Studenten. U.a. alle JetBrains Ultimate Lizenzen, Kurse und Cloud-Anbieter"
                url="https://education.github.com/pack"/>
        </SubTopic>
      </Topic>
      <Topic v-else name="Allgemein">
        <SubTopic display="Mensen">
          <Card display="Academica" description="Mensa in der Nähe vom Ponttor"
                url="https://www.studierendenwerk-aachen.de/de/Gastronomie/mensa-academica-wochenplan.html"/>
          <Card display="Ahornstraße" description="Mensa um die Ecke vom ITC"
                url="https://www.studierendenwerk-aachen.de/de/Gastronomie/mensa-ahornstrasse-wochenplan.html"/>
          <Card display="China Mann" description="Günstiger Chinese in der Ponte"
                url="https://www.google.com/maps?sca_esv=565618840&client=safari&vet=12ahUKEwiO-LbhtayBAxXPPOwKHT-SAzIQ8UF6BAgFEG8..i&lei=ljMEZY7VKM_5sAe_pI6QAw&cs=1&um=1&ie=UTF-8&fb=1&gl=de&sa=X&geocode=KUeXh-B5mcBHMTW6BHi-c4dG&daddr=Malteserstraße+24,+52062+Aachen"/>
        </SubTopic>
        <SubTopic display="FH">
          <Card display="Exchange (Mail)" url="https://mail.fh-aachen.de/"/>
          <Card display="ILIAS" description="Material zu den Vorlesungen" url="https://ili.fh-aachen.de/"/>
          <Card display="QIS" description="Anmeldung und Einricht von Klausuren" url="https://qis.fh-aachen.de/"/>
          <Card display="Studiumsvorbereitung" description="Vorbereitende Aufgaben zum Studium"
                url="https://www.fh-aachen.de/studium/informieren/studienvorbereitung"/>
        </SubTopic>
        <SubTopic display="RWTH">
          <Card display="Exchange (Mail)" url="https://mail.rwth-aachen.de/"/>
          <Card display="Hochschulsport" description="Anmeldung zu günstigem Sportangeboten"
                url="https://hochschulsport.rwth-aachen.de/cms/~icgi/HSZ/"/>
          <Card display="Identity Management Selfservice (Idm)" description="Passwörter ändern und verwalten"
                url="https://idm.rwth-aachen.de/selfservice/PersonalData"/>
        </SubTopic>
        <SubTopic display="MATSE">
          <Card display="Wiki" url="https://www.matse.itc.rwth-aachen.de/dienste/public/index.php?m=wiki"/>
          <Card display="Stundenplan" url="https://www.matse.itc.rwth-aachen.de/stundenplan/web/index.html"/>
        </SubTopic>
      </Topic>
    </main>
  </div>
</template>

<style scoped>
#header {
  flex-basis: calc(100vw / 3);
}

main {
  flex-basis: calc(200vw / 3);
}

#app {
  display: flex;
  flex-direction: row;
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
    height: 100vh;
  }

  main {
    width: 100vw;
    height: 100%;
  }
}
</style>
