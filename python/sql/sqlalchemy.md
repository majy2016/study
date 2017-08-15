1. 基本用法
```
实例化对象：user = User(name='admin', password='123456')
添加对象： db_session.add(user)
提交：db_session.commit()
回滚：db_session.rollback()
查询：db_session.query()
    db_session.query(User).order_by(User.id)
    db_session.query(User.username,User.password)  返回元组
    db_session.query(User, User.username).all()
```
2.关键字

```
query.filter(User.name == 'ed') #equals
query.filter(User.name != 'ed') #not equals
query.filter(User.name.like('%ed%')) #LIKE
uery.filter(User.name.in_(['ed','wendy', 'jack'])) #IN
query.filter(User.name.in_(session.query(User.name).filter(User.name.like('%ed%'))#IN
query.filter(~User.name.in_(['ed','wendy', 'jack']))#not IN
query.filter(User.name == None)#is None
query.filter(User.name != None)#not None
from sqlalchemy import and_
query.filter(and_(User.name =='ed',User.fullname =='Ed Jones')) # and
query.filter(User.name == 'ed',User.fullname =='Ed Jones') # and
query.filter(User.name == 'ed').filter(User.fullname == 'Ed Jones')# and
from sqlalchemy import or_
query.filter(or_(User.name =='ed', User.name =='wendy')) #or
query.filter(User.name.match('wendy')) #match
```
3. all()返回一个列表：可以进行Python列表的操作。
4. 计数 .count()
```
session.query(User).filter(User.name.like('%ed')).count()
```
5.
6. 字符串SQL

```
ession.query(User).from_statement(text("SELECT* FROM users where name=:name")).\
			params(name='ed').all()
```




```
#简单查询
print(session.query(User).all())
print(session.query(User.name, User.fullname).all())
print(session.query(User, User.name).all())
    
#带条件查询
print(session.query(User).filter_by(name='user1').all())
print(session.query(User).filter(User.name == "user").all())
print(session.query(User).filter(User.name.like("user%")).all())
    
#多条件查询
print(session.query(User).filter(and_(User.name.like("user%"), User.fullname.like("first%"))).all())
print(session.query(User).filter(or_(User.name.like("user%"), User.password != None)).all())
    
#sql过滤
print(session.query(User).filter("id>:id").params(id=1).all())
    
#关联查询 
print(session.query(User, Address).filter(User.id == Address.user_id).all())
print(session.query(User).join(User.addresses).all())
print(session.query(User).outerjoin(User.addresses).all())
    
#聚合查询
print(session.query(User.name, func.count('*').label("user_count")).group_by(User.name).all())
print(session.query(User.name, func.sum(User.id).label("user_id_sum")).group_by(User.name).all())
    
#子查询
stmt = session.query(Address.user_id, func.count('*').label("address_count")).group_by(Address.user_id).subquery()
print(session.query(User, stmt.c.address_count).outerjoin((stmt, User.id == stmt.c.user_id)).order_by(User.id).all())
    
#exists
print(session.query(User).filter(exists().where(Address.user_id == User.id)))
print(session.query(User).filter(User.addresses.any()))
    
    
person = session.query(Person.name, Person.created_at,                     
Person.updated_at).filter_by(name="zhongwei").order_by(            Person.created_at).first()
             
             

from sqlalchemy import func

# count User records, without
# using a subquery.
session.query(func.count(User.id))

# return count of user "id" grouped
# by "name"
session.query(func.count(User.id)).\
        group_by(User.name)

from sqlalchemy import distinct

# count distinct "name" values
session.query(func.count(distinct(User.name)))
```

