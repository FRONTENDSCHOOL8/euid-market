/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  collection.options = {
    "query": "select users.userBadge,users.id,B.badge_image\nfrom users \nleft join badge as B on B.badge_idx = users.userBadge\nwhere users.id = 'c24hzewie4gweri'\n\n\n\n"
  }

  // remove
  collection.schema.removeField("bsu97sfn")

  // remove
  collection.schema.removeField("sip2hmij")

  // remove
  collection.schema.removeField("ihrfrivi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nd9nuplw",
    "name": "userBadge",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "1",
        "2",
        "3",
        "4"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jybtnz5i",
    "name": "badge_image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/svg+xml"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  collection.options = {
    "query": "select users.userBadge, B.badge_idx,users.id,B.badge_image\nfrom users \nleft join badge as B on B.badge_idx = users.userBadge\nwhere users.id = 'c24hzewie4gweri'\n\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bsu97sfn",
    "name": "userBadge",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "1",
        "2",
        "3",
        "4"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sip2hmij",
    "name": "badge_idx",
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
    "id": "ihrfrivi",
    "name": "badge_image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/svg+xml"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("nd9nuplw")

  // remove
  collection.schema.removeField("jybtnz5i")

  return dao.saveCollection(collection)
})
