---
layout: post
title: "SQLSERVER赋予指定操作权限"
date: 2021-09-18
categories: SQLSERVER
tags: SQLSERVER
---   

## SQLSERVER 可视化界面手动操作比较繁琐，使用命令赋予用户指定操作权限

---
### 创建一个角色
EXEC SP_ADDROLE 'seeview'

---
### 给角色授予视图'V_TEST'的select权限
GRANT SELECT ON V_TEST TO SEEVIEW

---
### 创建一个用户usera密码123，默认映射的数据库为test
EXEC SP_ADDLOGIN 'usera','123','test'

---
### 将用户添加得到seeview角色
EXEC SP_ADDUSER 'usera','123','seeview'

---
### 如果需要其他表的授权，继续执行GRANT即可
GRANT SELECT,UPDATE,DELETE ON TEST TO SEEVIEW

---

    
    
