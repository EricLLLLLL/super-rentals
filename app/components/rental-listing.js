import Component from '@ember/component';

export default Component.extend({
    isWide: false,
    actions: {
        toggleImageSize() {
            //toggleProperty方法直接把isShowingBody设置为相反值
            //toggleProperty方法详情：http://devdocs.io/ember/classes/ember.observable#method_toggleProperty
            this.toggleProperty('isWide');
        }
    }
});
