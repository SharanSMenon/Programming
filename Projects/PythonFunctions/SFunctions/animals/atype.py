from SFunctions.animals.animal import Animal
class Carnivore(Animal):
    def __init__(self, name, age):
        Animal.__init__(self,name,age)
        self.type = "Carnivore"
class Herbivore(Animal):
    def __init__(self, name, age):
        Animal.__init__(self,name,age)
        self.type = "Herbivore"
class Omnivore(Animal):
    def __init__(self, name, age):
        Animal.__init__(self, name, age)
        self.type = "Omnivore"
