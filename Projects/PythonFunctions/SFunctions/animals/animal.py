import random
class Animal(object):
    def __init__(self, name, age):
        self.age = age
        self.name = name
    def getStatus(self):
        print(self.name+" is fine")
    def whoami(self):
        print("My name is "+self.name+" and I am a "+self.type)
        print("My species is "+self.species)
        print("I belong to the group: "+self.group)
    def eat(self):
        food = random.choice(self.foods)
        print("Your animal ate "+food)
