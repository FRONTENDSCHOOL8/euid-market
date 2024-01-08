/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63507v1oupw0ixq")

  // remove
  collection.schema.removeField("c9iobdcb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lttclhog",
    "name": "badge_image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/svg+xml"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63507v1oupw0ixq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c9iobdcb",
    "name": "badge_image",
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
  collection.schema.removeField("lttclhog")

  return dao.saveCollection(collection)
})
