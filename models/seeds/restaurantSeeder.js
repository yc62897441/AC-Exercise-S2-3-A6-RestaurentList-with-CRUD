// 載入套件
const mongoose = require("mongoose")
const Restaurant = require("../restaurant")
mongoose.connect('mongodb://localhost:27017/restaurant-list')

// 載入餐廳json檔。
// 【../../】->退兩層；【./】->載入對象為檔案 
let restaurantList = require("../.././restaurant.json")
restaurantList = restaurantList.results

// 資料庫操作
const db = mongoose.connection

db.on("error", () => {
  console.log('mongodb error!')
})

db.once("open", () => {
  console.log('mongodb connected!')

  restaurantList.forEach(element => {
    Restaurant.create({
      name: element.name,
      name_en: element.name_en,
      category: element.category,
      image: element.image,
      location: element.location,
      phone: element.phone,
      google_map: element.google_map,
      rating: Number(element.rating),
      description: element.description,
    })
  });

  console.log('Data load in db done.')
})

console.log(restaurantList)


