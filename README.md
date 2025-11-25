# ToDoList with jQuery

> ⚠️ **Uwaga:** Import zadań z pliku `sample.json` działa tylko, gdy strona jest uruchomiona na **Live Server** lub innym lokalnym serwerze. Przeglądarka blokuje odczyt lokalnych plików (`file://`) z powodów bezpieczeństwa (CORS).

## Krótki opis projektu
Interaktywna lista zadań (To-Do List) stworzona przy użyciu HTML, CSS, jQuery i LocalStorage.  
Pozwala na dodawanie, edycję, oznaczanie zadań jako ukończone, filtrowanie oraz zapis stanu w LocalStorage.  
Dodatkowo oferuje tryb Dark/Light, animacje, dźwięki oraz import/eksport zadań w formacie JSON.

## Funkcje i odpowiadające im funkcje z kodu

- **Dodawanie zadań** – `addTask`  
  Dodaje nowe zadanie do listy za pomocą przycisku lub klawisza Enter.

- **Oznaczanie ukończonych zadań** – handler `$("#ToDoContainer").on("change", ".completedButton", ...)`  
  Checkbox pozwala oznaczyć zadanie jako ukończone/nieukończone. Wywołuje `updateCounter()`, `updateProgress()` i odtwarza dźwięk `completeSound.play()`.

- **Usuwanie zadań** – handler `$("#ToDoContainer").on("click", ".delete", ...)` oraz `$("#clearCompleted").click(...)`  
  Usuwa pojedyncze zadania lub wszystkie ukończone z animacją fadeOut(), aktualizuje licznik i zapisuje zmiany w LocalStorage (`saveTasks()`), odtwarza dźwięk `deleteSound.play()`.

- **Edycja w miejscu** – handler `$("#ToDoContainer").on("dblclick", ".taskText", ...)`  
  Pozwala edytować tekst zadania po dwukrotnym kliknięciu. Zmiany zapisuje w `saveTasks()`.

- **Filtrowanie zadań** – handlerzy:  
  - `$("#filterAll").click(...)` – pokazuje wszystkie zadania  
  - `$("#filterActive").click(...)` – pokazuje tylko aktywne  
  - `$("#filterCompleted").click(...)` – pokazuje tylko ukończone  

- **Aktualizacja licznika zadań** – `updateCounter()`  
  Wyświetla liczbę aktywnych i ukończonych zadań.

- **Pasek postępu** – `updateProgress()`  
  Pokazuje procent ukończonych zadań w postaci animowanego paska.

- **Efekt pulsowania przycisku Dodaj** – `pulseAddButton()`  
  Animacja przycisku Dodaj po kliknięciu lub naciśnięciu Enter.

- **Tooltipy i efekty hover** – handler `$("#ToDoContainer").on("mouseenter", ".delete, .completedButtonStyle", ...)`  
  Wyświetla efekty hover i tooltipy przy przyciskach.

- **Zapis i odczyt w LocalStorage** – `saveTasks()`, `lodaTasks()`  
  Automatyczne przechowywanie stanu zadań oraz ich odtworzenie przy odświeżeniu strony.

- **Tryb Dark / Light** – handler `$("#toggleTheme").on("change", ...)`  
  Przełącza motyw strony z animacją fadeToggle().

- **Import zadań z sample.json** – handler `$("#importTasks").click(...)`  
  Wczytuje przykładowe zadania z pliku JSON i dodaje do listy.

- **Eksport zadań do JSON** – handler `$("#exportTasks").click(...)`  
  Tworzy JSON z aktualnych zadań i wyświetla w konsoli.


---

## Struktura projektu

## Struktura projektu

```plaintext
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

```

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
