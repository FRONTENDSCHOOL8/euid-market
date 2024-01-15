/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0hw1t2i2y5sevc9",
    "created": "2024-01-15 00:33:49.983Z",
    "updated": "2024-01-15 00:33:49.983Z",
    "name": "user_manner",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ubzhqzrz",
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
        "id": "wd3qifvt",
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
  const collection = dao.findCollectionByNameOrId("0hw1t2i2y5sevc9");

  return dao.deleteCollection(collection);
})
