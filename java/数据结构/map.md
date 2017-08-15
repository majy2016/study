
```
第一种:
　　Map map = new HashMap();
　　Iterator iter = map.entrySet().iterator();
　　while (iter.hasNext()) {
　　Map.Entry entry = (Map.Entry) iter.next();
　　Object key = entry.getKey();
　　Object val = entry.getValue();
　　}
　　效率高,以后一定要使用此种方式！


第二种:
　　Map map = new HashMap();
　　Iterator iter = map.keySet().iterator();
　　while (iter.hasNext()) {
　　Object key = iter.next();
　　Object val = map.get(key);
　　}
　　效率低,以后尽量少使用！
　　
　　
1. Map的四种遍历方式
下面只是简单介绍各种遍历示例(以HashMap为例)，各自优劣会在本文后面进行分析给出结论。
(1) for each map.entrySet()
Map<String, String> map = new HashMap<String, String>();
for (Entry<String, String> entry : map.entrySet()) {
	entry.getKey();
	entry.getValue();
}

(2) 显示调用map.entrySet()的集合迭代器
Iterator<Map.Entry<String,String>>iterator=map.entrySet().iterator();
while(iterator.hasNext()){
Map.Entry<String,String>entry=iterator.next();
entry.getKey();
entry.getValue();
}

(3) for each map.keySet()，再调用get获取
Map<String, String> map = new HashMap<String, String>();
for (String key : map.keySet()) {
	map.get(key);
}

4) for each map.entrySet()，用临时变量保存map.entrySet()
Set<Entry<String,String>>entrySet=map.entrySet();
for(Entry<String,String>entry:entrySet){
entry.getKey();
entry.getValue();
}
```
