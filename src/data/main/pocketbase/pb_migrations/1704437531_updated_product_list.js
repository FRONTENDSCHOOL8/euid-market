/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qsu5gq4x5fuzso9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p1znyjxo",
    "name": "save",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qsu5gq4x5fuzso9")

  // remove
  collection.schema.removeField("p1znyjxo")

  return dao.saveCollection(collection)
})
