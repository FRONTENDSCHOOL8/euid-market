/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1ljkukkbqvl8bm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vl288bj6",
    "name": "created_by",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1ljkukkbqvl8bm")

  // remove
  collection.schema.removeField("vl288bj6")

  return dao.saveCollection(collection)
})
