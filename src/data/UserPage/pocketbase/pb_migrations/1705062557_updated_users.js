/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wkctgtuz888e3rm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v9mpjzn2",
    "name": "user_job",
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
  const collection = dao.findCollectionByNameOrId("wkctgtuz888e3rm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v9mpjzn2",
    "name": "uer_job",
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
})
