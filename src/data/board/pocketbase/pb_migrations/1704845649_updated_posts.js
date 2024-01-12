/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("imu40vqs2c6jj0u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ta9oem01",
    "name": "category",
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
  collection.schema.removeField("ta9oem01")

  return dao.saveCollection(collection)
})
