//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer

      the 'this' keyword holds the value of an object and enables a function to be dynamic.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      implicit binding: what is to the left of the dot when the function is called
      explicit binding: allows you to invoke a function and specify what you want the 'this' keyword to be
      new binding: did not go over
      default binding: the property that if there is nothing to the left of the dot and nothing is being .call/.apply/.bind, then 'this' will default to the window object

  // 3) What is the difference between call and apply?

      //Answer

      .call allows you to pass in parameters to specify 'this'
      .apply allows you to pass in arrays to specify 'this' (if you have numerous parameters, it is better to use .apply)

  // 4) What does .bind do?

      //Answer

      .bind binds the argument to a new function and returns it so you can use it later on.
      (ex. var boundName = sayName.bind(colt) will assign the sayName function after it has assigned 'this' to colt to var boundName)


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var getTheUsername = function() {
      console.log(this.username);
    };
    var user = {
      username: 'toyblox',
      email: 'toyblox@gmail.com',
      getUsername: getTheUsername;
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

  var Car = function(model, make, year) {
    return {
    model: model,
    make: make,
    year: year
  }
};

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' moveCar property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' moveCar property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).
var moveTheCar = function() {
      alert(this.model  + ' ' + this.make + ' ' + this.year);
      return this.move += 10;
  };
var Car = function(model, make, year) {
  return {
    model: model,
    make: make,
    year: year,
    move: 0,
    moveCar: moveTheCar
  }
};

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here

  getYear.call(prius);
  getYear.call(mustang);





//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  return this.username;
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here

  it does not work. gives you an undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

  nothing, the default

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

setTimeout(getUsername.bind(user), 5000);
