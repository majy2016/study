
```
IP：
vim /etc/sysconfig/network-scripts/ifcfg-eth0  

BOOTPROTO="static" #dhcp改为static   
ONBOOT="yes" #开机启用本配置  
IPADDR=192.168.7.106 #静态IP  
GATEWAY=192.168.7.1 #默认网关  
NETMASK=255.255.255.0 #子网掩码  
DNS1=192.168.7.1 #DNS 配置  


service network restart  

防火墙端口：
yum install firewalld
查询：
firewall-cmd --query-port=80/tcp
永久开放：
firewall-cmd --add-port=3306/tcp --permanent

firewall-cmd --reload

systemctl stop firewalld.service #停止firewall

systemctl disable firewalld.service #禁止firewall开机启动


netstat
:yum install net-tools
```


```
版本号 ： cat  /etc/redhat-release
内核 ： uname  -r 

df  -h
du  -sh

cpu :  cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
```
