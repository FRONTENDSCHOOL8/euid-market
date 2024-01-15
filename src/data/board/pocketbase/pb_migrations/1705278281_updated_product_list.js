/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e09mhnkza6ogha0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqofxzwh",
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
  const collection = dao.findCollectionByNameOrId("e09mhnkza6ogha0")

  // remove
  collection.schema.removeField("iqofxzwh")

  return dao.saveCollection(collection)
})
