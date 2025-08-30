// 轮播图类
class Slide {
  constructor() {
    this.slideBoxDOM = document.querySelector('.slide-box');
    this.slideLeftBtnDOM = this.slideBoxDOM.querySelector('.slide-left-btn');
    this.slideRightBtnDOM = this.slideBoxDOM.querySelector('.slide-right-btn ');
    this.bannerBoxDOM = this.slideBoxDOM.querySelector('.banner-box');
    this.paginationBoxDOM = this.slideBoxDOM.querySelector('.pagination-box');

    // 记数器，记录当前所展示的横幅序号（不可直接操作变值）
    this._currentIndex = 0;
    this.bannerItemDOMs = null;
    // bannerItemDOMs length
    this.bannerItemDOMsLen = 0;


    // 图片对象数组
    this.banners = [
      {
        imageName: 'https://s21.ax1x.com/2024/08/18/pACvPK0.jpg',
      },
      {
        imageName: 'https://s21.ax1x.com/2024/08/17/pACsLJs.jpg',
      },
      {
        imageName: 'https://s21.ax1x.com/2024/08/17/pACsqij.jpg',
      },
      {
        imageName: 'https://s21.ax1x.com/2024/08/17/pACsHoQ.jpg',
      },
      {
        imageName: 'https://s21.ax1x.com/2024/08/17/pACs7dg.jpg',
      },
      {
        imageName: 'https://s21.ax1x.com/2024/08/17/pACsTeS.jpg',
      },
      {
        imageName: 'https://s21.ax1x.com/2024/08/17/pACs5sf.jpg',
      },
      {
        imageName: 'https://s21.ax1x.com/2024/08/17/pACcEqK.png',
      },
      {
        imageName: 'https://s21.ax1x.com/2024/08/17/pACcAr6.jpg',
      },
      {
        imageName: 'https://s21.ax1x.com/2024/08/17/pACckKx.jpg',
      },
      {
        imageName: 'https://s21.ax1x.com/2025/08/29/pVciHc4.jpg',
      },
      {
        imageName: 'https://s21.ax1x.com/2025/08/29/pVciT9U.jpg',
      },
      {
        imageName: 'https://s21.ax1x.com/2025/08/29/pVci73F.jpg',
      },
      // 可以继续增加图片
    ];
 
    // 定时器
    this.timer = null;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  // 用来监听记数器变化，根据变换来改变当前的横幅
  set currentIndex(num) {
    // 将所有横幅归初始
    Object.values(this.bannerItemDOMs).forEach((item, i) => {
      item.classList.remove('left', 'middle', 'right');
      item.onclick = null;
      this.paginationBoxDOM.children[i].classList.remove('chose');
    });

    if (num < 0) {
      this._currentIndex = this.bannerItemDOMsLen - 1;
    } else if (num >= this.bannerItemDOMsLen) {
      this._currentIndex = 0;
    } else {
      this._currentIndex = num;
    }
    this.paginationBoxDOM.children[this._currentIndex].classList.add('chose');

    if (this._currentIndex === 0) {
      this.showCurrentBanner(this.bannerItemDOMsLen - 1, this._currentIndex, this._currentIndex + 1);
    } else if (this._currentIndex === this.bannerItemDOMsLen - 1) {
      this.showCurrentBanner(this._currentIndex - 1, this._currentIndex, 0);
    } else {
      this.showCurrentBanner(this._currentIndex - 1, this._currentIndex, this._currentIndex + 1);
    }
  }

  // 显示当前横幅
  showCurrentBanner(leftIndex, middleIndex, rightIndex) {
    this.bannerItemDOMs[leftIndex].classList.add('left');
    this.bannerItemDOMs[middleIndex].classList.add('middle');
    this.bannerItemDOMs[rightIndex].classList.add('right');
    this.bannerItemDOMs[leftIndex].onclick = () => {
      this.currentIndex--;
    };
    this.bannerItemDOMs[rightIndex].onclick = () => {
      this.currentIndex++;
    }
  }

  // 获取 bannerItemDOMs
  getBannerItemDOMs() {
    return this.slideBoxDOM.querySelectorAll('.banner-item');
  }



  // 获取 banner-itemDOM 字符串，用来渲染 DOM
  getBannerItemHTML(imageName) {
    if(imageName == 'https://s21.ax1x.com/2024/08/18/pACvPK0.jpg')
      return `<div class="banner-item"><img src="${imageName}" title ="四轴无人飞行器"><p align = 'center' style='margin-top: 10px;'>四轴无人飞行器</p></div>`
    if(imageName == 'https://s21.ax1x.com/2024/08/17/pACsLJs.jpg')
      return `<div class="banner-item"><img src="${imageName}" title ="四轴无人飞行器"><p align = 'center' style='margin-top: 10px;'>四轴无人飞行器</p></div>`
    if(imageName == 'https://s21.ax1x.com/2024/08/17/pACsqij.jpg')
      return `<div class="banner-item"><img src="${imageName}" title ="四轴无人飞行器"><p align = 'center' style='margin-top: 10px;'>四轴无人飞行器</p></div>`
    if(imageName == 'https://s21.ax1x.com/2024/08/17/pACsHoQ.jpg')
      return `<div class="banner-item"><img src="${imageName}" title ="车赛独轮车"><p align = 'center' style='margin-top: 10px;'>车赛独轮车</p></div>`
    if(imageName == 'https://s21.ax1x.com/2024/08/17/pACs7dg.jpg')
      return `<div class="banner-item"><img src="${imageName}" title ="可堆叠式的分体外卖柜"><p align = 'center' style='margin-top: 10px;'>可堆叠式的分体外卖柜</p></div>`
    if(imageName == 'https://s21.ax1x.com/2024/08/17/pACsTeS.jpg')
      return `<div class="banner-item"><img src="${imageName}" title ="果园智能巡检机器人"><p align = 'center' style='margin-top: 10px;'>果园智能巡检机器人</p></div>`
    if(imageName == 'https://s21.ax1x.com/2024/08/17/pACs5sf.jpg')
      return `<div class="banner-item"><img src="${imageName}" title ="国二电磁车"><p align = 'center' style='margin-top: 10px;'>国二电磁车</p></div>`
    if(imageName == 'https://s21.ax1x.com/2024/08/17/pACcEqK.png')
      return `<div class="banner-item"><img src="${imageName}" title ="搬运货物小车"><p align = 'center' style='margin-top: 10px;'>搬运货物小车</p></div>`
    if(imageName == 'https://s21.ax1x.com/2024/08/17/pACcAr6.jpg')
      return `<div class="banner-item"><img src="${imageName}" title ="基地环境展示"><p align = 'center' style='margin-top: 10px;'>基地环境展示</p></div>`
    if(imageName == 'https://s21.ax1x.com/2024/08/17/pACckKx.jpg')
      return `<div class="banner-item"><img src="${imageName}" title ="手势识别划拳判断"><p align = 'center' style='margin-top: 10px;'>手势识别划拳判断</p></div>`
    if(imageName == 'https://s21.ax1x.com/2025/08/29/pVciHc4.jpg')
      return `<div class="banner-item"><img src="${imageName}" title ="飞行器"><p align = 'center' style='margin-top: 10px;'>飞行器</p></div>`
    if(imageName == 'https://s21.ax1x.com/2025/08/29/pVciT9U.jpg')
      return `<div class="banner-item"><img src="${imageName}" title ="工训小车"><p align = 'center' style='margin-top: 10px;'>工训小车</p></div>`
    if(imageName == 'https://s21.ax1x.com/2025/08/29/pVci73F.jpg')
      return `<div class="banner-item"><img src="${imageName}" title ="信号系统"><p align = 'center' style='margin-top: 10px;'>信号系统</p></div>`
    return `<div class="banner-item"><img src="${imageName}" title ="${imageName}"></div>`
  }

  // 渲染 DOM
  drawDOM(banners) {
    this.bannerBoxDOM.innerHTML = banners.reduce((html, item) => {
      return html + this.getBannerItemHTML(item.imageName);
    }, '');

    this.banners.forEach((item,i) => {
      const span = document.createElement('span');
      span.addEventListener('mouseover', () => {
        this.currentIndex = i;
      });
      this.paginationBoxDOM.append(span);
    });
  }

  // 启动定时器
  openTimer() {
    if(!!this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.currentIndex++;
    }, 3000);
  }

  // 清除定时器
  stopTimer() {
    clearInterval(this.timer);
  }

  init() {
    // 初始化
    this.drawDOM(this.banners);
    this.bannerItemDOMs = this.getBannerItemDOMs();
    this.bannerItemDOMsLen = this.bannerItemDOMs.length;
    this.currentIndex = 0;

    // 监听事件
    this.slideLeftBtnDOM.addEventListener('click', () => {
      this.currentIndex--;
    });
    this.slideRightBtnDOM.addEventListener('click', () => {
      this.currentIndex++;
    });

    // 自动轮播
    this.openTimer();
    this.slideBoxDOM.addEventListener('mouseover', () => {
      this.stopTimer();
    });
    this.slideBoxDOM.addEventListener('mouseout', () => {
      this.openTimer();
    })
  }
}

new Slide().init();
