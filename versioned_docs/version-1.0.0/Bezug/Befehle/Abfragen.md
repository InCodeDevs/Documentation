---
sidebar_position: 6
---

# Abfragen

## Wenn
Der "Wenn" Befehl benötigt vier oder sechs Parameter.

## Vier Parameter

```
Wenn [variabelnName] [kleiner/größer/gleich/kleiner-gleich/größer-gleich] [andererVariabelName] ist
    // Andere Befehle, die aufgerufen werden sollen wenn die Bedingung wahr ist
```

## Sechs Parameter

```
Wenn [variabelnName] [gedrückt/berührt/nicht-berührt] wird rufe [methodenName] auf
```

## Beispiel

```
Erstelle nummer
Setze den Wert von nummer auf 1

Wenn nummer gleich 1 ist
    Gib "Nummer ist 1" in der Konsole aus

Erstelle x als Knopf
Wenn x gedrückt wird rufe xPressed auf

Erstelle xPressed als Methode
    Gib "x wurde gedrückt" in der Dialogbox aus 
```

## Sonst wenn

Der "Sonst wenn" Befehl benötigt vier Parameter.

```
Wenn [variabelnName] [kleiner/größer/gleich/kleiner-gleich/größer-gleich] [andererVariabelName] ist
    // Andere Befehle, die aufgerufen werden sollen wenn die Bedingung wahr ist 
Sonst Wenn [variabelnName] [kleiner/größer/gleich/kleiner-gleich/größer-gleich] [andererVariabelName] ist
    // Andere Befehle, die aufgerufen werden sollen wenn die Bedingung wahr ist
```

## Beispiel

```
Erstelle nummer
Setze den Wert von nummer auf 1

Wenn nummer gleich 1 ist
    Gib "Nummer ist 1" in der Konsole aus
Sonst wenn nummer gleich 2 ist
    Gib "Nummer ist 2" in der Konsole aus 
```

# Sonst 

Der "Sonst" Befehl benötigt null Parameter.

```
Wenn [variabelnName] [kleiner/größer/gleich/kleiner-gleich/größer-gleich] [andererVariabelName] ist
    // Andere Befehle, die aufgerufen werden sollen wenn die Bedingung wahr ist 
Sonst
    // Andere Befehle, die aufgerufen werden sollen wenn die Bedingung nicht wahr ist
```


## Beispiel

```
Erstelle nummer
Setze den Wert von nummer auf 1

Wenn nummer gleich 1 ist
    Gib "Nummer ist 1" in der Konsole aus
Sonst
    Gib "Nummer ist nicht 2" in der Konsole aus 
```
