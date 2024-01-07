/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id, user_manner.user_id,count(manner.manner_idx) as countManner,manner.manner_title\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx\ngroup by manner.manner_idx"
  }

  // remove
  collection.schema.removeField("oerl1qs1")

  // remove
  collection.schema.removeField("ejoonsku")

  // remove
  collection.schema.removeField("wam1tvfj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tjtd6rpa",
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
    "id": "agf2tazs",
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
    "id": "ivpwboql",
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
    "query": "select (ROW_NUMBER() OVER()) as id, user_manner.user_id, manner.manner_title,count(manner.manner_idx) as countManner\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx\ngroup by manner.manner_idx"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oerl1qs1",
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
    "id": "ejoonsku",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wam1tvfj",
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

  // remove
  collection.schema.removeField("tjtd6rpa")

  // remove
  collection.schema.removeField("agf2tazs")

  // remove
  collection.schema.removeField("ivpwboql")

  return dao.saveCollection(collection)
})
