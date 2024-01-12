/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  collection.options = {
    "query": "select B.title, B.description, B.badge_image,users.id\nfrom users \nleft join Badge as B on users.userBadge = B.id\nwhere users.id = 'c24hzewie4gweri'\n\n\n"
  }

  // remove
  collection.schema.removeField("wrp1g4il")

  // remove
  collection.schema.removeField("axbksj8u")

  // remove
  collection.schema.removeField("3sp3lkh5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uyrdzcvq",
    "name": "title",
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
    "id": "odlpsp2u",
    "name": "description",
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
    "id": "ft0cuv3c",
    "name": "badge_image",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  collection.options = {
    "query": "select B.title, B.description, B.badge_image,B.id\nfrom badge as B\nleft join users on users.userBadge = B.id\nwhere users.id = 'c24hzewie4gweri'"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wrp1g4il",
    "name": "title",
    "type": "text",
    "required": true,
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
    "id": "axbksj8u",
    "name": "description",
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
    "id": "3sp3lkh5",
    "name": "badge_image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/png"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("uyrdzcvq")

  // remove
  collection.schema.removeField("odlpsp2u")

  // remove
  collection.schema.removeField("ft0cuv3c")

  return dao.saveCollection(collection)
})
