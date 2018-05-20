from flask import Flask
import flask
import psycopg2
try:
    conn = psycopg2.connect(dbname="bank",user="postgres",password="kingini123",port="5432")
    cur = conn.cursor()
    print("Connected")
except Exception as error:
    print("Failed to connect.")
    print("Problem: "+str(error))

app = Flask(__name__)
@app.route("/signIn")

def login(username,password):
    cur.execute("SELECT * FROM users;")
    row = cur.fetchall()
    use = username
    for i in range(len(row)):
        if use.lower() == row[i][1].lower():
            userid=row[i][0]-1
            break
        else:
            userid = None
    if userid == None:
        print("Invalid username")
        return "Fail"
    else:
        if password != row[userid][2]:
            print("Incorrect password ")
            return "<h1>Fail</h1>"
        else:
            print("Login successful ")
            if userid == 2:
                Admin = True
            return "<h1>Success</h1>"
if __name__ == "__main__":
    app.run("Sharan","Kingini123")
