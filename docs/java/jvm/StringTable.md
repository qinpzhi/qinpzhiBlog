## String的基本特性

- String实现了Serializeable接口：表示字符串是支持序列号的，实现了Comparable接口：表示String可以比较大小
- String在jdk8及以前内部定了final char[] vlaue用于存储字符串数据，jdk9时改成了byte[]，节约了空间
- String代表不可变的字符序列，简称不可变性。
- 字符串常量池中是不会存储相同内容的字符串的。



## 字符串的内存分配

java6以前，字符串常量池存放在永久代，java7,字符串常量池的位置调整到java堆中，java8元空间，字符串常量池在堆中。将String对象存储在堆中可以灵活管理对象的生命周期、实现字符串共享和垃圾回收，以及适应动态长度的需求。

## 字符串的拼接操作

- 常量与常量的拼接结果在常量池，原理是编译器优化
- 常量池中不会存在相同内容的常量
- 只要其中一个是变量，结果就在堆中，变量拼接的原理是StringBuilder
- 如果拼接的结果调用intern()方法，则主动将常量池中还没有的字符串对象放入池中，并返回此对象地址。

````java
String s1="a";
String s2="b";
String s3="ab";
/*
如下的s1+s2的细节：
①StringBuilder s=new StringBuilder();
②s.append("a");
③s.append("b")；
④s.toString();  -->类似于 new String("ab")
*/
String s4=s1+s2;
System.out.println(s3==s4)//false
````

````java
final String s1="a";
final String s2="b";
String s3="ab";
/*
字符串拼接操作不一定使用的是StringBuilder
如果拼接符号左右都是字符串常量或者常量引用，则仍然使用编译器优化，即非StringBuilder得方式
针对final修饰类、方法、基本数据类型、引用数据类型的量的结构时，能使用上final的时候建议使用上
*/
String s4=s1+s2;
System.out.println(s3==s4)//true
````

````java
/*
通过StringBuilder的append()的方式添加字符串的效率要远高于使用String的字符串拼接方式！
详情：
①StringBuilder的append()的方法的时候，只需要建立一次StringBuilder对象，使用String的字符串拼接方式：创建多个StringBuilder和String对象
②使用String的字符串拼接方式：内存中由于创建了较多的StringBuilder对象和String对象，内存占用更大，如果进行GC，需要花费额外的时间。
改进的空间：
在实际开发中，如果基本确定前前后后添加的字符串长度不高于某个限定值highLevel情况下，建议使用构造器实例化：StringBuilder s= new StringBuilder(highLevel);
*/
public void plusStr(int times){
  String s1="beijing";
  for(int i=0;i<times;i++){
    s1+="beijing";
  }
}

public void StringBuilderPlusStr(int times){
  StringBuilder stringBuilder = new StringBuilder("beijing");
  for(int i=0;i<times;i++){
    stringBuilder.append("beijing");
  }
}
````

## intern()的使用

intern方法会从字符串常量池中查询当前字符串是否存在，如果不存在就会将当前字符串放入常量池中。对于程序中大量存在的字符串，尤其存在很多重复字符串的时候，使用intern() 能节省很多空间。因为堆里的对象没有引用会自动回收。

jdk1.6中，将这个字符串对象尝试放入串池。如果字符串常量池有，则不会放入，返回有的常量池中的对象地址。如果没有，则把此对象复制一份，放入串池，并返回串池中的对象地址。
jdk1.7起，将这个字符串对象尝试放入串池。如果字符串常量池有，则不会放入，返回有的常量池中的对象地址。如果没有，则把对象的引用地址复制一份，放入串池，并返回串池中的引用地址。

如果保证变量S指向的是字符串常量池中的数据呢？
方法一：String s="aaa";//字面量定义的方式
方法二：调用intern()方法，不用管前面啥方式。
String s=new String("dd").intern();
String s=new StringBuilder("dd").toString().intern();

``````java
new String("ab")会创建几个对象？
看字节码就知道，创建了两个。
一个对象是new关键字在堆空间创建的，另外一个对象是常量池中的对象。
堆中创建了对象：new String
常量池中放入了"ab"
  
new String("a")+new String("b")呢？
对象1：new StringBuilder()
对象2： new String("a")
对象3：常量池的"a"
对象4：new String("b")
对象5：常量池的"b"
深入剖析，StringBuilder的toString()方法
  对象6：new String("ab")
强调一下，toString()的调用，在字符串常量池中，没有生成”ab"
  
String s=new String("1");
s.intern();//调用此方法之前，字符串常量池中已经存在”1“
String s2="1";
System.out.println(s==s2);jdk6:false  jdk7/8:false

  
String s3=new String("1")+new String("1");//s3变量的地址为：new String("11")
//执行完上一行代码以后，字符串常量池中没有”11“
s3.intern();//在字符串常量池中生成”11“。如何理解：jdk6创建了一个新的对象”11“,也就有新的地址，
//jdk7:此时常量池中并没有创建“11”,而是创建了一个指向堆空间中对象“11”的地址  
String s4="11";//使用的是上一行代码执行时，在常量池中生成的”11“的地址
System.out.println(s3==s4);//jdk6:false  jdk7/8:true


String s3=new String("1")+new String("1");
String s4="11";//在字符串常量池中生成了对象“11”
String s5=s3.intern();
System.out.println(s3==s4);//jdk7/8:false
System.out.println(s5==s4);//true  

``````

````java
String s=new String("a")+new String("b");
String s2=s.intern();
System.out.println(s2=="ab");//jdk6:true  jdk7/8:true
System.out.println(s=="ab");//jdk6:false  jdk7/8:true
````

````java
String s1=new String("ab");//在常量池中会生成ab
s1.intern();
String s2="ab";
System.out.println(s1==s2);//false
````

