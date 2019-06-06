
/*

const flex = {
  install: (vue:any) => {
    Vue.mixin({
      created() {
        //this.loading = loading;
      },
      methods: {
        greetingFns: function () {
          console.log('greeting');
        }
      }
    })

    Vue.prototype.$errorAlert = (options:any) => {
      let instance :any;
      if (!instance) {
        const LoadingPlugin = Vue.extend(popupForDetermine);
        instance = new LoadingPlugin({
          el: document.createElement('div')
        });
        document.body.appendChild(instance.$el);
        // instance.$mount('#id')
      }
      instance.show = false;
      Object.assign(instance.options, options);
      return new Promise((resolve, reject) => {
        instance.show = true;
        let successBtn = instance.successBtn;
        let cancelBtn = instance.cancelBtn;
        instance.successBtn = () => {
          successBtn();
          resolve('confirm');
        }
        instance.cancelBtn = () => {
          reject();
          cancelBtn();
        }
      });
    };
  },

}

export default flex;
*/
