  function matchFunction() {

      let name1 = prompt("Name of first person");
      userName1 = name1.charAt(0).toUpperCase() + name1.slice(1);

      let name2 = prompt("Name of second person");
      userName2 = name2.charAt(0).toUpperCase() + name2.slice(1);


      const score = Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100



      if (score >= 50) {
          message = "You love each other! ❤️ ❤️ ❤️";
      } else {
          message = "You don't love each other... 😢 😢 😢 ";
      }

      alert("The score for " + userName1 + " and " + userName2 + " is " + score + "%! " + "\n" + message);
  }
