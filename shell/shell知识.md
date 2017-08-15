1. 指定bash
推荐使用 /usr/bin/env bash 和 /bin/bash。前者通过env添加一个中间层，让env在$PATH中搜索bash；后者则是官方背书的，约定俗成的 bash 位置，/usr/bin/bash不过是指向它的一个符号链接。

2. set -e 和 set -x
set -x会在执行每一行 shell 脚本时，把执行的内容输出来。它可以让你看到当前执行的情况，里面涉及的变量也会被替换成实际的值。
set -e会在执行出错时结束程序，就像其他语言中的“抛出异常”一样。（准确说，不是所有出错的时候都会结束程序，见下面的注）

注：set -e结束程序的条件比较复杂，在man bash里面，足足用了一段话描述各种情景。大多数执行都会在出错时退出，除非 shell 命令位于以下情况：
  1. 一个 pipeline 的非结尾部分，比如 error | ok
  2. 一个组合语句的非结尾部分，比如 ok && error || other
  3. 一连串语句的非结尾部分，比如 error; ok
  4. 位于判断语句内，包括test、if、while等等。

3. 带上shellcheck
