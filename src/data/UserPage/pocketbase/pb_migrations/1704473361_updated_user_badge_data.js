/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  collection.options = {
    "query": "select B.title, B.description, B.badge_image,users.id, users.userBadge\nfrom users \nleft join Badge as B on users.userBadge = B.id\nwhere users.id = 'c24hzewie4gweri'\n\n\n"
  }

  // remove
  collection.schema.removeField("uyrdzcvq")

  // remove
  collection.schema.removeField("odlpsp2u")

  // remove
  collection.schema.removeField("ft0cuv3c")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  collection.options = {
    "query": "select B.title, B.description, B.badge_image,users.id\nfrom users \nleft join Badge as B on users.userBadge = B.id\nwhere users.id = 'c24hzewie4gweri'\n\n\n"
  }

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

  // remove
  collection.schema.removeField("zidgbsij")

  // remove
  collection.schema.removeField("ekaucb6h")

  // remove
  collection.schema.removeField("kpa6bjsz")

  // remove
  collection.schema.removeField("gtnqussx")

  return dao.saveCollection(collection)
})
