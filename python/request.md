##### http://blog.csdn.net/iloveyin/article/details/21444613

---

示例：
```
import requests
values={'a':'123'}
r=requests.get(url)
r=requests.post(url,data=values)
```
返回 Response
```
1.url:
r.url

2.状态请求码：
r.status_code

3.响应头：
r.headers

4.响应内容，返编码不一样：
r.text      //utf-8
r.content   //
r.json()

5.cookies：
r.cookies
r.r.cookies['BAIDUID']
```
