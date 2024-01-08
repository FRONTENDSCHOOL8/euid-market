/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "63zzrni4flwdm6a",
    "created": "2024-01-07 10:28:49.870Z",
    "updated": "2024-01-07 10:28:49.870Z",
    "name": "manner",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "stusntwu",
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
        "id": "x45ralnq",
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
  const collection = dao.findCollectionByNameOrId("63zzrni4flwdm6a");

  return dao.deleteCollection(collection);
})
