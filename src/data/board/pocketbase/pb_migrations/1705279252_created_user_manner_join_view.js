/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8ycag45yncu3wug",
    "created": "2024-01-15 00:40:52.322Z",
    "updated": "2024-01-15 00:40:52.322Z",
    "name": "user_manner_join_view",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rnqt0puh",
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
        "id": "tnxvqyuu",
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
        "id": "uaus2vtm",
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
      },
      {
        "system": false,
        "id": "iq5judlx",
        "name": "count_manner",
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
    "options": {
      "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  user_manner.user_id, \n  manners.manner_idx, \n  manners.manner_title,\n  count(manners.manner_idx) as count_manner\nFROM user_manner\nJOIN manners ON manners.manner_idx = user_manner.manner_idx\nGROUP BY user_manner.user_id, manners.manner_idx, manners.manner_title\nORDER BY user_manner.user_id, manners.manner_idx;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8ycag45yncu3wug");

  return dao.deleteCollection(collection);
})
