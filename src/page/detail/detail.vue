<template>
 
    <div id="app" class='Container'>
 <head-top :head-title="'订单详情'" go-back='true' >
        </head-top>
        <div class="shop-list">
        <table class="table table-hover table-bordered table-shop">
            <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>图片</th>
                    <th>数量</th>
                    <!-- <th>操作</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for='shop in shop_list'>
                    <td>{{shop.fid}}</td>
                    <td>{{shop.name}}</td>
                    <td>{{shop.price}}</td> 
                    <td style='width:15%'><img src="../../images/de.png"/></td>
                    <td>{{shop.num || ''}}</td>
                    <!-- <td>
                        <div @click='add_db(shop)' class="btn btn-info">{{shop.num ? '+' : '加入购物车'}}</div>
                        <div @click='reduce_db(shop)' class="btn btn-warning" v-if='shop.num && shop.num>0'>-</div>
                    </td> -->
                </tr>
            </tbody>
        </table>
             </div>
  <div class="cart-info">
         <div style="margin-bottom: 12px;">
            <div class='item'>总数：<strong>100</strong></span></div>
            <div class='item'>总价：<strong>50</strong></span></div>
        </div>
    </div>  

    </div> 

</template>

<script>
 import headTop from '../../components/header/head'
    export default {
        name: 'shop-list',
        data() {
        return {
          shop_list: ''
        }
    },
        components: {
             headTop,
        },mounted() {

            this.shop_list=[{fid: 'v2312alue',name:'321312',price :1,num :5 }, {fid: 'v2312alue',name:'321312',price :1,num :5 }];
           // this.shop_list=[{fid: 'v2312alue',name:'321312',price :1,num :5 }]
            console.log(this.shop_list);
        }

    }

    
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
     .Container{
        padding-top: 1.95rem;
        p, span, input{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
     .cart-info{
        font-size: 20px;
        text-align: center;

        
    }.item{
            display: inline-block;
            margin-right: 20px;
        }
</style>
<style scoped lang="less">
    .table-shop{
        th,td{
            text-align: center;
        }

    }
     .Container{
        padding-top: 1.95rem;
        p, span, input{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    img{
        width: 100%;
    }
</style>
