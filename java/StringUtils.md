StringUtils类中isEmpty与isBlank的区别
org.apache.commons.lang.StringUtils类提供了String的常用操作,最为常用的判空有如下两种isEmpty(String str)和isBlank(String str)。

StringUtils.isEmpty(String str) 判断某字符串是否为空，为空的标准是 str==null 或 str.length()==0
System.out.println(StringUtils.isEmpty(null));        //true
System.out.println(StringUtils.isEmpty(""));          //true
System.out.println(StringUtils.isEmpty("   "));       //false
System.out.println(StringUtils.isEmpty("dd"));        //false
StringUtils.isNotEmpty(String str) 等价于 !isEmpty(String str)

StringUtils.isBlank(String str) 判断某字符串是否为空或长度为0或由空白符(whitespace) 构成
System.out.println(StringUtils.isBlank(null));        //true
System.out.println(StringUtils.isBlank(""));          //true
System.out.println(StringUtils.isBlank("   "));       //true
System.out.println(StringUtils.isBlank("dd"));        //false   