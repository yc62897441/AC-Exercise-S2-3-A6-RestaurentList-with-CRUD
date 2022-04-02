// require packages used in the project
const express = require("express")
const app = express()
const port = 3000

// 資料庫套件與載入資料庫
const mongoose = require("mongoose")
const Restaurant = require("./models/restaurant")
mongoose.connect("mongodb://localhost:27017/restaurant-list")
const db = mongoose.connection
// 連線異常，連線成功
db.on("error", () => {
  console.log('mongodb error!')
})
db.once("open", () => {
  console.log('mongodb connected!')
})

// require express-handlebars here
const exphbs = require("express-handlebars")

// setting template engine
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// setting static files
app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

// 顯示首頁 routes setting index page (main page)
app.get("/", (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => {
      res.render("index", { restaurants: restaurants })
    })
    .catch(error => console.log(error))
})

// 搜尋功能 route setting search bar output
app.get("/search", (req, res) => {
  let keyword = req.query.keyword
  Restaurant.find()
    .lean()
    .then(restaurants => {
      restaurants = restaurants.filter(element => element.name.toLowerCase().includes(keyword.toLowerCase()))
      // 如果有成功搜尋到結果，則清空回傳到search bar的字串
      if (restaurants.length > 0) {
        keyword = ""
      }
      res.render("index", { restaurants: restaurants, keyword: keyword })
    })
    .catch(error => console.log(error))
})

// 單一餐廳頁面
app.get("/restaurants/:id", (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .lean()
    .then(restaurant => {
      res.render("show", { restaurant: restaurant })
    })
    .catch(error => console.log(error))
})

// 新增餐廳 *** 未完成 ***
app.post("/create", (req, res) => {
  const reqBody = req.body
  console.log(reqBody)

  const restaurant = new Restaurant({
    name: reqBody.name,
    name_en: reqBody.name_en,
    category: reqBody.category,
    image: reqBody.image,
    location: reqBody.location,
    phone: reqBody.phone,
    google_map: reqBody.google_map,
    rating: reqBody.rating,
    description: reqBody.description,
  })
  restaurant.save()
    .then(() => res.redirect("/"))
    .catch(error => console.log(error))
})

// 更新單筆餐廳資料
app.post("/update/:id", (req, res) => {
  const id = req.params.id
  const updateInfo = req.body
  console.log(updateInfo)
  Restaurant.findById(id)
    .then(restaurant => {
      restaurant.name = updateInfo.name
      restaurant.name_en = updateInfo.name_en
      restaurant.category = updateInfo.category
      restaurant.image = updateInfo.image
      restaurant.location = updateInfo.location
      restaurant.phone = updateInfo.phone
      restaurant.google_map = updateInfo.google_map
      restaurant.rating = updateInfo.rating
      restaurant.description = updateInfo.description
      restaurant.save()
      res.redirect(`/restaurants/${id}`)
    })
    .catch(error => console.log(error))
})

// 刪除單筆餐廳資料
app.post("/delete/:id", (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .then(restaurant => {
      restaurant.remove()
      res.redirect("/")
    })
    .catch(error => console.log(error))
})

// 啟動監聽server
app.listen(port, () => {
  console.log(`Serve is listening on http://localhost:${port}`)
})
