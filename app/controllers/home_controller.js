define( function(){
    return {
        index: function(flow){
            $.log("已进入home#index action")
            //链式写法，同名cookie前者会覆盖后者的，前端只生成“aaa=2; bbb=1”
            flow.session.aaa = new Date * 1
            flow.addCookie("ddd","yyy")
        },
        tabs: function(flow){
            $.log("已进入home#tabs action")
            var view_url = $.path.join("app","views", "home","tabs.html" );
            flow.fire("get_view", view_url, flow.req.url )
        }
    }
});

