var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var AddFriendTipUI=(function(_super){
		function AddFriendTipUI(){
			
		    this.bg_img=null;
		    this.title_txt=null;
		    this.content_input=null;
		    this.sure_btn=null;
		    this.cancel_btn=null;
		    this.close_btn=null;
		    this.paste_txt=null;

			AddFriendTipUI.__super.call(this);
		}

		CLASS$(AddFriendTipUI,'ui.AddFriendTipUI',_super);
		var __proto__=AddFriendTipUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AddFriendTipUI.uiView);

		}

		AddFriendTipUI.uiView={"type":"View","props":{"width":434,"height":240},"child":[{"type":"Image","props":{"y":17,"x":3,"var":"bg_img","skin":"gameres/png/playInfo_bg.png","sizeGrid":"61,32,23,27","name":"bg_img","height":200},"child":[{"type":"Text","props":{"y":14,"x":4,"width":387,"var":"title_txt","text":"添加好友","name":"title_txt","height":24,"fontSize":24,"color":"#f9f6f6","align":"center"}},{"type":"TextInput","props":{"y":70,"x":32,"width":304,"var":"content_input","skin":"gameres/ui/f_bottomFrame.png","prompt":"请输入好友昵称","name":"content_input","height":31,"color":"#ffffff"}},{"type":"Button","props":{"y":133,"x":46,"var":"sure_btn","stateNum":2,"skin":"gameres/ui/f_sure.png","name":"sure_btn"}},{"type":"Button","props":{"y":133,"x":203,"var":"cancel_btn","stateNum":2,"skin":"gameres/ui/cancel.png","name":"cancel_btn"}},{"type":"Button","props":{"y":-24,"x":371,"var":"close_btn","stateNum":2,"skin":"gameres/ui/but_close.png","name":"close_btn"}},{"type":"Text","props":{"y":78,"x":294,"var":"paste_txt","text":"粘贴","name":"paste_txt","fontSize":16}}]}]};
		return AddFriendTipUI;
	})(View);
var AddSkillsUI=(function(_super){
		function AddSkillsUI(){
			
		    this.img_bg=null;
		    this.btn_close=null;
		    this.skill_name=null;
		    this.btn_determine=null;
		    this.img_skill=null;

			AddSkillsUI.__super.call(this);
		}

		CLASS$(AddSkillsUI,'ui.AddSkillsUI',_super);
		var __proto__=AddSkillsUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AddSkillsUI.uiView);

		}

		AddSkillsUI.uiView={"type":"View","props":{"mouseThrough":true},"child":[{"type":"Image","props":{"y":154,"x":214,"width":239,"var":"img_bg","skin":"gameres/png/addskills_bg.png","sizeGrid":"0,14,0,81","name":"img_bg","height":129},"child":[{"type":"Button","props":{"var":"btn_close","top":-22,"stateNum":2,"skin":"gameres/ui/btn_close.png","right":-26,"name":"close"}},{"type":"Label","props":{"y":35,"x":85,"var":"skill_name","valign":"middle","text":"刺杀剑术","overflow":"hidden","name":"skill_name","fontSize":20,"color":"#e29d13","bold":true}},{"type":"Text","props":{"y":67,"x":85,"valign":"middle","text":"是否装备这个技能","fontSize":17,"color":"#f6d697"}},{"type":"Button","props":{"width":68,"var":"btn_determine","stateNum":2,"skin":"gameres/ui/btn_ok.png","right":2.5,"name":"determine","labelSize":16,"labelColors":"#f6d697,#e29d13","label":"确定","height":24,"bottom":3}},{"type":"Image","props":{"y":39,"x":20,"width":45,"var":"img_skill","skin":"gameres/ui/addskills_img.png","name":"img_skill","height":45}}]}]};
		return AddSkillsUI;
	})(View);
var AlertUI=(function(_super){
		function AlertUI(){
			
		    this.img_bg=null;

			AlertUI.__super.call(this);
		}

		CLASS$(AlertUI,'ui.AlertUI',_super);
		var __proto__=AlertUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AlertUI.uiView);

		}

		AlertUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":117,"x":167,"width":545,"var":"img_bg","skin":"gameres/png/fenghao_res.png","sizeGrid":"5,5,5,5","height":242,"alpha":1},"child":[{"type":"Box","props":{"y":-117,"x":-167,"width":470,"name":"sel_node","height":52},"child":[{"type":"Button","props":{"y":256,"x":262,"width":26,"stateNum":2,"skin":"gameres/ui/alert_sel_btn.png","name":"btn_sel_0","height":26}},{"type":"Button","props":{"y":256,"x":527,"stateNum":2,"skin":"gameres/ui/alert_sel_btn.png","name":"btn_sel_1"}},{"type":"Text","props":{"y":260,"x":304,"wordWrap":true,"valign":"middle","text":"1111","name":"lbl_sel_0","fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":260,"x":567,"wordWrap":true,"valign":"middle","text":"1111","name":"lbl_sel_1","fontSize":18,"color":"#ffffff","align":"left"}}]},{"type":"TextInput","props":{"y":97,"x":68,"width":413,"type":"number","text":"0","name":"txt_input","height":22,"fontSize":18,"font":"SimSun","color":"#efe9e9","borderColor":"#51462e","bgColor":"#201f1f"}},{"type":"Text","props":{"y":87,"x":48,"wordWrap":true,"width":450,"valign":"middle","text":"xxxxxxxxxxxxxxxx","name":"lbl_txt_ipt","height":32,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":3,"x":38,"wordWrap":true,"width":460,"valign":"middle","name":"lbl_title","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":51,"x":48,"wordWrap":true,"width":450,"valign":"middle","text":"xxxxxxxxxxxxxxxx","name":"lbl_txt","height":113,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":-159,"x":-222,"name":"node_grop"},"child":[{"type":"Button","props":{"y":343,"x":286,"stateNum":2,"skin":"gameres/ui/alert_btn_rigjt.png","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#ffffff,#ffffff","label":"确定"}},{"type":"Button","props":{"y":343,"x":575,"stateNum":2,"skin":"gameres/ui/alert_btn_rigjt.png","name":"btn_cnl","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#ffffff,#ffffff","label":"取消"}}]},{"type":"Button","props":{"y":186,"x":212,"stateNum":2,"skin":"gameres/ui/alert_btn_rigjt.png","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#ffffff,#ffffff","label":"确定"}}]}]};
		return AlertUI;
	})(View);
var AuctionHouseWinUI=(function(_super){
		function AuctionHouseWinUI(){
			
		    this.tab_box=null;
		    this.wordAuction_panel=null;
		    this.nav_panel=null;
		    this.sort_vbox=null;
		    this.all_btn=null;
		    this.equip_btn=null;
		    this.skill_btn=null;
		    this.material_btn=null;
		    this.other_btn=null;
		    this.auctionHouse_list=null;
		    this.moneyFilter_com=null;
		    this.timeFilter_com=null;
		    this.myAuction_panel=null;
		    this.myAuction_list=null;
		    this.myShelves_panel=null;
		    this.limitAuction_txt=null;
		    this.saleAuction_list=null;
		    this.bag_list=null;
		    this.shelvesItem_img=null;
		    this.currency_box=null;
		    this.close_btn=null;
		    this.noAuction_img=null;

			AuctionHouseWinUI.__super.call(this);
		}

		CLASS$(AuctionHouseWinUI,'ui.AuctionHouseWinUI',_super);
		var __proto__=AuctionHouseWinUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AuctionHouseWinUI.uiView);

		}

		AuctionHouseWinUI.uiView={"type":"View","props":{"width":712,"height":540},"child":[{"type":"Image","props":{"skin":"gameres/png/auctionHouse_bg.png"},"child":[{"type":"HBox","props":{"y":50,"x":26,"var":"tab_box","space":4,"name":"tab_box"},"child":[{"type":"Button","props":{"y":0,"x":27,"stateNum":2,"skin":"gameres/ui/wordAuction.png"}},{"type":"Button","props":{"y":0,"x":140,"stateNum":2,"skin":"gameres/ui/myAuction.png"}},{"type":"Button","props":{"y":0,"x":269,"stateNum":2,"skin":"gameres/ui/myShelves.png"}}]},{"type":"Panel","props":{"y":99,"x":16,"width":680,"var":"wordAuction_panel","name":"wordAuction_panel","height":344},"child":[{"type":"Image","props":{"y":-5,"x":10,"skin":"gameres/ui/wordAuction_bg.png"},"child":[{"type":"Panel","props":{"y":3,"x":3,"width":117,"var":"nav_panel","name":"nav_panel","height":304},"child":[{"type":"VBox","props":{"y":4,"x":4,"var":"sort_vbox","name":"sort_vbox"},"child":[{"type":"Button","props":{"y":0,"x":-1,"var":"all_btn","stateNum":2,"skin":"gameres/ui/auction_all.png","name":"all_btn"}},{"type":"Button","props":{"y":41,"x":-1,"var":"equip_btn","stateNum":2,"skin":"gameres/ui/auction_equip.png","name":"equip_btn"}},{"type":"Button","props":{"y":82,"x":-1,"var":"skill_btn","stateNum":2,"skin":"gameres/ui/auction_skill.png","name":"skill_btn"}},{"type":"Button","props":{"y":123,"x":-1,"var":"material_btn","stateNum":2,"skin":"gameres/ui/auction_material.png","name":"material_btn"}},{"type":"Button","props":{"y":164,"x":-1,"var":"other_btn","stateNum":2,"skin":"gameres/ui/auction_other.png","name":"other_btn"}}]}]}]},{"type":"Image","props":{"y":-3,"x":136,"width":537,"skin":"gameres/ui/auction_blackBg.png","sizeGrid":"6,8,7,11","height":307}},{"type":"Image","props":{"y":0,"x":293,"skin":"gameres/ui/auciton_vertical.png"}},{"type":"Image","props":{"y":0,"x":393,"skin":"gameres/ui/auciton_vertical.png"}},{"type":"Image","props":{"y":0,"x":532,"skin":"gameres/ui/auciton_vertical.png"}},{"type":"Image","props":{"y":27,"x":139,"width":530,"skin":"gameres/ui/auction_cross.png"}},{"type":"Text","props":{"y":8,"x":184,"text":"竞拍物品","stroke":2,"fontSize":16,"color":"#f7e700"}},{"type":"Text","props":{"y":8,"x":315,"text":"剩余时间","stroke":2,"fontSize":16,"color":"#f7e700"}},{"type":"Text","props":{"y":8,"x":435,"text":"竞拍价格","stroke":2,"fontSize":16,"color":"#f7e700"}},{"type":"Text","props":{"y":8,"x":577,"text":"一口价","stroke":2,"fontSize":16,"color":"#f7e700"}},{"type":"List","props":{"y":32,"x":138,"width":531,"var":"auctionHouse_list","name":"auctionHouse_list","height":269}},{"type":"ComboBox","props":{"y":311,"x":457,"width":92,"visibleNum":10,"var":"moneyFilter_com","skin":"gameres/ui/currency_com.png","sizeGrid":"0,28,0,0","selectedIndex":0,"name":"moneyFilter_com","labelSize":15,"labelColors":"#f7ef8c,#f7ef8c,#f7ef8c,#f7ef8c","itemSize":15}},{"type":"ComboBox","props":{"y":311,"x":559,"width":92,"var":"timeFilter_com","skin":"gameres/ui/currency_com.png","sizeGrid":"0,28,0,0","selectedIndex":0,"name":"timeFilter_com","labels":"时间升序,时间降序","labelSize":15,"labelColors":"#f7ef8c,#f7ef8c,#f7ef8c,#f7ef8c","itemSize":15}}]},{"type":"Panel","props":{"y":100,"x":13,"width":680,"var":"myAuction_panel","name":"myAuction_panel","height":344},"child":[{"type":"Image","props":{"y":-1,"x":13,"width":662,"skin":"gameres/ui/auction_blackBg.png","sizeGrid":"7,8,8,8","height":303}},{"type":"Image","props":{"y":2,"x":180,"skin":"gameres/ui/auciton_vertical.png"}},{"type":"Image","props":{"y":2,"x":305,"skin":"gameres/ui/auciton_vertical.png"}},{"type":"Image","props":{"y":2,"x":486,"skin":"gameres/ui/auciton_vertical.png"}},{"type":"Image","props":{"y":29,"x":17,"width":654,"skin":"gameres/ui/auction_cross.png"}},{"type":"Text","props":{"y":10,"x":66,"text":"竞拍物品","stroke":2,"fontSize":16,"color":"#f7e700"}},{"type":"Text","props":{"y":10,"x":212,"text":"剩余时间","stroke":2,"fontSize":16,"color":"#f7e700"}},{"type":"Text","props":{"y":10,"x":363,"text":"竞拍价格","stroke":2,"fontSize":16,"color":"#f7e700"}},{"type":"Text","props":{"y":10,"x":551,"text":"一口价","stroke":2,"fontSize":16,"color":"#f7e700"}},{"type":"List","props":{"y":35,"x":16,"width":655,"var":"myAuction_list","name":"myAuction_list","height":262}}]},{"type":"Panel","props":{"y":101,"x":14,"width":680,"var":"myShelves_panel","name":"myShelves_panel","height":344},"child":[{"type":"Image","props":{"y":-2,"x":14,"width":656,"skin":"gameres/ui/auction_black2Bg.png","sizeGrid":"7,9,9,6","height":303},"child":[{"type":"Image","props":{"y":30,"x":2,"width":651,"skin":"gameres/ui/auction_cross.png"}},{"type":"Image","props":{"y":3,"x":396,"width":16,"skin":"gameres/ui/auciton_vertical.png","height":298}},{"type":"Text","props":{"y":10,"x":124,"text":"寄售货架","stroke":2,"fontSize":16,"color":"#f7e700"}},{"type":"Text","props":{"y":10,"x":193,"var":"limitAuction_txt","text":"(3/8)","stroke":2,"name":"limitAuction_txt","fontSize":16,"color":"#f7e700"}},{"type":"List","props":{"y":36,"x":3,"width":395,"var":"saleAuction_list","name":"saleAuction_list","height":262}},{"type":"Text","props":{"y":10,"x":463,"text":"请选择寄售道具","fontSize":16,"color":"#f7e700"}},{"type":"List","props":{"y":36,"x":414,"width":237,"var":"bag_list","spaceY":10,"spaceX":8,"repeatX":5,"name":"bag_list","height":264},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"var":"shelvesItem_img","skin":"gameres/ui/setiing_itemFrame.png","name":"shelvesItem_img"}}]}]}]}]},{"type":"HBox","props":{"y":410,"x":18,"var":"currency_box","space":4,"name":"currency_box"}},{"type":"Button","props":{"y":-21,"x":653,"var":"close_btn","stateNum":2,"skin":"gameres/ui/btn_close_new.png","name":"close_btn"}}]},{"type":"Image","props":{"y":227,"x":325,"var":"noAuction_img","skin":"gameres/ui/noAuction_img.png","name":"noAuction_img"}},{"type":"Image","props":{"y":7,"x":311,"skin":"gameres/ui/auction_title.png"}}]};
		return AuctionHouseWinUI;
	})(View);
var AuctionItemUI=(function(_super){
		function AuctionItemUI(){
			
		    this.box1=null;
		    this.item_box=null;
		    this.itemName_lab=null;
		    this.myAuction_txt=null;
		    this.box2=null;
		    this.lastTime_lab=null;
		    this.box3=null;
		    this.currencyIcon_img=null;
		    this.bidTip_txt=null;
		    this.bidMoney_lab=null;
		    this.bidding_btn=null;
		    this.box4=null;
		    this.currencyIcon1_img=null;
		    this.oncePrice_lab=null;
		    this.buy_btn=null;

			AuctionItemUI.__super.call(this);
		}

		CLASS$(AuctionItemUI,'ui.AuctionItemUI',_super);
		var __proto__=AuctionItemUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AuctionItemUI.uiView);

		}

		AuctionItemUI.uiView={"type":"View","props":{"width":700,"height":80},"child":[{"type":"Box","props":{"y":14,"x":7,"var":"box1","name":"box1","mouseThrough":true},"child":[{"type":"Image","props":{"y":4,"x":0,"var":"item_box","skin":"gameres/ui/setiing_itemFrame.png","name":"item_box"}},{"type":"Label","props":{"y":16,"x":55,"var":"itemName_lab","text":"物品的颜色","name":"itemName_lab","fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":-7,"x":57,"var":"myAuction_txt","text":"我的拍品","name":"myAuction_txt","fontSize":14,"color":"#10ff00"}}]},{"type":"Box","props":{"y":32,"x":178,"var":"box2","name":"box2"},"child":[{"type":"Label","props":{"var":"lastTime_lab","text":"22:22:22","name":"lastTime_lab","color":"#ffffff"}}]},{"type":"Box","props":{"y":9,"x":252,"width":148,"var":"box3","name":"box3","height":59},"child":[{"type":"Image","props":{"y":15,"x":-19,"width":30,"var":"currencyIcon_img","name":"currencyIcon_img","height":30}},{"type":"Text","props":{"y":-3,"x":32,"var":"bidTip_txt","text":"您的出价最高","name":"bidTip_txt","fontSize":14,"color":"#10ff00"}},{"type":"Label","props":{"y":27,"x":11,"width":65,"var":"bidMoney_lab","text":"9999.9万","stroke":1,"name":"bidMoney_lab","height":16,"fontSize":16,"color":"#ffffff","align":"right"}},{"type":"Button","props":{"y":9,"x":72,"var":"bidding_btn","stateNum":2,"skin":"gameres/ui/auctionBid.png","name":"bidding_btn"}}]},{"type":"Box","props":{"y":4,"x":388,"width":118,"var":"box4","name":"box4","height":58},"child":[{"type":"Image","props":{"y":21,"x":0,"width":30,"var":"currencyIcon1_img","name":"currencyIcon1_img","height":30}},{"type":"Label","props":{"y":31,"x":17,"width":64,"var":"oncePrice_lab","text":"9999.9万","stroke":1,"name":"oncePrice_lab","height":16,"fontSize":16,"color":"#ffffff","align":"right"}},{"type":"Button","props":{"y":13,"x":78,"var":"buy_btn","stateNum":2,"skin":"gameres/ui/auctionBuy.png","name":"buy_btn"}}]},{"type":"Image","props":{"y":73,"x":0,"width":700,"skin":"gameres/ui/auction_cross.png"}}]};
		return AuctionItemUI;
	})(View);
var AutoItemUI=(function(_super){
		function AutoItemUI(){
			
		    this.img_bg=null;
		    this.img_itembg=null;
		    this.img_item=null;
		    this.btn_use=null;
		    this.btn_close=null;
		    this.lab_itemName=null;

			AutoItemUI.__super.call(this);
		}

		CLASS$(AutoItemUI,'ui.AutoItemUI',_super);
		var __proto__=AutoItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AutoItemUI.uiView);

		}

		AutoItemUI.uiView={"type":"Dialog","props":{"y":0,"x":0,"width":163,"height":203},"child":[{"type":"Image","props":{"var":"img_bg","skin":"gameres/ui/autoItem.png","centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":55,"x":59,"width":68,"var":"img_itembg","skin":"gameres/ui/img_bag_bg.png","height":68},"child":[{"type":"Image","props":{"var":"img_item","centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":167,"x":48,"var":"btn_use","stateNum":2,"skin":"gameres/ui/btn_autoItem.png","labelStrokeColor":"#191919","labelStroke":1,"labelSize":17,"labelFont":"SimHei","labelColors":"#ffedcb,#ffedcb","label":"使用(5)"}},{"type":"Button","props":{"y":-35,"x":134,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Label","props":{"y":132,"x":17,"width":149,"visible":true,"var":"lab_itemName","height":20,"fontSize":18,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":6,"x":53,"text":"快捷装备","stroke":1,"fontSize":19,"font":"Arial","color":"#dec750","bold":true}}]}]};
		return AutoItemUI;
	})(Dialog);
var AuxiliaryUI=(function(_super){
		function AuxiliaryUI(){
			
		    this.img_base=null;
		    this.btn_exit=null;
		    this.box0=null;
		    this.backmusic=null;
		    this.clear=null;
		    this.nameshow3=null;
		    this.showhp=null;
		    this.gameVoice=null;
		    this.voiceLable=null;
		    this.viewValue=null;
		    this.showExp=null;
		    this.ShowName=null;
		    this.ShowTitle=null;
		    this.nameshow1=null;
		    this.nameshow2=null;
		    this.nameshow4=null;
		    this.banCkilcMove=null;
		    this.heroeqsecure=null;
		    this.unpack=null;
		    this.notLock=null;
		    this.hidePlayer=null;
		    this.hideMonster=null;
		    this.i_delayShow=null;
		    this.showBlue=null;
		    this.smooth=null;
		    this.viewControl=null;
		    this.humsimple=null;
		    this.monsimple=null;
		    this.doubleRocker=null;
		    this.weaponsimple=null;
		    this.switchPlayer_btn=null;
		    this.autoWear=null;
		    this.box1=null;
		    this.z_autoskill_1=null;
		    this.z_autoskill_2=null;
		    this.z_autoskill_3=null;
		    this.z_autoskill_4=null;
		    this.zs_gwcs=null;
		    this.zs_lyjf=null;
		    this.zs_zrjf=null;
		    this.f_autoskill_1=null;
		    this.d_autoskill_2=null;
		    this.d_autoskill_3=null;
		    this.d_autoskill_4=null;
		    this.f_keepskill_1=null;
		    this.d_autoskill_6=null;
		    this.d_autoskill_5=null;
		    this.auto_dodge=null;
		    this.exercise=null;
		    this.pickItemsFirst=null;
		    this.exercise_time=null;
		    this.exercise_slider=null;
		    this.ds_cure_time=null;
		    this.ds_time_slider=null;
		    this.single_fs=null;
		    this.group_fs=null;
		    this.single_ds=null;
		    this.group_ds=null;
		    this.group_skill_num=null;
		    this.group_skill_pro=null;
		    this.group_skill_slider=null;
		    this.poison_ds=null;
		    this.ds_summon=null;
		    this.ds_cure=null;
		    this.ds_cure_list=null;
		    this.ds_cure_listNone=null;
		    this.ds_cure_listIcon=null;
		    this.ds_cure_limit=null;
		    this.ds_limit_pro=null;
		    this.ds_limit_slider=null;
		    this.single_fs_list=null;
		    this.single_fs_listNone=null;
		    this.single_fs_listIcon=null;
		    this.exercise_list=null;
		    this.exercise_listNone=null;
		    this.exercise_listIcon=null;
		    this.group_fs_list=null;
		    this.group_fs_listNone=null;
		    this.group_fs_listIcon=null;
		    this.single_ds_list=null;
		    this.single_ds_listNone=null;
		    this.single_ds_listIcon=null;
		    this.group_ds_list=null;
		    this.group_ds_listNone=null;
		    this.group_ds_listIcon=null;
		    this.ds_summon_list=null;
		    this.ds_summon_listNone=null;
		    this.ds_summon_listIcon=null;
		    this.d_autoskill_1=null;
		    this.iceRoar=null;
		    this.bombFire=null;
		    this.incendiaryShower=null;
		    this.fastLight=null;
		    this.hurricane=null;
		    this.box2=null;
		    this.hpN_img=null;
		    this.autohp=null;
		    this.automp=null;
		    this.autohp_mp2=null;
		    this.autohp_mp=null;
		    this.autotp1=null;
		    this.autotp=null;
		    this.mpN_img=null;
		    this.mppercentagetext=null;
		    this.mp_pro=null;
		    this.mp_vs=null;
		    this.hppercentagetext=null;
		    this.hp_pro=null;
		    this.hp_vs=null;
		    this.hpS_img=null;
		    this.mpS_img=null;
		    this.hppercentagetext2=null;
		    this.Hp_mp_pro2=null;
		    this.Hp_mp_vs2=null;
		    this.hppercentagetext1=null;
		    this.Hp_mp_pro=null;
		    this.Hp_mp_vs=null;
		    this.tp_img=null;
		    this.tp1_img=null;
		    this.tppercentagetext1=null;
		    this.tp_pro1=null;
		    this.tp_vs1=null;
		    this.tppercentagetext=null;
		    this.tp_pro=null;
		    this.tp_vs=null;
		    this.tppercentagetextH=null;
		    this.tp_proH=null;
		    this.tp_vsH=null;
		    this.hppercentagetext1H=null;
		    this.Hp_mp_proH=null;
		    this.Hp_mp_vsH=null;
		    this.hppercentagetext2H=null;
		    this.Hp_mp_pro2H=null;
		    this.Hp_mp_vs2H=null;
		    this.mpS_imgH=null;
		    this.hpS_imgH=null;
		    this.hppercentagetextH=null;
		    this.hp_proH=null;
		    this.hp_vsH=null;
		    this.mppercentagetextH=null;
		    this.mp_proH=null;
		    this.mp_vsH=null;
		    this.mpN_imgH=null;
		    this.autohpH=null;
		    this.autompH=null;
		    this.autohp_mpH=null;
		    this.autohp_mp2H=null;
		    this.autotpH=null;
		    this.hpN_imgH=null;
		    this.tp_reset_btn=null;
		    this.tp1_reset_btn=null;
		    this.hpN_reset_btn=null;
		    this.mpN_reset_btn=null;
		    this.hpS_reset_btn=null;
		    this.mpS_reset_btn=null;
		    this.box3=null;
		    this.searchMonster=null;
		    this.allCancel=null;
		    this.monsterlist=null;
		    this.isExclude=null;
		    this.monsterName=null;
		    this.btn_ref_mon=null;
		    this.box4=null;
		    this.itemlist=null;
		    this.itemname=null;
		    this.isshow=null;
		    this.ispickup=null;
		    this.special=null;
		    this.prompt=null;
		    this.scrollBar=null;
		    this.itemSort_bg=null;
		    this.itemSort_all=null;
		    this.itemSort_skill=null;
		    this.itemSort_weapon=null;
		    this.itemSort_clothes=null;
		    this.itemSort_jewelry=null;
		    this.itemSort_drug=null;
		    this.itemSort_others=null;
		    this.pickPlan=null;
		    this.pickUp_list=null;
		    this.pickTypeName=null;
		    this.dropShow_check=null;
		    this.pickUp_check=null;
		    this.pickUpCheck_btn=null;
		    this.box5=null;
		    this.box6=null;
		    this.setingDirectory_box=null;
		    this.dropDowAnim_box=null;

			AuxiliaryUI.__super.call(this);
		}

		CLASS$(AuxiliaryUI,'ui.AuxiliaryUI',_super);
		var __proto__=AuxiliaryUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AuxiliaryUI.uiView);

		}

		AuxiliaryUI.uiView={"type":"View","props":{"y":0,"x":0,"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":1400,"bottom":0},"child":[{"type":"Image","props":{"width":712,"var":"img_base","skin":"gameres/png/setting_bg.png","name":"img_base","height":465,"centerY":3,"centerX":0},"child":[{"type":"Button","props":{"y":-9,"x":654,"var":"btn_exit","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_exit"}},{"type":"Panel","props":{"y":57,"x":25,"width":661,"var":"box0","name":"box0","height":388},"child":[{"type":"CheckBox","props":{"y":68,"x":268,"var":"backmusic","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"backmusic","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"背景音乐"}},{"type":"CheckBox","props":{"y":148,"x":133,"var":"clear","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"clear","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"清理尸体"}},{"type":"CheckBox","props":{"y":28,"x":403,"var":"nameshow3","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"nameshow3","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"人物显名"}},{"type":"CheckBox","props":{"y":28,"x":538,"var":"showhp","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"showhp","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"显示血条"}},{"type":"HSlider","props":{"y":248,"x":221,"var":"gameVoice","value":50,"skin":"gameres/ui/seting_musicBg.png","showLabel":false,"scaleY":1,"scaleX":1,"name":"gameVoice","min":1,"max":101}},{"type":"Label","props":{"y":243,"x":145,"text":"游戏音量","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":293,"x":145,"text":"视图缩放","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":243,"x":463,"width":17.796875,"var":"voiceLable","text":"50","name":"voiceLable","height":16,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":293,"x":463,"var":"viewValue","text":"100%","fontSize":16,"color":"#ffffff","align":"center"}},{"type":"CheckBox","props":{"y":68,"x":133,"var":"showExp","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"showExp","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"显示经验"}},{"type":"CheckBox","props":{"y":28,"x":5,"var":"ShowName","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"ShowName","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"只显人名"}},{"type":"CheckBox","props":{"y":28,"x":133,"var":"ShowTitle","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"ShowTitle","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"隐藏称号"}},{"type":"CheckBox","props":{"y":68,"x":5,"var":"nameshow1","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"nameshow1","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"怪物显名"}},{"type":"CheckBox","props":{"y":68,"x":403,"var":"nameshow2","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"nameshow2","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"NPC显名"}},{"type":"CheckBox","props":{"y":108,"x":5,"var":"nameshow4","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"nameshow4","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"宠物显名"}},{"type":"CheckBox","props":{"y":148,"x":268,"var":"banCkilcMove","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"banCkilcMove","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"禁止点地"}},{"type":"CheckBox","props":{"y":148,"x":433,"var":"heroeqsecure","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"heroeqsecure","labelStroke":1,"labelSize":16,"labelPadding":"5","labelColors":"#cdcbc8,#cdcbc8","label":"英雄开盾"}},{"type":"CheckBox","props":{"y":28,"x":268,"var":"unpack","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"unpack","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动解包"}},{"type":"CheckBox","props":{"y":148,"x":5,"var":"notLock","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"notLock","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"禁止锁定"}},{"type":"CheckBox","props":{"y":68,"x":538,"var":"hidePlayer","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"hidePlayer","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"屏蔽玩家"}},{"type":"CheckBox","props":{"y":148,"x":538,"var":"hideMonster","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"hideMonster","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"屏蔽怪物"}},{"type":"CheckBox","props":{"y":108,"x":268,"var":"i_delayShow","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"i_delayShow","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"延迟显示"}},{"type":"CheckBox","props":{"y":108,"x":538,"var":"showBlue","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"showBlue","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"护身显蓝"}},{"type":"CheckBox","props":{"y":108,"x":133,"var":"smooth","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"smooth","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"平滑模式"}},{"type":"HSlider","props":{"y":298,"x":221,"var":"viewControl","value":50,"skin":"gameres/ui/seting_musicBg.png","showLabel":false,"scaleY":1,"scaleX":1,"min":1,"max":101}},{"type":"CheckBox","props":{"y":188,"x":133,"var":"humsimple","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"humsimple","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"人物简装"}},{"type":"CheckBox","props":{"y":188,"x":5,"var":"monsimple","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"monsimple","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"怪物简装"}},{"type":"CheckBox","props":{"y":108,"x":403,"var":"doubleRocker","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"doubleRocker","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"双摇杆"}},{"type":"CheckBox","props":{"y":188,"x":268,"var":"weaponsimple","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"weaponsimple","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"武器简装"}},{"type":"Button","props":{"y":333,"x":281,"var":"switchPlayer_btn","stateNum":2,"skin":"gameres/ui/seting_switchPlayer.png","name":"switchPlayer_btn"}},{"type":"CheckBox","props":{"y":148,"x":403,"var":"autoWear","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"autoWear","labelStroke":1,"labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动穿戴"}}]},{"type":"Panel","props":{"y":64,"x":23,"width":660,"var":"box1","name":"box1","height":376},"child":[{"type":"CheckBox","props":{"y":289,"x":28,"var":"z_autoskill_1","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"z_autoskill_1","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"刀刀刺杀"}},{"type":"CheckBox","props":{"y":289,"x":175,"var":"z_autoskill_2","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"z_autoskill_2","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动烈火"}},{"type":"CheckBox","props":{"y":289,"x":471,"var":"z_autoskill_3","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"z_autoskill_3","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"智能半月"}},{"type":"CheckBox","props":{"y":340,"x":175,"var":"z_autoskill_4","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"z_autoskill_4","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动开天斩"}},{"type":"CheckBox","props":{"y":289,"x":328,"var":"zs_gwcs","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"zs_gwcs","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"隔位刺杀"}},{"type":"CheckBox","props":{"y":344,"x":328,"var":"zs_lyjf","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"zs_lyjf","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动龙影剑法"}},{"type":"CheckBox","props":{"y":342,"x":28,"var":"zs_zrjf","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"zs_zrjf","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动逐日剑法"}},{"type":"CheckBox","props":{"y":416,"x":28,"var":"f_autoskill_1","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"f_autoskill_1","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"持续开盾"}},{"type":"CheckBox","props":{"y":613,"x":28,"var":"d_autoskill_2","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"d_autoskill_2","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"持续隐身"}},{"type":"CheckBox","props":{"y":562,"x":28,"var":"d_autoskill_3","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"d_autoskill_3","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动毒符"}},{"type":"Label","props":{"y":260,"x":23,"text":"战士","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":532,"x":23,"text":"道士","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":395,"x":23,"text":"法师","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"CheckBox","props":{"y":675,"x":28,"var":"d_autoskill_4","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"d_autoskill_4","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"治愈术只对自己释放"}},{"type":"CheckBox","props":{"y":416,"x":175,"var":"f_keepskill_1","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"f_keepskill_1","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"持续施法"}},{"type":"CheckBox","props":{"y":608,"x":400,"var":"d_autoskill_6","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"d_autoskill_6","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动圣神战甲术"}},{"type":"CheckBox","props":{"y":613,"x":250,"var":"d_autoskill_5","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"d_autoskill_5","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动幽灵盾"}},{"type":"CheckBox","props":{"y":201,"x":210,"var":"auto_dodge","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"auto_dodge","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"挂机自动躲避"}},{"type":"CheckBox","props":{"y":35,"x":28,"var":"exercise","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"exercise","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动练功"}},{"type":"CheckBox","props":{"y":201,"x":28,"var":"pickItemsFirst","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"pickItemsFirst","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"优先拾取物品"}},{"type":"Button","props":{"y":106,"x":192,"var":"exercise_time","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"exercise_time","labelSize":18,"labelColors":"#ffffff","label":"3"},"child":[{"type":"VSlider","props":{"y":-67,"x":54,"visible":false,"var":"exercise_slider","skin":"gameres/ui/textslider.png","showLabel":false,"name":"exercise_slider","min":1,"max":10}}]},{"type":"Button","props":{"y":42,"x":229,"var":"ds_cure_time","stateNum":1,"skin":"gameres/ui/btn_num.png","name":"ds_cure_time","labelSize":18,"labelColors":"#ffffff","label":"3"},"child":[{"type":"VSlider","props":{"y":-23,"x":57,"visible":false,"var":"ds_time_slider","skin":"gameres/ui/textslider.png","showLabel":false,"name":"ds_time_slider","min":1,"max":10}}]},{"type":"Label","props":{"y":42,"x":141,"width":81,"valign":"middle","text":"使用技能","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"CheckBox","props":{"y":182,"x":-681,"var":"single_fs","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"single_fs","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"单体技能"}},{"type":"Label","props":{"y":189,"x":-566,"width":132,"valign":"middle","text":"不勾选默认平砍","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"CheckBox","props":{"y":67,"x":-941,"var":"group_fs","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"group_fs","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"群体技能"}},{"type":"Label","props":{"y":75,"x":-829,"width":151,"valign":"middle","text":"不勾选默认不使用","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"CheckBox","props":{"y":151,"x":28,"var":"single_ds","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"single_ds","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"单体技能"}},{"type":"Label","props":{"y":84,"x":-1118,"width":132,"valign":"middle","text":"不勾选默认平砍","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"CheckBox","props":{"y":151,"x":210,"var":"group_ds","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"group_ds","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"群体技能"}},{"type":"Label","props":{"y":124,"x":-1253,"width":151,"valign":"middle","text":"不勾选默认不使用","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":158,"x":399,"width":20,"var":"group_skill_num","text":"3","strokeColor":"#000000","stroke":2,"restrict":"0-9","promptColor":"#ffffff","name":"group_skill_num","height":20,"fontSize":18,"editable":false,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16","align":"center"},"child":[{"type":"ProgressBar","props":{"y":34,"x":5,"width":195,"var":"group_skill_pro","value":2,"skin":"gameres/ui/seting_proRed.png","name":"group_skill_pro","height":10}},{"type":"HSlider","props":{"y":33,"x":2,"width":200,"var":"group_skill_slider","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"group_skill_slider","min":1,"max":9,"height":20}}]},{"type":"Label","props":{"y":154,"x":378,"width":22,"valign":"middle","text":"有","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":155,"x":422,"width":91,"valign":"middle","text":"个或以上怪物时使用群体技能","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"CheckBox","props":{"y":564,"x":250,"var":"poison_ds","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"poison_ds","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动施毒术"}},{"type":"CheckBox","props":{"y":562,"x":400,"var":"ds_summon","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"ds_summon","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动召唤宠物"}},{"type":"CheckBox","props":{"y":35,"x":278,"var":"ds_cure","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"ds_cure","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"自动治疗"}},{"type":"Button","props":{"y":82,"x":286,"var":"ds_cure_list","stateNum":1,"skin":"gameres/ui/setiing_itemFrame.png","name":"ds_cure_list"},"child":[{"type":"Text","props":{"y":10,"x":10,"var":"ds_cure_listNone","text":"无","stroke":1,"name":"ds_cure_listNone","fontSize":18,"color":"#cdcbc8"}},{"type":"Image","props":{"y":4,"x":4,"width":32,"var":"ds_cure_listIcon","name":"ds_cure_listIcon","height":33}}]},{"type":"Label","props":{"y":91,"x":201,"width":81,"valign":"middle","text":"使用技能","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":95,"x":100,"width":48,"var":"ds_cure_limit","text":"3","strokeColor":"#000000","stroke":2,"restrict":"0-9","promptColor":"#ffffff","name":"ds_cure_limit","height":20,"fontSize":18,"editable":false,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16","align":"center"},"child":[{"type":"ProgressBar","props":{"y":30,"x":-70,"width":304,"var":"ds_limit_pro","value":100,"skin":"gameres/ui/seting_proRed.png","name":"ds_limit_pro","height":10}},{"type":"HSlider","props":{"y":29,"x":-73,"width":309,"var":"ds_limit_slider","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"ds_limit_slider","min":0,"max":100,"height":20}}]},{"type":"Label","props":{"y":92,"x":33,"width":39,"valign":"middle","text":"HP低于","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":91,"x":154,"width":91,"valign":"middle","text":"%时，","height":25,"fontSize":18,"color":"#ffffff"}},{"type":"Text","props":{"y":18,"x":23,"text":"综合","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Button","props":{"y":183,"x":-434,"var":"single_fs_list","stateNum":1,"skin":"gameres/ui/setiing_itemFrame.png","name":"single_fs_list"},"child":[{"type":"Text","props":{"y":10,"x":10,"var":"single_fs_listNone","text":"无","stroke":1,"name":"single_fs_listNone","fontSize":18,"color":"#cdcbc8"}},{"type":"Image","props":{"y":4,"x":4,"width":32,"var":"single_fs_listIcon","name":"single_fs_listIcon","height":33}}]},{"type":"Button","props":{"y":36,"x":219,"var":"exercise_list","stateNum":1,"skin":"gameres/ui/setiing_itemFrame.png","name":"exercise_list"},"child":[{"type":"Text","props":{"y":10,"x":10,"var":"exercise_listNone","text":"无","stroke":1,"name":"exercise_listNone","fontSize":18,"color":"#cdcbc8"}},{"type":"Image","props":{"y":4,"x":4,"width":32,"var":"exercise_listIcon","name":"exercise_listIcon","height":33}}]},{"type":"Button","props":{"y":68,"x":-682,"var":"group_fs_list","stateNum":1,"skin":"gameres/ui/setiing_itemFrame.png","name":"group_fs_list"},"child":[{"type":"Text","props":{"y":10,"x":10,"var":"group_fs_listNone","text":"无","stroke":1,"name":"group_fs_listNone","fontSize":18,"color":"#cdcbc8"}},{"type":"Image","props":{"y":4,"x":4,"width":32,"var":"group_fs_listIcon","name":"group_fs_listIcon","height":33}}]},{"type":"Button","props":{"y":150,"x":150,"var":"single_ds_list","stateNum":1,"skin":"gameres/ui/setiing_itemFrame.png","name":"single_ds_list"},"child":[{"type":"Text","props":{"y":10,"x":10,"var":"single_ds_listNone","text":"无","stroke":1,"name":"single_ds_listNone","fontSize":18,"color":"#cdcbc8"}},{"type":"Image","props":{"y":4,"x":4,"width":32,"var":"single_ds_listIcon","name":"single_ds_listIcon","height":33}}]},{"type":"Button","props":{"y":151,"x":331,"var":"group_ds_list","stateNum":1,"skin":"gameres/ui/setiing_itemFrame.png","name":"group_ds_list"},"child":[{"type":"Text","props":{"y":10,"x":10,"var":"group_ds_listNone","text":"无","stroke":1,"name":"group_ds_listNone","fontSize":18,"color":"#cdcbc8"}},{"type":"Image","props":{"y":4,"x":4,"width":32,"var":"group_ds_listIcon","name":"group_ds_listIcon","height":33}}]},{"type":"Button","props":{"y":562,"x":556,"var":"ds_summon_list","stateNum":1,"skin":"gameres/ui/setiing_itemFrame.png","name":"ds_summon_list"},"child":[{"type":"Text","props":{"y":10,"x":10,"var":"ds_summon_listNone","text":"无","stroke":1,"name":"ds_summon_listNone","fontSize":18,"color":"#cdcbc8"}},{"type":"Image","props":{"y":4,"x":4,"width":32,"var":"ds_summon_listIcon","name":"ds_summon_listIcon","height":33}}]},{"type":"ComboBox","props":{"y":570,"x":141,"width":85,"var":"d_autoskill_1","skin":"gameres/ui/auxiliary_combobox.png","sizeGrid":"0,21,0,0","selectedIndex":0,"name":"d_autoskill_1","labels":"互换,红毒,绿毒","labelSize":18,"labelPadding":"0,0,0,10","itemSize":20,"height":24}},{"type":"CheckBox","props":{"y":416,"x":331,"var":"iceRoar","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"iceRoar","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"手动冰咆哮"}},{"type":"CheckBox","props":{"y":416,"x":492,"var":"bombFire","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"bombFire","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"手动爆裂火焰"}},{"type":"CheckBox","props":{"y":470,"x":28,"var":"incendiaryShower","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"incendiaryShower","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"手动流星火雨"}},{"type":"CheckBox","props":{"y":470,"x":175,"var":"fastLight","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"fastLight","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"手动疾光电影"}},{"type":"CheckBox","props":{"y":675,"x":250,"var":"hurricane","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":true,"name":"hurricane","labelStrokeColor":"#ffffff","labelSize":16,"labelPadding":"12","labelColors":"#cdcbc8,#cdcbc8","label":"手动飓风破"}}]},{"type":"Panel","props":{"y":56,"x":27,"width":660,"var":"box2","name":"box2","height":386},"child":[{"type":"Image","props":{"y":119,"x":-5,"skin":"gameres/ui/seting_line.png"}},{"type":"Image","props":{"y":143,"x":67,"width":491,"height":130},"child":[{"type":"Label","props":{"y":32,"x":213,"text":"%","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":33,"x":119,"text":"生命值低于","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":7,"x":10,"text":"恢复设置","stroke":2,"fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":80,"x":119,"text":"魔法值低于","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":80,"x":215,"text":"%","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Text","props":{"y":47,"x":333,"text":"自动使用普通回血","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Text","props":{"y":97,"x":332,"text":"自动使用普通回蓝","stroke":1,"fontSize":11,"color":"#cdcbc8"}}]},{"type":"Image","props":{"y":262,"x":67,"width":491,"height":130},"child":[{"type":"Label","props":{"y":33,"x":215,"text":"%","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":33,"x":119,"text":"生命值低于","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":80,"x":119,"text":"魔法值低于","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":80,"x":215,"text":"%","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Text","props":{"y":50,"x":331,"text":"自动使用瞬回红药","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Text","props":{"y":97,"x":331,"text":"自动使用瞬回蓝药","stroke":1,"fontSize":11,"color":"#cdcbc8"}}]},{"type":"Image","props":{"y":7,"x":69,"width":491,"height":130},"child":[{"type":"Label","props":{"y":33,"x":215,"text":"%","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":33,"x":119,"text":"生命值低于","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":4,"x":7,"text":"保护设置","stroke":2,"fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":78,"x":119,"text":"魔法值低于","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":78,"x":215,"text":"%","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Text","props":{"y":49,"x":353,"text":"自动使用道具","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Text","props":{"y":94,"x":353,"text":"自动使用道具","stroke":1,"fontSize":11,"color":"#cdcbc8"}}]},{"type":"Image","props":{"y":179,"x":499,"width":33,"var":"hpN_img","skin":"gameres/ui/auxiliary_itemkuang.png","name":"hpN_img","height":33},"child":[{"type":"Image","props":{"y":2,"x":1,"width":30,"name":"drug","height":30}}]},{"type":"CheckBox","props":{"y":173,"x":75,"width":62,"var":"autohp","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"autohp","labelStroke":1,"labelSize":14,"labelPadding":"14","labelColors":"#cdcbc8,#cdcbc8","label":"开","height":36}},{"type":"CheckBox","props":{"y":218,"x":75,"width":62,"var":"automp","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"automp","labelStroke":1,"labelSize":14,"labelPadding":"14","labelColors":"#cdcbc8,#cdcbc8","label":"开","height":36}},{"type":"CheckBox","props":{"y":345,"x":75,"width":77,"var":"autohp_mp2","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"autohp_mp2","labelStroke":1,"labelSize":14,"labelPadding":"14","labelColors":"#cdcbc8,#cdcbc8","label":"开","height":38}},{"type":"CheckBox","props":{"y":297,"x":75,"width":77,"var":"autohp_mp","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"autohp_mp","labelStroke":1,"labelSize":14,"labelPadding":"14","labelColors":"#cdcbc8,#cdcbc8","label":"开","height":36}},{"type":"CheckBox","props":{"y":86,"x":75,"width":77,"var":"autotp1","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"autotp1","labelStroke":1,"labelSize":14,"labelPadding":"14","labelColors":"#cdcbc8,#cdcbc8","label":"开","height":38}},{"type":"CheckBox","props":{"y":41,"x":75,"width":77,"var":"autotp","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"autotp","labelStroke":1,"labelSize":14,"labelPadding":"14","labelColors":"#cdcbc8,#cdcbc8","label":"开","height":36}},{"type":"Image","props":{"y":232,"x":499,"var":"mpN_img","skin":"gameres/ui/auxiliary_itemkuang.png","name":"mpN_img"},"child":[{"type":"Image","props":{"y":2,"x":1,"width":30,"name":"drug","height":30}}]},{"type":"Label","props":{"y":224,"x":250,"var":"mppercentagetext","text":"100","name":"mppercentagetext","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":18,"x":-102,"width":200,"var":"mp_pro","value":100,"skin":"gameres/ui/seting_proBlue.png","name":"mp_pro","height":10}},{"type":"HSlider","props":{"y":18,"x":-108,"width":205,"var":"mp_vs","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"mp_vs","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":175,"x":250,"width":21,"var":"hppercentagetext","text":"100","name":"hppercentagetext","height":12,"fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":18,"x":-102,"width":200,"var":"hp_pro","value":100,"skin":"gameres/ui/seting_proRed.png","name":"hp_pro","height":10}},{"type":"HSlider","props":{"y":17,"x":-106,"width":205,"var":"hp_vs","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"hp_vs","min":1,"max":100,"height":20}}]},{"type":"Image","props":{"y":300,"x":499,"var":"hpS_img","skin":"gameres/ui/auxiliary_itemkuang.png","name":"hpS_img"},"child":[{"type":"Image","props":{"y":2,"x":1,"width":30,"name":"drug","height":30}}]},{"type":"Image","props":{"y":348,"x":499,"var":"mpS_img","skin":"gameres/ui/auxiliary_itemkuang.png","name":"mpS_img"},"child":[{"type":"Image","props":{"y":2,"x":1,"width":30,"name":"drug","height":30}}]},{"type":"Label","props":{"y":342,"x":250,"var":"hppercentagetext2","text":"100","name":"hppercentagetext2","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"Hp_mp_pro2","value":100,"skin":"gameres/ui/seting_proBlue.png","name":"Hp_mp_pro2","height":10}},{"type":"HSlider","props":{"y":19,"x":-107,"width":205,"var":"Hp_mp_vs2","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"Hp_mp_vs2","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":295,"x":250,"var":"hppercentagetext1","text":"100","name":"hppercentagetext1","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"Hp_mp_pro","value":100,"skin":"gameres/ui/seting_proRed.png","name":"Hp_mp_pro","height":10}},{"type":"HSlider","props":{"y":19,"x":-106,"width":205,"var":"Hp_mp_vs","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"Hp_mp_vs","min":1,"max":100,"height":20}}]},{"type":"Image","props":{"y":46,"x":499,"var":"tp_img","skin":"gameres/ui/auxiliary_itemkuang.png","name":"tp_img"},"child":[{"type":"Image","props":{"y":2,"x":1,"width":30,"name":"drug","height":30}}]},{"type":"Image","props":{"y":90,"x":499,"var":"tp1_img","skin":"gameres/ui/auxiliary_itemkuang.png","name":"tp1_img"},"child":[{"type":"Image","props":{"y":2,"x":1,"width":30,"name":"drug","height":30}}]},{"type":"Label","props":{"y":84,"x":252,"var":"tppercentagetext1","text":"100","name":"tppercentagetext1","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"tp_pro1","value":100,"skin":"gameres/ui/seting_proBlue.png","name":"tp_pro1","height":10}},{"type":"HSlider","props":{"y":18,"x":-108,"width":205,"var":"tp_vs1","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"tp_vs1","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":39,"x":252,"var":"tppercentagetext","text":"100","name":"tppercentagetext","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"tp_pro","value":100,"skin":"gameres/ui/seting_proRed.png","name":"tp_pro","height":10}},{"type":"HSlider","props":{"y":18,"x":-107,"width":205,"var":"tp_vs","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"tp_vs","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":699,"x":254,"var":"tppercentagetextH","text":"100","name":"tppercentagetextH","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"tp_proH","value":100,"skin":"gameres/ui/seting_proRed.png","name":"tp_proH","height":10}},{"type":"HSlider","props":{"y":19,"x":-106,"width":205,"var":"tp_vsH","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"tp_vsH","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":571,"x":254,"var":"hppercentagetext1H","text":"100","name":"hppercentagetext1H","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"Hp_mp_proH","value":100,"skin":"gameres/ui/seting_proRed.png","name":"Hp_mp_proH","height":10}},{"type":"HSlider","props":{"y":19,"x":-107,"width":205,"var":"Hp_mp_vsH","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"Hp_mp_vsH","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":618,"x":254,"var":"hppercentagetext2H","text":"100","name":"hppercentagetext2H","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":19,"x":-102,"width":200,"var":"Hp_mp_pro2H","value":100,"skin":"gameres/ui/seting_proBlue.png","name":"Hp_mp_pro2H","height":10}},{"type":"HSlider","props":{"y":17,"x":-104,"width":205,"var":"Hp_mp_vs2H","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"Hp_mp_vs2H","min":1,"max":100,"height":20}}]},{"type":"Image","props":{"y":625,"x":499,"var":"mpS_imgH","skin":"gameres/ui/auxiliary_itemkuang.png","name":"mpS_imgH"},"child":[{"type":"Image","props":{"y":2,"x":1,"width":30,"name":"drug","height":30}}]},{"type":"Image","props":{"y":576,"x":499,"var":"hpS_imgH","skin":"gameres/ui/auxiliary_itemkuang.png","name":"hpS_imgH"},"child":[{"type":"Image","props":{"y":2,"x":1,"width":30,"name":"drug","height":30}}]},{"type":"Label","props":{"y":440,"x":254,"width":21,"var":"hppercentagetextH","text":"100","name":"hppercentagetextH","height":12,"fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":18,"x":-102,"width":200,"var":"hp_proH","value":100,"skin":"gameres/ui/seting_proRed.png","name":"hp_proH","height":10}},{"type":"HSlider","props":{"y":17,"x":-108,"width":205,"var":"hp_vsH","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"hp_vsH","min":1,"max":100,"height":20}}]},{"type":"Label","props":{"y":487,"x":254,"var":"mppercentagetextH","text":"100","name":"mppercentagetextH","fontSize":12,"color":"#00ff0a"},"child":[{"type":"ProgressBar","props":{"y":18,"x":-102,"width":200,"var":"mp_proH","value":100,"skin":"gameres/ui/seting_proBlue.png","name":"mp_proH","height":10}},{"type":"HSlider","props":{"y":16,"x":-106,"width":205,"var":"mp_vsH","skin":"gameres/ui/seting_proBg.png","showLabel":false,"name":"mp_vsH","min":1,"max":100,"height":20}}]},{"type":"Image","props":{"y":492,"x":499,"var":"mpN_imgH","skin":"gameres/ui/auxiliary_itemkuang.png","name":"mpN_imgH"},"child":[{"type":"Image","props":{"y":2,"x":1,"width":30,"name":"drug","height":30}}]},{"type":"CheckBox","props":{"y":441,"x":75,"width":62,"var":"autohpH","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"autohpH","labelStroke":1,"labelSize":14,"labelPadding":"6","labelColors":"#cdcbc8,#cdcbc8","label":"开","height":36}},{"type":"CheckBox","props":{"y":489,"x":75,"width":62,"var":"autompH","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"autompH","labelStroke":1,"labelSize":14,"labelPadding":"6","labelColors":"#cdcbc8,#cdcbc8","label":"开","height":36}},{"type":"CheckBox","props":{"y":575,"x":75,"width":77,"var":"autohp_mpH","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"autohp_mpH","labelStroke":1,"labelSize":14,"labelPadding":"6","labelColors":"#cdcbc8,#cdcbc8","label":"开","height":36}},{"type":"CheckBox","props":{"y":620,"x":75,"width":77,"var":"autohp_mp2H","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"autohp_mp2H","labelStroke":1,"labelSize":14,"labelPadding":"6","labelColors":"#cdcbc8,#cdcbc8","label":"开","height":38}},{"type":"CheckBox","props":{"y":705,"x":75,"width":77,"var":"autotpH","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","selected":false,"name":"autotpH","labelStroke":1,"labelSize":14,"labelPadding":"6","labelColors":"#cdcbc8,#cdcbc8","label":"开","height":36}},{"type":"Image","props":{"y":445,"x":499,"width":33,"var":"hpN_imgH","skin":"gameres/ui/auxiliary_itemkuang.png","name":"hpN_imgH","height":33},"child":[{"type":"Image","props":{"y":2,"x":1,"width":30,"name":"drug","height":30}}]},{"type":"Image","props":{"y":667,"x":71,"width":491,"height":98},"child":[{"type":"Label","props":{"y":33,"x":215,"text":"%","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":33,"x":119,"text":"生命值低于","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":5,"x":7,"text":"英雄回收设置","stroke":2,"fontSize":16,"color":"#cdcbc8"}}]},{"type":"Image","props":{"y":538,"x":71,"width":491,"height":130},"child":[{"type":"Label","props":{"y":33,"x":215,"text":"%","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":33,"x":119,"text":"生命值低于","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":80,"x":119,"text":"魔法值低于","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":80,"x":215,"text":"%","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Text","props":{"y":50,"x":326,"text":"自动使用瞬回红药","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Text","props":{"y":96,"x":326,"text":"自动使用瞬回蓝药","stroke":1,"fontSize":11,"color":"#cdcbc8"}}]},{"type":"Image","props":{"y":408,"x":71,"width":491,"height":130},"child":[{"type":"Label","props":{"y":33,"x":215,"text":"%","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":33,"x":119,"text":"生命值低于","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":6,"x":8,"text":"英雄恢复设置","stroke":2,"fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":80,"x":119,"text":"魔法值低于","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Label","props":{"y":80,"x":215,"text":"%","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Text","props":{"y":49,"x":326,"text":"自动使用普通回血","stroke":1,"fontSize":11,"color":"#cdcbc8"}},{"type":"Text","props":{"y":96,"x":325,"text":"自动使用普通回蓝","stroke":1,"fontSize":11,"color":"#cdcbc8"}}]},{"type":"Button","props":{"y":48,"x":553,"var":"tp_reset_btn","stateNum":2,"skin":"gameres/ui/auxi_reset.png","name":"tp_reset_btn"}},{"type":"Button","props":{"y":93,"x":553,"var":"tp1_reset_btn","stateNum":2,"skin":"gameres/ui/auxi_reset.png","name":"tp1_reset_btn"}},{"type":"Button","props":{"y":180,"x":553,"var":"hpN_reset_btn","stateNum":2,"skin":"gameres/ui/auxi_reset.png","name":"hpN_reset_btn"}},{"type":"Button","props":{"y":233,"x":553,"var":"mpN_reset_btn","stateNum":2,"skin":"gameres/ui/auxi_reset.png","name":"mpN_reset_btn"}},{"type":"Button","props":{"y":301,"x":553,"var":"hpS_reset_btn","stateNum":2,"skin":"gameres/ui/auxi_reset.png","name":"hpS_reset_btn"}},{"type":"Button","props":{"y":350,"x":553,"var":"mpS_reset_btn","stateNum":2,"skin":"gameres/ui/auxi_reset.png","name":"mpS_reset_btn"}}]},{"type":"Box","props":{"y":59,"x":21,"width":666,"var":"box3","name":"box3","height":391},"child":[{"type":"Label","props":{"y":57,"x":180,"width":133,"valign":"middle","text":"自动战斗筛选","strokeColor":"#000000","height":25,"fontSize":20,"color":"#fbf1b3","bold":true}},{"type":"Label","props":{"y":58,"x":30,"width":92,"valign":"middle","text":"怪物名字","height":25,"fontSize":20,"color":"#fbf1b3","bold":true}},{"type":"Image","props":{"y":15,"x":232,"skin":"gameres/ui/search_img.png","scaleY":0.5,"scaleX":0.5}},{"type":"TextInput","props":{"y":20,"x":33,"width":191,"var":"searchMonster","promptColor":"#5e4730","prompt":"输入物品关键字查找","name":"searchMonster","height":30,"fontSize":14,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16","align":"center"}},{"type":"TextArea","props":{"y":370,"x":30,"width":317,"text":"开始自动挂机后不会攻击勾选中的怪物","height":22,"fontSize":18,"font":"SimHei","color":"#ff0400","bold":true}},{"type":"CheckBox","props":{"y":53,"x":311,"var":"allCancel","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","name":"allCancel"}},{"type":"List","props":{"y":89,"x":19,"width":481,"var":"monsterlist","vScrollBarSkin":"gameres/ui/vscroll.png","name":"monsterlist","height":263},"child":[{"type":"Box","props":{"y":0,"x":0,"width":480,"name":"render","height":40},"child":[{"type":"Image","props":{"y":35,"width":480,"skin":"gameres/png/red_line.png"}},{"type":"CheckBox","props":{"y":0,"x":212,"var":"isExclude","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","name":"isExclude"}},{"type":"Label","props":{"y":5,"x":7,"width":90,"var":"monsterName","valign":"middle","text":"怪物名字","name":"monsterName","height":30,"fontSize":18,"color":"#ffffff","bold":true,"align":"center"}}]}]},{"type":"Button","props":{"y":362,"x":398,"width":95,"var":"btn_ref_mon","stateNum":2,"skin":"gameres/ui/btn_ref.png","name":"btn_ref_mon","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","height":33}}]},{"type":"Box","props":{"y":54,"x":16,"width":671,"var":"box4","name":"box4","mouseThrough":true,"height":387},"child":[{"type":"Image","props":{"y":8,"x":7,"skin":"gameres/ui/seting_pickTitle.png"},"child":[{"type":"Text","props":{"y":5,"x":56,"text":"类型","stroke":2,"fontSize":18,"color":"#cdcbc8"}},{"type":"Text","props":{"y":5,"x":209,"text":"掉落显示","stroke":2,"fontSize":18,"color":"#cdcbc8"}},{"type":"Text","props":{"y":5,"x":376,"text":"自动拾取","stroke":2,"fontSize":18,"color":"#cdcbc8"}},{"type":"Text","props":{"y":5,"x":543,"text":"拾取设置","stroke":2,"fontSize":18,"color":"#cdcbc8"}}]},{"type":"List","props":{"y":40,"x":9,"width":659,"var":"itemlist","vScrollBarSkin":"gameres/ui/vscroll.png","repeatY":8,"repeatX":1,"name":"itemlist","height":346},"child":[{"type":"Box","props":{"y":1,"x":0,"width":600,"name":"render","height":40},"child":[{"type":"Label","props":{"y":9,"x":0,"var":"itemname","text":"物品名称","name":"itemname","fontSize":18,"color":"#e0c9aa"}},{"type":"CheckBox","props":{"y":1,"x":134,"var":"isshow","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"isshow","labelStrokeColor":"#ffffff","labelSize":17,"labelPadding":"5,,,5","labelColors":"#ffffff"}},{"type":"CheckBox","props":{"y":1,"x":223,"var":"ispickup","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"ispickup","labelStrokeColor":"#ffffff","labelSize":17,"labelPadding":"5,,,5","labelColors":"#ffffff"}},{"type":"CheckBox","props":{"y":1,"x":311,"var":"special","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"special","labelStrokeColor":"#ffffff","labelSize":17,"labelPadding":"5,,,5","labelColors":"#ffffff"}},{"type":"CheckBox","props":{"y":1,"x":435,"var":"prompt","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":false,"name":"prompt","labelStrokeColor":"#ffffff","labelSize":17,"labelPadding":"5,,,5","labelColors":"#ffffff"}}]},{"type":"VScrollBar","props":{"y":-11,"x":405,"width":20,"var":"scrollBar","name":"scrollBar","height":165}}]},{"type":"Image","props":{"y":71,"x":279,"width":125,"visible":false,"var":"itemSort_bg","skin":"gameres/png/itemSort_bg.png","name":"itemSort_bg","height":289},"child":[{"type":"Button","props":{"y":8,"x":15,"width":95,"var":"itemSort_all","stateNum":2,"skin":"gameres/ui/itemSort_all.png","name":"全部","labelSize":50,"labelColors":"yellow","height":33}},{"type":"Button","props":{"y":48,"x":15,"width":95,"var":"itemSort_skill","stateNum":2,"skin":"gameres/ui/itemSort_skill.png","name":"书籍类","height":33}},{"type":"Button","props":{"y":88,"x":15,"width":95,"var":"itemSort_weapon","stateNum":2,"skin":"gameres/ui/itemSort_weapon.png","name":"武器类","height":33}},{"type":"Button","props":{"y":128,"x":15,"width":95,"var":"itemSort_clothes","stateNum":2,"skin":"gameres/ui/itemSort_clothes.png","name":"衣服类","height":33}},{"type":"Button","props":{"y":168,"x":15,"width":95,"var":"itemSort_jewelry","stateNum":2,"skin":"gameres/ui/itemSort_jewelry.png","name":"饰品类","height":33}},{"type":"Button","props":{"y":208,"x":15,"width":95,"var":"itemSort_drug","stateNum":2,"skin":"gameres/ui/itemSort_drug.png","name":"药品类","height":33}},{"type":"Button","props":{"y":248,"x":15,"width":95,"var":"itemSort_others","stateNum":2,"skin":"gameres/ui/itemSort_others.png","name":"其它类","height":33}}]},{"type":"ComboBox","props":{"y":358,"x":234,"width":49,"var":"pickPlan","skin":"gameres/ui/auxiliary_combobox.png","sizeGrid":"0,21,0,0","selectedIndex":0,"name":"pickPlan","labels":"1,2","labelSize":18,"labelPadding":"0,0,0,5","itemSize":20,"height":20}},{"type":"List","props":{"y":52,"x":12,"width":658,"var":"pickUp_list","spaceY":30,"repeatY":6,"repeatX":1,"name":"pickUp_list","height":336},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Label","props":{"y":5,"x":61,"var":"pickTypeName","text":"装备","stroke":1,"name":"pickTypeName","fontSize":16,"color":"#cdcbc8"}},{"type":"CheckBox","props":{"y":-7,"x":228,"width":29,"var":"dropShow_check","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","name":"dropShow_check","labelColors":"#cdcbc8,#cdcbc8","height":29}},{"type":"CheckBox","props":{"y":-8,"x":400,"width":29,"var":"pickUp_check","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","name":"pickUp_check","labelColors":"#cdcbc8,#cdcbc8","height":29}},{"type":"Button","props":{"y":1,"x":546,"var":"pickUpCheck_btn","stateNum":2,"skin":"gameres/ui/seting_check.png","name":"pickUpCheck_btn"}}]}]}]},{"type":"Box","props":{"y":54,"x":186,"width":501,"var":"box5","name":"box5","height":396}},{"type":"Box","props":{"y":54,"x":186,"width":501,"var":"box6","name":"box6","height":396}},{"type":"VBox","props":{"y":50,"x":706,"var":"setingDirectory_box","name":"setingDirectory_box","align":"left"},"child":[{"type":"Button","props":{"stateNum":2,"skin":"gameres/ui/seting_tar_general.png"}},{"type":"Button","props":{"stateNum":2,"skin":"gameres/ui/seting_job.png"}},{"type":"Button","props":{"stateNum":2,"skin":"gameres/ui/seting_tar_protect.png"}},{"type":"Button","props":{"y":10,"x":10,"stateNum":2,"skin":"gameres/ui/seting_pickUp.png"}}]},{"type":"Box","props":{"y":420,"x":355,"var":"dropDowAnim_box","name":"dropDowAnim_box"}}]}]};
		return AuxiliaryUI;
	})(View);
var BaiTanUI=(function(_super){
		function BaiTanUI(){
			

			BaiTanUI.__super.call(this);
		}

		CLASS$(BaiTanUI,'ui.BaiTanUI',_super);
		var __proto__=BaiTanUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BaiTanUI.uiView);

		}

		BaiTanUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":84,"x":599,"skin":"gameres/png/baitan_bg.png","name":"img_bg"}},{"type":"Button","props":{"y":348,"x":731,"stateNum":2,"skin":"gameres/ui/baitan_btn_esc.png","name":"btn_esc"}},{"type":"Button","props":{"y":348,"x":622,"stateNum":2,"skin":"gameres/ui/baitan_btn_ok.png","name":"btn_baitan"}},{"type":"Label","props":{"y":292,"x":680,"name":"lbl_item_name","fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":320,"x":680,"name":"lbl_item_price","fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":319,"x":610,"text":"出售价格：","fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":292,"x":608,"text":"物品名称：","fontSize":16,"color":"#ffffff"}},{"type":"Button","props":{"y":68,"x":780,"width":60,"stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_exit","height":60}},{"type":"Image","props":{"y":139,"x":625,"name":"item_0"}},{"type":"Image","props":{"y":139,"x":668,"name":"item_1"}},{"type":"Image","props":{"y":139,"x":710,"name":"item_2"}},{"type":"Image","props":{"y":139,"x":751,"name":"item_3"}},{"type":"Image","props":{"y":139,"x":793,"name":"item_4"}},{"type":"Image","props":{"y":180,"x":625,"name":"item_5"}},{"type":"Image","props":{"y":180,"x":668,"name":"item_6"}},{"type":"Image","props":{"y":180,"x":710,"name":"item_7"}},{"type":"Image","props":{"y":180,"x":751,"name":"item_8"}},{"type":"Image","props":{"y":180,"x":793,"name":"item_9"}},{"type":"Image","props":{"y":219,"x":625,"name":"item_10"}},{"type":"Image","props":{"y":219,"x":668,"name":"item_11"}},{"type":"Image","props":{"y":219,"x":710,"name":"item_12"}},{"type":"Image","props":{"y":219,"x":751,"name":"item_13"}},{"type":"Image","props":{"y":219,"x":793,"name":"item_14"}},{"type":"Image","props":{"y":259,"x":625,"name":"item_15"}},{"type":"Image","props":{"y":259,"x":668,"name":"item_16"}},{"type":"Image","props":{"y":259,"x":710,"name":"item_17"}},{"type":"Image","props":{"y":259,"x":751,"name":"item_18"}},{"type":"Image","props":{"y":259,"x":793,"name":"item_19"}},{"type":"Label","props":{"y":90,"x":613,"width":200,"text":"你的摊位","name":"lbl_tw_name","height":18,"fontSize":18,"color":"#ffffff","align":"center"}}]};
		return BaiTanUI;
	})(View);
var BidTipUI=(function(_super){
		function BidTipUI(){
			
		    this.title_txt=null;
		    this.item_box=null;
		    this.itemName_lab=null;
		    this.bid_txt=null;
		    this.bidMoney_bg=null;
		    this.icon_img=null;
		    this.icon1_img=null;
		    this.curBidMoney_txt=null;
		    this.bidMoney_input=null;
		    this.bid_btn=null;
		    this.cancel_btn=null;
		    this.close_btn=null;

			BidTipUI.__super.call(this);
		}

		CLASS$(BidTipUI,'ui.BidTipUI',_super);
		var __proto__=BidTipUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BidTipUI.uiView);

		}

		BidTipUI.uiView={"type":"View","props":{"width":280,"height":350},"child":[{"type":"Image","props":{"y":1,"x":-2,"width":252,"skin":"gameres/ui/auctionTip_bg.png","sizeGrid":"19,19,16,18","height":347},"child":[{"type":"Text","props":{"y":10,"x":4,"width":244,"var":"title_txt","text":"竞拍或一口价","stroke":2,"name":"title_txt","height":18,"fontSize":18,"color":"#f7e700","align":"center"}},{"type":"Image","props":{"y":35,"x":12,"skin":"gameres/ui/auction_line.png"}},{"type":"Image","props":{"y":44,"x":108,"var":"item_box","skin":"gameres/ui/setiing_itemFrame.png","name":"item_box"}},{"type":"Label","props":{"y":96,"x":1,"width":245,"var":"itemName_lab","text":"道具名称","stroke":1,"name":"itemName_lab","height":16,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":178,"x":24,"text":"当前竞价","stroke":1,"fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":208,"x":25,"var":"bid_txt","text":"出价金额","stroke":1,"name":"bid_txt","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":171,"x":96,"skin":"gameres/ui/auctionFrame1.png"}},{"type":"Image","props":{"y":205,"x":96,"var":"bidMoney_bg","skin":"gameres/ui/auctionFrame2.png","name":"bidMoney_bg"}},{"type":"Image","props":{"y":170,"x":98,"width":30,"var":"icon_img","name":"icon_img","height":30}},{"type":"Image","props":{"y":206,"x":99,"width":30,"var":"icon1_img","name":"icon1_img","height":30}},{"type":"Text","props":{"y":178,"x":98,"width":139,"var":"curBidMoney_txt","text":"0","name":"curBidMoney_txt","fontSize":16,"color":"#ffffff","align":"center"}},{"type":"TextInput","props":{"y":209,"x":99,"var":"bidMoney_input","type":"number","text":"0","name":"bidMoney_input","fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":242,"x":135,"var":"bid_btn","stateNum":2,"skin":"gameres/ui/suer_bid.png","name":"bid_btn"}},{"type":"Button","props":{"y":244,"x":13,"var":"cancel_btn","stateNum":2,"skin":"gameres/ui/cancel_bid.png","name":"cancel_btn"}},{"type":"Button","props":{"y":-24,"x":194,"var":"close_btn","stateNum":2,"skin":"gameres/ui/btn_close_new.png","name":"close_btn"}}]}]};
		return BidTipUI;
	})(View);
var BoxUI=(function(_super){
		function BoxUI(){
			
		    this.close=null;

			BoxUI.__super.call(this);
		}

		CLASS$(BoxUI,'ui.BoxUI',_super);
		var __proto__=BoxUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BoxUI.uiView);

		}

		BoxUI.uiView={"type":"View","props":{"width":600,"mouseThrough":true,"height":400},"child":[{"type":"Image","props":{"name":"boxbackdrop"},"child":[{"type":"Label","props":{"y":136,"x":124,"width":109,"text":"点击开启宝箱","name":"boxname","height":25,"color":"#07b000"}}]},{"type":"Image","props":{"y":50,"x":50,"skin":"gameres/png/box_bg.png","name":"itemshow"},"child":[{"type":"Image","props":{"y":68,"x":42,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":68,"x":99,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":68,"x":157,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":123,"x":42,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":123,"x":157,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":176,"x":42,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":176,"x":99,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":176,"x":157,"skin":"gameres/ui/box_img.png"}},{"type":"Image","props":{"y":115,"x":92,"skin":"gameres/ui/box_item_bg.png"}},{"type":"Image","props":{"y":74,"x":49,"width":30,"pivotX":0,"name":"item_0","height":30}},{"type":"Image","props":{"y":74,"x":106,"width":30,"name":"item_1","height":30}},{"type":"Image","props":{"y":74,"x":164,"width":30,"name":"item_2","height":30}},{"type":"Image","props":{"y":129,"x":49,"width":30,"name":"item_3","height":30}},{"type":"Image","props":{"y":129,"x":107,"width":30,"name":"item_4","height":30}},{"type":"Image","props":{"y":129,"x":164,"width":30,"name":"item_5","height":30}},{"type":"Image","props":{"y":182,"x":49,"width":30,"name":"item_6","height":30}},{"type":"Image","props":{"y":182,"x":106,"width":30,"name":"item_7","height":30}},{"type":"Image","props":{"y":182,"x":164,"width":30,"name":"item_8","height":30}},{"type":"Button","props":{"y":244,"x":81,"stateNum":2,"skin":"gameres/ui/box_btn_ok.png","name":"but_itemok"}},{"type":"Button","props":{"y":6,"x":189,"var":"close","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.7,"scaleX":0.7,"name":"close"}}]}]};
		return BoxUI;
	})(View);
var box_itemUI=(function(_super){
		function box_itemUI(){
			
		    this.btn_ok=null;
		    this.btn_esc=null;

			box_itemUI.__super.call(this);
		}

		CLASS$(box_itemUI,'ui.box_itemUI',_super);
		var __proto__=box_itemUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(box_itemUI.uiView);

		}

		box_itemUI.uiView={"type":"View","props":{"width":675,"mouseThrough":true,"height":50},"child":[{"type":"Text","props":{"y":15,"x":-3,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_idx","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":15,"x":116,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_name","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":15,"x":234,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_cnt","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":15,"x":353,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_tj","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":10,"x":478,"width":85,"var":"btn_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","sizeGrid":"0,0,0,0","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff","label":"label","height":30}},{"type":"Button","props":{"y":10,"x":576,"width":85,"var":"btn_esc","stateNum":2,"skin":"gameres/ui/btn_ok.png","sizeGrid":"0,0,0,0","name":"btn_esc","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff","label":"label","height":30}}]};
		return box_itemUI;
	})(View);
var box_item1UI=(function(_super){
		function box_item1UI(){
			

			box_item1UI.__super.call(this);
		}

		CLASS$(box_item1UI,'ui.box_item1UI',_super);
		var __proto__=box_item1UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(box_item1UI.uiView);

		}

		box_item1UI.uiView={"type":"View","props":{"width":675,"height":50},"child":[{"type":"Text","props":{"y":16,"x":-5,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_idx","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":16,"x":77,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_name","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":16,"x":162,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_cnt","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":16,"x":244,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_tj","fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":11,"x":428,"width":85,"stateNum":2,"skin":"gameres/ui/btn_ok.png","sizeGrid":"0,0,0,0","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff","label":"label","height":30}},{"type":"Button","props":{"y":11,"x":549,"width":85,"stateNum":2,"skin":"gameres/ui/btn_ok.png","sizeGrid":"0,0,0,0","name":"btn_esc","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"Arial","labelColors":"#ffffff,#ffffff","label":"label","height":30}}]};
		return box_item1UI;
	})(View);
var box_item2UI=(function(_super){
		function box_item2UI(){
			

			box_item2UI.__super.call(this);
		}

		CLASS$(box_item2UI,'ui.box_item2UI',_super);
		var __proto__=box_item2UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(box_item2UI.uiView);

		}

		box_item2UI.uiView={"type":"View","props":{"width":500,"height":50},"child":[{"type":"Image","props":{"y":7,"x":17,"skin":"gameres/png/spr_sel.png","name":"img_sel"}},{"type":"Text","props":{"y":16,"x":14,"width":100,"strokeColor":"#000000","stroke":2,"name":"lbl_0","height":0,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":16,"x":144,"width":50,"strokeColor":"#000000","stroke":2,"name":"lbl_1","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":16,"x":232,"width":50,"strokeColor":"#000000","stroke":2,"name":"lbl_2","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":16,"x":315,"width":70,"strokeColor":"#000000","stroke":2,"name":"lbl_3","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":9,"x":389,"width":86,"stateNum":2,"skin":"gameres/ui/btn_ok.png","scaleY":1,"name":"btn_change_title","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff,#ffffff","label":"修改封号","height":30}}]};
		return box_item2UI;
	})(View);
var box_item3UI=(function(_super){
		function box_item3UI(){
			

			box_item3UI.__super.call(this);
		}

		CLASS$(box_item3UI,'ui.box_item3UI',_super);
		var __proto__=box_item3UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(box_item3UI.uiView);

		}

		box_item3UI.uiView={"type":"View","props":{"width":675,"height":40},"child":[{"type":"Text","props":{"y":3,"x":18,"strokeColor":"#000000","stroke":2,"name":"lbl_title","fontSize":18,"color":"#ddaf52"}},{"type":"Text","props":{"y":13,"x":28,"strokeColor":"#000000","name":"lbl_text","fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":4,"x":450,"width":84,"stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"bnt_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff","label":"确 定","height":32}},{"type":"Button","props":{"y":4,"x":567,"width":84,"stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"bnt_esc","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff","label":"取 消","height":32}}]};
		return box_item3UI;
	})(View);
var box_item4UI=(function(_super){
		function box_item4UI(){
			
		    this.btn=null;
		    this.posX=null;
		    this.posY=null;
		    this.img=null;
		    this.sp_txt=null;
		    this.txt=null;

			box_item4UI.__super.call(this);
		}

		CLASS$(box_item4UI,'ui.box_item4UI',_super);
		var __proto__=box_item4UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(box_item4UI.uiView);

		}

		box_item4UI.uiView={"type":"View","props":{"width":180,"height":35},"child":[{"type":"Text","props":{"y":6,"x":140,"width":38,"var":"btn","valign":"middle","text":"复制","name":"btn","height":26,"fontSize":18,"color":"#fbf1b3","align":"left"}},{"type":"Text","props":{"y":14,"x":251,"visible":false,"var":"posX","name":"posX","color":"#000000"}},{"type":"Text","props":{"y":24,"x":261,"visible":false,"var":"posY","name":"posY"}},{"type":"Image","props":{"y":6,"x":2,"width":24,"visible":true,"var":"img","name":"img","height":24}},{"type":"Sprite","props":{"y":9,"x":30,"width":130,"var":"sp_txt","name":"sp_txt","height":21},"child":[{"type":"Text","props":{"y":1,"x":0,"width":130,"var":"txt","valign":"middle","text":"一二三四五六七","name":"txt","mouseEnabled":false,"height":20,"fontSize":18,"color":"#ffffff","align":"left"}}]}]};
		return box_item4UI;
	})(View);
var buy_itemUI=(function(_super){
		function buy_itemUI(){
			

			buy_itemUI.__super.call(this);
		}

		CLASS$(buy_itemUI,'ui.buy_itemUI',_super);
		var __proto__=buy_itemUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(buy_itemUI.uiView);

		}

		buy_itemUI.uiView={"type":"View","props":{"width":280,"height":40},"child":[{"type":"Text","props":{"y":10,"x":7,"strokeColor":"#000000","stroke":2,"name":"lbl_name","fontSize":18,"color":"#ffffff"}},{"type":"Text","props":{"y":10,"x":166,"strokeColor":"#000000","stroke":2,"name":"lbl_price","fontSize":18,"color":"#ffffff"}},{"type":"Image","props":{"y":1,"x":-3,"width":288,"skin":"gameres/png/img_img.png","name":"img_sel","height":38}}]};
		return buy_itemUI;
	})(View);
var ChangePwdSceneUI=(function(_super){
		function ChangePwdSceneUI(){
			

			ChangePwdSceneUI.__super.call(this);
		}

		CLASS$(ChangePwdSceneUI,'ui.ChangePwdSceneUI',_super);
		var __proto__=ChangePwdSceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ChangePwdSceneUI.uiView);

		}

		ChangePwdSceneUI.uiView={"type":"View","props":{"width":1136,"height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":420,"skin":"gameres/png/imageLogin.png","name":"bg2","height":405,"centerY":0,"centerX":-5}},{"type":"TextInput","props":{"y":180,"x":526,"width":190,"strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#e2dddd","prompt":"请输入用户名....","overflow":"hidden","name":"username","maxChars":20,"height":32,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":300,"x":526,"width":190,"type":"password","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#e2dddd","prompt":"请输入新密码...","overflow":"hidden","name":"password","maxChars":20,"height":33,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":360,"x":526,"width":190,"type":"password","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#e2dddd","prompt":"请再次输入新密码...","overflow":"hidden","name":"confirmpassword","maxChars":20,"height":32,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":240,"x":526,"width":190,"type":"password","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#e2dddd","prompt":"请输入原密码...","overflow":"hidden","name":"oldpassword","maxChars":20,"height":32,"fontSize":18,"color":"#fbf8f8"}},{"type":"Button","props":{"y":413,"x":440,"width":101,"stateNum":2,"skin":"gameres/ui/btn_reg_submit.png","name":"btn_ChangePwd","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Button","props":{"y":413,"x":593,"width":101,"stateNum":2,"skin":"gameres/ui/btn_reg_cancel.png","name":"btn_reback","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Label","props":{"y":182,"x":438,"text":"用户名:","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":243,"x":414,"text":"当前密码:","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":303,"x":438,"text":"新密码:","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":362,"x":417,"text":"重复密码:","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Image","props":{"y":127,"x":506,"width":112,"skin":"gameres/ui/xgtitle.png","height":29}}]};
		return ChangePwdSceneUI;
	})(View);
var Chat1UI=(function(_super){
		function Chat1UI(){
			
		    this.chat_bg=null;
		    this.chat_panel=null;
		    this.input_txt=null;
		    this.btn_add=null;
		    this.chat_oder=null;
		    this.chat_face=null;
		    this.chat_item=null;
		    this.chat_pos=null;
		    this.panel_cmd=null;
		    this.chat_face_bg=null;
		    this.list_face=null;
		    this.chat_item_bg=null;
		    this.list_special=null;

			Chat1UI.__super.call(this);
		}

		CLASS$(Chat1UI,'ui.Chat1UI',_super);
		var __proto__=Chat1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(Chat1UI.uiView);

		}

		Chat1UI.uiView={"type":"View","props":{"y":0,"x":0,"width":520,"scaleY":1,"scaleX":1,"mouseThrough":false,"height":600,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":0,"width":483,"var":"chat_bg","skin":"gameres/png/chat_bg.png","name":"chat_bg","mouseThrough":false,"height":600}},{"type":"Image","props":{"y":427,"x":534,"width":379,"visible":false,"pivotY":127,"pivotX":300,"name":"spr_bg_img","height":219,"alpha":0}},{"type":"Image","props":{"y":425,"x":-204,"width":330,"visible":false,"skin":"gameres/png/chat_big.png","name":"spr_bg","height":122,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"List","props":{"y":18,"x":138,"width":325,"repeatX":0,"name":"list_txt","height":477}},{"type":"Panel","props":{"y":18,"x":138,"width":330,"var":"chat_panel","name":"chat_panel","height":478}},{"type":"Button","props":{"y":21,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_gongliao_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"公 共","height":45}},{"type":"Button","props":{"y":81,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_system_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"系 统","height":45}},{"type":"Button","props":{"y":140,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_nearby_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"附 近","height":45}},{"type":"Button","props":{"y":200,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_hanhua_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"喊 话","height":45}},{"type":"Button","props":{"y":259,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_hanghui_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"行 会","height":45}},{"type":"Button","props":{"y":319,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_team_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"队 伍","height":45}},{"type":"Button","props":{"y":370,"x":10,"width":112,"stateNum":2,"skin":"gameres/ui/chat_btn_select.png","name":"btn_siliao_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","labelBold":true,"label":"私 聊","height":45}},{"type":"Button","props":{"y":252,"x":482,"visible":true,"stateNum":2,"skin":"gameres/ui/chat_btn_hide.png","scaleY":0.6,"scaleX":0.6,"name":"btn_hide"}},{"type":"Image","props":{"y":539,"x":6,"width":471,"name":"img_send","height":50},"child":[{"type":"Button","props":{"y":1,"x":374,"width":97,"stateNum":2,"skin":"gameres/ui/chat_btn_send.png","name":"btn_send","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3","labelBold":true,"label":"发 送","height":48}},{"type":"TextInput","props":{"y":1,"x":0,"width":326,"var":"input_txt","skin":"gameres/png/chat.png","sizeGrid":"6,13,3,6","padding":"3,5,3,5","overflow":"hidden","name":"input_txt","height":48,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":-43,"x":-294,"width":97,"stateNum":2,"skin":"gameres/ui/chat_btn_send.png","name":"btn_teshu_enable","labelSize":18,"labelColors":"#FBF1B3,#FBF1B3","labelBold":true,"label":"命 令","height":48}},{"type":"Button","props":{"y":-1,"x":321,"width":53,"var":"btn_add","stateNum":2,"skin":"gameres/ui/add.png","height":49}}]},{"type":"Button","props":{"y":505,"x":145,"width":30,"var":"chat_oder","stateNum":2,"skin":"gameres/ui/chat_oder.png","name":"chat_oder","height":30}},{"type":"Button","props":{"y":505,"x":224,"width":30,"var":"chat_face","stateNum":2,"skin":"gameres/ui/chat_face.png","name":"chat_face","height":30}},{"type":"Button","props":{"y":505,"x":302,"width":30,"var":"chat_item","stateNum":2,"skin":"gameres/ui/chat_item.png","name":"chat_item","height":30}},{"type":"Button","props":{"y":505,"x":381,"width":30,"var":"chat_pos","stateNum":2,"skin":"gameres/ui/chat_pos.png","name":"chat_pos","height":30}},{"type":"Image","props":{"y":344,"x":139,"width":111,"var":"panel_cmd","skin":"gameres/ui/chat_bg_order.png","name":"panel_cmd","height":152},"child":[{"type":"Button","props":{"y":36,"x":3,"width":105,"visible":false,"stateNum":2,"skin":"gameres/ui/chat_select_order.png","name":"btn_chuanyin","labelSize":16,"labelColors":"#FBF1B3,#FBF1B3","labelBold":true,"labelAlign":"center","label":"千里传音","height":30}},{"type":"Button","props":{"y":90,"x":0,"width":93,"visible":false,"stateNum":2,"skin":"gameres/ui/chat_select_order.png","name":"btn_del_hanghui","labelSize":16,"labelColors":"#FBF1B3,#FBF1B3","labelBold":true,"labelAlign":"center","label":"退出行会","height":30}},{"type":"Button","props":{"y":60,"x":0,"width":93,"visible":false,"stateNum":2,"skin":"gameres/ui/chat_select_order.png","name":"btn_add_hanghui","labelSize":16,"labelColors":"#FBF1B3,#FBF1B3","labelBold":true,"labelAlign":"center","label":"加入行会","height":30}},{"type":"Button","props":{"y":0,"x":0,"width":92,"visible":false,"stateNum":2,"skin":"gameres/ui/chat_select_order.png","name":"btn_rest","labelSize":16,"labelColors":"#FBF1B3,#FBF1B3","labelBold":true,"labelAlign":"center","label":"召唤物控制","height":30}}]},{"type":"Image","props":{"y":265,"x":139,"width":271,"visible":false,"var":"chat_face_bg","skin":"gameres/png/chat_face_bg.png","name":"chat_face_bg","height":230},"child":[{"type":"List","props":{"y":4,"x":2,"width":266,"var":"list_face","name":"list_face","height":206}}]},{"type":"Image","props":{"y":265,"x":183,"width":281,"visible":false,"var":"chat_item_bg","skin":"gameres/png/chat_item_bg.png","name":"chat_item_bg","height":230},"child":[{"type":"List","props":{"y":3,"x":3,"width":274,"var":"list_special","name":"list_special","height":207}}]}]};
		return Chat1UI;
	})(View);
var chatconfigUI=(function(_super){
		function chatconfigUI(){
			
		    this.cb_voice=null;
		    this.cb_microphone=null;
		    this.btn_close=null;
		    this.box_select=null;

			chatconfigUI.__super.call(this);
		}

		CLASS$(chatconfigUI,'ui.chatconfigUI',_super);
		var __proto__=chatconfigUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(chatconfigUI.uiView);

		}

		chatconfigUI.uiView={"type":"View","props":{"width":504,"height":333},"child":[{"type":"Image","props":{"skin":"gameres/png/chatbj.png"},"child":[{"type":"CheckBox","props":{"y":77,"x":95,"var":"cb_voice","stateNum":2,"skin":"gameres/ui/btn1.png","name":"cb_voice"}},{"type":"Label","props":{"y":9,"x":168,"text":"聊天室设置","strokeColor":"#000000","stroke":1,"fontSize":20,"color":"#e8b656"}},{"type":"Label","props":{"y":12,"x":271,"text":"(立即生效)","strokeColor":"#000000","stroke":1,"fontSize":18,"color":"#f8ab01"}},{"type":"CheckBox","props":{"y":77,"x":350,"var":"cb_microphone","stateNum":2,"skin":"gameres/ui/btn1.png","name":"cb_microphone"}},{"type":"Label","props":{"y":83,"x":30,"text":"声音","strokeColor":"#000000","stroke":2,"fontSize":22,"color":"#e4e4e3"}},{"type":"Label","props":{"y":83,"x":270,"text":"麦克风","strokeColor":"#000000","stroke":2,"fontSize":22,"color":"#e4e4e3"}},{"type":"Label","props":{"y":156,"x":192,"text":"聊天室选项","strokeColor":"#000000","stroke":2,"fontSize":22,"color":"#e4e4e3"}},{"type":"Button","props":{"y":-22,"x":441,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Box","props":{"y":184,"x":27,"width":450,"var":"box_select","height":127}}]}]};
		return chatconfigUI;
	})(View);
var crystalUI=(function(_super){
		function crystalUI(){
			
		    this.img_bg=null;
		    this.bg_cqb=null;
		    this.lab_cqb_all2=null;
		    this.lab_cqb_all1=null;
		    this.lab_owniron=null;
		    this.lab_cqb_state=null;
		    this.btn_que=null;
		    this.lab_exchange=null;
		    this.lab_price=null;
		    this.lab_smelt1=null;
		    this.lab_smelt2=null;
		    this.btn_smelt=null;
		    this.lab_change1=null;
		    this.lab_change2=null;
		    this.btn_change=null;
		    this.btn_close=null;
		    this.bg_bind=null;
		    this.btn_bind_ok=null;
		    this.btn_bind_close=null;
		    this.bg_buy=null;
		    this.lab_havesmelt=null;
		    this.lab_costsmelt=null;
		    this.btn_buycqb_minus=null;
		    this.lab_buycqb_num=null;
		    this.btn_buycqb_plus=null;
		    this.btn_buycqb_max=null;
		    this.btn_buycqb_ok=null;
		    this.btn_buycqb_cancel=null;
		    this.bg_sell=null;
		    this.lab_havecqb=null;
		    this.lab_changecoin=null;
		    this.btn_sellcqb_minus=null;
		    this.lab_sellcqb_num=null;
		    this.btn_sellcqb_plus=null;
		    this.btn_sellcqb_max=null;
		    this.btn_sellcqb_ok=null;
		    this.btn_sellcqb_cancel=null;
		    this.bg_login=null;
		    this.ipt_login_account=null;
		    this.ipt_login_psw=null;
		    this.btn_login_close=null;
		    this.btn_login=null;
		    this.txt_login_mail=null;
		    this.txt_login_register=null;
		    this.bg_cell=null;
		    this.ipt_cell_account=null;
		    this.ipt_cell_code=null;
		    this.btn_cell_close=null;
		    this.btn_cell=null;
		    this.txt_login_psw=null;
		    this.txt_cell_register=null;
		    this.btn_cell_code=null;
		    this.bg_register=null;
		    this.ipt_register_account=null;
		    this.ipt_register_code=null;
		    this.btn_cregister_close=null;
		    this.btn_register=null;
		    this.btn_register_code=null;
		    this.ipt_register_psw=null;
		    this.ipt_register_invite=null;
		    this.btn_register_back=null;
		    this.bg_secondPsw=null;
		    this.btn_spsw_close=null;
		    this.btn_spsw_ok=null;
		    this.btn_spsw_cancel=null;
		    this.ipt_secondPsw=null;
		    this.btn_cqbtrade=null;

			crystalUI.__super.call(this);
		}

		CLASS$(crystalUI,'ui.crystalUI',_super);
		var __proto__=crystalUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(crystalUI.uiView);

		}

		crystalUI.uiView={"type":"View","props":{"y":0,"x":0,"width":1136,"top":0,"scaleY":1,"scaleX":1,"right":0,"mouseThrough":true,"left":0,"height":600,"bottom":0},"child":[{"type":"Image","props":{"width":990,"var":"img_bg","skin":"gameres/png/crystal_bg.png","sizeGrid":"90,105,78,82","scaleY":0.8,"scaleX":0.8,"name":"img_bg","height":614,"centerY":0.5,"centerX":0.5},"child":[{"type":"Image","props":{"y":38,"x":344,"skin":"gameres/ui/crystal_boxtitle.png"},"child":[{"type":"Image","props":{"y":0,"x":95,"skin":"gameres/ui/crystal_title.png"}}]},{"type":"Image","props":{"y":64,"x":37,"var":"bg_cqb","skin":"gameres/png/crystal_bg1.png","name":"bg_cqb"},"child":[{"type":"Image","props":{"y":30,"x":623,"width":254,"skin":"gameres/png/crystal_kuang.png","sizeGrid":"7,7,7,7","height":69}},{"type":"Label","props":{"y":71,"x":811,"width":60,"var":"lab_cqb_all2","text":"0","name":"lab_cqb_all2","height":16,"fontSize":16,"color":"#09e3f6","align":"center"}},{"type":"Label","props":{"y":44,"x":811,"width":60,"var":"lab_cqb_all1","text":"0","name":"lab_cqb_all1","height":16,"fontSize":16,"color":"#09e3f6","align":"center"}},{"type":"Image","props":{"y":68,"x":785,"skin":"gameres/ui/crystal_icon1.png"}},{"type":"Image","props":{"y":39,"x":785,"skin":"gameres/ui/crystal_icon1.png"}},{"type":"Text","props":{"y":71,"x":633,"text":"当前未兑换CQB总量","fontSize":16,"color":"#eac054"}},{"type":"Text","props":{"y":43,"x":633,"text":"当前服务器CQB总量","fontSize":16,"color":"#eac054"}},{"type":"Image","props":{"y":130,"x":336,"width":232,"skin":"gameres/png/crystal_kuang.png","sizeGrid":"7,7,7,7","height":40}},{"type":"Label","props":{"y":143,"x":496,"width":60,"var":"lab_owniron","text":"0","name":"lab_owniron","height":16,"fontSize":16,"color":"#c8b7b7","align":"center"}},{"type":"Image","props":{"y":138,"x":462,"skin":"gameres/ui/crystal_icon2.png"}},{"type":"Text","props":{"y":142,"x":369,"text":"拥有黑铁矿","fontSize":16,"color":"#c8b7b7"}},{"type":"Text","props":{"y":80,"x":354,"text":"CQB钱包状态：","fontSize":18,"color":"#c8b7b7"}},{"type":"Label","props":{"y":82,"x":486,"width":60,"var":"lab_cqb_state","text":"未登录","name":"lab_cqb_state","height":16,"fontSize":18,"color":"#ff0000","align":"center"}},{"type":"Button","props":{"y":183,"x":332,"var":"btn_que","stateNum":2,"skin":"gameres/ui/crystal_que.png","name":"btn_que"}},{"type":"Text","props":{"y":190,"x":370,"text":"黑铁兑换比例：","fontSize":18,"color":"#c8b7b7"}},{"type":"Label","props":{"y":192,"x":496,"width":60,"var":"lab_exchange","text":"0","name":"lab_exchange","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Text","props":{"y":220,"x":370,"text":"当前CQB：","fontSize":18,"color":"#c8b7b7"}},{"type":"Label","props":{"y":221,"x":460,"width":60,"var":"lab_price","text":"0","name":"lab_price","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Image","props":{"y":265,"x":115,"skin":"gameres/png/crystal_bg2.png"},"child":[{"type":"Image","props":{"y":8,"x":74,"skin":"gameres/ui/crystal_title4.png"}},{"type":"Image","props":{"y":67,"x":90,"skin":"gameres/ui/crystal_icon2.png"}},{"type":"Label","props":{"y":71,"x":123,"width":54,"var":"lab_smelt1","text":"200","name":"lab_smelt1","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Image","props":{"y":94,"x":107,"skin":"gameres/ui/crystal_change.png"}},{"type":"Image","props":{"y":149,"x":97,"skin":"gameres/ui/crystal_icon1.png"}},{"type":"Label","props":{"y":153,"x":129,"width":54,"var":"lab_smelt2","text":"1","name":"lab_smelt2","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Button","props":{"y":187,"x":80,"var":"btn_smelt","stateNum":2,"skin":"gameres/ui/crystal_btn1.png","name":"btn_smelt","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"冶  炼"}}]},{"type":"Image","props":{"y":265,"x":556,"skin":"gameres/png/crystal_bg2.png"},"child":[{"type":"Image","props":{"y":8,"x":65,"skin":"gameres/ui/crystal_title6.png"}},{"type":"Image","props":{"y":68,"x":97,"skin":"gameres/ui/crystal_icon1.png"}},{"type":"Label","props":{"y":72,"x":130,"width":54,"var":"lab_change1","text":"1","name":"lab_change1","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Image","props":{"y":94,"x":107,"skin":"gameres/ui/crystal_change.png"}},{"type":"Image","props":{"y":146,"x":95,"skin":"gameres/ui/crystal_icon3.png"}},{"type":"Label","props":{"y":153,"x":129,"width":54,"var":"lab_change2","text":"137","name":"lab_change2","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Button","props":{"y":187,"x":80,"var":"btn_change","stateNum":2,"skin":"gameres/ui/crystal_btn1.png","name":"btn_change","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"兑  换"}}]}]},{"type":"Button","props":{"y":9,"x":891,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close_new.png","name":"btn_close"}},{"type":"Image","props":{"y":190,"x":316,"width":352,"var":"bg_bind","skin":"gameres/png/crystal_bg2.png","name":"bg_bind","height":308},"child":[{"type":"Image","props":{"y":12,"x":102,"skin":"gameres/ui/crystal_title3.png","scaleY":1.2,"scaleX":1.2}},{"type":"TextArea","props":{"y":65,"x":16,"width":322,"text":"    进行冶炼水晶、兑换黑铁矿、兑换战   记币，首先要绑定水晶钱包账户，否则   无法使用相关兑换功能。       对不起由于当前账户没有绑定水晶钱   包账户，所以无法进行操作,操作是否前   往绑定水晶钱包账户？","height":165,"fontSize":20,"color":"#ff0400"}},{"type":"Button","props":{"y":237,"x":38.5,"var":"btn_bind_ok","stateNum":2,"skin":"gameres/ui/crystal_btn2.png","name":"btn_bind_ok","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"前往绑定"}},{"type":"Button","props":{"y":237,"x":186,"var":"btn_bind_close","stateNum":2,"skin":"gameres/ui/crystal_btn.png","name":"btn_bind_close","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"确 定"}}]},{"type":"Image","props":{"y":230,"x":301,"width":388,"visible":false,"var":"bg_buy","skin":"gameres/png/crystal_bg2.png","sizeGrid":"55,15,15,35","name":"bg_buy","height":236},"child":[{"type":"Image","props":{"y":11,"x":43,"skin":"gameres/ui/crystal_boxtitle.png"}},{"type":"Image","props":{"y":10,"x":144,"skin":"gameres/ui/crystal_title4.png"}},{"type":"Image","props":{"y":60,"x":190,"skin":"gameres/ui/crystal_icon2.png"}},{"type":"Text","props":{"y":62,"x":118,"text":"当前拥有","fontSize":16,"color":"#c8b7b7"}},{"type":"Label","props":{"y":62,"x":225,"width":54,"var":"lab_havesmelt","text":"0","name":"lab_havesmelt","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Image","props":{"y":129,"x":190,"skin":"gameres/ui/crystal_icon2.png"}},{"type":"Text","props":{"y":131,"x":117,"text":"需要消耗","fontSize":16,"color":"#c8b7b7"}},{"type":"Label","props":{"y":131,"x":224,"width":54,"var":"lab_costsmelt","text":"0","name":"lab_costsmelt","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Text","props":{"y":96,"x":26,"text":"购买数量","fontSize":18,"color":"#ff7000"}},{"type":"Button","props":{"y":90,"x":103,"var":"btn_buycqb_minus","stateNum":3,"skin":"gameres/ui/shop_minus.png","name":"btn_buycqb_minus"}},{"type":"Image","props":{"y":94,"x":139,"width":94,"skin":"gameres/png/crystal_kuang.png","sizeGrid":"7,7,7,7","height":28}},{"type":"Label","props":{"y":100,"x":145,"width":80,"var":"lab_buycqb_num","text":"0","name":"lab_buycqb_num","height":16,"fontSize":16,"color":"#c8b7b7","align":"center"}},{"type":"Button","props":{"y":90,"x":239,"var":"btn_buycqb_plus","stateNum":3,"skin":"gameres/ui/shop_plus.png","name":"btn_buycqb_plus"}},{"type":"Button","props":{"y":92,"x":286,"var":"btn_buycqb_max","stateNum":2,"skin":"gameres/ui/crystal_btn1.png","name":"btn_buycqb_max","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"最  大"}},{"type":"Button","props":{"y":177,"x":50,"var":"btn_buycqb_ok","stateNum":2,"skin":"gameres/ui/crystal_btn2.png","name":"btn_buycqb_ok","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"冶  炼"}},{"type":"Button","props":{"y":177,"x":222,"var":"btn_buycqb_cancel","stateNum":2,"skin":"gameres/ui/crystal_btn.png","name":"btn_buycqb_cancel","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"取  消"}}]},{"type":"Image","props":{"y":230,"x":301,"width":388,"visible":false,"var":"bg_sell","skin":"gameres/png/crystal_bg2.png","sizeGrid":"55,15,15,35","name":"bg_sell","height":236},"child":[{"type":"Image","props":{"y":11,"x":43,"skin":"gameres/ui/crystal_boxtitle.png"}},{"type":"Image","props":{"y":10,"x":144,"skin":"gameres/ui/crystal_title6.png"}},{"type":"Image","props":{"y":60,"x":190,"skin":"gameres/ui/crystal_icon1.png"}},{"type":"Text","props":{"y":62,"x":118,"text":"当前拥有","fontSize":16,"color":"#c8b7b7"}},{"type":"Label","props":{"y":62,"x":225,"width":54,"var":"lab_havecqb","text":"0","name":"lab_havecqb","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Image","props":{"y":126,"x":167,"skin":"gameres/ui/crystal_icon3.png"}},{"type":"Text","props":{"y":131,"x":117,"text":"可兑换","fontSize":16,"color":"#c8b7b7"}},{"type":"Label","props":{"y":130,"x":203,"width":54,"var":"lab_changecoin","text":"0","name":"lab_changecoin","height":16,"fontSize":16,"color":"#c8b7b7","align":"left"}},{"type":"Text","props":{"y":96,"x":26,"text":"兑换数量","fontSize":18,"color":"#ff7000"}},{"type":"Button","props":{"y":90,"x":103,"var":"btn_sellcqb_minus","stateNum":3,"skin":"gameres/ui/shop_minus.png","name":"btn_sellcqb_minus"}},{"type":"Image","props":{"y":94,"x":139,"width":94,"skin":"gameres/png/crystal_kuang.png","sizeGrid":"7,7,7,7","height":28}},{"type":"Label","props":{"y":100,"x":145,"width":80,"var":"lab_sellcqb_num","text":"0","name":"lab_sellcqb_num","height":16,"fontSize":16,"color":"#c8b7b7","align":"center"}},{"type":"Button","props":{"y":90,"x":239,"var":"btn_sellcqb_plus","stateNum":3,"skin":"gameres/ui/shop_plus.png","name":"btn_sellcqb_plus"}},{"type":"Button","props":{"y":92,"x":286,"var":"btn_sellcqb_max","stateNum":2,"skin":"gameres/ui/crystal_btn1.png","name":"btn_sellcqb_max","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"最  大"}},{"type":"Button","props":{"y":177,"x":50,"var":"btn_sellcqb_ok","stateNum":2,"skin":"gameres/ui/crystal_btn2.png","name":"btn_sellcqb_ok","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"冶  炼"}},{"type":"Button","props":{"y":177,"x":222,"var":"btn_sellcqb_cancel","stateNum":2,"skin":"gameres/ui/crystal_btn.png","name":"btn_sellcqb_cancel","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffffff","label":"取  消"}}]},{"type":"Image","props":{"y":131,"x":229,"visible":false,"var":"bg_login","skin":"gameres/png/crystal_login_bg.png","name":"bg_login"},"child":[{"type":"TextInput","props":{"y":86,"x":102,"width":373,"var":"ipt_login_account","promptColor":"#3b3131","prompt":"请输入您的账号","name":"ipt_login_account","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":156,"x":102,"width":373,"var":"ipt_login_psw","type":"password","promptColor":"#3b3131","prompt":"请输入您的密码","name":"ipt_login_psw","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"Button","props":{"y":17,"x":455,"var":"btn_login_close","stateNum":1,"skin":"gameres/ui/crystal_btn_close.png","name":"btn_login_close"}},{"type":"Button","props":{"y":222,"x":140,"var":"btn_login","stateNum":1,"skin":"gameres/ui/crystal_btn_login.png","name":"btn_login"}},{"type":"Text","props":{"y":302,"x":62,"width":115,"var":"txt_login_mail","text":"短信登录","name":"txt_login_mail","height":30,"fontSize":22,"font":"Microsoft YaHei","color":"#ff0300","align":"center"}},{"type":"Text","props":{"y":302,"x":340,"width":133,"var":"txt_login_register","text":"账号注册>>","name":"txt_login_register","height":30,"fontSize":22,"font":"Microsoft YaHei","color":"#ff0300","align":"center"}}]},{"type":"Image","props":{"y":131,"x":229,"visible":false,"var":"bg_cell","skin":"gameres/png/crystal_celllogin_bg.png","name":"bg_cell"},"child":[{"type":"TextInput","props":{"y":86,"x":102,"width":373,"var":"ipt_cell_account","restrict":"0-9","promptColor":"#3b3131","prompt":"请输入您的账号","name":"ipt_cell_account","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":156,"x":102,"width":194,"var":"ipt_cell_code","restrict":"0-9","promptColor":"#3b3131","prompt":"请输入验证码","name":"ipt_cell_code","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"Button","props":{"y":17,"x":455,"var":"btn_cell_close","stateNum":1,"skin":"gameres/ui/crystal_btn_close.png","name":"btn_cell_close"}},{"type":"Button","props":{"y":222,"x":140,"var":"btn_cell","stateNum":1,"skin":"gameres/ui/crystal_btn_login.png","name":"btn_cell"}},{"type":"Text","props":{"y":302,"x":62,"width":115,"visible":false,"var":"txt_login_psw","text":"密码登录","name":"txt_login_psw","height":30,"fontSize":22,"font":"Microsoft YaHei","color":"#ff0300","align":"center"}},{"type":"Text","props":{"y":302,"x":340,"width":133,"visible":false,"var":"txt_cell_register","text":"账号注册>>","name":"txt_cell_register","height":30,"fontSize":22,"font":"Microsoft YaHei","color":"#ff0300","align":"center"}},{"type":"Button","props":{"y":141,"x":317,"width":159,"var":"btn_cell_code","stateNum":1,"skin":"gameres/ui/crystal_btn_code.png","sizeGrid":"9,9,9,9","name":"btn_cell_code","labelSize":20,"labelColors":"#ffffff","height":55}}]},{"type":"Image","props":{"y":131,"x":229,"visible":false,"var":"bg_register","skin":"gameres/png/crystal_register_bg.png","name":"bg_register"},"child":[{"type":"TextInput","props":{"y":99,"x":105,"width":373,"var":"ipt_register_account","restrict":"0-9","promptColor":"#3b3131","prompt":"请输入您的账号","name":"ipt_register_account","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":171,"x":105,"width":194,"var":"ipt_register_code","restrict":"0-9","promptColor":"#3b3131","prompt":"请输入验证码","name":"ipt_register_code","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"Button","props":{"y":17,"x":455,"var":"btn_cregister_close","stateNum":1,"skin":"gameres/ui/crystal_btn_close.png","name":"btn_cregister_close"}},{"type":"Button","props":{"y":397,"x":140,"var":"btn_register","stateNum":1,"skin":"gameres/ui/crystal_btn_register.png","name":"btn_register"}},{"type":"Button","props":{"y":161,"x":327,"width":159,"var":"btn_register_code","stateNum":2,"skin":"gameres/ui/crystal_btn2.png","sizeGrid":"9,9,9,9","name":"btn_register_code","labelSize":20,"labelColors":"#ffffff","label":"获取验证码","height":55}},{"type":"TextInput","props":{"y":246,"x":105,"width":373,"var":"ipt_register_psw","promptColor":"#3b3131","prompt":"请输入6-12位密码","name":"ipt_register_psw","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":318,"x":105,"width":373,"var":"ipt_register_invite","restrict":"0-9","promptColor":"#3b3131","prompt":"请输入邀请码","name":"ipt_register_invite","height":41,"fontSize":22,"color":"#000000","align":"left"}},{"type":"Button","props":{"y":19,"x":17,"var":"btn_register_back","stateNum":1,"skin":"gameres/ui/crystal_btn_back.png","name":"btn_register_back"}}]},{"type":"Image","props":{"y":189,"x":308,"width":374,"visible":false,"var":"bg_secondPsw","skin":"gameres/png/crystal_bg2.png","sizeGrid":"55,15,15,35","name":"bg_secondPsw","height":236},"child":[{"type":"Image","props":{"y":9,"x":138,"skin":"gameres/ui/crystal_title7.png"}},{"type":"Button","props":{"y":-18,"x":314,"var":"btn_spsw_close","stateNum":2,"skin":"gameres/ui/btn_close_new.png","name":"btn_spsw_close"}},{"type":"Button","props":{"y":173,"x":223.5,"var":"btn_spsw_ok","stateNum":2,"skin":"gameres/ui/crystal_btn2.png","name":"btn_spsw_ok","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffedcb","label":"确认兑换"}},{"type":"Button","props":{"y":173,"x":52,"var":"btn_spsw_cancel","stateNum":2,"skin":"gameres/ui/crystal_btn.png","name":"btn_spsw_cancel","labelStrokeColor":"#000000","labelStroke":1,"labelSize":18,"labelColors":"#ffedcb","label":"取消"}},{"type":"Text","props":{"y":70,"x":60,"text":"CQB兑换","fontSize":16,"color":"#ffedcb"}},{"type":"Text","props":{"y":70,"x":127,"text":"黑铁","fontSize":16,"color":"#00FF1E"}},{"type":"Text","props":{"y":70,"x":159,"text":"\\战纪币","fontSize":16,"color":"#ffE63F"}},{"type":"Text","props":{"y":70,"x":211,"text":"，需要安全码","fontSize":16,"color":"#ffedcb"}},{"type":"Image","props":{"y":111,"x":85,"width":209,"skin":"gameres/png/crystal_kuang.png","sizeGrid":"7,7,7,7","height":33}},{"type":"TextInput","props":{"y":117,"x":92,"width":195,"var":"ipt_secondPsw","prompt":"请输入安全码","name":"ipt_secondPsw","height":22,"fontSize":16,"color":"#ffffff"}}]},{"type":"Button","props":{"y":71,"x":46,"var":"btn_cqbtrade","stateNum":2,"skin":"gameres/ui/crystal_btn.png","name":"btn_cqbtrade","labelSize":16,"labelColors":"#ffffff","label":"CQB交易"}}]}]};
		return crystalUI;
	})(View);
var DoubleRockerUI=(function(_super){
		function DoubleRockerUI(){
			
		    this.img_run_bg=null;
		    this.box_run_otherDir=null;
		    this.img_run_dir=null;
		    this.img_run_qiu=null;
		    this.img_walk_bg=null;
		    this.box_walk_otherDir=null;
		    this.img_walk_dir=null;
		    this.img_walk_qiu=null;

			DoubleRockerUI.__super.call(this);
		}

		CLASS$(DoubleRockerUI,'ui.DoubleRockerUI',_super);
		var __proto__=DoubleRockerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(DoubleRockerUI.uiView);

		}

		DoubleRockerUI.uiView={"type":"View","props":{"width":280,"height":350},"child":[{"type":"Image","props":{"y":113,"x":141,"var":"img_run_bg","skin":"gameres/ui/double_rocke_run_bj.png","name":"img_run_bg"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":123,"var":"box_run_otherDir","name":"box_run_otherDir","height":123},"child":[{"type":"Image","props":{"y":-5,"x":44,"skin":"gameres/ui/double_rocke_run_0.png"}},{"type":"Image","props":{"y":9,"x":76,"skin":"gameres/ui/double_rocke_run_1.png"}},{"type":"Image","props":{"y":45,"x":94,"skin":"gameres/ui/double_rocke_run_2.png"}},{"type":"Image","props":{"y":78,"x":77,"skin":"gameres/ui/double_rocke_run_3.png"}},{"type":"Image","props":{"y":94,"x":44,"skin":"gameres/ui/double_rocke_run_4.png"}},{"type":"Image","props":{"y":75,"x":11,"skin":"gameres/ui/double_rocke_run_5.png"}},{"type":"Image","props":{"y":45,"x":-5,"skin":"gameres/ui/double_rocke_run_6.png"}},{"type":"Image","props":{"y":15,"x":10,"skin":"gameres/ui/double_rocke_run_7.png"}}]},{"type":"Image","props":{"var":"img_run_dir","skin":"gameres/png/double_rocker_hu_run_0.png","name":"img_run_dir","mouseThrough":true}}]},{"type":"Image","props":{"y":132,"x":161,"var":"img_run_qiu","skin":"gameres/ui/double_rocker_run.png","name":"img_run_qiu","mouseThrough":true,"mouseEnabled":true}},{"type":"Image","props":{"y":226,"x":35,"var":"img_walk_bg","skin":"gameres/ui/double_rocke_walk_bj.png","name":"img_walk_bg"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":142,"var":"box_walk_otherDir","name":"box_walk_otherDir","height":142},"child":[{"type":"Image","props":{"y":-3,"x":35,"skin":"gameres/ui/double_rocke_walk_0.png"}},{"type":"Image","props":{"y":9,"x":61,"skin":"gameres/ui/double_rocke_walk_1.png"}},{"type":"Image","props":{"y":38,"x":76,"skin":"gameres/ui/double_rocke_walk_2.png"}},{"type":"Image","props":{"y":64,"x":62,"skin":"gameres/ui/double_rocke_walk_3.png"}},{"type":"Image","props":{"y":78,"x":36,"skin":"gameres/ui/double_rocke_walk_4.png"}},{"type":"Image","props":{"y":64,"x":9,"skin":"gameres/ui/double_rocke_walk_5.png"}},{"type":"Image","props":{"y":38,"x":-5,"skin":"gameres/ui/double_rocke_walk_6.png"}},{"type":"Image","props":{"y":14,"x":5,"skin":"gameres/ui/double_rocke_walk_7.png"}}]},{"type":"Image","props":{"var":"img_walk_dir","skin":"gameres/png/double_rocker_hu_walk_0.png","name":"img_walk_dir"}}]},{"type":"Image","props":{"y":241,"x":49,"var":"img_walk_qiu","skin":"gameres/ui/double_rocker_walk.png","name":"img_walk_qiu"}}]};
		return DoubleRockerUI;
	})(View);
var doudizhuUI=(function(_super){
		function doudizhuUI(){
			
		    this.ddz_bg=null;
		    this.wj1=null;
		    this.img_play1=null;
		    this.img_yb_play1=null;
		    this.text_yb_play1=null;
		    this.img_play1_fen=null;
		    this.img_zhenying1=null;
		    this.name_play1=null;
		    this.wj2=null;
		    this.img_play2=null;
		    this.img_yb_play2=null;
		    this.text_yb_play2=null;
		    this.img_play2_fen=null;
		    this.img_zhenying2=null;
		    this.name_play2=null;
		    this.text_ready2go=null;
		    this.wj3=null;
		    this.img_play3=null;
		    this.img_yb_play3=null;
		    this.text_yb_play3=null;
		    this.img_play3_fen=null;
		    this.img_zhenying3=null;
		    this.name_play3=null;
		    this.text_ready3go=null;
		    this.btn_exit=null;
		    this.btn_ready=null;
		    this.btn_1=null;
		    this.btn_2=null;
		    this.btn_3=null;
		    this.btn_tishi=null;
		    this.btn_chupai=null;
		    this.btn_chongxuan=null;
		    this.btn_buchu=null;
		    this.btn_tuoguan=null;
		    this.btn_huan=null;
		    this.btn_yao=null;
		    this.btn_liao=null;
		    this.list_shoupai=null;
		    this.btn_off_tuoguan=null;
		    this.list_dipai=null;
		    this.box_outcard1=null;
		    this.box_outcard2=null;
		    this.box_outcard3=null;
		    this.text_desk_num=null;
		    this.img_play1_buchu=null;
		    this.img_play3_buchu=null;
		    this.img_play2_buchu=null;
		    this.play1_time=null;
		    this.play1_time_text=null;
		    this.play2_time=null;
		    this.play2_time_text=null;
		    this.play3_time=null;
		    this.play3_time_text=null;
		    this.game_result=null;
		    this.game_win=null;
		    this.btn_chongkai=null;
		    this.img_game_dizhu1=null;
		    this.img_game_dizhu2=null;
		    this.img_game_dizhu3=null;
		    this.text_gameplay1name=null;
		    this.text_gameplay1_dizhu=null;
		    this.text_gameplay1_beishu=null;
		    this.text_gameplay1_jiesuan=null;
		    this.text_gameplay2name=null;
		    this.text_gameplay2_dizhu=null;
		    this.text_gameplay2_beishu=null;
		    this.text_gameplay2_jiesuan=null;
		    this.text_gameplay3name=null;
		    this.text_gameplay3_dizhu=null;
		    this.text_gameplay3_beishu=null;
		    this.text_gameplay3_jiesuan=null;
		    this.yuanbao=null;
		    this.dizhu=null;
		    this.beilv=null;

			doudizhuUI.__super.call(this);
		}

		CLASS$(doudizhuUI,'ui.doudizhuUI',_super);
		var __proto__=doudizhuUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(doudizhuUI.uiView);

		}

		doudizhuUI.uiView={"type":"View","props":{"width":870,"height":500},"child":[{"type":"Image","props":{"width":870,"var":"ddz_bg","skin":"ui/doudizhu/00055.png","name":"ddz_bg","height":500},"child":[{"type":"Image","props":{"y":-38,"x":-51,"var":"wj1","name":"wj1"},"child":[{"type":"Image","props":{"y":380,"x":128,"var":"img_play1","skin":"ui/doudizhu/00114.png","name":"img_play1"}},{"type":"Image","props":{"y":337,"x":127,"var":"img_yb_play1","skin":"ui/doudizhu/00018.png","name":"img_yb_play1"},"child":[{"type":"Text","props":{"y":7,"x":9,"width":52,"var":"text_yb_play1","valign":"middle","text":"17","stroke":2,"name":"text_yb_play1","height":22,"fontSize":14,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":370,"x":193,"var":"img_play1_fen","skin":"ui/doudizhu/00106.png","name":"img_play1_fen"}},{"type":"Image","props":{"y":396,"x":197,"var":"img_zhenying1","skin":"ui/doudizhu/00116.png","name":"img_zhenying1"}},{"type":"Text","props":{"y":448,"x":116,"width":94,"var":"name_play1","valign":"middle","text":"啊沙发上","strokeColor":"#000000","stroke":2,"overflow":"hidden","name":"name_play1","height":15,"fontSize":14,"font":"SimSun","color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":62,"x":-95,"var":"wj2","name":"wj2"},"child":[{"type":"Image","props":{"y":-2,"x":814,"var":"img_play2","skin":"ui/doudizhu/00115.png","name":"img_play2"}},{"type":"Image","props":{"y":86,"x":810,"var":"img_yb_play2","skin":"ui/doudizhu/00018.png","name":"img_yb_play2"},"child":[{"type":"Text","props":{"y":6,"x":9,"width":52,"var":"text_yb_play2","valign":"middle","text":"17","stroke":2,"name":"text_yb_play2","height":22,"fontSize":14,"color":"#FFFFFF","align":"center"}}]},{"type":"Image","props":{"y":64,"x":751,"var":"img_play2_fen","skin":"ui/doudizhu/00106.png","name":"img_play2_fen"}},{"type":"Image","props":{"y":18,"x":787,"var":"img_zhenying2","skin":"ui/doudizhu/00117.png"}},{"type":"Text","props":{"y":68,"x":792,"width":110,"var":"name_play2","valign":"middle","text":"大概都快两个","strokeColor":"#000000","stroke":2,"overflow":"hidden","name":"name_play2","height":15,"fontSize":14,"font":"SimSun","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":-2,"x":787,"wordWrap":true,"width":24,"var":"text_ready2go","valign":"middle","text":"已准备","stroke":2,"name":"text_ready2go","height":73,"fontSize":18,"font":"SimSun","color":"#f4f1f1","align":"center"}}]},{"type":"Image","props":{"y":190,"x":-49,"var":"wj3","name":"wj3"},"child":[{"type":"Image","props":{"y":-131,"x":127,"var":"img_play3","skin":"ui/doudizhu/00114.png","name":"img_play3"}},{"type":"Image","props":{"y":-43,"x":126,"var":"img_yb_play3","skin":"ui/doudizhu/00018.png","name":"img_yb_play3"},"child":[{"type":"Text","props":{"y":7,"x":10,"width":52,"var":"text_yb_play3","valign":"middle","text":"17","stroke":2,"name":"text_yb_play3","height":22,"fontSize":14,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":-63,"x":210,"var":"img_play3_fen","skin":"ui/doudizhu/00106.png","name":"img_play3_fen"}},{"type":"Image","props":{"y":-111,"x":197,"var":"img_zhenying3","skin":"ui/doudizhu/00117.png","name":"img_zhenying3"}},{"type":"Text","props":{"y":-60,"x":111,"width":94,"var":"name_play3","valign":"middle","text":"更宽容涵","strokeColor":"#000000","stroke":2,"overflow":"hidden","name":"name_play3","height":15,"fontSize":14,"font":"SimSun","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":-133,"x":196,"wordWrap":true,"width":24,"var":"text_ready3go","valign":"middle","text":"已准备","stroke":2,"name":"text_ready3go","height":73,"fontSize":18,"font":"SimSun","color":"#f4f1f1","align":"center"}}]},{"type":"Button","props":{"y":438,"x":767,"var":"btn_exit","stateNum":3,"skin":"ui/doudizhu/00016.png","name":"btn_exit","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"退"}},{"type":"Button","props":{"y":266,"x":382,"var":"btn_ready","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_ready","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"准备"}},{"type":"Button","props":{"y":289,"x":278,"var":"btn_1","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_1","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"1分"}},{"type":"Button","props":{"y":289,"x":395,"var":"btn_2","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_2","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"2分"}},{"type":"Button","props":{"y":289,"x":512,"var":"btn_3","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_3","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"3分"}},{"type":"Button","props":{"y":284,"x":565,"var":"btn_tishi","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_tishi","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"提示"}},{"type":"Button","props":{"y":284,"x":208,"var":"btn_chupai","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_chupai","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"出牌"}},{"type":"Button","props":{"y":284,"x":327,"var":"btn_chongxuan","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_chongxuan","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"重选"}},{"type":"Button","props":{"y":284,"x":446,"var":"btn_buchu","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_buchu","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"不出"}},{"type":"Button","props":{"y":438,"x":675,"var":"btn_tuoguan","stateNum":3,"skin":"ui/doudizhu/00016.png","name":"btn_tuoguan","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"托"}},{"type":"Button","props":{"y":438,"x":721,"var":"btn_huan","stateNum":3,"skin":"ui/doudizhu/00016.png","name":"btn_huan","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"换"}},{"type":"Button","props":{"y":438,"x":629,"var":"btn_yao","stateNum":3,"skin":"ui/doudizhu/00016.png","name":"btn_yao","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"邀"}},{"type":"Button","props":{"y":438,"x":583,"var":"btn_liao","stateNum":3,"skin":"ui/doudizhu/00016.png","name":"btn_liao","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"聊"}},{"type":"List","props":{"y":322,"x":200,"width":460,"var":"list_shoupai","name":"list_shoupai","height":100}},{"type":"Button","props":{"y":325,"x":355,"visible":false,"var":"btn_off_tuoguan","stateNum":2,"skin":"ui/doudizhu/00019.png","name":"btn_off_tuoguan"}},{"type":"Box","props":{"y":58,"x":299,"width":258,"var":"list_dipai","name":"list_dipai","height":106}},{"type":"Box","props":{"y":170,"x":155,"width":546,"var":"box_outcard1","name":"box_outcard1","height":115}},{"type":"Box","props":{"y":170,"x":218,"width":483,"var":"box_outcard2","name":"box_outcard2","height":115}},{"type":"Box","props":{"y":170,"x":155,"width":483,"var":"box_outcard3","name":"box_outcard3","height":115}},{"type":"Text","props":{"y":32,"x":335,"width":0,"var":"text_desk_num","valign":"middle","name":"text_desk_num","height":0,"fontSize":14,"color":"#52f406","align":"center"}}]},{"type":"Image","props":{"y":253,"x":402,"var":"img_play1_buchu","skin":"ui/doudizhu/00112.png","name":"img_play1_buchu"}},{"type":"Image","props":{"y":216,"x":91,"var":"img_play3_buchu","skin":"ui/doudizhu/00112.png","name":"img_play3_buchu"}},{"type":"Image","props":{"y":218,"x":729,"var":"img_play2_buchu","skin":"ui/doudizhu/00112.png","name":"img_play2_buchu"}},{"type":"Image","props":{"y":226,"x":400,"var":"play1_time","skin":"ui/doudizhu/00111.png","name":"play1_time"},"child":[{"type":"Text","props":{"y":21,"x":11,"width":25,"var":"play1_time_text","name":"play1_time_text","height":20,"fontSize":24,"color":"#FFFFFF","align":"center"}}]},{"type":"Image","props":{"y":201,"x":728,"var":"play2_time","skin":"ui/doudizhu/00111.png","name":"play2_time"},"child":[{"type":"Text","props":{"y":21,"x":11,"width":25,"var":"play2_time_text","name":"play2_time_text","height":20,"fontSize":24,"color":"#FFFFFF","align":"center"}}]},{"type":"Image","props":{"y":200,"x":89,"var":"play3_time","skin":"ui/doudizhu/00111.png","name":"play3_time"},"child":[{"type":"Text","props":{"y":21,"x":11,"width":25,"var":"play3_time_text","name":"play3_time_text","height":20,"fontSize":24,"color":"#FFFFFF","align":"center"}}]},{"type":"Image","props":{"y":50,"x":158,"var":"game_result","skin":"ui/doudizhu/00011.png","name":"game_result"},"child":[{"type":"Image","props":{"y":12,"x":150,"var":"game_win","skin":"ui/doudizhu/00008.png","name":"game_win"}},{"type":"Button","props":{"y":327,"x":246,"var":"btn_chongkai","stateNum":3,"skin":"ui/doudizhu/00015.png","name":"btn_chongkai","labelStroke":2,"labelSize":14,"labelColors":"#fadba7,#e7b663,#fadba7","label":"再来一把"}},{"type":"Image","props":{"y":154,"x":36,"skin":"ui/doudizhu/00012.png"}},{"type":"Image","props":{"y":212,"x":36,"skin":"ui/doudizhu/00012.png"}},{"type":"Image","props":{"y":270,"x":36,"skin":"ui/doudizhu/00012.png"}},{"type":"Image","props":{"y":168,"x":67,"visible":false,"var":"img_game_dizhu1","skin":"ui/doudizhu/00010.png","name":"img_game_dizhu1"}},{"type":"Image","props":{"y":224,"x":67,"visible":false,"var":"img_game_dizhu2","skin":"ui/doudizhu/00010.png","name":"img_game_dizhu2"}},{"type":"Image","props":{"y":284,"x":67,"visible":false,"var":"img_game_dizhu3","skin":"ui/doudizhu/00010.png","name":"img_game_dizhu3"}},{"type":"Label","props":{"y":138,"x":134,"text":"角色名","fontSize":14,"color":"#ffffff"}},{"type":"Label","props":{"y":138,"x":256,"text":"底注","fontSize":14,"color":"#ffffff"}},{"type":"Label","props":{"y":138,"x":349,"text":"倍率","fontSize":14,"color":"#ffffff"}},{"type":"Label","props":{"y":138,"x":432,"text":"结算","fontSize":14,"color":"#ffffff"}},{"type":"Text","props":{"y":171,"x":110,"width":99,"var":"text_gameplay1name","valign":"middle","text":"123建设","overflow":"hidden","name":"text_gameplay1name","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":171,"x":234,"width":70,"var":"text_gameplay1_dizhu","valign":"middle","text":"100","overflow":"hidden","name":"text_gameplay1_dizhu","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":171,"x":338,"width":52,"var":"text_gameplay1_beishu","valign":"middle","text":"100","overflow":"hidden","name":"text_gameplay1_beishu","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":171,"x":410,"width":70,"var":"text_gameplay1_jiesuan","valign":"middle","text":"10000","overflow":"hidden","name":"text_gameplay1_jiesuan","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":227,"x":110,"width":99,"var":"text_gameplay2name","valign":"middle","text":"123建设","overflow":"hidden","name":"text_gameplay2name","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":227,"x":234,"width":70,"var":"text_gameplay2_dizhu","valign":"middle","text":"100","overflow":"hidden","name":"text_gameplay2_dizhu","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":227,"x":338,"width":52,"var":"text_gameplay2_beishu","valign":"middle","text":"100","overflow":"hidden","name":"text_gameplay2_beishu","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":227,"x":410,"width":70,"var":"text_gameplay2_jiesuan","valign":"middle","text":"10000","overflow":"hidden","name":"text_gameplay2_jiesuan","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":287,"x":110,"width":99,"var":"text_gameplay3name","valign":"middle","text":"123建设","overflow":"hidden","name":"text_gameplay3name","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":287,"x":234,"width":70,"var":"text_gameplay3_dizhu","valign":"middle","text":"100","overflow":"hidden","name":"text_gameplay3_dizhu","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":287,"x":338,"width":52,"var":"text_gameplay3_beishu","valign":"middle","text":"100","overflow":"hidden","name":"text_gameplay3_beishu","height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":287,"x":410,"width":70,"var":"text_gameplay3_jiesuan","valign":"middle","text":"10000","overflow":"hidden","name":"text_gameplay3_jiesuan","height":17,"fontSize":14,"color":"#ffffff","align":"center"}}]},{"type":"Label","props":{"y":448,"x":63,"width":144,"var":"yuanbao","valign":"middle","text":"元宝：5000","stroke":2,"height":26,"fontSize":14,"color":"#fadba7","align":"center"}},{"type":"Label","props":{"y":448,"x":219,"width":110,"var":"dizhu","valign":"middle","text":"底注：200","stroke":2,"height":24,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":448,"x":342,"width":111,"var":"beilv","valign":"middle","text":"倍率：200","stroke":2,"height":24,"fontSize":14,"color":"#ffffff","align":"center"}}]};
		return doudizhuUI;
	})(View);
var DrugSetupUI=(function(_super){
		function DrugSetupUI(){
			
		    this.Drug_bg=null;
		    this.Drug_but=null;
		    this.but_rest=null;
		    this.but_Close=null;

			DrugSetupUI.__super.call(this);
		}

		CLASS$(DrugSetupUI,'ui.DrugSetupUI',_super);
		var __proto__=DrugSetupUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(DrugSetupUI.uiView);

		}

		DrugSetupUI.uiView={"type":"View","props":{"y":60,"x":150,"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":26,"x":136,"var":"Drug_bg","skin":"gameres/png/setupwin.png"},"child":[{"type":"Button","props":{"y":51,"x":23,"width":250,"var":"Drug_but","height":226},"child":[{"type":"Image","props":{"y":1,"x":50,"width":49,"height":49}},{"type":"Image","props":{"y":1,"x":151,"width":49,"height":49}},{"type":"Image","props":{"y":89,"x":201,"width":49,"height":49}},{"type":"Image","props":{"y":175,"x":151,"width":49,"height":49}},{"type":"Image","props":{"y":175,"x":50,"width":49,"height":49}},{"type":"Image","props":{"y":89,"x":1,"width":49,"height":49}}]},{"type":"Button","props":{"y":129,"x":112,"var":"but_rest","stateNum":2,"skin":"gameres/ui/setup_rest.png","labelStrokeColor":"#e1f408"}},{"type":"Button","props":{"y":-17,"x":224,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}}]}]};
		return DrugSetupUI;
	})(View);
var FriendUI=(function(_super){
		function FriendUI(){
			
		    this.bg_img=null;
		    this.myFriend_btn=null;
		    this.nearPlayer_btn=null;
		    this.blackList_btn=null;
		    this.friend_list=null;
		    this.selectEffect_img=null;
		    this.content_txt_0=null;
		    this.content_txt_1=null;
		    this.content_txt_2=null;
		    this.content_txt_3=null;
		    this.content_txt_4=null;
		    this.addFriend_btn=null;
		    this.friendNumTitle_txt=null;
		    this.curFriendNum_txt=null;

			FriendUI.__super.call(this);
		}

		CLASS$(FriendUI,'ui.FriendUI',_super);
		var __proto__=FriendUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(FriendUI.uiView);

		}

		FriendUI.uiView={"type":"View","props":{"width":712,"top":0,"right":0,"mouseThrough":true,"left":0,"height":465,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":712,"var":"bg_img","skin":"gameres/png/friend_bg1.png","name":"bg_img","height":465},"child":[{"type":"Button","props":{"y":67,"x":25,"width":136,"var":"myFriend_btn","stateNum":2,"skin":"gameres/ui/myFriend.png","name":"myFriend_btn","labelStroke":2,"labelSize":25,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","height":49}},{"type":"Button","props":{"y":115,"x":25,"width":136,"var":"nearPlayer_btn","stateNum":2,"skin":"gameres/ui/nearPlayer.png","name":"nearPlayer_btn","labelStroke":2,"labelSize":25,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","height":49}},{"type":"Button","props":{"y":163,"x":25,"width":136,"var":"blackList_btn","stateNum":2,"skin":"gameres/ui/blackList.png","name":"blackList_btn","labelStroke":2,"labelSize":25,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","height":49}},{"type":"Text","props":{"y":72,"x":222,"text":"名称","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Text","props":{"y":71,"x":329,"text":"等级","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Text","props":{"y":71,"x":391,"text":"职业","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Text","props":{"y":71,"x":490,"text":"行会","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Text","props":{"y":71,"x":606,"text":"状态","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#ffffff","bold":false,"align":"center"}},{"type":"List","props":{"y":100,"x":179,"width":505,"var":"friend_list","spaceY":5,"repeatX":1,"name":"friend_list","height":292},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"width":510,"var":"selectEffect_img","skin":"gameres/ui/f_selectEffect.png","name":"selectEffect_img","height":30}},{"type":"Text","props":{"y":8,"x":15,"var":"content_txt_0","text":"名字也是七个字","name":"content_txt_0","fontSize":14}},{"type":"Text","props":{"y":7,"x":154,"var":"content_txt_1","text":"100","name":"content_txt_1","fontSize":14}},{"type":"Text","props":{"y":8,"x":214,"var":"content_txt_2","text":"战士","name":"content_txt_2","fontSize":14}},{"type":"Text","props":{"y":8,"x":301,"var":"content_txt_3","text":"我最牛逼","name":"content_txt_3","fontSize":14}},{"type":"Text","props":{"y":6,"x":419,"var":"content_txt_4","text":"离线1小时","name":"content_txt_4","fontSize":14}}]}]},{"type":"Button","props":{"y":402,"x":566,"var":"addFriend_btn","stateNum":2,"skin":"gameres/ui/addFriend.png","name":"addFriend_btn"}},{"type":"Text","props":{"y":434,"x":24,"var":"friendNumTitle_txt","text":"好友上限：","name":"friendNumTitle_txt","fontSize":14,"color":"#ffffff"}},{"type":"Text","props":{"y":436,"x":94,"var":"curFriendNum_txt","text":"2/100","name":"curFriendNum_txt","color":"#ffffff"}}]}]};
		return FriendUI;
	})(View);
var FriendOperationTipUI=(function(_super){
		function FriendOperationTipUI(){
			
		    this.bg_img=null;
		    this.name_txt=null;
		    this.btns_box=null;
		    this.checkPlayer_btn=null;
		    this.makeDeal_btn=null;
		    this.dealFriend_btn=null;
		    this.privateChat_btn=null;
		    this.inviteGroup_btn=null;
		    this.beBad_btn=null;
		    this.inviteMem_btn=null;
		    this.addFriend_btn=null;
		    this.cancelBeBad_btn=null;
		    this.close_btn=null;

			FriendOperationTipUI.__super.call(this);
		}

		CLASS$(FriendOperationTipUI,'ui.FriendOperationTipUI',_super);
		var __proto__=FriendOperationTipUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(FriendOperationTipUI.uiView);

		}

		FriendOperationTipUI.uiView={"type":"View","props":{"y":0,"x":0,"width":430,"height":360},"child":[{"type":"Image","props":{"width":396,"var":"bg_img","skin":"gameres/png/playInfo_bg.png","sizeGrid":"57,19,19,20","name":"bg_img"},"child":[{"type":"Text","props":{"y":20,"x":3,"width":389,"var":"name_txt","text":"名字最多七个字","name":"name_txt","height":18,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Box","props":{"y":57,"x":45,"var":"btns_box","name":"btns_box"},"child":[{"type":"Button","props":{"y":-2,"x":16,"var":"checkPlayer_btn","stateNum":2,"skin":"gameres/ui/checkPlayer.png","name":"checkPlayer_btn"}},{"type":"Button","props":{"y":-5,"x":176,"var":"makeDeal_btn","stateNum":2,"skin":"gameres/ui/makeDeal.png","name":"makeDeal_btn"}},{"type":"Button","props":{"y":56,"x":16,"var":"dealFriend_btn","stateNum":2,"skin":"gameres/ui/f_deleFriend.png","name":"dealFriend_btn"}},{"type":"Button","props":{"y":57,"x":176,"var":"privateChat_btn","stateNum":2,"skin":"gameres/ui/privateChat.png","name":"privateChat_btn"}},{"type":"Button","props":{"y":114,"x":16,"var":"inviteGroup_btn","stateNum":2,"skin":"gameres/ui/inviteGroup.png","name":"inviteGroup_btn"}},{"type":"Button","props":{"y":115,"x":176,"var":"beBad_btn","stateNum":2,"skin":"gameres/ui/beBad.png","name":"beBad_btn"}},{"type":"Button","props":{"y":171,"x":16,"var":"inviteMem_btn","stateNum":2,"skin":"gameres/ui/inviteMem.png","name":"inviteMem_btn"}},{"type":"Button","props":{"y":171,"x":176,"width":128,"var":"addFriend_btn","stateNum":2,"skin":"gameres/ui/addFriend.png","name":"addFriend_btn","height":51}},{"type":"Button","props":{"y":227,"x":97,"width":128,"var":"cancelBeBad_btn","stateNum":2,"skin":"gameres/ui/f_cancelBlackList.png","name":"cancelBeBad_btn","height":51}}]}]},{"type":"Button","props":{"y":-5,"x":389,"var":"close_btn","stateNum":2,"skin":"gameres/ui/but_close.png","name":"close_btn"}}]};
		return FriendOperationTipUI;
	})(View);
var friend_itemUI=(function(_super){
		function friend_itemUI(){
			

			friend_itemUI.__super.call(this);
		}

		CLASS$(friend_itemUI,'ui.friend_itemUI',_super);
		var __proto__=friend_itemUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(friend_itemUI.uiView);

		}

		friend_itemUI.uiView={"type":"View","props":{"width":500,"height":40},"child":[{"type":"Image","props":{"y":0,"x":1,"width":500,"skin":"gameres/png/g_03.png","name":"img_sel","height":40}},{"type":"Text","props":{"y":11,"x":30,"width":140,"text":"0","name":"lbl_0","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":11,"x":194,"width":40,"text":"1","name":"lbl_1","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":11,"x":293,"width":50,"text":"2","name":"lbl_2","fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":11,"x":349,"width":140,"text":"2","name":"lbl_3","fontSize":18,"color":"#ffffff","align":"center"}}]};
		return friend_itemUI;
	})(View);
var fsredpackUI=(function(_super){
		function fsredpackUI(){
			
		    this.fasongpack=null;
		    this.combox_gold=null;
		    this.combox_index=null;
		    this.txt_gold=null;
		    this.txt_edit=null;
		    this.txt_msg=null;
		    this.pack_logo=null;
		    this.edit_gold=null;
		    this.edit_gold_count=null;
		    this.pack_msg=null;
		    this.but_pakSend=null;
		    this.but_close=null;
		    this.Lb_haoy=null;
		    this.box_haoy=null;
		    this.close_btn=null;

			fsredpackUI.__super.call(this);
		}

		CLASS$(fsredpackUI,'ui.fsredpackUI',_super);
		var __proto__=fsredpackUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(fsredpackUI.uiView);

		}

		fsredpackUI.uiView={"type":"View","props":{"y":0,"x":0,"width":870,"scaleY":1,"scaleX":1,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":42,"x":177,"width":424,"var":"fasongpack","skin":"gameres/png/playInfo_bg.png","sizeGrid":"23,100,24,99","height":334},"child":[{"type":"Label","props":{"y":65,"x":23,"text":"货币类型：","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":64,"x":219,"text":"红包范围：","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"ComboBox","props":{"y":73,"x":113,"width":90,"var":"combox_gold","skin":"gameres/ui/redpak_combobox.png","sizeGrid":"4,20,4,4","selectedIndex":0,"pivotY":12,"pivotX":3,"labels":"元宝,金币","labelSize":18,"labelColors":"#ffffff,#ffffff,#ffffff,#ffffff","itemSize":18,"height":24}},{"type":"ComboBox","props":{"y":73,"x":303,"width":87,"var":"combox_index","skin":"gameres/ui/redpak_combobox.png","sizeGrid":"4,20,4,4","selectedIndex":3,"pivotY":12,"pivotX":3,"labels":"行会,队伍,国家,全服,好友","labelSize":18,"labelColors":"#ffffff,#ffffff,#ffffff,#ffffff","itemSize":18,"height":24}},{"type":"Label","props":{"y":103,"x":39,"var":"txt_gold","text":"总金额：","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":136,"x":27,"var":"txt_edit","text":"红包数量：","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#e8e4e4"}},{"type":"Label","props":{"y":209,"x":42,"var":"txt_msg","text":"祝福语：","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Image","props":{"y":94,"x":4,"width":35,"var":"pack_logo","skin":"gameres/ui/pinIcon.png","height":35}},{"type":"TextInput","props":{"y":99,"x":110,"width":175,"var":"edit_gold","type":"number","strokeColor":"#896b4d","stroke":1,"height":24,"fontSize":14,"color":"#efe9e9","borderColor":"#51462e","bgColor":"#1e1a16"}},{"type":"TextInput","props":{"y":135,"x":110,"width":179,"var":"edit_gold_count","type":"number","strokeColor":"#896b4d","stroke":1,"height":24,"fontSize":14,"color":"#efe9e9","borderColor":"#51462e","bgColor":"#1e1a16"}},{"type":"TextInput","props":{"y":207,"x":110,"width":247,"var":"pack_msg","text":"恭喜发财,大吉大利!","strokeColor":"#896b4d","stroke":1,"height":60,"fontSize":14,"color":"#efe9e9","borderColor":"#51462e","bgColor":"#1e1a16"}},{"type":"Button","props":{"y":284,"x":76,"var":"but_pakSend","stateNum":2,"skin":"gameres/ui/sureSendRedPack.png"}},{"type":"Button","props":{"y":285,"x":247,"var":"but_close","stateNum":2,"skin":"gameres/ui/exitSendRedPack .png"}},{"type":"Label","props":{"y":174,"x":27,"visible":false,"var":"Lb_haoy","text":"好友选择：","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"ComboBox","props":{"y":183,"x":112,"width":177,"visible":false,"var":"box_haoy","skin":"gameres/ui/redpak_combobox.png","sizeGrid":"4,20,4,4","selectedIndex":3,"pivotY":12,"pivotX":3,"labelSize":18,"labelColors":"#ffffff,#ffffff,#ffffff,#ffffff","itemSize":18,"height":24}},{"type":"Text","props":{"y":14,"x":185,"text":"发红包","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#d8d3cf","align":"center"}},{"type":"Button","props":{"y":-22,"x":366,"var":"close_btn","stateNum":2,"skin":"gameres/ui/but_close.png","name":"close_btn"}}]}]};
		return fsredpackUI;
	})(View);
var fuckUI=(function(_super){
		function fuckUI(){
			

			fuckUI.__super.call(this);
		}

		CLASS$(fuckUI,'ui.fuckUI',_super);
		var __proto__=fuckUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(fuckUI.uiView);

		}

		fuckUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Button","props":{"y":210,"x":209,"label":"label"}},{"type":"ComboBox","props":{"y":120,"x":310,"labels":"label1,label2"}},{"type":"Image","props":{"y":151,"x":156}}]};
		return fuckUI;
	})(View);
var GameMainUI=(function(_super){
		function GameMainUI(){
			
		    this.role_head=null;
		    this.herohead_bg=null;
		    this.hero_power=null;
		    this.hero_exp=null;
		    this.hero_mp=null;
		    this.hero_hp=null;
		    this.herohead_sex=null;
		    this.hero_name=null;
		    this.hero_loyal=null;
		    this.lbl_herohp=null;
		    this.lbl_heromp=null;
		    this.hero_level=null;
		    this.targethead_bg=null;
		    this.target_hpBar=null;
		    this.target_job=null;
		    this.target_hpNum=null;
		    this.target_level=null;
		    this.target_sp=null;
		    this.target_name=null;
		    this.btn_tarbuff=null;
		    this.img_showgold=null;
		    this.img_showgold1=null;
		    this.txt_showgold=null;
		    this.txt_showgold1=null;
		    this.txt_showgoldname=null;
		    this.txt_showgoldname1=null;
		    this.herocall_btn=null;
		    this.hero_panel=null;
		    this.herobag_btn=null;
		    this.herolock_btn=null;
		    this.herostate_btn=null;
		    this.heroguard_btn=null;
		    this.btn_selfbuff=null;
		    this.bg_buff=null;
		    this.btn_closebuff=null;
		    this.list_buffinfo=null;
		    this.buff_ani=null;
		    this.buff_info=null;
		    this.buff_name=null;
		    this.buff_time=null;
		    this.target_menu=null;
		    this.target_menu_name=null;
		    this.menu_info=null;
		    this.menu_friend=null;
		    this.menu_team=null;
		    this.menu_chat=null;
		    this.menu_shield=null;
		    this.menu_guild=null;
		    this.panel_node=null;
		    this.img_mini=null;
		    this.pl_mini=null;
		    this.lbl_map_name=null;
		    this.lbl_map_grid=null;
		    this.lbl_map_safe=null;
		    this.btn_openmini=null;
		    this.btn_list=null;
		    this.btn_rank_list=null;
		    this.bnt_shop=null;
		    this.bnt_chongzi=null;
		    this.bnt_bysc=null;
		    this.bnt_game_fl=null;
		    this.bnt_game_hd=null;
		    this.bnt_new_user=null;
		    this.btn_recharge_reward=null;
		    this.btn_vip=null;
		    this.onLine=null;
		    this.bnt_show=null;
		    this.btn_autohook=null;
		    this.btn_lock=null;
		    this.petState_btn=null;
		    this.pet_lock=null;
		    this.headinfo_img=null;
		    this.bnt_role=null;
		    this.btn_bag0=null;
		    this.btn_get_item=null;
		    this.chat_node=null;
		    this.infoStateBaox=null;
		    this.fpsLab=null;
		    this.delayLab=null;
		    this.img_bottomleft=null;
		    this.drug_item_bg=null;
		    this.Drug_bg=null;
		    this.Drug_0=null;
		    this.Drug_1=null;
		    this.Drug_2=null;
		    this.Drug_3=null;
		    this.Drug_4=null;
		    this.Drug_5=null;
		    this.chat_bg=null;
		    this.chat_list=null;
		    this.img_changeChat=null;
		    this.btn_public=null;
		    this.btn_guild=null;
		    this.btn_troops=null;
		    this.btn_siliao=null;
		    this.btn_chatChange=null;
		    this.btn_chat=null;
		    this.show_drug_kuang=null;
		    this.img_exp=null;
		    this.lbl_exp=null;
		    this.panel_head=null;
		    this.img_hp=null;
		    this.img_mp=null;
		    this.lbl_level=null;
		    this.lbl_mp=null;
		    this.lbl_hp=null;
		    this.lbl_att_type=null;
		    this.panel_att_type=null;
		    this.atttype_all=null;
		    this.atttype_couple=null;
		    this.atttype_guild=null;
		    this.atttype_mentor=null;
		    this.atttype_peace=null;
		    this.atttype_red=null;
		    this.atttype_team=null;
		    this.heroatt_btn=null;
		    this.auto_pick=null;
		    this.hint_bg=null;
		    this.showbonus=null;
		    this.img_mail_Logo=null;
		    this.img_friend_hint=null;
		    this.img_team_hint=null;
		    this.img_red_hint=null;
		    this.img_guild_hint=null;
		    this.npc_tipBubble=null;
		    this.npcBubbleName=null;
		    this.btn_btnList=null;
		    this.btn_set=null;
		    this.btn_hanghui=null;
		    this.btn_jiaoyi=null;
		    this.btn_team=null;
		    this.btn_friend=null;
		    this.btn_redpack=null;
		    this.btn_baitan=null;
		    this.btn_zhaomu=null;
		    this.btn_social=null;
		    this.panel_att=null;
		    this.btn_att=null;
		    this.btn_storm=null;
		    this.btn_off_target=null;
		    this.ta_gmtest=null;
		    this.btn_gm_gb=null;
		    this.btn_gm_qk=null;
		    this.btn_position=null;
		    this.btn_qing=null;
		    this.topSp=null;
		    this.rightSp=null;
		    this.bottomSp=null;
		    this.leftSp=null;

			GameMainUI.__super.call(this);
		}

		CLASS$(GameMainUI,'ui.GameMainUI',_super);
		var __proto__=GameMainUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameMainUI.uiView);

		}

		GameMainUI.uiView={"type":"View","props":{"x":0,"width":1136,"top":0,"right":0,"mouseThrough":true,"left":0,"height":600,"bottom":0},"child":[{"type":"Image","props":{"width":10,"var":"role_head","top":0,"left":0,"height":10},"child":[{"type":"Image","props":{"y":217,"x":1,"visible":false,"var":"herohead_bg","name":"herohead_bg"},"child":[{"type":"Image","props":{"skin":"gameres/png/hero_blood_bg.png","alpha":1},"child":[{"type":"Image","props":{"y":49,"x":43,"width":0,"var":"hero_power","skin":"gameres/png/hero_power.png","name":"hero_power","height":9}},{"type":"Image","props":{"y":40,"x":49,"width":113,"var":"hero_exp","skin":"gameres/png/hero_exp.png","name":"hero_exp","height":9}},{"type":"Image","props":{"y":30,"x":52,"width":110,"var":"hero_mp","skin":"gameres/png/hero_mp.png","name":"hero_mp","height":9}},{"type":"Image","props":{"y":20,"x":48,"width":115,"var":"hero_hp","skin":"gameres/png/hero_hp.png","name":"hero_hp","height":9}},{"type":"Image","props":{"y":0,"x":0,"skin":"gameres/png/herohead_bg.png"}},{"type":"Image","props":{"y":3,"x":-2,"var":"herohead_sex","skin":"gameres/ui/herohead0.png","name":"herohead_sex"}}]},{"type":"Text","props":{"y":2,"x":38,"width":125,"var":"hero_name","text":"英雄","strokeColor":"#000000","stroke":2,"overflow":"hidden","name":"hero_name","height":16,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":59,"x":41,"text":"忠诚度","strokeColor":"#000000","stroke":2,"fontSize":12,"color":"#ffffff"}},{"type":"Text","props":{"y":59,"x":79,"width":32,"var":"hero_loyal","text":"0.0","strokeColor":"#000000","stroke":2,"name":"hero_loyal","height":12,"fontSize":12,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":17,"x":51,"width":111,"var":"lbl_herohp","valign":"middle","text":"300/300","strokeColor":"#000000","stroke":2,"name":"lbl_herohp","height":12,"fontSize":12,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":28,"x":52,"width":111,"var":"lbl_heromp","valign":"middle","text":"200/200","strokeColor":"#000000","stroke":2,"name":"lbl_heromp","height":12,"fontSize":12,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":58,"x":2,"width":22,"var":"hero_level","valign":"middle","text":"99","name":"hero_level","fontSize":12,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"visible":false,"var":"targethead_bg","top":5,"name":"targethead_bg","left":418},"child":[{"type":"Image","props":{"y":30,"x":40,"width":137,"var":"target_hpBar","skin":"gameres/png/target_blood.png","name":"target_hpBar","height":10}},{"type":"Image","props":{"y":0,"x":0,"width":180,"skin":"gameres/png/target_head.png","height":50}},{"type":"Image","props":{"y":8,"x":1,"width":43,"var":"target_job","skin":"gameres/ui/target_ds.png","name":"target_job","height":34}},{"type":"Text","props":{"y":25,"x":44,"width":128,"var":"target_hpNum","valign":"middle","text":"300/300","strokeColor":"#000000","stroke":2,"name":"target_hpNum","height":0,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":35,"x":2,"width":46,"var":"target_level","valign":"middle","text":"99999","name":"target_level","height":12,"color":"#ffffff","align":"center"}},{"type":"Sprite","props":{"y":8,"x":44,"width":128,"var":"target_sp","name":"target_sp","height":20},"child":[{"type":"Text","props":{"y":1,"x":0,"width":128,"var":"target_name","valign":"middle","text":"鸡","strokeColor":"#000000","stroke":2,"name":"target_name","height":20,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Button","props":{"y":50,"x":1,"var":"btn_tarbuff","stateNum":2,"skin":"gameres/ui/btn_buff.png","scaleY":0.9,"scaleX":0.9,"name":"btn_tarbuff"}}]},{"type":"Image","props":{"y":1,"x":1,"width":286,"skin":"gameres/png/img_main_goldbg.png","height":29},"child":[{"type":"Image","props":{"y":2,"x":21,"var":"img_showgold","skin":"gameres/ui/00003.png","scaleY":0.8,"scaleX":0.8,"name":"img_showgold"}},{"type":"Image","props":{"y":2,"x":153,"var":"img_showgold1","skin":"gameres/ui/00002.png","scaleY":0.8,"scaleX":0.8,"name":"img_showgold1"}},{"type":"Text","props":{"y":7,"x":104,"width":50,"var":"txt_showgold","text":"9999W","name":"txt_showgold","height":18,"fontSize":14,"color":"#edc98a"}},{"type":"Text","props":{"y":7,"x":232,"width":54,"var":"txt_showgold1","text":"9999W","name":"txt_showgold1","height":18,"fontSize":14,"color":"#edc98a"}},{"type":"Text","props":{"y":7,"x":50,"width":38,"var":"txt_showgoldname","text":"元元宝:","name":"txt_showgoldname","height":18,"fontSize":14,"color":"#edc98a"}},{"type":"Text","props":{"y":7,"x":184,"width":38,"var":"txt_showgoldname1","text":"游戏点:","name":"txt_showgoldname1","height":18,"fontSize":14,"color":"#edc98a"}}]},{"type":"Button","props":{"y":289,"x":0,"width":36,"visible":false,"var":"herocall_btn","stateNum":2,"skin":"gameres/ui/herocall_btn.png","name":"herocall_btn","height":38}},{"type":"Image","props":{"x":36,"width":159,"visible":false,"var":"hero_panel","top":289,"right":-184,"name":"hero_panel","mouseThrough":true,"height":38},"child":[{"type":"Button","props":{"y":1,"x":80,"width":36,"visible":true,"var":"herobag_btn","stateNum":2,"skin":"gameres/ui/herobag_btn.png","name":"herobag_btn","height":38}},{"type":"Button","props":{"y":1,"x":40,"width":36,"visible":true,"var":"herolock_btn","stateNum":2,"skin":"gameres/ui/herolock_btn.png","name":"herolock_btn","height":38}},{"type":"Button","props":{"y":1,"x":120,"width":36,"visible":true,"var":"herostate_btn","stateNum":2,"skin":"gameres/ui/herostate_btn1.png","name":"herostate_btn","height":38}},{"type":"Button","props":{"y":1,"x":0,"width":36,"visible":true,"var":"heroguard_btn","stateNum":2,"skin":"gameres/ui/heroguard_btn.png","name":"heroguard_btn","labelColors":"#ffffff","height":38}}]},{"type":"Button","props":{"y":1,"x":295,"var":"btn_selfbuff","stateNum":2,"skin":"gameres/ui/btn_buff.png","name":"btn_selfbuff"}},{"type":"Image","props":{"y":83,"x":257,"visible":false,"var":"bg_buff","skin":"gameres/ui/auctionTip_bg.png","name":"bg_buff"},"child":[{"type":"Button","props":{"y":-24,"x":305,"var":"btn_closebuff","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_closebuff"}},{"type":"List","props":{"y":9,"x":7,"width":310,"var":"list_buffinfo","name":"list_buffinfo","height":171},"child":[{"type":"Box","props":{"y":0,"x":0,"width":310,"renderType":"render","height":40},"child":[{"type":"Sprite","props":{"y":4,"x":0,"var":"buff_ani","name":"buff_ani"}},{"type":"Text","props":{"y":21,"x":40,"width":269,"var":"buff_info","text":"buff说明文字，不能超过格子长度","name":"buff_info","height":12,"fontSize":14,"color":"#d2d2d2"}},{"type":"Text","props":{"y":0,"x":40,"width":106,"var":"buff_name","text":"buff名字","name":"buff_name","height":12,"fontSize":14,"color":"#eacd45"}},{"type":"Text","props":{"y":1,"x":247,"width":63,"var":"buff_time","text":"xxx分xx秒","name":"buff_time","height":12,"fontSize":14,"color":"#2aff2f"}},{"type":"Image","props":{"x":40,"width":270,"skin":"gameres/ui/auction_line.png","bottom":0}}]}]}]}]},{"type":"Image","props":{"y":172,"x":431,"width":266,"visible":false,"var":"target_menu","skin":"gameres/png/target_menu.png","name":"target_menu","height":202},"child":[{"type":"Text","props":{"y":15,"x":36,"width":189,"var":"target_menu_name","valign":"middle","text":"鸡","strokeColor":"#000000","stroke":2,"name":"target_menu_name","height":18,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":47,"x":29,"width":87,"var":"menu_info","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"menu_info","labelSize":14,"labelColors":"#ffffff","label":"查看信息","height":30}},{"type":"Button","props":{"y":98,"x":29,"width":87,"var":"menu_friend","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"menu_friend","labelSize":14,"labelColors":"#ffffff","label":"加为好友","height":30}},{"type":"Button","props":{"y":149,"x":29,"width":87,"var":"menu_team","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"menu_team","labelSize":14,"labelColors":"#ffffff","label":"邀请组队","height":30}},{"type":"Button","props":{"y":47,"x":142,"width":87,"var":"menu_chat","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"menu_chat","labelSize":14,"labelColors":"#ffffff","label":"私  聊","height":30}},{"type":"Button","props":{"y":98,"x":143,"width":87,"var":"menu_shield","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"menu_shield","labelSize":14,"labelColors":"#ffffff","label":"屏蔽发言","height":30}},{"type":"Button","props":{"y":149,"x":143,"width":87,"var":"menu_guild","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"menu_guild","labelSize":14,"labelColors":"#ffffff","label":"邀请入会","height":30}}]},{"type":"Image","props":{"var":"panel_node","top":0,"right":0,"name":"panel_node","mouseThrough":true,"left":-3,"bottom":0},"child":[{"type":"Image","props":{"var":"img_mini","top":0,"skin":"gameres/ui/minimapkuang.png","sizeGrid":"27,31,15,30","scaleY":1.05,"scaleX":1.05,"right":0,"name":"img_mini"},"child":[{"type":"Image","props":{"width":197,"scaleY":0.6,"scaleX":0.6,"height":125,"centerY":1,"centerX":0}},{"type":"Text","props":{"y":100,"x":28,"valign":"middle","name":"lbl_role_pos","fontSize":16,"color":"#d1af00","align":"center"}},{"type":"Panel","props":{"width":121,"var":"pl_mini","right":0,"name":"pl_mini","height":105,"bottom":0}},{"type":"Label","props":{"y":4,"x":3,"width":95,"var":"lbl_map_name","valign":"middle","top":4,"text":"小地图","strokeColor":"#000000","stroke":2,"right":30,"overflow":"hidden","name":"lbl_map_name","height":22,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":109,"x":62,"width":60,"var":"lbl_map_grid","valign":"middle","top":114,"text":"999,999","strokeColor":"#000000","stroke":2,"right":5,"name":"lbl_map_grid","height":16,"fontSize":14,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":109,"x":2,"width":60,"var":"lbl_map_safe","valign":"middle","top":114,"text":"安全区域","strokeColor":"#000000","stroke":2,"name":"lbl_map_safe","height":16,"fontSize":14,"color":"#47ff00","align":"center"}},{"type":"Button","props":{"y":65,"x":-31,"var":"btn_openmini","stateNum":2,"skin":"gameres/ui/minimapjian.png","name":"btn_openmini"}}]},{"type":"Image","props":{"width":315,"var":"btn_list","top":-1,"right":168,"mouseThrough":true,"height":140},"child":[{"type":"Button","props":{"y":70,"x":126,"width":55,"var":"btn_rank_list","stateNum":2,"skin":"gameres/ui/btn_new.png","name":"btn_rank_list","height":55}},{"type":"Button","props":{"y":70,"x":62,"width":55,"var":"bnt_shop","stateNum":2,"skin":"gameres/ui/btn_shagnc.png","name":"bnt_shop","height":55}},{"type":"Button","props":{"y":10,"x":62,"width":55,"visible":true,"var":"bnt_chongzi","stateNum":2,"skin":"gameres/ui/btn_recherage.png","name":"bnt_chongzi","height":55}},{"type":"Button","props":{"y":10,"x":126,"width":55,"var":"bnt_bysc","stateNum":2,"skin":"gameres/ui/btn_shop.png","name":"bnt_bysc","height":55}},{"type":"Button","props":{"y":10,"x":190,"width":55,"var":"bnt_game_fl","stateNum":2,"skin":"gameres/ui/btn_fuli.png","name":"bnt_game_fl","height":55}},{"type":"Button","props":{"y":10,"x":254,"width":55,"var":"bnt_game_hd","stateNum":2,"skin":"gameres/ui/btn_active.png","name":"bnt_game_hd","height":55}},{"type":"Button","props":{"y":70,"x":254,"width":55,"visible":true,"var":"bnt_new_user","stateNum":2,"skin":"gameres/ui/btn_new_user.png","name":"bnt_new_user","labelColors":"#ffffff","height":55}},{"type":"Button","props":{"y":70,"x":190,"width":55,"visible":true,"var":"btn_recharge_reward","stateNum":2,"skin":"gameres/ui/btn_recharge_first.png","name":"btn_recharge_reward","labelColors":"#ffffff","height":55}},{"type":"Button","props":{"y":10,"x":-2,"width":55,"var":"btn_vip","stateNum":2,"skin":"gameres/ui/btn_vip.png","name":"btn_vip","height":55}},{"type":"Button","props":{"y":70,"x":-2,"width":55,"var":"onLine","stateNum":2,"skin":"gameres/ui/btn_online.png","name":"onLine","labelSize":15,"labelColors":"#ffffff","height":55}}]},{"type":"Button","props":{"var":"bnt_show","top":2,"stateNum":2,"skin":"gameres/ui/map_showbtn1.png","scaleY":1,"scaleX":1,"right":131,"name":"bnt_show"}},{"type":"Button","props":{"var":"btn_autohook","top":240,"stateNum":2,"skin":"gameres/ui/guaji.png","right":76}},{"type":"Button","props":{"var":"btn_lock","top":245,"stateNum":1,"skin":"gameres/ui/btn_lock.png","right":149,"name":"btn_lock"}},{"type":"Button","props":{"width":49,"visible":false,"var":"petState_btn","top":246,"stateNum":2,"skin":"gameres/ui/btn_petstate.png","right":221,"name":"petState_btn","height":49}},{"type":"Button","props":{"width":49,"visible":false,"var":"pet_lock","top":300,"stateNum":2,"skin":"gameres/ui/herolock_btn.png","right":221,"name":"pet_lock","height":49}},{"type":"Button","props":{"width":64,"var":"headinfo_img","top":143,"stateNum":2,"skin":"gameres/ui/head_img-00.png","right":0,"name":"headinfo_img","height":78}},{"type":"Button","props":{"var":"bnt_role","top":230,"stateNum":2,"skin":"gameres/ui/btn_juese.png","right":0,"name":"bnt_role"}},{"type":"Button","props":{"y":157,"x":999,"var":"btn_bag0","top":157,"stateNum":2,"skin":"gameres/ui/btn_bag.png","right":76,"name":"btn_bag0","labelColors":"#"},"child":[{"type":"Image","props":{"x":0,"visible":false,"skin":"gameres/ui/img_hint.png","scaleY":0.8,"scaleX":0.8,"name":"img_hint","bottom":0}}]},{"type":"Button","props":{"y":157,"x":918,"width":64,"var":"btn_get_item","top":157,"stateNum":2,"skin":"gameres/ui/humma.png","right":157,"name":"btn_get_item","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"SimSun","labelColors":"#ffffff","height":64}}]},{"type":"Image","props":{"width":450,"var":"chat_node","name":"chat_node","height":58,"centerX":50,"bottom":115},"child":[{"type":"Image","props":{"width":433,"skin":"gameres/png/img_bottombg.png","sizeGrid":"8,12,7,15","right":-503,"name":"img_bottomleft","height":23,"bottom":-117,"anchorX":0},"child":[{"type":"Box","props":{"var":"infoStateBaox","right":232,"name":"infoStateBaox","bottom":4},"child":[{"type":"Label","props":{"visible":false,"text":"FPS:","strokeColor":"#101010","stroke":2,"fontSize":14,"color":"#ffffff"}},{"type":"Label","props":{"y":0,"x":35,"visible":false,"var":"fpsLab","text":"60","strokeColor":"#101010","stroke":2,"name":"fpsLab","fontSize":14,"color":"#10bb24"}},{"type":"Label","props":{"y":0,"x":48,"text":"PING:","strokeColor":"#101010","stroke":2,"fontSize":14,"color":"#f6f6f6"}},{"type":"Label","props":{"y":0,"x":89,"var":"delayLab","text":"60ms","strokeColor":"#101010","stroke":2,"name":"delayLab","fontSize":14,"color":"#10bb24"}}]}]},{"type":"Image","props":{"y":150,"x":-163,"width":323,"var":"img_bottomleft","skin":"gameres/png/img_bottombg.png","sizeGrid":"8,12,7,8","name":"img_bottomleft","height":23,"anchorX":1}},{"type":"Image","props":{"width":373,"var":"drug_item_bg","top":12,"name":"drug_item_bg","left":73,"height":48},"child":[{"type":"Image","props":{"width":373,"var":"Drug_bg","mouseThrough":true,"height":48},"child":[{"type":"Image","props":{"y":0,"x":0,"width":40,"skin":"gameres/ui/drug_kuang.png","height":40}},{"type":"Image","props":{"y":0,"x":50,"width":40,"skin":"gameres/ui/drug_kuang.png","height":40}},{"type":"Image","props":{"y":0,"x":100,"width":40,"skin":"gameres/ui/drug_kuang.png","height":40}},{"type":"Image","props":{"y":0,"x":150,"width":40,"skin":"gameres/ui/drug_kuang.png","height":40}},{"type":"Image","props":{"y":0,"x":200,"width":40,"skin":"gameres/ui/drug_kuang.png","height":40}},{"type":"Image","props":{"y":0,"x":250,"width":40,"skin":"gameres/ui/drug_kuang.png","height":40}},{"type":"Button","props":{"y":0,"x":0,"width":40,"var":"Drug_0","name":"0","labelColors":"#f9f3f3","height":40}},{"type":"Button","props":{"y":0,"x":50,"width":40,"var":"Drug_1","name":"1","labelColors":"#f9f3f3","height":40}},{"type":"Button","props":{"y":0,"x":100,"width":40,"var":"Drug_2","name":"2","labelColors":"#f9f3f3","height":40}},{"type":"Button","props":{"y":0,"x":150,"width":40,"var":"Drug_3","name":"3","labelColors":"#f9f3f3","height":40}},{"type":"Button","props":{"y":0,"x":200,"width":40,"var":"Drug_4","name":"4","labelColors":"#f9f3f3","height":40}},{"type":"Button","props":{"y":0,"x":250,"width":40,"var":"Drug_5","name":"5","labelColors":"#f9f3f3","height":40}}]}]},{"type":"Image","props":{"y":65,"var":"chat_bg","skin":"gameres/png/gamemain_chat_bg.png","sizeGrid":"10,10,10,10","right":0,"name":"chat_bg","left":-7},"child":[{"type":"List","props":{"y":3,"x":3,"width":450,"var":"chat_list","name":"chat_list","height":84}},{"type":"Image","props":{"y":-198,"x":-25,"visible":false,"var":"img_changeChat","scaleY":1.2,"scaleX":1.2},"child":[{"type":"Button","props":{"width":70,"var":"btn_public","stateNum":2,"skin":"gameres/ui/gamemain_chat_public.png","name":"public","height":31}},{"type":"Button","props":{"y":31,"width":70,"var":"btn_guild","stateNum":2,"skin":"gameres/ui/gamemain_chat_guild.png","name":"guild","height":31}},{"type":"Button","props":{"y":62,"width":70,"var":"btn_troops","stateNum":2,"skin":"gameres/ui/gamemain_chat_troops.png","name":"troops","height":31}},{"type":"Button","props":{"y":93,"width":70,"var":"btn_siliao","stateNum":2,"skin":"gameres/ui/gamemain_chat_siliao.png","name":"siliao","height":31}}]},{"type":"Button","props":{"y":-49,"x":23,"width":34,"var":"btn_chatChange","stateNum":2,"skin":"gameres/ui/chat_public.png","scaleY":1.2,"scaleX":1.2,"name":"chatChange","height":34}},{"type":"Button","props":{"y":-49,"x":40,"width":34,"visible":false,"var":"btn_chat","stateNum":2,"skin":"gameres/ui/img_chat.png","scaleY":1.2,"scaleX":1.2,"height":34}}]},{"type":"Button","props":{"y":12,"x":382,"var":"show_drug_kuang","stateNum":1,"skin":"gameres/ui/hero_suo.png","scaleY":0.8,"scaleX":0.8,"name":"show_drug_kuang"}},{"type":"Image","props":{"y":155,"x":-3,"width":449,"var":"img_exp","skin":"gameres/png/pro_base.png","name":"img_exp","height":13}},{"type":"Label","props":{"y":155,"x":183,"var":"lbl_exp","text":"415644/5415","strokeColor":"#000000","stroke":1,"name":"lbl_exp","fontSize":14,"color":"#f4ce8e","centerX":-24,"bottom":-111}},{"type":"Image","props":{"var":"panel_head","right":613,"name":"panel_head","mouseThrough":true,"bottom":27},"child":[{"type":"Image","props":{"y":24,"x":86,"width":40,"skin":"gameres/png/gamemain_mp_blue.png","height":78}},{"type":"Image","props":{"y":24,"x":39,"width":40,"skin":"gameres/png/gamemain_hp_red.png","height":78,"anchorY":0}},{"type":"Image","props":{"y":23,"x":41,"width":40,"var":"img_hp","skin":"gameres/ui/000000.png","name":"img_hp","height":0}},{"type":"Image","props":{"y":24,"x":85,"width":40,"var":"img_mp","skin":"gameres/ui/000000.png","name":"img_mp","height":0}},{"type":"Image","props":{"y":2,"x":-4,"skin":"gameres/png/gamemain_hum_blood_bg.png"}},{"type":"Image","props":{"y":121,"x":-96,"skin":"gameres/png/img_charlevel.png"}},{"type":"Text","props":{"y":119,"x":-59,"width":56,"var":"lbl_level","valign":"middle","text":"999","strokeColor":"#000000","stroke":2,"name":"lbl_level","height":22,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":125,"x":102,"width":45,"var":"lbl_mp","valign":"middle","text":"200/200","strokeColor":"#000000","stroke":2,"name":"lbl_mp","fontSize":12,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":125,"x":37,"width":45,"var":"lbl_hp","valign":"middle","text":"300/300","strokeColor":"#000000","stroke":2,"name":"lbl_hp","height":0,"fontSize":12,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":89,"x":116,"var":"lbl_att_type","stateNum":1,"skin":"gameres/ui/atttype_peace.png","name":"lbl_att_type","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Panel","props":{"y":-175,"x":117.5,"width":38,"visible":false,"var":"panel_att_type","name":"panel_att_type","height":265},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"atttype_all","stateNum":1,"skin":"gameres/ui/atttype_all.png","name":"atttype_all","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Button","props":{"y":38,"x":0,"var":"atttype_couple","stateNum":1,"skin":"gameres/ui/atttype_couple.png","name":"atttype_couple","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Button","props":{"y":76,"x":0,"var":"atttype_guild","stateNum":1,"skin":"gameres/ui/atttype_guild.png","name":"atttype_guild","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Button","props":{"y":115,"x":0,"var":"atttype_mentor","stateNum":1,"skin":"gameres/ui/atttype_mentor.png","name":"atttype_mentor","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Button","props":{"y":153,"x":0,"var":"atttype_peace","stateNum":1,"skin":"gameres/ui/atttype_peace.png","name":"atttype_peace","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Button","props":{"y":191,"x":0,"var":"atttype_red","stateNum":1,"skin":"gameres/ui/atttype_red.png","name":"atttype_red","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}},{"type":"Button","props":{"y":229,"x":0,"var":"atttype_team","stateNum":1,"skin":"gameres/ui/atttype_team.png","name":"atttype_team","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff"}}]}]},{"type":"Image","props":{"y":98,"x":450,"skin":"gameres/ui/img_heroattack.png","left":450}},{"type":"Button","props":{"y":117,"visible":false,"var":"heroatt_btn","stateNum":1,"skin":"gameres/ui/btn_heroheji.png","name":"heroatt_btn","left":455}},{"type":"Button","props":{"width":36,"visible":true,"var":"auto_pick","top":12,"stateNum":2,"skin":"gameres/ui/auto_pick.png","scaleY":1.2,"scaleX":1.2,"right":25,"name":"auto_pick","height":38}},{"type":"Image","props":{"y":-40,"x":73,"width":300,"var":"hint_bg","name":"hint_bg","height":40},"child":[{"type":"Image","props":{"y":0,"x":0,"width":40,"visible":false,"var":"showbonus","name":"showbonus","height":40}},{"type":"Image","props":{"y":0,"x":40,"width":40,"visible":false,"var":"img_mail_Logo","name":"img_mail_Logo","height":40}},{"type":"Image","props":{"y":0,"x":80,"width":40,"visible":false,"var":"img_friend_hint","name":"img_friend_hint","height":40}},{"type":"Image","props":{"y":0,"x":120,"width":40,"visible":false,"var":"img_team_hint","name":"img_team_hint","height":40}},{"type":"Image","props":{"y":0,"x":160,"width":40,"visible":false,"var":"img_red_hint","name":"img_red_hint","height":40}},{"type":"Image","props":{"y":0,"x":200,"width":40,"visible":false,"var":"img_guild_hint","name":"img_guild_hint","height":40}}]},{"type":"Image","props":{"y":-116,"x":344,"var":"npc_tipBubble","skin":"gameres/ui/npc_tipBubble.png","name":"npc_tipBubble"},"child":[{"type":"Label","props":{"y":18,"var":"npcBubbleName","name":"npcBubbleName","fontSize":16,"color":"#ffffff","centerX":0,"align":"center"}}]}]},{"type":"Image","props":{"width":224,"var":"btn_btnList","right":-400,"name":"btn_btnList","mouseThrough":true,"height":273,"bottom":24},"child":[{"type":"Button","props":{"y":72,"x":151,"var":"btn_set","stateNum":2,"skin":"gameres/ui/btn_set.png","name":"btn_set"}},{"type":"Button","props":{"y":4,"x":10,"var":"btn_hanghui","stateNum":2,"skin":"gameres/ui/btn_hanghui.png","name":"btn_hanghui"}},{"type":"Button","props":{"y":4,"x":81,"var":"btn_jiaoyi","stateNum":2,"skin":"gameres/ui/btn_jiaoyi.png","name":"btn_jiaoyi"}},{"type":"Button","props":{"y":531,"x":242,"width":64,"var":"btn_team","stateNum":2,"skin":"gameres/ui/btn_team.png","name":"btn_team","height":64}},{"type":"Button","props":{"y":536,"x":340,"width":64,"var":"btn_friend","stateNum":2,"skin":"gameres/ui/btn_guanxi.png","name":"btn_friend","height":64}},{"type":"Button","props":{"y":535,"x":138,"width":64,"var":"btn_redpack","stateNum":2,"skin":"gameres/ui/btn_redpack.png","name":"btn_redpack","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"SimSun","labelColors":"#ffffff","height":64}},{"type":"Button","props":{"y":72,"x":81,"width":64,"var":"btn_baitan","stateNum":2,"skin":"gameres/ui/btn_baitan.png","name":"btn_baitan","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"SimSun","labelColors":"#ffffff,#ffffff","height":64}},{"type":"Button","props":{"y":72,"x":10,"width":64,"visible":true,"var":"btn_zhaomu","stateNum":2,"skin":"gameres/ui/btn_mail.png","name":"btn_zhaomu","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"SimSun","labelColors":"#ffffff,#ffffff","height":64}},{"type":"Button","props":{"y":4,"x":151,"var":"btn_social","stateNum":2,"skin":"gameres/ui/btn_shejiao.png","name":"btn_social"}}]},{"type":"Image","props":{"var":"panel_att","top":0,"right":0,"name":"panel_att","mouseThrough":true,"left":0,"bottom":0},"child":[{"type":"Panel","props":{"y":119,"x":188,"width":400,"name":"panel_rotate","mouseThrough":true,"mouseEnabled":false,"height":400,"alpha":0}},{"type":"Sprite","props":{"y":164,"x":202,"width":300,"name":"scroll_skills","mouseThrough":true,"mouseEnabled":false,"height":300,"alpha":0}},{"type":"Button","props":{"width":115,"var":"btn_att","stateNum":2,"skin":"gameres/ui/btn_att.png","scaleY":0.8,"scaleX":0.8,"right":32,"name":"btn_att","height":115,"bottom":52},"child":[{"type":"Image","props":{"y":-43,"x":-48,"skin":"gameres/png/slidetiparrow.png","scaleY":0.5,"scaleX":0.5}}]},{"type":"Button","props":{"width":115,"var":"btn_storm","stateNum":2,"skin":"gameres/ui/storm.png","scaleY":0.5,"scaleX":0.5,"right":-1,"name":"btn_storm","height":115,"bottom":15}},{"type":"Button","props":{"y":-291,"x":-370,"width":57,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.7,"scaleX":0.7,"name":"btn_item_0","labelColors":"#ffffff","height":57}},{"type":"Button","props":{"y":-285,"x":-443,"width":57,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.7,"scaleX":0.7,"name":"btn_item_1","labelColors":"#ffffff","height":57}},{"type":"Button","props":{"y":-157,"x":-229,"width":64,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.8,"scaleX":0.8,"name":"btn_target","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","label":"锁定","height":64}},{"type":"Button","props":{"y":-256,"x":-507,"width":57,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.7,"scaleX":0.7,"name":"btn_item_2","labelColors":"#","height":57}},{"type":"Button","props":{"y":-150,"x":-387,"width":64,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.8,"scaleX":0.8,"name":"btn_warou","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelFont":"SimSun","labelColors":"#ffffff","label":"挖肉","height":64}},{"type":"Button","props":{"y":-151,"x":-310,"width":64,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.8,"scaleX":0.8,"name":"btn_wakuang","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","label":"挖矿","height":64}},{"type":"Button","props":{"y":-77,"x":-426,"width":46,"visible":false,"stateNum":2,"skin":"gameres/ui/humrun.png","selected":false,"name":"btn_move_type","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":46}},{"type":"Button","props":{"y":-152,"x":-469,"width":64,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.8,"scaleX":0.8,"name":"btn_get_item","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","label":"捡取","height":64}},{"type":"Button","props":{"y":-205,"x":-563,"width":57,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.7,"scaleX":0.7,"name":"btn_item_3","labelColors":"#","height":57}},{"type":"Button","props":{"y":-135,"x":-595,"width":57,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.7,"scaleX":0.7,"name":"btn_item_4","labelColors":"#","height":57}},{"type":"Button","props":{"y":-63,"x":-606,"width":57,"visible":false,"stateNum":2,"skin":"gameres/ui/sroll.png","scaleY":0.7,"scaleX":0.7,"name":"btn_item_5","labelColors":"#","height":57}},{"type":"Button","props":{"y":-74,"x":-361,"width":50,"visible":false,"var":"btn_off_target","stateNum":2,"skin":"gameres/ui/offtarget.png","scaleY":0.8,"scaleX":0.8,"name":"btn_off_target","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":50}}]},{"type":"TextArea","props":{"y":12,"x":262,"width":392,"visible":false,"var":"ta_gmtest","vScrollBarSkin":"gameres/ui/vscroll.png","type":"text","skin":"gameres/png/img_kuang.png","overflow":"scroll","height":391,"color":"#ffffff"},"child":[{"type":"Button","props":{"y":4,"x":282,"var":"btn_gm_gb","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_bonusClose","label":"关闭"}},{"type":"Button","props":{"y":46,"x":280,"var":"btn_gm_qk","stateNum":2,"skin":"gameres/ui/btn_close.png","label":"清空"}}]},{"type":"Button","props":{"width":118,"var":"btn_position","stateNum":2,"skin":"gameres/ui/btn_position.png","scaleY":0.5,"scaleX":0.5,"left":0,"height":118,"bottom":21}},{"type":"Button","props":{"y":3,"x":4,"var":"btn_qing","stateNum":1,"skin":"gameres/ui/head_hide.png"}},{"type":"Sprite","props":{"var":"topSp","name":"topSp"}},{"type":"Sprite","props":{"var":"rightSp","name":"rightSp"}},{"type":"Sprite","props":{"var":"bottomSp","name":"bottomSp"}},{"type":"Sprite","props":{"var":"leftSp","name":"leftSp"}}]};
		return GameMainUI;
	})(View);
var GameSceneUI=(function(_super){
		function GameSceneUI(){
			
		    this.maplayer=null;
		    this.btn_edge=null;

			GameSceneUI.__super.call(this);
		}

		CLASS$(GameSceneUI,'ui.GameSceneUI',_super);
		var __proto__=GameSceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameSceneUI.uiView);

		}

		GameSceneUI.uiView={"type":"View","props":{},"child":[{"type":"Box","props":{"y":-186,"x":99,"var":"maplayer","name":"maplayer"},"child":[{"type":"Button","props":{"y":186,"x":-493,"width":393,"var":"btn_edge","name":"btn_edge","height":500}}]}]};
		return GameSceneUI;
	})(View);
var HangHui2UI=(function(_super){
		function HangHui2UI(){
			
		    this.img_bg=null;
		    this.btn_notice=null;
		    this.btn_rolelist=null;
		    this.btn_waijiao=null;
		    this.btn_chat=null;
		    this.btn_zhaomu=null;
		    this.img_rolelist=null;
		    this.list_title=null;
		    this.btn_title_add=null;
		    this.list_role=null;
		    this.btn_title_set=null;
		    this.btn_title_del=null;
		    this.btn_title_change=null;
		    this.btn_remove_role=null;
		    this.img_notice=null;
		    this.lbl_des_title=null;
		    this.notice_inputImg=null;
		    this.notice_input=null;
		    this.btn_notice_editor=null;
		    this.btn_notice_sumit=null;
		    this.lbl_cnt=null;
		    this.lbl_name=null;
		    this.img_chat=null;
		    this.list_chat=null;
		    this.img_zhaoxian=null;
		    this.list_zhaoxian=null;
		    this.btn_sel_zhan=null;
		    this.btn_sel_fa=null;
		    this.btn_sel_dao=null;
		    this.btn_zhaomu_editor=null;
		    this.btn_zhaomu_zhanshi=null;
		    this.btn_zhaomu_fashi=null;
		    this.btn_zhaomu_daoshi=null;
		    this.lbl_zm_info=null;
		    this.lbl_zm_lv=null;
		    this.btn_zhaomu_ok=null;
		    this.btn_zhaomu_esc=null;
		    this.btn_zhaomu_mdm=null;
		    this.img_waijiao=null;
		    this.list_waijiao=null;
		    this.btn_waijiao_look=null;
		    this.btn_waijiao_add=null;
		    this.btn_waijiao_fight=null;
		    this.btn_waijiao_can=null;
		    this.btn_exit=null;
		    this.img_Editor=null;
		    this.lbl_title=null;
		    this.lbl_desc=null;
		    this.input_str=null;
		    this.btn_ok=null;
		    this.btn_esc=null;
		    this.input_str1=null;
		    this.input_str2=null;
		    this.lbl_input_desc0=null;
		    this.lbl_input_desc1=null;
		    this.btn_exit1=null;
		    this.changetitle=null;
		    this.btn_exit3=null;
		    this.title_list=null;

			HangHui2UI.__super.call(this);
		}

		CLASS$(HangHui2UI,'ui.HangHui2UI',_super);
		var __proto__=HangHui2UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HangHui2UI.uiView);

		}

		HangHui2UI.uiView={"type":"View","props":{"y":0,"x":0,"width":870,"top":0,"scaleY":1,"scaleX":1,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":712,"var":"img_bg","skin":"gameres/png/img_bg.png","sizeGrid":"45,80,100,80","name":"img_bg","height":465,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":61,"x":29,"width":84,"var":"btn_notice","stateNum":2,"skin":"gameres/ui/btn_select_hanghui.png","name":"btn_notice","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffc579,#ffc579","labelBold":true,"label":"公 告","height":42}},{"type":"Button","props":{"y":61,"x":124,"width":84,"var":"btn_rolelist","stateNum":2,"skin":"gameres/ui/btn_select_hanghui.png","name":"btn_rolelist","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffc579,#ffc579","labelBold":true,"label":"成 员","height":42}},{"type":"Button","props":{"y":61,"x":219,"width":84,"var":"btn_waijiao","stateNum":2,"skin":"gameres/ui/btn_select_hanghui.png","name":"btn_waijiao","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffc579,#ffc579","labelBold":true,"label":"外 交","height":42}},{"type":"Button","props":{"y":61,"x":314,"width":84,"var":"btn_chat","stateNum":2,"skin":"gameres/ui/btn_select_hanghui.png","name":"btn_chat","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffc579,#ffc579","labelBold":true,"label":"聊 天","height":42}},{"type":"Button","props":{"y":61,"x":409,"width":84,"var":"btn_zhaomu","stateNum":2,"skin":"gameres/ui/btn_select_hanghui.png","name":"btn_zhaomu","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffc579,#ffc579","labelBold":true,"label":"招 贤","height":42}},{"type":"Image","props":{"y":104,"x":31,"width":651,"var":"img_rolelist","sizeGrid":"26,26,26,20","name":"img_rolelist","height":283},"child":[{"type":"Image","props":{"y":0,"x":1,"width":648,"skin":"gameres/png/hanghuidi.png","sizeGrid":"26,26,26,20","height":37}},{"type":"List","props":{"y":37,"x":6,"width":173,"var":"list_title","name":"list_title","height":214}},{"type":"Button","props":{"y":294,"x":21,"width":100,"var":"btn_title_add","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_title_add","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"添加封号","height":47},"child":[{"type":"List","props":{"y":-246,"x":154,"width":463,"var":"list_role","name":"list_role","height":218}}]},{"type":"Button","props":{"y":294,"x":149,"width":100,"var":"btn_title_set","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_title_set","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"设置封号","height":47}},{"type":"Button","props":{"y":294,"x":277,"width":100,"var":"btn_title_del","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_title_del","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"删除封号","height":47}},{"type":"Button","props":{"y":294,"x":533,"width":100,"var":"btn_title_change","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_title_change","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"转让城主","height":47}},{"type":"Button","props":{"y":294,"x":405,"width":100,"var":"btn_remove_role","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_remove_role","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"踢出工会","height":47}},{"type":"Label","props":{"y":5,"x":70,"text":"称号","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":530,"text":"操作","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":401,"text":"等级","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":344,"text":"性别","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":290,"text":"职业","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":200,"text":"角色名","fontSize":20,"color":"#c69c61"}},{"type":"Image","props":{"y":48,"x":177,"width":1,"skin":"gameres/ui/hanghui_shuxian.png","height":214}}]},{"type":"Image","props":{"y":104,"x":30,"width":652,"var":"img_notice","sizeGrid":"26,26,26,20","name":"img_notice","height":280},"child":[{"type":"Text","props":{"y":12,"x":395,"var":"lbl_des_title","text":"公告内容","strokeColor":"#000000","name":"lbl_des_title","fontSize":20,"color":"#d4d4d4"}},{"type":"Image","props":{"y":44,"x":240,"width":410,"var":"notice_inputImg","height":228},"child":[{"type":"TextArea","props":{"y":5,"x":4,"wordWrap":true,"width":402,"var":"notice_input","vScrollBarSkin":"gameres/ui/vscroll.png","type":"text","text":"TextArea","strokeColor":"#000000","sizeGrid":"2,2,2,,","overflow":"scroll","name":"notice_input","leading":2,"height":220,"fontSize":20,"font":"SimSun","color":"#e0bf94"}}]},{"type":"Button","props":{"y":294,"x":545,"width":100,"var":"btn_notice_editor","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_notice_editor","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"编 辑","height":47}},{"type":"Button","props":{"y":294,"x":441,"width":100,"var":"btn_notice_sumit","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_notice_sumit","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"提 交","height":47}},{"type":"Text","props":{"y":49,"x":3,"text":"行会名称:","fontSize":20,"color":"#e0bf94"}},{"type":"Text","props":{"y":81,"x":3,"text":"行会人数:","overflow":"hidden","fontSize":20,"color":"#e0bf94"}},{"type":"Text","props":{"y":81,"x":93,"var":"lbl_cnt","text":"xxx","name":"lbl_cnt","fontSize":20,"color":"#e0bf94"}},{"type":"Text","props":{"y":49,"x":93,"var":"lbl_name","text":"行会名字七个字","name":"lbl_name","fontSize":20,"color":"#e0bf94"}},{"type":"Label","props":{"y":12,"x":78,"text":"行会信息","fontSize":20,"color":"#d4d4d4"}},{"type":"Image","props":{"y":28,"x":239,"width":1,"skin":"gameres/ui/hanghui_shuxian.png","height":214}}]},{"type":"Image","props":{"y":103,"x":28,"width":655,"var":"img_chat","sizeGrid":"26,26,26,20","name":"img_chat","height":283},"child":[{"type":"List","props":{"y":2,"x":2,"width":644,"var":"list_chat","name":"list_chat","height":254}}]},{"type":"Image","props":{"y":104,"x":31,"width":651,"var":"img_zhaoxian","name":"img_zhaoxian","mouseThrough":false,"height":283},"child":[{"type":"List","props":{"y":41,"x":185,"width":461,"var":"list_zhaoxian","name":"list_zhaoxian","height":210}},{"type":"Button","props":{"y":166,"x":2,"width":20,"var":"btn_sel_zhan","stateNum":2,"skin":"gameres/ui/check.png","name":"btn_sel_zhan","mouseEnabled":false,"labelSize":22,"labelColors":"#ffffff","height":20}},{"type":"Button","props":{"y":166,"x":62,"width":20,"var":"btn_sel_fa","stateNum":2,"skin":"gameres/ui/check.png","name":"btn_sel_fa","mouseEnabled":false,"labelSize":22,"labelColors":"#ffffff","height":20}},{"type":"Button","props":{"y":166,"x":120,"width":20,"var":"btn_sel_dao","stateNum":2,"skin":"gameres/ui/check.png","name":"btn_sel_dao","mouseEnabled":false,"labelSize":22,"labelColors":"#ffffff","height":20}},{"type":"Button","props":{"y":215,"x":55,"width":70,"var":"btn_zhaomu_editor","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_zhaomu_editor","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"编 辑","height":25}},{"type":"Text","props":{"y":166,"x":22,"var":"btn_zhaomu_zhanshi","text":"战士","strokeColor":"#000000","stroke":2,"name":"btn_zhaomu_zhanshi","fontSize":20,"color":"#c69c61"}},{"type":"Text","props":{"y":166,"x":81,"var":"btn_zhaomu_fashi","text":"法师","strokeColor":"#000000","stroke":2,"name":"btn_zhaomu_fashi","fontSize":20,"color":"#c69c61"}},{"type":"Text","props":{"y":166,"x":139,"width":28,"var":"btn_zhaomu_daoshi","text":"道士","strokeColor":"#000000","stroke":2,"name":"btn_zhaomu_daoshi","height":14,"fontSize":20,"color":"#c69c61"}},{"type":"Text","props":{"y":124,"x":3,"text":"等级","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#c69c61"}},{"type":"TextInput","props":{"y":43,"x":11,"wordWrap":true,"width":164,"var":"lbl_zm_info","strokeColor":"#000000","stroke":2,"sizeGrid":"30,30,30,18","padding":"5,5,5,5","name":"lbl_zm_info","mouseEnabled":false,"leading":3,"height":66,"fontSize":14,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16","align":"left"}},{"type":"TextInput","props":{"y":123,"x":45,"width":130,"var":"lbl_zm_lv","text":"1","strokeColor":"#000000","stroke":2,"sizeGrid":"30,30,30,18","name":"lbl_zm_lv","mouseThrough":false,"height":24,"fontSize":20,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16"}},{"type":"Button","props":{"y":215,"x":15,"width":70,"var":"btn_zhaomu_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_zhaomu_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"提 交","height":25}},{"type":"Button","props":{"y":215,"x":98,"width":70,"var":"btn_zhaomu_esc","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_zhaomu_esc","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"取 消","height":25}},{"type":"Button","props":{"y":296,"x":553,"width":100,"var":"btn_zhaomu_mdm","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_zhaomu_mdm","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","label":"招贤","height":47}},{"type":"Image","props":{"y":0,"x":1,"width":648,"skin":"gameres/png/hanghuidi.png","height":37}},{"type":"Label","props":{"y":5,"x":54,"text":"招募信息","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":206,"text":"角色名","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":303,"text":"性别","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":355,"text":"职业","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":414,"text":"等级","fontSize":20,"color":"#c69c61"}},{"type":"Label","props":{"y":5,"x":538,"text":"操作","fontSize":20,"color":"#c69c61"}}]},{"type":"Image","props":{"y":106,"x":32,"width":649,"var":"img_waijiao","sizeGrid":"26,26,26,20","name":"img_waijiao","height":278},"child":[{"type":"List","props":{"y":7,"x":6,"width":172,"var":"list_waijiao","name":"list_waijiao","height":221}},{"type":"Button","props":{"y":290,"x":-2,"width":100,"var":"btn_waijiao_look","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_waijiao_look","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelFont":"Arial","labelColors":"#e2b984,#e2b984","label":"关注行会","height":47}},{"type":"Button","props":{"y":290,"x":128,"width":100,"var":"btn_waijiao_add","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_waijiao_add","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#e2b984,#e2b984","label":"行会结盟","height":47}},{"type":"Button","props":{"y":290,"x":258,"width":100,"var":"btn_waijiao_fight","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_waijiao_fight","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#e2b984,#e2b984","label":"行会宣战","height":47}},{"type":"CheckBox","props":{"y":306,"x":528,"var":"btn_waijiao_can","stateNum":2,"skin":"gameres/ui/btn_sel.png","name":"btn_waijiao_can","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff,#ffffff","label":"允许联盟"}}]},{"type":"Button","props":{"y":7,"x":646,"var":"btn_exit","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.8,"scaleX":0.8,"name":"btn_exit"}},{"type":"Image","props":{"y":109,"x":19,"width":648,"var":"img_Editor","skin":"gameres/png/hanghui2_img_bg_2.png","sizeGrid":"30,65,50,60","name":"img_Editor","height":261},"child":[{"type":"Box","props":{"y":-124,"x":-223,"width":960,"mouseEnabled":false,"height":640}},{"type":"Text","props":{"y":14,"x":202,"width":220,"var":"lbl_title","valign":"middle","text":"cccccccc","strokeColor":"#000000","stroke":2,"name":"lbl_title","height":23,"fontSize":24,"color":"#ddaf52","align":"center"}},{"type":"Text","props":{"y":68,"x":73,"wordWrap":true,"width":480,"var":"lbl_desc","text":"cccccccc","name":"lbl_desc","fontSize":18,"color":"#ddaf52","align":"center"}},{"type":"TextInput","props":{"y":118,"x":66,"width":500,"var":"input_str","sizeGrid":"30,30,30,30","name":"input_str","maxChars":14,"height":25,"fontSize":18,"font":"SimSun","color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16"}},{"type":"Button","props":{"y":197,"x":136,"width":80,"var":"btn_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"label","height":28}},{"type":"Button","props":{"y":197,"x":377,"width":80,"var":"btn_esc","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_esc","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"label","height":28}},{"type":"TextInput","props":{"y":88,"x":66,"width":500,"var":"input_str1","sizeGrid":"30,30,30,30","name":"input_str1","maxChars":14,"height":25,"fontSize":18,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16"}},{"type":"TextInput","props":{"y":148,"x":66,"width":500,"var":"input_str2","sizeGrid":"30,30,30,30","name":"input_str2","maxChars":14,"height":25,"fontSize":18,"color":"#ffffff","borderColor":"#896b4d","bgColor":"#1e1a16"}},{"type":"Text","props":{"y":60,"x":35,"var":"lbl_input_desc0","text":"cccccccc","name":"lbl_input_desc0","fontSize":18,"color":"#ddaf52","align":"center"}},{"type":"Text","props":{"y":121,"x":35,"var":"lbl_input_desc1","text":"cccccccc","name":"lbl_input_desc1","fontSize":18,"color":"#ddaf52","align":"center"}},{"type":"Button","props":{"y":3,"x":607,"var":"btn_exit1","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.8,"scaleX":0.8,"name":"btn_exit1","labelSize":20,"labelColors":"#ffffff"}}]},{"type":"Image","props":{"y":143,"x":140,"var":"changetitle","skin":"gameres/png/hanghui2_img_bg_2.png","name":"changetitle"},"child":[{"type":"Button","props":{"y":-1,"x":318,"var":"btn_exit3","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.8,"scaleX":0.8,"name":"btn_exit3"}},{"type":"List","props":{"y":8,"x":5,"width":312,"var":"title_list","name":"title_list","height":186}}]},{"type":"Image","props":{"y":27,"x":324,"width":65,"skin":"gameres/ui/hanghui_title.png","height":31}}]}]};
		return HangHui2UI;
	})(View);
var HangHui21UI=(function(_super){
		function HangHui21UI(){
			
		    this.img_bg=null;
		    this.bg_guildInfo=null;
		    this.btn_showGuildList=null;
		    this.list_guildChat=null;
		    this.lb_guildInfoChat=null;
		    this.ta_guildNotic=null;
		    this.bg_guildName=null;
		    this.bg_presidentName=null;
		    this.lb_memberNum=null;
		    this.btn_infoEdit=null;
		    this.bg_editGuildInfo=null;
		    this.btn_closeEditInfo=null;
		    this.check_onlyOl=null;
		    this.cb_levelLimit=null;
		    this.ipt_guildName=null;
		    this.ipt_guildNotic=null;
		    this.btn_editGuild=null;
		    this.bg_memberList=null;
		    this.list_guild_title=null;
		    this.btn_memberTitle=null;
		    this.list_guildMember=null;
		    this.img_member_chose=null;
		    this.lb_member_name=null;
		    this.lb_member_position=null;
		    this.lb_member_level=null;
		    this.lb_member_sex=null;
		    this.lb_member_job=null;
		    this.lb_member_online=null;
		    this.btn_addTitle=null;
		    this.btn_editTitle=null;
		    this.btn_delTitle=null;
		    this.btn_quitGuild=null;
		    this.bg_memberInfo=null;
		    this.btn_memberinfo_close=null;
		    this.lb_menberInfo=null;
		    this.btn_memberchat=null;
		    this.btn_jointeam=null;
		    this.btn_settitle=null;
		    this.btn_memberkick=null;
		    this.btn_addfriend=null;
		    this.btn_changePresident=null;
		    this.bg_settitle=null;
		    this.btn_settitle_close=null;
		    this.btn_settitle_ok=null;
		    this.btn_settitle_cancel=null;
		    this.cmb_settitle=null;
		    this.bg_setpresident=null;
		    this.btn_setpresident_close=null;
		    this.btn_setpresident_ok=null;
		    this.btn_setpresident_cancel=null;
		    this.lb_setpresident_end=null;
		    this.lb_setpresident_name=null;
		    this.bg_titledel=null;
		    this.btn_titledel_close=null;
		    this.btn_titledel_ok=null;
		    this.btn_titledel_cancel=null;
		    this.lb_titledel_end=null;
		    this.lb_titledel_name=null;
		    this.bg_memberkick=null;
		    this.btn_memberkick_close=null;
		    this.btn_memberkick_ok=null;
		    this.btn_memberkick_cancel=null;
		    this.lb_memberkick_end=null;
		    this.lb_memberkick_name=null;
		    this.bg_edittitle=null;
		    this.btn_edittitle_close=null;
		    this.btn_edittitle_ok=null;
		    this.btn_edittitle_cancel=null;
		    this.ipt_edittitle_name=null;
		    this.ipt_edittitle_num=null;
		    this.bg_addtitle=null;
		    this.btn_addtitle_close=null;
		    this.btn_addtitle_ok=null;
		    this.btn_addtitle_cancel=null;
		    this.ipt_addtitle_name=null;
		    this.ipt_addtitle_num=null;
		    this.bg_quitGuild=null;
		    this.btn_quitGuild_close=null;
		    this.btn_quitGuild_ok=null;
		    this.btn_quitGuild_cancel=null;
		    this.bg_applyList=null;
		    this.list_apply=null;
		    this.img_apply_chose=null;
		    this.lb_apply_name=null;
		    this.lb_apply_job=null;
		    this.lb_apply_level=null;
		    this.lb_apply_time=null;
		    this.lb_apply_purpose=null;
		    this.lb_apply_online=null;
		    this.btn_apply_cleanList=null;
		    this.btn_apply_ok=null;
		    this.btn_apply_refuse=null;
		    this.bg_relation=null;
		    this.list_relation=null;
		    this.img_relation_chose=null;
		    this.lb_relation_idx=null;
		    this.lb_relation_guildName=null;
		    this.lb_relation_presidentName=null;
		    this.lb_relation_memberNum=null;
		    this.lb_relation_online=null;
		    this.btn_relation_search=null;
		    this.btn_relation_manage=null;
		    this.check_allowAlliance=null;
		    this.bg_relation_manage=null;
		    this.btn_manage_close=null;
		    this.btn_mgt_allance=null;
		    this.btn_mgt_war=null;
		    this.btn_mgt_follow=null;
		    this.bg_search=null;
		    this.btn_search_close=null;
		    this.cmb_search=null;
		    this.btn_search_ok=null;
		    this.btn_search_cancel=null;
		    this.bg_alliance=null;
		    this.btn_alliance_close=null;
		    this.btn_alliance_ok=null;
		    this.btn_alliance_refuse=null;
		    this.lb_alliance_name=null;
		    this.btn_cancel_allance=null;
		    this.btn_cancel_follow=null;
		    this.btn_cancel_war=null;
		    this.btn_exit=null;
		    this.vbtn_info=null;
		    this.vbtn_member=null;
		    this.vbtn_apply=null;
		    this.vbtn_alliance=null;

			HangHui21UI.__super.call(this);
		}

		CLASS$(HangHui21UI,'ui.HangHui21UI',_super);
		var __proto__=HangHui21UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HangHui21UI.uiView);

		}

		HangHui21UI.uiView={"type":"View","props":{"y":0,"x":0,"width":870,"top":0,"scaleY":1,"scaleX":1,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"y":23,"x":57,"width":750,"var":"img_bg","name":"img_bg","height":50},"child":[{"type":"Image","props":{"y":0,"x":19,"visible":true,"var":"bg_guildInfo","skin":"gameres/png/bg_guildInfo.png","name":"bg_guildInfo"},"child":[{"type":"Button","props":{"y":405,"x":575,"var":"btn_showGuildList","stateNum":2,"skin":"gameres/ui/btn_showGuildList.png","name":"btn_showGuildList"}},{"type":"List","props":{"y":70,"x":250,"width":433,"var":"list_guildChat","name":"list_guildChat","height":318},"child":[{"type":"Box","props":{"y":1,"x":1,"width":430,"renderType":"render","height":25},"child":[{"type":"Label","props":{"var":"lb_guildInfoChat","text":"行会聊天信息","strokeColor":"#000000","stroke":1,"name":"lb_guildInfoChat","fontSize":14,"color":"#efe1cf"}}]}]},{"type":"TextArea","props":{"y":234,"x":26,"wordWrap":true,"width":210,"var":"ta_guildNotic","vScrollBarSkin":"gameres/ui/vscroll.png","type":"text","text":"行会公告","strokeColor":"#000000","stroke":2,"sizeGrid":"5,5,5,,","overflow":"scroll","name":"ta_guildNotic","mouseEnabled":false,"leading":2,"height":158,"fontSize":16,"font":"SimSun","editable":false,"color":"#d4d2ce","bold":true}},{"type":"Text","props":{"y":89,"x":30,"text":"行会名称","strokeColor":"#000000","stroke":2,"fontSize":16,"font":"SimHei","color":"#e9e7e4"}},{"type":"Text","props":{"y":124,"x":30,"text":"会长名称","strokeColor":"#000000","stroke":2,"fontSize":16,"font":"SimHei","color":"#e9e7e4"}},{"type":"Text","props":{"y":159,"x":30,"text":"成员数量","strokeColor":"#000000","stroke":2,"fontSize":16,"font":"SimHei","color":"#e9e7e4"}},{"type":"Label","props":{"y":91,"x":108,"width":125,"var":"bg_guildName","text":"名字最长七个字","name":"bg_guildName","height":12,"fontSize":14,"color":"#9c9b9b"}},{"type":"Label","props":{"y":127,"x":108,"width":125,"var":"bg_presidentName","text":"名字最长七个字","name":"bg_presidentName","height":12,"fontSize":14,"color":"#9c9b9b"}},{"type":"Label","props":{"y":163,"x":108,"width":125,"var":"lb_memberNum","text":"55/666","name":"lb_memberNum","height":12,"fontSize":14,"color":"#9c9b9b"}},{"type":"Button","props":{"y":205,"x":195,"var":"btn_infoEdit","stateNum":2,"skin":"gameres/ui/btn_guild_editGuildInfo.png","name":"btn_infoEdit"}},{"type":"Image","props":{"y":89,"x":160,"visible":false,"var":"bg_editGuildInfo","skin":"gameres/png/bg_editguild.png","name":"bg_editGuildInfo"},"child":[{"type":"Button","props":{"y":-22,"x":333,"var":"btn_closeEditInfo","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_closeEditInfo"}},{"type":"Text","props":{"y":11,"x":138,"text":"编  辑  行  会","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#d8d3cf"}},{"type":"Text","props":{"y":63,"x":15,"text":"行会名称：","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Text","props":{"y":105,"x":15,"text":"加入条件","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Text","props":{"y":146,"x":15,"text":"行会公告","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"CheckBox","props":{"y":100,"x":94,"width":155,"var":"check_onlyOl","stateNum":2,"skin":"gameres/ui/box_hanghui.png","name":"check_onlyOl","labelStrokeColor":"#000000","labelStroke":1,"labelSize":14,"labelPadding":"5","labelColors":"#aaa59f","labelBold":true,"labelAlign":"left","label":"自动同意入会申请","height":29}},{"type":"ComboBox","props":{"y":101,"x":253,"width":112,"var":"cb_levelLimit","skin":"gameres/ui/combobox.png","name":"cb_levelLimit","labels":"40级以上,60级以上,80级以上,100级以上,120级以上","height":28}},{"type":"TextInput","props":{"y":60,"x":97,"width":168,"var":"ipt_guildName","text":"名字最长七个字","skin":"gameres/ui/logininput.png","name":"ipt_guildName","mouseEnabled":false,"height":26,"fontSize":14,"editable":false,"color":"#a6a4a4"}},{"type":"TextInput","props":{"y":146,"x":96,"width":250,"var":"ipt_guildNotic","text":"你还没有写点什么。。。","strokeColor":"#000000","stroke":1,"skin":"gameres/ui/logininput.png","name":"ipt_guildNotic","height":80,"color":"#a6a4a4","align":"left"}},{"type":"Button","props":{"y":234,"x":146,"var":"btn_editGuild","stateNum":2,"skin":"gameres/ui/btn_guild_define.png","name":"btn_editGuild","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581"}}]}]},{"type":"Image","props":{"y":0,"x":19,"visible":false,"var":"bg_memberList","skin":"gameres/png/bg_guild_memberList.png","name":"bg_memberList"},"child":[{"type":"List","props":{"y":72,"x":26,"width":133,"var":"list_guild_title","name":"list_guild_title","height":319},"child":[{"type":"Box","props":{"y":0,"x":0,"width":131,"renderType":"render","height":44},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_memberTitle","stateNum":2,"skin":"gameres/ui/btn_guild_title.png","name":"btn_memberTitle","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelFont":"SimHei","labelColors":"#ede1ae","labelAlign":"center","label":"头衔"}}]}]},{"type":"Text","props":{"y":72,"x":216,"text":"成 员 名 称","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":72,"x":343,"text":"职 位","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":72,"x":405,"text":"等 级","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":72,"x":466,"text":"性 别","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":72,"x":526,"text":"职 业","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":72,"x":611,"text":"状 态","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"List","props":{"y":100,"x":179,"width":504,"var":"list_guildMember","name":"list_guildMember","height":291},"child":[{"type":"Box","props":{"y":1,"x":1,"width":502,"renderType":"render","height":30},"child":[{"type":"Image","props":{"y":0,"x":0,"width":502,"visible":false,"var":"img_member_chose","skin":"gameres/png/bg_guild_choose.png","name":"img_member_chose"}},{"type":"Label","props":{"y":7,"x":3,"width":146,"var":"lb_member_name","text":"名字也是七个字","strokeColor":"#000000","stroke":1,"name":"lb_member_name","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":156,"width":55,"var":"lb_member_position","text":"成员","strokeColor":"#000000","stroke":1,"name":"lb_member_position","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":218,"width":55,"var":"lb_member_level","text":"999","strokeColor":"#000000","stroke":1,"name":"lb_member_level","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":278,"width":57,"var":"lb_member_sex","text":"男","strokeColor":"#000000","stroke":1,"name":"lb_member_sex","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":342,"width":55,"var":"lb_member_job","text":"战士","strokeColor":"#000000","stroke":1,"name":"lb_member_job","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":404,"width":100,"var":"lb_member_online","text":"离线555天","strokeColor":"#000000","stroke":1,"name":"lb_member_online","height":16,"fontSize":16,"color":"#776b5d","align":"center"}}]}]},{"type":"Button","props":{"y":405,"x":184,"var":"btn_addTitle","stateNum":2,"skin":"gameres/ui/btn_guild_addTitle.png","name":"btn_addTitle"}},{"type":"Button","props":{"y":406,"x":313,"var":"btn_editTitle","stateNum":2,"skin":"gameres/ui/btn_guild_edittitle.png","name":"btn_editTitle"}},{"type":"Button","props":{"y":406,"x":443,"var":"btn_delTitle","stateNum":2,"skin":"gameres/ui/btn_guild_delTitle.png","name":"btn_delTitle"}},{"type":"Button","props":{"y":406,"x":572,"var":"btn_quitGuild","stateNum":2,"skin":"gameres/ui/btn_guild_quitGuild.png","name":"btn_quitGuild"}},{"type":"Image","props":{"y":124,"x":176,"visible":false,"var":"bg_memberInfo","skin":"gameres/png/bg_guild_memberinfo.png","name":"bg_memberInfo"},"child":[{"type":"Button","props":{"y":-22,"x":305,"var":"btn_memberinfo_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_memberinfo_close"}},{"type":"Label","props":{"y":15,"x":50,"width":229,"var":"lb_menberInfo","text":"名字最长七个字","strokeColor":"#000000","stroke":2,"name":"lb_menberInfo","height":17,"fontSize":20,"color":"#d8d3cf","align":"center"}},{"type":"Button","props":{"y":107,"x":47,"var":"btn_memberchat","stateNum":2,"skin":"gameres/ui/btn_guild_chat.png","name":"btn_memberchat"}},{"type":"Button","props":{"y":56,"x":47,"var":"btn_jointeam","stateNum":2,"skin":"gameres/ui/btn_guild_jointeam.png","name":"btn_jointeam"}},{"type":"Button","props":{"y":158,"x":184,"var":"btn_settitle","stateNum":2,"skin":"gameres/ui/btn_guild_setTitle.png","name":"btn_settitle"}},{"type":"Button","props":{"y":107,"x":184,"var":"btn_memberkick","stateNum":2,"skin":"gameres/ui/btn_guild_memberkick.png","name":"btn_memberkick"}},{"type":"Button","props":{"y":56,"x":184,"var":"btn_addfriend","stateNum":2,"skin":"gameres/ui/btn_guild_addfriend.png","name":"btn_addfriend"}},{"type":"Button","props":{"y":158,"x":47,"var":"btn_changePresident","stateNum":2,"skin":"gameres/ui/btn_guild_changePresident.png","name":"btn_changePresident"}}]},{"type":"Image","props":{"y":148,"x":191,"visible":false,"var":"bg_settitle","skin":"gameres/png/bg_guild_settitle.png","name":"bg_settitle"},"child":[{"type":"Button","props":{"y":-23,"x":305,"var":"btn_settitle_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_settitle_close"}},{"type":"Label","props":{"y":15,"x":50,"width":229,"text":"设置封号","strokeColor":"#000000","stroke":2,"height":17,"fontSize":20,"color":"#d8d3cf","align":"center"}},{"type":"Button","props":{"y":102,"x":39,"var":"btn_settitle_ok","stateNum":2,"skin":"gameres/ui/btn_guild_define.png","name":"btn_settitle_ok"}},{"type":"Button","props":{"y":102,"x":198,"var":"btn_settitle_cancel","stateNum":2,"skin":"gameres/ui/btn_guild_cancel.png","name":"btn_settitle_cancel"}},{"type":"ComboBox","props":{"y":51,"x":58,"width":219,"var":"cmb_settitle","skin":"gameres/ui/personalstore_combobox.png","sizeGrid":"6,19,4,5","name":"cmb_settitle","height":25}}]},{"type":"Image","props":{"y":148,"x":191,"visible":false,"var":"bg_setpresident","skin":"gameres/png/bg_guild_memberdel.png","name":"bg_setpresident"},"child":[{"type":"Button","props":{"y":-23,"x":305,"var":"btn_setpresident_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_setpresident_close"}},{"type":"Label","props":{"y":15,"x":50,"width":229,"text":"会长转让","strokeColor":"#000000","stroke":2,"height":17,"fontSize":20,"color":"#d8d3cf","align":"center"}},{"type":"Button","props":{"y":102,"x":39,"var":"btn_setpresident_ok","stateNum":2,"skin":"gameres/ui/btn_guild_define.png","name":"btn_setpresident_ok"}},{"type":"Button","props":{"y":102,"x":198,"var":"btn_setpresident_cancel","stateNum":2,"skin":"gameres/ui/btn_guild_cancel.png","name":"btn_setpresident_cancel"}},{"type":"Label","props":{"y":61,"x":42,"text":"你确定将会长转让给","fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":61,"x":297,"var":"lb_setpresident_end","text":"？","name":"lb_setpresident_end","fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":61,"x":185,"var":"lb_setpresident_name","text":"名字最长七个字","name":"lb_setpresident_name","fontSize":16,"color":"#e2b984"}}]},{"type":"Image","props":{"y":148,"x":191,"visible":false,"var":"bg_titledel","skin":"gameres/png/bg_guild_memberdel.png","name":"bg_titledel"},"child":[{"type":"Button","props":{"y":-23,"x":305,"var":"btn_titledel_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_titledel_close"}},{"type":"Label","props":{"y":15,"x":50,"width":229,"text":"删除封号","strokeColor":"#000000","stroke":2,"height":17,"fontSize":20,"color":"#d8d3cf","align":"center"}},{"type":"Button","props":{"y":102,"x":39,"var":"btn_titledel_ok","stateNum":2,"skin":"gameres/ui/btn_guild_define.png","name":"btn_titledel_ok"}},{"type":"Button","props":{"y":102,"x":198,"var":"btn_titledel_cancel","stateNum":2,"skin":"gameres/ui/btn_guild_cancel.png","name":"btn_titledel_cancel"}},{"type":"Label","props":{"y":59,"x":50,"text":"你确定删除","fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":59,"x":242,"var":"lb_titledel_end","text":"封号？","name":"lb_titledel_end","fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":59,"x":130,"var":"lb_titledel_name","text":"名字最长七个字","name":"lb_titledel_name","fontSize":16,"color":"#e2b984"}}]},{"type":"Image","props":{"y":148,"x":191,"visible":false,"var":"bg_memberkick","skin":"gameres/png/bg_guild_memberdel.png","name":"bg_memberkick"},"child":[{"type":"Button","props":{"y":-23,"x":305,"var":"btn_memberkick_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_memberkick_close"}},{"type":"Label","props":{"y":15,"x":50,"width":229,"text":"脱离行会","strokeColor":"#000000","stroke":2,"height":17,"fontSize":20,"color":"#d8d3cf","align":"center"}},{"type":"Button","props":{"y":102,"x":39,"var":"btn_memberkick_ok","stateNum":2,"skin":"gameres/ui/btn_guild_define.png","name":"btn_memberkick_ok"}},{"type":"Button","props":{"y":102,"x":198,"var":"btn_memberkick_cancel","stateNum":2,"skin":"gameres/ui/btn_guild_cancel.png","name":"btn_memberkick_cancel"}},{"type":"Label","props":{"y":59,"x":50,"text":"你确定将","fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":59,"x":226,"var":"lb_memberkick_end","text":"踢出行会？","name":"lb_memberkick_end","fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":59,"x":114,"var":"lb_memberkick_name","text":"名字最长七个字","name":"lb_memberkick_name","fontSize":16,"color":"#e2b984"}}]},{"type":"Image","props":{"y":148,"x":191,"visible":false,"var":"bg_edittitle","skin":"gameres/png/bg_guild_addtitle.png","name":"bg_edittitle"},"child":[{"type":"Button","props":{"y":-23,"x":305,"var":"btn_edittitle_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_edittitle_close"}},{"type":"Label","props":{"y":15,"x":50,"width":229,"text":"编辑封号","strokeColor":"#000000","stroke":2,"height":17,"fontSize":20,"color":"#d8d3cf","align":"center"}},{"type":"Button","props":{"y":130,"x":39,"var":"btn_edittitle_ok","stateNum":2,"skin":"gameres/ui/btn_guild_define.png","name":"btn_edittitle_ok"}},{"type":"Button","props":{"y":130,"x":198,"var":"btn_edittitle_cancel","stateNum":2,"skin":"gameres/ui/btn_guild_cancel.png","name":"btn_edittitle_cancel"}},{"type":"Text","props":{"y":55,"x":33,"text":"封号","stroke":1,"fontSize":16,"color":"#b9b8b6"}},{"type":"Text","props":{"y":96,"x":33,"text":"人数","stroke":1,"fontSize":16,"color":"#b9b8b6"}},{"type":"TextInput","props":{"y":50,"x":74,"width":219,"var":"ipt_edittitle_name","skin":"gameres/ui/logininput.png","name":"ipt_edittitle_name","height":26,"fontSize":14,"color":"#a6a4a4"}},{"type":"TextInput","props":{"y":91,"x":74,"width":219,"var":"ipt_edittitle_num","skin":"gameres/ui/logininput.png","name":"ipt_edittitle_num","height":26,"fontSize":14,"color":"#a6a4a4"}}]},{"type":"Image","props":{"y":139,"x":191,"visible":false,"var":"bg_addtitle","skin":"gameres/png/bg_guild_addtitle.png","name":"bg_addtitle"},"child":[{"type":"Button","props":{"y":-23,"x":305,"var":"btn_addtitle_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_addtitle_close"}},{"type":"Label","props":{"y":15,"x":50,"width":229,"text":"添加封号","strokeColor":"#000000","stroke":2,"height":17,"fontSize":20,"color":"#d8d3cf","align":"center"}},{"type":"Button","props":{"y":130,"x":39,"var":"btn_addtitle_ok","stateNum":2,"skin":"gameres/ui/btn_guild_define.png","name":"btn_addtitle_ok"}},{"type":"Button","props":{"y":130,"x":198,"var":"btn_addtitle_cancel","stateNum":2,"skin":"gameres/ui/btn_guild_cancel.png","name":"btn_addtitle_cancel"}},{"type":"Text","props":{"y":55,"x":33,"text":"封号","stroke":1,"fontSize":16,"color":"#b9b8b6"}},{"type":"Text","props":{"y":96,"x":33,"text":"人数","stroke":1,"fontSize":16,"color":"#b9b8b6"}},{"type":"TextInput","props":{"y":50,"x":74,"width":219,"var":"ipt_addtitle_name","skin":"gameres/ui/logininput.png","promptColor":"#5f5858","prompt":"名字最长七个字","name":"ipt_addtitle_name","height":26,"fontSize":14,"color":"#a6a4a4"}},{"type":"TextInput","props":{"y":91,"x":74,"width":219,"var":"ipt_addtitle_num","type":"number","skin":"gameres/ui/logininput.png","promptColor":"#5f5858","prompt":"封号最大人数","name":"ipt_addtitle_num","height":26,"fontSize":14,"color":"#a6a4a4"}}]},{"type":"Image","props":{"y":158,"x":201,"visible":false,"var":"bg_quitGuild","skin":"gameres/png/bg_guild_memberdel.png","name":"bg_quitGuild"},"child":[{"type":"Button","props":{"y":-23,"x":305,"var":"btn_quitGuild_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_quitGuild_close"}},{"type":"Label","props":{"y":15,"x":50,"width":229,"text":"脱离行会","strokeColor":"#000000","stroke":2,"height":17,"fontSize":20,"color":"#d8d3cf","align":"center"}},{"type":"Button","props":{"y":102,"x":39,"var":"btn_quitGuild_ok","stateNum":2,"skin":"gameres/ui/btn_guild_define.png","name":"btn_quitGuild_ok"}},{"type":"Button","props":{"y":102,"x":198,"var":"btn_quitGuild_cancel","stateNum":2,"skin":"gameres/ui/btn_guild_cancel.png","name":"btn_quitGuild_cancel"}},{"type":"Label","props":{"y":59,"x":92,"text":"你确定退出行会吗？","fontSize":16,"color":"#cdcbc8"}}]}]},{"type":"Image","props":{"y":0,"x":19,"visible":false,"var":"bg_applyList","skin":"gameres/png/bg_guild_applyList.png","name":"bg_applyList"},"child":[{"type":"Text","props":{"y":72,"x":92,"text":"名 称","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":72,"x":216,"text":"职 业","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":72,"x":299,"text":"等 级","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":72,"x":381,"text":"申 请 时 间","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":72,"x":509,"text":"目 的","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":72,"x":606,"text":"状 态","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"List","props":{"y":99,"x":26,"width":659,"var":"list_apply","name":"list_apply","height":293},"child":[{"type":"Box","props":{"y":1,"x":1,"width":657,"renderType":"render","height":30},"child":[{"type":"Image","props":{"y":0,"x":0,"width":657,"visible":false,"var":"img_apply_chose","skin":"gameres/png/bg_guild_choose.png","name":"img_apply_chose"}},{"type":"Label","props":{"y":7,"x":4,"width":156,"var":"lb_apply_name","text":"名字最长七个字","strokeColor":"#000000","stroke":1,"name":"lb_apply_name","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":172,"width":74,"var":"lb_apply_job","text":"战士","strokeColor":"#000000","stroke":1,"name":"lb_apply_job","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":254,"width":77,"var":"lb_apply_level","text":"9999","strokeColor":"#000000","stroke":1,"name":"lb_apply_level","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":342,"width":117,"var":"lb_apply_time","text":"2021-12-12","strokeColor":"#000000","stroke":1,"name":"lb_apply_time","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":466,"width":78,"var":"lb_apply_purpose","text":"加入行会","strokeColor":"#000000","stroke":1,"name":"lb_apply_purpose","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":549,"width":107,"var":"lb_apply_online","text":"离线555小时","strokeColor":"#000000","stroke":1,"name":"lb_apply_online","height":16,"fontSize":16,"color":"#776b5d","align":"center"}}]}]},{"type":"Button","props":{"y":405,"x":82,"var":"btn_apply_cleanList","stateNum":2,"skin":"gameres/ui/btn_guild_cleanList.png","name":"btn_apply_cleanList"}},{"type":"Button","props":{"y":405,"x":423,"var":"btn_apply_ok","stateNum":2,"skin":"gameres/ui/btn_guild_ok.png","name":"btn_apply_ok"}},{"type":"Button","props":{"y":405,"x":561,"var":"btn_apply_refuse","stateNum":2,"skin":"gameres/ui/btn_guild_refuse.png","name":"btn_apply_refuse"}}]},{"type":"Image","props":{"y":0,"x":19,"visible":false,"var":"bg_relation","skin":"gameres/png/bg_guild_relation.png","name":"bg_relation"},"child":[{"type":"Text","props":{"y":73,"x":44,"text":"编 号","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":73,"x":152,"text":"行 会 名 称","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":73,"x":349,"text":"会 长","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":73,"x":490,"text":"人 数","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"Text","props":{"y":73,"x":606,"text":"状 态","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4"}},{"type":"List","props":{"y":99,"x":26,"width":659,"var":"list_relation","name":"list_relation","height":293},"child":[{"type":"Box","props":{"y":1,"x":1,"width":657,"renderType":"render","height":30},"child":[{"type":"Image","props":{"y":0,"x":0,"width":657,"visible":false,"var":"img_relation_chose","skin":"gameres/png/bg_guild_choose.png","name":"img_relation_chose"}},{"type":"Label","props":{"y":7,"x":4,"width":65,"var":"lb_relation_idx","text":"1","strokeColor":"#000000","stroke":1,"name":"lb_relation_idx","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":85,"width":165,"var":"lb_relation_guildName","text":"名字最长七个字","strokeColor":"#000000","stroke":1,"name":"lb_relation_guildName","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":261,"width":165,"var":"lb_relation_presidentName","text":"名字也是七个字","strokeColor":"#000000","stroke":1,"name":"lb_relation_presidentName","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":435,"width":94,"var":"lb_relation_memberNum","text":"9/999","strokeColor":"#000000","stroke":1,"name":"lb_relation_memberNum","height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":7,"x":549,"width":107,"var":"lb_relation_online","text":"中立","strokeColor":"#000000","stroke":1,"name":"lb_relation_online","height":16,"fontSize":16,"color":"#f9f8f4","align":"center"}}]}]},{"type":"Button","props":{"y":405,"x":423,"var":"btn_relation_search","stateNum":2,"skin":"gameres/ui/btn_guild_search.png","name":"btn_relation_search"}},{"type":"Button","props":{"y":405,"x":561,"var":"btn_relation_manage","stateNum":2,"skin":"gameres/ui/btn_guild_relationMng.png","name":"btn_relation_manage"}},{"type":"CheckBox","props":{"y":412,"x":38,"var":"check_allowAlliance","stateNum":2,"skin":"gameres/ui/box_hanghui.png","selected":true,"name":"check_allowAlliance","labelStrokeColor":"#000000","labelStroke":1,"labelSize":14,"labelPadding":"6","labelColors":"#aaa59f","label":"允许联盟"}},{"type":"Image","props":{"y":160,"x":181,"visible":false,"var":"bg_relation_manage","skin":"gameres/png/bg_guild_relation_manage.png","name":"bg_relation_manage"},"child":[{"type":"Button","props":{"y":-23,"x":327,"var":"btn_manage_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_manage_close"}},{"type":"Label","props":{"y":13,"x":60,"width":229,"text":"外交管理","strokeColor":"#000000","stroke":2,"height":17,"fontSize":20,"color":"#d8d3cf","align":"center"}},{"type":"Button","props":{"y":70,"x":238,"var":"btn_mgt_allance","stateNum":2,"skin":"gameres/ui/btn_guild_alliance.png","name":"btn_mgt_allance"}},{"type":"Button","props":{"y":70,"x":122,"var":"btn_mgt_war","stateNum":2,"skin":"gameres/ui/btn_guild_war.png","name":"btn_mgt_war"}},{"type":"Button","props":{"y":70,"x":6,"var":"btn_mgt_follow","stateNum":2,"skin":"gameres/ui/btn_guild_follow.png","name":"btn_mgt_follow"}}]},{"type":"Image","props":{"y":157,"x":185,"visible":false,"var":"bg_search","skin":"gameres/png/bg_guild_search.png","name":"bg_search"},"child":[{"type":"Button","props":{"y":-20.5,"x":306,"var":"btn_search_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_search_close"}},{"type":"ComboBox","props":{"y":70,"x":52,"width":230,"var":"cmb_search","skin":"gameres/ui/auxiliary_combobox.png","sizeGrid":"4,30,4,14","scrollBarSkin":"gameres/ui/vscroll.png","name":"cmb_search","labels":"所有行会","height":30}},{"type":"Button","props":{"y":112,"x":35,"var":"btn_search_ok","stateNum":2,"skin":"gameres/ui/btn_guild_define.png","name":"btn_search_ok"}},{"type":"Button","props":{"y":112,"x":190,"var":"btn_search_cancel","stateNum":2,"skin":"gameres/ui/btn_guild_cancel.png","name":"btn_search_cancel"}},{"type":"Label","props":{"y":11,"x":50,"width":229,"text":"搜索行会","strokeColor":"#000000","stroke":2,"height":17,"fontSize":20,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":48,"x":71,"width":194,"text":"请选择需要搜索的行会名","strokeColor":"#000000","stroke":1,"height":16,"fontSize":16,"color":"#d8d3cf","align":"center"}}]},{"type":"Image","props":{"y":158,"x":182,"visible":false,"var":"bg_alliance","skin":"gameres/png/bg_guild_memberdel.png","name":"bg_alliance"},"child":[{"type":"Button","props":{"y":-23,"x":305,"var":"btn_alliance_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_alliance_close"}},{"type":"Label","props":{"y":15,"x":50,"width":229,"text":"联盟申请","strokeColor":"#000000","stroke":2,"height":17,"fontSize":20,"color":"#d8d3cf","align":"center"}},{"type":"Button","props":{"y":102,"x":39,"var":"btn_alliance_ok","stateNum":2,"skin":"gameres/ui/btn_guild_ok.png","name":"btn_alliance_ok"}},{"type":"Button","props":{"y":102,"x":198,"var":"btn_alliance_refuse","stateNum":2,"skin":"gameres/ui/btn_guild_refuse.png","name":"btn_alliance_refuse"}},{"type":"Label","props":{"y":61,"x":59,"text":"来自","fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":61,"x":203,"text":"的联盟申请","name":"lb_setpresident_end","fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":61,"x":90,"width":110,"var":"lb_alliance_name","text":"名字最长七个字","name":"lb_alliance_name","fontSize":16,"color":"#e2b984","align":"center"}}]},{"type":"Button","props":{"y":405.5,"x":561,"visible":false,"var":"btn_cancel_allance","stateNum":2,"skin":"gameres/ui/btn_guild_cancelallance.png","name":"btn_cancel_allance"}},{"type":"Button","props":{"y":405,"x":561,"visible":false,"var":"btn_cancel_follow","stateNum":2,"skin":"gameres/ui/btn_guild_cancelfollow.png","name":"btn_cancel_follow"}},{"type":"Button","props":{"y":405,"x":561,"visible":false,"var":"btn_cancel_war","stateNum":2,"skin":"gameres/ui/btn_guild_cancelwar.png","name":"btn_cancel_war"}}]},{"type":"Button","props":{"y":-8,"x":670,"var":"btn_exit","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_exit"}},{"type":"Button","props":{"y":91,"x":725,"var":"vbtn_info","stateNum":2,"skin":"gameres/ui/vbtn_guild_info.png","selected":true,"name":"vbtn_info"}},{"type":"Button","props":{"y":161,"x":725,"var":"vbtn_member","stateNum":2,"skin":"gameres/ui/vbtn_guild_member.png","name":"vbtn_member"}},{"type":"Button","props":{"y":232,"x":725,"var":"vbtn_apply","stateNum":2,"skin":"gameres/ui/vbtn_guild_apply.png","name":"vbtn_apply"}},{"type":"Button","props":{"y":303,"x":725,"var":"vbtn_alliance","stateNum":2,"skin":"gameres/ui/vbtn_guild_alliance.png","name":"vbtn_alliance"}}]}]};
		return HangHui21UI;
	})(View);
var HangHuiWorldUI=(function(_super){
		function HangHuiWorldUI(){
			
		    this.img_bg=null;
		    this.btn_exit=null;
		    this.list_hanghui=null;
		    this.lb_guildname=null;
		    this.lb_presidentname=null;
		    this.lb_num=null;
		    this.lb_joincondition=null;
		    this.lb_applying=null;
		    this.btn_apply=null;
		    this.btn_join=null;
		    this.btn_showCreat=null;
		    this.check_onlyOl=null;
		    this.bg_createGuild=null;
		    this.btn_closeCreat=null;
		    this.lb_creatGold=null;
		    this.lb_creatItem=null;
		    this.lb_creatItem_num=null;
		    this.check_autoAgree=null;
		    this.cb_levelLimit=null;
		    this.ipt_guildName=null;
		    this.ipt_guildNotic=null;
		    this.btn_creatGuild=null;

			HangHuiWorldUI.__super.call(this);
		}

		CLASS$(HangHuiWorldUI,'ui.HangHuiWorldUI',_super);
		var __proto__=HangHuiWorldUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HangHuiWorldUI.uiView);

		}

		HangHuiWorldUI.uiView={"type":"View","props":{"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":712,"var":"img_bg","skin":"gameres/png/bg_hanghuilist.png","sizeGrid":"45,80,110,80","name":"img_bg","mouseThrough":true,"height":465,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":-7,"x":653,"var":"btn_exit","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_exit"}},{"type":"List","props":{"y":102,"x":30,"width":653,"var":"list_hanghui","spaceY":3,"name":"list_hanghui","height":285},"child":[{"type":"Box","props":{"y":1,"x":1,"width":650,"renderType":"render","height":30},"child":[{"type":"Label","props":{"y":5,"x":3,"width":158,"var":"lb_guildname","text":"名字最长7个字","strokeColor":"#000000","stroke":1,"name":"lb_guildname","height":20,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":5,"x":165,"width":166,"var":"lb_presidentname","text":"名字最长7个字","strokeColor":"#000000","stroke":1,"name":"lb_presidentname","height":20,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":5,"x":335,"width":75,"var":"lb_num","text":"100/999","strokeColor":"#000000","stroke":1,"name":"lb_num","height":20,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":5,"x":416,"width":114,"var":"lb_joincondition","text":"35级以上","strokeColor":"#000000","stroke":1,"name":"lb_joincondition","height":20,"fontSize":16,"color":"#d8d3cf","align":"center"}},{"type":"Label","props":{"y":5,"x":569,"width":60,"visible":false,"var":"lb_applying","text":"申请中...","strokeColor":"#000000","stroke":1,"name":"lb_applying","height":20,"fontSize":14,"color":"#d8d3cf","align":"center"}},{"type":"Button","props":{"y":0,"x":562,"visible":false,"var":"btn_apply","stateNum":2,"skin":"gameres/ui/btn_applyhanghui.png","name":"btn_apply"}},{"type":"Button","props":{"y":0,"x":561,"visible":false,"var":"btn_join","stateNum":2,"skin":"gameres/ui/btn_joinhanghui.png","name":"btn_join"}}]}]},{"type":"Text","props":{"y":72,"x":75,"text":"行会名称","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4","bold":true}},{"type":"Text","props":{"y":72,"x":265,"text":"会长","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4","bold":true}},{"type":"Text","props":{"y":72,"x":383,"text":"人数","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4","bold":true}},{"type":"Text","props":{"y":72,"x":466,"text":"加入条件","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4","bold":true}},{"type":"Text","props":{"y":72,"x":609,"text":"操作","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#f9f8f4","bold":true}},{"type":"Button","props":{"y":403,"x":535,"var":"btn_showCreat","stateNum":2,"skin":"gameres/ui/btn_creathanghui.png","name":"btn_showCreat","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581"}},{"type":"CheckBox","props":{"y":408,"x":54,"width":204,"var":"check_onlyOl","stateNum":2,"skin":"gameres/ui/box_hanghui.png","name":"check_onlyOl","labelStrokeColor":"#000000","labelStroke":1,"labelSize":14,"labelPadding":"5","labelColors":"#aaa59f","labelBold":true,"labelAlign":"left","label":"只显示会长在线的行会","height":29}},{"type":"Image","props":{"y":89,"x":160,"visible":false,"var":"bg_createGuild","skin":"gameres/png/bg_creatguild.png","name":"bg_createGuild"},"child":[{"type":"Button","props":{"y":-22,"x":333,"var":"btn_closeCreat","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_closeCreat"}},{"type":"Text","props":{"y":11,"x":138,"text":"创  建  行  会","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#d8d3cf"}},{"type":"Text","props":{"y":54,"x":15,"text":"行会名称：","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Text","props":{"y":85,"x":15,"text":"创建条件：","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Text","props":{"y":115,"x":15,"text":"加入条件","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Text","props":{"y":146,"x":15,"text":"行会公告","strokeColor":"#000000","stroke":1,"fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":88,"x":99,"width":90,"var":"lb_creatGold","text":"金币 10000000","name":"lb_creatGold","color":"#efe1cf","align":"left"}},{"type":"Label","props":{"y":88,"x":260,"width":50,"var":"lb_creatItem","text":"沃玛号角","name":"lb_creatItem","color":"#efe1cf","align":"left"}},{"type":"Label","props":{"y":88,"x":313,"width":8,"var":"lb_creatItem_num","text":"0","name":"lb_creatItem_num","height":12,"color":"#ea8611","align":"left"}},{"type":"CheckBox","props":{"y":110,"x":94,"width":155,"var":"check_autoAgree","stateNum":2,"skin":"gameres/ui/box_hanghui.png","name":"check_autoAgree","labelStrokeColor":"#000000","labelStroke":1,"labelSize":14,"labelPadding":"5","labelColors":"#aaa59f","labelBold":true,"labelAlign":"left","label":"自动同意入会申请","height":29}},{"type":"ComboBox","props":{"y":111,"x":253,"width":112,"var":"cb_levelLimit","skin":"gameres/ui/combobox.png","name":"cb_levelLimit","labels":"40级以上,60级以上,80级以上,100级以上,120级以上","height":28}},{"type":"TextInput","props":{"y":51,"x":97,"width":168,"var":"ipt_guildName","text":"名字最长七个字","skin":"gameres/ui/logininput.png","name":"ipt_guildName","height":26,"fontSize":14,"color":"#a6a4a4"}},{"type":"TextInput","props":{"y":146,"x":96,"width":250,"var":"ipt_guildNotic","text":"你还没有写点什么。。。","strokeColor":"#000000","stroke":1,"skin":"gameres/ui/logininput.png","name":"ipt_guildNotic","height":80,"color":"#a6a4a4","align":"left"}},{"type":"Button","props":{"y":234,"x":146,"var":"btn_creatGuild","stateNum":2,"skin":"gameres/ui/btn_creathanghui.png","name":"btn_creatGuild","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581"}},{"type":"Label","props":{"y":88,"x":321,"width":20,"text":"/1","color":"#ea8611","align":"left"}}]}]}]};
		return HangHuiWorldUI;
	})(View);
var health_hintUI=(function(_super){
		function health_hintUI(){
			
		    this.img_bg=null;
		    this.hint_bg=null;
		    this.btn_ok=null;
		    this.txt=null;
		    this.progressBar=null;
		    this.barNum=null;
		    this.lb_tip=null;

			health_hintUI.__super.call(this);
		}

		CLASS$(health_hintUI,'ui.health_hintUI',_super);
		var __proto__=health_hintUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(health_hintUI.uiView);

		}

		health_hintUI.uiView={"type":"View","props":{"y":0,"x":0,"width":1136,"name":"health_hint","height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"var":"img_bg","top":0,"skin":"gameres/png/hint_000.png","right":0,"name":"img_bg","left":0,"bottom":0}},{"type":"Image","props":{"y":38,"width":300,"var":"hint_bg","skin":"gameres/png/00807.png","name":"hint_bg","height":422,"centerX":0},"child":[{"type":"Button","props":{"var":"btn_ok","stateNum":1,"skin":"gameres/ui/00758.png","name":"btn_ok","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#D7B581,#D7B581","centerX":0,"bottom":10}},{"type":"TextArea","props":{"y":13,"width":263,"visible":false,"var":"txt","name":"txt","mouseEnabled":false,"height":335,"fontSize":18,"editable":false,"color":"#ffffff","centerX":1}}]},{"type":"ProgressBar","props":{"width":780,"var":"progressBar","skin":"gameres/png/main_load.png","name":"progressBar","centerX":0,"bottom":60},"child":[{"type":"Image","props":{"y":-13,"x":-63,"skin":"gameres/png/main_load_bg.png"}},{"type":"Text","props":{"y":-7,"x":356,"width":67,"var":"barNum","valign":"middle","text":"100%","name":"barNum","height":27,"fontSize":22,"color":"#ffffff","align":"center"}}]},{"type":"Label","props":{"y":493,"visible":true,"var":"lb_tip","text":"资源加载中，请稍后...","strokeColor":"#080000","stroke":2,"fontSize":16,"color":"#ffffff","centerX":0}}]};
		return health_hintUI;
	})(View);
var HeroWinUI=(function(_super){
		function HeroWinUI(){
			
		    this.Hero_bg=null;
		    this.Kuang_bg_1=null;
		    this.Hero_ico=null;
		    this.Item_0=null;
		    this.img_Hair=null;
		    this.Item_1=null;
		    this.Item_16=null;
		    this.Item_4=null;
		    this.hero_drums=null;
		    this.Item_14=null;
		    this.Item_2=null;
		    this.Item_13=null;
		    this.Item_15=null;
		    this.Item_3=null;
		    this.Item_5=null;
		    this.Item_7=null;
		    this.Item_12=null;
		    this.Item_11=null;
		    this.Item_10=null;
		    this.Item_9=null;
		    this.Item_8=null;
		    this.Item_6=null;
		    this.itemScorse=null;
		    this.state_bg=null;
		    this.stateData=null;
		    this.state_alb=null;
		    this.AttributeData=null;
		    this.state_skill=null;
		    this.Skill_List=null;
		    this.title_bg=null;
		    this.fashion_bg=null;
		    this.check_fashion=null;
		    this.fashion_hum=null;
		    this.fashion_body=null;
		    this.fashion_weapon=null;
		    this.Item_21=null;
		    this.Item_27=null;
		    this.Item_28=null;
		    this.Item_29=null;
		    this.Item_26=null;
		    this.Item_25=null;
		    this.Item_24=null;
		    this.Item_23=null;
		    this.Item_22=null;
		    this.Item_20=null;
		    this.but_tab6=null;
		    this.but_tab4=null;
		    this.but_tab5=null;
		    this.but_tab3=null;
		    this.but_tab2=null;
		    this.but_tab1=null;
		    this.but_Close=null;

			HeroWinUI.__super.call(this);
		}

		CLASS$(HeroWinUI,'ui.HeroWinUI',_super);
		var __proto__=HeroWinUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HeroWinUI.uiView);

		}

		HeroWinUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600},"child":[{"type":"Image","props":{"x":80,"width":363,"var":"Hero_bg","skin":"gameres/png/00029_new.png","height":500,"centerY":0},"child":[{"type":"Image","props":{"width":340,"var":"Kuang_bg_1","height":370,"centerY":4,"centerX":0,"alpha":0.85},"child":[{"type":"Image","props":{"var":"Hero_ico","skin":"gameres/png/00376-1.png","centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":70,"x":63,"width":49,"var":"Item_0","height":134}},{"type":"Image","props":{"y":40,"x":75,"width":22,"var":"img_Hair","height":20}},{"type":"Image","props":{"y":-6,"x":9,"width":44,"var":"Item_1","height":121}},{"type":"Image","props":{"y":73,"x":107,"width":49,"var":"Item_16","height":86}},{"type":"Image","props":{"y":31,"x":62,"width":49,"var":"Item_4","height":34}}]},{"type":"Image","props":{"y":304,"x":208,"width":48,"var":"hero_drums","skin":"gameres/ui/item_drum.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_14","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":126,"x":19,"width":48,"skin":"gameres/ui/item_medal.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_2","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":67,"x":19,"width":48,"skin":"gameres/ui/item_hat.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_13","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":67,"x":271,"width":48,"skin":"gameres/ui/item_horse.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_15","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":126,"x":271,"width":48,"skin":"gameres/ui/item_necklace.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_3","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":184,"x":271,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_5","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":243,"x":271,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_7","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":304,"x":271,"width":48,"skin":"gameres/ui/item_stone.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_12","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":304,"x":145,"width":48,"skin":"gameres/ui/item_shoes.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_11","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":304,"x":82,"width":48,"skin":"gameres/ui/item_belt.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_10","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":304,"x":19,"width":48,"skin":"gameres/ui/item_amulet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_9","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":243,"x":19,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_8","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":184,"x":19,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_6","height":49,"centerY":0,"centerX":0}}]},{"type":"Label","props":{"y":55,"x":170,"width":106,"visible":false,"var":"itemScorse","valign":"middle","text":"装备评分：","right":75,"name":"itemScorse","height":14,"fontSize":14,"color":"#eee9e9","align":"right"}}]},{"type":"Image","props":{"width":320,"visible":false,"var":"state_bg","height":350,"centerY":33,"centerX":-1},"child":[{"type":"Label","props":{"y":10,"x":140,"top":10,"text":"状态","fontSize":20,"color":"#ffffff","centerX":0,"bold":true}},{"type":"Panel","props":{"var":"stateData","top":50,"right":20,"left":20,"bottom":20}}]},{"type":"Image","props":{"width":320,"visible":false,"var":"state_alb","height":350,"centerY":33,"centerX":-1},"child":[{"type":"Label","props":{"y":-69,"x":140,"top":10,"text":"属性","fontSize":20,"color":"#ffffff","centerX":0,"bold":true}},{"type":"Panel","props":{"var":"AttributeData","top":50,"right":20,"left":20,"bottom":20}}]},{"type":"Image","props":{"width":320,"visible":false,"var":"state_skill","height":350,"centerY":33,"centerX":-1},"child":[{"type":"List","props":{"y":-12,"x":11,"width":307,"var":"Skill_List","vScrollBarSkin":"gameres/ui/vscroll.png","height":357}}]},{"type":"Image","props":{"y":108,"x":46,"visible":false,"var":"title_bg","skin":"gameres/png/title_bg.png","name":"title_bg"}},{"type":"Image","props":{"width":340,"visible":false,"var":"fashion_bg","name":"fashion_bg","height":370,"centerY":22,"centerX":0},"child":[{"type":"Label","props":{"y":10,"x":150,"top":10,"text":"时装","fontSize":20,"color":"#ffffff","centerX":0,"bold":true}},{"type":"CheckBox","props":{"y":373,"x":122,"width":81,"var":"check_fashion","stateNum":3,"skin":"gameres/ui/00017.png","name":"check_fashion","labelSize":18,"labelColors":"#008000,#ffff00,#ffff00","label":"时装外显","height":20}},{"type":"Image","props":{"width":168,"var":"fashion_hum","skin":"gameres/png/00376-1.png","name":"fashion_hum","height":234,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":72,"x":59,"width":57,"var":"fashion_body","name":"fashion_body","height":128}},{"type":"Image","props":{"y":5,"x":19,"width":44,"var":"fashion_weapon","name":"fashion_weapon","height":142}},{"type":"Image","props":{"y":21,"x":68,"width":44,"var":"Item_21","name":"Item_21","height":44}}]},{"type":"Image","props":{"y":298,"x":69,"width":58,"skin":"gameres/ui/item_belt.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_27","name":"Item_27","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":145,"width":58,"skin":"gameres/ui/item_shoes.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_28","name":"Item_28","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":221,"width":58,"skin":"gameres/ui/item_stone.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_29","name":"Item_29","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":76,"x":25,"width":58,"skin":"gameres/ui/item_medal.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_26","name":"Item_26","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":220,"x":25,"width":58,"skin":"gameres/ui/item_ring.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_25","name":"Item_25","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":220,"x":257,"width":58,"skin":"gameres/ui/item_ring.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_24","name":"Item_24","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":148,"x":25,"width":58,"skin":"gameres/ui/item_bracelet.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_23","name":"Item_23","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":148,"x":257,"width":58,"skin":"gameres/ui/item_bracelet.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_22","name":"Item_22","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":76,"x":257,"width":58,"skin":"gameres/ui/item_necklace.png","height":58},"child":[{"type":"Image","props":{"width":44,"var":"Item_20","name":"Item_20","height":44,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":394,"x":-29,"width":39,"visible":false,"var":"but_tab6","stateNum":3,"skin":"gameres/ui/00041.png","name":"6","height":66}},{"type":"Button","props":{"y":328,"x":-29,"width":39,"var":"but_tab4","stateNum":3,"skin":"gameres/ui/00036.png","name":"4","height":66}},{"type":"Button","props":{"y":130,"x":-29,"width":39,"var":"but_tab5","stateNum":3,"skin":"gameres/ui/00039.png","name":"5","height":66}},{"type":"Button","props":{"y":262,"x":-29,"width":39,"var":"but_tab3","stateNum":3,"skin":"gameres/ui/00037.png","name":"3","height":66}},{"type":"Button","props":{"y":196,"x":-29,"width":39,"var":"but_tab2","stateNum":3,"skin":"gameres/ui/00038.png","name":"2","height":66}},{"type":"Button","props":{"y":64,"x":-29,"width":39,"var":"but_tab1","stateNum":3,"skin":"gameres/ui/00040.png","name":"1","height":66}},{"type":"Button","props":{"y":28,"x":313,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close_new.png"}}]}]};
		return HeroWinUI;
	})(View);
var HumWinUI=(function(_super){
		function HumWinUI(){
			
		    this.Hum_bg=null;
		    this.Kuang_bg_1=null;
		    this.hum_ico=null;
		    this.img_Hair=null;
		    this.Item_0=null;
		    this.Item_1=null;
		    this.Item_16=null;
		    this.Item_4=null;
		    this.img_head=null;
		    this.Item_head=null;
		    this.img_drums=null;
		    this.Item_14=null;
		    this.Item_12=null;
		    this.Item_9=null;
		    this.Item_6=null;
		    this.Item_5=null;
		    this.Item_10=null;
		    this.Item_11=null;
		    this.Item_8=null;
		    this.Item_7=null;
		    this.Item_3=null;
		    this.Item_2=null;
		    this.Item_15=null;
		    this.Item_13=null;
		    this.Item_30=null;
		    this.Item_40=null;
		    this.guildName=null;
		    this.itemScorse=null;
		    this.state_alb=null;
		    this.AttributeData=null;
		    this.state_bg=null;
		    this.stateData=null;
		    this.state_icon=null;
		    this.HumIcon_List=null;
		    this.IconShow=null;
		    this.state_skill=null;
		    this.Skill_List=null;
		    this.btn_setskill=null;
		    this.fashion_bg=null;
		    this.check_fashion=null;
		    this.fashion_hum=null;
		    this.fashion_body=null;
		    this.Item_21=null;
		    this.fashion_weapon=null;
		    this.Item_27=null;
		    this.Item_28=null;
		    this.Item_29=null;
		    this.Item_25=null;
		    this.Item_24=null;
		    this.Item_23=null;
		    this.Item_22=null;
		    this.Item_20=null;
		    this.Item_26=null;
		    this.but_tab1=null;
		    this.but_tab2=null;
		    this.but_tab3=null;
		    this.but_tab5=null;
		    this.but_tab4=null;
		    this.but_tab6=null;
		    this.but_Close=null;
		    this.charName=null;

			HumWinUI.__super.call(this);
		}

		CLASS$(HumWinUI,'ui.HumWinUI',_super);
		var __proto__=HumWinUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HumWinUI.uiView);

		}

		HumWinUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":50,"x":100,"width":363,"var":"Hum_bg","skin":"gameres/png/00029_new.png","height":500},"child":[{"type":"Image","props":{"width":340,"var":"Kuang_bg_1","height":370,"centerY":4,"centerX":0,"alpha":0.85},"child":[{"type":"Image","props":{"var":"hum_ico","skin":"gameres/png/00376-1.png","centerY":18,"centerX":0},"child":[{"type":"Image","props":{"y":41,"x":75,"width":22,"var":"img_Hair","height":20}},{"type":"Image","props":{"y":70,"x":68.5,"width":49,"var":"Item_0","name":"Item_0","height":134}},{"type":"Image","props":{"y":5,"x":18,"width":44,"var":"Item_1","name":"Item_1","height":121}},{"type":"Image","props":{"y":84,"x":112,"width":49,"var":"Item_16","name":"Item_16","height":86}},{"type":"Image","props":{"y":30,"x":62,"width":49,"var":"Item_4","name":"Item_4","height":34}}]},{"type":"Image","props":{"y":38,"x":271,"width":48,"var":"img_head","skin":"gameres/ui/item_helmet.png","name":"img_head","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_head","name":"head","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":208,"width":48,"var":"img_drums","skin":"gameres/ui/item_drum.png","height":48},"child":[{"type":"Image","props":{"y":3,"x":16,"width":49,"var":"Item_14","name":"Item_14","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":271,"width":48,"skin":"gameres/ui/item_stone.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_12","name":"Item_12","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":19,"width":48,"skin":"gameres/ui/item_amulet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_9","name":"Item_9","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":194,"x":19,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_6","name":"Item_6","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":194,"x":271,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_5","name":"Item_5","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":82,"width":48,"skin":"gameres/ui/item_belt.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_10","name":"Item_10","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":145,"width":48,"skin":"gameres/ui/item_shoes.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_11","name":"Item_11","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":246,"x":19,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_8","name":"Item_8","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":246,"x":271,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_7","name":"Item_7","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":142,"x":271,"width":48,"skin":"gameres/ui/item_necklace.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_3","name":"Item_3","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":142,"x":19,"width":48,"skin":"gameres/ui/item_medal.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_2","name":"Item_2","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":90,"x":271,"width":48,"skin":"gameres/ui/item_horse.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_15","name":"Item_15","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":90,"x":19,"width":48,"skin":"gameres/ui/item_hat.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_13","name":"Item_13","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":349,"x":15,"width":309,"skin":"gameres/png/00029_new_1.png","height":61}},{"type":"Button","props":{"y":356,"var":"Item_30","stateNum":2,"skin":"gameres/ui/item_box1.png","name":"30","left":90}},{"type":"Button","props":{"y":356,"var":"Item_40","stateNum":2,"skin":"gameres/ui/item_box2.png","right":90}},{"type":"Label","props":{"y":30,"var":"guildName","valign":"middle","name":"guildName","fontSize":20,"color":"#eee9e9","centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"y":62,"width":106,"visible":false,"var":"itemScorse","valign":"middle","text":"装备评分：","right":75,"name":"itemScorse","height":14,"fontSize":14,"color":"#eee9e9","align":"right"}}]},{"type":"Image","props":{"width":320,"visible":false,"var":"state_alb","height":350,"centerY":33,"centerX":-1},"child":[{"type":"Panel","props":{"y":0,"x":17,"width":288,"var":"AttributeData","height":348}}]},{"type":"Image","props":{"width":320,"visible":false,"var":"state_bg","height":350,"centerY":33,"centerX":-1},"child":[{"type":"Panel","props":{"y":0,"x":17,"width":288,"var":"stateData","height":348}}]},{"type":"Image","props":{"width":287,"visible":false,"var":"state_icon","skin":"gameres/png/title_bg.png","sizeGrid":"208,0,152,0","name":"state_icon","height":360,"centerY":38,"centerX":-1},"child":[{"type":"List","props":{"y":55,"x":-1,"width":159,"var":"HumIcon_List","vScrollBarSkin":"gameres/ui/vscroll.png","name":"HumIcon_List","height":300}},{"type":"Image","props":{"y":5,"x":117,"var":"IconShow","skin":"gameres/ui/icon_k.png","name":"IconShow"}}]},{"type":"Image","props":{"width":320,"visible":false,"var":"state_skill","height":350,"centerY":33,"centerX":-1},"child":[{"type":"List","props":{"y":-12,"x":11,"width":307,"var":"Skill_List","height":357}},{"type":"Button","props":{"y":352,"x":117,"width":85,"var":"btn_setskill","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_setskill","labelStrokeColor":"#eee3e2","labelSize":16,"labelColors":"#D7B581,#D7B581","label":"设置技能","height":25}}]},{"type":"Image","props":{"width":340,"visible":false,"var":"fashion_bg","name":"fashion_bg","height":370,"centerY":19,"centerX":0},"child":[{"type":"Label","props":{"y":10,"text":"时装","fontSize":20,"color":"#ffffff","centerX":0,"bold":true,"align":"center"}},{"type":"CheckBox","props":{"var":"check_fashion","stateNum":3,"skin":"gameres/ui/00017.png","name":"check_fashion","labelSize":18,"labelColors":"#008000,#ffff00,#ffff00","label":"时装外显","centerX":0,"bottom":-22}},{"type":"Image","props":{"width":168,"var":"fashion_hum","skin":"gameres/png/00376-1.png","name":"fashion_hum","height":234,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":72,"x":59,"width":57,"var":"fashion_body","name":"fashion_body","height":133}},{"type":"Image","props":{"y":21,"x":68,"width":44,"var":"Item_21","name":"Item_21","height":44}},{"type":"Image","props":{"y":5,"x":19,"width":44,"var":"fashion_weapon","name":"fashion_weapon","height":142}}]},{"type":"Image","props":{"y":298,"x":69,"width":48,"skin":"gameres/ui/item_belt.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_27","name":"Item_27","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":145,"width":48,"skin":"gameres/ui/item_shoes.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_28","name":"Item_28","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":221,"width":48,"skin":"gameres/ui/item_stone.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_29","name":"Item_29","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":220,"x":25,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_25","name":"Item_25","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":220,"x":263,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_24","name":"Item_24","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":148,"x":25,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_23","name":"Item_23","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":148,"x":263,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_22","name":"Item_22","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":76,"x":263,"width":48,"skin":"gameres/ui/item_necklace.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_20","name":"Item_20","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":76,"x":25,"width":48,"skin":"gameres/ui/item_medal.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_26","name":"Item_26","height":44,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":64,"x":-29,"width":39,"var":"but_tab1","stateNum":3,"skin":"gameres/ui/00040.png","name":"1","height":66}},{"type":"Button","props":{"y":196,"x":-29,"width":39,"var":"but_tab2","stateNum":3,"skin":"gameres/ui/00038.png","name":"2","height":66}},{"type":"Button","props":{"y":262,"x":-29,"width":39,"var":"but_tab3","stateNum":3,"skin":"gameres/ui/00037.png","name":"3","height":66}},{"type":"Button","props":{"y":130,"x":-29,"width":39,"var":"but_tab5","stateNum":3,"skin":"gameres/ui/00039.png","name":"5","height":66}},{"type":"Button","props":{"y":394,"x":-29,"width":39,"var":"but_tab4","stateNum":3,"skin":"gameres/ui/00036.png","name":"4","height":66}},{"type":"Button","props":{"y":328,"x":-29,"width":39,"var":"but_tab6","stateNum":3,"skin":"gameres/ui/00041.png","name":"6","height":66}},{"type":"Button","props":{"y":27,"x":308,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close_new.png","name":"but_Close"}},{"type":"Label","props":{"var":"charName","top":28,"name":"charName","fontSize":22,"color":"#eee9e9","centerX":0,"bold":true}}]}]};
		return HumWinUI;
	})(View);
var JiaoYiWinUI=(function(_super){
		function JiaoYiWinUI(){
			
		    this.JiaoYi_bg=null;
		    this.but_Close=null;
		    this.but_QueR=null;
		    this.but_ok=null;
		    this.Hum_List=null;
		    this.txt_HumName=null;
		    this.Me_List=null;
		    this.txt_Me_Name=null;
		    this.InPut_Hum_Gold=null;
		    this.InPut_Me_Gold=null;

			JiaoYiWinUI.__super.call(this);
		}

		CLASS$(JiaoYiWinUI,'ui.JiaoYiWinUI',_super);
		var __proto__=JiaoYiWinUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(JiaoYiWinUI.uiView);

		}

		JiaoYiWinUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":35,"x":290,"var":"JiaoYi_bg","skin":"gameres/png/jiaoyibg.png"},"child":[{"type":"Button","props":{"y":-7,"x":228,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":389,"x":55,"width":70,"var":"but_QueR","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","label":"确认","height":25}},{"type":"Button","props":{"y":389,"x":165,"width":70,"var":"but_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","label":"交易","height":25}},{"type":"Text","props":{"y":25,"x":127,"text":"交易","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#ddaf52","bold":true,"align":"center"}},{"type":"List","props":{"y":86,"x":21,"width":251,"var":"Hum_List","height":100}},{"type":"Text","props":{"y":59,"x":26,"var":"txt_HumName","text":"交易","fontSize":20,"color":"#E8B656","bold":false}},{"type":"List","props":{"y":248,"x":21,"width":251,"var":"Me_List","height":100}},{"type":"Text","props":{"y":221,"x":26,"var":"txt_Me_Name","text":"交易","fontSize":20,"color":"#E8B656","bold":false}},{"type":"Image","props":{"y":353,"x":126,"skin":"gameres/ui/jiaoyi_icon.png"}},{"type":"Image","props":{"y":352,"x":158,"width":110,"skin":"gameres/ui/jiaoyi_input.png","height":20}},{"type":"Image","props":{"y":192,"x":127,"skin":"gameres/ui/jiaoyi_icon.png"}},{"type":"Image","props":{"y":189,"x":159,"width":110,"skin":"gameres/ui/jiaoyi_input.png","height":20}},{"type":"TextInput","props":{"y":189,"x":159,"width":111,"var":"InPut_Hum_Gold","type":"number","height":20,"editable":false,"color":"#ffffff"}},{"type":"TextInput","props":{"y":352,"x":158,"width":111,"var":"InPut_Me_Gold","type":"text","restrict":"0-9","height":20,"color":"#ffffff"}}]}]};
		return JiaoYiWinUI;
	})(View);
var LoginSceneUI=(function(_super){
		function LoginSceneUI(){
			
		    this.img_select=null;
		    this.cache=null;
		    this.notic_show=null;
		    this.notic_show1=null;
		    this.last_select=null;
		    this.change_select=null;
		    this.last_name=null;
		    this.chosen_server_hint=null;
		    this.start_select=null;
		    this.txt_userAgreement=null;
		    this.txt_privatePolicy=null;
		    this.checkBox_agreeMent=null;
		    this.img_userAgreement_bg=null;
		    this.panel_userAgreement=null;
		    this.no_agreement=null;
		    this.img_privatePolicy_bg=null;
		    this.panel_privatePolicy=null;
		    this.no_policy=null;
		    this.img_server=null;
		    this.section_list=null;
		    this.server_hint=null;
		    this.img_account_list=null;
		    this.account_list=null;
		    this.arer_btn=null;
		    this.server_state_img=null;
		    this.arer_near1=null;
		    this.near1_state=null;
		    this.arer_near2=null;
		    this.near2_state=null;
		    this.btn_closeaccount_list=null;
		    this.list_select=null;
		    this.serve_list=null;
		    this.btn_server_quit=null;
		    this.select_hint=null;
		    this.imageLogin=null;
		    this.panel_login=null;
		    this.tex_name=null;
		    this.tex_psw=null;
		    this.btn_zc=null;
		    this.btn_xg=null;
		    this.btn_login=null;
		    this.btn_zc1=null;
		    this.label_qq=null;
		    this.label_wx=null;
		    this.btn_backserver=null;
		    this.btn_qq=null;
		    this.btn_wx=null;
		    this.routeSel=null;
		    this.label_qqwx=null;
		    this.btn_forgetPsw=null;
		    this.img_account=null;
		    this.btn_know=null;
		    this.account_name=null;
		    this.account_psw=null;
		    this.img_register=null;
		    this.btn_register=null;
		    this.register_name=null;
		    this.register_psw=null;
		    this.btn_registerimg=null;
		    this.reg_bg=null;
		    this.username=null;
		    this.password=null;
		    this.confirmpassword=null;
		    this.btn_reg=null;
		    this.btn_reback=null;
		    this.reg_birthday=null;
		    this.reg_que1=null;
		    this.reg_ans1=null;
		    this.reg_que2=null;
		    this.reg_ans2=null;
		    this.txt_tip=null;
		    this.img_findPas=null;
		    this.btn_findPas=null;
		    this.real_ui=null;
		    this.bg1=null;
		    this.find_name=null;
		    this.find_birthday=null;
		    this.find_q1=null;
		    this.find_a1=null;
		    this.find_q2=null;
		    this.find_a2=null;
		    this.btn_FindPwd=null;
		    this.btn_reback1=null;
		    this.bg2=null;
		    this.set_name=null;
		    this.set_birthday=null;
		    this.set_q1=null;
		    this.set_a1=null;
		    this.set_q2=null;
		    this.set_a2=null;
		    this.btn_update=null;
		    this.btn_reback2=null;
		    this.notice1_bg=null;
		    this.know_notice1_btn=null;
		    this.notice1_panel=null;
		    this.notice_bg=null;
		    this.notice_ok=null;
		    this.notice_panel=null;
		    this.notice_title_lab=null;
		    this.notice_directory_list=null;
		    this.notice_title_box=null;
		    this.notice_box=null;
		    this.new_notice_icon=null;
		    this.notice_show1_copy=null;
		    this.img_qishiyou_list=null;
		    this.qishiyou_account_list=null;
		    this.qishiyou_arer_btn=null;
		    this.qishiyou_arer_near1=null;
		    this.qishiyou_arer_near2=null;
		    this.btn_closeaccount_qishiyou=null;

			LoginSceneUI.__super.call(this);
		}

		CLASS$(LoginSceneUI,'ui.LoginSceneUI',_super);
		var __proto__=LoginSceneUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.RealVerificationUI",ui.RealVerificationUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LoginSceneUI.uiView);

		}

		LoginSceneUI.uiView={"type":"View","props":{"width":1136,"height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":1136,"skin":"gameres/png/login_bg.png","height":600,"centerY":0,"centerX":0}},{"type":"Panel","props":{"y":-1,"x":2,"width":1136,"visible":false,"var":"img_select","name":"img_select","mouseThrough":true,"mouseEnabled":true,"height":600},"child":[{"type":"Button","props":{"y":98,"x":1021,"width":103,"visible":false,"var":"cache","stateNum":2,"skin":"gameres/ui/cache.png","name":"cache","height":92}},{"type":"Button","props":{"y":2,"x":1021,"width":103,"visible":true,"var":"notic_show","stateNum":2,"skin":"gameres/ui/notic_btn.png","name":"notic_show","height":92}},{"type":"Button","props":{"y":386,"x":1040,"width":70,"visible":true,"var":"notic_show1","stateNum":1,"skin":"gameres/png/16+.png","name":"notic_show1","height":90}},{"type":"Panel","props":{"y":232,"x":235,"width":666,"visible":false,"var":"last_select","name":"last_select","mouseThrough":true,"height":283},"child":[{"type":"Image","props":{"y":74,"x":124,"width":418,"var":"change_select","skin":"gameres/png/select_band.png","name":"change_select","height":46},"child":[{"type":"Button","props":{"y":8,"x":249,"stateNum":2,"skin":"gameres/ui/change_select.png"}},{"type":"Text","props":{"y":6,"x":36,"width":113,"var":"last_name","valign":"middle","text":"战纪688区","name":"last_name","height":30,"fontSize":22,"color":"#32ff00","align":"center"}},{"type":"Image","props":{"y":9,"x":8,"var":"chosen_server_hint","skin":"gameres/ui/green.png","name":"chosen_server_hint","gray":true}}]},{"type":"Button","props":{"y":129,"x":212,"var":"start_select","stateNum":2,"skin":"gameres/ui/strat_last.png","name":"start_select"}},{"type":"Image","props":{"y":251,"x":99,"width":454,"skin":"gameres/ui/redpak_item.png","height":29},"child":[{"type":"Box","props":{},"child":[{"type":"Text","props":{"y":5,"x":323,"width":18,"text":"和","height":18,"fontSize":18,"color":"#f9f9f9"}},{"type":"Text","props":{"y":5,"x":85,"width":163,"text":"我已详细阅读并同意","height":18,"fontSize":18,"color":"#f9f9f9"}},{"type":"Text","props":{"y":5,"x":250,"var":"txt_userAgreement","text":"用户协议","name":"txt_userAgreement","fontSize":18,"color":"#ff0e0a"}},{"type":"Text","props":{"y":5,"x":345,"var":"txt_privatePolicy","text":"隐私政策","name":"txt_privatePolicy","fontSize":18,"color":"#ff0e0a"}},{"type":"CheckBox","props":{"y":-1,"x":52,"var":"checkBox_agreeMent","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","scaleY":0.8,"scaleX":0.8,"name":"checkBox_agreeMent"}}]}]}]},{"type":"Image","props":{"y":74,"x":270,"var":"img_userAgreement_bg","skin":"gameres/png/userAgreement_bg.png","name":"img_userAgreement_bg"},"child":[{"type":"Panel","props":{"y":40,"x":30,"width":534,"var":"panel_userAgreement","name":"panel_userAgreement","height":391}},{"type":"Button","props":{"y":-21,"x":531,"var":"no_agreement","stateNum":2,"skin":"gameres/ui/but_close.png","name":"no_agreement"}}]},{"type":"Image","props":{"y":74,"x":270,"var":"img_privatePolicy_bg","skin":"gameres/png/privatePolicy_bg.png","name":"img_privatePolicy_bg"},"child":[{"type":"Panel","props":{"y":40,"x":30,"width":534,"var":"panel_privatePolicy","name":"panel_privatePolicy","height":390}},{"type":"Button","props":{"y":-21,"x":530,"var":"no_policy","stateNum":2,"skin":"gameres/ui/but_close.png","name":"no_policy"}}]}]},{"type":"Image","props":{"y":41,"x":621,"width":333,"visible":false,"var":"img_server","height":479},"child":[{"type":"List","props":{"y":30,"x":48,"width":312,"var":"section_list","name":"section_list","height":479}},{"type":"Image","props":{"y":24,"x":98,"width":131,"visible":false,"skin":"gameres/ui/servertitle.png","height":30}},{"type":"Image","props":{"y":477,"x":-67,"visible":false,"var":"server_hint","skin":"gameres/ui/server_hint.png","name":"server_hint"}}]},{"type":"Image","props":{"y":64,"x":140,"var":"img_account_list","skin":"gameres/png/select_area_2.png","name":"img_account_list","mouseThrough":true},"child":[{"type":"List","props":{"y":59,"x":261,"width":495,"var":"account_list","spaceY":18,"spaceX":10,"repeatY":5,"repeatX":2,"name":"account_list","height":302},"child":[{"type":"Box","props":{"y":8,"x":0,"width":241,"renderType":"render","height":42},"child":[{"type":"Button","props":{"var":"arer_btn","stateNum":2,"skin":"gameres/ui/area_button.png","name":"arer_btn","labelStroke":2,"labelSize":18,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#c3b7a4,#8d8373","labelBold":true,"label":"天下第一区"}},{"type":"Image","props":{"y":17,"x":12,"var":"server_state_img","skin":"gameres/ui/area_gray.png","name":"server_state_img"}}]}]},{"type":"HBox","props":{"y":377,"x":270,"width":496,"space":0,"height":42},"child":[{"type":"Box","props":{"y":1,"x":7,"width":241,"renderType":"render","height":42},"child":[{"type":"Button","props":{"y":0,"x":-8,"var":"arer_near1","stateNum":2,"skin":"gameres/ui/area_button.png","name":"arer_near1","labelStroke":2,"labelSize":18,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#c3b7a4,#8d8373","labelBold":true,"label":"天下第一区"}},{"type":"Image","props":{"y":12,"x":12,"var":"near1_state","name":"near1_state"}}]},{"type":"Box","props":{"y":1,"x":250,"width":241,"renderType":"render","height":42},"child":[{"type":"Button","props":{"y":0,"x":0,"width":239,"var":"arer_near2","stateNum":2,"skin":"gameres/ui/area_button.png","selected":false,"name":"arer_near2","labelStroke":2,"labelSize":18,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#c3b7a4,#8d8373","labelBold":true,"label":"天下第一区","height":54.5}},{"type":"Image","props":{"y":12,"x":12,"var":"near2_state","name":"near2_state"}}]}]},{"type":"Button","props":{"y":-10,"x":743,"var":"btn_closeaccount_list","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_closeaccount_list","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff"}},{"type":"Image","props":{"y":442,"x":274,"skin":"gameres/ui/area_blue.png"},"child":[{"type":"Label","props":{"y":0,"x":24,"text":"新开","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#efe7d6"}}]},{"type":"Image","props":{"y":442,"x":390,"skin":"gameres/ui/area_green.png"},"child":[{"type":"Label","props":{"y":0,"x":24,"text":"良好","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#efe7d6"}}]},{"type":"Image","props":{"y":442,"x":506,"skin":"gameres/ui/area_red.png"},"child":[{"type":"Label","props":{"y":0,"x":24,"text":"忙碌","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#efe7d6"}}]},{"type":"Image","props":{"y":442,"x":622,"skin":"gameres/ui/area_gray.png"},"child":[{"type":"Label","props":{"y":0,"x":24,"text":"维护","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#efe7d6"}}]}]},{"type":"Image","props":{"y":129,"x":234,"width":164,"visible":false,"var":"list_select","name":"list_select","height":303},"child":[{"type":"Text","props":{"y":11,"x":124,"strokeColor":"#000000","stroke":2,"fontSize":24,"color":"#ffffff","align":"center"}},{"type":"List","props":{"y":50,"x":5,"width":157,"var":"serve_list","vScrollBarSkin":"gameres/ui/vscroll.png","spaceY":10,"selectedIndex":0,"repeatX":1,"name":"serve_list","height":244},"child":[{"type":"Button","props":{"y":0,"x":6,"visible":false,"stateNum":2,"skin":"gameres/ui/area_button_left.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":18,"labelPadding":"6,0,6,0","labelColors":"#D7B581,#D7B581","label":"蜜雪冰城"}}]},{"type":"Button","props":{"y":15,"x":268,"width":46,"visible":false,"var":"btn_server_quit","stateNum":2,"skin":"gameres/ui/but_close.png","name":"btn_server_quit","height":46}},{"type":"Image","props":{"y":9,"x":13,"width":131,"visible":false,"skin":"gameres/ui/servertitle.png","height":30}},{"type":"Image","props":{"y":477,"x":-65,"visible":false,"var":"select_hint","skin":"gameres/ui/server_hint.png","name":"select_hint"}}]},{"type":"Image","props":{"y":124,"x":323,"width":491,"var":"imageLogin","skin":"gameres/png/imageLogin.png","name":"imageLogin","mouseThrough":true,"height":353,"centerY":0,"centerX":0},"child":[{"type":"Panel","props":{"y":108,"x":58,"width":389,"var":"panel_login","name":"panel_login","height":212},"child":[{"type":"Image","props":{"y":9,"x":0,"width":40,"skin":"gameres/ui/id.png","height":34}},{"type":"Image","props":{"y":59,"x":3,"width":34,"skin":"gameres/ui/password.png","height":42}},{"type":"TextInput","props":{"y":7,"x":46,"width":217,"var":"tex_name","valign":"middle","strokeColor":"#000000","stroke":2,"skin":"gameres/ui/logininput.png","sizeGrid":"16,33,17,22","restrict":"0-9a-zA-Z","padding":"0,0,0,10","name":"tex_name","height":33,"fontSize":20,"color":"#ffffff"}},{"type":"TextInput","props":{"y":61,"x":46,"width":217,"var":"tex_psw","valign":"middle","type":"password","strokeColor":"#000000","stroke":2,"skin":"gameres/ui/logininput.png","sizeGrid":"16,33,17,22","restrict":"0-9a-zA-Z`~!@#$%^&*()_+-=;'.|?<>/[]{}\"","padding":"0,0,0,10","name":"tex_psw","maxChars":10,"height":33,"fontSize":20,"color":"#ffffff"}},{"type":"Button","props":{"y":0,"x":266,"width":103,"var":"btn_zc","stateNum":2,"skin":"gameres/ui/regist_new_use.png","height":44}},{"type":"Button","props":{"y":57,"x":266,"width":103,"var":"btn_xg","stateNum":2,"skin":"gameres/ui/change_pwd.png","height":44}},{"type":"Button","props":{"y":118,"x":9,"width":132,"var":"btn_login","stateNum":2,"skin":"gameres/ui/00777.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff","height":50}},{"type":"Button","props":{"y":118,"x":200,"width":132,"var":"btn_zc1","stateNum":2,"skin":"gameres/ui/00778.png","name":"btn_zc1","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff","height":50}}]},{"type":"Label","props":{"y":295,"x":158,"width":80,"var":"label_qq","text":"QQ登录","name":"QQ登录","height":22,"fontSize":20,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Label","props":{"y":295,"x":279,"width":80,"var":"label_wx","text":"微信登录","name":"微信登录","height":22,"fontSize":20,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Button","props":{"y":-2,"x":409,"var":"btn_backserver","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_backserver","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff"}},{"type":"Button","props":{"y":288,"x":127,"width":33,"var":"btn_qq","stateNum":1,"skin":"gameres/ui/qq.png","name":"btn_qq","height":33}},{"type":"Button","props":{"y":288,"x":243,"width":33,"var":"btn_wx","stateNum":1,"skin":"gameres/ui/wx.png","name":"btn_wx","height":33}},{"type":"RadioGroup","props":{"y":369,"x":202,"var":"routeSel","space":50,"skin":"gameres/ui/serversite.png","name":"routeSel","labelSize":18,"labelColors":"#ffffff,#ffffff,#ffffff","direction":"horizontal"}},{"type":"Image","props":{"y":20,"x":204,"width":83,"skin":"gameres/ui/logintitle.png","height":35}},{"type":"Label","props":{"y":265,"x":125,"visible":false,"var":"label_qqwx","text":"——  使用其他账号登录  ——","strokeColor":"#150e09","stroke":2,"name":"label_qqwx","fontSize":16,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Button","props":{"y":301,"x":359,"var":"btn_forgetPsw","stateNum":2,"skin":"gameres/ui/forgetPsw.png","name":"btn_forgetPsw"}}]},{"type":"Image","props":{"width":490,"var":"img_account","skin":"gameres/png/00790.png","name":"img_account","height":195,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":140,"x":197,"width":110,"var":"btn_know","stateNum":2,"skin":"gameres/ui/00777.png","name":"btn_know","height":42}},{"type":"Label","props":{"y":25,"x":53,"width":388,"text":"系统已自动为您生成账号密码，请截图保存","strokeColor":"#150e09","stroke":2,"height":22,"fontSize":20,"color":"#bcb080","bold":false}},{"type":"Label","props":{"y":69,"x":117,"width":60,"text":"账号：","strokeColor":"#150e09","stroke":2,"height":23,"fontSize":20,"color":"#93fe4c"}},{"type":"Label","props":{"y":103,"x":117,"width":60,"text":"密码：","strokeColor":"#150e09","stroke":2,"height":23,"fontSize":20,"color":"#93fe4c"}},{"type":"Text","props":{"y":69,"x":190,"width":152,"var":"account_name","text":"账号","strokeColor":"#150e09","stroke":2,"name":"account_name","height":27,"fontSize":20,"font":"Microsoft YaHei","color":"#93fe4c"}},{"type":"Text","props":{"y":103,"x":190,"width":162,"var":"account_psw","text":"密码","strokeColor":"#150e09","stroke":2,"name":"account_psw","height":28,"fontSize":20,"font":"Microsoft YaHei","color":"#93fe4c"}}]},{"type":"Image","props":{"width":542,"var":"img_register","skin":"gameres/png/00790.png","name":"img_register","height":215,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":148,"width":110,"var":"btn_register","stateNum":2,"skin":"gameres/ui/00777.png","name":"btn_register","height":42,"centerX":0}},{"type":"Label","props":{"y":25,"width":479,"text":"系统已自动为您生成账号密码，请截图保存","strokeColor":"#150e09","stroke":2,"fontSize":25,"color":"#bcb080","centerX":0,"bold":false}},{"type":"Label","props":{"y":74,"x":159,"width":60,"text":"账号：","strokeColor":"#150e09","stroke":2,"fontSize":22,"color":"#93fe4c"}},{"type":"Label","props":{"y":111,"x":159,"width":60,"text":"密码：","strokeColor":"#150e09","stroke":2,"fontSize":22,"color":"#93fe4c"}},{"type":"Text","props":{"y":74,"x":232,"width":152,"var":"register_name","text":"账号","strokeColor":"#150e09","stroke":2,"name":"register_name","fontSize":22,"color":"#93fe4c"}},{"type":"Text","props":{"y":111,"x":232,"width":162,"var":"register_psw","text":"密码","strokeColor":"#150e09","stroke":2,"name":"register_psw","fontSize":22,"color":"#93fe4c"}},{"type":"Image","props":{"y":188,"x":217,"width":110,"var":"btn_registerimg","skin":"gameres/ui/00768.png","skewX":-180,"name":"btn_registerimg","height":42}}]},{"type":"Image","props":{"y":44,"x":228,"visible":false,"var":"reg_bg","skin":"gameres/png/img_regbg.png","name":"reg_bg","mouseThrough":false,"centerY":0,"centerX":0},"child":[{"type":"TextInput","props":{"y":74,"x":174,"width":200,"var":"username","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入用户名....","name":"username","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":119,"x":174,"width":200,"var":"password","type":"password","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入密码...","name":"password","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":161,"x":174,"width":200,"var":"confirmpassword","type":"password","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请再次输入密码...","name":"confirmpassword","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"Button","props":{"y":426,"x":118,"width":101,"var":"btn_reg","stateNum":2,"skin":"gameres/ui/btn_reg_submit.png","sizeGrid":"4,4,4,4","name":"btn_reg","labelStrokeColor":"#000000","labelStroke":2,"height":44}},{"type":"Button","props":{"y":426,"x":257,"width":101,"var":"btn_reback","stateNum":2,"skin":"gameres/ui/btn_reg_cancel.png","sizeGrid":"4,4,4,4","name":"btn_reback","labelStrokeColor":"#000000","labelStroke":2,"height":44}},{"type":"TextArea","props":{"y":79,"x":400,"width":224,"type":"text","text":"您的帐号名称可以包括：字符、数字的组合。帐号名称长度必须为4或以上。请仔细输入创建帐号所需的信息。您的帐号可以登录游戏及我们的网站，以取得一些相关信息。建议您的登录帐号不要和游戏中的角色名相同，以确保您的密码不会被暴力破解。","strokeColor":"#000000","stroke":2,"leading":5,"height":328,"fontSize":18,"editable":false,"color":"#ffffff","bgColor":"#090a05"}},{"type":"TextInput","props":{"y":206,"x":174,"width":200,"var":"reg_birthday","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"1900/01/12","name":"reg_birthday","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":248,"x":174,"width":200,"var":"reg_que1","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入问题一","name":"reg_que1","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":293,"x":174,"width":200,"var":"reg_ans1","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入答案一","name":"reg_ans1","maxChars":12,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":336,"x":174,"width":200,"var":"reg_que2","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入问题二","name":"reg_que2","maxChars":20,"height":30,"fontSize":18,"color":"#fbf8f8"}},{"type":"TextInput","props":{"y":381,"x":174,"width":200,"var":"reg_ans2","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#888383","prompt":"请输入答案二","name":"reg_ans2","maxChars":12,"height":30,"fontSize":18,"color":"#fbf8f8"}}]},{"type":"Label","props":{"visible":false,"var":"txt_tip","text":"连接服务器中,请稍等...","strokeColor":"#000000","stroke":3,"fontSize":30,"color":"#ddaf52","centerY":0,"centerX":0}},{"type":"Image","props":{"y":10,"x":10,"width":542,"visible":false,"var":"img_findPas","skin":"gameres/png/00790.png","name":"img_findPas","height":215,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":148,"var":"btn_findPas","stateNum":2,"skin":"gameres/ui/00758.png","name":"btn_findPas","centerX":0}},{"type":"Label","props":{"y":25,"width":479,"text":"密码已找回，请截图保存","strokeColor":"#150e09","stroke":2,"fontSize":25,"color":"#bcb080","centerX":0,"bold":false}},{"type":"Label","props":{"y":90,"x":157,"width":60,"text":"密码：","strokeColor":"#150e09","stroke":2,"fontSize":22,"color":"#93fe4c"}},{"type":"Text","props":{"y":90,"x":230,"width":162,"text":"密码","strokeColor":"#150e09","stroke":2,"name":"pas_findPas","fontSize":22,"color":"#93fe4c"}}]},{"type":"RealVerification","props":{"y":104,"x":274,"visible":false,"var":"real_ui","mouseThrough":true,"runtime":"ui.RealVerificationUI"}},{"type":"Image","props":{"y":103,"x":305,"visible":false,"var":"bg1","skin":"gameres/png/imageLogin.png","name":"bg1"},"child":[{"type":"Label","props":{"y":92,"x":101,"text":"游戏账号","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":130,"x":101,"text":"你的生日","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":168,"x":125,"text":"问题一","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":207,"x":125,"text":"答案一","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":245,"x":125,"text":"问题二","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":283,"x":125,"text":"答案二","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"TextInput","props":{"y":92,"x":246,"width":190,"var":"find_name","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"游戏账号","overflow":"hidden","name":"find_name","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":129,"x":246,"width":190,"var":"find_birthday","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"1900/01/12","overflow":"hidden","name":"find_birthday","maxChars":10,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":166,"x":246,"width":190,"var":"find_q1","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"find_q1","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":204,"x":246,"width":190,"var":"find_a1","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"find_a1","maxChars":12,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":241,"x":246,"width":190,"var":"find_q2","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"find_q2","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":278,"x":246,"width":190,"var":"find_a2","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"find_a2","maxChars":12,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":320,"x":145,"width":101,"var":"btn_FindPwd","stateNum":2,"skin":"gameres/ui/00698.png","name":"btn_FindPwd","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Button","props":{"y":320,"x":308,"width":101,"var":"btn_reback1","stateNum":2,"skin":"gameres/ui/btn_reg_cancel.png","name":"btn_reback1","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}}]},{"type":"Image","props":{"y":103,"x":295,"visible":false,"var":"bg2","skin":"gameres/png/imageLogin.png","name":"bg2"},"child":[{"type":"Label","props":{"y":92,"x":101,"text":"游戏账号","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":130,"x":101,"text":"你的生日","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":168,"x":125,"text":"问题一","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":207,"x":125,"text":"答案一","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":245,"x":125,"text":"问题二","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"Label","props":{"y":283,"x":125,"text":"答案二","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#bcb080","bold":true}},{"type":"TextInput","props":{"y":92,"x":246,"width":190,"var":"set_name","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"游戏账号","overflow":"hidden","name":"set_name","maxChars":20,"height":32,"fontSize":18,"editable":false,"color":"#ffffff"}},{"type":"TextInput","props":{"y":129,"x":246,"width":190,"var":"set_birthday","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"1900/01/12","overflow":"hidden","name":"set_birthday","maxChars":10,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":166,"x":246,"width":190,"var":"set_q1","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"set_q1","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":204,"x":246,"width":190,"var":"set_a1","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"set_a1","maxChars":12,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":241,"x":246,"width":190,"var":"set_q2","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"set_q2","maxChars":20,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":278,"x":246,"width":190,"var":"set_a2","strokeColor":"#000000","skin":"gameres/ui/logininput.png","sizeGrid":"10,10,10,10","promptColor":"#888383","prompt":"必填","overflow":"hidden","name":"set_a2","maxChars":12,"height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":320,"x":145,"width":101,"var":"btn_update","stateNum":2,"skin":"gameres/ui/00698.png","name":"btn_update","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Button","props":{"y":320,"x":308,"width":101,"var":"btn_reback2","stateNum":2,"skin":"gameres/ui/btn_reg_cancel.png","name":"btn_reback2","labelStrokeColor":"#000000","labelStroke":2,"labelSize":18,"labelColors":"#ffffff","height":44}},{"type":"Image","props":{"y":23,"x":205,"skin":"gameres/ui/update_account.png"}}]},{"type":"Image","props":{"var":"notice1_bg","skin":"gameres/png/notice_bg.png","name":"notice1_bg","centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":381,"x":227,"var":"know_notice1_btn","stateNum":2,"skin":"gameres/ui/notice_ok.png","name":"know_notice1_btn"}},{"type":"Panel","props":{"y":44,"x":14,"width":568,"var":"notice1_panel","name":"notice1_panel","height":334}}]},{"type":"Image","props":{"y":0,"x":0,"width":1136,"visible":false,"var":"notice_bg","skin":"gameres/png/login_bg.png","name":"notice_bg","height":600},"child":[{"type":"Image","props":{"width":680,"skin":"gameres/png/notice_list_bg.png","height":442,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":345,"x":373,"width":125,"var":"notice_ok","stateNum":2,"skin":"gameres/ui/notice_know.png","name":"notice_ok","height":51}},{"type":"List","props":{"y":77,"x":231,"width":410,"var":"notice_panel","repeatX":1,"name":"notice_panel","height":261},"child":[{"type":"Label","props":{"text":"内容","renderType":"render","fontSize":18,"color":"#ffffff"}}]},{"type":"Label","props":{"y":49,"x":358,"width":156,"var":"notice_title_lab","text":"更新提示","name":"notice_title_lab","height":22,"fontSize":22,"color":"#ff6000","align":"center"}},{"type":"List","props":{"y":35,"x":37,"width":170,"var":"notice_directory_list","repeatY":7,"repeatX":1,"name":"notice_directory_list","height":374},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"notice_title_box","renderType":"render","name":"notice_title_box"},"child":[{"type":"Button","props":{"y":0,"x":0,"width":171,"var":"notice_box","strokeColors":"#000000,#000000,#000000,#000000","stateNum":2,"skin":"gameres/ui/notice_selected.png","name":"notice_box","labelStroke":3,"labelSize":21,"labelColors":"#746a6a,#f6d9b9","label":"更新提示","height":53}},{"type":"Image","props":{"y":4,"x":5,"width":27,"var":"new_notice_icon","skin":"gameres/ui/new_notice_icon.png","name":"new_notice_icon","height":39}}]}]}]}]},{"type":"Button","props":{"y":385,"x":1042,"width":70,"var":"notice_show1_copy","stateNum":1,"skin":"gameres/png/16+.png","name":"notice_show1_copy","height":90}},{"type":"Image","props":{"y":32,"x":154,"width":816,"visible":false,"var":"img_qishiyou_list","skin":"gameres/png/select_area.png","name":"img_qishiyou_list","mouseThrough":true,"height":531},"child":[{"type":"List","props":{"y":77,"x":53,"width":711,"var":"qishiyou_account_list","spaceY":10,"spaceX":0,"repeatX":3,"name":"qishiyou_account_list","height":307},"child":[{"type":"Box","props":{"y":5,"x":0,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"qishiyou_arer_btn","stateNum":2,"skin":"gameres/ui/area_button.png","name":"qishiyou_arer_btn","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}}]}]},{"type":"HBox","props":{"y":422,"x":274,"width":496,"space":20,"height":52},"child":[{"type":"Box","props":{"y":1,"x":0,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"qishiyou_arer_near1","stateNum":2,"skin":"gameres/ui/area_button.png","name":"qishiyou_arer_near1","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}}]},{"type":"Box","props":{"y":1,"width":239,"renderType":"render","height":52},"child":[{"type":"Button","props":{"width":239,"var":"qishiyou_arer_near2","stateNum":2,"skin":"gameres/ui/area_button.png","selected":false,"name":"qishiyou_arer_near2","labelStroke":2,"labelSize":22,"labelPadding":"10,0,9,0","labelFont":"SimHei","labelColors":"#2ffe3e","labelBold":true,"label":"天下第一区","height":54}}]}]},{"type":"Button","props":{"y":-10,"x":744,"var":"btn_closeaccount_qishiyou","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_closeaccount_qishiyou","labelStrokeColor":"#000000","labelStroke":2,"labelSize":24,"labelColors":"#ffffff"}}]}]};
		return LoginSceneUI;
	})(View);
var LookHumUI=(function(_super){
		function LookHumUI(){
			
		    this.LookHum_bg=null;
		    this.Kuang_bg_2=null;
		    this.hum_ico2=null;
		    this.img_Hair=null;
		    this.Item_0=null;
		    this.Item_1=null;
		    this.Item_16=null;
		    this.Item_4=null;
		    this.Item_13=null;
		    this.Item_15=null;
		    this.Item_2=null;
		    this.Item_3=null;
		    this.Item_7=null;
		    this.Item_8=null;
		    this.Item_11=null;
		    this.Item_10=null;
		    this.Item_5=null;
		    this.Item_6=null;
		    this.Item_9=null;
		    this.Item_12=null;
		    this.Item_14=null;
		    this.img_head=null;
		    this.Item_head=null;
		    this.copyname=null;
		    this.Item_30=null;
		    this.Item_40=null;
		    this.user_title=null;
		    this.itemScorse=null;
		    this.New_kuang=null;
		    this.fashion_hum=null;
		    this.fashion_body=null;
		    this.Item_21=null;
		    this.fashion_weapon=null;
		    this.Item_27=null;
		    this.Item_28=null;
		    this.Item_29=null;
		    this.Item_25=null;
		    this.Item_24=null;
		    this.Item_23=null;
		    this.Item_22=null;
		    this.Item_20=null;
		    this.Item_26=null;
		    this.lookHumIcon_bg=null;
		    this.LookIcon_List=null;
		    this.IconShow=null;
		    this.Tab_1=null;
		    this.Tab_2=null;
		    this.Tab_3=null;
		    this.but_Close=null;
		    this.uaer_name=null;

			LookHumUI.__super.call(this);
		}

		CLASS$(LookHumUI,'ui.LookHumUI',_super);
		var __proto__=LookHumUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LookHumUI.uiView);

		}

		LookHumUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600},"child":[{"type":"Image","props":{"y":44,"x":53,"width":363,"var":"LookHum_bg","skin":"gameres/png/00029_new.png","height":500},"child":[{"type":"Image","props":{"width":340,"var":"Kuang_bg_2","height":370,"centerY":4,"centerX":0,"alpha":0.85},"child":[{"type":"Image","props":{"y":86,"x":86,"var":"hum_ico2","skin":"gameres/png/00376-1.png","centerX":0},"child":[{"type":"Image","props":{"y":41,"x":75,"width":22,"var":"img_Hair","height":20}},{"type":"Image","props":{"y":70,"x":68.5,"width":49,"var":"Item_0","height":134}},{"type":"Image","props":{"y":5,"x":18,"width":44,"var":"Item_1","height":121}},{"type":"Image","props":{"y":84,"x":112,"width":49,"var":"Item_16","height":86}},{"type":"Image","props":{"y":30,"x":62,"width":49,"var":"Item_4","height":34}}]},{"type":"Image","props":{"y":90,"x":19,"width":48,"skin":"gameres/ui/item_hat.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_13","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":90,"x":271,"width":48,"skin":"gameres/ui/item_horse.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_15","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":142,"x":19,"width":48,"skin":"gameres/ui/item_medal.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_2","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":142,"x":271,"width":48,"skin":"gameres/ui/item_necklace.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_3","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":246,"x":271,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_7","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":246,"x":19,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_8","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":145,"width":48,"skin":"gameres/ui/item_shoes.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_11","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":82,"width":48,"skin":"gameres/ui/item_belt.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_10","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":194,"x":271,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_5","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":194,"x":19,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_6","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":19,"width":48,"skin":"gameres/ui/item_amulet.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_9","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":271,"width":48,"skin":"gameres/ui/item_stone.png","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_12","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":208,"width":48,"skin":"gameres/ui/item_drum.png","height":48},"child":[{"type":"Image","props":{"y":3,"x":16,"width":49,"var":"Item_14","height":49,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":349,"x":15,"width":309,"skin":"gameres/png/00029_new_1.png","height":61}},{"type":"Image","props":{"y":38,"x":271,"width":48,"var":"img_head","skin":"gameres/ui/item_helmet.png","name":"img_head","height":48},"child":[{"type":"Image","props":{"width":49,"var":"Item_head","name":"head","height":49,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":33,"x":20,"width":66,"var":"copyname","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"copyname","labelSize":14,"labelColors":"#fbf1b3,#fbf1b3","label":"复制名字","height":25}},{"type":"Button","props":{"y":356,"x":97,"var":"Item_30","stateNum":2,"skin":"gameres/ui/item_box1.png","name":"30","left":90}},{"type":"Button","props":{"y":356,"x":203,"var":"Item_40","stateNum":2,"skin":"gameres/ui/item_box2.png"}},{"type":"Label","props":{"y":30,"var":"user_title","fontSize":18,"color":"#ffffff","centerX":0,"bold":true}},{"type":"Label","props":{"y":65,"width":106,"visible":false,"var":"itemScorse","valign":"middle","text":"装备评分：","right":75,"name":"itemScorse","height":14,"fontSize":14,"color":"#eee9e9","align":"right"}}]},{"type":"Image","props":{"width":340,"var":"New_kuang","name":"New_kuang","height":370,"centerY":19,"centerX":0},"child":[{"type":"Image","props":{"y":68,"x":86,"width":168,"var":"fashion_hum","skin":"gameres/png/00376-1.png","name":"fashion_hum","height":234,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":72,"x":59,"width":57,"var":"fashion_body","name":"fashion_body","height":133}},{"type":"Image","props":{"y":21,"x":68,"width":44,"var":"Item_21","name":"Item_21","height":44}},{"type":"Image","props":{"y":5,"x":19,"width":44,"var":"fashion_weapon","name":"fashion_weapon","height":142}}]},{"type":"Image","props":{"y":298,"x":69,"width":48,"skin":"gameres/ui/item_belt.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_27","name":"Item_27","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":145,"width":48,"skin":"gameres/ui/item_shoes.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_28","name":"Item_28","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":298,"x":221,"width":48,"skin":"gameres/ui/item_stone.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_29","name":"Item_29","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":220,"x":25,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_25","name":"Item_25","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":220,"x":263,"width":48,"skin":"gameres/ui/item_ring.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_24","name":"Item_24","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":148,"x":25,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_23","name":"Item_23","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":148,"x":263,"width":48,"skin":"gameres/ui/item_bracelet.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_22","name":"Item_22","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":76,"x":263,"width":48,"skin":"gameres/ui/item_necklace.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_20","name":"Item_20","height":44,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":76,"x":25,"width":48,"skin":"gameres/ui/item_medal.png","height":48},"child":[{"type":"Image","props":{"width":44,"var":"Item_26","name":"Item_26","height":44,"centerY":0,"centerX":0}}]}]},{"type":"Image","props":{"width":287,"visible":false,"var":"lookHumIcon_bg","skin":"gameres/png/title_bg.png","sizeGrid":"208,0,152,0","name":"lookHumIcon_bg","height":360,"centerY":38,"centerX":-1},"child":[{"type":"List","props":{"y":55,"x":-1,"width":159,"var":"LookIcon_List","vScrollBarSkin":"gameres/ui/vscroll.png","name":"LookIcon_List","height":300}},{"type":"Image","props":{"y":3,"x":117,"var":"IconShow","skin":"gameres/ui/icon_k.png","name":"IconShow"}}]},{"type":"Button","props":{"y":64,"x":-29,"width":39,"var":"Tab_1","stateNum":3,"skin":"gameres/ui/00040.png","name":"1","height":66}},{"type":"Button","props":{"y":130,"x":-29,"width":39,"var":"Tab_2","stateNum":3,"skin":"gameres/ui/00039.png","name":"2","height":66}},{"type":"Button","props":{"y":196,"x":-29,"width":39,"var":"Tab_3","stateNum":3,"skin":"gameres/ui/00041.png","name":"3","height":66}},{"type":"Button","props":{"y":23,"x":314,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close_new.png","name":"but_Close"}},{"type":"Label","props":{"var":"uaer_name","top":28,"strokeColor":"#000000","stroke":1,"fontSize":22,"centerX":0,"bold":true}}]}]};
		return LookHumUI;
	})(View);
var LookShousUI=(function(_super){
		function LookShousUI(){
			
		    this.Shoushi_bg=null;
		    this.but_Close=null;
		    this.sKuang=null;
		    this.Item_0=null;
		    this.Item_1=null;
		    this.Item_2=null;
		    this.Item_3=null;
		    this.Item_4=null;
		    this.Item_5=null;
		    this.Item_6=null;
		    this.Item_7=null;
		    this.Item_8=null;
		    this.Item_9=null;
		    this.Item_10=null;
		    this.Item_11=null;

			LookShousUI.__super.call(this);
		}

		CLASS$(LookShousUI,'ui.LookShousUI',_super);
		var __proto__=LookShousUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LookShousUI.uiView);

		}

		LookShousUI.uiView={"type":"View","props":{"width":600,"mouseThrough":true,"height":400},"child":[{"type":"Image","props":{"y":62,"x":185,"var":"Shoushi_bg","skin":"gameres/png/shengxiao.png"},"child":[{"type":"Button","props":{"y":-5,"x":168,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Image","props":{"y":55,"x":17,"width":206,"var":"sKuang","height":156},"child":[{"type":"Image","props":{"y":6,"x":4,"width":44,"var":"Item_0","name":"0","height":44}},{"type":"Image","props":{"y":6,"x":54,"width":44,"var":"Item_1","name":"1","height":44}},{"type":"Image","props":{"y":6,"x":104,"width":44,"var":"Item_2","name":"2","height":44}},{"type":"Image","props":{"y":6,"x":154,"width":44,"var":"Item_3","name":"3","height":44}},{"type":"Image","props":{"y":54,"x":4,"width":44,"var":"Item_4","name":"4","height":44}},{"type":"Image","props":{"y":54,"x":54,"width":44,"var":"Item_5","name":"5","height":44}},{"type":"Image","props":{"y":54,"x":104,"width":44,"var":"Item_6","name":"6","height":44}},{"type":"Image","props":{"y":54,"x":154,"width":44,"var":"Item_7","name":"7","height":44}},{"type":"Image","props":{"y":104,"x":4,"width":44,"var":"Item_8","name":"8","height":44}},{"type":"Image","props":{"y":104,"x":54,"width":44,"var":"Item_9","name":"9","height":44}},{"type":"Image","props":{"y":104,"x":104,"width":44,"var":"Item_10","name":"10","height":44}},{"type":"Image","props":{"y":104,"x":154,"width":44,"var":"Item_11","name":"11","height":44}}]}]}]};
		return LookShousUI;
	})(View);
var LookShoushiUI=(function(_super){
		function LookShoushiUI(){
			
		    this.img_bg=null;
		    this.btn_close=null;
		    this.img_box=null;
		    this.Item_0=null;
		    this.Item_1=null;
		    this.Item_2=null;
		    this.Item_3=null;
		    this.Item_4=null;
		    this.Item_5=null;

			LookShoushiUI.__super.call(this);
		}

		CLASS$(LookShoushiUI,'ui.LookShoushiUI',_super);
		var __proto__=LookShoushiUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LookShoushiUI.uiView);

		}

		LookShoushiUI.uiView={"type":"View","props":{"width":600,"mouseThrough":true,"height":400},"child":[{"type":"Image","props":{"y":82,"x":205,"var":"img_bg","skin":"gameres/png/shoushi.png"},"child":[{"type":"Button","props":{"y":-8,"x":119,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Image","props":{"y":55,"x":15,"width":149,"var":"img_box","height":104},"child":[{"type":"Image","props":{"y":5,"x":6,"width":44,"var":"Item_0","name":"0","height":44}},{"type":"Image","props":{"y":5,"x":53,"width":44,"var":"Item_1","name":"1","height":44}},{"type":"Image","props":{"y":5,"x":100,"width":44,"var":"Item_2","name":"2","height":44}},{"type":"Image","props":{"y":53,"x":6,"width":44,"var":"Item_3","name":"3","height":44}},{"type":"Image","props":{"y":53,"x":53,"width":44,"var":"Item_4","name":"4","height":44}},{"type":"Image","props":{"y":53,"x":100,"width":44,"var":"Item_5","name":"5","height":44}}]}]}]};
		return LookShoushiUI;
	})(View);
var LooksShopUI=(function(_super){
		function LooksShopUI(){
			
		    this.LookShop_bg=null;
		    this.Look_S_List=null;
		    this.txt_Name=null;
		    this.txt_Gold=null;
		    this.txt_ShopName=null;
		    this.but_Close=null;
		    this.but_Exit=null;
		    this.but_Buy=null;

			LooksShopUI.__super.call(this);
		}

		CLASS$(LooksShopUI,'ui.LooksShopUI',_super);
		var __proto__=LooksShopUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LooksShopUI.uiView);

		}

		LooksShopUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":21,"x":310,"var":"LookShop_bg","skin":"gameres/png/myshopwin.png"},"child":[{"type":"List","props":{"y":102,"x":18,"width":252,"var":"Look_S_List","height":201}},{"type":"Text","props":{"y":323,"x":28,"text":"物品名称：","fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":350,"x":28,"text":"物品价格：","fontSize":16,"color":"#ffffff"}},{"type":"TextInput","props":{"y":320,"x":107,"width":145,"var":"txt_Name","text":"TextInput","height":22,"fontSize":16,"editable":false,"disabled":true,"color":"#ffffff"}},{"type":"TextInput","props":{"y":347,"x":107,"width":145,"var":"txt_Gold","text":"TextInput","height":22,"fontSize":16,"editable":false,"disabled":true,"color":"#ffffff"}},{"type":"TextInput","props":{"y":66,"x":101,"width":160,"var":"txt_ShopName","text":"TextInput","height":22,"fontSize":16,"editable":false,"disabled":true,"color":"#ffffff"}},{"type":"Button","props":{"y":-7,"x":222,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":377,"x":159,"width":70,"var":"but_Exit","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581","label":"取消","height":25}},{"type":"Text","props":{"y":69,"x":26,"text":"摊位名称：","fontSize":16,"color":"#c7915d"}},{"type":"Text","props":{"y":28,"x":128,"width":39,"text":"摆摊","height":16,"fontSize":16,"color":"#c7915d","bold":true}},{"type":"Button","props":{"y":377,"x":62,"width":70,"var":"but_Buy","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581","label":"购买","height":25}}]}]};
		return LooksShopUI;
	})(View);
var MailUI=(function(_super){
		function MailUI(){
			
		    this.img_imgbg=null;
		    this.img_mailExtract=null;
		    this.lab_limited=null;
		    this.btn_close=null;
		    this.btn_deleteMail=null;
		    this.btn_deleteAll=null;
		    this.btn_getAllItem=null;
		    this.btn_getItem=null;
		    this.list_itemList=null;
		    this.text_mome=null;
		    this.text_time=null;
		    this.text_sendName=null;
		    this.text_caption=null;
		    this.list_mailList=null;
		    this.box_move=null;
		    this.lab_currentMailCount=null;
		    this.lab_maxMailCount=null;

			MailUI.__super.call(this);
		}

		CLASS$(MailUI,'ui.MailUI',_super);
		var __proto__=MailUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MailUI.uiView);

		}

		MailUI.uiView={"type":"View","props":{"y":0,"x":0,"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":712,"var":"img_imgbg","skin":"gameres/png/mail_bg.png","height":465,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":332,"x":564,"var":"img_mailExtract","skin":"gameres/png/mail_extract.png"}},{"type":"Label","props":{"y":75,"x":582,"var":"lab_limited","fontSize":15,"color":"#c8c1b9"}},{"type":"Button","props":{"y":-9,"x":653,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":394,"x":544,"var":"btn_deleteMail","stateNum":2,"skin":"gameres/ui/btn_delMail.png"}},{"type":"Button","props":{"y":410,"x":110,"var":"btn_deleteAll","stateNum":2,"skin":"gameres/ui/btn_delReaded.png","scaleY":0.83,"scaleX":0.83}},{"type":"Button","props":{"y":410,"x":26,"var":"btn_getAllItem","stateNum":2,"skin":"gameres/ui/btn_getAllItem.png","scaleY":0.83,"scaleX":0.83}},{"type":"Button","props":{"y":394,"x":416,"var":"btn_getItem","stateNum":2,"skin":"gameres/ui/btn_extract.png"}},{"type":"List","props":{"y":328,"x":218,"width":348,"var":"list_itemList","spaceX":2,"repeatY":1,"height":65},"child":[{"type":"Box","props":{"y":0,"x":0,"width":55,"renderType":"render","height":55},"child":[{"type":"Image","props":{"skin":"gameres/ui/img_mailItem_bg.png","name":"img_itembg"},"child":[{"type":"Image","props":{"name":"img_item","centerY":0,"centerX":0}},{"type":"Label","props":{"y":41,"x":-8,"width":60,"text":"100","name":"lab_maxCount","height":12,"fontSize":11,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":41,"x":-8,"width":60,"visible":false,"text":"100","name":"lab_currentCount","height":12,"fontSize":11,"color":"#ffffff","align":"right"}}]}]}]},{"type":"Text","props":{"y":191,"x":218,"wordWrap":true,"width":461,"var":"text_mome","overflow":"scroll","mouseEnabled":true,"height":134,"fontSize":18,"color":"#c8c1b9"}},{"type":"Text","props":{"y":136,"x":218,"width":119,"var":"text_time","height":25,"fontSize":17,"color":"#c8c1b9"}},{"type":"Text","props":{"y":75,"x":218,"width":290,"var":"text_sendName","height":25,"fontSize":17,"color":"#c8c1b9"}},{"type":"Text","props":{"y":105,"x":218,"width":404,"var":"text_caption","height":25,"fontSize":17,"color":"#c8c1b9"}},{"type":"List","props":{"y":71,"x":23,"width":173,"var":"list_mailList","spaceY":-4,"repeatY":100,"height":334},"child":[{"type":"Box","props":{"y":0,"x":3,"width":168,"renderType":"render","height":61},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"gameres/png/mail_veiw.png","scaleY":0.83,"scaleX":0.83,"name":"img_skin"}},{"type":"Label","props":{"y":9,"x":8,"visible":false,"stroke":1,"name":"lab_sendName","fontSize":13,"color":"#e2720c"}},{"type":"Label","props":{"y":13,"x":128,"text":"未读","strokeColor":"#000000","stroke":1,"name":"lab_state","fontSize":16,"font":"Microsoft YaHei","color":"#c8c1b9","bold":true}},{"type":"Label","props":{"y":36,"x":12,"width":150,"strokeColor":"#000000","stroke":1,"name":"lab_date","height":17,"fontSize":13,"font":"Microsoft YaHei","color":"#c8c1b9","align":"right"}},{"type":"Label","props":{"y":36,"x":12,"width":150,"text":"14天后过期","strokeColor":"#000000","stroke":1,"name":"lab_limited","height":17,"fontSize":13,"font":"Microsoft YaHei","color":"#c8c1b9","align":"right"}},{"type":"Label","props":{"y":13,"x":8,"width":119,"text":"邮件标题邮件标题标题","strokeColor":"#000000","stroke":1,"name":"lab_caption","height":21,"fontSize":16,"font":"Microsoft YaHei","color":"#cd964e","bold":true}}]}]},{"type":"Box","props":{"y":0,"x":0,"width":652,"var":"box_move","height":73}},{"type":"Label","props":{"y":417,"x":272,"width":46,"var":"lab_currentMailCount","text":"0","height":15,"fontSize":15,"color":"#c8c1b9","align":"right"}},{"type":"Label","props":{"y":417,"x":321,"width":3,"text":"/","height":12,"fontSize":15,"color":"#c8c1b9"}},{"type":"Label","props":{"y":417,"x":329,"width":49,"var":"lab_maxMailCount","text":"0","height":15,"fontSize":15,"color":"#c8c1b9","align":"left"}},{"type":"Label","props":{"y":414,"x":220,"text":"邮件数量:","strokeColor":"#000000","stroke":1,"fontSize":16,"font":"Microsoft YaHei","color":"#c8c1b9","bold":true}}]}]};
		return MailUI;
	})(View);
var minimapUI=(function(_super){
		function minimapUI(){
			
		    this.Big_mapimg=null;
		    this.lb_mapname=null;
		    this.btn_close=null;
		    this.but_goto=null;
		    this.npc_list=null;
		    this.boxmap=null;
		    this.targetPos_img=null;
		    this.targetPos_txt=null;

			minimapUI.__super.call(this);
		}

		CLASS$(minimapUI,'ui.minimapUI',_super);
		var __proto__=minimapUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(minimapUI.uiView);

		}

		minimapUI.uiView={"type":"View","props":{"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":712,"var":"Big_mapimg","skin":"gameres/png/img_bj.png","height":465,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":418,"x":38,"width":133,"var":"lb_mapname","text":"啊啊啊啊啊啊","strokeColor":"#000000","height":20,"fontSize":22,"color":"#c4b4a1"}},{"type":"Button","props":{"y":-9,"x":636,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":406,"x":564,"width":100,"var":"but_goto","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffe9aa,#ffe9aa","label":"寻 路","height":47}},{"type":"List","props":{"y":95,"x":537,"width":150,"var":"npc_list","height":302}},{"type":"Panel","props":{"y":208,"x":276,"width":497,"var":"boxmap","pivotY":144,"pivotX":249,"height":334}},{"type":"Image","props":{"y":20,"x":327,"width":60,"skin":"gameres/ui/map_title.png","height":30}},{"type":"Image","props":{"y":62,"x":535,"width":154,"skin":"gameres/ui/npclist.png","height":37}},{"type":"Image","props":{"y":154,"x":70,"var":"targetPos_img","skin":"gameres/ui/minmap_posBg.png","name":"targetPos_img"},"child":[{"type":"Text","props":{"y":5,"x":0,"width":53,"var":"targetPos_txt","text":"(111,111)","name":"targetPos_txt","height":17,"color":"#32ff00","align":"center"}}]}]}]};
		return minimapUI;
	})(View);
var MyShopMsgUI=(function(_super){
		function MyShopMsgUI(){
			
		    this.MyShopMsg_bg=null;
		    this.but_baitan=null;
		    this.but_Close=null;
		    this.txt_GoldCount=null;
		    this.btns_box=null;
		    this.but_Gold=null;
		    this.goldname2=null;
		    this.but_bindCionNum=null;
		    this.goldname5=null;
		    this.but_GameGold=null;
		    this.goldname1=null;
		    this.but_bindGoldNum=null;
		    this.goldname6=null;
		    this.but_gamePointNum=null;
		    this.goldname7=null;
		    this.but_GameDiamond=null;
		    this.goldname4=null;
		    this.but_GameGird=null;
		    this.goldname3=null;

			MyShopMsgUI.__super.call(this);
		}

		CLASS$(MyShopMsgUI,'ui.MyShopMsgUI',_super);
		var __proto__=MyShopMsgUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MyShopMsgUI.uiView);

		}

		MyShopMsgUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":122,"x":213,"var":"MyShopMsg_bg","skin":"gameres/png/myshopmsg.png"},"child":[{"type":"Button","props":{"y":205,"x":116,"width":70,"var":"but_baitan","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelColors":"#D7B581,#D7B581","label":"确定","height":25}},{"type":"Button","props":{"y":205,"x":281,"width":70,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelColors":"#D7B581,#D7B581","label":"取消","height":25}},{"type":"TextInput","props":{"y":82,"x":106,"width":241,"var":"txt_GoldCount","restrict":"0-9","maxChars":9,"height":22,"color":"#ffffff"}},{"type":"Box","props":{"y":0,"x":0,"width":449,"var":"btns_box","name":"btns_box","mouseThrough":true,"height":238},"child":[{"type":"Box","props":{"y":109,"x":123,"width":0,"mouseThrough":true,"height":0},"child":[{"type":"Button","props":{"y":0,"x":0,"width":20,"var":"but_Gold","stateNum":2,"skin":"gameres/ui/check.png","height":20}},{"type":"Text","props":{"y":3,"x":23,"var":"goldname2","text":"金币出售","name":"goldname2","color":"#ffffff"}}]},{"type":"Box","props":{"y":109,"x":230,"mouseThrough":true},"child":[{"type":"Button","props":{"y":0,"x":0,"width":20,"var":"but_bindCionNum","stateNum":2,"skin":"gameres/ui/check.png","height":20}},{"type":"Text","props":{"y":3,"x":23,"var":"goldname5","text":"绑定金币出售","name":"goldname5","color":"#ffffff"}}]},{"type":"Box","props":{"y":134,"x":123,"mouseThrough":true},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"but_GameGold","stateNum":2,"skin":"gameres/ui/check.png","selected":false,"height":20}},{"type":"Text","props":{"y":3,"x":22,"var":"goldname1","text":"元宝出售","name":"goldname1","color":"#ffffff"}}]},{"type":"Box","props":{"y":134,"x":230,"mouseThrough":true},"child":[{"type":"Button","props":{"y":0,"x":0,"width":20,"var":"but_bindGoldNum","stateNum":2,"skin":"gameres/ui/check.png","height":20}},{"type":"Text","props":{"y":3,"x":22,"var":"goldname6","text":"绑定元宝出售","name":"goldname6","color":"#ffffff"}}]},{"type":"Box","props":{"y":158,"x":123,"mouseThrough":true},"child":[{"type":"Button","props":{"y":0,"x":0,"width":20,"var":"but_gamePointNum","stateNum":2,"skin":"gameres/ui/check.png","height":20}},{"type":"Text","props":{"y":3,"x":22,"var":"goldname7","text":"游戏点出售","name":"goldname7","color":"#ffffff"}}]},{"type":"Box","props":{"y":158,"x":230,"mouseThrough":true},"child":[{"type":"Button","props":{"y":0,"x":0,"width":20,"var":"but_GameDiamond","stateNum":2,"skin":"gameres/ui/check.png","height":20}},{"type":"Text","props":{"y":4,"x":23,"var":"goldname4","text":"金刚石出售","name":"goldname4","color":"#ffffff"}}]},{"type":"Box","props":{"y":182,"x":123,"mouseThrough":true},"child":[{"type":"Button","props":{"y":0,"x":0,"width":20,"var":"but_GameGird","stateNum":2,"skin":"gameres/ui/check.png","height":20}},{"type":"Text","props":{"y":4,"x":22,"var":"goldname3","text":"灵符出售","name":"goldname3","color":"#ffffff"}}]}]}]}]};
		return MyShopMsgUI;
	})(View);
var MyStoreUI=(function(_super){
		function MyStoreUI(){
			
		    this.img_bg=null;
		    this.btn_close=null;
		    this.box_0=null;
		    this.text_num0=null;
		    this.ListItem=null;
		    this.box_1=null;
		    this.text_num1=null;
		    this.ListOne=null;
		    this.box_2=null;
		    this.text_num2=null;
		    this.ListTwo=null;
		    this.box_3=null;
		    this.box_4=null;
		    this.txt_storeName=null;
		    this.txt_storeTime=null;
		    this.txt_storeSelling=null;
		    this.txt_storeSelled=null;
		    this.txt_storeStorage=null;
		    this.position=null;
		    this.category=null;
		    this.btn_search=null;
		    this.sort=null;
		    this.type=null;
		    this.img_item=null;
		    this.btn_baitan=null;
		    this.btn_add=null;
		    this.type2=null;
		    this.type1=null;
		    this.ShopType=null;
		    this.price_low=null;
		    this.price_high=null;
		    this.input_search=null;
		    this.price=null;
		    this.btn_sell=null;
		    this.btn_sold=null;
		    this.btn_mydepot=null;
		    this.btn_diary=null;
		    this.btn_information=null;
		    this.btn_first=null;
		    this.btn_previous=null;
		    this.btn_next=null;
		    this.btn_last=null;

			MyStoreUI.__super.call(this);
		}

		CLASS$(MyStoreUI,'ui.MyStoreUI',_super);
		var __proto__=MyStoreUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MyStoreUI.uiView);

		}

		MyStoreUI.uiView={"type":"View","props":{"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":652,"var":"img_bg","skin":"gameres/png/personalstore_bg.png","height":439,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":-7,"x":580,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"close"}},{"type":"Box","props":{"y":107,"x":27,"width":600,"var":"box_0","name":"0","height":237},"child":[{"type":"Label","props":{"y":0,"x":533,"width":65,"valign":"middle","text":"取回物品","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":468,"width":65,"valign":"middle","text":"返回仓库","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":327,"width":141,"valign":"middle","text":"添加日期","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":266,"width":61,"valign":"middle","text":"物品类别","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":157,"width":109,"valign":"middle","text":"销售价格","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":48,"width":109,"valign":"middle","text":"物品名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":1,"width":47,"valign":"middle","height":37,"borderColor":"#B89458","align":"center"}},{"type":"Text","props":{"y":-50,"x":454,"var":"text_num0","text":"正在出售：1/1","name":"text_num0","color":"#e8a448","align":"left"}},{"type":"List","props":{"y":37,"x":1,"width":598,"var":"ListItem","name":"ListItem","height":198}}]},{"type":"Box","props":{"y":107,"x":27,"width":600,"var":"box_1","name":"1","height":237},"child":[{"type":"Label","props":{"y":0,"x":516,"width":83,"valign":"middle","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":375,"width":141,"valign":"middle","text":"出售时间","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":266,"width":109,"valign":"middle","text":"销售价格","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":157,"width":109,"valign":"middle","text":"用户名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":48,"width":109,"valign":"middle","text":"物品名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":1,"width":47,"valign":"middle","height":37,"borderColor":"#B89458","align":"center"}},{"type":"Text","props":{"y":-50,"x":454,"var":"text_num1","text":"已经出售：1/1","name":"text_num1","color":"#e8a448","align":"left"}},{"type":"List","props":{"y":37,"x":1,"width":598,"var":"ListOne","name":"ListOne","height":198}}]},{"type":"Box","props":{"y":107,"x":27,"width":600,"var":"box_2","name":"2","height":237},"child":[{"type":"Label","props":{"x":1,"width":47,"valign":"middle","height":37,"borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":48,"width":109,"valign":"middle","text":"物品名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"x":157,"width":109,"valign":"middle","text":"销售价格","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"x":266,"width":61,"valign":"middle","text":"物品类别","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"x":327,"width":141,"valign":"middle","text":"添加日期","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"x":468,"width":65,"valign":"middle","text":"放入店铺","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"x":533,"width":65,"valign":"middle","text":"取回物品","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Text","props":{"y":-50,"x":454,"var":"text_num2","text":"我的仓库：1/1","name":"text_num2","color":"#e8a448","align":"left"}},{"type":"List","props":{"y":37,"x":1,"width":598,"var":"ListTwo","name":"ListTwo","height":198}}]},{"type":"Box","props":{"y":107,"x":27,"width":600,"var":"box_3","name":"3","height":237}},{"type":"Box","props":{"y":107,"x":27,"width":600,"var":"box_4","name":"4","height":237},"child":[{"type":"Text","props":{"y":12,"x":23,"var":"txt_storeName","valign":"middle","text":"店铺名称：少林","name":"txt_storeName","color":"#e8a448","align":"left"}},{"type":"Text","props":{"y":35,"x":23,"var":"txt_storeTime","valign":"middle","text":"开业时间：2019-02-12  09:58:54","name":"txt_storeTime","color":"#e8a448","align":"left"}},{"type":"Text","props":{"y":58,"x":23,"var":"txt_storeSelling","valign":"middle","text":"正在出售：4","name":"txt_storeSelling","color":"#e8a448","align":"left"}},{"type":"Text","props":{"y":80,"x":23,"var":"txt_storeSelled","valign":"middle","text":"已经出售：2","name":"txt_storeSelled","color":"#e8a448","align":"left"}},{"type":"Text","props":{"y":103,"x":23,"var":"txt_storeStorage","valign":"middle","text":"我的仓库：3","name":"txt_storeStorage","color":"#e8a448","align":"left"}}]},{"type":"Text","props":{"y":24,"x":282,"text":"我的店铺","fontSize":22,"color":"#e8a448"}},{"type":"Text","props":{"y":354,"x":22,"text":"位置","color":"#c0c0c0"}},{"type":"Text","props":{"y":382,"x":22,"text":"类别","color":"#c0c0c0"}},{"type":"Text","props":{"y":408,"x":22,"text":"价格范围","color":"#c0c0c0"}},{"type":"Text","props":{"y":355,"x":132,"text":"关键字","color":"#c0c0c0"}},{"type":"Text","props":{"y":382,"x":173,"text":"排序","color":"#c0c0c0"}},{"type":"Text","props":{"y":412,"x":181,"text":"之间","color":"#c0c0c0"}},{"type":"Text","props":{"y":412,"x":209,"text":"类型","color":"#c0c0c0"}},{"type":"Text","props":{"y":386,"x":490,"text":"类别","color":"#c0c0c0"}},{"type":"Text","props":{"y":414,"x":388,"text":"价格","color":"#c0c0c0"}},{"type":"Text","props":{"y":383,"x":388,"text":"类型","color":"#c0c0c0"}},{"type":"Text","props":{"y":356,"x":388,"text":"位置","color":"#c0c0c0"}},{"type":"ComboBox","props":{"y":353,"x":51,"width":72,"visibleNum":10,"var":"position","skin":"gameres/ui/combobox.png","selectedIndex":0,"labels":"正在出售,已经出售,我的仓库","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"ComboBox","props":{"y":381,"x":76,"width":47,"visibleNum":10,"var":"category","skin":"gameres/ui/00094.png","selectedIndex":0,"labels":"所有,装饰,补给,强化,好友,限量,奇珍","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"Button","props":{"y":354,"x":254,"width":40,"var":"btn_search","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_search","labelColors":"#e8d4a8,#e8a448","label":"搜索","height":20}},{"type":"ComboBox","props":{"y":381,"x":200,"width":92,"visibleNum":10,"var":"sort","skin":"gameres/ui/combobox.png","selectedIndex":0,"labels":"价格从低到高,价格从高到低","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"ComboBox","props":{"y":408,"x":236,"width":56,"visibleNum":10,"var":"type","skin":"gameres/ui/00094.png","sizeGrid":"-79,23,-68,8","selectedIndex":0,"labels":"不限,元宝,游戏点,金币","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff","height":22}},{"type":"Image","props":{"y":357,"x":307,"var":"img_item","skin":"gameres/ui/00099.png","name":"img_item"}},{"type":"Button","props":{"y":409,"x":538,"width":65,"var":"btn_baitan","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_baitan","labelColors":"#e8d4a8,#e8a448","label":"开始摆摊","height":20}},{"type":"Button","props":{"y":408,"x":488,"width":40,"var":"btn_add","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_add","labelColors":"#e8d4a8,#e8a448","label":"增加","height":20}},{"type":"ComboBox","props":{"y":381,"x":519,"width":62,"visibleNum":10,"var":"type2","skin":"gameres/ui/00094.png","selectedIndex":0,"labels":"装饰,补给,强化,好友,限量,奇珍","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff","height":22}},{"type":"ComboBox","props":{"y":379,"x":416,"width":62,"visibleNum":10,"var":"type1","skin":"gameres/ui/00094.png","selectedIndex":0,"labels":"元宝,游戏点,金币","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff","height":22}},{"type":"ComboBox","props":{"y":352,"x":416,"width":62,"visibleNum":10,"var":"ShopType","skin":"gameres/ui/00094.png","selectedIndex":0,"labels":"店铺,仓库","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff","height":22}},{"type":"TextInput","props":{"y":407,"x":76,"width":47,"var":"price_low","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"TextInput","props":{"y":407,"x":130,"width":47,"var":"price_high","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"TextInput","props":{"y":353,"x":172,"width":77,"var":"input_search","promptColor":"#ffffff","name":"input_search","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"TextInput","props":{"y":408,"x":416,"width":62,"var":"price","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"Button","props":{"y":72,"x":29,"width":90,"var":"btn_sell","stateNum":2,"skin":"gameres/ui/btn_ok.png","selected":true,"name":"0","labelColors":"#e8d4a8,#e8a448","label":"正在出售","height":34}},{"type":"Button","props":{"y":72,"x":117,"width":90,"var":"btn_sold","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"1","labelColors":"#e8d4a8,#e8a448","label":"已经出售","height":34}},{"type":"Button","props":{"y":72,"x":206,"width":90,"var":"btn_mydepot","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"2","labelColors":"#e8d4a8,#e8a448","label":"我的仓库","height":34}},{"type":"Button","props":{"y":72,"x":295,"width":90,"var":"btn_diary","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"3","labelColors":"#e8d4a8,#e8a448","label":"信息日记","height":34}},{"type":"Button","props":{"y":72,"x":384,"width":90,"var":"btn_information","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"4","labelColors":"#e8d4a8,#e8a448","label":"基本信息","height":34}},{"type":"Button","props":{"y":357,"x":482,"var":"btn_first","stateNum":3,"skin":"gameres/ui/btn_first.png","name":"btn_first"}},{"type":"Button","props":{"y":357,"x":512,"var":"btn_previous","stateNum":3,"skin":"gameres/ui/btn_previous.png","name":"btn_previous"}},{"type":"Button","props":{"y":357,"x":557,"var":"btn_next","stateNum":3,"skin":"gameres/ui/btn_next.png","name":"btn_next"}},{"type":"Button","props":{"y":357,"x":603,"var":"btn_last","stateNum":3,"skin":"gameres/ui/btn_last.png","name":"btn_last"}}]}]};
		return MyStoreUI;
	})(View);
var MyStoreItemUI=(function(_super){
		function MyStoreItemUI(){
			
		    this.img_bg=null;
		    this.ItemImg=null;
		    this.ItemName=null;
		    this.ItemPrice=null;
		    this.ItemType=null;
		    this.ItemTime=null;
		    this.ItemBack=null;
		    this.ItemRetrieve=null;

			MyStoreItemUI.__super.call(this);
		}

		CLASS$(MyStoreItemUI,'ui.MyStoreItemUI',_super);
		var __proto__=MyStoreItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MyStoreItemUI.uiView);

		}

		MyStoreItemUI.uiView={"type":"View","props":{"width":598,"height":37},"child":[{"type":"Image","props":{"width":598,"var":"img_bg","name":"img_bg","height":37},"child":[{"type":"Label","props":{"width":47,"var":"ItemImg","name":"ItemImg","height":37,"borderColor":"#B89458"}},{"type":"Label","props":{"x":47,"width":109,"var":"ItemName","valign":"middle","overflow":"hidden","name":"ItemName","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":156,"width":109,"var":"ItemPrice","valign":"middle","overflow":"hidden","name":"ItemPrice","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":265,"width":61,"var":"ItemType","valign":"middle","overflow":"hidden","name":"ItemType","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":326,"width":141,"var":"ItemTime","valign":"middle","overflow":"hidden","name":"ItemTime","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":467,"width":65,"var":"ItemBack","valign":"middle","underline":true,"overflow":"hidden","name":"ItemBack","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":532,"width":65,"var":"ItemRetrieve","valign":"middle","underline":true,"overflow":"hidden","name":"ItemRetrieve","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}}]}]};
		return MyStoreItemUI;
	})(View);
var NewBagUI=(function(_super){
		function NewBagUI(){
			
		    this.Bagimg_bg=null;
		    this.Bag_List=null;
		    this.txt_wsize=null;
		    this.but_re=null;
		    this.but_Close=null;
		    this.tab_box=null;

			NewBagUI.__super.call(this);
		}

		CLASS$(NewBagUI,'ui.NewBagUI',_super);
		var __proto__=NewBagUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewBagUI.uiView);

		}

		NewBagUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600},"child":[{"type":"Image","props":{"y":48,"x":85,"width":514,"var":"Bagimg_bg","skin":"gameres/png/bag_bg.png"},"child":[{"type":"List","props":{"x":14,"width":489,"var":"Bag_List","top":86,"height":252}},{"type":"Text","props":{"y":63,"x":373,"var":"txt_wsize","text":"负重： 200/300","fontSize":16,"color":"#f9ac01"}},{"type":"Image","props":{"y":348,"x":33,"visible":false,"skin":"gameres/ui/jiaoyi_icon.png"}},{"type":"Image","props":{"y":404,"x":35,"visible":false,"skin":"gameres/ui/bag_yuanbao .png"}},{"type":"Image","props":{"y":379,"x":36,"visible":false,"skin":"gameres/ui/bag_bj.png"}},{"type":"Image","props":{"y":426,"x":32,"visible":false,"skin":"gameres/ui/bag_zuanshi.png"}},{"type":"Button","props":{"y":377,"x":416,"width":83,"var":"but_re","stateNum":2,"skin":"gameres/ui/bag_btnBg.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelPadding":"3","labelColors":"#ffe9aa,#ffe9aa","labelAlign":"center","label":"刷新","height":39}},{"type":"Button","props":{"y":351,"x":235,"width":83,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","height":39}},{"type":"Button","props":{"y":351,"x":322,"width":83,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","height":39}},{"type":"Button","props":{"y":349,"x":407,"width":83,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","height":39}},{"type":"Button","props":{"y":404,"x":237,"width":83,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","height":39}},{"type":"Button","props":{"y":-21,"x":456,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close_new.png","name":"but_Close"}},{"type":"HBox","props":{"y":47,"x":13,"var":"tab_box","name":"tab_box"},"child":[{"type":"Button","props":{"stateNum":2,"skin":"gameres/ui/bag_tab0.png"}},{"type":"Button","props":{"stateNum":2,"skin":"gameres/ui/bag_tab1.png"}},{"type":"Button","props":{"stateNum":2,"skin":"gameres/ui/bag_tab2.png"}},{"type":"Button","props":{"stateNum":2,"skin":"gameres/ui/bag_tab3.png"}}]}]}]};
		return NewBagUI;
	})(View);
var NewHeroBagUI=(function(_super){
		function NewHeroBagUI(){
			
		    this.HeroBag_bg=null;
		    this.but_Close=null;
		    this.item_bg=null;
		    this.but_re=null;
		    this.HeroBag_List=null;

			NewHeroBagUI.__super.call(this);
		}

		CLASS$(NewHeroBagUI,'ui.NewHeroBagUI',_super);
		var __proto__=NewHeroBagUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewHeroBagUI.uiView);

		}

		NewHeroBagUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":56,"x":505,"var":"HeroBag_bg","skin":"gameres/png/herobag_bg.png"},"child":[{"type":"Button","props":{"y":-9,"x":237,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Image","props":{"y":55,"x":28,"width":255,"var":"item_bg","height":195}},{"type":"Button","props":{"y":293,"x":211,"width":70,"var":"but_re","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","label":"刷新","height":25}},{"type":"Text","props":{"y":20,"x":106,"text":"英雄包裹","strokeColor":"#000000","stroke":2,"fontSize":24,"color":"#E8B656","align":"center"}},{"type":"List","props":{"y":55,"x":28,"width":255,"var":"HeroBag_List","height":195}}]}]};
		return NewHeroBagUI;
	})(View);
var NewItemInfoUI=(function(_super){
		function NewItemInfoUI(){
			
		    this.Item_bg=null;
		    this.m_List=null;
		    this.but_bg=null;
		    this.img_name=null;
		    this.img_logo=null;
		    this.img_butbg=null;
		    this.but_Close=null;
		    this.ItemDescTop=null;
		    this.ShopTextNum=null;
		    this.ShopTextPic=null;
		    this.ShopNum=null;
		    this.shop_minus=null;
		    this.shop_plus=null;
		    this.ShopPic=null;
		    this.change_side=null;
		    this.wear_txt=null;

			NewItemInfoUI.__super.call(this);
		}

		CLASS$(NewItemInfoUI,'ui.NewItemInfoUI',_super);
		var __proto__=NewItemInfoUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewItemInfoUI.uiView);

		}

		NewItemInfoUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":92,"x":255,"width":290,"var":"Item_bg","skin":"gameres/png/skill_bg.png","sizeGrid":"92,31,70,35","height":290},"child":[{"type":"Panel","props":{"y":77,"x":11,"width":263,"var":"m_List","name":"m_List","height":141}},{"type":"List","props":{"y":77,"x":11,"width":263,"height":141}},{"type":"Image","props":{"width":260,"var":"but_bg","left":11,"height":44,"bottom":13},"child":[{"type":"Button","props":{"y":9,"x":87,"width":85,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelSize":18,"labelColors":"#D7B581,#D7B581","label":"刷新刷新","height":25}},{"type":"Button","props":{"y":9,"x":0,"width":85,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelSize":18,"labelColors":"#D7B581,#D7B581","label":"刷新刷新","height":25}},{"type":"Button","props":{"y":9,"x":175,"width":85,"visible":false,"stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#eee3e2","labelSize":18,"labelColors":"#D7B581,#D7B581","label":"刷新刷新","height":25}}]},{"type":"Image","props":{"y":11,"x":11,"width":248,"var":"img_name","height":54},"child":[{"type":"Image","props":{"y":2,"x":2,"width":50,"var":"img_logo","height":50}}]},{"type":"Image","props":{"y":85,"x":9,"width":104,"var":"img_butbg","height":133}},{"type":"Button","props":{"var":"but_Close","top":-18,"stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.8,"scaleX":0.8,"right":-18}},{"type":"Label","props":{"y":45,"x":70,"width":187,"var":"ItemDescTop","name":"ItemDescTop","height":14,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":160,"x":60,"visible":false,"var":"ShopTextNum","text":"购买数量：","name":"ShopTextNum","left":65,"fontSize":18,"color":"#ffffff","bottom":102}},{"type":"Label","props":{"y":193,"x":60,"width":90,"visible":false,"var":"ShopTextPic","text":"购买总价：","name":"ShopTextPic","left":65,"height":18,"fontSize":18,"color":"#ffffff","bottom":70}},{"type":"TextInput","props":{"y":158,"x":140,"width":80,"visible":false,"var":"ShopNum","text":"1","strokeColor":"#896b4d","stroke":1,"restrict":"0-9","name":"ShopNum","left":145,"fontSize":14,"editable":true,"color":"#efe9e9","bottom":100,"borderColor":"#51462e","bgColor":"#1e1a16","align":"center"},"child":[{"type":"Button","props":{"y":0,"x":-1,"width":22,"var":"shop_minus","stateNum":3,"skin":"gameres/ui/shop_minus.png","name":"shop_minus","height":22}},{"type":"Button","props":{"y":0,"x":58,"width":22,"var":"shop_plus","stateNum":3,"skin":"gameres/ui/shop_plus.png","name":"shop_plus","height":22}}]},{"type":"TextInput","props":{"y":191,"x":140,"width":80,"visible":false,"var":"ShopPic","text":"100","strokeColor":"#896b4d","stroke":1,"name":"ShopPic","left":145,"fontSize":14,"editable":false,"color":"#efe9e9","bottom":67,"borderColor":"#51462e","bgColor":"#1e1a16","align":"center"}},{"type":"Button","props":{"y":74,"x":228,"width":49,"visible":false,"var":"change_side","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"change_side","labelSize":16,"labelColors":"#D7B581,#D7B581","labelAlign":"center","label":"切换","height":32}},{"type":"Text","props":{"y":54,"x":242,"var":"wear_txt","text":"穿戴中","name":"wear_txt","fontSize":14,"color":"#01ff15"}}]}]};
		return NewItemInfoUI;
	})(View);
var NewMyShopUI=(function(_super){
		function NewMyShopUI(){
			
		    this.MyShop_bg=null;
		    this.Shop_List=null;
		    this.txt_Name=null;
		    this.txt_Gold=null;
		    this.txt_ShopName=null;
		    this.but_Close=null;
		    this.but_begin=null;
		    this.but_exit=null;

			NewMyShopUI.__super.call(this);
		}

		CLASS$(NewMyShopUI,'ui.NewMyShopUI',_super);
		var __proto__=NewMyShopUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewMyShopUI.uiView);

		}

		NewMyShopUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":39,"x":290,"var":"MyShop_bg","skin":"gameres/png/myshopwin.png"},"child":[{"type":"List","props":{"y":100,"x":19,"width":252,"var":"Shop_List","height":201}},{"type":"Text","props":{"y":322,"x":28,"text":"物品名称：","fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":349,"x":28,"text":"物品价格：","fontSize":16,"color":"#ffffff"}},{"type":"TextInput","props":{"y":319,"x":107,"width":145,"var":"txt_Name","text":"TextInput","height":22,"fontSize":16,"editable":false,"disabled":true,"color":"#ffffff"}},{"type":"TextInput","props":{"y":346,"x":107,"width":145,"var":"txt_Gold","text":"TextInput","height":22,"fontSize":16,"editable":false,"disabled":true,"color":"#ffffff"}},{"type":"TextInput","props":{"y":66,"x":101,"width":160,"var":"txt_ShopName","text":"TextInput","height":22,"fontSize":16,"color":"#ffffff"}},{"type":"Button","props":{"y":-9,"x":221,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":380,"x":63,"width":70,"var":"but_begin","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelColors":"#D7B581,#D7B581","label":"摆摊","height":25}},{"type":"Button","props":{"y":380,"x":161,"width":70,"var":"but_exit","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelColors":"#D7B581,#D7B581","label":"取消","height":25}},{"type":"Text","props":{"y":68,"x":25,"text":"摊位名称：","fontSize":16,"color":"#c7915d"}},{"type":"Text","props":{"y":26,"x":125,"text":"摆摊","strokeColor":"#000000","stroke":2,"fontSize":24,"font":"SimSun","color":"#ddaf52","bold":true,"align":"center"}}]}]};
		return NewMyShopUI;
	})(View);
var NewNpcShopUI=(function(_super){
		function NewNpcShopUI(){
			
		    this.NpcShop_bg=null;
		    this.win_gb=null;
		    this.M_List=null;
		    this.Npc_Repair=null;
		    this.but_Close=null;
		    this.Npc_Repair2=null;
		    this.Npc_Sell=null;
		    this.Npc_BuyBj=null;
		    this.Npc_Buy=null;
		    this.inf_bg=null;
		    this.inf_Close=null;
		    this.M_List2=null;
		    this.pageup=null;
		    this.pagedown=null;
		    this.pageNum=null;

			NewNpcShopUI.__super.call(this);
		}

		CLASS$(NewNpcShopUI,'ui.NewNpcShopUI',_super);
		var __proto__=NewNpcShopUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewNpcShopUI.uiView);

		}

		NewNpcShopUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":0,"x":0,"width":380,"var":"NpcShop_bg","skin":"gameres/png/npcitems.png","height":422},"child":[{"type":"Image","props":{"y":113,"x":22,"width":341,"var":"win_gb","height":229},"child":[{"type":"List","props":{"y":0,"x":0,"width":341,"var":"M_List","height":228}},{"type":"Button","props":{"y":321,"x":13,"width":70,"visible":false,"var":"Npc_Repair","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"0","labelColors":"#D7B581,#D7B581","label":"修理","height":25}},{"type":"Button","props":{"y":-119,"x":296,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":320,"x":95,"width":70,"visible":false,"var":"Npc_Repair2","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"1","labelColors":"#D7B581,#D7B581","label":"特殊修理","height":25}},{"type":"Button","props":{"y":256,"x":24,"width":70,"var":"Npc_Sell","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"2","labelStrokeColor":"#eee3e2","labelColors":"#D7B581,#D7B581","label":"出售","height":25}},{"type":"Button","props":{"y":256,"x":132,"width":70,"var":"Npc_BuyBj","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"4","labelColors":"#D7B581,#D7B581","label":"绑金购买","height":25}},{"type":"Button","props":{"y":256,"x":240,"width":70,"var":"Npc_Buy","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"3","labelColors":"#D7B581,#D7B581","label":"金币购买","height":25}},{"type":"Image","props":{"y":-59,"x":340,"width":149,"visible":false,"var":"inf_bg","skin":"gameres/png/npcitems2.png","height":292},"child":[{"type":"Button","props":{"y":-16,"x":118,"var":"inf_Close","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.6,"scaleX":0.6}},{"type":"List","props":{"y":25,"x":14,"width":103,"var":"M_List2","height":263}},{"type":"Button","props":{"y":61,"x":114,"var":"pageup","stateNum":2,"skin":"gameres/ui/pageup.png","name":"pageup"}},{"type":"Button","props":{"y":191,"x":114,"var":"pagedown","stateNum":2,"skin":"gameres/ui/pagedown.png","name":"pagedown"}},{"type":"Text","props":{"y":108,"x":123,"text":"第","fontSize":16,"color":"#c2ab0e","bold":true}},{"type":"Text","props":{"y":158,"x":123,"text":"页","fontSize":16,"color":"#c2ab0e","bold":true}},{"type":"Text","props":{"y":132,"x":127,"var":"pageNum","text":"3","name":"pageNum","fontSize":16,"color":"#28ff00"}}]}]},{"type":"Text","props":{"y":66,"x":43,"text":"物品名称","fontSize":18,"color":"#c2ab0e","bold":false}},{"type":"Text","props":{"y":66,"x":195,"text":"物品价格","fontSize":18,"color":"#c2ab0e"}}]}]};
		return NewNpcShopUI;
	})(View);
var NewNpcWinUI=(function(_super){
		function NewNpcWinUI(){
			
		    this.Npc_bg=null;
		    this.Show_gb=null;
		    this.but_Close=null;

			NewNpcWinUI.__super.call(this);
		}

		CLASS$(NewNpcWinUI,'ui.NewNpcWinUI',_super);
		var __proto__=NewNpcWinUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewNpcWinUI.uiView);

		}

		NewNpcWinUI.uiView={"type":"View","props":{"width":600,"mouseThrough":true,"height":400},"child":[{"type":"Image","props":{"y":93,"x":20,"visible":false,"var":"Npc_bg","skin":"gameres/png/npc_di.png"},"child":[{"type":"Panel","props":{"y":0,"x":0,"width":560,"var":"Show_gb","name":"Show_gb","height":215}},{"type":"Image","props":{"y":0,"x":0,"width":0,"height":0}},{"type":"Button","props":{"y":-35,"x":510,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}}]}]};
		return NewNpcWinUI;
	})(View);
var NewSaleShopUI=(function(_super){
		function NewSaleShopUI(){
			
		    this.NpcShop_bg=null;
		    this.win_gb=null;
		    this.M_List=null;
		    this.but_Close=null;
		    this.Npc_Buy=null;
		    this.inf_bg=null;
		    this.inf_Close=null;
		    this.M_List2=null;
		    this.pageup=null;
		    this.pagedown=null;
		    this.pageNum=null;

			NewSaleShopUI.__super.call(this);
		}

		CLASS$(NewSaleShopUI,'ui.NewSaleShopUI',_super);
		var __proto__=NewSaleShopUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewSaleShopUI.uiView);

		}

		NewSaleShopUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":0,"x":0,"width":380,"var":"NpcShop_bg","skin":"gameres/png/npcitems.png","height":422},"child":[{"type":"Image","props":{"y":113,"x":22,"width":341,"var":"win_gb","height":229},"child":[{"type":"List","props":{"y":0,"x":0,"width":341,"var":"M_List","height":228}},{"type":"Button","props":{"y":-121,"x":284,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":256,"x":240,"width":70,"var":"Npc_Buy","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"3","labelColors":"#D7B581,#D7B581","label":"购  买","height":25}},{"type":"Image","props":{"y":-78,"x":349,"width":340,"visible":false,"var":"inf_bg","skin":"gameres/png/npcitems2.png","height":381},"child":[{"type":"Button","props":{"y":-19,"x":309,"var":"inf_Close","stateNum":2,"skin":"gameres/ui/btn_close.png","scaleY":0.6,"scaleX":0.6}},{"type":"List","props":{"y":47,"x":14,"width":282,"var":"M_List2","height":314}},{"type":"Button","props":{"y":68,"x":296,"var":"pageup","stateNum":2,"skin":"gameres/ui/pageup.png","name":"pageup"}},{"type":"Button","props":{"y":198,"x":296,"var":"pagedown","stateNum":2,"skin":"gameres/ui/pagedown.png","name":"pagedown"}},{"type":"Text","props":{"y":115,"x":305,"text":"第","fontSize":16,"color":"#c2ab0e","bold":true}},{"type":"Text","props":{"y":165,"x":305,"text":"页","fontSize":16,"color":"#c2ab0e","bold":true}},{"type":"Text","props":{"y":139,"x":309,"var":"pageNum","text":"3","name":"pageNum","fontSize":16,"color":"#28ff00"}},{"type":"Text","props":{"y":20,"x":14,"text":"物品名称","fontSize":18,"color":"#c2ab0e","bold":false}},{"type":"Text","props":{"y":20,"x":166,"text":"物品价格","fontSize":18,"color":"#c2ab0e"}}]}]},{"type":"Text","props":{"y":66,"x":43,"text":"物品名称","fontSize":18,"color":"#c2ab0e","bold":false}},{"type":"Text","props":{"y":66,"x":195,"text":"物品价格","fontSize":18,"color":"#c2ab0e"}}]}]};
		return NewSaleShopUI;
	})(View);
var NewStoreRomUI=(function(_super){
		function NewStoreRomUI(){
			
		    this.Store_bg=null;
		    this.m_List=null;
		    this.but_Close=null;
		    this.btn_fastaccess=null;
		    this.lastPage_btn=null;
		    this.nextPage_btn=null;

			NewStoreRomUI.__super.call(this);
		}

		CLASS$(NewStoreRomUI,'ui.NewStoreRomUI',_super);
		var __proto__=NewStoreRomUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewStoreRomUI.uiView);

		}

		NewStoreRomUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":9,"x":480,"width":377,"var":"Store_bg","skin":"gameres/png/store_bg_new.png","sizeGrid":"46,51,63,47","height":448},"child":[{"type":"List","props":{"y":39,"x":11,"width":352,"var":"m_List","height":362}},{"type":"Button","props":{"y":-22,"x":318,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":400,"x":17,"width":67,"var":"btn_fastaccess","stateNum":2,"skin":"gameres/ui/fastaccess1.png","name":"btn_fastaccess","height":32}},{"type":"Button","props":{"y":400,"x":213,"var":"lastPage_btn","stateNum":2,"skin":"gameres/ui/wareHouse_lastPage.png","name":"lastPage_btn"}},{"type":"Button","props":{"y":400,"x":295,"var":"nextPage_btn","stateNum":2,"skin":"gameres/ui/wareHouse_nextPage.png","name":"nextPage_btn"}}]}]};
		return NewStoreRomUI;
	})(View);
var NpcShopUI=(function(_super){
		function NpcShopUI(){
			
		    this.img_bg=null;

			NpcShopUI.__super.call(this);
		}

		CLASS$(NpcShopUI,'ui.NpcShopUI',_super);
		var __proto__=NpcShopUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NpcShopUI.uiView);

		}

		NpcShopUI.uiView={"type":"View","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"y":10,"x":88,"var":"img_bg","skin":"gameres/png/shopping_bg1.png","sizeGrid":"60,60,110,60","scaleY":0.83,"scaleX":0.83,"name":"img_bg"}},{"type":"Button","props":{"y":76,"x":108,"width":90,"stateNum":3,"skin":"gameres/ui/btn_select0.png","name":"btn_zhuagnshi","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","height":38}},{"type":"Button","props":{"y":76,"x":198,"width":90,"stateNum":3,"skin":"gameres/ui/btn_select1.png","name":"btn_buji","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","height":38}},{"type":"Button","props":{"y":76,"x":288,"width":90,"stateNum":3,"skin":"gameres/ui/btn_select2.png","name":"btn_qianghua","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","height":38}},{"type":"Button","props":{"y":76,"x":378,"width":90,"stateNum":3,"skin":"gameres/ui/btn_select3.png","name":"btn_haoyou","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","height":38}},{"type":"Button","props":{"y":76,"x":468,"width":90,"stateNum":3,"skin":"gameres/ui/btn_select4.png","name":"btn_xianliang","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#FBF1B3,#FBF1B3,#E8B656","height":38}},{"type":"Button","props":{"y":425,"x":270,"width":28,"stateNum":3,"skin":"gameres/ui/btn_up.png","name":"btn_last","labelFont":"SimSun","height":28}},{"type":"Button","props":{"y":425,"x":376,"width":28,"stateNum":3,"skin":"gameres/ui/btn_down.png","name":"btn_next","labelFont":"SimSun","height":28}},{"type":"Button","props":{"y":419,"x":436,"width":92,"stateNum":2,"skin":"gameres/ui/btn_select5.png","name":"btn_chongzhi","labelStrokeColor":"#000000","labelStroke":2,"labelSize":16,"labelColors":"#FBF1B3,#FBF1B3","height":43}},{"type":"Button","props":{"y":2,"x":723,"stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_exit"}},{"type":"Panel","props":{"y":236,"x":261,"width":200,"name":"panel_gift","height":140},"child":[{"type":"Image","props":{"y":0,"x":0,"width":200,"name":"img_select_img","height":120,"anchorY":0,"anchorX":0}},{"type":"Button","props":{"y":10,"x":160,"name":"btn_return1"}},{"type":"TextInput","props":{"y":63,"x":24,"width":100,"text":"0","name":"input_tar_name","height":25,"color":"#ffffff"}},{"type":"Text","props":{"y":43,"x":21,"text":"请输入对方名字:","fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":63,"x":135,"name":"btn_submit"}}]},{"type":"Image","props":{"y":122,"x":577,"width":56,"skin":"gameres/ui/goods.png","name":"goods_1","height":56}},{"type":"Image","props":{"y":191,"x":576,"width":56,"skin":"gameres/ui/goods.png","name":"goods_2","height":56}},{"type":"Image","props":{"y":261,"x":577,"width":56,"skin":"gameres/ui/goods.png","name":"goods_3","height":56}},{"type":"Image","props":{"y":330,"x":577,"width":56,"skin":"gameres/ui/goods.png","name":"goods_4","height":56}},{"type":"Image","props":{"y":399,"x":577,"width":56,"skin":"gameres/ui/goods.png","name":"goods_5","height":56}},{"type":"Image","props":{"y":116,"x":570,"width":205,"name":"pane_qz_1","height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":205,"visible":false,"skin":"gameres/png/select_bg.png","name":"bg_select","height":69}},{"type":"Image","props":{"y":35,"x":35,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":16,"x":71,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":185,"x":570,"width":205,"name":"pane_qz_2","height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":205,"visible":false,"skin":"gameres/png/select_bg.png","name":"bg_select","height":69}},{"type":"Image","props":{"y":35,"x":35,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":16,"x":71,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":254,"x":570,"width":205,"name":"pane_qz_3","height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":205,"visible":false,"skin":"gameres/png/select_bg.png","name":"bg_select","height":69}},{"type":"Image","props":{"y":35,"x":35,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":16,"x":71,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":323,"x":570,"width":205,"name":"pane_qz_4","height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":205,"visible":false,"skin":"gameres/png/select_bg.png","name":"bg_select","height":69}},{"type":"Image","props":{"y":35,"x":35,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":16,"x":71,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":392,"x":570,"width":205,"name":"pane_qz_5","height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":205,"visible":false,"skin":"gameres/png/select_bg.png","name":"bg_select","height":69}},{"type":"Image","props":{"y":35,"x":35,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":16,"x":71,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":120,"x":115,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_1","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":120,"x":339,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_2","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":178,"x":115,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_3","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":178,"x":339,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_4","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":236,"x":115,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_5","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":236,"x":339,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_6","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":294,"x":115,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_7","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":294,"x":339,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_8","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":352,"x":115,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_9","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":352,"x":339,"width":215,"skin":"gameres/png/bg_1.png","name":"pane_10","height":56},"child":[{"type":"Image","props":{"y":28,"x":28,"name":"img_item","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":60,"wordWrap":true,"width":150,"valign":"middle","text":"111111","strokeColor":"#000000","stroke":2,"name":"lbl_info","height":12,"fontSize":18,"color":"#ffffff"}}]},{"type":"Image","props":{"y":185,"x":573,"width":205,"skin":"gameres/png/001.png","name":"bg_fengexian"}},{"type":"Image","props":{"y":254,"x":573,"width":205,"skin":"gameres/png/001.png","name":"bg_fengexian","height":1}},{"type":"Image","props":{"y":323,"x":573,"width":205,"skin":"gameres/png/001.png","name":"bg_fengexian"}},{"type":"Image","props":{"y":392,"x":573,"width":205,"skin":"gameres/png/001.png","name":"bg_fengexian","height":1}},{"type":"Image","props":{"y":514,"x":356,"name":"page_bg"}},{"type":"Text","props":{"y":425,"x":305,"width":66,"valign":"middle","text":"text","strokeColor":"#000000","stroke":2,"name":"lbl_page","height":28,"fontSize":16,"color":"#F6D9A1","align":"center"}}]};
		return NpcShopUI;
	})(View);
var PersonalStoreUI=(function(_super){
		function PersonalStoreUI(){
			
		    this.img_bg=null;
		    this.box_0=null;
		    this.store_num=null;
		    this.input_search=null;
		    this.searchType=null;
		    this.sort=null;
		    this.btn_search=null;
		    this.list_shop=null;
		    this.btn_myshop=null;
		    this.box_1=null;
		    this.item_num=null;
		    this.ItemSearch=null;
		    this.btn_itemsearch=null;
		    this.ItemType=null;
		    this.ItemSort=null;
		    this.price_low=null;
		    this.price_high=null;
		    this.pricetype=null;
		    this.list_item=null;
		    this.btn_allstore=null;
		    this.btn_buyitem=null;
		    this.btn_close=null;
		    this.btn_first=null;
		    this.btn_previous=null;
		    this.btn_next=null;
		    this.btn_last=null;

			PersonalStoreUI.__super.call(this);
		}

		CLASS$(PersonalStoreUI,'ui.PersonalStoreUI',_super);
		var __proto__=PersonalStoreUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(PersonalStoreUI.uiView);

		}

		PersonalStoreUI.uiView={"type":"View","props":{"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":652,"var":"img_bg","skin":"gameres/png/personalstore_bg.png","name":"img_bg","height":439,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"y":108,"x":29,"width":600,"var":"box_0","name":"0","height":237},"child":[{"type":"Label","props":{"y":1,"x":2,"width":109,"valign":"middle","text":"店铺名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":1,"x":111,"width":109,"valign":"middle","text":"店主名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":1,"x":220,"width":139,"valign":"middle","text":"开业时间","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":1,"x":359,"width":60,"valign":"middle","text":"物品总数","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":1,"x":419,"width":60,"valign":"middle","text":"销售总数","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":1,"x":479,"width":60,"valign":"middle","text":"状态","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":1,"x":539,"width":60,"valign":"middle","text":"关注度","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Text","props":{"y":250,"x":-1,"text":"关键字","color":"#c0c0c0"}},{"type":"Text","props":{"y":276,"x":-1,"text":"搜素类别","color":"#c0c0c0"}},{"type":"Text","props":{"y":300,"x":-1,"text":"排序","color":"#c0c0c0"}},{"type":"Text","props":{"y":-49,"x":451,"text":"所有商铺","color":"#e8a448"}},{"type":"Text","props":{"y":-48,"x":505,"var":"store_num","text":"1/1","name":"store_num","color":"#e8a448"}},{"type":"TextInput","props":{"y":244,"x":57,"width":107,"var":"input_search","promptColor":"#ffffff","name":"input_search","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"ComboBox","props":{"y":270,"x":57,"visibleNum":10,"var":"searchType","skin":"gameres/ui/personalstore_combobox.png","selectedIndex":0,"name":"searchType","labels":"店铺名称,店主名称","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"ComboBox","props":{"y":297,"x":57,"width":128,"visibleNum":10,"var":"sort","skin":"gameres/ui/personalstore_combobox.png","selectedIndex":0,"name":"sort","labels":"物品总数从高到低,物品总数从低到高,销量从高到低,销量从低到高,关注度从高到低,关注度从低到高","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"Button","props":{"y":245,"x":173,"width":40,"var":"btn_search","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_search","labelColors":"#e8d4a8,#e8a448","label":"搜索","height":20}},{"type":"List","props":{"y":38,"x":2,"width":598,"var":"list_shop","name":"list_shop","height":197}},{"type":"Button","props":{"y":256,"x":548,"var":"btn_myshop","skin":"gameres/ui/personalstore_myshop.png","name":"myshop"}}]},{"type":"Box","props":{"y":108,"x":29,"width":600,"var":"box_1","mouseThrough":true,"height":237},"child":[{"type":"Label","props":{"y":-1,"x":2,"width":47,"valign":"middle","height":37,"borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":-1,"x":49,"width":109,"valign":"middle","text":"物品名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":-1,"x":158,"width":109,"valign":"middle","text":"销售价格","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":-1,"x":267,"width":109,"valign":"middle","text":"所在店铺","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":-1,"x":376,"width":109,"valign":"middle","text":"店主名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":-1,"x":485,"width":61,"valign":"middle","text":"物品类别","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":-1,"x":546,"width":53,"valign":"middle","text":"购买","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Text","props":{"y":247,"x":0,"text":"关键字","color":"#c0c0c0"}},{"type":"Text","props":{"y":-49,"x":454,"text":"购买物品","color":"#e8a448"}},{"type":"Text","props":{"y":275,"x":0,"text":"搜索类别","color":"#c0c0c0"}},{"type":"Text","props":{"y":273,"x":109,"text":"排序","color":"#c0c0c0"}},{"type":"Text","props":{"y":304,"x":0,"text":"价格范围","color":"#c0c0c0"}},{"type":"Text","props":{"y":304,"x":159,"text":"之间","color":"#c0c0c0"}},{"type":"Text","props":{"y":304,"x":190,"text":"货币类型","color":"#c0c0c0"}},{"type":"Text","props":{"y":-49,"x":507,"var":"item_num","text":"1/2","name":"item_num","color":"#e8a448"}},{"type":"TextInput","props":{"y":244,"x":53,"width":82,"var":"ItemSearch","promptColor":"#ffffff","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"Button","props":{"y":245,"x":140,"width":40,"var":"btn_itemsearch","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_itemsearch","labelColors":"#e8d4a8,#e8a448","label":"搜索","height":20}},{"type":"ComboBox","props":{"y":271,"x":53,"visibleNum":10,"var":"ItemType","skin":"gameres/ui/personalstore_00094.png","selectedIndex":0,"labels":"所有,装饰,补给,强化,好友,限量,奇珍","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"ComboBox","props":{"y":271,"x":140,"width":92,"visibleNum":10,"var":"ItemSort","skin":"gameres/ui/personalstore_combobox.png","selectedIndex":0,"labels":"价格从低到高,价格从高到低","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"TextInput","props":{"y":299,"x":53,"width":47,"var":"price_low","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"TextInput","props":{"y":299,"x":107,"width":47,"var":"price_high","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"ComboBox","props":{"y":299,"x":242,"width":56,"visibleNum":10,"var":"pricetype","skin":"gameres/ui/personalstore_00094.png","sizeGrid":"-79,23,-68,8","selectedIndex":0,"labels":"不限,元宝,游戏点,金币","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"List","props":{"y":36,"x":2,"width":598,"var":"list_item","name":"list_item","height":197}}]},{"type":"Text","props":{"y":25,"x":282,"text":"个人商店","fontSize":22,"color":"#e8a448"}},{"type":"Button","props":{"y":73,"x":30,"width":90,"var":"btn_allstore","stateNum":2,"skin":"gameres/ui/btn_ok.png","selected":true,"name":"btn_allstore","labelColors":"#e8d4a8,#e8a448","label":"所有商铺","height":34}},{"type":"Button","props":{"y":73,"x":119,"width":90,"var":"btn_buyitem","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"buyitem","labelColors":"#e8d4a8,#e8a448","label":"购买物品","height":34}},{"type":"Button","props":{"y":-7,"x":587,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_close"}},{"type":"Button","props":{"y":364,"x":406,"var":"btn_first","stateNum":3,"skin":"gameres/ui/personalstore_first.png","name":"btn_first"}},{"type":"Button","props":{"y":364,"x":442,"var":"btn_previous","stateNum":3,"skin":"gameres/ui/personalstore_previous.png","name":"btn_previous"}},{"type":"Button","props":{"y":364,"x":492,"var":"btn_next","stateNum":3,"skin":"gameres/ui/personalstore_next.png","name":"btn_next"}},{"type":"Button","props":{"y":364,"x":542,"var":"btn_last","skin":"gameres/ui/personalstore_last.png","name":"btn_last"}}]}]};
		return PersonalStoreUI;
	})(View);
var PerStoreItemUI=(function(_super){
		function PerStoreItemUI(){
			
		    this.img_bg=null;
		    this.ItemImg=null;
		    this.ItemName=null;
		    this.ItemPrice=null;
		    this.ShopName=null;
		    this.ShopkeeperName=null;
		    this.ItemType=null;
		    this.ItemBy=null;

			PerStoreItemUI.__super.call(this);
		}

		CLASS$(PerStoreItemUI,'ui.PerStoreItemUI',_super);
		var __proto__=PerStoreItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(PerStoreItemUI.uiView);

		}

		PerStoreItemUI.uiView={"type":"View","props":{"width":598,"height":37},"child":[{"type":"Image","props":{"y":0,"x":0,"width":598,"var":"img_bg","height":37},"child":[{"type":"Label","props":{"y":0,"x":0,"width":47,"var":"ItemImg","name":"ItemImg","height":37,"borderColor":"#B89458"}},{"type":"Label","props":{"y":0,"x":47,"width":109,"var":"ItemName","valign":"middle","text":"战神手镯","overflow":"hidden","name":"ItemName","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":156,"width":109,"var":"ItemPrice","valign":"middle","text":"123元宝","overflow":"hidden","name":"ItemPrice","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":265,"width":109,"var":"ShopName","valign":"middle","underline":true,"text":"123456","overflow":"hidden","name":"ShopName","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":374,"width":109,"var":"ShopkeeperName","valign":"middle","text":"是啥","overflow":"hidden","name":"ShopkeeperName","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":483,"width":61,"var":"ItemType","valign":"middle","text":"装饰","overflow":"hidden","name":"ItemType","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":544,"width":53,"var":"ItemBy","valign":"middle","underline":true,"text":"购买","overflow":"hidden","name":"ItemBy","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}}]}]};
		return PerStoreItemUI;
	})(View);
var PerStore_shopUI=(function(_super){
		function PerStore_shopUI(){
			
		    this.img_bg=null;
		    this.lable_shopName=null;
		    this.lable_name=null;
		    this.lable_time=null;
		    this.lable_itemNum=null;
		    this.lable_num=null;
		    this.lable_state=null;
		    this.label_attention=null;

			PerStore_shopUI.__super.call(this);
		}

		CLASS$(PerStore_shopUI,'ui.PerStore_shopUI',_super);
		var __proto__=PerStore_shopUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(PerStore_shopUI.uiView);

		}

		PerStore_shopUI.uiView={"type":"View","props":{"width":598,"height":25},"child":[{"type":"Image","props":{"y":0,"x":0,"width":598,"var":"img_bg","height":26},"child":[{"type":"Label","props":{"y":1,"x":0,"width":109,"var":"lable_shopName","valign":"middle","underline":true,"text":"老司机","overflow":"hidden","name":"lable_shopName","height":25,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":109,"width":109,"var":"lable_name","valign":"middle","text":"橡胶路飞","overflow":"hidden","name":"lable_name","height":25,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":218,"width":139,"var":"lable_time","valign":"middle","text":"2018-12-14 17:31:04","name":"lable_time","height":25,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":357,"width":60,"var":"lable_itemNum","valign":"middle","text":"5","overflow":"hidden","name":"lable_itemNum","height":25,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":417,"width":60,"var":"lable_num","valign":"middle","text":"0","overflow":"hidden","name":"lable_num","height":25,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":477,"width":60,"var":"lable_state","valign":"middle","text":"在线","overflow":"hidden","name":"lable_state","height":25,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":537,"width":60,"var":"label_attention","valign":"middle","text":"139","overflow":"hidden","name":"label_attention","height":25,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}}]}]};
		return PerStore_shopUI;
	})(View);
var RankWinUI=(function(_super){
		function RankWinUI(){
			
		    this.setLayer_box=null;
		    this.roleShow_panel=null;
		    this.hum_img=null;
		    this.hair_img=null;
		    this.dress_img=null;
		    this.weapon_img=null;
		    this.shield_img=null;
		    this.hat_img=null;
		    this.rank_list=null;
		    this.rankIcon_img=null;
		    this.rank_lab=null;
		    this.rankName_lab=null;
		    this.rankLevel_lab=null;
		    this.rankGuild_lab=null;
		    this.selectFrame_img=null;
		    this.myRank_lab=null;
		    this.myGuild_lab=null;
		    this.rangeShow_check=null;
		    this.fashionShow_check=null;
		    this.look_btn=null;
		    this.tab_box=null;
		    this.levelTab_btn=null;
		    this.zsTab_btn=null;
		    this.fsTab_btn=null;
		    this.dsTab_btn=null;
		    this.close_btn=null;

			RankWinUI.__super.call(this);
		}

		CLASS$(RankWinUI,'ui.RankWinUI',_super);
		var __proto__=RankWinUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RankWinUI.uiView);

		}

		RankWinUI.uiView={"type":"View","props":{"width":740,"height":470},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"gameres/png/rankBg.png"},"child":[{"type":"Box","props":{"y":67,"x":24,"width":663,"var":"setLayer_box","name":"setLayer_box","height":348},"child":[{"type":"Panel","props":{"y":4,"x":436,"width":214,"var":"roleShow_panel","name":"roleShow_panel","height":333},"child":[{"type":"Image","props":{"var":"hum_img","skin":"gameres/png/00376-1.png","right":10,"name":"hum_img","centerY":0},"child":[{"type":"Image","props":{"y":41,"x":75,"width":22,"var":"hair_img","name":"hair_img","height":20}},{"type":"Image","props":{"y":70,"x":68.5,"width":49,"var":"dress_img","name":"dress_img","height":134}},{"type":"Image","props":{"y":5,"x":18,"width":44,"var":"weapon_img","name":"weapon_img","height":121}},{"type":"Image","props":{"y":84,"x":112,"width":49,"var":"shield_img","name":"shield_img","height":86}},{"type":"Image","props":{"y":30,"x":62,"width":49,"var":"hat_img","name":"hat_img","height":34}}]}]},{"type":"List","props":{"y":5,"x":0,"width":431,"var":"rank_list","spaceY":3,"repeatY":9,"repeatX":1,"name":"rank_list","height":338},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"y":0,"x":6,"var":"rankIcon_img","skin":"gameres/ui/rankIcon_0.png","name":"rankIcon_img"}},{"type":"Label","props":{"y":11,"x":20,"var":"rank_lab","text":"9","name":"rank_lab","fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":11,"x":63,"var":"rankName_lab","text":"名字也是七个字","name":"rankName_lab","fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":11,"x":212,"var":"rankLevel_lab","text":"156级","name":"rankLevel_lab","fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":11,"x":323,"var":"rankGuild_lab","text":"无敌战神","name":"rankGuild_lab","fontSize":18,"color":"#ffffff"}},{"type":"Image","props":{"y":2,"x":0,"var":"selectFrame_img","skin":"gameres/png/rank_select_bg.png","name":"selectFrame_img"}}]}]}]},{"type":"Box","props":{"y":427,"x":33},"child":[{"type":"Text","props":{"text":"我的排名：","fontSize":18,"color":"#00f91d"}},{"type":"Label","props":{"x":87,"var":"myRank_lab","name":"myRank_lab","fontSize":18,"color":"#00f91d"}}]},{"type":"Box","props":{"y":427,"x":239},"child":[{"type":"Text","props":{"text":"所属行会：","fontSize":18,"color":"#00f91d"}},{"type":"Label","props":{"x":87,"var":"myGuild_lab","name":"myGuild_lab","fontSize":18,"color":"#00f91d"}}]},{"type":"CheckBox","props":{"y":376,"x":466,"var":"rangeShow_check","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"rangeShow_check","labelSize":18,"labelPadding":"5,,,5","labelColors":"#ffffff,#ffffff","label":"框内显示"}},{"type":"CheckBox","props":{"y":421,"x":544,"var":"fashionShow_check","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","selected":true,"name":"fashionShow_check","labelSize":18,"labelPadding":"5,,,5","labelColors":"#ffffff,#ffffff","label":"时装显示"}},{"type":"Button","props":{"y":329,"x":546,"var":"look_btn","stateNum":2,"skin":"gameres/ui/rank_checkBtn.png","name":"look_btn"}},{"type":"VBox","props":{"y":78,"x":707,"var":"tab_box","name":"tab_box","align":"left"},"child":[{"type":"Button","props":{"y":0,"x":-3,"var":"levelTab_btn","stateNum":2,"skin":"gameres/ui/rank_tab_level.png","name":"levelTab_btn"}},{"type":"Button","props":{"y":72,"x":-1,"var":"zsTab_btn","stateNum":2,"skin":"gameres/ui/rank_tab_zs.png","name":"zsTab_btn"}},{"type":"Button","props":{"y":145,"x":-1,"var":"fsTab_btn","stateNum":2,"skin":"gameres/ui/rank_tab_fs.png","name":"fsTab_btn"}},{"type":"Button","props":{"y":214,"x":-5,"var":"dsTab_btn","stateNum":2,"skin":"gameres/ui/rank_tab_ds.png","name":"dsTab_btn"}}]},{"type":"Button","props":{"y":-5,"x":650,"var":"close_btn","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"close_btn"}}]}]};
		return RankWinUI;
	})(View);
var RealVerificationUI=(function(_super){
		function RealVerificationUI(){
			
		    this.ti_name=null;
		    this.ti_id=null;
		    this.btn_ok=null;

			RealVerificationUI.__super.call(this);
		}

		CLASS$(RealVerificationUI,'ui.RealVerificationUI',_super);
		var __proto__=RealVerificationUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RealVerificationUI.uiView);

		}

		RealVerificationUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"width":491,"skin":"gameres/png/imageLogin.png","name":"imageLogin","height":353,"centerY":-9,"centerX":-3},"child":[{"type":"TextInput","props":{"y":116,"x":199,"width":217,"var":"ti_name","valign":"middle","strokeColor":"#000000","stroke":2,"skin":"gameres/ui/logininput.png","sizeGrid":"16,33,17,22","padding":"0,0,0,10","height":33,"fontSize":20,"color":"#ffffff"}},{"type":"TextInput","props":{"y":185,"x":197,"width":217,"var":"ti_id","valign":"middle","type":"text","strokeColor":"#000000","stroke":2,"skin":"gameres/ui/logininput.png","sizeGrid":"16,33,17,22","restrict":"0-9a-zA-Z","padding":"0,0,0,10","height":33,"fontSize":20,"color":"#ffffff"}},{"type":"Button","props":{"y":258,"x":171,"width":125,"var":"btn_ok","stateNum":2,"skin":"gameres/ui/chat_btn_select.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":20,"labelColors":"#ffffff","label":"确定","height":51}}]},{"type":"Label","props":{"y":138,"x":161,"text":"姓名：","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":43,"x":259,"text":"实名验证","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":207,"x":141,"text":"身份证：","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#ffffff"}}]};
		return RealVerificationUI;
	})(View);
var rechargeUI=(function(_super){
		function rechargeUI(){
			
		    this.img_bg=null;
		    this.text0=null;
		    this.text1=null;
		    this.text2=null;
		    this.text3=null;
		    this.text4=null;
		    this.text5=null;
		    this.text6=null;
		    this.text7=null;
		    this.money0=null;
		    this.money1=null;
		    this.money2=null;
		    this.money3=null;
		    this.money4=null;
		    this.money5=null;
		    this.money6=null;
		    this.money7=null;
		    this.price0=null;
		    this.price1=null;
		    this.price2=null;
		    this.price3=null;
		    this.price4=null;
		    this.price5=null;
		    this.price6=null;
		    this.price7=null;
		    this.btn_close=null;
		    this.pay_Panel=null;
		    this.product_name2=null;
		    this.lb_yuanbao=null;
		    this.product_name=null;
		    this.lb_money=null;
		    this.btn_wx=null;
		    this.btn_zfb=null;
		    this.btn_closePay=null;
		    this.custom=null;
		    this.custom_value=null;
		    this.custom_pay_ok=null;
		    this.custom_pay_cel=null;

			rechargeUI.__super.call(this);
		}

		CLASS$(rechargeUI,'ui.rechargeUI',_super);
		var __proto__=rechargeUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rechargeUI.uiView);

		}

		rechargeUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600},"child":[{"type":"Image","props":{"width":694,"var":"img_bg","skin":"gameres/png/recharge_bg3.png","name":"img_bg","height":427,"centerY":0,"centerX":0},"child":[{"type":"Text","props":{"y":153,"x":40,"width":120,"var":"text0","valign":"middle","text":"1","strokeColor":"#000000","stroke":2,"name":"text0","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":153,"x":205,"width":120,"var":"text1","valign":"middle","text":"2","strokeColor":"#000000","stroke":2,"name":"text1","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":153,"x":368,"width":120,"var":"text2","valign":"middle","text":"3","strokeColor":"#000000","stroke":2,"name":"text2","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":153,"x":533,"width":120,"var":"text3","valign":"middle","text":"4","strokeColor":"#000000","stroke":2,"name":"text3","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":331,"x":40,"width":120,"var":"text4","valign":"middle","text":"5","strokeColor":"#000000","stroke":2,"name":"text4","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":331,"x":205,"width":120,"var":"text5","valign":"middle","text":"6","strokeColor":"#000000","stroke":2,"name":"text5","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":331,"x":368,"width":120,"var":"text6","valign":"middle","text":"7","strokeColor":"#000000","stroke":2,"name":"text6","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":331,"x":533,"width":120,"var":"text7","valign":"middle","text":"其他","strokeColor":"#000000","stroke":2,"name":"text7","fontSize":20,"color":"#f1c055","bold":true,"align":"center"}},{"type":"Text","props":{"y":194,"x":46,"width":110,"var":"money0","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":194,"x":211,"width":110,"var":"money1","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":194,"x":376,"width":110,"var":"money2","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":194,"x":541,"width":110,"var":"money3","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":372,"x":46,"width":110,"var":"money4","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":372,"x":211,"width":110,"var":"money5","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":372,"x":376,"width":110,"var":"money6","text":"0","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Text","props":{"y":372,"x":541,"width":110,"var":"money7","text":"其他","fontSize":20,"color":"#f1c055","align":"center"}},{"type":"Button","props":{"y":57,"x":21,"width":155,"var":"price0","stateNum":3,"name":"price0","height":172}},{"type":"Button","props":{"y":57,"x":187,"width":155,"var":"price1","stateNum":3,"name":"price1","height":172}},{"type":"Button","props":{"y":57,"x":353,"width":155,"var":"price2","stateNum":3,"name":"price2","height":172}},{"type":"Button","props":{"y":57,"x":517,"width":155,"var":"price3","stateNum":3,"name":"price3","height":172}},{"type":"Button","props":{"y":235,"x":21,"width":155,"var":"price4","stateNum":3,"name":"price4","height":172}},{"type":"Button","props":{"y":235,"x":187,"width":155,"var":"price5","stateNum":3,"name":"price5","height":172}},{"type":"Button","props":{"y":235,"x":353,"width":155,"var":"price6","stateNum":3,"name":"price6","height":172}},{"type":"Button","props":{"y":236,"x":517,"width":155,"var":"price7","stateNum":3,"name":"price7","labelSize":20,"labelColors":"#f1c055","height":172}},{"type":"Button","props":{"y":-18,"x":626,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_close"}},{"type":"Image","props":{"y":65,"x":34,"visible":false,"skin":"gameres/png/cm.png"}},{"type":"Image","props":{"width":498,"visible":false,"var":"pay_Panel","skin":"gameres/png/pay_bg.png","mouseThrough":true,"height":314,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":90,"x":135,"text":"数量：","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ff8310"}},{"type":"Label","props":{"y":123,"x":135,"text":"金额：","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ff8310"}},{"type":"Label","props":{"y":156,"x":99,"text":"商品名称：","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ff8310"}},{"type":"Label","props":{"y":90,"x":301,"width":81,"var":"product_name2","text":"元宝","strokeColor":"#000000","stroke":3,"height":18,"fontSize":18,"color":"#ff8310","align":"right"}},{"type":"Label","props":{"y":123,"x":364,"text":"元","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ff8310"}},{"type":"Label","props":{"top":29,"text":"确认订单","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ff8310","centerX":0}},{"type":"Label","props":{"y":90,"x":200,"var":"lb_yuanbao","text":"1000","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":156,"x":200,"var":"product_name","text":"元宝","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":123,"x":200,"var":"lb_money","text":"1000","strokeColor":"#000000","stroke":3,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":214,"x":54,"var":"btn_wx","stateNum":1,"skin":"gameres/ui/pay_wx.png"}},{"type":"Button","props":{"y":214,"x":252,"var":"btn_zfb","stateNum":1,"skin":"gameres/ui/pay_zfb.png"}},{"type":"Button","props":{"y":20,"x":445,"width":30,"var":"btn_closePay","stateNum":2,"skin":"gameres/ui/btn_close.png","height":30}}]},{"type":"Image","props":{"visible":false,"var":"custom","skin":"gameres/png/custom_pay_bg.png","centerY":0,"centerX":0},"child":[{"type":"TextInput","props":{"y":99,"x":42,"width":237,"var":"custom_value","type":"text","text":"1","restrict":"0-9","maxChars":5,"height":39,"fontSize":22,"color":"#ffffff"}},{"type":"Button","props":{"y":164,"x":217,"width":105,"var":"custom_pay_ok","stateNum":1,"skin":"gameres/ui/custom_pay_ok.png","height":42}},{"type":"Button","props":{"y":164,"x":40,"width":105,"var":"custom_pay_cel","stateNum":1,"skin":"gameres/ui/custom_pay_cel.png","height":42}}]}]}]};
		return rechargeUI;
	})(View);
var RedPackOpenUI=(function(_super){
		function RedPackOpenUI(){
			
		    this.bg_img=null;
		    this.headIcon_img=null;
		    this.ownerName_lab=null;
		    this.greeting_lab=null;
		    this.goldNum_lab=null;
		    this.gainDetails_lab=null;
		    this.close_btn=null;

			RedPackOpenUI.__super.call(this);
		}

		CLASS$(RedPackOpenUI,'ui.RedPackOpenUI',_super);
		var __proto__=RedPackOpenUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RedPackOpenUI.uiView);

		}

		RedPackOpenUI.uiView={"type":"View","props":{"width":300,"height":340},"child":[{"type":"Image","props":{"y":9,"x":37,"width":233,"var":"bg_img","skin":"gameres/png/redPack_open_bg.png","name":"bg_img","height":327},"child":[{"type":"Image","props":{"y":92,"x":77,"width":80,"var":"headIcon_img","skin":"gameres/ui/head_img-00.png","name":"headIcon_img","height":80}},{"type":"Label","props":{"y":176,"x":3,"width":228,"var":"ownerName_lab","name":"ownerName_lab","height":20,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":289,"x":179,"skin":"gameres/ui/smallPinIcon.png"}},{"type":"Label","props":{"y":221,"x":3,"width":226,"var":"greeting_lab","text":"恭喜发财，大吉大利！","name":"greeting_lab","height":15,"fontSize":15,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":247,"x":5,"width":224,"var":"goldNum_lab","strokeColor":"#cb3a2d","stroke":1,"name":"goldNum_lab","height":30,"fontSize":30,"color":"#fadb4e","align":"center"}},{"type":"Label","props":{"y":290,"x":66,"var":"gainDetails_lab","text":"查看领取详情>","name":"gainDetails_lab","fontSize":16,"color":"#faa34e"}},{"type":"Button","props":{"y":-2,"x":222,"var":"close_btn","stateNum":2,"skin":"gameres/ui/but_close.png","name":"close_btn"}}]}]};
		return RedPackOpenUI;
	})(View);
var RedPakUI=(function(_super){
		function RedPakUI(){
			
		    this.RedWindows=null;
		    this.sendRedPack_btn=null;
		    this.redPack_list=null;
		    this.selectBg_img=null;
		    this.redPackIcon_img=null;
		    this.deliveryTime_lab=null;
		    this.area_lab=null;
		    this.greeting_lab=null;
		    this.redPackOperation_btn=null;
		    this.desc_box=null;
		    this.ownerName_lab=null;
		    this.redPackMoney_lab=null;
		    this.redPackHad_img=null;
		    this.lastRedPackNum_lab=null;
		    this.redPackLeftArrow_btn=null;
		    this.redPackRightArrow_btn=null;
		    this.curRedPackNum_lab=null;

			RedPakUI.__super.call(this);
		}

		CLASS$(RedPakUI,'ui.RedPakUI',_super);
		var __proto__=RedPakUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RedPakUI.uiView);

		}

		RedPakUI.uiView={"type":"View","props":{"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"RedWindows","skin":"gameres/png/red_pack_bg.png"},"child":[{"type":"Button","props":{"y":412,"x":312,"var":"sendRedPack_btn","stateNum":2,"skin":"gameres/ui/sendRedPack.png","name":"sendRedPack_btn","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581"}},{"type":"List","props":{"y":66,"x":21,"width":666,"var":"redPack_list","spaceY":10,"repeatY":5,"repeatX":1,"name":"redPack_list","height":327},"child":[{"type":"Box","props":{"x":5,"renderType":"render"},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"selectBg_img","skin":"gameres/ui/bg2.png","name":"selectBg_img"}},{"type":"Image","props":{"y":8,"x":12,"var":"redPackIcon_img","skin":"gameres/ui/redpak_redbag0.png","name":"redPackIcon_img"}},{"type":"Label","props":{"y":20,"x":63,"var":"deliveryTime_lab","text":"2021-11-04","stroke":1,"name":"deliveryTime_lab","fontSize":16,"color":"#f47c12"}},{"type":"Label","props":{"y":12,"x":234,"var":"area_lab","text":"[ 全服 ]","stroke":1,"name":"area_lab","fontSize":14,"color":"#fb0404"}},{"type":"Label","props":{"y":32,"x":235,"text":"[ 祝福 ]","stroke":1,"fontSize":14,"color":"#00f5f3"}},{"type":"Label","props":{"y":33,"x":289,"var":"greeting_lab","text":"恭喜发财，大吉大利","stroke":1,"name":"greeting_lab","fontSize":14,"color":"#ffffff"}},{"type":"Button","props":{"y":18,"x":476,"var":"redPackOperation_btn","stateNum":2,"skin":"gameres/ui/redPack_rob.png","name":"redPackOperation_btn"}},{"type":"HBox","props":{"y":12,"x":289,"var":"desc_box","name":"desc_box","align":"middle"},"child":[{"type":"Label","props":{"y":6,"x":4,"var":"ownerName_lab","stroke":1,"name":"ownerName_lab","fontSize":14,"color":"#f1fb03"}},{"type":"Label","props":{"y":0,"x":110,"text":"发了","stroke":1,"fontSize":14,"color":"#ffffff"}},{"type":"Label","props":{"y":1,"x":119,"var":"redPackMoney_lab","stroke":1,"name":"redPackMoney_lab","color":"#ff01ff"}},{"type":"Label","props":{"y":10,"x":120,"text":"的红包","stroke":1,"fontSize":14,"color":"#ffffff"}}]},{"type":"Image","props":{"y":4,"x":480,"var":"redPackHad_img","skin":"gameres/ui/redPack_had.png","name":"redPackHad_img"}},{"type":"Text","props":{"y":20,"x":567,"text":"剩余：    个","stroke":1,"fontSize":14,"color":"#ffffff"}},{"type":"Label","props":{"y":20,"x":604,"var":"lastRedPackNum_lab","text":"99","stroke":1,"name":"lastRedPackNum_lab","fontSize":14,"color":"#fb0404"}}]}]},{"type":"Button","props":{"y":389,"x":40,"var":"redPackLeftArrow_btn","stateNum":2,"skin":"gameres/ui/redPack_leftArrow.png","name":"redPackLeftArrow_btn"}},{"type":"Button","props":{"y":395,"x":665,"var":"redPackRightArrow_btn","stateNum":2,"skin":"gameres/ui/redPack_leftArrow.png","scaleX":-1,"name":"redPackRightArrow_btn"}},{"type":"Text","props":{"y":396,"x":308,"text":"红包数量：","stroke":1,"fontSize":14,"color":"#e0dedb"}},{"type":"Label","props":{"y":397,"x":381,"var":"curRedPackNum_lab","text":"2/50","stroke":1,"name":"curRedPackNum_lab","fontSize":14,"color":"#e0dedb"}}]}]};
		return RedPakUI;
	})(View);
var RegSceneUI=(function(_super){
		function RegSceneUI(){
			

			RegSceneUI.__super.call(this);
		}

		CLASS$(RegSceneUI,'ui.RegSceneUI',_super);
		var __proto__=RegSceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RegSceneUI.uiView);

		}

		RegSceneUI.uiView={"type":"View","props":{"width":870,"scaleY":0.7,"scaleX":0.7,"name":"regpanel","height":500},"child":[{"type":"Image","props":{"y":124,"width":680,"pivotY":0,"name":"bg","mouseThrough":false,"left":299,"height":508},"child":[{"type":"TextInput","props":{"y":83,"x":173,"width":202,"strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#e2dddd","prompt":"请输入用户名....","name":"username","maxChars":10,"height":48,"fontSize":18,"font":"SimSun","color":"#fbf8f8"}},{"type":"TextInput","props":{"y":212,"x":173,"width":202,"type":"password","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#e2dddd","prompt":"请输入密码...","name":"password","maxChars":10,"height":48,"fontSize":18,"font":"SimSun","color":"#fbf8f8"}},{"type":"TextInput","props":{"y":148,"x":173,"width":202,"strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","promptColor":"#e2dddd","prompt":"请输入邮箱...","name":"useremail","maxChars":30,"height":48,"fontSize":18,"font":"SimSun","color":"#fbf8f8"}},{"type":"TextInput","props":{"y":277,"x":173,"width":202,"type":"password","strokeColor":"#000000","stroke":2,"sizeGrid":"10,10,10,10","restrict":"0-9a-zA-Z","promptColor":"#e2dddd","prompt":"请再次输入密码...","name":"confirmpassword","maxChars":10,"height":48,"fontSize":18,"font":"SimSun","color":"#fbf8f8"}},{"type":"Button","props":{"y":340,"x":30,"width":175,"stateNum":2,"sizeGrid":"4,4,4,4","name":"btn_reg","labelStrokeColor":"#000000","labelStroke":2,"height":65}},{"type":"Button","props":{"y":340,"x":210,"width":175,"stateNum":2,"sizeGrid":"4,4,4,4","name":"btn_reback","labelStrokeColor":"#000000","labelStroke":2,"height":65}},{"type":"TextArea","props":{"y":85,"x":398,"width":214,"type":"text","text":"您的帐号名称可以包括：字符、数字的组合。帐号名称长度必须为4或以上。请仔细输入创建帐号所需的信息。您的帐号可以登录游戏及我们的网站，以取得一些相关信息。建议您的登录帐号不要和游戏中的角色名相同，以确保您的密码不会被暴力破解。","strokeColor":"#000000","stroke":2,"leading":5,"height":316,"fontSize":14,"editable":false,"color":"#ffffff","bgColor":"#090a05"}}]}]};
		return RegSceneUI;
	})(View);
var reLinkUI=(function(_super){
		function reLinkUI(){
			
		    this.relink_bg=null;
		    this.backLogin=null;
		    this.relink_ok=null;

			reLinkUI.__super.call(this);
		}

		CLASS$(reLinkUI,'ui.reLinkUI',_super);
		var __proto__=reLinkUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(reLinkUI.uiView);

		}

		reLinkUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600},"child":[{"type":"Image","props":{"y":181,"x":373,"width":389,"var":"relink_bg","skin":"gameres/png/fenghao_res.png","name":"relink_bg","height":237},"child":[{"type":"Label","props":{"y":3,"x":139,"width":111,"valign":"middle","text":"断 线 重 连","strokeColor":"#000000","stroke":1,"height":25,"fontSize":22,"color":"#e8a448","bold":true}},{"type":"Label","props":{"y":94,"x":62,"width":265,"text":"当前网络不稳定，请检测网络","height":20,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":183,"x":58,"width":90,"var":"backLogin","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"backLogin","labelSize":14,"labelColors":"#e8d4a8,#e8a448","label":"返回登录","height":30}},{"type":"Button","props":{"y":183,"x":235,"width":90,"var":"relink_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"relink_ok","labelSize":14,"labelColors":"#e8d4a8,#e8a448","label":"断线重连","height":30}}]}]};
		return reLinkUI;
	})(View);
var rockerUI=(function(_super){
		function rockerUI(){
			

			rockerUI.__super.call(this);
		}

		CLASS$(rockerUI,'ui.rockerUI',_super);
		var __proto__=rockerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rockerUI.uiView);

		}

		rockerUI.uiView={"type":"View","props":{}};
		return rockerUI;
	})(View);
var RoleMenuUI=(function(_super){
		function RoleMenuUI(){
			
		    this.menu=null;
		    this.labName=null;
		    this.labSelectInfo=null;
		    this.labchat=null;
		    this.labaddfriend=null;
		    this.labshieldchat=null;
		    this.labteam=null;
		    this.labhanghu=null;

			RoleMenuUI.__super.call(this);
		}

		CLASS$(RoleMenuUI,'ui.RoleMenuUI',_super);
		var __proto__=RoleMenuUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RoleMenuUI.uiView);

		}

		RoleMenuUI.uiView={"type":"View","props":{"y":0,"x":0,"width":800,"top":0,"right":0,"mouseThrough":true,"left":0,"height":600,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":168,"var":"menu","skin":"gameres/png/01000.png","sizeGrid":"29,25,26,26","height":238},"child":[{"type":"Label","props":{"y":19,"var":"labName","text":"名称：砍呀砍","name":"labName","fontSize":18,"color":"#f6fbb6","centerX":0}},{"type":"Label","props":{"y":49,"var":"labSelectInfo","text":"查看信息","name":"labSelectInfo","fontSize":18,"color":"#f6fbb6","centerX":0}},{"type":"Label","props":{"y":79,"var":"labchat","text":"进行私聊","name":"labchat","fontSize":18,"color":"#f6fbb6","centerX":0}},{"type":"Label","props":{"y":110,"var":"labaddfriend","text":"加为好友","name":"labaddfriend","fontSize":18,"color":"#f6fbb6","centerX":0}},{"type":"Label","props":{"y":140,"var":"labshieldchat","text":"屏蔽发言","name":"labshieldchat","fontSize":18,"color":"#f6fbb6","centerX":0}},{"type":"Label","props":{"y":170,"var":"labteam","text":"邀请组队","name":"labteam","fontSize":18,"color":"#f6fbb6","centerX":0}},{"type":"Label","props":{"y":200,"var":"labhanghu","text":"邀请加入行会","name":"labhanghu","fontSize":18,"color":"#f6fbb6","centerX":0}}]}]};
		return RoleMenuUI;
	})(View);
var RoleSceneUI=(function(_super){
		function RoleSceneUI(){
			
		    this.lb_ServerName=null;
		    this.lb_name1=null;
		    this.lb_lvl1=null;
		    this.lb_job1=null;
		    this.lb_job2=null;
		    this.lb_lvl2=null;
		    this.lb_name2=null;
		    this.btn_rr=null;
		    this.btn_dr=null;
		    this.btn_start=null;
		    this.img_start=null;
		    this.btn_cr=null;
		    this.btn_s2=null;
		    this.btn_s1=null;
		    this.box_l=null;
		    this.box_r=null;
		    this.img_create=null;
		    this.Random=null;
		    this.btn_c_zs=null;
		    this.btn_c_sj=null;
		    this.btn_c_fs=null;
		    this.btn_c_ds=null;
		    this.btn_c_nv=null;
		    this.btn_c_nan=null;
		    this.btn_c_ok=null;
		    this.btn_c_qx=null;
		    this.tex_name=null;
		    this.nantxt_img=null;
		    this.nvtxt_img=null;
		    this.submit_btn=null;
		    this.img_hf=null;
		    this.btn_hf_ok=null;
		    this.btn_hf_qx=null;
		    this.rolelist=null;
		    this.img_del=null;
		    this.btn_del_ok=null;
		    this.btn_del_qx=null;
		    this.lb_del=null;

			RoleSceneUI.__super.call(this);
		}

		CLASS$(RoleSceneUI,'ui.RoleSceneUI',_super);
		var __proto__=RoleSceneUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RoleSceneUI.uiView);

		}

		RoleSceneUI.uiView={"type":"View","props":{"width":1136,"height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1136,"visible":true,"skin":"gameres/png/rolescene_bg.png","height":600},"child":[{"type":"Label","props":{"y":42,"x":414,"width":300,"var":"lb_ServerName","valign":"middle","text":"传奇战记","strokeColor":"#000000","stroke":2,"name":"lb_ServerName","fontSize":22,"color":"#ddaf52","align":"center"}}]},{"type":"Image","props":{"y":453,"x":222},"child":[{"type":"Label","props":{"y":10,"x":7,"width":0,"var":"lb_name1","strokeColor":"#000000","stroke":2,"height":0,"fontSize":21,"color":"#e7decf"}}]},{"type":"Image","props":{"y":537,"x":180},"child":[{"type":"Label","props":{"y":-3,"x":48,"var":"lb_lvl1","strokeColor":"#000000","stroke":2,"fontSize":21,"color":"#e7decf"}}]},{"type":"Image","props":{"y":492,"x":181},"child":[{"type":"Label","props":{"y":6,"x":48,"var":"lb_job1","strokeColor":"#000000","stroke":2,"fontSize":21,"color":"#e7decf"}}]},{"type":"Image","props":{"y":492,"x":747},"child":[{"type":"Label","props":{"y":6,"x":60,"var":"lb_job2","strokeColor":"#000000","stroke":2,"fontSize":21,"color":"#e7decf"}}]},{"type":"Image","props":{"y":537,"x":746},"child":[{"type":"Label","props":{"y":-3,"x":60,"var":"lb_lvl2","strokeColor":"#000000","stroke":2,"fontSize":21,"color":"#e7decf"}}]},{"type":"Image","props":{"y":447,"x":746},"child":[{"type":"Label","props":{"y":16,"x":60,"var":"lb_name2","strokeColor":"#000000","stroke":2,"fontSize":21,"color":"#e7decf"}}]},{"type":"Button","props":{"y":541,"x":507,"var":"btn_rr","stateNum":2,"skin":"gameres/ui/00740.png","scaleY":0.8,"scaleX":0.8,"name":"btn_rr"}},{"type":"Button","props":{"y":496,"x":507,"var":"btn_dr","stateNum":2,"skin":"gameres/ui/00747.png","scaleY":0.8,"scaleX":0.8}},{"type":"Button","props":{"y":406,"x":507,"var":"btn_start","stateNum":2,"skin":"gameres/ui/00769.png","scaleY":0.8,"scaleX":0.8},"child":[{"type":"Image","props":{"y":51,"x":151,"width":153,"var":"img_start","skin":"gameres/ui/00768.png","rotation":180,"height":53}}]},{"type":"Button","props":{"y":453,"x":440,"var":"btn_cr","stateNum":2,"skin":"gameres/ui/00736.png","scaleY":0.8,"scaleX":0.8,"name":"btn_cr"}},{"type":"Button","props":{"y":409,"x":860,"width":101,"var":"btn_s2","stateNum":2,"skin":"gameres/ui/00751.png","height":44}},{"type":"Button","props":{"y":409,"x":285,"width":101,"var":"btn_s1","stateNum":2,"skin":"gameres/ui/00751.png","height":44}},{"type":"Box","props":{"y":80,"x":256,"width":240,"var":"box_l","height":270}},{"type":"Box","props":{"y":80,"x":645,"width":240,"var":"box_r","height":270}},{"type":"Image","props":{"y":-17,"x":622,"width":333,"visible":false,"var":"img_create","skin":"gameres/png/00732.png","height":479},"child":[{"type":"Image","props":{"y":98,"x":55,"width":188,"skin":"gameres/png/rolescene_00702.png","height":37}},{"type":"Button","props":{"y":94,"x":241,"width":42,"var":"Random","stateNum":2,"skin":"gameres/ui/randomid.png","name":"Random","height":42}},{"type":"Button","props":{"y":194,"x":42,"width":57,"var":"btn_c_zs","stateNum":2,"skin":"gameres/ui/00705.png","selected":true,"name":"btn_c_zs","height":54},"child":[{"type":"Text","props":{"y":54,"x":14,"text":"战士","fontSize":16,"color":"#ffffff"}}]},{"type":"Button","props":{"y":194,"x":222,"width":57,"var":"btn_c_sj","stateNum":2,"skin":"gameres/ui/00695.png","name":"btn_c_sj","height":54}},{"type":"Button","props":{"y":194,"x":102,"width":57,"var":"btn_c_fs","stateNum":2,"skin":"gameres/ui/00686.png","name":"btn_c_fs","height":54},"child":[{"type":"Text","props":{"y":54,"x":14,"text":"法师","fontSize":16,"color":"#ffffff"}}]},{"type":"Button","props":{"y":194,"x":162,"width":57,"var":"btn_c_ds","stateNum":2,"skin":"gameres/ui/00682.png","name":"btn_c_ds","height":54},"child":[{"type":"Text","props":{"y":54,"x":14,"text":"道士","fontSize":16,"color":"#ffffff"}}]},{"type":"Button","props":{"y":302,"x":172,"width":57,"var":"btn_c_nv","stateNum":2,"skin":"gameres/ui/00692.png","name":"btn_c_nv","height":54}},{"type":"Button","props":{"y":302,"x":89,"width":57,"var":"btn_c_nan","stateNum":2,"skin":"gameres/ui/00689.png","selected":true,"name":"btn_c_nan","height":54}},{"type":"Button","props":{"y":369,"var":"btn_c_ok","stateNum":2,"skin":"gameres/ui/00698.png","name":"btn_c_ok","centerX":0}},{"type":"Button","props":{"y":-2,"x":258,"var":"btn_c_qx","stateNum":2,"skin":"gameres/ui/but_close.png","name":"btn_c_qx"}},{"type":"TextInput","props":{"y":100,"x":62,"width":168,"var":"tex_name","valign":"middle","type":"text","text":"名字最长七个字","strokeColor":"#000000","stroke":2,"maxChars":7,"height":30,"fontSize":19,"color":"#e7decf"}},{"type":"Label","props":{"y":71,"x":135,"text":"姓名","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#5a8ca5","bold":true}},{"type":"Label","props":{"y":156,"x":135,"text":"职业","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#5a8ca5","bold":true}},{"type":"Label","props":{"y":266,"x":135,"text":"性别","strokeColor":"#150e09","stroke":2,"fontSize":24,"font":"SimSun","color":"#5a8ca5","bold":true}},{"type":"Image","props":{"y":25,"x":125,"width":82,"skin":"gameres/ui/newroletitle.png","height":28}},{"type":"Image","props":{"y":312,"x":53,"var":"nantxt_img","skin":"gameres/ui/man.png","name":"nantxt_img"}},{"type":"Image","props":{"y":312,"x":232,"var":"nvtxt_img","skin":"gameres/ui/human.png","name":"nvtxt_img"}}]},{"type":"Button","props":{"y":454,"x":569,"var":"submit_btn","stateNum":2,"skin":"gameres/ui/role_return.png","scaleY":0.8,"scaleX":0.8,"name":"submit_btn"}},{"type":"Image","props":{"y":82,"x":370,"width":333,"visible":false,"var":"img_hf","skin":"gameres/png/00732.png","height":479},"child":[{"type":"Button","props":{"y":394,"width":101,"var":"btn_hf_ok","stateNum":2,"skin":"gameres/ui/00764.png","name":"btn_hf_ok","height":44,"centerX":0}},{"type":"Button","props":{"y":9,"x":265,"width":60,"var":"btn_hf_qx","stateNum":2,"skin":"gameres/ui/but_close.png","name":"btn_hf_qx","height":60}},{"type":"Image","props":{"y":64,"x":23,"width":275,"skin":"gameres/png/hfkuang.png","height":310},"child":[{"type":"List","props":{"y":30,"x":2,"width":270,"var":"rolelist","spaceY":5,"spaceX":1,"repeatY":5,"repeatX":1,"height":278}}]},{"type":"Image","props":{"y":25,"x":112,"width":111,"skin":"gameres/ui/hftitle.png","height":29}}]},{"type":"Image","props":{"width":452,"visible":false,"var":"img_del","skin":"gameres/png/00790.png","height":179,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":126,"x":200,"width":101,"var":"btn_del_ok","stateNum":2,"skin":"gameres/ui/00758.png","height":44}},{"type":"Button","props":{"y":125,"x":320,"width":101,"var":"btn_del_qx","stateNum":2,"skin":"gameres/ui/00755.png","height":44}},{"type":"Label","props":{"y":33,"x":34,"var":"lb_del","strokeColor":"#000000","stroke":2,"fontSize":18,"font":"SimSun","color":"#ffffff"}}]}]};
		return RoleSceneUI;
	})(View);
var SaleAuctionTipUI=(function(_super){
		function SaleAuctionTipUI(){
			
		    this.title_txt=null;
		    this.itemName_lab=null;
		    this.item_box=null;
		    this.sale_box=null;
		    this.shelvesNum_input=null;
		    this.bidIcon_img=null;
		    this.bidPrice_input=null;
		    this.cut_btn=null;
		    this.add_btn=null;
		    this.oncePriceIcon_img=null;
		    this.onceProce_input=null;
		    this.currency_com=null;
		    this.cancelShelves_btn=null;
		    this.wordShelves_btn=null;
		    this.cancelSale_box=null;
		    this.lastTime_lab=null;
		    this.showShelvesNum_lab=null;
		    this.cancel_btn=null;
		    this.noShelves_btn=null;
		    this.icon_img=null;
		    this.bid_input=null;
		    this.icon1_img=null;
		    this.once_input=null;
		    this.close_btn=null;

			SaleAuctionTipUI.__super.call(this);
		}

		CLASS$(SaleAuctionTipUI,'ui.SaleAuctionTipUI',_super);
		var __proto__=SaleAuctionTipUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SaleAuctionTipUI.uiView);

		}

		SaleAuctionTipUI.uiView={"type":"View","props":{"width":284,"height":350},"child":[{"type":"Image","props":{"y":-1,"x":-1,"width":251,"skin":"gameres/ui/auctionTip_bg.png","sizeGrid":"14,17,16,15","height":351},"child":[{"type":"Text","props":{"y":10,"x":4,"width":242,"var":"title_txt","text":"上架道具","stroke":2,"name":"title_txt","height":18,"fontSize":18,"color":"#f7e700","align":"center"}},{"type":"Image","props":{"y":32,"x":8,"skin":"gameres/ui/auction_line.png"}},{"type":"Label","props":{"y":35,"x":94,"var":"itemName_lab","text":"斗笠碎片","stroke":1,"name":"itemName_lab","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":57,"x":107,"var":"item_box","skin":"gameres/ui/setiing_itemFrame.png","name":"item_box"}},{"type":"Box","props":{"y":109,"x":4,"width":244,"var":"sale_box","name":"sale_box","height":238},"child":[{"type":"Text","props":{"y":13,"x":20,"text":"上架数量","stroke":1,"fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":41,"x":20,"text":"出售货币","stroke":1,"fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":71,"x":36,"text":"竞拍价","stroke":1,"fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":103,"x":36,"text":"一口价","stroke":1,"fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":5,"x":139,"width":67,"skin":"gameres/ui/auctionFrame1.png","sizeGrid":"5,9,7,8","height":30},"child":[{"type":"TextInput","props":{"y":0,"x":0,"width":64,"var":"shelvesNum_input","text":"1","name":"shelvesNum_input","height":28,"fontSize":16,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":66,"x":102,"width":139,"skin":"gameres/ui/auctionFrame1.png","sizeGrid":"5,9,7,8","height":30},"child":[{"type":"Image","props":{"y":0,"x":0,"width":30,"var":"bidIcon_img","name":"bidIcon_img","height":30}},{"type":"TextInput","props":{"y":1,"x":24,"width":112,"var":"bidPrice_input","text":"1","name":"bidPrice_input","height":28,"fontSize":16,"color":"#ffffff","align":"center"}}]},{"type":"Button","props":{"y":4,"x":107,"var":"cut_btn","stateNum":2,"skin":"gameres/ui/auctionMoney_cut.png","name":"cut_btn"}},{"type":"Button","props":{"y":4,"x":205,"var":"add_btn","stateNum":2,"skin":"gameres/ui/auctionMoney_add.png","name":"add_btn"}},{"type":"Image","props":{"y":98,"x":102,"width":139,"skin":"gameres/ui/auctionFrame1.png","sizeGrid":"5,9,7,8","height":30},"child":[{"type":"Image","props":{"y":0,"x":0,"width":30,"var":"oncePriceIcon_img","name":"oncePriceIcon_img","height":30}},{"type":"TextInput","props":{"y":1,"x":24,"width":112,"var":"onceProce_input","text":"1","name":"onceProce_input","height":28,"fontSize":16,"color":"#ffffff","align":"center"}}]},{"type":"ComboBox","props":{"y":35,"x":102,"width":139,"visibleNum":9,"var":"currency_com","skin":"gameres/ui/currency_com.png","name":"currency_com","labels":"label1,label2","height":30},"child":[{"type":"Image","props":{}}]},{"type":"Button","props":{"y":156,"x":9,"var":"cancelShelves_btn","stateNum":2,"skin":"gameres/ui/auctionCancelSale.png","name":"cancelShelves_btn"}},{"type":"Button","props":{"y":156,"x":124,"var":"wordShelves_btn","stateNum":2,"skin":"gameres/ui/auctionWordSale.png","name":"wordShelves_btn"}}]},{"type":"Box","props":{"y":109,"x":3,"width":244,"var":"cancelSale_box","name":"cancelSale_box","height":238},"child":[{"type":"Text","props":{"y":12,"x":6,"text":"竞拍中：","stroke":1,"fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":45,"x":40,"text":"竞拍价","stroke":1,"fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":82,"x":41,"text":"一口价","stroke":1,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":13,"x":60,"var":"lastTime_lab","text":"22:22:22","stroke":1,"name":"lastTime_lab","fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":12,"x":136,"text":"上架数量：","stroke":1,"fontSize":16,"color":"#10ff00"}},{"type":"Label","props":{"y":13,"x":209,"var":"showShelvesNum_lab","text":"100","stroke":1,"name":"showShelvesNum_lab","fontSize":16,"color":"#10ff00"}},{"type":"Button","props":{"y":144,"x":4,"var":"cancel_btn","stateNum":2,"skin":"gameres/ui/cancel_bid.png","name":"cancel_btn"}},{"type":"Button","props":{"y":141,"x":123,"var":"noShelves_btn","stateNum":2,"skin":"gameres/ui/auctionCancelSale.png","name":"noShelves_btn"}},{"type":"Image","props":{"y":39,"x":93,"skin":"gameres/ui/auctionFrame1.png"},"child":[{"type":"Image","props":{"width":30,"var":"icon_img","name":"icon_img","height":30}},{"type":"TextInput","props":{"y":5,"x":48,"width":91,"var":"bid_input","text":"0","name":"bid_input","height":22,"fontSize":16,"editable":false,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":76,"x":97,"skin":"gameres/ui/auctionFrame1.png"},"child":[{"type":"Image","props":{"width":30,"var":"icon1_img","name":"icon1_img","height":30}},{"type":"TextInput","props":{"y":5,"x":48,"width":91,"var":"once_input","text":"0","name":"once_input","height":22,"fontSize":16,"editable":false,"color":"#ffffff","align":"center"}}]}]},{"type":"Button","props":{"y":-23,"x":193,"var":"close_btn","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"close_btn"}}]}]};
		return SaleAuctionTipUI;
	})(View);
var ScreenWUI=(function(_super){
		function ScreenWUI(){
			
		    this.Screen_bg=null;
		    this.m_List=null;
		    this.but_Close=null;

			ScreenWUI.__super.call(this);
		}

		CLASS$(ScreenWUI,'ui.ScreenWUI',_super);
		var __proto__=ScreenWUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ScreenWUI.uiView);

		}

		ScreenWUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":1,"x":6,"width":338,"var":"Screen_bg","skin":"gameres/png/00029.png","sizeGrid":"60,20,20,30","height":209},"child":[{"type":"List","props":{"y":61,"x":28,"width":285,"var":"m_List","height":124},"child":[{"type":"Text","props":{"y":-35,"x":120,"text":"筛选","strokeColor":"#000000","stroke":2,"fontSize":20,"color":"#ddaf52"}}]},{"type":"Button","props":{"y":-7,"x":267,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}}]}]};
		return ScreenWUI;
	})(View);
var SendRedPackUI=(function(_super){
		function SendRedPackUI(){
			
		    this.SendRpakWin=null;
		    this.lb_name=null;
		    this.lb_smsg=null;
		    this.lb_count=null;
		    this.but_send=null;
		    this.send_list=null;
		    this.but_close=null;
		    this.Editinput=null;

			SendRedPackUI.__super.call(this);
		}

		CLASS$(SendRedPackUI,'ui.SendRedPackUI',_super);
		var __proto__=SendRedPackUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SendRedPackUI.uiView);

		}

		SendRedPackUI.uiView={"type":"View","props":{"width":960,"height":640},"child":[{"type":"Image","props":{"y":68,"x":63,"var":"SendRpakWin","skin":"gameres/png/redpak_bg.png"},"child":[{"type":"Label","props":{"y":353,"x":36,"var":"lb_name","text":"哈哈哈的名字","fontSize":16,"color":"#eee7e7"}},{"type":"Label","props":{"y":384,"x":36,"var":"lb_smsg","text":"祝福语","fontSize":16,"color":"#eee7e7"}},{"type":"Label","props":{"y":354,"x":300,"var":"lb_count","text":"20个红包，已分派2个","fontSize":16,"color":"#eee7e7"}},{"type":"Button","props":{"y":57,"x":417,"width":70,"var":"but_send","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelFont":"SimSun","labelColors":"#D7B581,#D7B581","label":"留言","height":25}},{"type":"Label","props":{"y":62,"x":24,"width":80,"text":"留言内容：","height":18,"fontSize":16,"color":"#eee7e7"}},{"type":"List","props":{"y":95,"x":18,"width":478,"var":"send_list","vScrollBarSkin":"gameres/ui/vscroll.png","repeatY":10,"repeatX":1,"height":242}},{"type":"Button","props":{"y":-6,"x":446,"var":"but_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"TextInput","props":{"y":58,"x":99,"width":312,"var":"Editinput","type":"text","strokeColor":"#000000","stroke":2,"height":25,"fontSize":18,"color":"#e8dfdf","borderColor":"#51462e","bgColor":"#1e1a16"}},{"type":"Text","props":{"y":25,"x":232,"text":"红包","strokeColor":"#000000","stroke":2,"fontSize":24,"color":"#ddaf52","align":"center"}}]}]};
		return SendRedPackUI;
	})(View);
var SetingItemUI=(function(_super){
		function SetingItemUI(){
			
		    this.bg_img=null;
		    this.title_txt=null;
		    this.item_list=null;
		    this.icon_img=null;
		    this.name_lab=null;
		    this.desc_lab=null;
		    this.close_btn=null;

			SetingItemUI.__super.call(this);
		}

		CLASS$(SetingItemUI,'ui.SetingItemUI',_super);
		var __proto__=SetingItemUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SetingItemUI.uiView);

		}

		SetingItemUI.uiView={"type":"View","props":{"width":260,"height":274},"child":[{"type":"Image","props":{"y":5,"x":6,"width":217,"var":"bg_img","skin":"gameres/png/setting_small_bg.png","sizeGrid":"49,14,14,14","name":"bg_img","height":267},"child":[{"type":"Text","props":{"y":15,"x":66,"var":"title_txt","text":"喝药设置","stroke":2,"name":"title_txt","fontSize":20,"color":"#d8d3cf"}},{"type":"List","props":{"y":48,"x":3,"width":209,"var":"item_list","spaceY":4,"repeatY":3,"repeatX":1,"name":"item_list","height":210},"child":[{"type":"Box","props":{"y":0,"x":0,"width":209,"renderType":"render","height":70},"child":[{"type":"Image","props":{"y":2,"x":13,"skin":"gameres/ui/setiing_itemFrame.png"}},{"type":"Image","props":{"y":6,"x":18,"width":30,"var":"icon_img","name":"icon_img","height":31}},{"type":"Label","props":{"y":3,"x":69,"var":"name_lab","text":"超级金疮药","stroke":1,"name":"name_lab","fontSize":16,"color":"#cdcbc8"}},{"type":"Label","props":{"y":22,"x":60,"wordWrap":true,"width":146,"var":"desc_lab","text":"超级省电","stroke":1,"name":"desc_lab","fontSize":13,"color":"#cdcbc8"}}]}]},{"type":"Button","props":{"y":-4,"x":209,"var":"close_btn","stateNum":2,"skin":"gameres/ui/but_close.png","name":"close_btn"}}]}]};
		return SetingItemUI;
	})(View);
var SetingPickUpUI=(function(_super){
		function SetingPickUpUI(){
			
		    this.bg_img=null;
		    this.close_btn=null;
		    this.pickUp_list=null;
		    this.name_lab=null;
		    this.showName_check=null;
		    this.autoPick_check=null;

			SetingPickUpUI.__super.call(this);
		}

		CLASS$(SetingPickUpUI,'ui.SetingPickUpUI',_super);
		var __proto__=SetingPickUpUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SetingPickUpUI.uiView);

		}

		SetingPickUpUI.uiView={"type":"View","props":{"width":410,"height":400},"child":[{"type":"Image","props":{"y":11,"x":4,"width":371,"var":"bg_img","skin":"gameres/png/setting_small_bg.png","sizeGrid":"48,60,14,60","name":"bg_img","height":380},"child":[{"type":"Button","props":{"y":-25,"x":346,"var":"close_btn","stateNum":2,"skin":"gameres/ui/but_close.png","name":"close_btn"}},{"type":"Text","props":{"y":15,"x":44,"text":"物品名称","stroke":1,"fontSize":18,"color":"#cdcbc8"}},{"type":"Text","props":{"y":16,"x":133,"text":"名称显示","stroke":1,"fontSize":18,"color":"#cdcbc8"}},{"type":"Text","props":{"y":15,"x":232,"text":"自动拾取","stroke":1,"fontSize":18,"color":"#cdcbc8"}},{"type":"List","props":{"y":55,"x":20,"width":339,"var":"pickUp_list","spaceY":20,"repeatY":5,"repeatX":1,"name":"pickUp_list","height":317},"child":[{"type":"Box","props":{"y":0,"x":0,"width":341,"renderType":"render","height":44},"child":[{"type":"Label","props":{"y":12,"x":34,"var":"name_lab","text":"物品的名称","stroke":1,"name":"name_lab","fontSize":16,"color":"#cdcbc8"}},{"type":"CheckBox","props":{"x":154,"var":"showName_check","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","name":"showName_check","labelColors":"#cdcbc8,#cdcbc8"}},{"type":"CheckBox","props":{"y":0,"x":245,"var":"autoPick_check","stateNum":2,"skin":"gameres/ui/seting_checkBox.png","name":"autoPick_check","labelColors":"#cdcbc8,#cdcbc8"}}]}]}]}]};
		return SetingPickUpUI;
	})(View);
var SetSkillUI=(function(_super){
		function SetSkillUI(){
			
		    this.set_bg=null;
		    this.pan_drag=null;
		    this.btn_close=null;
		    this.list_selfskill=null;
		    this.img_selected=null;
		    this.btn_skill=null;
		    this.txt_skillname=null;
		    this.pan_skilltype1=null;
		    this.pan1_btn4=null;
		    this.pan1_btn3=null;
		    this.pan1_btn2=null;
		    this.pan1_btn1=null;
		    this.pan1_btn8=null;
		    this.pan1_btn7=null;
		    this.pan1_btn6=null;
		    this.pan1_btn5=null;
		    this.pan_skilltype2=null;
		    this.pan2_btn4=null;
		    this.pan2_btn3=null;
		    this.pan2_btn2=null;
		    this.pan2_btn1=null;
		    this.pan2_btn8=null;
		    this.pan2_btn7=null;
		    this.pan2_btn6=null;
		    this.pan2_btn5=null;
		    this.btn_reset=null;
		    this.btn_right=null;
		    this.btn_left=null;

			SetSkillUI.__super.call(this);
		}

		CLASS$(SetSkillUI,'ui.SetSkillUI',_super);
		var __proto__=SetSkillUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SetSkillUI.uiView);

		}

		SetSkillUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500,"centerY":0.5,"centerX":0.5},"child":[{"type":"Image","props":{"y":17,"x":79,"var":"set_bg","skin":"gameres/png/setskill_bg.png","sizeGrid":"76,67,37,47","name":"set_bg"},"child":[{"type":"Panel","props":{"y":8,"x":2,"width":668,"var":"pan_drag","name":"pan_drag","height":51}},{"type":"Button","props":{"y":-7,"x":653,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"List","props":{"y":110,"x":25,"width":266,"var":"list_selfskill","spaceY":15,"spaceX":0,"repeatX":3,"name":"list_selfskill","height":328},"child":[{"type":"Box","props":{"y":0,"x":0,"width":90,"visible":false,"height":82},"child":[{"type":"Image","props":{"y":-6,"x":9,"visible":false,"var":"img_selected","skin":"gameres/ui/setskill_chosen.png","name":"img_selected"}},{"type":"Button","props":{"y":0,"x":15,"width":60,"var":"btn_skill","stateNum":2,"skin":"gameres/ui/magic_res/00000.png","name":"btn_skill","height":60}},{"type":"Text","props":{"y":65,"x":0,"width":90,"var":"txt_skillname","text":"神圣战甲术","name":"txt_skillname","fontSize":16,"color":"#ffffff","align":"center"}}]}]},{"type":"Panel","props":{"y":120,"x":365,"width":265,"var":"pan_skilltype1","name":"pan_skilltype1","height":265},"child":[{"type":"Button","props":{"y":135,"x":0,"width":50,"var":"pan1_btn4","stateNum":2,"skin":"gameres/ui/att_base.png","name":"3","height":50}},{"type":"Button","props":{"y":62,"x":4,"width":50,"var":"pan1_btn3","stateNum":2,"skin":"gameres/ui/att_base.png","name":"2","height":50}},{"type":"Button","props":{"y":5,"x":67,"width":50,"var":"pan1_btn2","stateNum":2,"skin":"gameres/ui/att_base.png","name":"1","height":50}},{"type":"Button","props":{"y":5,"x":148,"width":50,"var":"pan1_btn1","stateNum":2,"skin":"gameres/ui/att_base.png","name":"0","height":50}},{"type":"Button","props":{"y":62,"x":210,"width":50,"var":"pan1_btn8","stateNum":2,"skin":"gameres/ui/att_base.png","name":"7","height":50}},{"type":"Button","props":{"y":135,"x":210,"width":50,"var":"pan1_btn7","stateNum":2,"skin":"gameres/ui/att_base.png","name":"6","height":50}},{"type":"Button","props":{"y":202,"x":148,"width":50,"var":"pan1_btn6","stateNum":2,"skin":"gameres/ui/att_base.png","name":"5","height":50}},{"type":"Button","props":{"y":202,"x":67,"width":50,"var":"pan1_btn5","stateNum":2,"skin":"gameres/ui/att_base.png","name":"4","height":50}},{"type":"Button","props":{"y":67,"x":75,"width":116,"stateNum":2,"skin":"gameres/ui/btn_att.png","height":121}}]},{"type":"Panel","props":{"y":120,"x":365,"width":265,"visible":false,"var":"pan_skilltype2","name":"pan_skilltype2","height":265},"child":[{"type":"Button","props":{"y":199,"x":58,"width":50,"var":"pan2_btn4","stateNum":2,"skin":"gameres/ui/att_base.png","name":"3","height":50}},{"type":"Button","props":{"y":138,"x":87,"width":50,"var":"pan2_btn3","stateNum":2,"skin":"gameres/ui/att_base.png","name":"2","height":50}},{"type":"Button","props":{"y":89,"x":136,"width":50,"var":"pan2_btn2","stateNum":2,"skin":"gameres/ui/att_base.png","name":"1","height":50}},{"type":"Button","props":{"y":56,"x":193,"width":50,"var":"pan2_btn1","stateNum":2,"skin":"gameres/ui/att_base.png","name":"0","height":50}},{"type":"Button","props":{"y":161,"x":3,"width":50,"var":"pan2_btn8","stateNum":2,"skin":"gameres/ui/att_base.png","name":"7","height":50}},{"type":"Button","props":{"y":89,"x":43,"width":50,"var":"pan2_btn7","stateNum":2,"skin":"gameres/ui/att_base.png","name":"6","height":50}},{"type":"Button","props":{"y":39,"x":93,"width":50,"var":"pan2_btn6","stateNum":2,"skin":"gameres/ui/att_base.png","name":"5","height":50}},{"type":"Button","props":{"y":2,"x":153,"width":50,"var":"pan2_btn5","stateNum":2,"skin":"gameres/ui/att_base.png","name":"4","height":50}},{"type":"Button","props":{"width":116,"stateNum":2,"skin":"gameres/ui/btn_att.png","right":0,"height":121,"bottom":0}}]},{"type":"Text","props":{"y":93,"x":336,"text":"点击选择左侧图标，再点击右侧格子即可","strokeColor":"#000000","stroke":2,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":395,"x":434,"var":"btn_reset","stateNum":2,"skin":"gameres/ui/setskill_reset.png","name":"btn_reset"}},{"type":"Button","props":{"y":225,"x":637,"var":"btn_right","stateNum":2,"skin":"gameres/ui/setskill_right.png","name":"btn_right"}},{"type":"Button","props":{"y":225,"x":306,"visible":false,"var":"btn_left","stateNum":2,"skin":"gameres/ui/setskill_left.png","name":"btn_left"}}]}]};
		return SetSkillUI;
	})(View);
var shelvesItemUI=(function(_super){
		function shelvesItemUI(){
			
		    this.itemName_lab=null;
		    this.item_box=null;
		    this.bidIcon_img=null;
		    this.bidPrice_lab=null;
		    this.oncePriceIcon_img=null;
		    this.oncePrice_lab=null;
		    this.lastTime_lab=null;
		    this.rate_lab=null;

			shelvesItemUI.__super.call(this);
		}

		CLASS$(shelvesItemUI,'ui.shelvesItemUI',_super);
		var __proto__=shelvesItemUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(shelvesItemUI.uiView);

		}

		shelvesItemUI.uiView={"type":"View","props":{"width":200,"height":130},"child":[{"type":"Image","props":{"width":198,"skin":"gameres/ui/shelvesItem.png","sizeGrid":"35,11,14,14","height":122},"child":[{"type":"Label","props":{"y":5,"x":2,"width":193,"var":"itemName_lab","text":"材料碎片","stroke":2,"name":"itemName_lab","height":16,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":30,"x":9,"var":"item_box","skin":"gameres/ui/setiing_itemFrame.png","name":"item_box"}},{"type":"Box","props":{"y":30,"x":9}},{"type":"Text","props":{"y":28,"x":69,"text":"竞价：","stroke":2,"fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":26,"x":106,"width":24,"var":"bidIcon_img","skin":"gameres/ui/00005.png","name":"bidIcon_img","height":20}},{"type":"Label","props":{"y":29,"x":130,"width":61,"var":"bidPrice_lab","text":"1000万","stroke":2,"name":"bidPrice_lab","height":16,"fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":51,"x":53,"text":"一口价：","stroke":2,"fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":49,"x":106,"width":24,"var":"oncePriceIcon_img","skin":"gameres/ui/00005.png","name":"oncePriceIcon_img","height":20}},{"type":"Label","props":{"y":52,"x":130,"width":61,"var":"oncePrice_lab","text":"1000万","stroke":2,"name":"oncePrice_lab","height":16,"fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":85,"x":41,"text":"竞拍中：","stroke":2,"fontSize":16,"color":"#10ff00"}},{"type":"Label","props":{"y":85,"x":102,"var":"lastTime_lab","text":"22:22:22","stroke":2,"name":"lastTime_lab","fontSize":16,"color":"#10ff00"}},{"type":"Text","props":{"y":102,"x":41,"text":"交易税：","stroke":2,"fontSize":16,"color":"#10ff00"}},{"type":"Label","props":{"y":102,"x":102,"var":"rate_lab","text":"22:22:22","stroke":2,"name":"rate_lab","fontSize":16,"color":"#10ff00"}}]}]};
		return shelvesItemUI;
	})(View);
var ShoushiUI=(function(_super){
		function ShoushiUI(){
			
		    this.img_bg=null;
		    this.btn_close=null;
		    this.img_box=null;
		    this.Item_0=null;
		    this.Item_1=null;
		    this.Item_2=null;
		    this.Item_3=null;
		    this.Item_4=null;
		    this.Item_5=null;

			ShoushiUI.__super.call(this);
		}

		CLASS$(ShoushiUI,'ui.ShoushiUI',_super);
		var __proto__=ShoushiUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ShoushiUI.uiView);

		}

		ShoushiUI.uiView={"type":"View","props":{"width":600,"mouseThrough":true,"height":400},"child":[{"type":"Image","props":{"y":72,"x":195,"var":"img_bg","skin":"gameres/png/shoushi.png"},"child":[{"type":"Button","props":{"y":-3,"x":112,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Image","props":{"y":55,"x":17,"width":148,"var":"img_box","height":107},"child":[{"type":"Image","props":{"y":5,"x":4,"width":44,"var":"Item_0","name":"0","height":44}},{"type":"Image","props":{"y":5,"x":51,"width":44,"var":"Item_1","name":"1","height":44}},{"type":"Image","props":{"y":5,"x":98,"width":44,"var":"Item_2","name":"2","height":44}},{"type":"Image","props":{"y":53,"x":4,"width":44,"var":"Item_3","name":"3","height":44}},{"type":"Image","props":{"y":53,"x":51,"width":44,"var":"Item_4","name":"4","height":44}},{"type":"Image","props":{"y":53,"x":98,"width":44,"var":"Item_5","name":"5","height":44}}]}]}]};
		return ShoushiUI;
	})(View);
var ShousWinUI=(function(_super){
		function ShousWinUI(){
			
		    this.Shoushi_bg=null;
		    this.but_Close=null;
		    this.but_Update=null;
		    this.sKuang=null;
		    this.Item_0=null;
		    this.Item_1=null;
		    this.Item_2=null;
		    this.Item_3=null;
		    this.Item_4=null;
		    this.Item_5=null;
		    this.Item_6=null;
		    this.Item_7=null;
		    this.Item_8=null;
		    this.Item_9=null;
		    this.Item_10=null;
		    this.Item_11=null;

			ShousWinUI.__super.call(this);
		}

		CLASS$(ShousWinUI,'ui.ShousWinUI',_super);
		var __proto__=ShousWinUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ShousWinUI.uiView);

		}

		ShousWinUI.uiView={"type":"View","props":{"width":600,"mouseThrough":true,"height":400},"child":[{"type":"Image","props":{"y":62,"x":185,"var":"Shoushi_bg","skin":"gameres/png/shengxiao.png"},"child":[{"type":"Button","props":{"y":-5,"x":167,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":220,"x":65,"width":100,"var":"but_Update","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelColors":"#D7B581,#D7B581","label":"升级神佑袋","height":29}},{"type":"Image","props":{"y":55,"x":17,"width":206,"var":"sKuang","height":156},"child":[{"type":"Image","props":{"y":6,"x":4,"width":44,"var":"Item_0","name":"0","height":44}},{"type":"Image","props":{"y":6,"x":54,"width":44,"var":"Item_1","name":"1","height":44}},{"type":"Image","props":{"y":6,"x":104,"width":44,"var":"Item_2","name":"2","height":44}},{"type":"Image","props":{"y":6,"x":154,"width":44,"var":"Item_3","name":"3","height":44}},{"type":"Image","props":{"y":54,"x":4,"width":44,"var":"Item_4","name":"4","height":44}},{"type":"Image","props":{"y":54,"x":54,"width":44,"var":"Item_5","name":"5","height":44}},{"type":"Image","props":{"y":54,"x":104,"width":44,"var":"Item_6","name":"6","height":44}},{"type":"Image","props":{"y":54,"x":154,"width":44,"var":"Item_7","name":"7","height":44}},{"type":"Image","props":{"y":104,"x":4,"width":44,"var":"Item_8","name":"8","height":44}},{"type":"Image","props":{"y":104,"x":54,"width":44,"var":"Item_9","name":"9","height":44}},{"type":"Image","props":{"y":104,"x":104,"width":44,"var":"Item_10","name":"10","height":44}},{"type":"Image","props":{"y":104,"x":154,"width":44,"var":"Item_11","name":"11","height":44}}]}]}]};
		return ShousWinUI;
	})(View);
var SimpleScreenUI=(function(_super){
		function SimpleScreenUI(){
			
		    this.bg=null;
		    this.btn_task=null;
		    this.btn_hum=null;
		    this.btn_circum=null;
		    this.btn_item=null;
		    this.btn_change=null;
		    this.img_screen=null;
		    this.img_task=null;
		    this.panel_task=null;
		    this.task_detail=null;
		    this.box0=null;
		    this.list_hum=null;
		    this.img_circum=null;
		    this.box1=null;
		    this.list_item=null;
		    this.box2=null;
		    this.list_mon=null;
		    this.img_chat=null;
		    this.list_chat=null;
		    this.chat_detail=null;
		    this.btn_hide=null;

			SimpleScreenUI.__super.call(this);
		}

		CLASS$(SimpleScreenUI,'ui.SimpleScreenUI',_super);
		var __proto__=SimpleScreenUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SimpleScreenUI.uiView);

		}

		SimpleScreenUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":0,"x":0,"width":235,"var":"bg","mouseThrough":true,"height":146},"child":[{"type":"Button","props":{"y":1,"x":0,"var":"btn_task","stateNum":2,"skin":"gameres/ui/btn_ss_task.png","selected":true,"name":"btn_task"}},{"type":"Button","props":{"y":73,"x":0,"var":"btn_hum","stateNum":2,"skin":"gameres/ui/btn_ss_hum.png","selected":false,"name":"btn_hum","labelStroke":2,"labelSize":16,"labelFont":"SimSun","labelColors":"#fbf1b3,#fbf1b3"}},{"type":"Button","props":{"y":1,"x":0,"visible":false,"var":"btn_circum","stateNum":2,"skin":"gameres/ui/btn_ss_monster.png","selected":false,"name":"btn_circum"}},{"type":"Button","props":{"y":73,"x":0,"visible":false,"var":"btn_item","stateNum":2,"skin":"gameres/ui/btn_ss_item.png","selected":false,"name":"btn_item","labelStroke":2,"labelSize":16,"labelFont":"SimSun","labelColors":"#fbf1b3,#fbf1b3"}},{"type":"Button","props":{"y":59.5,"x":2,"var":"btn_change","stateNum":2,"skin":"gameres/ui/btn_ss_change.png","name":"btn_change"}},{"type":"Image","props":{"y":3,"x":32,"width":200,"var":"img_screen","name":"img_screen","height":142},"child":[{"type":"Image","props":{"y":0,"x":0,"width":200,"visible":true,"var":"img_task","name":"img_task","height":141},"child":[{"type":"Panel","props":{"y":0,"x":0,"width":200,"var":"panel_task","name":"panel_task","height":141},"child":[{"type":"Button","props":{"y":3,"x":157,"width":68,"visible":false,"var":"task_detail","top":3,"stateNum":2,"skin":"gameres/ui/btn_detail.png","scaleY":0.6,"scaleX":0.6,"right":2,"name":"task_detail","height":36}}]},{"type":"Box","props":{"y":3,"x":4,"width":193,"visible":false,"var":"box0","name":"box0","height":137},"child":[{"type":"Image","props":{"y":0,"x":0,"width":200,"skin":"gameres/png/chat_chat.png","height":140,"alpha":0.5}},{"type":"List","props":{"y":0,"x":0,"width":192,"var":"list_hum","name":"list_hum","height":136}}]}]},{"type":"Image","props":{"y":0,"x":0,"width":200,"visible":false,"var":"img_circum","name":"img_circum","height":141},"child":[{"type":"Image","props":{"y":0,"x":0,"width":200,"skin":"gameres/png/chat_chat.png","height":140,"alpha":0.5}},{"type":"Box","props":{"y":3,"x":4,"width":193,"var":"box1","name":"box1","height":137},"child":[{"type":"List","props":{"y":0,"x":0,"width":192,"var":"list_item","name":"list_item","height":136}}]},{"type":"Box","props":{"y":3,"x":4,"width":193,"var":"box2","name":"box2","height":137},"child":[{"type":"List","props":{"y":0,"x":0,"width":192,"var":"list_mon","name":"list_mon","height":136}}]}]},{"type":"Image","props":{"y":0,"x":0,"width":200,"visible":false,"var":"img_chat","skin":"gameres/png/rw_bg.png","name":"img_chat","height":141},"child":[{"type":"List","props":{"x":0,"width":200,"var":"list_chat","name":"list_chat","height":171,"centerY":2}},{"type":"Button","props":{"width":68,"visible":false,"var":"chat_detail","top":0,"stateNum":2,"skin":"gameres/ui/btn_detail.png","scaleY":0.6,"scaleX":0.6,"right":0,"name":"chat_detail","height":36}}]}]}]},{"type":"Button","props":{"y":146,"x":1,"var":"btn_hide","stateNum":1,"skin":"gameres/ui/btn_ss_hide.png","name":"btn_hide"}}]};
		return SimpleScreenUI;
	})(View);
var SkillRockUI=(function(_super){
		function SkillRockUI(){
			
		    this.base=null;
		    this.skillBtn_arc=null;

			SkillRockUI.__super.call(this);
		}

		CLASS$(SkillRockUI,'ui.SkillRockUI',_super);
		var __proto__=SkillRockUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SkillRockUI.uiView);

		}

		SkillRockUI.uiView={"type":"View","props":{"y":0,"x":0,"width":360,"mouseThrough":true,"height":360},"child":[{"type":"Box","props":{"y":180,"x":180,"width":360,"var":"base","pivotY":180,"pivotX":180,"name":"base","mouseThrough":true,"height":360},"child":[{"type":"Image","props":{"y":0,"x":0,"width":360,"var":"skillBtn_arc","skin":"gameres/png/skillBtn_arc.png","pivotY":0.5,"pivotX":0.5,"name":"skillBtn_arc","height":360,"alpha":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":360,"renderType":"hit","lineWidth":1,"height":360,"fillColor":"#1eee26"}},{"type":"Circle","props":{"y":180,"x":180,"renderType":"unHit","radius":92,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]};
		return SkillRockUI;
	})(View);
var skillwinUI=(function(_super){
		function skillwinUI(){
			
		    this.skill_gb=null;
		    this.but_Close=null;
		    this.but_rest=null;
		    this.but_bg=null;
		    this.skill_0=null;
		    this.skill_1=null;
		    this.skill_2=null;
		    this.skill_3=null;
		    this.skill_4=null;
		    this.skill_5=null;
		    this.skill_6=null;
		    this.skill_7=null;

			skillwinUI.__super.call(this);
		}

		CLASS$(skillwinUI,'ui.skillwinUI',_super);
		var __proto__=skillwinUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(skillwinUI.uiView);

		}

		skillwinUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":63,"x":146,"var":"skill_gb","skin":"gameres/png/skillwin.png"},"child":[{"type":"Button","props":{"y":-3,"x":225,"var":"but_Close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Button","props":{"y":193,"x":104,"width":90,"var":"but_rest","stateNum":2,"skin":"gameres/ui/btn_ok.png","labelColors":"#D7B581,#D7B581","label":"重置","height":32}},{"type":"Image","props":{"y":55,"x":16,"width":266,"var":"but_bg","height":137},"child":[{"type":"Image","props":{"y":14,"x":11,"width":48,"var":"skill_0","name":"0","height":48}},{"type":"Image","props":{"y":14,"x":78,"width":48,"var":"skill_1","name":"1","height":48}},{"type":"Image","props":{"y":14,"x":144,"width":48,"var":"skill_2","name":"2","height":48}},{"type":"Image","props":{"y":14,"x":210,"width":48,"var":"skill_3","name":"3","height":48}},{"type":"Image","props":{"y":81,"x":11,"width":48,"var":"skill_4","name":"4","height":48}},{"type":"Image","props":{"y":81,"x":78,"width":48,"var":"skill_5","name":"5","height":48}},{"type":"Image","props":{"y":81,"x":144,"width":48,"var":"skill_6","name":"6","height":48}},{"type":"Image","props":{"y":81,"x":210,"width":48,"var":"skill_7","name":"7","height":48}}]}]}]};
		return skillwinUI;
	})(View);
var SocialWinUI=(function(_super){
		function SocialWinUI(){
			
		    this.close_btn=null;
		    this.socialDirectory_box=null;
		    this.redPacket_btn=null;
		    this.friend_btn=null;
		    this.temp_btn=null;
		    this.mail_btn=null;

			SocialWinUI.__super.call(this);
		}

		CLASS$(SocialWinUI,'ui.SocialWinUI',_super);
		var __proto__=SocialWinUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SocialWinUI.uiView);

		}

		SocialWinUI.uiView={"type":"View","props":{"width":870,"height":500},"child":[{"type":"Button","props":{"y":17,"x":706,"var":"close_btn","stateNum":2,"skin":"gameres/ui/but_close.png","name":"close_btn"}},{"type":"VBox","props":{"y":90,"x":708,"var":"socialDirectory_box","name":"socialDirectory_box","align":"left"},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"redPacket_btn","stateNum":2,"skin":"gameres/ui/redPacket_bar.png","name":"redPacket_btn"}},{"type":"Button","props":{"y":0,"x":38,"var":"friend_btn","stateNum":2,"skin":"gameres/ui/friend_bar.png","name":"friend_btn"}},{"type":"Button","props":{"y":0,"x":76,"var":"temp_btn","stateNum":2,"skin":"gameres/ui/temp_bar.png","name":"temp_btn"}},{"type":"Button","props":{"y":0,"x":114,"var":"mail_btn","stateNum":2,"skin":"gameres/ui/mail_bar.png","name":"mail_btn"}}]}]};
		return SocialWinUI;
	})(View);
var statebonusUI=(function(_super){
		function statebonusUI(){
			
		    this.statpoint_bg=null;
		    this.statpoint_close=null;
		    this.statpoint_ok=null;
		    this.pointcount=null;
		    this.state_panel=null;
		    this.point1=null;
		    this.statpoint_minus1=null;
		    this.statpoint_plus1=null;
		    this.state1=null;
		    this.statpoint_minus2=null;
		    this.statpoint_plus2=null;
		    this.point2=null;
		    this.state2=null;
		    this.statpoint_minus3=null;
		    this.statpoint_plus3=null;
		    this.point3=null;
		    this.state3=null;
		    this.statpoint_minus4=null;
		    this.statpoint_plus4=null;
		    this.point4=null;
		    this.state4=null;
		    this.statpoint_minus5=null;
		    this.statpoint_plus5=null;
		    this.point5=null;
		    this.state5=null;
		    this.statpoint_minus6=null;
		    this.statpoint_plus6=null;
		    this.point6=null;
		    this.state6=null;
		    this.statpoint_minus7=null;
		    this.statpoint_plus7=null;
		    this.point7=null;
		    this.state7=null;
		    this.statpoint_minus8=null;
		    this.statpoint_plus8=null;
		    this.point8=null;
		    this.state8=null;
		    this.statpoint_minus9=null;
		    this.statpoint_plus9=null;
		    this.point9=null;
		    this.state9=null;

			statebonusUI.__super.call(this);
		}

		CLASS$(statebonusUI,'ui.statebonusUI',_super);
		var __proto__=statebonusUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(statebonusUI.uiView);

		}

		statebonusUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":25,"x":235,"var":"statpoint_bg","skin":"gameres/png/statpoint_bg.png","name":"statpoint_bg"},"child":[{"type":"Button","props":{"y":-22,"x":339,"var":"statpoint_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"statpoint_close"}},{"type":"Button","props":{"y":402,"x":287,"width":70,"var":"statpoint_ok","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"statpoint_ok","labelStrokeColor":"#000000","labelStroke":1,"labelSize":16,"labelColors":"#fbf1b3,#fbf1b3","label":"同  意","height":25}},{"type":"Label","props":{"y":40,"x":19,"width":263,"text":"您当前还有剩余部分属性点未分配。请根据自己的","height":16,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":58,"x":19,"text":"意向，调整自己的属性值。","fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":406,"x":92,"width":91,"text":"可分配点数：","height":16,"fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":404,"x":193,"width":63,"var":"pointcount","valign":"middle","text":"9999","name":"pointcount","height":20,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Panel","props":{"y":83,"x":10,"width":381,"var":"state_panel","name":"state_panel","height":313},"child":[{"type":"Image","props":{"y":5,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Text","props":{"y":21,"x":179,"width":60,"var":"point1","valign":"middle","text":"99/99","name":"point1","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":15,"x":271,"var":"statpoint_minus1","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus1","disabled":true}},{"type":"Image","props":{"y":15,"x":328,"var":"statpoint_plus1","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus1"}},{"type":"Text","props":{"y":24,"x":10,"text":"物理攻击","fontSize":16,"color":"#ffffff"}},{"type":"Text","props":{"y":24,"x":83,"width":83,"var":"state1","text":"1000-1000","name":"state1","height":16,"fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":65,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Text","props":{"y":84,"x":10,"text":"魔法攻击","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":75,"x":271,"var":"statpoint_minus2","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus2","disabled":true}},{"type":"Image","props":{"y":75,"x":328,"var":"statpoint_plus2","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus2"}},{"type":"Text","props":{"y":81,"x":179,"width":60,"var":"point2","valign":"middle","text":"99/99","name":"point2","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":84,"x":83,"width":80,"var":"state2","text":"1000-1000","name":"state2","height":16,"fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":125,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":135,"x":271,"var":"statpoint_minus3","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus3","disabled":true}},{"type":"Image","props":{"y":135,"x":328,"var":"statpoint_plus3","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus3"}},{"type":"Text","props":{"y":141,"x":179,"width":60,"var":"point3","valign":"middle","text":"99/99","name":"point3","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":146,"x":83,"width":78,"var":"state3","text":"1000-1000","name":"state3","height":16,"fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":144,"x":10,"text":"道术攻击","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":185,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":195,"x":271,"var":"statpoint_minus4","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus4","disabled":true}},{"type":"Image","props":{"y":195,"x":328,"var":"statpoint_plus4","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus4"}},{"type":"Text","props":{"y":201,"x":179,"width":60,"var":"point4","valign":"middle","text":"99/99","name":"point4","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":204,"x":83,"width":79,"var":"state4","text":"1000-1000","name":"state4","height":16,"fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":204,"x":10,"text":"物理防御","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":245,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":255,"x":271,"var":"statpoint_minus5","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus5","disabled":true}},{"type":"Image","props":{"y":255,"x":328,"var":"statpoint_plus5","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus5"}},{"type":"Text","props":{"y":261,"x":179,"width":60,"var":"point5","valign":"middle","text":"99/99","name":"point5","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":264,"x":83,"width":83,"var":"state5","text":"1000-1000","name":"state5","height":16,"fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":264,"x":10,"text":"魔法防御","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":305,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":315,"x":271,"var":"statpoint_minus6","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus6","disabled":true}},{"type":"Image","props":{"y":315,"x":328,"var":"statpoint_plus6","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus6"}},{"type":"Text","props":{"y":321,"x":179,"width":60,"var":"point6","valign":"middle","text":"99/99","name":"point6","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":324,"x":83,"width":60,"var":"state6","text":"1000","name":"state6","fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":324,"x":10,"text":"生  命  值","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":365,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":375,"x":271,"var":"statpoint_minus7","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus7","disabled":true}},{"type":"Image","props":{"y":375,"x":328,"var":"statpoint_plus7","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus7"}},{"type":"Text","props":{"y":381,"x":179,"width":60,"var":"point7","valign":"middle","text":"99/99","name":"point7","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":384,"x":83,"width":60,"var":"state7","text":"1000","name":"state7","fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":384,"x":10,"text":"魔  法  值","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":425,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":435,"x":271,"var":"statpoint_minus8","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus8","disabled":true}},{"type":"Image","props":{"y":435,"x":328,"var":"statpoint_plus8","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus8"}},{"type":"Text","props":{"y":441,"x":179,"width":60,"var":"point8","valign":"middle","text":"99/99","name":"point8","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":444,"x":83,"width":60,"var":"state8","text":"1000","name":"state8","fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":444,"x":10,"text":"命        中","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":485,"x":0,"skin":"gameres/png/item_bg.png"}},{"type":"Image","props":{"y":495,"x":271,"var":"statpoint_minus9","skin":"gameres/ui/statpoint_minus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_minus9","disabled":true}},{"type":"Image","props":{"y":495,"x":328,"var":"statpoint_plus9","skin":"gameres/ui/statpoint_plus.png","scaleY":1.3,"scaleX":1.3,"name":"statpoint_plus9"}},{"type":"Text","props":{"y":501,"x":179,"width":60,"var":"point9","valign":"middle","text":"99/99","name":"point9","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":504,"x":83,"width":60,"var":"state9","text":"1000","name":"state9","fontSize":16,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":504,"x":10,"text":"躲        避","fontSize":16,"color":"#ffffff"}}]}]}]};
		return statebonusUI;
	})(View);
var StoreUI=(function(_super){
		function StoreUI(){
			
		    this.img_bg=null;
		    this.txt_name=null;
		    this.txt_state=null;
		    this.txt_num=null;
		    this.txt_page=null;
		    this.List_store=null;
		    this.ItemSearch=null;
		    this.btn_itemsearch=null;
		    this.ItemType=null;
		    this.ItemSort=null;
		    this.price_low=null;
		    this.price_high=null;
		    this.pricetype=null;
		    this.btn_first=null;
		    this.btn_previous=null;
		    this.btn_next=null;
		    this.btn_last=null;
		    this.btn_close=null;

			StoreUI.__super.call(this);
		}

		CLASS$(StoreUI,'ui.StoreUI',_super);
		var __proto__=StoreUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(StoreUI.uiView);

		}

		StoreUI.uiView={"type":"View","props":{"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"width":570,"var":"img_bg","skin":"gameres/png/00091.png","name":"img_bg","height":374,"centerY":0,"centerX":0},"child":[{"type":"Text","props":{"y":29,"x":42,"var":"txt_name","text":"橡胶路飞的店铺","name":"txt_name","fontSize":14,"color":"#e8a448","align":"left"}},{"type":"Text","props":{"y":52,"x":44,"var":"txt_state","text":"当前状态：在线","name":"txt_state","color":"#e8a448"}},{"type":"Text","props":{"y":52,"x":159,"var":"txt_num","text":"店铺物品数：100/100","name":"txt_num","color":"#e8a448"}},{"type":"Text","props":{"y":52,"x":470,"var":"txt_page","text":"页数  1/2","name":"txt_page","color":"#e8a448"}},{"type":"Label","props":{"y":67,"x":26,"width":47,"height":37,"borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":67,"x":73,"width":109,"valign":"middle","text":"物品名称","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":67,"x":182,"width":109,"valign":"middle","text":"出售价格","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":67,"x":291,"width":61,"valign":"middle","text":"物品类别","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":67,"x":352,"width":139,"valign":"middle","text":"添加时间","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Label","props":{"y":67,"x":491,"width":54,"valign":"middle","text":"购买","height":37,"color":"#c0c0c0","borderColor":"#B89458","bold":true,"align":"center"}},{"type":"Text","props":{"y":297,"x":28,"text":"关键字","color":"#c0c0c0"}},{"type":"Text","props":{"y":323,"x":28,"text":"搜索类别","color":"#c0c0c0"}},{"type":"Text","props":{"y":321,"x":137,"text":"排序","color":"#c0c0c0"}},{"type":"Text","props":{"y":349,"x":28,"text":"价格范围","color":"#c0c0c0"}},{"type":"Text","props":{"y":349,"x":187,"text":"之间","color":"#c0c0c0"}},{"type":"Text","props":{"y":349,"x":218,"text":"货币类型","color":"#c0c0c0"}},{"type":"List","props":{"y":104,"x":27,"width":519,"var":"List_store","name":"List_store","height":187}},{"type":"TextInput","props":{"y":294,"x":81,"width":82,"var":"ItemSearch","promptColor":"#ffffff","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"Button","props":{"y":295,"x":168,"width":40,"var":"btn_itemsearch","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"btn_itemsearch","labelColors":"#e8d4a8,#e8a448","label":"搜索","height":20}},{"type":"ComboBox","props":{"y":319,"x":81,"visibleNum":10,"var":"ItemType","skin":"gameres/ui/personalstore_00094.png","selectedIndex":0,"labels":"所有,装饰,补给,强化,好友,限量,奇珍","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"ComboBox","props":{"y":319,"x":168,"width":92,"visibleNum":10,"var":"ItemSort","skin":"gameres/ui/personalstore_combobox.png","selectedIndex":0,"labels":"价格从低到高,价格从高到低","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"TextInput","props":{"y":344,"x":81,"width":47,"var":"price_low","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"TextInput","props":{"y":344,"x":135,"width":47,"var":"price_high","text":"0","restrict":"0123456789","color":"#ffffff","borderColor":"#908460","bgColor":"#000000"}},{"type":"ComboBox","props":{"y":344,"x":270,"width":55,"visibleNum":10,"var":"pricetype","skin":"gameres/ui/personalstore_00094.png","sizeGrid":"-79,23,-68,8","selectedIndex":0,"labels":"不限,元宝,游戏点,金币","labelColors":"#ffffff,#ffffff,#ffffff","itemColors":"#0000ff"}},{"type":"Button","props":{"y":317,"x":356,"var":"btn_first","stateNum":3,"skin":"gameres/ui/personalstore_first.png","name":"btn_first"}},{"type":"Button","props":{"y":317,"x":392,"var":"btn_previous","stateNum":3,"skin":"gameres/ui/personalstore_previous.png","name":"btn_previous"}},{"type":"Button","props":{"y":317,"x":442,"var":"btn_next","stateNum":3,"skin":"gameres/ui/personalstore_next.png","name":"btn_next"}},{"type":"Button","props":{"y":317,"x":492,"var":"btn_last","skin":"gameres/ui/personalstore_last.png","name":"btn_last"}},{"type":"Button","props":{"y":-7,"x":500,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"close"}}]}]};
		return StoreUI;
	})(View);
var StoreItemUI=(function(_super){
		function StoreItemUI(){
			
		    this.img_bg=null;
		    this.ItemImg=null;
		    this.ItemNmae=null;
		    this.ItemPrice=null;
		    this.ItemType=null;
		    this.ItemTime=null;
		    this.ItemBy=null;

			StoreItemUI.__super.call(this);
		}

		CLASS$(StoreItemUI,'ui.StoreItemUI',_super);
		var __proto__=StoreItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(StoreItemUI.uiView);

		}

		StoreItemUI.uiView={"type":"View","props":{"width":518,"height":37},"child":[{"type":"Image","props":{"y":0,"x":0,"width":518,"var":"img_bg","height":37},"child":[{"type":"Label","props":{"y":1,"x":-1,"width":47,"var":"ItemImg","name":"ItemImg","height":37,"borderColor":"#B89458"}},{"type":"Label","props":{"y":1,"x":46,"width":109,"var":"ItemNmae","valign":"middle","text":"战神手镯","overflow":"hidden","name":"ItemNmae","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":155,"width":109,"var":"ItemPrice","valign":"middle","text":"123元宝","overflow":"hidden","name":"ItemPrice","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":264,"width":61,"var":"ItemType","valign":"middle","text":"装饰","overflow":"hidden","name":"ItemType","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":325,"width":139,"var":"ItemTime","valign":"middle","text":"2018-12-14 17:31:04","overflow":"hidden","name":"ItemTime","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":1,"x":464,"width":53,"var":"ItemBy","valign":"middle","underline":true,"text":"购买","overflow":"hidden","name":"ItemBy","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}}]}]};
		return StoreItemUI;
	})(View);
var StoreSoldItemUI=(function(_super){
		function StoreSoldItemUI(){
			
		    this.img_bg=null;
		    this.ItemImg=null;
		    this.ItemName=null;
		    this.ItemSoldName=null;
		    this.ItemPrice=null;
		    this.ItemTime=null;
		    this.ItemRemove=null;

			StoreSoldItemUI.__super.call(this);
		}

		CLASS$(StoreSoldItemUI,'ui.StoreSoldItemUI',_super);
		var __proto__=StoreSoldItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(StoreSoldItemUI.uiView);

		}

		StoreSoldItemUI.uiView={"type":"View","props":{"width":598,"height":37},"child":[{"type":"Image","props":{"y":0,"x":0,"width":598,"var":"img_bg","name":"img_bg","height":37},"child":[{"type":"Label","props":{"width":47,"var":"ItemImg","name":"ItemImg","height":37,"borderColor":"#B89458"}},{"type":"Label","props":{"x":47,"width":109,"var":"ItemName","valign":"middle","text":"战神手镯","overflow":"hidden","name":"ItemName","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":156,"width":109,"var":"ItemSoldName","valign":"middle","underline":true,"text":"狂战士","overflow":"hidden","name":"ItemSoldName","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":265,"width":109,"var":"ItemPrice","valign":"middle","text":"1000元宝","overflow":"hidden","name":"ItemPrice","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":374,"width":141,"var":"ItemTime","valign":"middle","text":"2018-12-14 17:31:04","overflow":"hidden","name":"ItemTime","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"y":0,"x":515,"width":83,"var":"ItemRemove","valign":"middle","underline":true,"text":"删除","overflow":"hidden","name":"ItemRemove","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}}]}]};
		return StoreSoldItemUI;
	})(View);
var StoreStorageItemUI=(function(_super){
		function StoreStorageItemUI(){
			
		    this.img_bg=null;
		    this.ItemImg=null;
		    this.ItemName=null;
		    this.ItemPrice=null;
		    this.ItemType=null;
		    this.ItemTime=null;
		    this.ItemBack=null;
		    this.ItemRetrieve=null;

			StoreStorageItemUI.__super.call(this);
		}

		CLASS$(StoreStorageItemUI,'ui.StoreStorageItemUI',_super);
		var __proto__=StoreStorageItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(StoreStorageItemUI.uiView);

		}

		StoreStorageItemUI.uiView={"type":"View","props":{"width":598,"height":37},"child":[{"type":"Image","props":{"width":598,"var":"img_bg","name":"img_bg","height":37},"child":[{"type":"Label","props":{"width":47,"var":"ItemImg","name":"ItemImg","height":37,"borderColor":"#B89458"}},{"type":"Label","props":{"x":47,"width":109,"var":"ItemName","valign":"middle","text":"战神手镯","overflow":"hidden","name":"ItemName","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":156,"width":109,"var":"ItemPrice","valign":"middle","text":"123元宝","overflow":"hidden","name":"ItemPrice","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":265,"width":61,"var":"ItemType","valign":"middle","text":"装饰","overflow":"hidden","name":"ItemType","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":326,"width":141,"var":"ItemTime","valign":"middle","text":"2018-12-14 17:31:04","overflow":"hidden","name":"ItemTime","height":37,"fontSize":14,"color":"#ffffff","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":467,"width":65,"var":"ItemBack","valign":"middle","underline":true,"text":"放入店铺","overflow":"hidden","name":"ItemBack","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}},{"type":"Label","props":{"x":532,"width":65,"var":"ItemRetrieve","valign":"middle","underline":true,"text":"取回","overflow":"hidden","name":"ItemRetrieve","height":37,"fontSize":14,"color":"#00ff00","borderColor":"#B89458","align":"center"}}]}]};
		return StoreStorageItemUI;
	})(View);
var TaskSceneUI=(function(_super){
		function TaskSceneUI(){
			
		    this.task_Win=null;
		    this.btn_close=null;
		    this.list_title_w=null;
		    this.list_title=null;
		    this.img_bj2=null;
		    this.btn_panel=null;

			TaskSceneUI.__super.call(this);
		}

		CLASS$(TaskSceneUI,'ui.TaskSceneUI',_super);
		var __proto__=TaskSceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TaskSceneUI.uiView);

		}

		TaskSceneUI.uiView={"type":"View","props":{"width":870,"scaleY":1,"scaleX":1,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":7,"x":64,"width":712,"var":"task_Win","skin":"gameres/png/btn_task_bj.png","sizeGrid":"76,67,37,79","height":465},"child":[{"type":"Button","props":{"y":1,"x":629,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"Image","props":{"y":121,"x":32,"width":149,"var":"list_title_w","height":321},"child":[{"type":"List","props":{"y":0,"x":0,"width":149,"var":"list_title","repeatY":6,"repeatX":1,"height":321}}]},{"type":"Label","props":{"y":316,"x":-192,"text":"任务描述","fontSize":20,"color":"#a24c0d"}},{"type":"Label","props":{"y":26,"x":332,"text":"任务","strokeColor":"#000000","stroke":2,"fontSize":24,"font":"SimHei","color":"#ddaf52"}},{"type":"Panel","props":{"y":120,"x":197,"width":483,"var":"img_bj2","name":"img_bj2","height":325}},{"type":"Panel","props":{"y":68,"x":34,"width":641,"var":"btn_panel","name":"btn_panel","height":49}}]}]};
		return TaskSceneUI;
	})(View);
var TeamApplyListUI=(function(_super){
		function TeamApplyListUI(){
			
		    this.bg_img=null;
		    this.apply_list=null;
		    this.selectEffect_img=null;
		    this.content_txt_0=null;
		    this.content_txt_1=null;
		    this.content_txt_2=null;
		    this.content_txt_3=null;
		    this.agree_btn=null;
		    this.noAgree_btn=null;
		    this.close_btn=null;

			TeamApplyListUI.__super.call(this);
		}

		CLASS$(TeamApplyListUI,'ui.TeamApplyListUI',_super);
		var __proto__=TeamApplyListUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TeamApplyListUI.uiView);

		}

		TeamApplyListUI.uiView={"type":"View","props":{"width":870,"height":500},"child":[{"type":"Image","props":{"y":-55,"x":5,"var":"bg_img","skin":"gameres/png/t_applyList_bg.png","name":"bg_img"}},{"type":"Text","props":{"y":30,"x":108,"text":"名称","fontSize":20,"color":"#ffffff"}},{"type":"Text","props":{"y":32,"x":251,"text":"等级","fontSize":20,"color":"#ffffff"}},{"type":"Text","props":{"y":31,"x":346,"text":"职业","fontSize":20,"color":"#ffffff"}},{"type":"Text","props":{"y":31,"x":470,"text":"行会","fontSize":20,"color":"#ffffff"}},{"type":"Text","props":{"y":31,"x":682,"text":"操作","fontSize":20,"color":"#ffffff"}},{"type":"List","props":{"y":66,"x":39,"width":787,"var":"apply_list","spaceY":5,"repeatX":1,"name":"apply_list","height":349},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"y":0,"x":-11,"width":800,"var":"selectEffect_img","skin":"gameres/png/f_selectEffect.png","name":"selectEffect_img","height":30}},{"type":"Text","props":{"y":7,"x":45,"var":"content_txt_0","text":"名字也是7个字","name":"content_txt_0","fontSize":14}},{"type":"Text","props":{"y":7,"x":222,"var":"content_txt_1","text":"100","name":"content_txt_1","fontSize":14}},{"type":"Text","props":{"y":5,"x":310,"var":"content_txt_2","text":"战士","name":"content_txt_2","fontSize":14}},{"type":"Text","props":{"y":6,"x":420,"var":"content_txt_3","text":"最牛逼工会","name":"content_txt_3","fontSize":14}},{"type":"Button","props":{"y":0,"x":574,"var":"agree_btn","stateNum":2,"skin":"gameres/ui/teamGroup/agreeTeamApply .png","name":"agree_btn"}},{"type":"Button","props":{"y":-1,"x":667,"var":"noAgree_btn","stateNum":2,"skin":"gameres/ui/teamGroup/noAgreeTeamApply.png","name":"noAgree_btn"}}]}]},{"type":"Button","props":{"y":-43,"x":853,"var":"close_btn","stateNum":2,"skin":"gameres/ui/but_close.png","name":"close_btn"}}]};
		return TeamApplyListUI;
	})(View);
var TeamInviteListUI=(function(_super){
		function TeamInviteListUI(){
			
		    this.bg_img=null;
		    this.near_btn=null;
		    this.friend_btn=null;
		    this.close_btn=null;
		    this.invite_list=null;
		    this.selectEffect_img=null;
		    this.content_txt_0=null;
		    this.content_txt_1=null;
		    this.content_txt_2=null;
		    this.invite_btn=null;

			TeamInviteListUI.__super.call(this);
		}

		CLASS$(TeamInviteListUI,'ui.TeamInviteListUI',_super);
		var __proto__=TeamInviteListUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TeamInviteListUI.uiView);

		}

		TeamInviteListUI.uiView={"type":"View","props":{"width":900,"height":600},"child":[{"type":"Image","props":{"y":18,"x":5,"var":"bg_img","skin":"gameres/png/teamGroup_bg.png","name":"bg_img"}},{"type":"Button","props":{"y":102,"x":37,"var":"near_btn","stateNum":2,"skin":"gameres/ui/near.png","name":"near_btn"}},{"type":"Button","props":{"y":156,"x":38,"var":"friend_btn","stateNum":2,"skin":"gameres/ui/friend.png","name":"friend_btn"}},{"type":"Button","props":{"y":30,"x":853,"var":"close_btn","stateNum":2,"skin":"gameres/ui/but_close.png","name":"close_btn"}},{"type":"Text","props":{"y":104,"x":279,"text":"名称","fontSize":20,"color":"#ffffff"}},{"type":"Text","props":{"y":104,"x":425,"text":"等级","fontSize":20,"color":"#ffffff"}},{"type":"Text","props":{"y":105,"x":569,"text":"行会","fontSize":20,"color":"#ffffff"}},{"type":"Text","props":{"y":107,"x":730,"text":"操作","fontSize":20,"color":"#ffffff"}},{"type":"List","props":{"y":138,"x":221,"width":603,"var":"invite_list","spaceY":5,"repeatX":1,"name":"invite_list","height":348},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"var":"selectEffect_img","skin":"gameres/png/f_selectEffect.png","name":"selectEffect_img","height":30}},{"type":"Text","props":{"y":3,"x":37,"var":"content_txt_0","text":"名字也是七个字","name":"content_txt_0","fontSize":14,"color":"#ffffff"}},{"type":"Text","props":{"y":7,"x":215,"var":"content_txt_1","text":"100","name":"content_txt_1","fontSize":14,"color":"#ffffff"}},{"type":"Text","props":{"y":6,"x":329,"var":"content_txt_2","text":"就是很牛逼","name":"content_txt_2","fontSize":14,"color":"#ffffff"}},{"type":"Button","props":{"y":-2,"x":489,"var":"invite_btn","stateNum":2,"skin":"gameres/ui/invite.png","name":"invite_btn"}}]}]}]};
		return TeamInviteListUI;
	})(View);
var TeamOperationTipUI=(function(_super){
		function TeamOperationTipUI(){
			
		    this.bg_img=null;
		    this.name_txt=null;
		    this.btns_box=null;
		    this.sendPos_btn=null;
		    this.exitTeam_btn=null;
		    this.check_btn=null;
		    this.privateChat_btn=null;
		    this.makeDeak_btn=null;
		    this.outTeam_btn=null;
		    this.inviteMem_btn=null;
		    this.close_btn=null;

			TeamOperationTipUI.__super.call(this);
		}

		CLASS$(TeamOperationTipUI,'ui.TeamOperationTipUI',_super);
		var __proto__=TeamOperationTipUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TeamOperationTipUI.uiView);

		}

		TeamOperationTipUI.uiView={"type":"View","props":{"width":500,"height":400},"child":[{"type":"Image","props":{"y":1,"x":-1,"var":"bg_img","skin":"gameres/png/playInfo_bg.png","sizeGrid":"60,16,16,16","name":"bg_img"}},{"type":"Text","props":{"y":21,"x":3,"width":388,"var":"name_txt","text":"名字也是七个字","name":"name_txt","height":18,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Box","props":{"y":54,"x":5,"width":383,"var":"btns_box","name":"btns_box","height":320},"child":[{"type":"Button","props":{"y":10,"x":53,"var":"sendPos_btn","stateNum":2,"skin":"gameres/ui/sendPos.png","name":"sendPos_btn"}},{"type":"Button","props":{"y":10,"x":209,"var":"exitTeam_btn","stateNum":2,"skin":"gameres/ui/exitTeam.png","name":"exitTeam_btn"}},{"type":"Button","props":{"y":74,"x":53,"var":"check_btn","stateNum":2,"skin":"gameres/ui/t_check.png","name":"check_btn"}},{"type":"Button","props":{"y":74,"x":209,"var":"privateChat_btn","stateNum":2,"skin":"gameres/ui/t_privateChat.png","name":"privateChat_btn"}},{"type":"Button","props":{"y":138,"x":53,"var":"makeDeak_btn","stateNum":2,"skin":"gameres/ui/t_makeDeal.png","name":"makeDeak_btn"}},{"type":"Button","props":{"y":138,"x":209,"var":"outTeam_btn","stateNum":2,"skin":"gameres/ui/outTeam.png","name":"outTeam_btn"}},{"type":"Button","props":{"y":202,"x":53,"var":"inviteMem_btn","stateNum":2,"skin":"gameres/ui/inviteMem.png","name":"inviteMem_btn"}}]},{"type":"Button","props":{"y":-3,"x":387,"var":"close_btn","stateNum":2,"skin":"gameres/ui/but_close.png","name":"close_btn"}}]};
		return TeamOperationTipUI;
	})(View);
var TreamGroupUI=(function(_super){
		function TreamGroupUI(){
			
		    this.bg_img=null;
		    this.myTeam_btn=null;
		    this.nearTeam_btn=null;
		    this.allowTeam_check=null;
		    this.title_0_txt=null;
		    this.title_1_txt=null;
		    this.title_2_txt=null;
		    this.title_3_txt=null;
		    this.title_4_txt=null;
		    this.title_img=null;
		    this.team_list=null;
		    this.selectEffect_img=null;
		    this.captainIcon_img=null;
		    this.content_txt_0=null;
		    this.content_txt_1=null;
		    this.content_txt_2=null;
		    this.content_txt_3=null;
		    this.content_txt_4=null;
		    this.applyAdd_btn=null;
		    this.captain_box=null;
		    this.callTeammate_btn=null;
		    this.inviteNumber_btn=null;
		    this.leaveTeam_btn=null;
		    this.createTeam_btn=null;
		    this.noTeam_txt=null;

			TreamGroupUI.__super.call(this);
		}

		CLASS$(TreamGroupUI,'ui.TreamGroupUI',_super);
		var __proto__=TreamGroupUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TreamGroupUI.uiView);

		}

		TreamGroupUI.uiView={"type":"View","props":{"y":0,"x":0,"width":870,"top":0,"right":0,"mouseThrough":true,"left":0,"height":500,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":712,"var":"bg_img","skin":"gameres/png/teamGroup_bg.png","name":"bg_img","height":465},"child":[{"type":"Button","props":{"y":67,"x":25,"width":136,"var":"myTeam_btn","stateNum":2,"skin":"gameres/ui/myTeam.png","name":"myTeam_btn","labelStroke":2,"labelSize":21,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","height":49}},{"type":"Button","props":{"y":114,"x":25,"width":136,"var":"nearTeam_btn","stateNum":2,"skin":"gameres/ui/nearTeam.png","name":"nearTeam_btn","labelStroke":2,"labelSize":21,"labelFont":"SimHei","labelColors":"#b79f8b,#ffdf8c","height":49}},{"type":"CheckBox","props":{"y":403,"x":30,"var":"allowTeam_check","stateNum":2,"skin":"gameres/ui/auxiliary_check.png","name":"allowTeam_check","labelStroke":2,"labelSize":20,"labelPadding":"9","labelFont":"SimHei","labelColors":"#e19c34,#e19c34","label":"允许组队"}},{"type":"Text","props":{"y":70,"x":227,"var":"title_0_txt","text":"名称","strokeColor":"#000000","stroke":2,"name":"title_0_txt","fontSize":20,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Text","props":{"y":70,"x":326,"var":"title_1_txt","text":"等级","strokeColor":"#000000","stroke":2,"name":"title_1_txt","fontSize":20,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Text","props":{"y":70,"x":373,"var":"title_2_txt","text":"职业","strokeColor":"#000000","stroke":2,"name":"title_2_txt","fontSize":20,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Text","props":{"y":70,"x":464,"var":"title_3_txt","text":"行会","strokeColor":"#000000","stroke":2,"name":"title_3_txt","fontSize":20,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Text","props":{"y":70,"x":575,"var":"title_4_txt","text":"所在地图","strokeColor":"#000000","stroke":2,"name":"title_4_txt","fontSize":20,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Image","props":{"y":67,"x":363,"var":"title_img","skin":"gameres/ui/t_verticalBar.png","name":"title_img"}},{"type":"List","props":{"y":103,"x":181,"width":502,"var":"team_list","spaceY":5,"repeatX":1,"name":"team_list","height":287},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"width":510,"var":"selectEffect_img","skin":"gameres/ui/f_selectEffect.png","name":"selectEffect_img","height":30}},{"type":"Image","props":{"y":0,"x":0,"var":"captainIcon_img","skin":"gameres/ui/captainIcon.png","name":"captainIcon_img"}},{"type":"Text","props":{"y":7,"x":34,"var":"content_txt_0","text":"名字也是七个字","name":"content_txt_0","fontSize":14,"color":"#ffffff"}},{"type":"Text","props":{"y":9,"x":154,"var":"content_txt_1","text":"100","name":"content_txt_1","fontSize":14,"color":"#ffffff"}},{"type":"Text","props":{"y":8,"x":200,"var":"content_txt_2","text":"战士","name":"content_txt_2","fontSize":14,"color":"#ffffff"}},{"type":"Text","props":{"y":7,"x":279,"var":"content_txt_3","text":"天下无敌","name":"content_txt_3","fontSize":14,"color":"#ffffff"}},{"type":"Text","props":{"y":6,"x":411,"var":"content_txt_4","text":"黑暗大陆","name":"content_txt_4","fontSize":14,"color":"#ffffff"}},{"type":"Button","props":{"y":-2,"x":401,"var":"applyAdd_btn","stateNum":2,"skin":"gameres/ui/applyAdd.png","name":"applyAdd_btn"}}]}]},{"type":"Box","props":{"y":395,"x":294,"var":"captain_box","name":"captain_box"},"child":[{"type":"Button","props":{"y":7,"x":20,"var":"callTeammate_btn","stateNum":2,"skin":"gameres/ui/callTeammate.png","name":"callTeammate_btn"}},{"type":"Button","props":{"y":7,"x":138,"var":"inviteNumber_btn","stateNum":2,"skin":"gameres/ui/inviteNumber.png","name":"inviteNumber_btn"}}]},{"type":"Button","props":{"y":402,"x":553,"var":"leaveTeam_btn","stateNum":2,"skin":"gameres/ui/leaveTeam.png","name":"leaveTeam_btn"}},{"type":"Button","props":{"y":402,"x":566,"var":"createTeam_btn","stateNum":2,"skin":"gameres/ui/createTeam.png","name":"createTeam_btn"}},{"type":"Text","props":{"y":224,"x":355,"var":"noTeam_txt","text":"当前无队伍","name":"noTeam_txt","fontSize":30,"color":"#ffffff"}}]}]};
		return TreamGroupUI;
	})(View);
var upgradeUI=(function(_super){
		function upgradeUI(){
			
		    this.upgrade_bg=null;
		    this.btn_close=null;
		    this.btn_upgrade=null;
		    this.upgrade_item=null;
		    this.item_txt=null;
		    this.item_img=null;
		    this.upgrade_material2=null;
		    this.material2_txt=null;
		    this.material2_img=null;
		    this.upgrade_material1=null;
		    this.material1_txt=null;
		    this.material1_img=null;

			upgradeUI.__super.call(this);
		}

		CLASS$(upgradeUI,'ui.upgradeUI',_super);
		var __proto__=upgradeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(upgradeUI.uiView);

		}

		upgradeUI.uiView={"type":"View","props":{"width":1136,"mouseThrough":true,"height":600},"child":[{"type":"Image","props":{"y":135,"x":392,"var":"upgrade_bg","skin":"gameres/png/upgrade_bg.PNG","name":"upgrade_bg"},"child":[{"type":"Button","props":{"y":-22,"x":291,"var":"btn_close","stateNum":2,"skin":"gameres/ui/btn_close.png","name":"btn_close"}},{"type":"Button","props":{"y":282,"x":125,"width":100,"var":"btn_upgrade","stateNum":2,"skin":"gameres/ui/box_btn_ok.png","name":"btn_upgrade","labelColors":"#D7B581,#D7B581","height":29}},{"type":"Image","props":{"y":68,"x":143,"var":"upgrade_item","skin":"gameres/ui/img_bag_bg.png","name":"upgrade_item"},"child":[{"type":"Label","props":{"y":10,"x":10,"wordWrap":true,"width":48,"var":"item_txt","text":"放入装备","name":"item_txt","height":47,"fontSize":20,"color":"#ffffff","alpha":0.5,"align":"center"}},{"type":"Image","props":{"visible":false,"var":"item_img","name":"item_img"}}]},{"type":"Image","props":{"y":181,"x":227,"var":"upgrade_material2","skin":"gameres/ui/img_bag_bg.png","name":"upgrade_material2"},"child":[{"type":"Label","props":{"y":10,"x":10,"wordWrap":true,"width":48,"var":"material2_txt","text":"辅助宝石","name":"material2_txt","height":47,"fontSize":20,"color":"#ffffff","alpha":0.5,"align":"center"}},{"type":"Image","props":{"visible":false,"var":"material2_img","name":"material2_img"}}]},{"type":"Image","props":{"y":181,"x":60,"var":"upgrade_material1","skin":"gameres/ui/img_bag_bg.png","name":"upgrade_material1"},"child":[{"type":"Label","props":{"y":10,"x":10,"wordWrap":true,"width":48,"var":"material1_txt","text":"升级宝石","name":"material1_txt","height":47,"fontSize":20,"color":"#ffffff","alpha":0.5,"align":"center"}},{"type":"Image","props":{"visible":false,"var":"material1_img","name":"material1_img"}}]}]}]};
		return upgradeUI;
	})(View);
var ZhaomuUI=(function(_super){
		function ZhaomuUI(){
			
		    this.ZhaomuWin=null;
		    this.check_dangq=null;
		    this.check_hh=null;
		    this.check_all=null;
		    this.but_zhaomu=null;
		    this.but_fabu=null;
		    this.but_xiougai=null;
		    this.but_quxiao=null;
		    this.btn_close=null;
		    this.txt_lvmin=null;
		    this.txt_lvmax=null;
		    this.txt_zmemo=null;

			ZhaomuUI.__super.call(this);
		}

		CLASS$(ZhaomuUI,'ui.ZhaomuUI',_super);
		var __proto__=ZhaomuUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ZhaomuUI.uiView);

		}

		ZhaomuUI.uiView={"type":"View","props":{"width":870,"mouseThrough":true,"height":500},"child":[{"type":"Image","props":{"y":62,"x":221,"var":"ZhaomuWin","skin":"gameres/png/zhaomuwin.png","name":"ZhaomuWin"},"child":[{"type":"CheckBox","props":{"y":176,"x":53,"width":105,"var":"check_dangq","stateNum":2,"skin":"gameres/ui/check.png","selected":true,"name":"check_dangq","labelStrokeColor":"#f4efef","labelSize":14,"labelColors":"#ffffff","label":"当前地图招募","height":20}},{"type":"CheckBox","props":{"y":176,"x":289,"width":84,"var":"check_hh","stateNum":2,"skin":"gameres/ui/check.png","name":"check_hh","labelStrokeColor":"#f4efef","labelSize":14,"labelColors":"#ffffff","label":"行会招募","height":20}},{"type":"CheckBox","props":{"y":176,"x":182,"width":80,"var":"check_all","stateNum":2,"skin":"gameres/ui/check.png","selected":false,"name":"check_all","labelStrokeColor":"#f4efef","labelSize":14,"labelColors":"#ffffff","label":"全服招募","height":20}},{"type":"Label","props":{"y":216,"x":168,"width":94,"text":"招募活动说明：","height":20,"fontSize":14,"color":"#e7de10"}},{"type":"Button","props":{"y":325,"x":41,"width":70,"var":"but_zhaomu","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"but_zhaomu","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"招募","height":24}},{"type":"Button","props":{"y":325,"x":131,"width":70,"var":"but_fabu","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"but_fabu","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"发布招募","height":24}},{"type":"Button","props":{"y":325,"x":221,"width":70,"var":"but_xiougai","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"but_xiougai","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"修改信息","height":24}},{"type":"Button","props":{"y":325,"x":311,"width":70,"var":"but_quxiao","stateNum":2,"skin":"gameres/ui/btn_ok.png","name":"but_quxiao","labelStrokeColor":"#000000","labelStroke":2,"labelSize":14,"labelColors":"#D7B581,#D7B581","label":"取消招募","height":24}},{"type":"Button","props":{"y":-4,"x":352,"var":"btn_close","text":"招募等级：","stateNum":2,"skin":"gameres/ui/btn_close.png"}},{"type":"TextInput","props":{"y":116,"x":115,"width":80,"var":"txt_lvmin","type":"number","text":"0","name":"txt_lvmin","height":24,"fontSize":14,"color":"#f3e9e9","borderColor":"#896B4D","bgColor":"#1E1A16","align":"center"}},{"type":"TextInput","props":{"y":116,"x":221,"width":80,"var":"txt_lvmax","type":"number","text":"55","name":"txt_lvmax","height":24,"fontSize":14,"color":"#f3e9e9","borderColor":"#896B4D","bgColor":"#1E1A16","align":"center"}},{"type":"TextInput","props":{"y":250,"x":85,"width":250,"var":"txt_zmemo","name":"txt_zmemo","height":24,"fontSize":18,"color":"#f3e9e9","borderColor":"#896B4D","bgColor":"#1E1A16"}},{"type":"Label","props":{"y":83,"x":167,"width":91,"text":"招募等级：","height":23,"fontSize":14,"color":"#efe6e6","align":"center"}},{"type":"Label","props":{"y":116,"x":195,"width":26,"text":"-","height":24,"fontSize":20,"color":"#efe6e6","align":"center"}},{"type":"Text","props":{"y":25,"x":189,"text":"招募","strokeColor":"#000000","stroke":2,"fontSize":24,"font":"SimSun","color":"#ddaf52","align":"center"}}]}]};
		return ZhaomuUI;
	})(View);