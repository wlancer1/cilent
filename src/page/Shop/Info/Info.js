import alertconfrim from '../../../components/common/alertconfrim'
import {sendorder} from '../../../service/getdata'
import {getStore} from '../../../config/mUtils'
module.exports = {
    name: 'shop-info',
     data(){
            return {
          
                showAlert: false, //显示提示组件
                alertText: null, //提示的内容
                backmsg:null,
            }
        },
        components: {
            alertconfrim,
        },
    computed: {
        cartInfos() {
            return this.$store.getters.getInfos;
        }
    }, 
    methods: {
        clear_db() {
            this.$store.dispatch('clear_local');
        },
        create_order(){
                this.showAlert=true;
                this.alertText='是否确认订单？？';


        }, closeTip(){
            // console.log(1231);
                this.showAlert = false;
            },async confrim(){
                    var data=this.$store.getters.getCartList;
                if (data==0) {
                    console.log('order is null ');
                // this.showAlert=false; 
                   this.alertText='订单为空！！';
                   return;  
                     // this.showAlert=true;
                }else{
                    var uid=getStore('user_id');
                        this.backmsg=await sendorder(data,uid);
                        console.log(this.backmsg);
                }
                if(this.backmsg!=null){
                    this.showAlert=false;
                    alert('订单确认成功！单号为'+backmsg.msg);
               
                }

                // console.log(12323);
                
            }
    }
}