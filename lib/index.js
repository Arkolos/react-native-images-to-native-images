"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const tslib_1 = require("tslib");
const generate_images_1 = tslib_1.__importDefault(require("./generate_images"));
var fs = require("fs");
var shell = require("shelljs");
const index = () => {
    if (fs.existsSync("./images/")) {
        shell.exec("tsc ./images/constants.ts --outDir ./node_modules/react-native-images-to-native-images/lib/commonImage/");
        var constantsFile = require("./commonImage/constants");
        (0, generate_images_1.default)(constantsFile["files"], constantsFile["appName"]);
    }
    else {
        console.log("CANNOT START");
        console.log("run generate-images-init to create 'images/' folder with 'constants' + 'types' files");
    }
};
exports.index = index;
(0, exports.index)();