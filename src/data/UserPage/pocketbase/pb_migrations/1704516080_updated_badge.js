/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63507v1oupw0ixq")

  // remove
  collection.schema.removeField("r1q9fbkt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "07lthl0r",
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
  const collection = dao.findCollectionByNameOrId("63507v1oupw0ixq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r1q9fbkt",
    "name": "badge_idx",
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

  // remove
  collection.schema.removeField("07lthl0r")

  return dao.saveCollection(collection)
})
