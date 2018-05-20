import bs4
import psycopg2
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
        return False
        exit(0)
    if userid > len(row)+1:
        print("Invalid user id.")
        return False
    else:
        if password != row[userid][2]:
            print("Incorrect password "+username)
            return False
        else:
            print("Login successful "+username)
            if userid == 2:
                Admin = True
            return True
#Connect to postgres
try:
    conn = psycopg2.connect(dbname="bank",user="postgres",password="kingini123",port="5432")
    cur = conn.cursor()
    print("Connected")
except Exception as error:
    print("Failed to connect.")
    print("Problem: "+str(error))
# load the file
with open("C:\sharan\Sharan_website_files\Codemirror\modal.html") as inf:
    soup2 = bs4.BeautifulSoup(inf,"html5lib")
with open("C:\sharan\Sharan_website_files\Codemirror\index3.html") as inf2:
    soup = bs4.BeautifulSoup(inf2,"html5lib")
# Clear Body
elem= soup.findAll("body")[0]
elem.clear();
#P tag
p_1 = soup.new_tag('p')
p_1['style']="background-color:yellow;padding:12px 8px 12px 20px;width:250px"
p_1.string = "Please login"
soup.body.append(p_1)
username=soup2.find('input', {'id': 'username'}).get('value')
password=soup2.find('input', {'id': 'password'}).get('value')
login = login(str(username),str(password))
if login == True:
    p_1.string = "Login Successful "+username
else:
    p_1.string = "Login unsuccessful "+username
with open("C:\sharan\Sharan_website_files\Codemirror\index3.html", "w") as file:
    file.write(str(soup))
