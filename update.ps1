# 从 docs/config 目录复制 CNAME, robots.txt 到 docs 目录
Copy-Item .\CNAME .\docs\
Copy-Item .\robots.txt .\docs\

Write-Output "`n`n 复制成功 `n`n"
Read-Host -Prompt "按 Enter 键继续"

Write-Output "`n`n git status : `n`n"
# 查看状态
git status

Write-Output "`n`n git add . : `n`n"
# 添加所有文件
git add .

Write-Output "`n`n git commit -m 'update pages' : `n`n"
# 提交更新
git commit -m "update pages"

Write-Output "`n`n git push origin pages : `n`n"
# 推送到pages分支
git push origin pages


Write-Output "`n `n `n"
# 暂停脚本
Read-Host -Prompt "按下 Enter 键退出"