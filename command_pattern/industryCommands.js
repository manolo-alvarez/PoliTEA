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
var GetIndustriesCommand = /** @class */ (function (_super) {
    __extends(GetIndustriesCommand, _super);
    function GetIndustriesCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetIndustriesCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "/industries";
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetIndustriesCommand;
}(Command));
var GetIndustriesByIDCommand = /** @class */ (function (_super) {
    __extends(GetIndustriesByIDCommand, _super);
    function GetIndustriesByIDCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetIndustriesByIDCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "/industries/" + id;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetIndustriesByIDCommand;
}(Command));
var GetIndustriesByIndNameCommand = /** @class */ (function (_super) {
    __extends(GetIndustriesByIndNameCommand, _super);
    function GetIndustriesByIndNameCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetIndustriesByIndNameCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "/industries/name/" + id;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetIndustriesByIndNameCommand;
}(Command));
var GetContributorsCommand = /** @class */ (function (_super) {
    __extends(GetContributorsCommand, _super);
    function GetContributorsCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetContributorsCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "/industries/members/" + id;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetContributorsCommand;
}(Command));
var GetContributorsByCommCommand = /** @class */ (function (_super) {
    __extends(GetContributorsByCommCommand, _super);
    function GetContributorsByCommCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetContributorsByCommCommand.prototype.execute = function (obj) {
        var id = obj[0];
        var comm = obj[1];
        var url_path = this.serverURL + "/industries/members/" + id + "/" + comm;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetContributorsByCommCommand;
}(Command));
var GetPoliticianVotesCommand = /** @class */ (function (_super) {
    __extends(GetPoliticianVotesCommand, _super);
    function GetPoliticianVotesCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetPoliticianVotesCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "/votes/" + id;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetPoliticianVotesCommand;
}(Command));
var GetDonorsCommand = /** @class */ (function (_super) {
    __extends(GetDonorsCommand, _super);
    function GetDonorsCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetDonorsCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "/donors/" + id;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetDonorsCommand;
}(Command));
var GetFinancesCommand = /** @class */ (function (_super) {
    __extends(GetFinancesCommand, _super);
    function GetFinancesCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetFinancesCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "/finances/" + id;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetFinancesCommand;
}(Command));
var GetAssetsCommand = /** @class */ (function (_super) {
    __extends(GetAssetsCommand, _super);
    function GetAssetsCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetAssetsCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "/assets/" + id;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetAssetsCommand;
}(Command));
var GetCIDCommand = /** @class */ (function (_super) {
    __extends(GetCIDCommand, _super);
    function GetCIDCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetCIDCommand.prototype.execute = function (id) {
        var url_path = this.serverURL + "/cid/" + id;
        return _super.prototype.doXHttp.call(this, url_path);
    };
    return GetCIDCommand;
}(Command));
