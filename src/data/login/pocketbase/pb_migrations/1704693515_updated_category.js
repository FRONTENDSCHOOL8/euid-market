/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1dxp0hyx87m1tit")

  collection.name = "interest_category"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1dxp0hyx87m1tit")

  collection.name = "category"

  return dao.saveCollection(collection)
})
