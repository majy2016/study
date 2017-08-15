> http://www.cnblogs.com/itech/p/5678643.html

1. Jenkins Pipeline suite of plugins
2. 所有pipeline里非配置的任务最好在stage块里实现。通过stage使得pipeline里所有的任务被组织为多个stage，每个stage都是一组相关的任务
```
stage 'build'

//build

stage 'test'

//test
```
3. 所有资源消耗的操作都应该放到node上执行
- 默认地，Jenkinsfile里的脚本在jenkins master上执行，如果资源消耗的操作都在master上执行的话将影响jenkins master的运行。 所以任何资源消耗的操作都应该放到node中被分布到agent上执行，例如从git server clone代码，java代码的编译等都应该在node中执行

4.Pipeline Syntax    //很nice