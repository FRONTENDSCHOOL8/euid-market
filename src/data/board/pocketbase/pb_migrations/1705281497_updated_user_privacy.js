/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rjsmgdieclmipj4")

  // remove
  collection.schema.removeField("h2mbqt21")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nxypqkv1",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rjsmgdieclmipj4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h2mbqt21",
    "name": "user_id",
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
  collection.schema.removeField("nxypqkv1")

  return dao.saveCollection(collection)
})
