<template>
    <div class="cart-info">
        <div style="margin-bottom: 12px;">
            <div class='item'>总数：<strong>{{cartInfos.total_nums}}</strong></span></div>
            <div class='item'>总价：<strong>{{cartInfos.total_price}}</strong></span></div>
        </div>
          <div>  
                 <div class="item pull-right btn btn-info" @click='create_order'>确认订单</div>
               <div class="item pull-right btn btn-danger" @click='clear_db'>清空购物车</div>
  
          </div>
            <alertconfrim v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText" @confrim="confrim">
        </alertconfrim>
    </div>
</template>
<script>
    import InfoJs from './Info.js';
    export default InfoJs;
</script>
<style scoped lang='less'>
    .cart-info{
        font-size: 20px;
        text-align: center;

        .item{
            display: inline-block;
            margin-right: 20px;
        }
    }
</style>
