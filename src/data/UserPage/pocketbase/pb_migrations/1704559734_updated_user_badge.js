/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("txu3m5gjslsjc2l")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5hgvhwm7",
    "name": "badge_idx",
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
  const collection = dao.findCollectionByNameOrId("txu3m5gjslsjc2l")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5hgvhwm7",
    "name": "badge_id",
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
