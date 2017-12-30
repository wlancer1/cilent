<template>
 
    <div id="app" class='Container'>
 <head-top :head-title="'商品信息'" >
        </head-top>
        <shop-list></shop-list>
        <shop-cart></shop-cart>
        <shop-info></shop-info>
   <foot-guide></foot-guide>   
    </div> 

</template>

<script>
   import Resource from './page/Resource';
    import {Info,List,Cart} from './page/Shop/';
import footGuide from 'src/components/footer/footGuide'
 import headTop from 'components/header/head'
    export default {
        name: 'app',
        components: {
            ShopList:List,
            ShopInfo:Info,
            ShopCart:Cart,
            footGuide,
             headTop,


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
</style>
