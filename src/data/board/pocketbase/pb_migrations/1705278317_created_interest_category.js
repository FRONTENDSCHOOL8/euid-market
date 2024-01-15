/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7j50ob8xs7dylo8",
    "created": "2024-01-15 00:25:17.660Z",
    "updated": "2024-01-15 00:25:17.660Z",
    "name": "interest_category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bfxsx3px",
        "name": "main_category",
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
        "id": "u2prj0rw",
        "name": "sub_category",
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
  const collection = dao.findCollectionByNameOrId("7j50ob8xs7dylo8");

  return dao.deleteCollection(collection);
})
