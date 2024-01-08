/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "izfzzdt8ee5oemd",
    "created": "2024-01-07 11:10:40.856Z",
    "updated": "2024-01-07 11:10:40.856Z",
    "name": "user_manner_join_view",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ift429nc",
        "name": "user_id",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "select user_manner.id, user_manner.user_id\nfrom user_manner\nleft outer join manner on manner.manner_idx = user_manner.manner_idx"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("izfzzdt8ee5oemd");

  return dao.deleteCollection(collection);
})
