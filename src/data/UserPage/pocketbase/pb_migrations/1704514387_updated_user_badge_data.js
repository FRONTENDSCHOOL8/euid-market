/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  // remove
  collection.schema.removeField("7ldda2x2")

  // remove
  collection.schema.removeField("kr2qogqw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "heyqvkwq",
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
    "id": "ikkfn9rl",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7ldda2x2",
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
    "id": "kr2qogqw",
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

  // remove
  collection.schema.removeField("heyqvkwq")

  // remove
  collection.schema.removeField("ikkfn9rl")

  return dao.saveCollection(collection)
})
