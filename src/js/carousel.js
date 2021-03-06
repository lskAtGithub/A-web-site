_Carousel = (function(){
    function Carousel(ct){
        this.ct = $(ct)
        this.init()
        this.bind()
    }
    Carousel.prototype = {
        init:function(){
            this.$link = this.ct.find(".link>li")
            this.$imgCt = this.ct.find(".img-ct")
            this.$img = this.ct.find(".img-ct>li")
            this.imgWidth = this.$img.width()
            this.imgCount = this.$img.length
            this.$pre = this.ct.find(".pre")
            this.$next = this.ct.find(".next")
            this.pageIndex = 0
            this.clock = false
            this.$imgCt.css({width:(this.imgCount + 2) * this.imgWidth})
            this.$imgCt.append(this.$img.first().clone())
            this.$imgCt.prepend(this.$img.last().clone())
            this.$imgCt.css({left:-this.imgWidth})
        },
        bind:function(){
            var _this = this
            //this.autoPlay()
            this.$pre.click(function(){
                _this.prePlay(1)
            })
            this.$next.click(function(){
                _this.nextPlay(1)
            })
            this.$link.click(function(){
                var index = $(this).index()
                if(index > _this.pageIndex){
                    _this.nextPlay(index - _this.pageIndex)
                }else if(index < _this.pageIndex){
                    _this.prePlay(_this.pageIndex - index)
                }
            })
            _this.autoPlay()
        },
        autoPlay:function(){
            var _this = this
            _this.clock = setInterval(function(){
                _this.clock = false
                _this.nextPlay(1)
            },2500)
        },
        nextPlay:function(len){
            var _this = this
            if(_this.clock) return;
            _this.clock = true
            _this.$imgCt.animate({
                left:"-=" + _this.imgWidth*len
            },function(){
                _this.pageIndex += len
                if(_this.pageIndex == _this.imgCount){
                    _this.pageIndex = 0
                    _this.$imgCt.css({left:-_this.imgWidth})
                }
                _this.clock = false
                _this.indexPlay()
            })       
        },
        prePlay:function(len){
            var _this = this
            if( _this.clock) return;
            _this.clock = true
            _this.$imgCt.animate({
                left:"+=" + _this.imgWidth * len
            },function(){
                if(_this.pageIndex == 0){
                _this.pageIndex = 4
                _this.$imgCt.css({left:- _this.imgCount * _this.imgWidth})
            }
            _this.pageIndex -= len
            _this.clock = false
            _this.indexPlay()
            })
        },
        indexPlay:function(){
            this.$link.removeClass("active")
                .eq(this.pageIndex)
                .addClass("active")
        }
    }
    return {
        init:function($ct){
            $ct.each(function(idx,target){
                new Carousel($(target))
            })
        }
    }
})()
//new Carousel($(".carousel")[0])
//new Carousel($(".carousel")[1])


module.exports = _Carousel;

