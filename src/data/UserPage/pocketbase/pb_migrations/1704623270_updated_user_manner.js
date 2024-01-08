/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6sqxmqhp7zcd3jv")

  // remove
  collection.schema.removeField("g3mqs8a2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h3hmvwq9",
    "name": "manner_idx",
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
  const collection = dao.findCollectionByNameOrId("6sqxmqhp7zcd3jv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g3mqs8a2",
    "name": "manner_idx",
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

  // remove
  collection.schema.removeField("h3hmvwq9")

  return dao.saveCollection(collection)
})
