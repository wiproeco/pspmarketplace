"use strict";
var config = (function () {
    function config() {
        this.host = process.env.HOST || "https://pspmarketplace.documents.azure.com:443/";
        this.authKey = process.env.AUTH_KEY || "Cs2Ni969kg9H7S7SP9QjFbYt1IVrEVyRIYUWPxhLkFo8VVcJujjEmz1mF7nTwbQQVuSB4PHpOACvh4ODzaneew==";
        this.databaseId = "psp";
        this.collectionId = "Upload";
    }
    return config;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = config;
//# sourceMappingURL=config.js.map