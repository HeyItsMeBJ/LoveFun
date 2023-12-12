const pics = Array.from(document.querySelectorAll('.pics'));

pics.forEach(function (pic1) {
    pic1.addEventListener('mousedown', mousedown)

    function mousedown(e) {
        var offsetx = e.clientX - pic1.offsetLeft;
        var offsety = e.clientY - pic1.offsetTop;
        this.style.cursor = 'pointer';
        var tempIndex=this.style.zIndex
        this.style.zIndex='1000';
        pic1.addEventListener('mousemove', mousemove);
        pic1.addEventListener('mouseup', mouseup);
        pic1.addEventListener('mouseout',mouseup);

        function mousemove(ev) {
            var x = ev.clientX - offsetx + 'px';
            var y = ev.clientY - offsety + 'px';
            this.style.top = y;
            this.style.left = x;
        }

        function mouseup() {
            pic1.removeEventListener('mousemove', mousemove)
            this.style.removeProperty('cursor')
            this.style.zIndex=tempIndex;

        }
    }
})

