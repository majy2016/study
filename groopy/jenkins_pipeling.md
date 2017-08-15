1.发布：
```
node{
env.deploys = deploys
def deployslist = deploys.split(",")
for(i=0;i<deployslist.size();i++){
        def job = deployslist[i]
        println "start :"+job
        def job_name = job+'-deploy'
        build job: job_name, parameters: [string(name: 'git_name', value: job)]
}
}
```


2.构建：
```
node{
env.build_name = build_name
env.release_branch = release_branch
def build_names = build_name.split(",")
for(i=0;i<build_names.size();i++){
        def job = build_names[i]
        def job_name = job+'-deploy'
        def git_url = 'git@gitlab.lark.wiki:nbgold/'+job+'.git'
        println "start build:"+job +'  '+release_branch
        build job: job, parameters: [string(name: 'git_url', value: git_url), string(name: 'git_name', value: job), string(name: 'release_branch', value: release_branch)]
}
}
```
