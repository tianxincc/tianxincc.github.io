# 2020-09-09 博客开通了


    启动:   bundle exec jekyll serve
            bundle exec jekyll serve -w -H 0.0.0.0

    
## 目录结构

1. _data: 编辑显示随笔的内容
2. _includes: 引用文件
>head.html: head标签 加载css样式  
>side-panel.html:网站左侧导航栏  
>footer.html 网站下方标签  
>comments.html 留言配置页面   
>JB:  
>styles:  
>layouts:  
>>default.html:网站默认模板页  
>page.html 文章模板 无任何样式  
>post.html 文章模板  



3. _layouts:模板页
4. _posts:文章目录
5. _site:jekyll 编译文件目录
6. css:存放css 样式文件
7. images:存放img 图片文件
8. js:存放js 文件目录

---

    404.html:网页不存在跳转页面
    _config.yml:博客配置页
    about.md:博客页面 关于我介绍
    comments.html :留言页面
    index.html  网站首页
    shaft.html:时光轴页面
    tags.html:博客标签页
    tourism.html:图像页面
    external.html :博客文章 代码高亮显示(无使用 已注释)
    image-memory.html：仅显示 markdown 旅游日记
    new-old.html 文章浏览 用于上下一例文章切换 
    pagination.html 显示最近的文章
    
##更新
### 增加插件

 >使用方法是，把 plugins/categoryarchive_plugin.rb 放在 plugins 目录下
 把 _layouts/categoryarchive.html 放在 layouts 目录下  
 这样，这个插件会在Jekyll解析网站时，生成相应categories目录  
 目录下是各个分类， 每个分类下都有一个 index.html 文件  
 这个文件是根据模板文件 categoryarchive.html 生成的  
 然后可以通过 http://tianxincc.github.io/blog/categories/工具/ 访问 工具类下的 index.html 文件。



## 关于

jekyll的使用：http://www.manongjc.com/detail/12-zkqwgaoasuwszyc.html

    


    
    