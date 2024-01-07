/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id, user_manner.user_id,manner.manner_title\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx"
  }

  // remove
  collection.schema.removeField("sfuuxbw7")

  // remove
  collection.schema.removeField("qycskbo2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ngm883kb",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bgrad87u",
    "name": "manner_title",
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
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "select user_manner.manner_idx as id, user_manner.user_id,manner.manner_title\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sfuuxbw7",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qycskbo2",
    "name": "manner_title",
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
  collection.schema.removeField("ngm883kb")

  // remove
  collection.schema.removeField("bgrad87u")

  return dao.saveCollection(collection)
})
