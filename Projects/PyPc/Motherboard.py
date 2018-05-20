class Motherboard:
    def __init__(self, bios, model, id, RAMslots, cardslots, manufacturer):
        self.manufacturer = manufacturer
        self.bios = bios
        self.model = model
        self.id = id
        self.RAMslots = RAMslots
        self.cardslots = cardslots
    def runProgram(programName):
        print("Running program "+str(programName))
    
        