from Account import Account
test = Account("Sharan","sharansajivmenon@gmail.com","NaN",42)
print(test.balance)
test.deposit(100)
print(test.balance)
test.withdraw(143)
test.withdraw(25)
print(test.balance)
