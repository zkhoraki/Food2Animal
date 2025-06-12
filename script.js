const foodToAnimal = new Map();
let food;
   
  const getAnimalFromFood = () => {
    food = document.getElementById("food").value;
    if (food == "avacado"){
      document.getElementById("output").innerHTML = "You should not feed avacado to birds, donkeys, rabbits, ducks and horses.";
    }
    if (food == "corn"){
      document.getElementById("output").innerHTML = "You should only feed little amounts of corn to squirrels, because too much is bad for them.";
    }
    if (food == "chocolate"){
      document.getElementById("output").innerHTML = "You should not feed chocolate to ducks, squirrels, dogs, cats, and birds.";
    }
    if (food == "bread"){
      document.getElementById("output").innerHTML = "You should never feed bread to ducks, geese, birds and swans, because they have no nutritional value for them.";
    }
    if (food == "milk"){
      document.getElementById("output").innerHTML = "You should not feed birds milk, because a birds guts is not designed to digest milk properly, which could lead to an upset stomach or serious health problems.";
    }
    if (food == "candy"){
      document.getElementById("output").innerHTML = "You shouldn't feed candy to squirrels.";
    }
    if (food == "citrus fruits"){
      document.getElementById("output").innerHTML = "You shouldn't feed citrus fruits to ducks, swans, and geese.";
    }
     if (food == "pasta"){
      document.getElementById("output").innerHTML = "You should not feed pasta to squirrels.";
    }
     if (food == "pizza"){
      document.getElementById("output").innerHTML = "You should not feed pizza to squirrels.";
    }
    if (food == "nuts"){
      document.getElementById("output").innerHTML = "You shouldn't feed nuts to ducks, swans, and geese";
    }
    if (food == "Peanuts"){
      document.getElementById("output").innerHTML = "You should not feed peanuts to squirrels, because they have no nutrtional value for them.";
    }
    if (food == "bc"){
      document.getElementById("output").innerHTML = "You should not feed breakfast cereals to squirrels.";
    }
    if (food == "onions"){
      document.getElementById("output").innerHTML = "You shouldn't feed onions to ducks, swans, squirrels, and geese.";
    }
    if (food == "cd"){
      document.getElementById("output").innerHTML = "You should never feed carbonated drinks to ducks.";
    }
    if (food == "df"){
      document.getElementById("output").innerHTML = "You shouldn't feed dried fruit to squirrels.";
    }
    if (food == "rice"){
      document.getElementById("output").innerHTML = "It will cause no harm to pigeons if you feed them rice, but it is important to keep in mind that if you do, rice has no nutritional value for them.";
    }
    
    
    

    // document.getElementById("output").innerHTML = foodToAnimal[food];
  }