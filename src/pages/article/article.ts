import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the Article page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var PhotoSwipe: any;
declare var PhotoSwipeUI_Default: any;
@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class Article {

  @ViewChild(Content) content: Content;

  title = '';
  tabanimate: boolean = false;
  tabbule: boolean = false;
  old_scrollTop = 0;
  pswpElement = null;
  gallery: any = null;
  itemsimg:any = null;
  _id;
  uid;
  data: any = {
    _id: "_id",
    uid: "uid",
    name: "Devon1",
    userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
    title: "鱼香肉丝",
    workbanner: "http://s2.cdn.xiachufang.com/b89670e8873311e6a9a10242ac110002_690w_459h.jpg?imageView2/2/w/660/interlace/1/q/90",
    text: "辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……",
    time: "10-10",
    food: [
      { name: '里脊肉', len: '250克' },
      { name: '青红辣椒', len: '各一个' },
      { name: '红萝卜', len: '1/3根' },
      { name: '干木耳', len: '30克' },
      { name: '郫县豆瓣酱', len: '	2汤匙' },
      { name: '蒜瓣', len: '两粒' },
      { name: '姜蓉', len: '少许' },
      { name: '泡椒', len: '八个' },
      { name: '葱白', len: '	两段' },
      { name: '盐', len: '一小勺' },
      { name: '糖', len: '一汤匙' },
      { name: '香醋', len: '一汤匙' },
      { name: '酱油', len: '两汤匙' },
      { name: '料酒', len: '少量' },
      { name: '油', len: '适量' },
      { name: '淀粉', len: '2汤匙' },
      { name: '清水', len: '3汤匙' },
    ],
    work: [
      { text: '木耳泡发，里脊肉切丝，用少许盐，糖抓均匀，一小勺淀粉上浆后用一小勺油拌匀封备用，木耳，辣椒，红萝卜也切丝备用，用糖、香醋，料酒，酱油，清水调成酱汁，比例约为：1：1：0.3：2：3', img: 'http://s1.cdn.xiachufang.com/697289a88c6911e6b87c0242ac110003_223w_149h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '223', height: '149' },
      { text: '锅烧热，倒入少许油，倒入瘦肉滑油', img: 'http://s1.cdn.xiachufang.com/69963a6a8c6911e6a9a10242ac110002_224w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '151' },
      { text: '肉身变白装起备用', img: 'http://s2.cdn.xiachufang.com/69a8c52c8c6911e6b87c0242ac110003_223w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '223', height: '152' },
      { text: '锅里留油，放少许蒜末，爆香后放入木耳快炒几秒', img: 'http://s2.cdn.xiachufang.com/69eb99928c6911e6a9a10242ac110002_224w_150h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '224', height: '158' },
      { text: '加入红萝卜继续炒几秒至变软即可装起备用', img: 'http://s1.cdn.xiachufang.com/6a1445e08c6911e6b87c0242ac110003_224w_148h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '148' },
      { text: '锅里再次放入少许油，放入蒜末、切碎的泡椒、葱白、姜末爆香', img: 'http://s2.cdn.xiachufang.com/6a26cd508c6911e6b87c0242ac110003_226w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '226', height: '152' },
      { text: '舀入两汤匙郫县豆瓣酱', img: 'http://s2.cdn.xiachufang.com/6ab65dda8c6911e6a9a10242ac110002_222w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '222', height: '152' },
      { text: '炒出红油', img: 'http://s1.cdn.xiachufang.com/6b1cd5928c6911e6b87c0242ac110003_226w_153h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '226', height: '153' },
      { text: '加入滑好的肉丝，翻炒均匀', img: 'http://s2.cdn.xiachufang.com/6b44cac08c6911e6b87c0242ac110003_222w_148h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '222', height: '148' },
      { text: '倒入青红椒丝', img: 'http://s1.cdn.xiachufang.com/6b693d888c6911e6a9a10242ac110002_223w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '223', height: '151' },
      { text: '翻炒片刻后倒入之前炒好的红萝卜和黑木耳丝', img: 'http://s2.cdn.xiachufang.com/6b7c20608c6911e6b87c0242ac110003_223w_151h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '223', height: '151' },
      { text: '再倒入之前兑好的酱汁（酱汁中可以加入3汤匙的清水），再次翻炒均匀', img: 'http://s2.cdn.xiachufang.com/6b9cc3ec8c6911e6b87c0242ac110003_220w_149h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '220', height: '149' },
      { text: '少许淀粉加水兑好勾薄芡后即可装起享用', img: 'http://s1.cdn.xiachufang.com/6c01ab7c8c6911e6a9a10242ac110002_224w_148h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '148' },
    ],
    tip: "1、步骤中提到的比例为大约，具体请根据个人口味稍作调整，要以自己喜欢的口感为准。 2、豆瓣酱一定要炒出红油再倒入肉丝，要不油色会相差比较远，亮泽度也会较差 3、酱汁提前兑好，在肉丝下锅炒均匀后立即可以倒入锅中，避免临时找酱汁引起遗漏 4、整个菜只需要很少的盐，只有在腌制肉丝的时候放一点点，因为酱油比较咸，豆瓣酱也咸，泡椒、香醋都有盐分 5、勾芡别太厚重，吃起来会腻，因为有酸，甜咸鲜味，搭配很均衡，所以，这道菜虽然看着红油很亮，其实并不太辣。",
    type: "1"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef) {
    this._id = this.navParams.get("_id");
    this.uid = this.navParams.get("uid");
    
  }

  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  pushPersonPage(){
    this.navCtrl.push( 'Person' );
  }

  onScroll($event: any) {

    let scrollTop = $event.scrollTop;

    if (scrollTop > 110 && (this.old_scrollTop - scrollTop) < 0) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }


    } else {
      this.tabanimate = false;
      if (!this.tabbule && scrollTop > 150) {
        this.tabbule = true;
        this.title = '家常豆腐';
      }
      if (scrollTop <= 150) {
        this.tabbule = false;
        this.title = '';
      }
    }
    this.old_scrollTop = scrollTop;
    this.ref.detectChanges();
  }

  //查看步骤图
  pswpElementInit(idx){
    if (this.pswpElement == null) {
      this.pswpElement = document.querySelectorAll('.pswp')[0];
    }
    var items: any = [];

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      index: idx * 1 // start at first slide
    };
    var len = this.data.work.length;
    
    for(var i=0; i<len; i++){
      var objs = {};
      objs["src"] = this.data["work"][i]["img"];
      objs["w"] = this.data["work"][i]["width"];
      objs["h"] = this.data["work"][i]["height"];
      objs["title"] = "步骤 " + (i + 1) + "：" + this.data["work"][i]["text"];
      items.push(objs);
    }

    // Initializes and opens PhotoSwipe
    this.gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, items, options);
    this.gallery.init();


  } 

}
