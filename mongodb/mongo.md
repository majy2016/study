
```
命令行： mongo

use demodb ，创建demodb 

插数据、collectionName 不存在则会创建
db.collectionName.insert({name:"jack",age:33})
查询：
show collections
db.getCollectionNames()

db.collectionName.find()
.           .....findOne() 则只获取第一条

```
