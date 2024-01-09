/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("imu40vqs2c6jj0u")

  collection.name = "posts"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("imu40vqs2c6jj0u")

  collection.name = "posts_together"

  return dao.saveCollection(collection)
})
