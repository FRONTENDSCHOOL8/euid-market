/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vyno2xvw3h0k0s5")

  collection.options = {
    "query": "select user_badge.id, user_badge.created, user_badge.user_id,badges.badge_title,badges.badge_image as badge_img\nfrom user_badge\nleft outer join badges on badges.badge_idx = user_badge.badge_idx"
  }

  // remove
  collection.schema.removeField("ya6rfszh")

  // remove
  collection.schema.removeField("jveqppcj")

  // remove
  collection.schema.removeField("z9pwyzy9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqxrvrlw",
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
    "id": "bckxebws",
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
    "id": "3qakwjyg",
    "name": "badge_img",
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
    "query": "select user_badge.id, user_badge.created, user_badge.user_id,badges.badge_title,badges.badge_image\nfrom user_badge\nleft outer join badges on badges.badge_idx = user_badge.badge_idx"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ya6rfszh",
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
    "id": "jveqppcj",
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
    "id": "z9pwyzy9",
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
  collection.schema.removeField("bqxrvrlw")

  // remove
  collection.schema.removeField("bckxebws")

  // remove
  collection.schema.removeField("3qakwjyg")

  return dao.saveCollection(collection)
})
