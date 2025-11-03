class user{constructor(firstName, lastName, age, location)
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.location=location;
}

compareAge (otherUser) 
    {if(this.age>otherUser.age){
        return  `${this.firstName} è più vecchio di ${otherUser.firstName}`;}
        else if (this.age < otherUser.age){
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;}
         else { return `${this.firstName} e ${otherUser.firstName} hanno la stessa età;}
        }}
         
console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));
console.log(user1.compareAge(user3)); 

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const pet1 = new Pet("Fido", "Marco", "cane", "labrador");
const pet2 = new Pet("Micia", "Laura", "gatto", "soriano");
const pet3 = new Pet("Pluto", "Marco", "cane", "meticcio");

const pets = [pet1, pet2, pet3];

pets.forEach(pet => {
  console.log(`Nome: ${pet.petName}, Padrone: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`);
});