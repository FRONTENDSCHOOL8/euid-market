/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "txu3m5gjslsjc2l",
    "created": "2024-01-06 16:48:13.056Z",
    "updated": "2024-01-06 16:48:13.056Z",
    "name": "user_badge",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nbhj2xxf",
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
        "id": "5hgvhwm7",
        "name": "badge_id",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
  const collection = dao.findCollectionByNameOrId("txu3m5gjslsjc2l");

  return dao.deleteCollection(collection);
})
