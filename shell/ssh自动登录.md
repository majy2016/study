
```
#!/usr/bin/expect -f
#自动登录脚本，需要755权限
set user root
set host 192.168.16.240
set password majiayang

spawn ssh $user@$host -p 22
expect "*assword:*"
send "$password\r"
#expect eof
expect "*#"
interact
```
