$(function() {

    // -- Dźwięki -- 
    const completeSound = new Audio("sounds/complete.mp3");
    const deleteSound = new Audio("sounds/paper-rip.mp3")

    // automatycznie czarny motyw bo ładniejsze
    $("body").toggleClass("dark-mode");

    // dodawanie przyciskiem
    $("#addToDo").click(function(){
        addTask($("#inputToDo").val());
        $("#inputToDo").val("");
        pulseAddButton();
    });

    // dodawanie za pomcoa enter
    $("#inputToDo").on("keypress", function(e){
        if(e.key == "Enter"){
            addTask($(this).val());
        $("#inputToDo").val("");
            pulseAddButton();
        }
    })

    // --- Funckja dodajaca zadania -- //
    function addTask(value, finished = false) {
        const $container = $("#ToDoContainer");
        if(value === "") return;

        const $newDiv = $(`<div class="task ${finished ? "finished" : "unfinished"}"> <span class="taskText">` + value + `</span> <div><span class="completedButtonStyle" title="Oznacz jako ukończone">✓<input type="checkbox" class="completedButton" ${finished ? "checked" : ""}></span> <button class="delete" title="Usuń zadanie">🗑️</button></div> </div>`);

        $newDiv.hide().appendTo($container).fadeIn(300);
        updateCounter()
        saveTasks();
        updateProgress();
    }

    // zmiana zadania na ukonczone i odwrotnie
    $("#ToDoContainer").on("change", ".completedButton", function() {
        const $task = $(this).closest(".task");
        if($(this).is(":checked")) {
            $task.addClass("finished").removeClass("unfinished");
            completeSound.play();
        }
        else
        {
            $task.addClass("unfinished").removeClass("finished");   
        }
        updateCounter();
        saveTasks();
        updateProgress();
    });
        

    // usuwanie zadania
    $("#ToDoContainer").on("click", ".delete", function(){
        const $task = $(this).closest(".task");
        $task.fadeOut(300, function() { 
            $(this).remove();
            updateCounter()
            saveTasks();
            updateProgress();
            deleteSound.play();
        })
    });

    // --- Edycja w miejscu ---
    $("#ToDoContainer").on("dblclick", ".taskText", function() {
        const $span = $(this);
        const text = $span.text();
        const $input = $('<input type="text" class="editInput">').val(text);
        $span.replaceWith($input);
        $input.focus();

        $input.on("keypress", function(e) {
            if (e.key === "Enter") {
                const newText = $input.val().trim();
                if (newText !== "") {
                    const $newSpan = $('<span class="taskText"></span>').text(newText);
                    $input.replaceWith($newSpan);
                    saveTasks();
                }
            }
        });

        // jeśli kliknie gdziekolwiek poza input, anuluj edycję
        $input.on("blur", function() {
            const $newSpan = $('<span class="taskText"></span>').text($input.val().trim() || text);
            $input.replaceWith($newSpan);
        });
    });

    // --- FILTROWANIE --- // 

    // wszytkie
    $("#filterAll").click(function(){
        $(".task").fadeIn(200);
       updateCounter()
    });

    // aktywne
    $("#filterActive").click(function(){
        $(".task").each(function() {
            if($(this).hasClass("finished"))
                $(this).fadeOut(200);
            else
                $(this).fadeIn(200);
        });
        updateCounter()
    });

    // ukończone
    $("#filterCompleted").click(function(){
        $(".task").each(function() {
            if($(this).hasClass("unfinished"))
                $(this).fadeOut(200);
            else
                $(this).fadeIn(200);
        });
        updateCounter()
    });

    // usuwanie zakończonych
    $("#clearCompleted").click(function() {
        $(".finished").fadeOut(300, function() {
            $(this).remove();
            updateCounter();
            saveTasks();
            updateProgress();
            deleteSound.play();
        });
    });

    // --- update'owanie zadan - ile aktywnych ile skonczonych ---
    function updateCounter() {
        const total = $(".task").length;
        const finished = $(".finished").length;
        const unfinished = $(".unfinished").length;

        $("#taskCounter").text(`${unfinished} aktywnych, ${finished} ukończonych`)
    }
    
     // --- Pasek postępu ---
    function updateProgress() {
        const total = $(".task").length;
        const finished = $(".finished").length;
        const percent = total ? (finished / total) * 100 : 0;
        $("#progressBar").animate({ width: percent + "%" }, 300);
    }

    // --- Efekt pulsowania przycisku Dodaj ---
    function pulseAddButton() {
        $("#addToDo").addClass("pulse");
        setTimeout(() => $("#addToDo").removeClass("pulse"), 300);
    }

    // --- Tooltipy i hover ---
    $("#ToDoContainer").on("mouseenter", ".delete, .completedButtonStyle", function() {
        $(this).addClass("hovered");
    }).on("mouseleave", ".delete, .completedButtonStyle", function() {
        $(this).removeClass("hovered");
    });

    // --- Zapis do localstorage ---
    function saveTasks() {
        const tasks = [];
        $(".task").each(function() {
            const text = $(this).find(".taskText").text();
            const done = $(this).hasClass("finished");
            tasks.push({text, done});
        });
        Storage.saveTasks(tasks);
    }

    function lodaTasks() {
        let tasks = Storage.lodaTasks();
        if(tasks.length != 0)
        {
            tasks.forEach(t => addTask(t.text, t.done));
        }
    }

    // Ładowanie 
    lodaTasks();

    $("#toggleTheme").on("change", function() {
        $("body").fadeToggle(200, function() {
            $("body").toggleClass("dark-mode");
            $("body").fadeToggle(200);
        });
    });

    // -- Import/Eksport

    //Import zadań z sample.json
    $("#importTasks").click(function() {
        $.getJSON('data/sample.json', function(data) {
            data.forEach(item => addTask(item.text, item.done));
            alert("Import zakończony!");
        });
    });

    // Eksport danych do JSON
    $("#exportTasks").click(function() {
        const tasks = [];
        $(".task").each(function() {
            const text = $(this).find(".taskText").text();
            const done = $(this).hasClass("finished");
            tasks.push({ text, done });
        });
        const jsonStr = JSON.stringify(tasks, null, 2);
        console.log(jsonStr); 
        alert("Dane zostały wyeksportowane do konsoli (F12)!");
    });


});
