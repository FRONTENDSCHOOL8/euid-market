/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8i9xbvyhhknzb4h",
    "created": "2024-01-15 00:27:15.626Z",
    "updated": "2024-01-15 00:27:15.626Z",
    "name": "manners",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a3ycbakd",
        "name": "manner_idx",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "wpkirjia",
        "name": "manner_title",
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
  const collection = dao.findCollectionByNameOrId("8i9xbvyhhknzb4h");

  return dao.deleteCollection(collection);
})
