/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "x4e50uora7jsgyh",
    "created": "2024-01-15 00:33:26.377Z",
    "updated": "2024-01-15 00:33:26.377Z",
    "name": "user_badge",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kofpswxb",
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
        "id": "6b04pxkd",
        "name": "badge_idx",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("x4e50uora7jsgyh");

  return dao.deleteCollection(collection);
})
