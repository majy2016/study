1. maven配置：
```
<dependency>
  <groupId>org.dbunit</groupId>
  <artifactId>dbunit</artifactId>
  <version>${dbunitVersion}</version>
  <scope>test</scope>
</dependency>
```

2.测试流程大概是这样的，建立数据库连接-> 备份表 -> 调用Dao层接口 -> 从数据库取实际结果-> 事先准备的期望结果 -> 断言 -> 回滚数据库 -> 关闭数据库连接



```
https://github.com/majy2016/test_demo

DatabaseOperation.UPDATE：这个操作将从测试数据源中读取的数据集的内容更新到数据库中，注意这个操作正确执行的前提是测试数据表已经存在，如果不存在这个测试用例将会失败
DatabaseOperation.INSERT：这个操作把从测试数据源中读取的数据集的内容插入到数据库中，注意这个操作正确执行的前提是测试数据表不存在，这个操作将新建数据表。如果测试数据表已经存在这个测试用例将会失败。另外，在执行这个操作的时候要特别注意数据集中数据表的顺序，否则可能会因为违反外键约束而造成测试用例失败
DatabaseOperation.DELETE：这个操作会从数据库中删除数据，注意，这个操作只删除数据集中存在的数据行而不是整个数据表中的数据
DatabaseOperation.DELETE_ALL：这个操作删除数据表中的所有行，注意，这个操作也只影响数据集中声明了的数据表，数据集中没有涉及到的数据表中的数据不会删除
DatabaseOperation.TRUNCATE：这个操作将删除数据集中声明的数据表，如果数据中有些表并没有在预定义的数据集中提到，这个数据表将不会被影响。注意，这个操作是按照相反的顺序执行的
DatabaseOperation.REFRESH：顾名思义，这个操作将把预定义数据集中的数据同步到数据库中，也就是说这个操作将更新数据数中已有的数据、插入数据库中没有的数据。数据库中已有的、但是数据集中没有的行将不会被影响。我们用一个产品数据库的拷贝进行测试的时候可以使用这个操作将预定义数据同步到产品数据库中
DatabaseOperation.CLEAN_INSERT：删除所有的数据表中的数据，然后插入数据集中定义的数据，如果你想保证数据库是受控的，这个你会比较喜欢。
DatabaseOperation.NONE：不执行任何操作
CompositeOperation：将多个操作组合成一个，便以维护和重用
TransactionOperation：在一个事物内执行多个操作
IdentityInsertOperation：在使用MSSQL的时候，插入数据时IDENTITY列我们是没有办法控制的，用这个就可以控制了，只有在使用MSSQL的时候才会用得到
```


```
<?xml version='1.0' encoding='UTF-8'?>
<dataset>
  <Documents_Master IndexId="77" No="1" Retired="Y" GeneralCategory="[null]" DM_VERSION_ID="13" SOURCE="[null]"/>
  <Documents_Master IndexId="78" No="0" Retired="N" DM_VERSION_ID="13"/>
</dataset>
```

