'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){

    return this.display();
  }

  appAction(){
    let json = [{"id":"hostsshare","name":"hosts"},{"id":"ie6","name":"IE 6"},{"id":"ie7","name":"IE 7"},{"id":"ie8","name":"IE 8"},{"id":"ie9","name":"IE 9"},{"id":"ie10","name":"IE 10"},{"id":"ie11","name":"IE 11"},{"id":"chrome","name":"Chrome"},{"id":"firefox","name":"Firefox"},{"id":"opera","name":"Opera"},{"id":"360se","name":"360�����"},{"id":"360chrome","name":"360���������"},{"id":"liebao","name":"�Ա������"},{"id":"maxthon","name":"���������"},{"id":"qqbrowser","name":"QQ�����"},{"id":"ucbrowser","name":"UC�����"},{"id":"sogou","name":"�ѹ������"},{"id":"2345","name":"2345�����"},{"id":"theworld","name":"����֮��"},{"id":"safari","name":"safari�����"},{"id":"desktop","name":"�ҵ�����"},{"id":"431103.com","name":"�ҵķ�����"},{"id":"20","name":"20������"},{"id":"19","name":"19������"},{"id":"18","name":"18������"},{"id":"129","name":"129������"}];

    return this.json();
  }
}