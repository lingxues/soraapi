---
outline: deep
---

# 使用教程

## ANDROID

在设置搜索私人DNS 填写 dns.soraru.org

## IOS/MAC

### 旧版系统

访问 https://soraru.org/soradns.mobileconfig 下载配置文件

### 新版系统

直接在设置修改DNS

## WINDOWS

### WINDOWS11

由于DNS服务器IP可能发生变化，首先先要找到IP地址

访问 https://www.nslookup.io/domains/dns.soraru.org/dns-records/ 复制IPV4地址

打开设置 点击网络和Internet

然后点击以太网

点击DNS服务器分配旁边的编辑按钮

改成手动 ipv4开关打开 首选DNS填写上面获取的ipv4地址

DNS over HTTPS 选择 开（手动模板）

填写 https://dns.soraru.org/soradns

### 旧版Windows

旧版Windows不支持加密DNS设置，可选安装ADGUARD

## 浏览器

### Firefox

设置 隐私与安全 基于HTTPS的DNS

最大保护 自定义 填写 https://dns.soraru.org/soradns

### chrome

设置 隐私与安全 安全 使用安全DNS

自定义 填写 https://dns.soraru.org/soradns
