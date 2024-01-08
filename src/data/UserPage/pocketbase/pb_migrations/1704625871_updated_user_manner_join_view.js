/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd")

  collection.options = {
    "query": "select user_manner.id, user_manner.user_id, manner.manner_title\nfrom user_manner\nleft outer join manner on manner.manner_idx = user_manner.manner_idx"
  }

  // remove
  collection.schema.removeField("ift429nc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g2g3xflj",
    "name": "user_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wynxsqzx",
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
    "query": "select user_manner.id, user_manner.user_id\nfrom user_manner\nleft outer join manner on manner.manner_idx = user_manner.manner_idx"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ift429nc",
    "name": "user_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("g2g3xflj")

  // remove
  collection.schema.removeField("wynxsqzx")

  return dao.saveCollection(collection)
})
