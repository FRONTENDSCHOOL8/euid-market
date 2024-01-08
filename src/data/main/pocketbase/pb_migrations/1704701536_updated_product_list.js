/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qsu5gq4x5fuzso9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vgtmpsy9",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "컴퓨터",
        "마우스",
        "키보드",
        "헤드셋",
        "기타"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qsu5gq4x5fuzso9")

  // remove
  collection.schema.removeField("vgtmpsy9")

  return dao.saveCollection(collection)
})
