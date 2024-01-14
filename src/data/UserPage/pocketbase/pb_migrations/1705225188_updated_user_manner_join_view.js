/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  user_manner.user_id, \n  manner.manner_idx, \n  manner.manner_title,\n  count(manner.manner_idx) as count_manner\nFROM user_manner\nJOIN manner ON manner.manner_idx = user_manner.manner_idx\nGROUP BY user_manner.user_id, manner.manner_idx, manner.manner_title\nORDER BY user_manner.user_id, manner.manner_idx;"
  }

  // remove
  collection.schema.removeField("unv6plgs")

  // remove
  collection.schema.removeField("5hgnd4mb")

  // remove
  collection.schema.removeField("njwce5ei")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hzlw2sho",
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
    "id": "se8al7zr",
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
    "id": "fec2stlf",
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
    "id": "uu1lmr6b",
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
    "query": "SELECT \n  user_manner.user_id as id, \n  manner.manner_idx, \n  manner.manner_title,\n  count(manner.manner_idx) as count_manner\nFROM user_manner\nJOIN manner ON manner.manner_idx = user_manner.manner_idx\nGROUP BY user_manner.user_id, manner.manner_idx, manner.manner_title\nORDER BY user_manner.user_id, manner.manner_idx;"
  }

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

  // remove
  collection.schema.removeField("hzlw2sho")

  // remove
  collection.schema.removeField("se8al7zr")

  // remove
  collection.schema.removeField("fec2stlf")

  // remove
  collection.schema.removeField("uu1lmr6b")

  return dao.saveCollection(collection)
})
