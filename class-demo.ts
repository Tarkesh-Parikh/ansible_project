class Animal_Classification {
    animal_class: string;
    
    constructor(animal_class: string) {
        this.animal_class = animal_class;
    }
    
    dispay(): any {
        let result = new Map();
        result.set("class", this.animal_class);
        return result;
    }
    
    
}

class Animal_SubClassification extends Animal_Classification {
    animal_subclass: string;
    
    constructor(animal_subclass: string) {
        if (animal_subclass === "Warm-Blooded"  || animal_subclass === "Cold-Blooded") {
            super("Vertebrates");
        } else {
            super("Invertebrates");
        }
        this.animal_subclass = animal_subclass;
    }
    
    dispay(): any {
        let result = super.dispay();
        result.set("subclass", this.animal_subclass);
        return result;
    }
}

class Animal_Breed extends Animal_SubClassification {
    animal_breed: string;
    
    constructor(animal_breed: string) {
        let animal_subclass = '';
        switch(animal_breed) {
            case "Mammals" || "Birds":
                animal_subclass = "Warm-Blooded";
                break;
            case "Fish" || "Reptiles":
                animal_subclass = "Cold-Blooded";
                break;
        }
        super(animal_subclass);
        this.animal_breed = animal_breed;
    }
    
    dispay(): void {
        let result = super.dispay();
        console.log("Class:\t\t" + result.get("class"));
        console.log("Sub-Class:\t" + result.get("subclass"));
        console.log("Breed:\t\t" + this.animal_breed);
    }
}

let bear = new Animal_Breed("Mammals");
bear.dispay();
