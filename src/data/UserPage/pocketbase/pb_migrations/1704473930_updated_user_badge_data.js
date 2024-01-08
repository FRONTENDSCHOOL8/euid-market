/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  collection.options = {
    "query": "select users.userBadge, B.id\nfrom users \nleft join badge as B on B.id = users.userBadge\nwhere users.id = 'c24hzewie4gweri'\n\n\n\n"
  }

  // remove
  collection.schema.removeField("vg2gc1r1")

  // remove
  collection.schema.removeField("ouitj3sl")

  // remove
  collection.schema.removeField("pa2uwcti")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4ulooo3r",
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
    "query": "select B.title, B.description, users.id, users.userBadge\nfrom users \nleft join badge as B on B.id = users.userBadge\n\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vg2gc1r1",
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
    "id": "ouitj3sl",
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
    "id": "pa2uwcti",
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
  collection.schema.removeField("4ulooo3r")

  return dao.saveCollection(collection)
})
