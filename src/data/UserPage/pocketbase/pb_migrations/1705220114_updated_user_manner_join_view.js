/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id, manner.manner_idx, user_manner.user_id,count(manner.manner_idx) as count_manner,manner.manner_title\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx\n"
  }

  // remove
  collection.schema.removeField("qeze7wi4")

  // remove
  collection.schema.removeField("h03f5nuo")

  // remove
  collection.schema.removeField("1ryolwqg")

  // remove
  collection.schema.removeField("a4vxlj4a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "foawdsbj",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6dsluglg",
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
    "id": "irh5lvgk",
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
    "id": "2znwbczm",
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
    "query": "select (ROW_NUMBER() OVER()) as id, manner.manner_idx,user_manner.user_id,count(manner.manner_idx) as count_manner,manner.manner_title\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx\ngroup by user_manner.user_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qeze7wi4",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h03f5nuo",
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
    "id": "1ryolwqg",
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
    "id": "a4vxlj4a",
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
  collection.schema.removeField("foawdsbj")

  // remove
  collection.schema.removeField("6dsluglg")

  // remove
  collection.schema.removeField("irh5lvgk")

  // remove
  collection.schema.removeField("2znwbczm")

  return dao.saveCollection(collection)
})
