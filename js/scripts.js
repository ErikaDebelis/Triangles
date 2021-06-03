$(document).ready(function() {
  $("form#lengths").submit(function(event) {
    event.preventDefault(); 
    const side1 = parseInt($("input#length1").val());
    const side2 = parseInt($("input#length2").val());
    const side3 = parseInt($("input#length3").val());
  
  if (side1 === side2 && side1 === side3) {
    $('#equilateral').show();
  } else if (side1 === side2 && side1 + side2 === side3 || side2 === side3 && side2 + side3 === side1 || side1 === side2 && side3 + side1 === side2) {
    $('#isosceles').show();
  } else if (side1 != side2 != side3 && side1 + side2 === side3 || side1 != side2 != side3 && side2 + side3 === side1 || side1 != side2 != side3 && side3 + side1 === side2) {
    $('#scalene').show();
  } else {
    $('#not').show();
  }
  });
});

