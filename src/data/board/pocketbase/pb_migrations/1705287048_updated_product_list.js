/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e09mhnkza6ogha0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxixoaho",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "컴퓨터",
        "노트북",
        "ㅌ헤드셋",
        "키보드",
        "이어폰",
        "테블릿",
        "기타"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e09mhnkza6ogha0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxixoaho",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "컴퓨터",
        "노트북",
        "헤드셋",
        "키보드",
        "기타"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
