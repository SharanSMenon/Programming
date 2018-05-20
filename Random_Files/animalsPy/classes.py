from animal import *
class Mammal(Animal):
    def __init__(self, name, age):
        self.group = "Mammalia"
        self.mType = "Endothermic"
        Animal.__init__(self,name,age)
    def getMType(self):
        return self.mType
class Reptile(Animal):
    def __init__(self, name, age):
        self.group = "Reptilia"
        self.mType = "Ectothermic"
        Animal.__init__(self,name,age)
    def getMType(self):
        print("I am "+self.mType)
class Amphibian(Animal):
    def __init__(self, name, age):
        self.group = "Amphibia"
        self.mType = "Ectothermic"
        Animal.__init__(self,name,age)
    def getMType(self):
        return self.mType
