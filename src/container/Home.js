import React, { Component } from 'react'
import { NavBar,Carousel,SearchBar,Grid,WhiteSpace,ListView,Flex} from 'antd-mobile';
import '../index.css'

// 宫格显示图片
const data = Array.from(new Array(12)).map((_val, i) => ({
    icon:require(`../img/g_${i}.gif`),
  }));

// Flex中的PlaceHolder
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps} >
        <img src={require(`../img/02.gif`)} style={{width:'100%',height:130}}/>
    </div>
);

// 列表数据内容
const data1 = [
    {
        img: require(`../img/05.gif`),//鲜芋仙
        img2: require(`../img/08.gif`),//星星
        img3: require(`../img/13.gif`),//新
        img4: require(`../img/15.gif`),//减
       des: '鲜芋仙  （海悦天地店）',
       des2: '月售  226份',
       des3: '起送   ¥20| 配送   ¥4',
       des4: '新用户立减19元（其他支付立减8元）',
       des5: '满20减4元，满30减6元，满50减9元',
    }
  ];

const separator = (sectionID, rowID) => (
    <div
      key={`${sectionID}-${rowID}`}
      style={{
        backgroundColor: '#F5F5F9',
        height: 8,
        borderTop: '1px solid #ECECED',
        borderBottom: '1px solid #ECECED',
      }}
    />
  );
  let index = data1.length - 1;

  const row = (rowData, sectionID, rowID) => {
    if (index < 0) {
      index = data1.length - 1;
    }
    const obj = data1[index--];
    return (
      <div key={rowID} style={{ padding: '0 15px' }}>

        <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
          {/* 图片 */}
          {/* <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" /> */}



          <div style={{ lineHeight: 1.2 }}>
            <div>
                <img style={{ height: '64px', marginRight: '15px',float:"left",width:105,height:95}} src={obj.img} alt="" />
                <div style={{ marginBottom: '8px',fontSize:20}}>{obj.des}</div>
            </div>
            <div>
                <img style={{ marginBottom: '5px',width:100,float:"left"}} src={obj.img2} alt="" />
                <div style={{ marginBottom: '10px'}}>{obj.des2}</div>
            </div>
            <div style={{ marginBottom: '4px'}}>{obj.des3}</div>
            <div style={{width:20,height:25}}></div>
            <div>
                <img style={{ marginBottom: '2px',width:30,height:25,float:"left"}} src={obj.img3} alt="" />
                <div style={{ marginBottom: '2px',width:360}}>{obj.des4}</div>
                <div style={{width:20,height:20}}></div>
            </div>
            
            <div>
                <img style={{ marginBottom: 0,width:30,height:25,float:"left"}} src={obj.img4} alt="" />
                <div style={{ marginBottom: 0}}>{obj.des5}</div>
            </div>
            
          </div>



        </div>

      </div>
    );
  };


const NUM_ROWS = 3;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}


export default class Home extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
    
        this.state = {
          dataSource,
          isLoading: true,
        };
    }
    componentDidMount() {
        setTimeout(() => {
          this.rData = genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        }, 600);
    }
    
    //   当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用
    onEndReached = (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
          this.rData = { ...this.rData, ...genData(++pageIndex) };
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        }, 1000);
    }
    
    
    render() {
        return (
            <div>
                {/* 导航 */}

                <NavBar
                    style={{backgroundColor:'#bc0400',color:'white'}}
                    leftContent={[
                         <div style={{marginRight:5}}>石家庄</div>,
                         <i style={{fontSize:20}} className='iconfont icon-xiala'></i>
                    ]}
                    rightContent={[
                        <i style={{fontSize:22}} className='iconfont icon-erweima'></i>,
                        <div style={{marginRight:8}}></div>,
                        <i style={{fontSize:22}} className='iconfont icon-tishi'></i>,
                    ]}
                >                    
                    <SearchBar placeholder="搜索商家、品类或商圈" maxLength={18} style={{width:185,background:"none",margin:"0 0 0 10px"}} />
                </NavBar>


                {/* 轮播1 */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {[1,2,3,4,5].map(val => (
                        <div
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: 175 }}
                        >
                            <img
                                src={require(`../img/${val}.jpg`)}
                                alt=""
                                style={{ width: '100%',height:'100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </div>
                    ))}
                </Carousel>

                {/* 宫格 */}

                <Grid data={data}
                    columnNum={5}
                    isCarousel
                    renderItem={dataItem => (
                        <div style={{marginTop:-8}}>
                            <img src={dataItem.icon} style={{ width: '62px', height: '62px' }} alt="" />
                        </div>
                    )}
                />

                {/* 分格 */}

                <WhiteSpace size="sm" />

                <Flex align="wrap">
                    <PlaceHolder className="inline" />
                </Flex>

                {/* 导航 */}

                <NavBar
                    style={{backgroundColor:'#ebe9e9',color:'#707070'}}
                    leftContent={[
                         <div style={{marginRight:5}}>商家分类</div>,
                         <i style={{fontSize:15}} className='iconfont icon-xiala'></i>
                    ]} 
                    rightContent={[
                        <div style={{marginRight:5}}>排序</div>,
                        <i style={{fontSize:15}} className='iconfont icon-xiala'></i>
                    ]}
                >                    
                </NavBar>

                {/* 列表 */}
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // 页脚
                    renderFooter={() => (
                        <div style={{ padding: 30, textAlign: 'center' }}>
                            {this.state.isLoading ? 'Loading...' : 'Loaded'}
                        </div>
                    )}
                    renderRow={row}
                    renderSeparator={separator}
                    className="am-list"
                    pageSize={4}
                    useBodyScroll
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                />
            
            </div>
        )
    }
}
