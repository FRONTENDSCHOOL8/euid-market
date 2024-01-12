/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  collection.options = {
    "query": "select B.title, B.description, B.badge_image, users.id, users.userBadge\nfrom users \nleft join badge as B on B.id = users.userBadge\nwhere users.id = 'c24hzewie4gweri'\n\n\n"
  }

  // remove
  collection.schema.removeField("zidgbsij")

  // remove
  collection.schema.removeField("ekaucb6h")

  // remove
  collection.schema.removeField("kpa6bjsz")

  // remove
  collection.schema.removeField("gtnqussx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cjlgaem1",
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
    "id": "jqn8hook",
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
    "id": "fxxvpiiy",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tkxgytug",
    "name": "userBadge",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "000000000000001",
        "000000000000002",
        "000000000000003",
        "000000000000004"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  collection.options = {
    "query": "select B.title, B.description, B.badge_image,users.id, users.userBadge\nfrom users \nleft join Badge as B on users.userBadge = B.id\nwhere users.id = 'c24hzewie4gweri'\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zidgbsij",
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
    "id": "ekaucb6h",
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
    "id": "kpa6bjsz",
    "name": "badge_image",
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
    "id": "gtnqussx",
    "name": "userBadge",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "000000000000001",
        "000000000000002",
        "000000000000003",
        "000000000000004"
      ]
    }
  }))

  // remove
  collection.schema.removeField("cjlgaem1")

  // remove
  collection.schema.removeField("jqn8hook")

  // remove
  collection.schema.removeField("fxxvpiiy")

  // remove
  collection.schema.removeField("tkxgytug")

  return dao.saveCollection(collection)
})
