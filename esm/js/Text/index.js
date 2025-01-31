import * as tslib_1 from "tslib";
import Control from '../Control';
import '../../css/Text.css';
var Text = /** @class */ (function (_super) {
    tslib_1.__extends(Text, _super);
    function Text(params) {
        var _this = _super.call(this) || this;
        _this._props = tslib_1.__assign({}, _this._props, {
            value: ''
        });
        if (typeof params === 'object' && params !== null && typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = tslib_1.__assign({}, _this._props, params);
        }
        _this.element = document.createElement('input');
        _this.element.className = 'kuc-input-text';
        _this.element.setAttribute('type', 'text');
        if (_this._props.value) {
            _this.element.value = _this._props.value;
        }
        return _this;
    }
    Text.prototype.render = function () {
        this.rerender();
        return _super.prototype.render.call(this);
    };
    Text.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (this._props.isDisabled) {
            this.element.setAttribute('disabled', "" + this._props.isDisabled);
        }
        else {
            this.element.removeAttribute('disabled');
        }
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('value') !== -1 && this._props.value) {
            this.element.value = this._props.value;
        }
    };
    Text.prototype.on = function (eventName, callback) {
        var _this = this;
        this.element.addEventListener(eventName, function (e) {
            if (_this._props.isDisabled)
                return;
            callback(e);
        });
    };
    Text.prototype.setValue = function (value) {
        this._props.value = value;
        this.rerender(['value']);
    };
    Text.prototype.getValue = function () {
        return this._props.value;
    };
    return Text;
}(Control));
export default Text;
