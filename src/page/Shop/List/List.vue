<template>
    <div class="shop-list">
        <table class="table table-hover table-bordered table-shop">
            <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>图片</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='(shop,index) in shop_list'>
                    <td>{{shop.fid}}</td>
                    <td>{{shop.name}}</td>
                    <td>{{shop.price}}</td> 
                    <td style='width:15%'><img src="../../../images/de.png"/></td>
                    <td>{{shop.num || ''}}</td>
                    <td>
                        <div @click='add_db(shop)' class="btn btn-info">{{shop.num ? '+' : '加入购物车'}}</div>
                        <div @click='reduce_db(shop)' class="btn btn-warning" v-if='shop.num && shop.num>0'>-</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import ListJs from './List.js';
    export default ListJs;
</script>
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
