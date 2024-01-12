/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("34elzf1853qws34");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "34elzf1853qws34",
    "created": "2024-01-05 16:41:25.025Z",
    "updated": "2024-01-06 04:42:56.647Z",
    "name": "user_badge_data",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "orccbbp4",
        "name": "userBadge",
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
        "id": "ttmm9myi",
        "name": "badge_idx",
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
        "id": "sdmxu76m",
        "name": "badge_title",
        "type": "text",
        "required": true,
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
        "id": "csq11ije",
        "name": "badge_description",
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
        "id": "gn9ykaqw",
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
      "query": "select users.userBadge, \nB.badge_idx,users.id, B.badge_title,B.badge_description,B.badge_image\nfrom users \nfull outer join badge as B on B.badge_idx = users.userBadge\nwhere users.id = 'c24hzewie4gweri'\ngroup by users.userBadge\n"
    }
  });

  return Dao(db).saveCollection(collection);
})
