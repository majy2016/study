###  基本工具：
```
1.Optional <T>
Optional <Integer> p = Optional.of(5)
p.isPresent() // return true
p.get  // 5
创建Optional实例（以下都是静态方法）：
Optional.of(T)	创建指定引用的Optional实例，若引用为null则快速失败
Optional.absent()	创建引用缺失的Optional实例
Optional.fromNullable(T)	创建指定引用的Optional实例，若引用为null则表示缺失

用Optional实例查询引用（以下都是非静态方法）：

boolean isPresent()	如果Optional包含非null的引用（引用存在），返回true
T get()	返回Optional所包含的引用，若引用缺失，则抛出java.lang.IllegalStateException
T or(T)	返回Optional所包含的引用，若引用缺失，返回指定的值
T orNull()	返回Optional所包含的引用，若引用缺失，返回null
Set<T> asSet()	返回Optional所包含引用的单例不可变集，如果引用存在，返回一个只有单一元素的集合，如果引用缺失，返回一个空集合。

2.前置条件类  Preconditions 每个方法都有三个变种：
没有额外参数：抛出的异常中没有错误消息；
有一个Object对象作为额外参数：抛出的异常使用Object.toString() 作为错误消息；
有一个String对象作为额外参数，并且有一组任意数量的附加Object对象：这个变种处理异常消息的方式有点类似printf，但考虑GWT的兼容性和效率，只支持%s指示符。例如：
checkArgument(i >= 0, "Argument was %s but expected nonnegative", i);
checkArgument(i < j, "Expected i < j, but %s > %s", i, j);

方法声明（不包括额外参数）	描述	检查失败时抛出的异常
checkArgument(boolean)	检查boolean是否为true，用来检查传递给方法的参数。	IllegalArgumentException
checkNotNull(T)	检查value是否为null，该方法直接返回value，因此可以内嵌使用checkNotNull。	NullPointerException
checkState(boolean)	用来检查对象的某些状态。	IllegalStateException
checkElementIndex(int index, int size)	检查index作为索引值对某个列表、字符串或数组是否有效。index>=0 && index<size *	IndexOutOfBoundsException
checkPositionIndex(int index, int size)	检查index作为位置值对某个列表、字符串或数组是否有效。index>=0 && index<=size *	IndexOutOfBoundsException
checkPositionIndexes(int start, int end, int size)	检查[start, end]表示的位置范围对某个列表、字符串或数组是否有效*	IndexOutOfBoundsException

3.Object 方法:

4.排序：

5.异常：

```
### 集合【collections】

```
1.不可变集合：
public static final ImmutableSet<String> COLOR_NAMES = ImmutableSet.of(
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple");

class Foo {
    Set<Bar> bars;
    Foo(Set<Bar> bars) {
        this.bars = ImmutableSet.copyOf(bars); // defensive copy!
    }
}
2. 新集合类型：
3. 集合工具集：
5. 并发:
6. 字符串处理：
连接器[Joiner]：
Joiner joiner = Joiner.on("; ").skipNulls();
return joiner.join("Harry", null, "Ron", "Hermione");
Joiner.on(",").join(Arrays.asList(1, 5, 7)); // returns "1,5,7"
拆分器[Splitter]：
Splitter.on(',')
        .trimResults()
        .omitEmptyStrings()
        .split("foo,bar,,   qux");
。。。。。
```

