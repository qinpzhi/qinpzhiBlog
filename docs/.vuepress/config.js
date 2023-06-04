module.exports = {
  title: 'qinpz\'s blog',
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
//          { text: '算法思想',link: '/algorithm/thought/' },
          { text: '算法题', link: '/algorithm/code/' }
        ],
      },
      { text: '作者', link: '/about' },
    ],
    sidebar: {
//        '/java/jvm/': [
//            '',  //该目录下的README.md文件
//            'a', //该目录下的a.md文件
//            'b'  //该目录下的a.md文件
//        ],

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
                    ['2713', '矩阵中严格递增的单元格数']
                ]
            }
        ],
    },
    sidebarDepth: 2, // 侧边栏显示2级
  }
};