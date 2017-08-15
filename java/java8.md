1.Lambda

```
(String s) -> s.length()
第一个Lambda表达式具有一个String类型的参 数并返回一个int。Lambda没有return语句， 因为已经隐含了return

(Apple a) -> a.getWeight() > 150
第二个Lambda 表达式有一个 Apple类型的 参数并返回一 个boolean(苹 果的重量是否 超过150克)

(intx,inty)->{
    System.out.println("Result:");
    System.out.println(x+y);
第三个Lambda表达式具有两个int类型的参
  数而没有返回值(void返回)。注意Lambda } 表达式可以包含多行语句，这里是两行
  
() -> 42
第四个Lambda表达式没有参数，返回一个Int

(Apple a1, Apple a2) -> a1.getWeight().compareTo(a2.getWeight())
第五个Lambda表达式具有两个Apple类型的参数，返回一个int:比较两个Apple的重量
```
