const serverFlexMixin = {
  created () {
  }
}

const clientFlexMixin = {
  mounted () {
    let screenWidth:any
    console.log(this);
    function setBodyFontSize(width: any): void {
      if (width < 750) {
        // if ((this as any).$refs.title) {
        // (this as any).$refs.title.style.fontSize = 30 * (width / 750) + 'px'
        // }
        // document.getElementsByTagName('h1')[0].style.fontSize = 30 * (width / 750) + 'px'
        document.documentElement.style.fontSize = 30 * (width / 750) + 'px'
      } else {
        // document.getElementsByTagName('h1')[0].style.fontSize = 60 + 'px'
        // if ((this as any).$refs.title) {
        // (this as any).$refs.title.style.fontSize = 60 + 'px'
        // }
        // document.getElementsByTagName('h1')[0].style.fontSize = 60 + 'px'
        document.documentElement.style.fontSize = 14 + 'px'
      }
    }
    if (!document.documentElement.style.fontSize) {
      screenWidth = document.documentElement.clientWidth
      setBodyFontSize(screenWidth)
    }
    window.onresize = () => {
      return (() => {
        screenWidth = document.documentElement.clientWidth
        setTimeout(() => {
          setBodyFontSize(screenWidth)
        }, 400)
      })()
    }
    const system: any = navigator.userAgent
    let isAndroid = system.indexOf('Android') > -1 || system.indexOf('Adr') > -1
    let isiOS = !!system.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isiOS) {
      let lastTouchEnd: any = 0
      document.addEventListener('touchstart', function (event: any) {
        if (event.touches.length > 1) {
          event.preventDefault()
        }
      })
      document.addEventListener('touchend', function (event: any) {
        var now = (new Date()).getTime()
        if (now - lastTouchEnd <= 300) {
          event.preventDefault()
        }
        lastTouchEnd = now
      }, false)

      document.addEventListener('gesturestart', function (event: any) {
        event.preventDefault()
      })
    }

  }
}

export default process.env.VUE_ENV === 'server'
  ? serverFlexMixin
  : clientFlexMixin
