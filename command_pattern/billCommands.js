var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GetAllBills = /** @class */ (function (_super) {
    __extends(GetAllBills, _super);
    function GetAllBills() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetAllBills.prototype.execute = function (tmp) {
        var url_path = this.serverURL + "/bills/all";
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetAllBills;
}(Command));
var GetBillsByTopic = /** @class */ (function (_super) {
    __extends(GetBillsByTopic, _super);
    function GetBillsByTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetBillsByTopic.prototype.execute = function (id) {
        var url_path = this.serverURL + "/bills/topics/" + id;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetBillsByTopic;
}(Command));
var GetBillByID = /** @class */ (function (_super) {
    __extends(GetBillByID, _super);
    function GetBillByID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetBillByID.prototype.execute = function (id) {
        var url_path = this.serverURL + "/bills/ID/" + id;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetBillByID;
}(Command));
