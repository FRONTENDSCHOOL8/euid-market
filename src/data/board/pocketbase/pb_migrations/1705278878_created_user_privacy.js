/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rjsmgdieclmipj4",
    "created": "2024-01-15 00:34:38.814Z",
    "updated": "2024-01-15 00:34:38.814Z",
    "name": "user_privacy",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "h2mbqt21",
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
        "id": "szuscuy3",
        "name": "gender_is_public",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "p89dg0ov",
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
  const collection = dao.findCollectionByNameOrId("rjsmgdieclmipj4");

  return dao.deleteCollection(collection);
})
