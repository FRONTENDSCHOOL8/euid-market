/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "SELECT \n  user_manner.user_id as id, \n  manner.manner_idx, \n  manner.manner_title,\n  count(manner.manner_idx) as count_manner\nFROM user_manner\nJOIN manner ON manner.manner_idx = user_manner.manner_idx\nGROUP BY user_manner.user_id, manner.manner_idx, manner.manner_title\nORDER BY user_manner.user_id, manner.manner_idx;"
  }

  // remove
  collection.schema.removeField("vjm7npcq")

  // remove
  collection.schema.removeField("ngpzqpch")

  // remove
  collection.schema.removeField("3gwi6dyq")

  // remove
  collection.schema.removeField("mfjufucb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "unv6plgs",
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
    "id": "5hgnd4mb",
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
    "id": "njwce5ei",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "select user_id as id, \n  manner.manner_idx, user_manner.user_id,count(manner.manner_idx) as count_manner,manner.manner_title\nfrom user_manner\njoin manner on manner.manner_idx = user_manner.manner_idx\ngroup by user_manner.user_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vjm7npcq",
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
    "id": "ngpzqpch",
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
    "id": "3gwi6dyq",
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
    "id": "mfjufucb",
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
  collection.schema.removeField("unv6plgs")

  // remove
  collection.schema.removeField("5hgnd4mb")

  // remove
  collection.schema.removeField("njwce5ei")

  return dao.saveCollection(collection)
})
