/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vy1r5bsfi0cu57l",
    "created": "2024-01-15 00:37:22.308Z",
    "updated": "2024-01-15 00:37:22.308Z",
    "name": "user_badge_join_view",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j4lbmodw",
        "name": "user_id",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "kxrvyvf7",
        "name": "badge_title",
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
        "id": "mf87dzid",
        "name": "badge_img",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          "thumbs": [
            "68x68"
          ],
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
      "query": "select user_badge.id, user_badge.created, user_badge.user_id,badges.badge_title,badges.badge_image as badge_img\nfrom user_badge\nleft outer join badges on badges.badge_idx = user_badge.badge_idx"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vy1r5bsfi0cu57l");

  return dao.deleteCollection(collection);
})
