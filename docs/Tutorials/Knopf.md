---
sidebar_position: 1
---

# Knopf

Nach diesem Tutorial kannst du ...
- Einen Knopf erstellen
- Den Text auf einem Knopf setzen
- Ein Element auf dem Bildschirm anzeigen
- Methoden erstellen
- Einem Knopf eine Aktion geben

**Den Knopf Erstellen und auf dem Bildschirm anzeigen**

Zunächst müssen wir eine Variable erstellen und ihr den Typen "Knopf" zuweisen. Diese Variable nennen wir "x"
(hier kann jeder beliebige Name verwendet werden)

```
Erstelle x als Knopf
```

Als Nächstes setzen wir den Text unseres Knopfes zu "Klick mich".

```
Setze den Text von x auf "Klick mich"
```

Nun zeigen wir unseren Knopf auf dem Bildschirm mit folgendem Code an

```
Füge x zum Bildschirm hinzu
```

**Dem Knopf eine Funktion geben**

Um unserem Knopf nun eine Funktion zu geben, müssen wir als Erstes eine Methode erstellen.
Methoden sind Codeabschnitte, die immer wieder aufgerufen werden können. Diese Methode soll "Hallo Welt" in der Dialogbox ausgeben.

```
Erstelle xPressed als Methode
    Gib "Hallo Welt" in der Dialogbox aus
```

Zuletzt müssen wir dem Knopf lediglich sagen, dass er unsere Methode xPressed aufrufen soll, sobald er gedrückt wird

```
Wenn x gedrückt wird rufe xPressed auf
```

**Gesamter Code:**

```
Erstelle x als Knopf
Setze den Text von x auf "Klick mich"
Füge x zum Bildschirm hinzu
Erstelle xPressed als Methode
    Gib "Hallo Welt" in der Dialogbox aus
Wenn x gedrückt wird rufe xPressed auf
```

### Ergebnis

<iframe src="https://craftions.net/incode/preview.html?code=bGV0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKQp4LmlubmVyVGV4dCA9ICJLbGljayBtaWNoIgpkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHgpCnguc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgJ3hHZWRy/GNrdCgpJykKZnVuY3Rpb24geEdlZHL8Y2t0KCkKewphbGVydCgiSGFsbG8gV2VsdCIpCn0K"></iframe>
