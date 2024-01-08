/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "select user_manner.manner_idx as id, user_manner.user_id,manner.manner_title\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx"
  }

  // remove
  collection.schema.removeField("mkilwhle")

  // remove
  collection.schema.removeField("ogx80gwr")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "select user_manner.manner_idx as id, user_manner.user_id,manner.manner_idx\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mkilwhle",
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
    "id": "ogx80gwr",
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

  // remove
  collection.schema.removeField("sfuuxbw7")

  // remove
  collection.schema.removeField("qycskbo2")

  return dao.saveCollection(collection)
})
