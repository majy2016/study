> hello world

```
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

if __name__ == '__main__':
    app.run()
```
> debug

```
app.debug = True
```

> url:

```
@app.route('/hello')

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % username
```

> HTTP:

```
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        do_the_login()
    else:
        show_the_login_form()
```

> 访问请求数据：
- 对于 Web 应用，与客户端发送给服务器的数据交互至关重要。在 Flask 中由全局的 request 对象来提供这些信息


> 静态文件：

```
url_for('static', filename='style.css')
```

> 模板：

```
from flask import render_template

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)

Jinja2 模板文档 ：
<!doctype html>
<title>Hello from Flask</title>
{% if name %}
  <h1>Hello {{ name }}!</h1>
{% else %}
  <h1>Hello World!</h1>
{% endif %}    
```





