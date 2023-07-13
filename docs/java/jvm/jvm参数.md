

- `-Xss` ：置线程的最大栈空间，栈的大小直接决定了函数调用的最大可达深度。
- `-Xms` 用来表示堆的起始内存，等价于 `-XX:InitialHeapSize`（默认为物理内存的1/64）。
- `-Xmx` 用来表示堆的最大内存，等价于 `-XX:MaxHeapSize`（默认为物理内存的1/4）。
-  `–XX:NewRatio` 来配置新生代和老年代的比例(默认是1:2) -XX:NewRatio=2，新生代占1，老年代占2。
- `-XX:SurvivorRatio` 来配置Eden:Surivor，比如-XX:SurvivorRatio=8，代表 Eden:From Survivor:To Survivor=8:1:1。
- `-XX:MaxTenuringThreashold=<N>`进行设置去老年代所需要达到的标记次数，默认是15次。
- `-XX:+PrintGCDetails`:输出详细的GC处理日志
  - 打印gc简要信息：① -xx:+printGC ② -verbose:gc

- 