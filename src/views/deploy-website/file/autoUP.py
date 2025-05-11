import upyun
import os
service = 'upyum-vlssu' #服务名称
username = 'upyum' #操作员用户名
password = 'sdsadasdsagsrgsd' #操作员密码
path = '/randompics/' #填写你随机图片在又拍云对象存储里的路径
url = "https://upyum.vlssu.com" #填写你的cdn域名
file_path = "/www/wwwroot/api.vlssu.com/img.txt" #填写你img.txt 在服务器里面的路径
up = upyun.UpYun(service, username, password, timeout=30, endpoint=upyun.ED_AUTO) #初始化
res = up.getlist(path) #读取该目录下的图片列表
with open(file_path,'w') as f:
    for i in res:
        f.write(url + path + i["name"]+'\n')