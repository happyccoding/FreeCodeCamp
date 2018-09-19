/*

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Add your code below this line 
  for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }
  
  console.log(ownProps);
  console.log(prototypeProps);

  console.clear();

  // Add your code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }  
}


Dog.prototype = {
    // Add your code below this line
    constructor: Dog,

    numLegs: 2,
    eat: function() {
      console.log("eat");
    },
    describe: function() {
      console.log("describe");
    }
  };

  Dog.prototype.isPrototypeOf(beagle);

  */

  /*
 function Animal() { }
 function Bird() { }
 function Dog() { }
 
 Bird.prototype = Object.create(Animal.prototype);
 Dog.prototype = Object.create(Animal.prototype);
 
 // Add your code below this line
 Bird.prototype.constructor = Bird;
 Dog.prototype.constructor = Dog;
 
 
 
 let duck = new Bird();
 let beagle = new Dog();
 */

 /*
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log('Woof!');
};




// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

*/

/*
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Add your code below this line
  let glideMixin = function(obj) {
      obj.glide = function() {
          console.log("glide");
      }
  }
  
  glideMixin(bird);
  glideMixin(boat);
  */

/*  
 let funModule = (function() {
    return {
      isCuteMixin : function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin : function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    }
  })();

let animal = {};
funModule.isCuteMixin(animal);
console.log(animal.isCute());
*/


