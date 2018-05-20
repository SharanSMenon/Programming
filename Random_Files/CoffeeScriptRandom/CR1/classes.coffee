_ = require 'lodash'
class Animal
	constructor: (@name, @age) ->

	move: (meters) ->
		console.log @name + " moved #{meters}m."

	whoami: () ->
		console.log @name + " is a " + @speciesName + "."
class Tiger extends Animal
	constructor: (@name,@age) ->
		super()
		this.classification = {
			Domain : "Eukaryota",
			Kingdom : "Animalia",
			Phylum: "Chordates",
			Subphylum:"Vertebrates",
			Class:"Mammalia",
			Order:"Carnivora",
			Family:"Felidae",
			Genus:"Panthera",
			Species:"Tigris"
		}		
		this.genus = this.classification["Genus"]
		this.species = this.classification["Species"]
		this.domain = this.classification["Domain"]
		this.kingdom = this.classification["Kingdom"]
		this.biologicalClass = this.classification["Class"]
		this.speciesName = this.genus + " " + this.species
		this.foods = ["Deer", "Elephant", "Fail", "Chicken", "Dog", "Cow", "Buffalo"]
	eat:() -> 
		number = _.random(this.foods.length - 1)
		food = this.foods[number]
		if food == "Fail"
			console.log "Your animal did not catch any food today"
		else
			console.log "Your animal ate #{food}"
tiger = new Tiger("Bob", 5)
tiger.eat()
tiger.whoami()
# console.log tiger.classification
console.log "Domain : #{tiger.domain}"
console.log "Kingdom : #{tiger.kingdom}"
console.log "Class : #{tiger.biologicalClass}"