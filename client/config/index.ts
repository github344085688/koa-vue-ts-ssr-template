const serverFlexMixin = {
  created () {
  }
}

const clientFlexMixin = {
  mounted () {
    let screenWidth:any
    function setBodyFontSize (width: any) {
      if (width < 750) {
        document.body.style.fontSize = 30 * (width / 750) + 'px'
      } else {
        document.body.style.fontSize = 14 + 'px'
      }
    }
    if (!document.body.style.fontSize) {
      screenWidth = document.body.clientWidth
      setBodyFontSize(screenWidth)
    }
    window.onresize = () => {
      return (() => {
        screenWidth = document.body.clientWidth
        setTimeout(() => {
          setBodyFontSize(screenWidth)
        }, 400)
      })()
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverFlexMixin
  : clientFlexMixin
