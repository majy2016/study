
```
yum -y install docker-io                      # 仅此一条命令就可以搞定；

service docker start                          # 启动docker

docker --help

docker images centos

docker search centos

删除容器：
docker rm $(docker ps -a -q)
删除镜像：
docker rmi <image id>

进入运行的容器
docker exec -it e6eef58b3544 bash

docker build -t  zzjr/tomcat .

web管理工具：
curl -sSL -k https://shipyard-project.com/deploy | IMAGE=shipyard/shipyard:test PORT=9000 bash -s
docker ui:
docker run -d -p 9001:9000 --privileged -v /var/run/docker.sock:/var/run/docker.sock uifd/ui-for-docker
```

centos7 挂载时的权限问题：

```
原因是CentOS7中的安全模块selinux把权限禁掉了，至少有以下三种方式解决挂载的目录没有权限的问题：
   1.在运行容器的时候，给容器加特权，及加上 --privileged=true 参数：
   docker run -i -t -v /soft:/soft --privileged=true 686672a1d0cc /bin/bash
   2.临时关闭selinux：
   setenforce 0
   3.添加selinux规则，改变要挂载的目录的安全性文本
    chcon -Rt svirt_sandbox_file_t /so
    
```

commit 镜像：
commit 主要用于通过差异性，创建一个新的image
Usage: docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]Create a new image from a container's changes

  -a, --author=""     Author (e.g., "John Hannibal Smith <hannibal@a-team.com>")
  -m, --message=""    Commit message
  -p, --pause=true    Pause container during commit



  docker commit -a "majy" -m='zzjr jenkins' fa2c70698bbe zzjr/jenkins:1.0.0

  docker tag zzjr/jenkins:1.0.0 majiayang/zzjr-jenkins:1.0.0

  docker login

  docker push zzjr/jenkins:1.0.0
