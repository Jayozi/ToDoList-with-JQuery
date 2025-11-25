# ToDoList with jQuery

> ⚠️ **Uwaga:** Import zadań z pliku `sample.json` działa tylko, gdy strona jest uruchomiona na **Live Server** lub innym lokalnym serwerze. Przeglądarka blokuje odczyt lokalnych plików (`file://`) z powodów bezpieczeństwa (CORS).

Interaktywna aplikacja lista zadań (To-Do List) stworzona przy użyciu HTML, CSS, jQuery i LocalStorage.

---

## Funkcje

- Dodawanie zadań za pomocą przycisku lub klawisza Enter
- Oznaczanie zadań jako ukończone / aktywne
- Usuwanie pojedynczych zadań oraz masowe usuwanie ukończonych
- Filtrowanie: Wszystkie / Aktywne / Ukończone
- Edycja tekstu zadania poprzez podwójne kliknięcie
- Pasek postępu pokazujący procent ukończonych zadań
- Tryb Dark / Light Mode
- Animacje: fadeIn, fadeOut, pulsowanie przycisku Dodaj, efekt hover przy przyciskach
- Dźwięki przy dodaniu i ukończeniu zadania
- Zapis i odczyt zadań w LocalStorage – zadania pozostają po odświeżeniu strony
- Import i eksport zadań w formacie JSON (`sample.json`)

---

## Struktura projektu

/todo-project
│
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   └── storage.js
└── data/
    └── sample.json


---

## Jak używać

1. Otwórz `index.html` na lokalnym serwerze (np. Live Server w VS Code).
2. Wpisz zadanie w pole tekstowe i kliknij "Dodaj zadanie" lub naciśnij Enter.
3. Zaznacz checkbox przy zadaniu, aby oznaczyć je jako ukończone.
4. Kliknij ikonę kosza 🗑️, aby usunąć zadanie.
5. Użyj filtrów, aby wyświetlić wszystkie, aktywne lub ukończone zadania.
6. Włącz Dark / Light Mode za pomocą przełącznika.
7. Kliknij „Importuj”, aby wczytać przykładowe zadania z `sample.json`.
8. Kliknij „Eksportuj”, aby wyświetlić bieżące zadania w konsoli (F12).

---

## Technologie

- HTML5
- CSS3
- jQuery 3.x
- LocalStorage
- JSON (import/eksport danych)

---

## Dodatki

- Responsywny design
- Efekty animacji i dźwięków
- Tryb Dark / Light
- Edycja zadań w miejscu
- Pasek postępu

---

## Autor

Krystian Koza
