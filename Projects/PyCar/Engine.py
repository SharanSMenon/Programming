class Engine:
    def __init__(self, horsepower, type, cylinders, model, id):
        self.horsepower = horsepower
        self.type = type
        self.cylinders = cylinders
        self.model = model
        self.id = id

    def start(self):
        print("Starting car")

    stop = lambda: print("Stopping car")
