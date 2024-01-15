/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rjsmgdieclmipj4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mra6zgq2",
    "name": "field",
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

  // remove
  collection.schema.removeField("mra6zgq2")

  return dao.saveCollection(collection)
})
