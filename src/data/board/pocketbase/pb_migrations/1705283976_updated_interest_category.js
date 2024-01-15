/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7j50ob8xs7dylo8")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7j50ob8xs7dylo8")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
