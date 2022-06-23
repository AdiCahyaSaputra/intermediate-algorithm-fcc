const Person = function(firstAndLast) {
    // Only change code below this line
    let name = firstAndLast;
    // Complete the method below and implement the others similarly
    this.getFirstName = function() {
        return name.split(' ')[0] ?? undefined;
    }

    this.getLastName = function() {
        return name.split(' ')[1] ?? undefined;
    }
    
    this.getFullName = function() {
      return this.getFirstName() + " " + this.getLastName();
    };

    this.setFirstName = function(firstName) {
        name = firstName + " " + this.getLastName();
    }

    this.setLastName = function(lastName) {
        name = this.getFirstName() + " " + lastName;
    }

    this.setFullName = function(fullName) {
       name = fullName;
    }

    return firstAndLast;
  };
  
  const bob = new Person('Bob Ross');
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  console.log(bob.getFullName());
  
  
  bob.setFirstName("Adi");
  // bob.setLastName("Saputra");
  
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  console.log(bob.getFullName());