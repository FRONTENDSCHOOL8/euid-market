/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63507v1oupw0ixq")

  collection.name = "badges"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63507v1oupw0ixq")

  collection.name = "badge"

  return dao.saveCollection(collection)
})
