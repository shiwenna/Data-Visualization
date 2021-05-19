<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-06-24 10:18:28
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-28 13:39:38
--> 

# BaseBorderB

## Description

基础边框-大

## Params

flex：弹性布局

> flex布局参数设置具体参照[flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## Preview

![BaseBorderB-1](../assets/BaseBorderB-1.png)

## Usage

```
<BaseBorderB flex="2">
  <template v-slot:content>
  
  </template>
</BaseBorderB>
```

# BaseBorderS

## Description

基础边框-小

## Params

* flex：弹性布局
* title：标题

> flex布局参数设置具体参照[flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## Preview

![BaseBorderB-1](../assets/BaseBorderS-1.png)

## Usage

```
<BaseBorderS flex="1" :title='"老年人自理能力占比"'>
  <template v-slot:content> 
      
  </template> 
</BaseBorderS>
```


# BaseDataBox

## Description

数据展示框 

## Params

* title：标题
* num：数据（单位：万）
* top：距离上边位移（vw)
* left：距离左边位移（vw)


## Preview

![BaseDataBox-1](../assets/BaseDataBox-1.png)

## Usage

```
<BaseDataBox top='4' left='0' :title='"老年人口"' :num="'12.9'">
</BaseDataBox>
```



# BaseDataFloatO

## Description

数据展示图1 

## Params

* listData：数据列表(数组)
* flex：flex布局

## Preview

![BaseDataFloatO-1](../assets/BaseDataFloatO-1.png)

## Usage

```
<BaseDataFloatO flex="1" :listData="[{
          name: '养老设施覆盖率',
          num: '75',
          unit: '%'
        }]">
</BaseDataFloatO>
```


# BaseHeader

## Description

Header 头部 

## Params

* value：默认选中项名称
* subTitle：标题项列表

### Example
```
subTitle:[{
          name: "老年人整体数据",
          index: 0,
          path: '/basisdata' //router路径
        },
        {
          name: "西海岸新区养老",
          index: 2,
          isTitle: true  //是否是主标题
        }]
```
## Preview

![BaseHeader-1](../assets/BaseHeader-1.png)

## Usage

```
<BaseHeader :value="'老年人整体数据'" :subTitle="subTitle"></BaseHeader>
```



# BaseListSwiper

## Description

列表轮播

## Params

* listData：数据列表
* flex：flex布局

### Example
```
listData:[{
          name: '王富贵',
          addr: '李沧去金水路128号社区街道',
          title: '服务内容服务内容服务内容服务内容',
          person: '丁春蕾',
          time: '2020-06-06',
          status: '1',
        }]
```
## Preview

![BaseListSwiper-1](../assets/BaseListSwiper-1.png)

## Usage

```
<BaseListSwiper :listData='listData'></BaseListSwiper>
```