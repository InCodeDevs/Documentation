---
sidebar_position: 5
---

# Wiederhole

Der "Wiederhole" Befehl benötigt zwei oder fünf Parameter.

## Zwei Parameter

```
Widerhole [anzahlDerWiederholungen] mal
    // Andere Befehle, die in der Wiederholung aufgerufen werden sollen
```

## Fünf Parameter

```
Widerhole solange [variabelnName] [kleiner/größer/gleich/kleiner-gleich/größer-gleich] [andererVariabelName] ist
    // Andere Befehle, die in der Wiederholung aufgerufen werden sollen
```

## Beispiel

```
Erstelle wiederholungen
Setze den Wert von wiederholungen auf 10
Wiederhole wiederholungen mal
    Gib "Hallo Welt" in der Konsole aus

Erstelle wiederholungen2

Setze den Wert von wiederholungen2 auf 0

Wiederhole solange wiederholungen2 kleiner 10 ist
	Gib "Hallo Welt" in der Konsole aus
	Setze den Wert von wiederholungen2 auf wiederholungen2+1
```
