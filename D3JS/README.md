# D3 JS files
These are all D3JS projects I did. If you need a reference for d3 js,

You can always go to [Bl.ocks](bl.ocks.org). They are a lot of examples

In order to import D3 js without intstalling it, use this link:
```html
<script src="//d3js.org/d3.v4.min.js"></script>
```
You can also install it

Type in 
```
npm install d3
```
Go to your terminal and type in the following commnd
## Rendering your project
You cannot open the file and expect it to render

For most cases, the viz will be using an external data file and your
vis will not work in modern browsers

You have to set up a server

I use `live-server` but if you have python installed, you can also use that.
### Setting up the server
#### Live Server
You are going to need nodejs and npm installed for this.

If you dont have nodejs installed, head over to this [link](http://nodejs.org)
and get it installed.

Link to the NPM page [here](https://www.npmjs.com/package/live-server)

Type in the following command in your terminal:
```sh
npm install -g live-server
```
Once it has finished installing, type in 
```
live-server
```
This should return the following:
```
Serving "<Folder>" at http://127.0.0.1:port
GET /favicon.ico 404 13382.611 ms - 24
Ready for changes
```
You are ready to go. Head over to that URL and you should be ready
#### Python
Install python by going to this [link](www.python.org)

Once that is finished, type in
```
python -m http.server
```
#### You can now render the files
## About the folder
This section is about the folder that contains this document
### Basic file structure for projects
#### What to expect
Below is the file structure used in most project folders
```
my-viz/
  data/
    data.json
    <More data files>
  js/
    index.js
    <More js files>
  css/
    index.css
    <More css files>
  README.md
```
I recommend that you use this file structure (`README.md` is optional)
#### Exceptions
The `D3Course/` folder is an exception

The file structure of a folder in this category looks like this
```
my-viz/
  data.json // And more data files. There might not even be a data file
  index.html // And more html files
  styles.css // And more css files
  script.js // And more Javascript files
```
There are also stand-alone files, like `stacked_horizontal_bar.html`
#### Extra info
Note: the files in the `data/` directory can be `.json`, `.tsv`, or `.csv`

D3 supports all three file types
## Thank you for reading