# 最新版的 element-plus 还兼容吗？

- [x] 自定义主题。已解决，提了 PR
- [ ] 自动引入 elmessage 样式、指令注册和样式
- [ ] table fixed 偏移

## 自定义主题错误

反复出现下面错误：
`Error: Module loop: this module is already being loaded.`

已解决，发现是文档没有更新，现在不必引入基础样式了。
