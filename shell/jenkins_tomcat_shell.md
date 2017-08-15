1. mvn 配置:
> clean install -dmaven.test.skip
2. jenkins: groovy 脚本 

```
Process keys= 'cmd /c cd C:/Users/m/.jenkins/workspace/zzjr-commons&git ls-remote -h git@gitlab.lark.wiki:nbgold/member.git'.execute()
keys.text.readLines().collect {it.split()[1].replaceAll('refs/heads/', '')}.unique()
```
3. tomcat 重启sh脚本
```
#!/bin/sh
ID=$(ps -ef | grep -v grep |  grep  tomcat |grep java |awk '{print $2}')
echo $ID
if [ "$ID" = "" ]
then
    echo "no tomcat -----"
else
for id in $ID
do
echo "kill id:$id----"
kill -9 $id
done
fi
echo "remove ----"
rm -rf ROOT
rm -rf ROOT.war
echo "mv ------"
mv /home/jenkins/$git_name-webapp/target/$git_name.war  /usr/local/tomcat/webapps/ROOT.war
cd  /usr/local/tomcat/bin
echo "start ----"
./startup.sh
```
