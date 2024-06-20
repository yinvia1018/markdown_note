/*
 * @Author: hy yinvia1018@163.com
 * @Date: 2024-06-18 15:07:42
 * @LastEditors: hy yinvia1018@163.com
 * @LastEditTime: 2024-06-18 15:09:11
 * @FilePath: \mydocs\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    // 左上角网站标题
    title: '编程笔记',
    themeConfig: {
        // 左侧目录 - 路由必须与文件名相同
        sidebar: [
            '/',  // 展示README.md
            '/hello', // 展示Selenium.md
            '/hi', // 展示el-form.md
        ],
        // 右上角导航 - 超链接跳转
        nav: [
            {text: 'DOS编程俱乐部', link: 'http://106.12.123.173/#/dic'},
        ]
    },
    // 自定义根路由
    base: '/doc/',
    // markdown 展示效果的相关配置
    markdown: {
        // 显示代码行号
        lineNumbers: true,
    },
    // 更改默认的Webpack配置
    configureWebpack: {
        resolve: {
            // 配置文件路径别名
            alias: {
                '@': '/src'
            }
        }
    }
}