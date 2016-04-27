#!/bin/bash

# Add vagrant user to admin group

sudo usermod -a -G admin vagrant 

# Variables

HOME=/home/vagrant
WORK=/vagrant

# Git

sudo apt-get -y install git

# TODO: user should set its git config settings

GIT_USERNAME='User Name'
GIT_EMAIL='your@email.com'
GIT_COREEDITOR='vim'
GIT_MERGETOOL='vimdiff'
git config --global user.name "$GIT_USERNAME"
git config --global user.email "$GIT_EMAIL"
git config --global core.editor "$GIT_COREEDITOR"
git config --global merge.tool "$GIT_MERGETOOL"

# Go home

cd $HOME

# My configs (vimrc, dircolors, bashrc)

git clone https://github.com/starikovs/conf.git Conf
ln -s Conf/vimrc .vimrc
ln -s Conf/dircolors .dircolors
mv .bashrc .bashrc_
ln -s Conf/bashrc .bashrc

# Vim

sudo apt-get -y install vim
git clone https://github.com/gmarik/Vundle.vim.git .vim/bundle/vundle
#vim +PluginInstall +qall

# Nodejs (npm included)

curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo apt-get install -y build-essential

# Update npm

sudo npm install -g npm

# Webpack 

sudo npm install webpack -g

# less

sudo npm install -g less

# eslint

sudo npm install -g eslint

# babel-eslint

sudo npm install -g babel-eslint

# http-server

sudo npm install http-server -g

# install packages from package.json

cd $WORK
npm install

