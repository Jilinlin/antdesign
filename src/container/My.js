import React, { Component } from 'react'
import { NavBar,List} from 'antd-mobile';

const Item = List.Item;

export default class My extends Component {
    render() {
        return (
            <div>
                {/* 设置导航 */}
                <NavBar
                    style={{backgroundColor:'#d51712',color:'white',border:"1px solid #d51712"}}
                    rightContent={[
                         <i style={{fontSize:20}} className='iconfont icon-shezhi'></i>
                    ]}
                >                    
                </NavBar>

                <NavBar
                    style={{backgroundColor:'#d51712',color:'white',height:100,border:"1px solid #d51712"}}
                > 
                    <img src={require(`../img/tx.gif`)} style={{width:90,height:90}}/>
                </NavBar>

                <NavBar
                    style={{backgroundColor:'#d51712',color:'white',border:"1px solid #d51712",height:50}}
                > 
                    <div>迈克尔楠楠楠</div>
                </NavBar>


                <NavBar
                    style={{backgroundColor:'#a90400',color:'white',border:"1px solid #a90400"}}
                    leftContent={[
                         <div style={{fontSize:22,marginLeft:15}}>0元</div>,
                    ]}
                    rightContent={[
                        <div style={{fontSize:22,marginRight:22}}>2张</div>,
                    ]}
                >   
                        <div style={{fontSize:22}}>8个</div>
                </NavBar>

                <NavBar
                    style={{backgroundColor:'#a90400',color:'white',border:"1px solid #a90400",paddingBottom:8,height:30}}
                    leftContent={[
                         <div>我的钱包</div>
                    ]}
                    rightContent={[
                        <div>商家代金劵</div>
                    ]}
                >   
                    <div style={{fontSize:16}}>我的钱包</div>
                </NavBar>

                {/* 设置列表 */}
                <List style={{padding:'14px 0 3px 0'}}>
                    <Item
                        thumb={require('../img/d1.gif')}
                        arrow="horizontal"
                        onClick={() => {}}
                        style={{height:60}}
                    ><div style={{color:'#a0a0a0'}}>我的收货地址</div></Item>
                    <Item
                        thumb={require('../img/d2.gif')}
                        onClick={() => {}}
                        arrow="horizontal"
                        style={{height:60}}
                    ><div style={{color:'#a0a0a0'}}>我的收藏</div></Item>
                    <Item
                        thumb={require('../img/d3.gif')}
                        onClick={() => {}}
                        arrow="horizontal"
                        style={{height:60}}
                    ><div style={{color:'#a0a0a0'}}>我的评论</div></Item>
                    <Item
                        thumb={require('../img/d4.gif')}
                        onClick={() => {}}
                        arrow="horizontal"
                        style={{height:60}}
                    ><div style={{color:'#a0a0a0'}}>我的退款</div></Item>
                    <Item
                        thumb={require('../img/d5.gif')}
                        onClick={() => {}}
                        arrow="horizontal"
                        style={{height:60}}
                    ><div style={{color:'#a0a0a0'}}>我的消息</div></Item>
                </List>

                <List style={{padding:'10px 0 3px 0'}}>
                    <Item
                        thumb={require('../img/d6.gif')}
                        arrow="horizontal"
                        onClick={() => {}}
                        style={{height:60}}
                    ><div style={{color:'#a0a0a0'}}>帮助与反馈</div></Item>
                </List>

                <List style={{padding:'10px 0 5px 0'}}>
                    <Item
                        thumb={require('../img/d7.gif')}
                        arrow="horizontal"
                        onClick={() => {}}
                        style={{height:60}}
                    ><div style={{color:'#a0a0a0'}}>更多</div></Item>
                </List>

                <div style={{paddingLeft:78}}>
                        <span style={{fontSize:16,marginRight:20,color:'#a0a0a0'}}>客服电话</span>
                        <span style={{fontSize:16,color:'#ce3734'}}>400-820-8888</span>
                </div>

            </div>
        )
    }
}
