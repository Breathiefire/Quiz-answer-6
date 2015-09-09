var dinnerIdea = new Array("pizza", "burger", "fish and mashed potatos", "lasagna", "quesadilla", "soup");
    function getString() {
      var random = dinnerIdea[Math.floor(Math.random() * dinnerIdea.length)];
      alert(random);
    }
