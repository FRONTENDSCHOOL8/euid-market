/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("txu3m5gjslsjc2l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pjnr9i7d",
    "name": "received_day",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("txu3m5gjslsjc2l")

  // remove
  collection.schema.removeField("pjnr9i7d")

  return dao.saveCollection(collection)
})
