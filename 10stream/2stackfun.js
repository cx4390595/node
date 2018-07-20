function fun1() {
    var a1 = 1;
    console.log('fun1',a1);
    function fun2() {
        var a2 = 2;
        console.log('fun2',a1,a2);
        var a3= 3
        function fun3() {
            console.log('fun3',a1,a2,a3)
        }
        fun3();
    }
    fun2();
    console.log(this,"over")
}
fun1();