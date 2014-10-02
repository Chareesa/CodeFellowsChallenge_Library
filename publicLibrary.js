
var shelves = {
  horror: [],
  fantasy: [],
  romance: [],
  non_fiction: []
};

var library = {

  numOfShelves: shelves.length,

  reportNumOfBooks: function() {
    var numOfBooks = 0;
    for (var key in shelves) {
      numOfBooks += shelves[key].length;
    }
    console.log("Number of Books:", numOfBooks);
  },

  reportBookTitles: function() {
    for (var key in shelves) {
      var shelf = shelves[key];
      for (var i = 0; i < shelf.length; i++) {
        console.log(key, ": ", shelf[i]);
      }
    }
  }
};

function Book(title, refNum) {
  this.title = title;
  this.refNum = refNum;
  this.enshelf = function(shelf) {
    shelf.push(this);
  };
  this.unshelf = function(shelf) {
    for (var x = 0; x < shelf.length; x++) {
      if (shelf[x].title === this.title) {
        shelf.splice(x,1);
        break;
      }
    }
  };
};

var book1 = new Book('Killer', 001);
book1.enshelf(shelves.horror);

var book2 = new Book('Killers2', 002);
book2.enshelf(shelves.horror);

var book3 = new Book('Chareesa', 003);
book3.enshelf(shelves.fantasy);

library.reportBookTitles();
library.reportNumOfBooks();
