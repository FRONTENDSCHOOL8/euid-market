/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2u3rp0jbisrrey0");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "2u3rp0jbisrrey0",
    "created": "2024-01-08 06:08:07.636Z",
    "updated": "2024-01-08 06:47:37.320Z",
    "name": "product_detail",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gnhajnst",
        "name": "product",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "qsu5gq4x5fuzso9",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "oo8k0jwn",
        "name": "description",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
