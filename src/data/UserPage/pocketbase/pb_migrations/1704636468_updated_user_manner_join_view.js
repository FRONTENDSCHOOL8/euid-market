/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id, user_manner.user_id, count(manner.manner_title) as countTitle\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx\ngroup by manner.manner_idx"
  }

  // remove
  collection.schema.removeField("ngm883kb")

  // remove
  collection.schema.removeField("bgrad87u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ksg2mzgt",
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
    "id": "1k5eykw5",
    "name": "countTitle",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id, user_manner.user_id,manner.manner_title\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx"
  }

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

  // remove
  collection.schema.removeField("ksg2mzgt")

  // remove
  collection.schema.removeField("1k5eykw5")

  return dao.saveCollection(collection)
})
