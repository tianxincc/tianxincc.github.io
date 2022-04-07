
# jekyll 踩坑

## 项目clone本地 无法启动

    命令:bundler install 安装bundler后启动

## 分页插件jekyll-paginate
1. jekyll server 正常启动，但是窗口有异常信息
---
异常信息如下:

`Deprecation:You appear to have pagination turned on, but you haven't included the `jekyll-paginate` gem. Ensure you have `plugins: [jekyll-paginate]` in your configuration file.`

    原因：yml文件配置分页插件，本地无加载。
    解决办法:gem install jekyll-paginate
---

2. jekyll s 正常启动，无异常，页面正常访问但是无数据。
   1. 解决办法：在Gemfile文件中添加分页的引用
   2. gem 'jekyll-paginate', group: :jekyll_plugins

