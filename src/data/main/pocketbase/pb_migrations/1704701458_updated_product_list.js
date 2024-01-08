/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qsu5gq4x5fuzso9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ijo5vsam",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qsu5gq4x5fuzso9")

  // remove
  collection.schema.removeField("ijo5vsam")

  return dao.saveCollection(collection)
})
