"""mod.py"""
class Person(object):
    """Person Class"""
    def __init__(self, name, age, tye):
        self.name = name
        self.type = tye
        self.age = age

    def showType(self):
        """Shows type"""
        return "I am a "+str(self.type)


class Student(Person, object):
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.type = "Student"
        self.grade = 100
        Person.__init__(self, self.name, self.age, self.type)

    def checkGrade(self):
        return self.grade


l = [1, 2, 3, 4, 5]
l.sort()
