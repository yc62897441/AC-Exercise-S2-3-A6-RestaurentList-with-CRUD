# Project AC-Exercise-S2-3-A6-RestaurentList-with-CRUD
Alpha camp Semester2-3 A6 Restaurent List with CRUD

![alt text](https://github.com/yc62897441/AC-Exercise-S2-3-A6-RestaurentList-with-CRUD/blob/main/images/sample001.jpg?raw=true)

![alt text](https://github.com/yc62897441/AC-Exercise-S2-3-A6-RestaurentList-with-CRUD/blob/main/images/sample002.jpg?raw=true)

![alt text](https://github.com/yc62897441/AC-Exercise-S2-3-A6-RestaurentList-with-CRUD/blob/main/images/sample003.jpg?raw=true)

## Environment & Prerequisites

nvm: 1.1.9

express: ^4.17.3

express-handlebars: ^6.0.3

@popperjs/core: ^2.11.4

body-parser: ^1.19.2

mongoose: ^6.2.9

## Installing and Execution
1. Clone projet to your localhost
```
git clone https://github.com/yc62897441/AC-Exercise-S2-3-A6-RestaurentList-with-CRUD.git
```

2. change directory to project file "AC-Exercise-S2-3-A6-RestaurentList-with-CRUD"
```
cd "AC-Exercise-S2-3-A6-RestaurentList-with-CRUD"
```

3. install npm module
```
npm install
```

4. change directory to restaurant seeds file "AC-Exercise-S2-3-A6-RestaurentList-with-CRUD/models/seeds"   
```
cd models/seeds
```

5. generate restaurant seeds(restaurant list) 
```
node restaurantSeeder.js
```

6. back directory to project file "AC-Exercise-S2-3-A6-RestaurentList-with-CRUD"   
```
cd ..
cd ..
```

7. Run project
```
npm run dev
```

8. browse: localhost:3000


## Features
1. List a restaurants list

2. Use "Search bar" to search restaurants

3. Click button "Detail" to link to single restaurant page for more information

4. Click button "Delete" to remove single restaurant data

5. Click button "Create a New Restaurant", input restaurant data and click button "Create" to create a new restaurant

6. Click button "Update this Restaurant Information", input restaurant data and click button "Update" to update restaurant data