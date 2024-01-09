/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34")

  collection.options = {
    "query": "select users.userBadge, \nB.badge_idx,users.id, B.badge_title,B.badge_description,B.badge_image\nfrom users \nfull outer join badge as B on B.badge_idx = users.userBadge\nwhere users.id = 'c24hzewie4gweri'\n\n"
  }

  // remove
  collection.schema.removeField("gatcoenr")

  // remove
  collection.schema.removeField("sqxtmlu4")

  // remove
  collection.schema.removeField("mprnk7pk")

  // remove
  collection.schema.removeField("ubuyuwhh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rvvxm5zc",
    "name": "userBadge",
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
    "id": "szahhcth",
    "name": "badge_idx",
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
    "id": "pkcwr0xi",
    "name": "badge_title",
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
    "id": "yzsow3hm",
    "name": "badge_description",
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
    "id": "9tmq7efg",
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
    "query": "select users.userBadge, users.id, B.badge_title,B.badge_description,B.badge_image\nfrom users \nfull outer join badge as B on B.badge_idx = users.userBadge\nwhere users.id = 'c24hzewie4gweri'\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gatcoenr",
    "name": "userBadge",
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
    "id": "sqxtmlu4",
    "name": "badge_title",
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
    "id": "mprnk7pk",
    "name": "badge_description",
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
    "id": "ubuyuwhh",
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
  collection.schema.removeField("rvvxm5zc")

  // remove
  collection.schema.removeField("szahhcth")

  // remove
  collection.schema.removeField("pkcwr0xi")

  // remove
  collection.schema.removeField("yzsow3hm")

  // remove
  collection.schema.removeField("9tmq7efg")

  return dao.saveCollection(collection)
})
