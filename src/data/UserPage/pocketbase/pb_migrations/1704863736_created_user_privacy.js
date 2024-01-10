/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "u5ukr9ur6dv2vx6",
    "created": "2024-01-10 05:15:36.633Z",
    "updated": "2024-01-10 05:15:36.633Z",
    "name": "user_privacy",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qt9p8czr",
        "name": "user_id",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fzmqysqv",
        "name": "gender_is_public",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "gininflb",
        "name": "age_is_public",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u5ukr9ur6dv2vx6");

  return dao.deleteCollection(collection);
})
