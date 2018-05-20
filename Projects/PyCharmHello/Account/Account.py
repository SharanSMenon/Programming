class Account:
    def __init__(self, name, email, phone, balance):
        self.name = name
        self.phone = phone
        self.balance = balance
        self.email = email

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            return print("Not enough balance")
        self.balance -= amount