<!--
 * @Description 
 * @author 张晓龙 <2467365764@qq.com>
 * @copyright 2020
 * @Date 2020-10-13 23:13:27
 * @FilePath /wallet/src/pages/creat/index.vue
-->
<template>
  <div>
    <u-title title="" :theme="false"></u-title>
    <u-body>
      <div class="view-group">
        <div class="view-title">
          <p>选择</p>
          <p>钱包体系</p>
        </div>
        <div class="list-group">
          <view class="list-view" @click="creat('ETH')">
            <p>以太坊</p>
            <image
              class="list-image"
              :src="require('../../static/home/yt.png')"
              mode="aspectFit"
            />
          </view>
          <view class="list-view" @click="creat('DETO')">
            <p>DETO</p>
            <image
              class="list-image"
              :src="require('../../static/home/deto.png')"
              mode="aspectFit"
            />
          </view>
        </div>
      </div>
    </u-body>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component()
export default class Create extends Vue {
  title = "选择钱包体系";
  type = "creat";
  creat(e) {
    if (e == "ETH") {
      uni.showToast({
        title: "暂未开放",
        icon: "none",
        duration: 2000,
      });
      return;
    }
    if (this.type == "creat") {
      uni.navigateTo({
        url: "../creat-form/index?type=" + e,
      });
    } else {
      uni.navigateTo({
        url: "../import-fun/index?type=" + e,
      });
    }
  }
  onLoad(options) {
    this.type = options.type;
  }
}
</script>

<style>
.list-image {
  width: 170upx;
  height: 110upx;
}
.list-group {
  display: flex;
  margin-top: 60upx;
  width: 100%;
  box-sizing: border-box;
  padding: 0 30upx;
  flex-direction: row;
  justify-content: space-between;
}
.view-group {
  justify-content: flex-start;
}
.list-view {
  width: 330upx;
  height: 230upx;
  border-radius: 16upx;
  background: linear-gradient(to right bottom, #7983ff 10%, #2d7afe);
  margin-top: 30upx;
  color: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 42upx;
  flex-direction: row;
  box-sizing: border-box;
  box-shadow: 0 0 10upx rgba(45, 122, 254, 0.25);
  float: left;
  position: relative;
}
.list-view p {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 30upx;
  font-size: 32upx;
}
</style>
