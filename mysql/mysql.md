1. IF(expr1,expr2,expr3)
- 如果 expr1 是TRUE (expr1 <> 0 and expr1 <> NULL)，则 IF()的返回值为expr2; 否则返回值则为 expr3。IF()的返回值为数字值或字符串值，具体情况视其所在语境而定。
```
mysql> SELECT IF(1>2,2,3);
        -> 3
        
```
2. 多表联合查询
```
select *
from A
left join B on A_user_id=B_id
left join C on A_device_id=C_id
```
