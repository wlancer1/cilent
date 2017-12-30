<template>
<div class='Container'>
 <head-top :head-title="'查找'" >
        </head-top>
           <foot-guide></foot-guide> 
</div>
</template>
<script>
    import headTop from '../../components/header/head';
    import footGuide from 'src/components/footer/footGuide';
    export default {
          components: {
            headTop,
            footGuide
        }  
            

}
</script>
<style type="text/css">
 .Container{
        padding-top: 1.95rem;
        p, span, input{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
</style>