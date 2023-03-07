#!/bin/bash
# 部署脚本
# $1=sd 开始部署、$1=cd 撤销部署(清理docker)、$1=a 分析日志、$1=start 启动docker、$1=stop 停止docker
if [[ $1 == "sd" ]]
then
  echo "start dev date: $(date +%y-%m-%d\ %H:%M:%S);" >> dev.log && \
  git pull >> dev.log && \
  npm install >> dev.log && \
  npm run docs:build >> dev.log && \
  rm -rf $PWD/docker/html/data/dist && \
  mkdir -p $PWD/docker/html/data/ && \
  mv $PWD/docs/.vitepress/dist $PWD/docker/html/data/ && \
  docker compose -f $PWD/docker/docker-compose.yml up -d && \
  docker ps -a | grep docker-brownant > $PWD/docker/dockerInfo && \
  echo -e "end dev date: $(date +%y-%m-%d\ %H:%M:%S);\n" >> dev.log
#
elif [[ $1 == "rsd" ]]
then
  dockerId=$(sed -n 1p $PWD/docker/dockerInfo | cut -d " " -f1) && \
  echo "start deploy again date: $(date +%y-%m-%d\ %H:%M:%S);" >> dev.log && \
  docker stop $dockerId && \
  git pull >> dev.log && \
  npm run docs:build >> dev.log && \
  rm -rf $PWD/docker/html/data/dist && \
  mkdir -p $PWD/docker/html/data/ && \
  mv $PWD/docs/.vitepress/dist $PWD/docker/html/data/ && \
  docker start $dockerId && \
  echo -e "end deploy again date: $(date +%y-%m-%d\ %H:%M:%S);\n" >> dev.log
#
elif [[ $1 == "cd" ]]
then
  echo "start clear date: $(date +%y-%m-%d\ %H:%M:%S);" >> dev.log && \
  docker compose -f $PWD/docker/docker-compose.yml down  >> dev.log && \
  echo -e "end clear date: $(date +%y-%m-%d\ %H:%M:%S); \n" >> dev.log
#
elif [[ $1 == "a" ]]
then
  echo "start analyze information date: $(date +%y-%m-%d\ %H:%M:%S);" >> $PWD/docker/analyze.log && \
  dockerId=$(sed -n 1p $PWD/docker/dockerInfo | cut -d " " -f1)
  docker logs $dockerId > $PWD/docker/docker.log && \
  echo -e "根据访问IP统计UV:" >> $PWD/docker/analyze.log && \
  awk '{print $1}' $PWD/docker/docker.log | sort | uniq -c | wc -l >> $PWD/docker/analyze.log && \
  echo -e "统计访问URL统计PV:" >> $PWD/docker/analyze.log && \
  awk '{print $7}' $PWD/docker/docker.log | wc -l >> $PWD/docker/analyze.log && \
  echo -e "end analyze information date: $(date +%y-%m-%d\ %H:%M:%S);\n" >> $PWD/docker/analyze.log
#
elif [[ $1 == "start" ]]
then
  dockerId=$(sed -n 1p $PWD/docker/dockerInfo | cut -d " " -f1)
  docker start $dockerId
#
elif [[ $1 == "stop" ]]
then
  dockerId=$(sed -n 1p $PWD/docker/dockerInfo | cut -d " " -f1)
  docker stop $dockerId
#
elif [[ $1 == "cl" ]]
then
  rm -rf $PWD/docker/*.log && rm -rf $PWD/docker/dockerInfo
#
elif [[ $1 == "-help" ]]
then
  echo -e "help:\n\$1=sd 开始部署\n\$1=nrsd 更新新数据再次部署\n\$1=cd 撤销部署(清理docker)\n\$1=a 分析日志\n\$1=start 启动docker\n\$1=stop 停止docker\n\$1=cl 清理docker日志"
#
else 
  echo "please get some params!"
  echo -e "help:\n\$1=sd 开始部署\n\$1=nrsd 更新新数据再次部署\n\$1=cd 撤销部署(清理docker)\n\$1=a 分析日志\n\$1=start 启动docker\n\$1=stop 停止docker\n\$1=cl 清理docker日志"
fi