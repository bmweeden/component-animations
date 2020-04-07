document.addEventListener('DOMContentLoaded', function() {
	new Vue({
		el: '#app',
		data: {
			items: 0,
			haveItems: false,
		},
		methods: {
			addItem() {
				this.items++;
				this.haveItems = true;
			},
			removeItem(itemsMinimum) {
				if (this.items > itemsMinimum) {
					this.items--;
				}
				if (this.items === itemsMinimum) {
					this.haveItems = false;
				}
			},
			resetItems() {
				this.items = 0;
				this.haveItems = false;
			},
		},
	});
});
