#### http://www.w3school.com.cn/js/index.asp

- 老旧的实例可能会在 <script> 标签中使用 type="text/javascript"。现在已经不必这样做了。JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言
- 注释单行以// 开头，多行注释以 /* 开始，以 */ 结尾
- 声明（创建） JavaScript 变量， var carname="Volvo";

##### 1. 写入 HTML 输出
```
document.write("<h1>This is a heading</h1>");
```
##### 2. 对事件作出反应
```
<button type="button" onclick="alert('Welcome!')">点击这里</button>
```
- alert() 弹窗函数在 JavaScript 中并不常用，但它对于代码测试非常方便。
##### 3. 改变 HTML 内容
```
<script>
function myFunction()
{
x=document.getElementById("demo");  // 找到元素
x.innerHTML="Hello JavaScript!";    // 改变内容
}
</script>

<button type="button" onclick="myFunction()">点击这里</button>
```
4.
```
<img id="myimage" onclick="changeImage()" src="/i/eg_bulboff.gif">
```
##### 5. 改变样式
```
x=document.getElementById("demo")  //找到元素
x.style.color="#ff0000";           //改变样式
```
##### 6. 验证输入
```
var x=document.getElementById("demo").value;
if isNaN(x) {alert("Not Numeric")};
```
##### 7. if else
- break 语句用于跳出循环。
- continue 用于跳过循环中的一个迭代
```
if (time<20)
  {
  x="Good day";
  }
else
  {
  x="Good evening";
  }
  
 switch(n)
{
case 1:
  执行代码块 1
  break;
case 2:
  执行代码块 2
  break;
default:
  n 与 case 1 和 case 2 不同时执行的代码
}

for (i=0;i<10;i++)
  {
  if (i==3)
    {
    break;
    }
  x=x + "The number is " + i + "<br>";
  }

while (i<5)
  {
  x=x + "The number is " + i + "<br>";
  i++;
  }
  
 do
  {
  x=x + "The number is " + i + "<br>";
  i++;
  }
while (i<5);
```
##### 8.  异常
```
<script>
function myFunction()
{
try
  {
  var x=document.getElementById("demo").value;
  if(x=="")    throw "empty";
  if(isNaN(x)) throw "not a number";
  if(x>10)     throw "too high";
  if(x<5)      throw "too low";
  }
catch(err)
  {
  var y=document.getElementById("mess");
  y.innerHTML="Error: " + err + ".";
  }
}
</script>
```
##### 9. 验证
```
function validate_email(field,alerttxt)
{
with (field)
{
apos=value.indexOf("@")
dotpos=value.lastIndexOf(".")
if (apos<1||dotpos-apos<2) 
  {alert(alerttxt);return false}
else {return true}
}
}
```






