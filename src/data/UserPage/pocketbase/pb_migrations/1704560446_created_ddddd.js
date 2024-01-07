/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vyno2xvw3h0k0s5",
    "created": "2024-01-06 17:00:46.462Z",
    "updated": "2024-01-06 17:00:46.462Z",
    "name": "ddddd",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "timxwejc",
        "name": "badge_image",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/svg+xml"
          ],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
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
      "query": "select user_badge.id, badge.badge_image\nfrom user_badge\nfull outer join badge on badge.badge_idx = user_badge.badge_idx"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vyno2xvw3h0k0s5");

  return dao.deleteCollection(collection);
})
