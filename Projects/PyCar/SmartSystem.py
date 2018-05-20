class SmartSystem:
    def __init__(self, model, touchscreen, TV, rearcamera, airconditioning, OS, ACrange):
        self.model = model
        self.touchscreen = touchscreen
        self.TV = TV
        self.rearcamera = rearcamera
        self.airconditioning = airconditioning
        self.OS = OS
        if self.airconditioning:
            self.ACrange = ACrange
            self.temperature = self.ACrange[0]

    def turnacon(self, temp):
        if self.airconditioning:
            if temp > self.ACrange[0] and temp < self.ACrange:
                self.temperature = temp
                print("Temperature successfully changed")
            else:
                print("Too high/low or not a valid value.")
        else:
            print("Your car does not support air conditioning")

    def playsong(self, song):
        print("Playing song: " + str(song))

    def playmovie(self, movie):
        if self.TV:
            print("Playing movie: " + str(movie))
        else:
            print("Your car cannot play movies.")
