/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  collection.options = {
    "query": "select users.userBadge, B.id\nfrom users \nleft join badge as B on B.id = users.userBadge\nwhere users.id = 'c24hzewie4gweri'\n\n\n\n"
  }

  // remove
  collection.schema.removeField("mo0wakym")

  // remove
  collection.schema.removeField("nczktro3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uiz9sayy",
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
    "query": "select users.userBadge, B.id, B.badge_image\nfrom users \nleft join badge as B on B.id = users.userBadge\nwhere users.id = 'c24hzewie4gweri'\n\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mo0wakym",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nczktro3",
    "name": "badge_image",
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
  collection.schema.removeField("uiz9sayy")

  return dao.saveCollection(collection)
})
