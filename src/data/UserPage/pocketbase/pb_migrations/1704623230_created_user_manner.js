/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6sqxmqhp7zcd3jv",
    "created": "2024-01-07 10:27:10.532Z",
    "updated": "2024-01-07 10:27:10.532Z",
    "name": "user_manner",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fxixyxlb",
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
        "id": "g3mqs8a2",
        "name": "manner_idx",
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
  const collection = dao.findCollectionByNameOrId("6sqxmqhp7zcd3jv");

  return dao.deleteCollection(collection);
})
