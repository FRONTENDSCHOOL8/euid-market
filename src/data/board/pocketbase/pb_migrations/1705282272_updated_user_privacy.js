/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rjsmgdieclmipj4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p89dg0ov",
    "name": "age_is_public",
    "type": "bool",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rjsmgdieclmipj4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p89dg0ov",
    "name": "age_is_public",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
