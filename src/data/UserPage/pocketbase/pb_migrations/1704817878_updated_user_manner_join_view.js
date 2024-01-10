/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id, user_manner.user_id,count(manner.manner_idx) as count_manner,manner.manner_title\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx\ngroup by manner.manner_idx"
  }

  // remove
  collection.schema.removeField("wilzrge0")

  // remove
  collection.schema.removeField("puwvsqgh")

  // remove
  collection.schema.removeField("c1encppe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "svz4alrl",
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
    "id": "7tn1lkfk",
    "name": "count_manner",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mtn37jxx",
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
    "query": "select (ROW_NUMBER() OVER()) as id, user_manner.user_id,count(manner.manner_idx) as countManner,manner.manner_title\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx\ngroup by manner.manner_idx"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wilzrge0",
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
    "id": "puwvsqgh",
    "name": "countManner",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c1encppe",
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
  collection.schema.removeField("svz4alrl")

  // remove
  collection.schema.removeField("7tn1lkfk")

  // remove
  collection.schema.removeField("mtn37jxx")

  return dao.saveCollection(collection)
})
