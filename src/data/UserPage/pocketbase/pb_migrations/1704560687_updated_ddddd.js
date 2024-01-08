/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vyno2xvw3h0k0s5")

  collection.options = {
    "query": "select user_badge.id, user_badge.created, user_badge.user_id,badge.badge_title,badge.badge_image\nfrom user_badge\nleft outer join badge on badge.badge_idx = user_badge.badge_idx"
  }

  // remove
  collection.schema.removeField("rrng8i9j")

  // remove
  collection.schema.removeField("02qzufkr")

  // remove
  collection.schema.removeField("39albcbj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rchmrgrt",
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
    "id": "kr88htqk",
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
    "id": "baq1i7nc",
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
  const collection = dao.findCollectionByNameOrId("vyno2xvw3h0k0s5")

  collection.options = {
    "query": "select user_badge.id, user_badge.created, user_badge.user_id,badge.badge_title,badge.badge_image\nfrom user_badge\nfull outer join badge on badge.badge_idx = user_badge.badge_idx"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rrng8i9j",
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
    "id": "02qzufkr",
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
    "id": "39albcbj",
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
  collection.schema.removeField("rchmrgrt")

  // remove
  collection.schema.removeField("kr88htqk")

  // remove
  collection.schema.removeField("baq1i7nc")

  return dao.saveCollection(collection)
})
