"use strict";

var Preload = require('./Preload');

var Config = Config || {};

//ajax请求链接
Config.requireUrl = '';

//图片路径前缀
// Config.imgPath = 'http://qrs.treedom.cn/streetgame/';
Config.imgPath = './dist/img/';

//默认分享语
Config.defShare = {
	title: '分享标题',
	desc: '分享描述',
	link: location.href,
	//分享配图
	img: 'http://weiqi.treedom.cn/img/share.jpg',
	//项目名，数据查询时候用
	proj: 'kfc05',
	//填写公众号绑定的appid
	appid: 'wx12380ea254191f1b',
    cnzz: '1259179479'
};

Config.scale = 1;

Config.Preload = Preload;

//预加载的图片
Config.pageImgs = {
	imgs: [
		// {
  //           name: 'bg_end_bg',
  //           url: Config.imgPath + 'bg_end_bg.jpg'
  //       }
	],
	sprites: [
		/*
		{
			el: $('.m-game .kf-game-video'),
			pathPrefix: Config.imgPath,
			postfix: 'jpg'
		}
		*/
	],
	keyimgs: [
		/*
		{
			el: $('.m-game .kf-game-video'),
			pathPrefix: Config.imgPath,
			postfix: 'jpg'
		}
		*/
	]
};
	
module.exports = Config;
