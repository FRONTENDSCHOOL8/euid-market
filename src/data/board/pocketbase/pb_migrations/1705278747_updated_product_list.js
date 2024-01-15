/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e09mhnkza6ogha0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4twc2cxm",
    "name": "seller",
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
  const collection = dao.findCollectionByNameOrId("e09mhnkza6ogha0")

  // remove
  collection.schema.removeField("4twc2cxm")

  return dao.saveCollection(collection)
})
