

// Budget Controller
var budgetController = (function() {

    

}) ();


// UI Controller
var UIController = (function() {



}) ();



// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function() {
        
        // Get the input 
        // Add item to the budget contoller
        // Add the new item to UI
        // Calculate budget
        // Display the budget


    });

    document.addEventListener('keypress', function(event) {
        
        if (event.keyCode === 13 || event.which === 13) {
            console.log('ENTER was pressed')
        }

    })

}) (budgetController, UIController);




