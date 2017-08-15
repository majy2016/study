1.创建项目：

```
scrapy startproject tutorial

    scrapy.cfg   //scrapy.cfg 存放的目录被认为是 项目的根目录
    myproject/
        __init__.py
        items.py
        pipelines.py
        settings.py
        spiders/
            __init__.py
            spider1.py
            spider2.py
            ...
```
2.执行爬命令： scrapy crawl dmoz  //dmoz:name

3.scrapy shell,调试用,会返回一个response
```
scrapy shell "http://www.dmoz.org/Computers/Programming/Languages/Python/Books/"
```
5.创建一个新的spider:
```
scrapy genspider [-t template] <name> <domain>
scrapy genspider -l  //模板列表
scrapy genspider mydomain mydomain.com

```
6.check:

```
 scrapy check [-l] <spider>
```
7.scrapy list


8.fetch
```
scrapy fetch <url>

使用Scrapy下载器(downloader)下载给定的URL，并将获取到的内容送到标准输出

scrapy fetch --nolog http://www.example.com/some/page.html
scrapy fetch --nolog --headers http://www.example.com/
```
9.view
```
在浏览器中打开给定的URL，并以Scrapy spider获取到的形式展现。 有些时候spider获取到的页面和普通用户看到的并不相同。 因此该命令可以用来检查spider所获取到的页面，并确认这是您所期望的。
```
10.parse

```
scrapy parse <url> [options]
获取给定的URL并使用相应的spider分析处理。如果您提供 --callback 选项，则使用spider的该方法处理，否则使用 parse 。
```

Spider:
- name: 用于区别Spider。    该名字必须是唯一的，您不可以为不同的Spider设定相同的名字。
- start_urls: 包含了Spider在启动时进行爬取的url列表。 因此，第一个被获取到的页面将是其中之一。 后续的URL则从初始的URL获取到的数据中提取。
- parse() 是spider的一个方法。 被调用时，每个初始URL完成下载后生成的 Response 对象将会作为唯一的参数传递给该函数。 该方法负责解析返回的数据(response data)，提取数据(生成item)以及生成需要进一步处理的URL的 Request 对象。
```
import scrapy

class DmozSpider(scrapy.Spider):
    name = "dmoz"
    allowed_domains = ["dmoz.org"]
    start_urls = [
        "http://www.dmoz.org/Computers/Programming/Languages/Python/Books/",
        "http://www.dmoz.org/Computers/Programming/Languages/Python/Resources/"
    ]

    def parse(self, response):
        filename = response.url.split("/")[-2]
        with open(filename, 'wb') as f:
            f.write(response.body)
            
Scrapy为Spider的 start_urls 属性中的每个URL创建了 scrapy.Request 对象，并将 parse 方法作为回调函数(callback)赋值给了Request。
```

11.提取Item  Selectors (xpath):
- response.selector.xpath(): 传入xpath表达式，返回该表达式所对应的所有节点的selector list列表（其它:css(),extract(),re()） 。
    - /html/head/title: 选择HTML文档中 <head> 标签内的 <title> 元素
    - /html/head/title/text(): 选择上面提到的 <title> 元素的文字
    - //td: 选择所有的 <td> 元素
    - //div[@class="mine"]: 选择所有具有 class="mine" 属性的 div 元素
12.使用Item:

13.保存：

```
scrapy crawl dmoz -o items.json
```





