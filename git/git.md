1.新建项目：

```
git init
```
2.首次上传

```
git remote add origin git@github.com:majy2016/A_shares.git
```
3.添加

```
git add .
git add xxx
git add *
```
4.提交

```
git commit xxx    查看提交
git commit -m "代码提交信息"
```
5.比较

```
git status
```
6.推送

```
git push origin master
```
7.分支

```
git checkout -b feature_x 创建一个叫做“feature_x”的分支，并切换过去
git branch -d feature_x 再把新建的分支删掉
git branch 查看本地分支
git branch -a 查看远程分支

```
8.拉取

```
git pull = git fetch + git merge
获取（fetch） 并 合并（merge） 远端的改动
```
9.记录

```
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative

git show

```

10. 账号配置

```
git config --global user.name "majiayang"
git config --global user.email majiayang@zuozh.com
ssh-keygen -t rsa -C "majiayang@zuozh.com"
```




