const pics = Array.from(document.querySelectorAll('.pics'));



function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

if (!isMobile()) {
    console.log('pc')

    pics.forEach(function (pic1) {
        pic1.addEventListener('mousedown', mousedown)

        function mousedown(e) {
            var offsetx = e.clientX - pic1.offsetLeft;
            var offsety = e.clientY - pic1.offsetTop;
            this.style.cursor = 'pointer';
            var tempIndex = this.style.zIndex
            this.style.zIndex = '1000';
            pic1.addEventListener('mousemove', mousemove);
            pic1.addEventListener('mouseup', mouseup);
            pic1.addEventListener('mouseout', mouseup);

            function mousemove(ev) {
                var x = ev.clientX - offsetx + 'px';
                var y = ev.clientY - offsety + 'px';
                this.style.top = y;
                this.style.left = x;
            }

            function mouseup() {
                pic1.removeEventListener('mousemove', mousemove)
                this.style.removeProperty('cursor')
                this.style.zIndex = tempIndex;

            }
        }
    })

} else {

    console.log('mobile')
    pics.forEach(function (pic1) {
        pic1.addEventListener('touchstart', mousedown)

        function mousedown(e) {
            var offsetx = e.clientX - pic1.offsetLeft;
            var offsety = e.clientY - pic1.offsetTop;
            this.style.cursor = 'pointer';
            var tempIndex = this.style.zIndex
            this.style.zIndex = '1000';
            pic1.addEventListener('touchmove', mousemove);
            pic1.addEventListener('touchend', mouseup);
            // pic1.addEventListener('mouseout',mouseup);

            function mousemove(ev) {
                var x = ev.clientX - offsetx + 'px';
                var y = ev.clientY - offsety + 'px';
                this.style.top = y;
                this.style.left = x;
            }

            function mouseup() {
                pic1.removeEventListener('touchmove', mousemove)
                this.style.removeProperty('cursor')
                this.style.zIndex = tempIndex;

            }
        }
    })




}



