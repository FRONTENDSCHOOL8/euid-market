/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x0ezyzjp19yabmy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sjwtfy70",
    "name": "userJob",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "alcaequr",
    "name": "userGender",
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
  const collection = dao.findCollectionByNameOrId("x0ezyzjp19yabmy")

  // remove
  collection.schema.removeField("sjwtfy70")

  // remove
  collection.schema.removeField("alcaequr")

  return dao.saveCollection(collection)
})
