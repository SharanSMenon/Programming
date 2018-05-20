from atype import *
from classes import *
class Lion(Carnivore, Mammal):
    def __init__(self, name, age):
        self.species = "Panthera Leo"
        self.foods = ["Wilderbeest","Cape Buffalo","Zebra"]
        Carnivore.__init__(self,name,age)
        Mammal.__init__(self,name,age)
    def roar(self):
        print("Roar!")
class Tiger(Carnivore, Mammal):
    def __init__(self, name, age):
        self.species = "Panthera Tigris"
        self.foods = ["Sambar Deer","Cows","Elephant Calves","Sheep"]
        Carnivore.__init__(self,name,age)
        Mammal.__init__(self,name,age)
    def roar(self):
        print("Roar!")
class Elephant(Herbivore, Mammal):
    def __init__(self, name, age):
        self.species = "Elephas Maximus"
        self.foods = ["Acacia","Oak"]
        Herbivore.__init__(self, name,age)
        Mammal.__init__(self,name,age)
    def trumpet(self):
        print("Pwaaaaaa!")
class Human(Omnivore, Mammal):
    def __init__(self, name, age):
        self.species = "Homo Sapiens"
        self.foods = ["Cows","Burgers","Lettuce","Chicken"]
        Omnivore.__init__(self,name,age)
        Mammal.__init__(self,name,age)
class Crocodile(Carnivore, Reptile):
    def __init__(self, name, age):
        self.species = "Crocodylus niloticus"
        self.foods = ["Zebra","Wilderbeest"]
        Carnivore.__init__(self,name,age)
        Reptile.__init__(self,name,age)
    def roar(self):
        print("Grrr!")
class Frog(Carnivore, Amphibian):
    def __init__(self, name, age):
        self.species = "Lithobates catesbeianuss"
        self.foods = ["Bees","Hornets","Wasps"]
        Carnivore.__init__(self,name,age)
        Amphibian.__init__(self,name,age)
    def croak(self):
        print("Croak!")
