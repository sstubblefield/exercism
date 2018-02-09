var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  // your code goes here
  // You will have to use the parameter who
  // in some way. In this example, it is just
  // returned, but your solution will have to
  // use a conditional.
  if (who !== undefined) {
    if (who === 'Alice') {
      return 'One for Alice, one for me.';
    }
    
    if (who === 'Bob') {
      return 'One for Bob, one for me.';
    }
  } else { 
    return 'One for you, one for me.';
  }
};

module.exports = TwoFer;
