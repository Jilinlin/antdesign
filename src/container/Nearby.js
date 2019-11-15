import React, { Component } from 'react'
import { NavBar,SearchBar,ListView} from 'antd-mobile';
import '../index.css'

// 列表数据内容
const data = [
    {
        img: require(`../img/mdl.gif`),
        img2: require(`../img/sx.gif`),
        des: '麦当劳餐厅',
        des3: '人均¥55      起送¥50',
        des4: '送餐时间：10:00-20:00',
    },
    {
        img: require(`../img/bsk.gif`),
        img2: require(`../img/sx.gif`),
        des: '必胜客欢乐餐厅',
        des3: '人均¥55      起送¥50',
        des4: '送餐时间：10:00-20:00',
    },{
        img: require(`../img/xbk.gif`),
        img2: require(`../img/sx.gif`),
        des: '星巴克咖啡厅',
        des3: '人均¥55      起送¥50',
        des4: '送餐时间：10:00-20:00',
    },
    {
        img: require(`../img/kdj.gif`),
        img2: require(`../img/sx.gif`),
        des: '肯德基餐厅',
        des3: '人均¥55      起送¥50',
        des4: '送餐时间：10:00-20:00',
    },
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
  let index = data.length - 1;

  const row = (rowData, sectionID, rowID) => {
    if (index < 0) {
      index = data.length - 1;
    }
    const obj = data[index--];
    return (
      <div key={rowID} style={{ padding: '0 15px' }}>

        <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
 

          <div>
            <div style={{width:280}}>
                {/* 图标 */}
                <img style={{ height: '64px', marginRight: '15px',marginTop:'5px',float:"left",width:120,height:110}} src={obj.img} alt="" />           
            </div>
            {/* 标题 */}
            <div style={{fontSize:20}}>{obj.des}</div>
            <div>
                {/* 星星 */}
                <img style={{ marginBottom: '5px',marginRight:'40px',width:120,float:"left"}} src={obj.img2} alt="" />            </div>
            <br/>
            <div style={{marginBottom: '4px',width:20,height:6}}>        </div>
            <div style={{ marginBottom: '4px'}}>{obj.des3}</div>
            <div style={{ width:'345px'}}>{obj.des4}</div>


            
            
          </div>



        </div>

      </div>
    );
  };


const NUM_ROWS = 7;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}


export default class Nearby extends Component {
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
                         <div style={{marginRight:5,width:70}}>石家庄</div>,
                         <i style={{fontSize:20}} className='iconfont icon-xiala'></i>
                    ]}
                >                    
                    <SearchBar placeholder="找附近的吃喝玩乐" maxLength={18} style={{width:240,background:"none",margin:"0 0 0 10px"}} />
                </NavBar>

                {/* 下拉菜单 */}
                <NavBar
                    style={{backgroundColor:'white',color:'#282426'}}
                    leftContent={[
                         <div style={{marginRight:5,width:65}}>1000m</div>,
                         <i style={{fontSize:20}} className='iconfont icon-xiasanjiao'></i>
                    ]}
                    rightContent={[
                        <div style={{marginRight:5,width:65}}>默认排序</div>,
                        <i style={{fontSize:20}} className='iconfont icon-xiasanjiao'></i>
                   ]}
                >   
                        <div style={{marginRight:5,width:65,fontSize:16}}>全部餐厅</div>
                        <i style={{fontSize:20}} className='iconfont icon-xiasanjiao'></i>
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
