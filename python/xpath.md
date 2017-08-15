
```
1. <li> 标签的所有 class
    "//li//@class"
2.<li> 标签下 href 为 link1.html 的 <a> 标签
   '//li/a[@href="link1.html"]'
3.<li> 标签下的所有 <span> 标签
   '//li/span'
4. <li> 标签下的所有 class，不包括 <li>
    '//li/a//@class'
5.最后一个 <li> 的 <a> 的 href
    '//li[last()]/a/@herf'
6.倒数第二个元素的内容
    '//li[last()]/a'
    x.text
7.class 为 bold 的标签名
    '//*[@class="bold]'
    x.tag
```
