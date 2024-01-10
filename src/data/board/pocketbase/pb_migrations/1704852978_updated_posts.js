/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("imu40vqs2c6jj0u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lwjjv0to",
    "name": "stack",
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
  const collection = dao.findCollectionByNameOrId("imu40vqs2c6jj0u")

  // remove
  collection.schema.removeField("lwjjv0to")

  return dao.saveCollection(collection)
})
