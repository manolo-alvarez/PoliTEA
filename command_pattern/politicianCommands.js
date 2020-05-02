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
var GetAllSenatorsCommand = /** @class */ (function (_super) {
    __extends(GetAllSenatorsCommand, _super);
    function GetAllSenatorsCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetAllSenatorsCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "/politicians/Senators";
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetAllSenatorsCommand;
}(Command));
var GetAllCongressmanCommand = /** @class */ (function (_super) {
    __extends(GetAllCongressmanCommand, _super);
    function GetAllCongressmanCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetAllCongressmanCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "/politicians/Congressman";
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetAllCongressmanCommand;
}(Command));
var GetPoliticianByIDCommand = /** @class */ (function (_super) {
    __extends(GetPoliticianByIDCommand, _super);
    function GetPoliticianByIDCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetPoliticianByIDCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "/politicians/" + id;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetPoliticianByIDCommand;
}(Command));
var GetPoliticianIDCommand = /** @class */ (function (_super) {
    __extends(GetPoliticianIDCommand, _super);
    function GetPoliticianIDCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetPoliticianIDCommand.prototype.execute = function (obj) {
        var name = obj[0];
        var state = obj[1];
        var url_path = this.serverURL + "/politicians/get_id/" + name + "/" + state;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetPoliticianIDCommand;
}(Command));
var GetPoliticianByNameStateCommand = /** @class */ (function (_super) {
    __extends(GetPoliticianByNameStateCommand, _super);
    function GetPoliticianByNameStateCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetPoliticianByNameStateCommand.prototype.execute = function (obj) {
        var name = obj[0];
        var state = obj[1];
        var url_path = this.serverURL + "/politicians/" + name + "/" + state;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetPoliticianByNameStateCommand;
}(Command));
