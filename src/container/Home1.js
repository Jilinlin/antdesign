import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,Carousel } from 'antd-mobile';

const tabs = [
    { title: '推荐' },
    { title: '家具' },
    { title: '餐厨' },
    { title: '床上用品' }
  ];
  

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'yellow',color:'#000'}}
                    // mode="light"
                    // 返回箭头
                    // icon={<Icon type="left" />}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        // <Icon key="1" type="ellipsis" />,
                    ]}
                >桔家</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}//默认页
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    {/* display: 'flex', alignItems: 'center', justifyContent: 'center', 弹性盒布局 */}
                    <div style={{height: '150px'}}>
                        <Carousel
                            autoplay={false}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                        >
                        {[1,2,3].map(val => (
                         <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: 300 }}
                        >
                            {val}
                            {val}
                            {val}
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });//根据图片的高度自适应
                                }}
                            />
                         </a>
                        ))}
                         </Carousel>
                    </div>
                    <div style={{height: '150px'}}>
                        Content of second tab
                    </div>
                    <div style={{height: '150px'}}>
                        Content of third tab
                    </div>
                    <div style={{height: '150px'}}>
                        Content of forth tab
                    </div>
                </Tabs>
            </div>
        )
    }
}
