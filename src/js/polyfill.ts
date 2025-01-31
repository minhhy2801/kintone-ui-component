(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty('append')) {
            return;
        }
        Object.defineProperty(item, 'append', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function append() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();
                
                argArr.forEach(function (argItem: any) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });
                
                this.appendChild(docFrag);
            }
        });
        if (item.hasOwnProperty('remove')) {
            return;
        }
        Object.defineProperty(item, 'remove', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function remove() {
              if (this.parentNode !== null)
                this.parentNode.removeChild(this);
            }
        });
        if (item.hasOwnProperty('prepend')) {
            return;
        }
        Object.defineProperty(item, 'prepend', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function prepend() {
              var argArr = Array.prototype.slice.call(arguments),
                docFrag = document.createDocumentFragment();
              
              argArr.forEach(function (argItem: any) {
                var isNode = argItem instanceof Node;
                docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
              });
              
              this.insertBefore(docFrag, this.firstChild);
            }
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);