var showdate    = "yes" 
if (showdate == "yes") {
document.write('<div id="date-location">');
var d=new Date();
var weekday=new Array('Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi');
var monthname=new Array('Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık');
document.write('<span class="date-font">' + weekday[d.getDay()] + ' ');
document.write(monthname[d.getMonth()] + ' ');
document.write(d.getDate() + '. ');
document.write(d.getFullYear())
document.write('<br></span>')
document.write('</div>');
}       
var d = new Date()
var time = d.getHours()
 if (time<10){
                 document.write("<cart>Günaydın</cart>");
                 document.write("<br>");
             }                        
 else if (time>=10 && time<16){
                 document.write("<cart>İyi Günler</cart>");
             }
 else{
                 document.write("<cart>İyi Akşamlar</cart>");
             }
             $(function(){
                typeof $.fn.paraceviriciWidget == "function" && 
                $("#W3919").paraceviriciWidget({
                    widget:"boxline",
                    wData:{
                        category:0,
                        currency:"USD-EUR-GBP"
                    },
                    wSize:{
                        wWidth:200,
                        wHeight:20
                    }
                });
                });
                