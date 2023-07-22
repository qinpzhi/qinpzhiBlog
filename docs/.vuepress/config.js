module.exports = {
  title: '小覃学习日记',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
          { text: '首页', link: '/' },

       {
        text: 'java学习',
        items: [
          { text: 'jvm学习',link: '/java/jvm/' }
//          { text: '网页开发', items: [{ text:'HTML', link: '/web/html/'}, { text:'CSS', link: '/web/css/'}, { text:'JavaScript', link: '/web/js/'}] },
        ],
       },
      {
        text: '算法学习',
        items: [
          { text: '算法思想',link: '/algorithm/thought/' },
          { text: '算法题', link: '/algorithm/code/' }
        ],
      },
      { text: '作者', link: '/about' },
    ],
    sidebar: {
        '/java/jvm/': [
                ['', '概述'],
                ['类加载子系统', '类加载子系统'],
                ['运行时数据区','运行时数据区'],
                ['对象实例化及访问定位','对象实例化及访问定位'],
                ['执行引擎','执行引擎'],
                ['StringTable','StringTable'],
                ['垃圾回收','垃圾回收'],
                ['垃圾回收器','垃圾回收器'],
                ['jvm参数','JVM参数汇总'],
                ['jvm命令','JVM调优命令'],
                ['面试题','面试题']

//
//                {
//                    title: '运行时数据区',  //组名
//                    children: [
//                        ['程序计数器', '程序计数器']
//                    ]
//                }

//            'ss':'类加载子系统' //该目录下的a.md文件
////            'b'  //该目录下的a.md文件
        ],
        '/algorithm/code/': [
//            {
//                title: '算法题',  //组名
//                children: [
//                    ['', '算法题']
//                ]
//            },
            {
                title: '动态规划',  //组名
                children: [
                    ['1547', '切棍子的最小成本'],
                    ['2713', '矩阵中严格递增的单元格数'],
                    ['面试题17.24.最大子矩阵', '最大子矩阵']
                ]
            },
            {
                title: '并查集',  //组名
                children: [
                    ['2709', '最大公约数遍历']
                ]
            },
            {
                title: '倒排索引',  //组名
                children: [
                    ['面试题17.26.稀疏相似度', '稀疏相似度']
                ]
            },
            {
                title: '图论',  //组名
                children: [
                    ['2699', '修改图中的边权']
                ]
            },
            {
                title: '字典树',  //组名
                children: [
                    ['面试题17.25.单词矩阵', '单词矩阵--字典树+回溯']
                ]
            }
        ]
    },
    sidebarDepth: 2, // 侧边栏显示2级
  },
  plugins: [
  'fulltext-search',
   '@vuepress/plugin-last-updated'
  ]
};