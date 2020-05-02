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
var GetEventIDCommand = /** @class */ (function (_super) {
    __extends(GetEventIDCommand, _super);
    function GetEventIDCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetEventIDCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "events/" + id;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetEventIDCommand;
}(Command));
var GetEventZipCommand = /** @class */ (function (_super) {
    __extends(GetEventZipCommand, _super);
    function GetEventZipCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetEventZipCommand.prototype.execute = function (zip) {
        var url_path = this.serverURL + "events/zip/" + zip;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetEventZipCommand;
}(Command));
var GetEventCityCommand = /** @class */ (function (_super) {
    __extends(GetEventCityCommand, _super);
    function GetEventCityCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetEventCityCommand.prototype.execute = function (city) {
        city = _super.prototype.titleCase.call(this, city);
        var url_path = this.serverURL + "events/city/" + city;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetEventCityCommand;
}(Command));
var GetEventStateCommand = /** @class */ (function (_super) {
    __extends(GetEventStateCommand, _super);
    function GetEventStateCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetEventStateCommand.prototype.execute = function (state) {
        state = _super.prototype.titleCase.call(this, state);
        var url_path = this.serverURL + "events/state/" + state;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetEventStateCommand;
}(Command));
var GetEventStateAbbrCommand = /** @class */ (function (_super) {
    __extends(GetEventStateAbbrCommand, _super);
    function GetEventStateAbbrCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetEventStateAbbrCommand.prototype.execute = function (abbr) {
        abbr = abbr.toUpperCase();
        var url_path = this.serverURL + "events/stateAbbr/" + abbr;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetEventStateAbbrCommand;
}(Command));
