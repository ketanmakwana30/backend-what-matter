## setup ejs:

1. ejs install -
   npm i ejs

2. configure ejs -
   app.set("view engine", "ejs");

3. Create views folder

4. usmein ejs files banao

5. send ki jagah render karo => render karte waqt index.ejs ki jagah only index likho

EX (index.js) : `app.set("view engine", "ejs");`

---

## static files setup karne ke liye:

1. create a folder called public

2. create three folders inside it, images, stylesheets, javascripts

3. configure the express static in index. js file

4. understand the path

EX (index.js) : `app.use(express.static("./public"));`
<br>
EX (index.ejs) : `<link rel="stylesheet" href="../stylesheets/about.css" />`
