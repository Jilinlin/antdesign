import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from './Home.js';//首页页面
import Nearby from './Nearby.js';//附近页面
import Order from './Order.js';//订单页面
import My from './My.js';//我的页面

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',//默认进入首页
      // selectedTab: 'nearby',//默认进入附近
      // selectedTab: 'my',//默认进入我的
    };
  }

  render() {
    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="black"
          barTintColor="#bc0400"
        >
            {/* 首页 */}
          <TabBar.Item
            title="首页"
            key="Life"
            // 图标样式
            icon={
              <i style={{fontSize:22}} className='iconfont icon-shouye'></i>
            }
            // 选中时图标样式
            selectedIcon={
              <i style={{fontSize:22}} className='iconfont icon-shouye'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {//设置状态 
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
              {/* 引入Home组件 */}
              <Home/>
          </TabBar.Item>

            {/* 附近 */}
          <TabBar.Item
            title="附近"
            key="Koubei"
            // 图标样式
            icon={
              <i style={{fontSize:22}} className='iconfont icon-dingdan'></i>
            }
            // 选中时图标样式
            selectedIcon={
              <i style={{fontSize:22}} className='iconfont icon-dingdan'></i>
            }
            selected={this.state.selectedTab === 'nearby'}
            onPress={() => {
              this.setState({
                selectedTab: 'nearby',
              });
            }}
          >
            {/* 引入附近组件 */}
            <Nearby/>
          </TabBar.Item>

            {/* 订单 */}
          <TabBar.Item
            
            title="订单"
            key="Order"
            // 图标样式
            icon={
              <i style={{fontSize:22}} className='iconfont icon-fujin'></i>
            }
            // 选中时图标样式
            selectedIcon={
              <i style={{fontSize:22}} className='iconfont icon-fujin'></i>
            }
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
              {/* 引入订单组件 */}
              <Order/>
          </TabBar.Item>

            {/* 我的 */}
          <TabBar.Item
            title="我的"
            key="my"
            // 图标样式
            icon={
              <i style={{fontSize:22}} className='iconfont icon-wode'></i>
            }
            // 选中时图标样式
            selectedIcon={
              <i style={{fontSize:22}} className='iconfont icon-wode'></i>
            }
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
            }}
          >
            {/* 引入我的组件 */}
            <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}