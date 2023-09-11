"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMarkdownlintResults = void 0;
function formatMarkdownlintResults(results, quiet) {
    var parsedResults = [];
    var _loop_1 = function (file) {
        if (!Object.prototype.hasOwnProperty.call(results, file) || quiet)
            return "continue";
        var warningCount = 0;
        var fixableWarningCount = 0;
        var messages = results[file].map(function (_a) {
            var lineNumber = _a.lineNumber, ruleNames = _a.ruleNames, ruleDescription = _a.ruleDescription, ruleInformation = _a.ruleInformation, errorRange = _a.errorRange, fixInfo = _a.fixInfo;
            if (fixInfo)
                fixableWarningCount++;
            warningCount++;
            return {
                line: lineNumber,
                column: Array.isArray(errorRange) ? errorRange[0] : 1,
                rule: ruleNames[0],
                url: ruleInformation,
                message: ruleDescription,
                errored: false,
            };
        });
        parsedResults.push({
            filePath: file,
            messages: messages,
            errorCount: 0,
            warningCount: warningCount,
            fixableErrorCount: 0,
            fixableWarningCount: fixableWarningCount,
        });
    };
    for (var file in results) {
        _loop_1(file);
    }
    return parsedResults;
}
exports.formatMarkdownlintResults = formatMarkdownlintResults;
