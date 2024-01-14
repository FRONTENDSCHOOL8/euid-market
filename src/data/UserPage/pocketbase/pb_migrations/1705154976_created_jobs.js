/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "t3t7q4r6xflhmmq",
    "created": "2024-01-13 14:09:36.809Z",
    "updated": "2024-01-13 14:09:36.809Z",
    "name": "jobs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "f0bzhxeq",
        "name": "job_title",
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
        "id": "pbdjrghq",
        "name": "job_index",
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
  const collection = dao.findCollectionByNameOrId("t3t7q4r6xflhmmq");

  return dao.deleteCollection(collection);
})
