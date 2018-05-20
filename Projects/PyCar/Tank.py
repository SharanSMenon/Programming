class Tank:
    def __init__(self, capacity, weight, model, id, mpg):
        self.model = model
        self.weight = weight
        self.capacity = capacity
        self.amount = 0
        self.mpg = mpg
        self.miles = mpg * self.amount

    def refuel(self, amount):
        if self.amount + amount > self.capacity:
            print("Too much gas")
        elif amount <= 0:
            if amount == 0:
                print("Why did you call this method")
            else:
                print("You cannot reduce the amount of gas")
        else:
            print("Tank refueled successfully")
            self.amount += amount
            self.miles = self.mpg * self.amount

    def __getitem__(self, item):
        return item

    def amount_of_miles(self):
        print("This car can go " + str(self.miles) + " miles")